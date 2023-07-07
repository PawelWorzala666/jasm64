const tar = require("tar")
const fs = require("fs")

tar.c(
  {
    gzip: true
  },
  ["./source/"]
).pipe(fs.createWriteStream('./.archives/sources-'+GetTimestamp()+'.tar.gz'))


function GetTimestamp(){
    return Math.floor((new Date()).getTime() / 1000)
}