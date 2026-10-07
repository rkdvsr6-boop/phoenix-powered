$port = 8080
$baseDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
if (-not $baseDir) { $baseDir = (Get-Location).Path }

$localIP = "127.0.0.1"
try {
    $ipObj = Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue |
        Where-Object { $_.InterfaceAlias -notmatch 'Loopback' -and $_.IPAddress -notmatch '^169\.254' } |
        Select-Object -First 1
    if ($ipObj) { $localIP = $ipObj.IPAddress }
} catch {
    $localIP = "127.0.0.1"
}

$listener = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Any, $port)
try {
    $listener.Start()
} catch {
    Write-Host "Port $port error: $($_.Exception.Message)"
    exit 1
}

Write-Host "=========================================================="
Write-Host " CAMPUSPULSE MULTI-DEVICE SERVER IS LIVE ON 0.0.0.0"
Write-Host "=========================================================="
Write-Host " Computer URL:  http://localhost:$port/"
Write-Host " Phone / Wi-Fi: http://${localIP}:$port/"
Write-Host "=========================================================="

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".svg"  = "image/svg+xml"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".ico"  = "image/x-icon"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
    ".ttf"  = "font/ttf"
}

while ($true) {
    try {
        $client = $listener.AcceptTcpClient()
        $stream = $client.GetStream()
        $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8)

        $requestLine = $reader.ReadLine()
        if (-not $requestLine) {
            $client.Close()
            continue
        }

        $parts = $requestLine.Split(' ')
        $method = $parts[0]
        $rawUrl = if ($parts.Length -gt 1) { $parts[1] } else { "/" }

        while ($true) {
            $line = $reader.ReadLine()
            if ([string]::IsNullOrEmpty($line)) { break }
        }

        if ($method -eq "OPTIONS") {
            $respHdr = "HTTP/1.1 204 No Content`r`nAccess-Control-Allow-Origin: *`r`nAccess-Control-Allow-Methods: GET, POST, OPTIONS`r`nAccess-Control-Allow-Headers: *`r`nConnection: close`r`n`r`n"
            $hdrBytes = [System.Text.Encoding]::UTF8.GetBytes($respHdr)
            $stream.Write($hdrBytes, 0, $hdrBytes.Length)
            $client.Close()
            continue
        }

        $cleanPath = $rawUrl.Split('?')[0].TrimStart('/')
        if ([string]::IsNullOrEmpty($cleanPath)) {
            $cleanPath = "index.html"
        }
        $cleanPath = [System.Uri]::UnescapeDataString($cleanPath)

        $targetFile = [System.IO.Path]::GetFullPath((Join-Path $baseDir $cleanPath))

        if (-not $targetFile.StartsWith($baseDir, [System.StringComparison]::OrdinalIgnoreCase)) {
            $body = [System.Text.Encoding]::UTF8.GetBytes("Forbidden")
            $respHdr = "HTTP/1.1 403 Forbidden`r`nContent-Length: " + $body.Length + "`r`nConnection: close`r`n`r`n"
            $hdrBytes = [System.Text.Encoding]::UTF8.GetBytes($respHdr)
            $stream.Write($hdrBytes, 0, $hdrBytes.Length)
            $stream.Write($body, 0, $body.Length)
            $client.Close()
            continue
        }

        if (Test-Path $targetFile -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($targetFile).ToLower()
            $cType = $mimeTypes[$ext]
            if (-not $cType) { $cType = "application/octet-stream" }

            $fileBytes = [System.IO.File]::ReadAllBytes($targetFile)
            $respHdr = "HTTP/1.1 200 OK`r`nContent-Type: " + $cType + "`r`nContent-Length: " + $fileBytes.Length + "`r`nAccess-Control-Allow-Origin: *`r`nCache-Control: no-cache`r`nConnection: close`r`n`r`n"
            $hdrBytes = [System.Text.Encoding]::UTF8.GetBytes($respHdr)
            $stream.Write($hdrBytes, 0, $hdrBytes.Length)
            if ($method -ne "HEAD") {
                $stream.Write($fileBytes, 0, $fileBytes.Length)
            }
        } else {
            $body = [System.Text.Encoding]::UTF8.GetBytes("File Not Found: " + $cleanPath)
            $respHdr = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain; charset=utf-8`r`nContent-Length: " + $body.Length + "`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
            $hdrBytes = [System.Text.Encoding]::UTF8.GetBytes($respHdr)
            $stream.Write($hdrBytes, 0, $hdrBytes.Length)
            if ($method -ne "HEAD") {
                $stream.Write($body, 0, $body.Length)
            }
        }

        $stream.Flush()
        $client.Close()
    } catch {
        # Loop continues
    }
}
