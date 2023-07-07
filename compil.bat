node compile/index.js %1

IF ERRORLEVEL 1 GOTO koniec

cd build

rc.exe rsrc.rc

ml64.exe /c %1.app.asm

link.exe /SUBSYSTEM:CONSOLE /MACHINE:X64 /ENTRY:entry_point /nologo /LARGEADDRESSAWARE %1.app.obj rsrc.res

cd ..

IF ERRORLEVEL 1 GOTO koniec


del dist\%1.exe


copy .\build\%1.app.exe .\dist\%1.exe

del .\build\%1.app.exe
del .\build\%1.app.obj



cd dist
%1.exe
cd ..





:koniec