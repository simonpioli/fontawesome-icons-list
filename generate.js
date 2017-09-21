var fs   = require('fs');
var path = require('path');
var icons = require(__dirname + '/icons');

fs.writeFileSync(path.join(__dirname, 'icons.json'), JSON.stringify(icons));

fs.writeFileSync(path.join(__dirname, 'index.js'), ['(function (root, factory) {',
    '  if(typeof define === "function" && define.amd) {',
    '    define([], function(){',
    '      return (root.fontawesomeIconsList = factory());',
    '    });',
    '  } else if(typeof module === "object" && module.exports) {',
    '    module.exports = (root.fontawesomeIconsList = factory());',
    '  } else {',
    '    root.fontawesomeIconsList = factory();',
    '  }',
    '}(this, function() {',
    '  return ' + JSON.stringify(icons) + ';',
    '}));'].join('\n'));
