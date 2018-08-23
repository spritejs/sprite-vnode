'use strict';

var _spritejs = require('spritejs');

var _attributes = require('snabbdom/modules/attributes');

var _attributes2 = _interopRequireDefault(_attributes);

var _props = require('snabbdom/modules/props');

var _props2 = _interopRequireDefault(_props);

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _spritenodeapi = require('./spritenodeapi');

var api = _interopRequireWildcard(_spritenodeapi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scene = new _spritejs.Scene('#myscene', 600, 600);
var layer = scene.layer('fglayer');

var snabbdom = require('snabbdom');

var patch = snabbdom.init([_attributes2.default, _props2.default], api);

var vnode = (0, _h2.default)('layer#fglayer', {}, [(0, _h2.default)('group#main', { attrs: { size: [100, 100] } }, [(0, _h2.default)('sprite', { attrs: { bgcolor: 'red' } }, []), (0, _h2.default)('label', { attrs: { bgcolor: 'red' } }, 'I\'ll take you places!')])]);

console.log(vnode);
patch(layer, vnode);

var group = layer.children[0];
console.log(group.childNodes.length, group.attr('size'));

var newVnode = (0, _h2.default)('layer#fglayer', {}, [(0, _h2.default)('group#main', { attrs: { size: [100, 200] } }, [(0, _h2.default)('sprite', { attrs: { bgcolor: 'red' } }, []), (0, _h2.default)('label', { attrs: { bgcolor: 'green' } }, 'I\'ll take you places2!')])]);

patch(vnode, newVnode);

console.log(group.childNodes.length, group.attr('size'), group.children[1].attr('bgcolor'), group.children[1].text);

// console.log(group.children[1].parentNode);