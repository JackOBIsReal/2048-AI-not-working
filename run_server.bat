@echo off
start /min call D:\PHPServer\startwindows.bat
start /min call D:\PHPServer\clonedocuments.bat
php-7.2.4-Win32-VC15-x64\php.exe -S 0.0.0.0:8000