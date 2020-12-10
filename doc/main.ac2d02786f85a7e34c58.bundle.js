(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{203:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a="# rc-new-window\n---\n\nReact New Window Component to show content in a popup browser window.\nPorted from [react-new-window](https://github.com/rmariuzzo/react-new-window)\n\n[![NPM version][npm-image]][npm-url]\n[![npm download][download-image]][download-url]\n\n[npm-image]: http://img.shields.io/npm/v/rc-new-window.svg?style=flat-square\n[npm-url]: http://npmjs.org/package/rc-new-window\n[download-image]: https://img.shields.io/npm/dm/rc-new-window.svg?style=flat-square\n[download-url]: https://npmjs.org/package/rc-new-window\n\n\n## Development\n\n```\nnpm install\nnpm start\n```\n\n## Example\n\n\nonline example: http://ticlo.github.io/rc-new-window\n\n\n\n## install\n\n[![rc-new-window](https://nodei.co/npm/rc-new-window.png)](https://npmjs.org/package/rc-new-window)\n\n## Usage\n\n```js\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport NewWindow from 'rc-new-window';\n\nReactDOM.render((\n  <NewWindow>\n    Content to show in the new window\n  </NewWindow>\n), container);\n```\n\n## API\n\n### props\n\n<table class=\"table table-bordered table-striped\">\n    <thead>\n    <tr>\n        <th style=\"width: 100px;\">name</th>\n        <th>type</th>\n        <th>default</th>\n        <th>description</th>\n    </tr>\n    </thead>\n    <tbody>\n        <tr>\n          <td>url</td>\n          <td>String</td>\n          <td></td>\n          <td>Use url instead of children content<br/>If cross domain url is used, callbacks might not work</td>\n        </tr>\n        <tr>\n          <td>name</td>\n          <td>String</td>\n          <td></td>\n          <td>Name of new window</td>\n        </tr>\n        <tr>\n          <td>title</td>\n          <td>String</td>\n          <td>title of current window</td>\n          <td>Title of new window</td>\n        </tr>\n        <tr>\n          <td>copyStyles</td>\n          <td>Boolean</td>\n          <td>true</td>\n          <td>Copy the styles from main window</td>\n        </tr>\n        <tr>\n          <td>width</td>\n          <td>Number</td>\n          <td>640</td>\n          <td>Window inner width</td>\n        </tr>\n        <tr>\n          <td>height</td>\n          <td>Number</td>\n          <td>480</td>\n          <td>Window inner height</td>\n        </tr>\n        <tr>\n          <td>left</td>\n          <td>Number</td>\n          <td>center of current window</td>\n          <td>Window position</td>\n        </tr>\n        <tr>\n          <td>top</td>\n          <td>Number</td>\n          <td>center of current window</td>\n          <td>Window position</td>\n        </tr>\n        <tr>\n          <td>onOpen</td>\n          <td>(w: Window) => void</td>\n          <td></td>\n          <td>callback when window is opened</td>\n        </tr>\n        <tr>\n          <td>onClose</td>\n          <td>() => void</td>\n          <td></td>\n          <td>callback when window is closed by user</td>\n        </tr>\n        <tr>\n          <td>onBlock</td>\n          <td>() => void</td>\n          <td></td>\n          <td>callback when window.open failed</td>\n        </tr>\n    </tbody>\n</table>\n\n\n## License\n\nrc-new-window is released under the Apache license version 2.0.\n"},324:function(module,exports){module.exports="import React, { Component, useState } from 'react';\nimport NewWindow from '../src';\n\nexport default () => {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <>\n      <button onClick={() => setOpen(v => !v)}>Open/Close Window</button>\n      {open ? <NewWindow onClose={() => setOpen(false)}>hello</NewWindow> : null}\n    </>\n  );\n};\n"},325:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(16),__webpack_require__(22),__webpack_require__(23),__webpack_require__(41),__webpack_require__(18),__webpack_require__(15),__webpack_require__(25),__webpack_require__(26);var react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),_src__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(326),_src__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_9__);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.a=function(){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_8__.useState)(!1),2),open=_useState2[0],setOpen=_useState2[1];return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button",{onClick:function onClick(){return setOpen((function(v){return!v}))}},"Open/Close Window"),open?react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_9___default.a,{onClose:function onClose(){return setOpen(!1)}},"hello"):null)}},326:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(793);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(794)),_createClass2=_interopRequireDefault(__webpack_require__(795)),_inherits2=_interopRequireDefault(__webpack_require__(796)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(798)),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(801)),_react=_interopRequireDefault(__webpack_require__(1)),_reactDom=_interopRequireDefault(__webpack_require__(194));function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=(0,_getPrototypeOf2.default)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,_possibleConstructorReturn2.default)(this,result)}}var onNewWindowResize=(0,_interopRequireDefault(__webpack_require__(294)).default)((function(){var div=document.createElement("div");document.body.append(div),div.remove()}),200),NewWindow=function(_React$PureComponent){(0,_inherits2.default)(NewWindow,_React$PureComponent);var _super=_createSuper(NewWindow);function NewWindow(props){var _this;return(0,_classCallCheck2.default)(this,NewWindow),(_this=_super.call(this,props)).window=void 0,_this.released=!1,_this.container=document.createElement("div"),_this.state={mounted:!1},_this.onMainWindowUnload=function(){_this.window&&_this.window.close()},_this.release=function(event){if(!_this.released&&(_this.released=!0,window.removeEventListener("beforeunload",_this.onMainWindowUnload),_this.window.addEventListener("beforeunload",_this.release),event)){var onClose=_this.props.onClose;"function"==typeof onClose&&onClose()}},_this}return(0,_createClass2.default)(NewWindow,[{key:"render",value:function render(){return this.state.mounted?_reactDom.default.createPortal(this.props.children,this.container):null}},{key:"componentDidMount",value:function componentDidMount(){this.openChild(),this.setState({mounted:!0})}},{key:"openChild",value:function openChild(){var _this2=this,_this$props=this.props,url=_this$props.url,title=_this$props.title,name=_this$props.name,left=_this$props.left,top=_this$props.top,width=_this$props.width,height=_this$props.height,onBlock=_this$props.onBlock,onOpen=_this$props.onOpen,features={left:left,top:top,width:width,height:height};null!=left&&null!=top||(features.left=window.top.outerWidth/2+window.top.screenX-width/2,features.top=window.top.outerHeight/2+window.top.screenY-height/2),this.window=window.open(url,name,function toWindowFeatures(obj){return Object.keys(obj).reduce((function(features,name){var value=obj[name];return"boolean"==typeof value?features.push("".concat(name,"=").concat(value?"yes":"no")):features.push("".concat(name,"=").concat(value)),features}),[]).join(",")}(features)),this.window?(window.addEventListener("beforeunload",this.onMainWindowUnload),this.window.addEventListener("resize",onNewWindowResize),this.window.document.title=title||document.title,this.window.document.body.appendChild(this.container),this.props.copyStyles&&setTimeout((function(){return function copyStyles(source,target){Array.from(source.styleSheets).forEach((function(styleSheet){var rules;if(styleSheet.href){var newLinkEl=source.createElement("link");newLinkEl.rel="stylesheet",newLinkEl.href=styleSheet.href,target.head.appendChild(newLinkEl)}else{try{rules=styleSheet.cssRules}catch(err){}if(rules){var newStyleEl=source.createElement("style");Array.from(styleSheet.cssRules).forEach((function(cssRule){var cssText=cssRule.cssText,type=cssRule.type,returnText=cssText;[3,5].includes(type)&&(returnText=cssText.split("url(").map((function(line){return"/"===line[1]?"".concat(line.slice(0,1)).concat(window.location.origin).concat(line.slice(1)):line})).join("url(")),newStyleEl.appendChild(source.createTextNode(returnText))})),target.head.appendChild(newStyleEl)}}}))}(document,_this2.window.document)}),0),"function"==typeof onOpen&&onOpen(this.window),this.window.addEventListener("beforeunload",this.release)):"function"==typeof onBlock?onBlock():console.warn("A new window could not be opened. Maybe it was blocked.")}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.window&&(this.release(),this.window.close())}}]),NewWindow}(_react.default.PureComponent);NewWindow.defaultProps={url:"",name:"",width:640,height:480,copyStyles:!0};var _default=NewWindow;exports.default=_default},330:function(module,exports,__webpack_require__){__webpack_require__(331),__webpack_require__(503),module.exports=__webpack_require__(504)},405:function(module,exports){},504:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(73),_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(319),storybook_addon_source__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(692),__webpack_require__(320)),storybook_addon_source__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(storybook_addon_source__WEBPACK_IMPORTED_MODULE_3__);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__.withNotes),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(storybook_addon_source__WEBPACK_IMPORTED_MODULE_3___default.a),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){__webpack_require__(694)}),module)}.call(this,__webpack_require__(248)(module))},694:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_markdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(321),react_markdown__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(322),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(73),_storybook_addon_console__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(323),rc_source_loader_examples_simple__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(324),rc_source_loader_examples_simple__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(rc_source_loader_examples_simple__WEBPACK_IMPORTED_MODULE_5__),_examples_simple__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(325),_storybook_theming__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(327),_README_md__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(203);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.addParameters)({options:{theme:_storybook_theming__WEBPACK_IMPORTED_MODULE_7__.themes.light,name:"rc-new-window",url:"https://github.com/ticlo/rc-new-window",title:"rc-new-window"}});var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a,{escapeHtml:!1,source:_README_md__WEBPACK_IMPORTED_MODULE_8__.a}),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_examples_simple__WEBPACK_IMPORTED_MODULE_6__.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("rc-new-window",module).addDecorator(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_2__.withA11y).addDecorator((function(storyFn,context){return Object(_storybook_addon_console__WEBPACK_IMPORTED_MODULE_4__.withConsole)()(storyFn)(context)})).add("README",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"markdown-body entry-content",style:{padding:24}},_ref)}),{source:{code:_README_md__WEBPACK_IMPORTED_MODULE_8__.a}}).add("simple",(function(){return _ref2}),{source:{code:rc_source_loader_examples_simple__WEBPACK_IMPORTED_MODULE_5___default.a}})}.call(this,__webpack_require__(248)(module))}},[[330,1,2]]]);
//# sourceMappingURL=main.ac2d02786f85a7e34c58.bundle.js.map