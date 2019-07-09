// callbak hell
function getAllFiles() {
    fetch('http://google.com',
        function(googleFiles) {
            fetch('http://onedrive.com', function(oneDrieFiles) {
                fetch('http://dropbox.com', function(dropboxFiles) {
                    const allFiles = [...googleFiles, ...oneDrieFiles, ...dropboxFiles];
                    return allFiles;
                })
            })
        });
};

// resolve it by using async await

async function getAllFiles() {
    const googleFiles = await fetch('http://localhost/googleDrive'); //ik promise object de ga 
    const onedriveFiles = await fetch('http://google.com');
    const dropboxFiles = await fetch('http://google.com');
    const allFiles = [...googleFiles, ...onedriveFiles, ...dropboxFiles];
    return allFiles;
};
async function print() {
    
    console.log(await getAllFiles());

}
print();
console.log("ABC");


/// promise

function fetch(url) {
        return new Promise(function (resolve, reject) {
            try {
                getRequest(url, function(response) {
                    resolve(response);
                });
            } catch(err) {
                reject(err);
            }
        });
}