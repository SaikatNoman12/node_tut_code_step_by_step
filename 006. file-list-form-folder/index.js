/** 
 * NON-GLOBAL MODULE DECLARATION
 * Get file system.
 * Get Path
 * Join Folders in Path.
*/
const fs = require('fs');
const pathGet = require('path');

const dirPath = pathGet.join(__dirname, 'folders');

/** 
 * CREATING FILES
 * Use for loop.
*/
for(let i = 1; i < 5; i++ ){
    fs.writeFileSync(`${dirPath}/file.${i}.txt`, `Hello Abdullah Al Nomaan ${i}`);
}

/** 
 * GET FOLDERS ALL FILES NAME
 * Use file system readdir()
*/
fs.readdir(dirPath, (err, files) => {
    if(files){
        files.forEach(file => {
            if(file){
                console.log(file);
            }
        });
    }
    else{
        console.error(err);
    }
});