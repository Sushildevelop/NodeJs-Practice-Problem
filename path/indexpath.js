// The path module has many useful properties and method to acess and manipulate paths in the file system.
const path = require("path");

// platform specific path separator.

console.log("Separator", path.sep);

// Path Delimiter
console.log("delimiter", path.delimiter);

// Handy Path methods

// 1 path.basename
let result = path.basename('/public/home/index.html');
console.log("basename", result);

// 2. filter out the extension

let basename = path.basename('/public/home/index.html', '.html')
console.log("Without extensions basename", basename);


// Directory name
let dict = path.dirname('/public/home/index.html');
console.log("dirname", dict);

// extname 
let ext = path.extname("index.html");
console.log("extension", ext);

// Format
let Format = path.format({
    dir: "public/html/home/js",
    base: 'app.js'
})
console.log("Format is used to join directory and basename: ", Format);

// path.isAbsolute(path)

let path1 = path.isAbsolute('C:\\node.js\\')
console.log(path1);

let path2 = path.isAbsolute('C:/node.js/')
console.log(path2);

let path3 = path.isAbsolute('\\node.js\\')
console.log(path3);

let path4 = path.isAbsolute('home/')
console.log(path4);

// Join Paths

let pathToDir = path.join('/home', 'js', 'dist', 'app.js');
console.log("join path", pathToDir);


// parse path
let pathobj = path.parse('d:\\home\\js\\dist\\app.js');
console.log(pathobj);

// Normalise path
var normalisedPath = path.normalize("/a/../b/c/"); // /b/c
console.log(normalisedPath);

// relative path
// it is accepts two arugments and returns the relative path between them based on the current workign directory
let relativepath = path.relative('/home/user/config/', '/home/user/js/')
console.log(relativepath);

// Resolve Path

console.log("Current working directory: ", __dirname);
console.log(path.resolve());

path4 = path.resolve("html", "index.html");
console.log("2 segement", path4);