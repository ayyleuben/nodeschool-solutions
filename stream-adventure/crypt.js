var crypto = require('crypto');

var pass = process.argv[2];

var stream = crypto.createDecipher('aes256', process.argv[2]);

stream.pipe(process.stdin).pipe(process.stdout);
