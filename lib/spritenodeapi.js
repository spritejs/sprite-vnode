'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = createElement;
exports.createElementNS = createElementNS;
exports.createTextNode = createTextNode;
exports.createComment = createComment;
exports.insertBefore = insertBefore;
exports.removeChild = removeChild;
exports.appendChild = appendChild;
exports.parentNode = parentNode;
exports.nextSibling = nextSibling;
exports.tagName = tagName;
exports.setTextContent = setTextContent;
exports.getTextContent = getTextContent;
exports.isElement = isElement;
exports.isText = isText;
exports.isComment = isComment;

var _spriteCore = require('sprite-core');

function createElement(tagName) {
  return (0, _spriteCore.createNode)(tagName);
}
function createElementNS(namespaceURI, qualifiedName) {
  return (0, _spriteCore.createNode)(qualifiedName);
}
function createTextNode(text) {
  return text;
}
function createComment(text) {
  // no def
}
function insertBefore(parentNode, newNode, referenceNode) {
  if (parentNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }
}
function removeChild(node, child) {
  node.removeChild(child);
}
function appendChild(node, child) {
  if (typeof child === 'string') {
    node.text = child;
  } else {
    node.appendChild(child);
  }
}
function parentNode(node) {
  return node.parent;
}
function nextSibling(node) {
  if (node.parent) {
    var idx = node.parent.indexOf(node);
    return node.parent[idx + 1];
  }
}
function tagName(elm) {
  return elm.tagName;
}
function setTextContent(node, text) {
  node.text = text;
}
function getTextContent(node) {
  return node.text;
}
function isElement(node) {
  return node instanceof _spriteCore.BaseSprite;
}
function isText(node) {
  return typeof node === 'string';
}
function isComment(node) {
  return false;
}