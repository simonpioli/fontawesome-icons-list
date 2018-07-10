var forEach = require('lodash.foreach');
var fs   = require('fs');
var path = require('path');

var fontAwesomeListFile = path.join(__dirname, '../', 'Font-Awesome', 'advanced-options', 'metadata', 'icons.json');
if (fs.existsSync(fontAwesomeListFile) === false) {
    fontAwesomeListFile = path.join(__dirname, 'node_modules', 'Font-Awesome', 'advanced-options', 'metadata', 'icons.json');
}

var fontAwesomeList = JSON.parse(fs.readFileSync(fontAwesomeListFile, 'utf-8'));

var icons = {};
forEach(fontAwesomeList, function (data, name) {
    forEach(data.styles, function (style) {
        if (!icons.hasOwnProperty(style)) {
            icons[style] = [];
        }
        icons[style].push(name);
    });
});

module.exports = icons;
