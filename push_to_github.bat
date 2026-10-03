@echo off
title Day du an Portfolio len GitHub
cd /d "E:\Portfolio"
echo ========================================================
echo   DAY DU AN PORTFOLIO LEN GITHUB: k632411410162-hub
echo ========================================================
echo.
echo Git Credential Manager se mo trinh duyet de ban dang nhap
echo tai khoan: k632411410162-hub
echo.
git push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo ========================================================
    echo   DA DAY DU AN LEN GITHUB THANH CONG!
    echo   Xem tai: https://github.com/k632411410162-hub/PorfolioCV
    echo ========================================================
) else (
    echo Co loi xay ra khi push. Vui long kiem tra lai quyen hoac dang nhap.
)
pause
