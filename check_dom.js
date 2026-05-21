const fs = require('fs');

const appJs = fs.readFileSync('js/app.js', 'utf8');
const indexHtml = fs.readFileSync('index.html', 'utf8');

// Find all document.getElementById("...") or document.getElementById('...')
const getElementByIdRegex = /document\.getElementById\(['"]([^'"]+)['"]\)/g;
let match;
const appIds = new Set();
while ((match = getElementByIdRegex.exec(appJs)) !== null) {
    appIds.add(match[1]);
}

// Find all document.querySelector("#...") or similar ID selectors
const querySelectorRegex = /document\.querySelector\(['"]#([^'"]+)['"]\)/g;
while ((match = querySelectorRegex.exec(appJs)) !== null) {
    appIds.add(match[1]);
}

console.log('--- ALL IDs USED IN app.js ---');
const appIdsArr = Array.from(appIds).sort();
console.log(appIdsArr.join('\n'));

console.log('\n--- CHECKING IN index.html ---');
let missingCount = 0;
for (const id of appIdsArr) {
    // Check if the id exists as an id="..." attribute in HTML
    const idAttr = `id="${id}"`;
    const singleQuoteAttr = `id='${id}'`;
    if (!indexHtml.includes(idAttr) && !indexHtml.includes(singleQuoteAttr)) {
        console.log(`⚠️ MISSING ID IN index.html: "${id}"`);
        missingCount++;
    } else {
        console.log(`✅ MATCH: "${id}"`);
    }
}

if (missingCount === 0) {
    console.log('\n🎉 ALL IDs match perfectly! No missing elements!');
} else {
    console.log(`\n❌ Found ${missingCount} missing elements!`);
}
