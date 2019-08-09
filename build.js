var fs = require('fs');
var minify = require('uglify-js').minify;
var src = fs.readFileSync('index.js', 'utf8');
var minified = minify(src);
fs.writeFileSync('output.js', 'javascript:' + minified.code, 'utf8');