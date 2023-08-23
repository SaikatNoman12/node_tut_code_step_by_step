/** 
 * USEFUL VARIABLE
 * File system.
 * Process argument vector fot command input.
*/
const fs = require('fs');
const pro = process.argv;

/** 
 * CREATE AND DELETE FILE FUNCTION
 * createAndDelete()
*/
(function createAndDelete(){

    if(pro[2] === 'create'){
        // Create file.
        fs.writeFileSync(pro[3], pro[4]);
    }
    else if(pro[2] === 'remove'){
        // Remove file.
        fs.unlinkSync(pro[3]);
    }
    else{
        // Error msg show.
        console.log('Your process is invalid');
    }

})();