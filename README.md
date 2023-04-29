# Read files of directory
<b> You have to follow these steps </b>

const readDirRecursive = require('readFileRecursively')

readDirRecursive('./directoryName').then(data => {
    console.log(data)
})


