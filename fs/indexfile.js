const fs = require('fs');

// Read files 
// Synchronous and Asynchronous 

// Asynchronous Read
/*
fs.readFile('input.txt', function(err, data) {
    if (err) {
        return console.log("Erro", err);
    }
    console.log("Asynchronous read: " + data);
})
*/

// Synchronous file
// const data = fs.readFileSync('input.txt');
// console.log("Synchronous read: ", data.toString());


// Asynchronous read:

// Opening file Path
// r+ read write 
// path , flag , callback
const buf = new Buffer(1024);

fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.log("Error: ", err);
    }
    console.log("File open successfully");
    console.log("reading the file: ");

    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
        if (err) {
            console.log(err);
        }
        console.log("Bytes: " + bytes);

        // Print only read bytes to avoid junk
        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }


    })
})


// write a file
/*
fs.writeFile('input.txt', "Shushil chaubey", function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Data written successfully");
    }
    fs.readFile('input.txt', function(err, data) {
        if (err) {
            return console.log(err);
        }
        console.log("Asynchronous read: " + data);
    })
})
*/

let data = "\nWeb developer";
// Asynchronous way
/*
fs.appendFile('input.txt', data, 'utf8', function(err) {
    if (err) {
        console.log("error", err);
    }
    console.log("Data is appended to file successfully");
})

// synchronous way

fs.appendFileSync('input.txt', data, 'utf8');
console.log("Data is appended to file successfully");

*/


// close file

// fs.close(fd, function(err) {
//     if (err) {
//         console.log(err);
//     }
//     console.log("file closed successfully");
// })

// delete the file
fs.unlink('input.txt', function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("file deleted successfully");
})