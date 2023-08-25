
/** 
 * GET NON-GLOBAL MODULES 
 * Get file system.
 * Get path.
 * Connect path with my folders folder.
*/
const { dir } = require('console');
const fs = require('fs');
const pathDir = require('path');
const dirPath = pathDir.join(__dirname, 'folders');

/** 
 * OUR IMPORTANT FUNCTIONS
 * Read file
 * fileGet(dirPath, (err. res) => {})
*/  
fs.readdir(dirPath, (err, res) => {
    if(res?.length){
        fileGet(res[0]);
    }
    else{
        fileGet('apple.txt');
    }
});

function fileGet(file){
    if(file){
        const filePath = `${dirPath}/${file}`;
        fileSystemCrud(filePath);
    }
}

/** 
 * FILE SYSTEM CRUD FUNCTIONS
 * fileSystemCrud()
   - Create file. 
     --> writeFileSync(filePath, text), writeFile(filePath, text, (err) => {})

   - Read file. 
     --> readFileSync(filePath, 'utf8' ,(err. res) => {})

   - Add new text in file. 
     --> appendFile(filePath, 'Add Text' ,(err) => {}), appendFileSync(filePath, 'Add Text')

   - Update file name. 
     --> rename(filePath, 'newFilePath' ,(err) => {}), renameSync(filePath, 'newFilePath')

   - Delete file. 
     -->  unlinkSync(filePath), unlink(filePath, (err) => {})
*/
function fileSystemCrud(filePath){
    fs.writeFileSync(filePath, 'This is my awesome file.');
    
    fs.readFile(filePath, 'utf8', (err, res) =>{
        if(res){
            console.log(res);
        }else{
            console.log(err);
        }
    });

    fs.appendFile(filePath, ' I added new text for my file', (err) => {
        if(!err){
            console.log('Added new text!');
        }else{
            console.log('Can not added new text!');
        }
    });

    fs.rename(filePath, `${dirPath}/updateFile.txt`, (err) => {
        if(!err){
            console.log('Changes file name!');
        }
        else{
            console.log("Do't changes file name!");
        }
    });
    
    fs.unlink(filePath, (err) => {
        if(!err){
            console.log('File already deleted!');
        }else{
            console.log('This file is not deleted!');
        }
    });
}
