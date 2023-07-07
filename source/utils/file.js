
    //:app:cmd

.daTA?
    //hfile1 dq ?
    _fsize1 dq ?

    class cFILE{
        constructor(){
           this.handle = 0
           this.fs_ize = 0
        }
        ReadFile(file1, buffor1){

            //this.handle = CreateFile(file1, GENERIC_READ or GENERIC_WRITE,0,0,OPEN_EXISTING,FILE_ATTRIBUTE_ARCHIVE, 0)
            this.handle = CreateFile(file1, GENERIC_READ,0,0,OPEN_EXISTING,FILE_ATTRIBUTE_NORMAL, 0)
            //mov this.handle,rax
                //conout('CreateFile...',str$\\(\\hfile1),EOL)
                
                _fsize1 = GetFileSize(this.handle, 0)
                //_fsize1 = _fsize1

                //conout('GetFilefsize...',str$\\(\\_fsize1),EOL)
                printf('_fsize1... %i %s',_fsize1,EOL)
                //add _fsize1,1
                //buffor1 = GlobalAlloc(GMEM_ZEROINIT or GMEM_FIXED,_fsize1)
                
                //mov rax, _fsize1

                buffor1 = alloc(_fsize1)

                //conout('alloc...',EOL)
                
                ReadFile(this.handle, buffor1, _fsize1, 0, 0)

                //printf('buffor1... %s %s',buffor1,EOL)

                CloseHandle(this.handle)
        }
        GetSize(){
            return _fsize1
        }
    }
.data
    var file = new cFILE()

