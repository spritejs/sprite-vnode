import {Scene, Group} from 'spritejs';
import attributes from 'snabbdom/modules/attributes';
import props from 'snabbdom/modules/props';

import h from 'snabbdom/h';
import * as api from './spritenodeapi';


const scene = new Scene('#myscene', 600, 600);
const layer = scene.layer('fglayer');

const snabbdom = require('snabbdom');

const patch = snabbdom.init([
  attributes,
  props,
], api);

const vnode = h('layer#fglayer', {}, [
  h('group#main', {attrs: {size: [100, 100]}}, [
    h('sprite', {attrs: {bgcolor: 'red'}}, []),
    h('label', {attrs: {bgcolor: 'red'}}, 'I\'ll take you places!'),
  ]),
]);

console.log(vnode);
patch(layer, vnode);

const group = layer.children[0];
console.log(group.childNodes.length, group.attr('size'));

const newVnode = h('layer#fglayer', {}, [
  h('group#main', {attrs: {size: [100, 200]}}, [
    h('sprite', {attrs: {bgcolor: 'red'}}, []),
    h('label', {attrs: {bgcolor: 'green'}}, 'I\'ll take you places2!'),
  ]),
]);

patch(vnode, newVnode);

console.log(group.childNodes.length, group.attr('size'), group.children[1].attr('bgcolor'), group.children[1].text);

// console.log(group.children[1].parentNode);