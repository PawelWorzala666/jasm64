cd build

\masm64\bin64\rc.exe rsrc.rc

\masm64\bin64\ml64.exe /c %1.app.asm

\masm64\bin64\link.exe /SUBSYSTEM:CONSOLE /MACHINE:X64 /ENTRY:entry_point /nologo /LARGEADDRESSAWARE %1.app.obj rsrc.res

cd ..

IF ERRORLEVEL 1 GOTO koniec


:koniec