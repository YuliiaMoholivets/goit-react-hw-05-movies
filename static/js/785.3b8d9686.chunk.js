(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[785],{576:function(e,n,t){"use strict";t.d(n,{I:function(){return c}});var r=t(7),o=t.n(r),c=function(e,n,t){fetch("".concat("https://api.themoviedb.org/3/","movie/").concat(n,"/").concat(e,"?api_key=").concat("817d33fa7e0ddfc368fbd7439a742f76","&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Enter another name"))})).then((function(e){return t(e)})).catch((function(e){return console.log(e)}))};c.propTypes={value:o().string.isRequired,paramsId:o().string.isRequired,setFoo:o().func.isRequired}},785:function(e,n,t){"use strict";t.r(n);var r=t(439),o=t(576),c=t(791),i=t(689),s=t(184);n.default=function(){var e=(0,i.UO)(),n=Number(e.moviesId),t=(0,c.useState)(),a=(0,r.Z)(t,2),u=a[0],p=a[1];return(0,c.useEffect)((function(){(0,o.I)("reviews",n,p)}),[]),(0,s.jsx)("section",{children:u&&(0,s.jsx)("ul",{children:u.results.length>0?u.results.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsx)("p",{children:e.author}),(0,s.jsx)("p",{children:e.content})]},e.id)})):(0,s.jsx)("li",{children:" We don't have any reviews for this movie"})})})}},888:function(e,n,t){"use strict";var r=t(47);function o(){}function c(){}c.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,c,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:c,resetWarningCache:o};return t.PropTypes=t,t}},7:function(e,n,t){e.exports=t(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=785.3b8d9686.chunk.js.map