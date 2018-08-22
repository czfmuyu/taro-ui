(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"305":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(1)),o=_interopRequireDefault(n(0)),l=n(45),i=_interopRequireDefault(n(46));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(306);var u=function(e){function AtTextarea(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtTextarea),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtTextarea.__proto__||Object.getPrototypeOf(AtTextarea)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtTextarea,o.default.Component),a(AtTextarea,[{"key":"handleInput","value":function handleInput(e){var t;(t=this.props).onChange.apply(t,[e].concat(Array.prototype.slice.call(arguments)))}},{"key":"handleFocus","value":function handleFocus(e){var t;(t=this.props).onFocus.apply(t,[e].concat(Array.prototype.slice.call(arguments)))}},{"key":"handleBlur","value":function handleBlur(e){var t;(t=this.props).onBlur.apply(t,[e].concat(Array.prototype.slice.call(arguments)))}},{"key":"handleConfirm","value":function handleConfirm(e){var t;(t=this.props).onConfirm.apply(t,[e].concat(Array.prototype.slice.call(arguments)))}},{"key":"render","value":function render(){var e=this.props,t=e.value,n=e.cursorSpacing,a=e.maxlength,i=e.placeholder,u=e.count,c=e.disabled,s=e.autoFocus,f=e.fixed,p=e.textOverflowForbidden,d=e.height,h=a;p||(h+=500);var m=d?"height:"+r.default.pxTransform(d):"";return o.default.createElement(l.View,{"className":"at-textarea"},o.default.createElement(l.Textarea,{"style":m,"placeholderClass":"placeholder","cursorSpacing":n,"className":"at-textarea__textarea","value":t,"showConfirmBar":!1,"confirmType":"完成","maxlength":h,"placeholder":i,"disabled":c,"autoFocus":s,"fixed":f,"onInput":this.handleInput.bind(this),"onFocus":this.handleFocus.bind(this),"onBlur":this.handleBlur.bind(this),"onConfirm":this.handleConfirm.bind(this)}),u?o.default.createElement(l.View,{"className":a<t.length?"at-textarea__bottom at-textarea--error":"at-textarea__bottom"},t.length,"/",a):null)}}]),AtTextarea}(),c=function defaultFunc(){};u.defaultProps={"value":"","cursorSpacing":100,"maxlength":200,"placeholder":"","disabled":!1,"autoFocus":!1,"count":!0,"fixed":!1,"height":"","textOverflowForbidden":!0,"onChange":c,"onFocus":c,"onBlur":c,"onConfirm":c},u.propTypes={"value":i.default.string,"cursorSpacing":i.default.number,"maxlength":i.default.oneOfType([i.default.string,i.default.number]),"placeholder":i.default.string,"disabled":i.default.bool,"autoFocus":i.default.bool,"count":i.default.bool,"textOverflowForbidden":i.default.bool,"fixed":i.default.bool,"height":i.default.string,"onChange":i.default.func,"onFocus":i.default.func,"onBlur":i.default.func,"onConfirm":i.default.func},t.default=u},"306":function(e,t,n){},"308":function(e,t,n){},"42":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),o=n(45),l=_interopRequireDefault(n(305)),i=_interopRequireDefault(n(49));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(308);var u=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"value1":"","value2":"","value3":"","value4":""},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,r.default.Component),a(Index,[{"key":"handleChange","value":function handleChange(e,t){this.state[e]=t.target.value,this.setState()}},{"key":"render","value":function render(){return r.default.createElement(o.View,{"className":"page"},r.default.createElement(i.default,{"title":"Textarea 多行文本框"}),r.default.createElement(o.View,{"className":"doc-body"},r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"基础"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(l.default,{"value":this.state.value1,"onChange":this.handleChange.bind(this,"value1"),"maxlength":"200","placeholder":"你的问题是..."})))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"不显示字数"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(l.default,{"count":!1,"value":this.state.value2,"onChange":this.handleChange.bind(this,"value2"),"maxlength":"200","placeholder":"你的问题是..."})))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"文字超出仍可输入"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(l.default,{"textOverflowForbidden":!1,"value":this.state.value3,"onChange":this.handleChange.bind(this,"value3"),"maxlength":"200","placeholder":"你的问题是..."})))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"自定义高度"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(l.default,{"height":"300","value":this.state.value4,"onChange":this.handleChange.bind(this,"value4"),"maxlength":"200","placeholder":"你的问题是..."}))))))}}]),Index}();t.default=u},"46":function(e,t,n){e.exports=n(47)()},"47":function(e,t,n){"use strict";var a=n(48);function emptyFunction(){}e.exports=function(){function shim(e,t,n,r,o,l){if(l!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"48":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"49":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(1),o=(_interopRequireDefault(r),_interopRequireDefault(n(0))),l=_interopRequireDefault(n(46)),i=n(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(50);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,r.Component),a(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return o.default.createElement(i.View,{"className":"doc-header"},o.default.createElement(i.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":l.default.string}},"50":function(e,t,n){}}]);