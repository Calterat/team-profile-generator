const fs = require('fs');

// write a file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                //return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                reject(err);
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File Created in the Dist Directory!'
            });
        });
    });
};

module.exports = { writeFile }