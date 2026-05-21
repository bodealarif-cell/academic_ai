const fs = require('fs');
const content = fs.readFileSync('js/app.js', 'utf8');

const regex = /title:\s*["']([^"']+)["']/g;
let match;
while ((match = regex.exec(content)) !== null) {
    console.log(match[1]);
}
