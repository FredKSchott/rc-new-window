(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(314);Object.defineProperty(exports,"__esModule",{value:!0}),exports.estimateBrowserZoom=estimateBrowserZoom,exports.estimateWindowBorder=estimateWindowBorder,exports.mapElementToScreenRect=function mapElementToScreenRect(element,rect){if(!element)return null;var mappedRect,clientRect=element.getBoundingClientRect(),mapRect=new MapRect2D;if(mapRect.init(0,0,element.offsetWidth,element.offsetHeight,clientRect.x,clientRect.y,clientRect.width,clientRect.height),rect){var _mapRect$map=mapRect.map({x:rect.left,y:rect.top}),x=_mapRect$map.x,y=_mapRect$map.y,_mapRect$map2=mapRect.map({x:rect.left+rect.width,y:rect.top+rect.height}),x2=_mapRect$map2.x,y2=_mapRect$map2.y;mappedRect={left:x,top:y,width:x2-x,height:y2-y}}else mappedRect={left:clientRect.left,top:clientRect.top,width:clientRect.width,height:clientRect.height};var _window=element.ownerDocument.defaultView;if(!_window)return clientRect;if(_window.frameElement)return mapElementToScreenRect(_window.frameElement,mappedRect);var _estimateWindowBorder=estimateWindowBorder(_window),_estimateWindowBorder2=(0,_slicedToArray2.default)(_estimateWindowBorder,3),xBorder=_estimateWindowBorder2[0],yBorder=_estimateWindowBorder2[1],zoom=_estimateWindowBorder2[2];1!==zoom&&(mappedRect.left*=zoom,mappedRect.top*=zoom,mappedRect.width*=zoom,mappedRect.height*=zoom);return mappedRect.left+=_window.screenX+xBorder,mappedRect.top+=_window.screenY+yBorder,mappedRect},exports.mapWindowToElement=function mapWindowToElement(targetElement,fromWindow,fromRect){var removeBorder=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(!targetElement)return null;if(fromWindow){if(fromRect={left:fromWindow.screenX,top:fromWindow.screenY,width:fromWindow.outerWidth,height:fromWindow.outerHeight},removeBorder){var _popupWindowBorder=(0,_slicedToArray2.default)(_BrowserPopupWindow.popupWindowBorder,3),topBorder=_popupWindowBorder[0],sideBorder=_popupWindowBorder[1],bottomBorder=_popupWindowBorder[2];fromRect.left+=sideBorder,fromRect.top+=topBorder,fromRect.width-=2*sideBorder,fromRect.height-=topBorder+bottomBorder}}else if(!fromRect)return null;var _document=targetElement.ownerDocument,_window=_document.defaultView;if(!_window)return fromRect;if(_window.frameElement)fromRect=mapWindowToElement(_window.frameElement,null,fromRect);else{var _estimateWindowBorder3=estimateWindowBorder(_window),_estimateWindowBorder4=(0,_slicedToArray2.default)(_estimateWindowBorder3,3),xBorder=_estimateWindowBorder4[0],yBorder=_estimateWindowBorder4[1],zoom=_estimateWindowBorder4[2];fromRect.left-=_window.screenX+xBorder,fromRect.top-=_window.screenY+yBorder,1!==zoom&&(fromRect.left/=zoom,fromRect.top/=zoom,fromRect.width/=zoom,fromRect.height/=zoom)}var clientRect=targetElement.getBoundingClientRect(),mapRect=new MapRect2D;mapRect.init(0,0,targetElement.offsetWidth,targetElement.offsetHeight,clientRect.x,clientRect.y,clientRect.width,clientRect.height);var _mapRect$revertMap=mapRect.revertMap({x:fromRect.left,y:fromRect.top}),x=_mapRect$revertMap.x,y=_mapRect$revertMap.y,_mapRect$revertMap2=mapRect.revertMap({x:fromRect.left+fromRect.width,y:fromRect.top+fromRect.height}),x2=_mapRect$revertMap2.x,y2=_mapRect$revertMap2.y;return{left:x,top:y,width:x2-x,height:y2-y}};var _classCallCheck2=_interopRequireDefault(__webpack_require__(316)),_createClass2=_interopRequireDefault(__webpack_require__(317)),_slicedToArray2=_interopRequireDefault(__webpack_require__(315)),_BrowserPopupWindow=__webpack_require__(318);function estimateBrowserZoom(_window){var _gerWindowBorder=(0,_BrowserPopupWindow.gerWindowBorder)(),_gerWindowBorder2=(0,_slicedToArray2.default)(_gerWindowBorder,3),topBorder=_gerWindowBorder2[0],sideBorder=_gerWindowBorder2[1],bottomBorder=_gerWindowBorder2[2];_window.outerWidth===_window.screen.availWidth&&(sideBorder=0,bottomBorder=0);var xRatio=(_window.outerWidth-2*sideBorder)/_window.innerWidth,yRatio=(_window.outerHeight-topBorder-bottomBorder)/_window.innerHeight,zoomRatio=Math.min(yRatio,xRatio);return zoomRatio=zoomRatio>1.8?Math.round(zoomRatio):zoomRatio>.73?Math.round(20*zoomRatio)/20:2/Math.round(2/zoomRatio),console.log("zoom ".concat(zoomRatio)),zoomRatio}function estimateWindowBorder(_window){var zoom=_window?estimateBrowserZoom(_window):1,xBorder=_window.outerWidth-_window.innerWidth*zoom>>1,yBorder=Math.round(_window.outerHeight-_window.innerHeight*zoom);return xBorder>32?xBorder=8:yBorder-=xBorder,[xBorder,yBorder,zoom]}var MapRect2D=function(){function MapRect2D(){(0,_classCallCheck2.default)(this,MapRect2D),this.scaleX=void 0,this.scaleY=void 0,this.offsetX=void 0,this.offsetY=void 0}return(0,_createClass2.default)(MapRect2D,[{key:"init",value:function init(x1,y1,w1,h1,x2,y2,w2,h2){this.scaleX=w2/w1,this.scaleY=h2/h1,this.offsetX=x2-x1*this.scaleX,this.offsetY=y2-y1*this.scaleY}},{key:"map",value:function map(pt){return{x:pt.x*this.scaleX+this.offsetX,y:pt.y*this.scaleY+this.offsetY}}},{key:"revertMap",value:function revertMap(pt){return{x:(pt.x-this.offsetX)/this.scaleX,y:(pt.y-this.offsetY)/this.scaleY}}}]),MapRect2D}()},205:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a="# rc-new-window\n---\n\nReact New Window Component to show content in a popup browser window.\nPorted from [react-new-window](https://github.com/rmariuzzo/react-new-window)\n\n[![NPM version][npm-image]][npm-url]\n[![npm download][download-image]][download-url]\n\n[npm-image]: http://img.shields.io/npm/v/rc-new-window.svg?style=flat-square\n[npm-url]: http://npmjs.org/package/rc-new-window\n[download-image]: https://img.shields.io/npm/dm/rc-new-window.svg?style=flat-square\n[download-url]: https://npmjs.org/package/rc-new-window\n\n\n## Development\n\n```\nnpm install\nnpm start\n```\n\n## Example\n\n\nonline example: https://ticlo.github.io/rc-new-window/\n\n\n\n## install\n\n[![rc-new-window](https://nodei.co/npm/rc-new-window.png)](https://npmjs.org/package/rc-new-window)\n\n## Usage\n\n```js\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport NewWindow from 'rc-new-window';\n\nReactDOM.render((\n  <NewWindow>\n    Content to show in the new window\n  </NewWindow>\n), container);\n```\n\n## API\n\n### props\n\n<table class=\"table table-bordered table-striped\">\n    <thead>\n    <tr>\n        <th style=\"width: 100px;\">name</th>\n        <th>type</th>\n        <th>default</th>\n        <th>description</th>\n    </tr>\n    </thead>\n    <tbody>\n        <tr>\n          <td>url</td>\n          <td>String</td>\n          <td></td>\n          <td>Use url instead of children content<br/>If cross domain url is used, callbacks might not work</td>\n        </tr>\n        <tr>\n          <td>name</td>\n          <td>String</td>\n          <td></td>\n          <td>Name of new window</td>\n        </tr>\n        <tr>\n          <td>title</td>\n          <td>String</td>\n          <td>title of current window</td>\n          <td>Title of new window</td>\n        </tr>\n        <tr>\n          <td>copyStyles</td>\n          <td>Boolean</td>\n          <td>true</td>\n          <td>Copy the styles from main window</td>\n        </tr>\n        <tr>\n          <td>width</td>\n          <td>Number</td>\n          <td>640</td>\n          <td>Window inner width</td>\n        </tr>\n        <tr>\n          <td>height</td>\n          <td>Number</td>\n          <td>480</td>\n          <td>Window inner height</td>\n        </tr>\n        <tr>\n          <td>initPopupInnerRect</td>\n          <td>Function</td>\n          <td></td>\n          <td>init the window client area<br/>return {left,top,width,height}</td>\n        </tr>\n        <tr>\n          <td>initPopupOuterRect</td>\n          <td>Function</td>\n          <td></td>\n          <td>init the window position and size<br/>return {left,top,width,height}</td>\n        </tr>\n        <tr>\n          <td>top</td>\n          <td>Number</td>\n          <td>center of current window</td>\n          <td>Window position</td>\n        </tr>\n        <tr>\n          <td>onOpen</td>\n          <td>(w: Window) => void</td>\n          <td></td>\n          <td>callback when window is opened</td>\n        </tr>\n        <tr>\n          <td>onClose</td>\n          <td>() => void</td>\n          <td></td>\n          <td>callback when window is closed by user</td>\n        </tr>\n        <tr>\n          <td>onBlock</td>\n          <td>() => void</td>\n          <td></td>\n          <td>callback when window.open failed</td>\n        </tr>\n    </tbody>\n</table>\n\n\n## License\n\nrc-new-window is released under the Apache license version 2.0.\n"},318:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__(812);Object.defineProperty(exports,"__esModule",{value:!0}),exports.gerWindowBorder=gerWindowBorder,exports.popupWindowBorder=exports.popupSupported=exports.isSafari=void 0;var browser=_interopRequireWildcard(__webpack_require__(813)).getParser(window.navigator.userAgent);function gerWindowBorder(){switch(browser.getOSName(!0)){case"windows":var result;switch(browser.getBrowserName(!0)){case"firefox":result=[68,8,8];break;case"microsoft edge":result=[62,8,8];break;default:result=[60,8,8]}return window.devicePixelRatio>1&&(result[0]-=2,result[1]-=1,result[2]-=1),result;case"macos":switch(browser.getBrowserName(!0)){case"safari":return[22,0,0];case"firefox":return[59,0,0];default:return[51,0,0]}}return[60,8,8]}var isSafari="safari"===browser.getBrowserName(!0);exports.isSafari=isSafari;var popupSupported="desktop"===browser.getPlatformType();exports.popupSupported=popupSupported;var popupWindowBorder=gerWindowBorder();exports.popupWindowBorder=popupWindowBorder},331:function(module,exports){module.exports="import React, { Component, useRef, useState } from 'react';\nimport NewWindow from '../src';\nimport { mapWindowToElement } from '../src/ScreenPosition';\n\nconst blankRect = { left: 0, top: 0, width: 0, height: 0 };\nexport default () => {\n  const [open, setOpen] = useState(false);\n  const [win, setWin] = useState();\n  const [rect, setRect] = useState(blankRect);\n  const ref = useRef();\n\n  const getPosition = () => {\n    setRect(mapWindowToElement(ref.current, win));\n  };\n\n  return (\n    <>\n      <div ref={ref}\n           style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.5, pointerEvents: 'none' }}>\n        <div style={{ ...rect, background: '#CCCCFF', position: 'absolute', overflow: 'hidden' }}>\n          popup content area\n        </div>\n      </div>\n      <button onClick={() => setOpen(v => !v)}>Open/Close Window</button>\n      <button onClick={getPosition} disabled={!open || !win}>Get window position</button>\n      <p>\n        Map popup content area to element coordinates, even with browser zoom, element scaling or iframe.\n      </p>\n\n      {open ? (\n        <NewWindow onClose={() => setOpen(false)} onOpen={setWin}>\n          <div>hello</div>\n        </NewWindow>\n      ) : null}\n    </>\n  );\n};\n"},332:function(module,exports){module.exports="import React, { Component, useRef, useState } from 'react';\nimport NewWindow from '../src';\nimport { mapElementToScreenRect } from '../src/ScreenPosition';\n\nexport default () => {\n  const [open, setOpen] = useState(false);\n  const ref = useRef();\n  const initPosition = () => {\n    return mapElementToScreenRect(ref.current, null);\n  };\n  return (\n    <>\n      <button onClick={() => setOpen(v => !v)}>Open/Close Window</button>\n      <p>\n        Popup should open with same position and size as the blue rectangle, even with browser zoom, element scaling or iframe.\n      </p>\n      <div ref={ref} style={{ width: 300, height: 300, background: '#CCCCFF' }}>\n        hello\n      </div>\n      {open ? (\n        <NewWindow onClose={() => setOpen(false)} initPopupInnerRect={initPosition}>\n          <div>hello</div>\n        </NewWindow>\n      ) : null}\n    </>\n  );\n};\n"},333:function(module,exports){module.exports="import React, { Component, useState } from 'react';\nimport NewWindow from '../src';\n\nexport default () => {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <>\n      <button onClick={() => setOpen(v => !v)}>Open/Close Window</button>\n      {open ? <NewWindow onClose={() => setOpen(false)}>hello</NewWindow> : null}\n    </>\n  );\n};\n"},334:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(11),__webpack_require__(19),__webpack_require__(20),__webpack_require__(29),__webpack_require__(17),__webpack_require__(10),__webpack_require__(21),__webpack_require__(22);var react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),_src__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(81),_src__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_9__),_src_ScreenPosition__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(135);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var blankRect={left:0,top:0,width:0,height:0},_ref=react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p",null,"Map popup content area to element coordinates, even with browser zoom, element scaling or iframe."),_ref2=react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",null,"hello");__webpack_exports__.a=function(){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_8__.useState)(!1),2),open=_useState2[0],setOpen=_useState2[1],_useState4=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_8__.useState)(),2),win=_useState4[0],setWin=_useState4[1],_useState6=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_8__.useState)(blankRect),2),rect=_useState6[0],setRect=_useState6[1],ref=Object(react__WEBPACK_IMPORTED_MODULE_8__.useRef)();return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{ref:ref,style:{position:"absolute",width:"100%",height:"100%",opacity:.5,pointerEvents:"none"}},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{style:_objectSpread(_objectSpread({},rect),{},{background:"#CCCCFF",position:"absolute",overflow:"hidden"})},"popup content area")),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button",{onClick:function onClick(){return setOpen((function(v){return!v}))}},"Open/Close Window"),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button",{onClick:function getPosition(){setRect(Object(_src_ScreenPosition__WEBPACK_IMPORTED_MODULE_10__.mapWindowToElement)(ref.current,win))},disabled:!open||!win},"Get window position"),_ref,open?react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_9___default.a,{onClose:function onClose(){return setOpen(!1)},onOpen:setWin},_ref2):null)}},335:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(11),__webpack_require__(19),__webpack_require__(20),__webpack_require__(29),__webpack_require__(17),__webpack_require__(10),__webpack_require__(21),__webpack_require__(22);var react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),_src__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(81),_src__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_9__),_src_ScreenPosition__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(135);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var _ref=react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p",null,"Popup should open with same position and size as the blue rectangle, even with browser zoom, element scaling or iframe."),_ref2=react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",null,"hello");__webpack_exports__.a=function(){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_8__.useState)(!1),2),open=_useState2[0],setOpen=_useState2[1],ref=Object(react__WEBPACK_IMPORTED_MODULE_8__.useRef)();return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button",{onClick:function onClick(){return setOpen((function(v){return!v}))}},"Open/Close Window"),_ref,react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{ref:ref,style:{width:300,height:300,background:"#CCCCFF"}},"hello"),open?react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_9___default.a,{onClose:function onClose(){return setOpen(!1)},initPopupInnerRect:function initPosition(){return Object(_src_ScreenPosition__WEBPACK_IMPORTED_MODULE_10__.mapElementToScreenRect)(ref.current,null)}},_ref2):null)}},336:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(11),__webpack_require__(19),__webpack_require__(20),__webpack_require__(29),__webpack_require__(17),__webpack_require__(10),__webpack_require__(21),__webpack_require__(22);var react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),_src__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(81),_src__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_9__);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.a=function(){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_8__.useState)(!1),2),open=_useState2[0],setOpen=_useState2[1];return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button",{onClick:function onClick(){return setOpen((function(v){return!v}))}},"Open/Close Window"),open?react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_9___default.a,{onClose:function onClose(){return setOpen(!1)}},"hello"):null)}},340:function(module,exports,__webpack_require__){__webpack_require__(341),__webpack_require__(513),module.exports=__webpack_require__(514)},415:function(module,exports){},514:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(73),_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(326),storybook_addon_source__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(702),__webpack_require__(327)),storybook_addon_source__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(storybook_addon_source__WEBPACK_IMPORTED_MODULE_3__);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__.withNotes),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(storybook_addon_source__WEBPACK_IMPORTED_MODULE_3___default.a),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){__webpack_require__(704)}),module)}.call(this,__webpack_require__(250)(module))},704:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_markdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(328),react_markdown__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(329),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(73),_storybook_addon_console__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(330),rc_source_loader_examples_get_pop_up_position__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(331),rc_source_loader_examples_get_pop_up_position__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(rc_source_loader_examples_get_pop_up_position__WEBPACK_IMPORTED_MODULE_5__),rc_source_loader_examples_set_popup_position__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(332),rc_source_loader_examples_set_popup_position__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(rc_source_loader_examples_set_popup_position__WEBPACK_IMPORTED_MODULE_6__),rc_source_loader_examples_simple__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(333),rc_source_loader_examples_simple__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(rc_source_loader_examples_simple__WEBPACK_IMPORTED_MODULE_7__),_examples_get_pop_up_position__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(334),_examples_set_popup_position__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(335),_examples_simple__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(336),_storybook_theming__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(337),_README_md__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(205);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.addParameters)({options:{theme:_storybook_theming__WEBPACK_IMPORTED_MODULE_11__.themes.light,name:"rc-new-window",url:"https://github.com/ticlo/rc-new-window",title:"rc-new-window"}});var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a,{escapeHtml:!1,source:_README_md__WEBPACK_IMPORTED_MODULE_12__.a}),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_examples_get_pop_up_position__WEBPACK_IMPORTED_MODULE_8__.a,null),_ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_examples_set_popup_position__WEBPACK_IMPORTED_MODULE_9__.a,null),_ref4=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_examples_simple__WEBPACK_IMPORTED_MODULE_10__.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("rc-new-window",module).addDecorator(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_2__.withA11y).addDecorator((function(storyFn,context){return Object(_storybook_addon_console__WEBPACK_IMPORTED_MODULE_4__.withConsole)()(storyFn)(context)})).add("README",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"markdown-body entry-content",style:{padding:24}},_ref)}),{source:{code:_README_md__WEBPACK_IMPORTED_MODULE_12__.a}}).add("get-pop-up-position",(function(){return _ref2}),{source:{code:rc_source_loader_examples_get_pop_up_position__WEBPACK_IMPORTED_MODULE_5___default.a}}).add("set-popup-position",(function(){return _ref3}),{source:{code:rc_source_loader_examples_set_popup_position__WEBPACK_IMPORTED_MODULE_6___default.a}}).add("simple",(function(){return _ref4}),{source:{code:rc_source_loader_examples_simple__WEBPACK_IMPORTED_MODULE_7___default.a}})}.call(this,__webpack_require__(250)(module))},81:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(314);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(315)),_classCallCheck2=_interopRequireDefault(__webpack_require__(316)),_createClass2=_interopRequireDefault(__webpack_require__(317)),_inherits2=_interopRequireDefault(__webpack_require__(806)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(808)),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(811)),_react=_interopRequireDefault(__webpack_require__(0)),_reactDom=_interopRequireDefault(__webpack_require__(196)),_debounce=_interopRequireDefault(__webpack_require__(296)),_BrowserPopupWindow=__webpack_require__(318);function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=(0,_getPrototypeOf2.default)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,_possibleConstructorReturn2.default)(this,result)}}var onNewWindowResize=(0,_debounce.default)((function(){var div=document.createElement("div");document.body.append(div),div.remove()}),200),NewWindow=function(_React$PureComponent){(0,_inherits2.default)(NewWindow,_React$PureComponent);var _super=_createSuper(NewWindow);function NewWindow(props){var _this;return(0,_classCallCheck2.default)(this,NewWindow),(_this=_super.call(this,props)).window=void 0,_this.released=!1,_this.container=document.createElement("div"),_this.state={mounted:!1},_this.onMainWindowUnload=function(){_this.window&&_this.window.close()},_this.release=function(event){if(!_this.released&&(_this.released=!0,window.removeEventListener("beforeunload",_this.onMainWindowUnload),_this.window.addEventListener("beforeunload",_this.release),event)){var onClose=_this.props.onClose;"function"==typeof onClose&&onClose()}},_this}return(0,_createClass2.default)(NewWindow,[{key:"render",value:function render(){return this.state.mounted?_reactDom.default.createPortal(this.props.children,this.container):null}},{key:"componentDidMount",value:function componentDidMount(){this.openChild(),this.setState({mounted:!0})}},{key:"openChild",value:function openChild(){var _this2=this,_this$props=this.props,url=_this$props.url,title=_this$props.title,name=_this$props.name,width=_this$props.width,height=_this$props.height,initPopupInnerRect=_this$props.initPopupInnerRect,initPopupOuterRect=_this$props.initPopupOuterRect,onBlock=_this$props.onBlock,onOpen=_this$props.onOpen,features={width:width,height:height};if(initPopupOuterRect){features=initPopupOuterRect();var _popupWindowBorder=(0,_slicedToArray2.default)(_BrowserPopupWindow.popupWindowBorder,3),topBorder=_popupWindowBorder[0],sideBorder=_popupWindowBorder[1],bottomBorder=_popupWindowBorder[2];_BrowserPopupWindow.isSafari||(features.width-=2*sideBorder,features.height-=topBorder+bottomBorder)}else if(initPopupInnerRect){features=initPopupInnerRect();var _popupWindowBorder2=(0,_slicedToArray2.default)(_BrowserPopupWindow.popupWindowBorder,2),_topBorder=_popupWindowBorder2[0],_sideBorder=_popupWindowBorder2[1];features.left-=_sideBorder,features.top-=_topBorder,_BrowserPopupWindow.isSafari&&(features.height+=_topBorder)}else features.left=window.top.outerWidth/2+window.top.screenX-width/2,features.top=window.top.outerHeight/2+window.top.screenY-height/2;this.window=window.open(url,name,function toWindowFeatures(obj){return Object.keys(obj).reduce((function(features,name){var value=obj[name];return"boolean"==typeof value?features.push("".concat(name,"=").concat(value?"yes":"no")):features.push("".concat(name,"=").concat(value)),features}),[]).join(",")}(features)),this.window?(window.addEventListener("beforeunload",this.onMainWindowUnload),this.window.addEventListener("resize",onNewWindowResize),this.window.document.title=title||document.title,this.window.document.body.appendChild(this.container),this.props.copyStyles&&setTimeout((function(){return function copyStyles(source,target){Array.from(source.styleSheets).forEach((function(styleSheet){var rules;if(styleSheet.href){var newLinkEl=source.createElement("link");newLinkEl.rel="stylesheet",newLinkEl.href=styleSheet.href,target.head.appendChild(newLinkEl)}else{try{rules=styleSheet.cssRules}catch(err){}if(rules){var newStyleEl=source.createElement("style");Array.from(styleSheet.cssRules).forEach((function(cssRule){var cssText=cssRule.cssText,type=cssRule.type,returnText=cssText;[3,5].includes(type)&&(returnText=cssText.split("url(").map((function(line){return"/"===line[1]?"".concat(line.slice(0,1)).concat(window.location.origin).concat(line.slice(1)):line})).join("url(")),newStyleEl.appendChild(source.createTextNode(returnText))})),target.head.appendChild(newStyleEl)}}}))}(document,_this2.window.document)}),0),"function"==typeof onOpen&&onOpen(this.window),this.window.addEventListener("beforeunload",this.release)):"function"==typeof onBlock?onBlock():console.warn("A new window could not be opened. Maybe it was blocked.")}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.window&&(this.release(),this.window.close())}}]),NewWindow}(_react.default.PureComponent);NewWindow.supported=_BrowserPopupWindow.popupSupported,NewWindow.defaultProps={url:"",name:"",width:640,height:480,copyStyles:!0};var _default=NewWindow;exports.default=_default}},[[340,1,2]]]);
//# sourceMappingURL=main.94eddc6fc6f85b0fce16.bundle.js.map