(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],f=0,p=[];f<o.length;f++)r=o[f],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1195:function(t,e,a){},3010:function(t,e,a){t.exports=a.p+"img/home-5-hero-image.2c64fc13.png"},"392e":function(t,e,a){var n={"./home-5-image-box-01.png":"fa33","./home-5-image-box-02.png":"7ab9","./home-5-image-box-03.png":"53fb","./home-5-image-box-04.png":"83c1"};function s(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id="392e"},4623:function(t,e,a){"use strict";a("e21d")},"4b0f":function(t,e,a){"use strict";a("805a")},"53fb":function(t,e,a){t.exports=a.p+"img/home-5-image-box-03.ea1cbeb0.png"},5425:function(t,e,a){"use strict";a("8fe0")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("Main"),a("Footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("nav",{staticClass:"my-container container h-100"},[a("div",{staticClass:"row align-items-center h-100"},[t._m(0),a("div",{staticClass:"col-10 h-100"},[a("ul",{staticClass:"h-100"},[t._l(t.menus,(function(e,n){return a("li",{key:n,staticClass:"pointer"},[t._v(" "+t._s(e)+" "),a("i",{staticClass:"fas fa-chevron-down fa-xs"})])})),t._m(1),t._m(2),a("li",[a("Search")],1)],2)])])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-2"},[n("img",{staticClass:"img-fluid w-75 py-3 pe-3",attrs:{src:a("7bde"),alt:"logo"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"pointer"},[a("div",{staticClass:"cart position-relative"},[a("i",{staticClass:"bi bi-cart3"}),a("span",{staticClass:"\n                  position-absolute\n                  top-0\n                  start-100\n                  translate-middle\n                  badge\n                  rounded-pill\n                "},[a("span",[t._v("0")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"pointer"},[a("div",{staticClass:"user rounded-circle text-center"},[a("i",{staticClass:"far fa-user fa-md"})])])}],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search..."}}),a("button",{staticClass:"input-group-text",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-search"})])])}],u={name:"Search"},f=u,p=(a("c535"),a("2877")),m=Object(p["a"])(f,c,l,!1,null,"370f03e6",null),d=m.exports,b={name:"Header",components:{Search:d},data:function(){return{menus:["Home","Pages","Courses","Features","Blog","Shop"]}}},v=b,h=(a("4b0f"),Object(p["a"])(v,r,o,!1,null,"ba96c7a4",null)),g=h.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("MainHero"),a("section",{staticClass:"my-5",attrs:{id:"coding-languages"}},[a("p",{staticClass:"text-center text-uppercase"},[t._v("Start learning coding languages")]),t._m(0),a("div",{staticClass:"my-container container mt-5"},[a("div",{staticClass:"row"},t._l(t.boxes,(function(t){return a("div",{key:t.img,staticClass:"col-3"},[a("Box",{attrs:{box:t}})],1)})),0)])])],1)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"text-center"},[t._v(" Build Your Dream "),a("span",{staticClass:"text-uppercase fw-light"},[t._v("today")])])}],y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"py-5 position-relative",attrs:{id:"main-hero"}},[n("div",{staticClass:"my-container container h-100 position-relative"},[n("div",{staticClass:"row h-100"},[n("div",{staticClass:"col-6"},[n("div",{staticClass:"text-hero w-50 mt-5"},[n("h2",[t._v("Complete Your Dreams in JavaS Programming")]),n("p",{staticClass:"my-4"},[t._v(" Learn any coding program in distance and for a reasonable fee. You don't have to struggle alone, you've got our assistance and help. ")]),n("button",{staticClass:"btn px-4 py-2",attrs:{type:"button"}},[n("i",{staticClass:"fas fa-download"}),t._v(" Download free E-book ")])])]),n("div",{staticClass:"col-6 h-100 text-end"},[n("img",{staticClass:"h-100",attrs:{src:a("3010"),alt:"main-hero"}})])])]),n("div",{staticClass:"wave position-absolute"})])}],w={name:"MainHero"},O=w,E=(a("ae81"),Object(p["a"])(O,y,C,!1,null,"72fac0b3",null)),S=E.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card border-0"},[a("img",{staticClass:"img-fluid px-5",attrs:{src:t.ImgUrl,alt:t.box.title}}),a("div",{staticClass:"card-body text-center"},[a("h6",{staticClass:"card-title mb-3"},[t._v(t._s(t.box.title))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.box.text))]),a("a",{attrs:{href:t.box.link}},[t._v("Start now "),a("i",{staticClass:"fas fa-arrow-right"})])])])},k=[],$={name:"Box",props:{box:Object},computed:{ImgUrl:function(){return a("392e")("./home-5-image-box-".concat(this.box.img,".png"))}}},M=$,P=(a("4623"),Object(p["a"])(M,j,k,!1,null,"12360eec",null)),D=P.exports,H={name:"Main",components:{MainHero:S,Box:D},data:function(){return{boxes:[{img:"01",title:"Idea Discussion",text:"Get teamed up with the specialists who work and teach coding for years at famous universities.",link:"#"},{img:"02",title:"Web Development",text:"Learn to start building a webpage from scratch. You decide your own pace, course and speed.",link:"#"},{img:"03",title:"System Administration",text:"Learners are encouraged to study the mechanism and structure of system administration.",link:"#"},{img:"04",title:"Graphic Design",text:"Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness.",link:"#"}]}}},L=H,B=(a("f5db"),Object(p["a"])(L,_,x,!1,null,"5c1023c6",null)),F=B.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"pt-5 position-relative"},[a("div",{staticClass:"my-container container"},[a("div",{staticClass:"row",attrs:{id:"footer-top"}},[t._l(t.lists,(function(t,e){return a("div",{key:e+t.title,class:t.col},[a("List",{attrs:{list:t}})],1)})),a("Social")],2),t._m(0)]),t._m(1)])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row my-4",attrs:{id:"footer-bottom"}},[a("div",{staticClass:"col-12 text-center"},[t._v(" © Maxcoach. All Rights Reserved ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"arrow-up position-absolute"},[a("i",{staticClass:"bi bi-arrow-up-circle-fill"})])}],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"title",class:t.list.opacity?"opacity-0":null},[t._v(" "+t._s(t.list.title)+" ")]),a("ul",t._l(t.list.items,(function(e,n){return a("li",{key:n},[a("a",{attrs:{href:"#"}},[t._v(t._s(e))])])})),0)])},U=[],Y={name:"Lsit",props:{list:Object}},J=Y,N=(a("bfd8"),Object(p["a"])(J,I,U,!1,null,"4bfb0376",null)),G=N.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.socials,(function(t,e){return a("a",{key:e,staticClass:"me-4",attrs:{href:"#"}},[a("i",{class:"fab fa-"+t+" fa-2x"})])})),0)},q=[],W={name:"Social",data:function(){return{socials:["facebook-square","twitter","instagram","linkedin"]}}},z=W,K=(a("a6aa"),Object(p["a"])(z,R,q,!1,null,"67ea519b",null)),Q=K.exports,V={name:"Footer",components:{List:G,Social:Q},data:function(){return{lists:[{title:"Address",items:["382 NE 191st St # 87394 Miami, FL 33179-3899","+1(305)547-9909 (9am - 5pm EST, Monday - Friday)","support@maxcoach.com"],opacity:!1,col:"col-6"},{title:"Explore",items:["Start here","Blog","About us"],opacity:!1,col:"col-2"},{title:"Explore",items:["Start here","Blog","About us"],opacity:!0,col:"col-2"},{title:"Information",items:["Membership","Purchase guide","Privacy policy","Terms of services"],opacity:!1,col:"col-2"}]}}},X=V,Z=(a("5425"),Object(p["a"])(X,A,T,!1,null,"51776e94",null)),tt=Z.exports,et={name:"App",components:{Header:g,Main:F,Footer:tt}},at=et,nt=(a("5c0b"),Object(p["a"])(at,s,i,!1,null,null,null)),st=nt.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(st)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5f65":function(t,e,a){},"7ab9":function(t,e,a){t.exports=a.p+"img/home-5-image-box-02.ce542eb6.png"},"7bde":function(t,e,a){t.exports=a.p+"img/dark-logo.c709104b.png"},"805a":function(t,e,a){},"83c1":function(t,e,a){t.exports=a.p+"img/home-5-image-box-04.37142ffd.png"},"8e28":function(t,e,a){},"8fe0":function(t,e,a){},"9c0c":function(t,e,a){},a6aa:function(t,e,a){"use strict";a("5f65")},ae81:function(t,e,a){"use strict";a("e6ef")},b77e:function(t,e,a){},bfd8:function(t,e,a){"use strict";a("8e28")},c535:function(t,e,a){"use strict";a("1195")},e21d:function(t,e,a){},e6ef:function(t,e,a){},f5db:function(t,e,a){"use strict";a("b77e")},fa33:function(t,e,a){t.exports=a.p+"img/home-5-image-box-01.4d8c9345.png"}});
//# sourceMappingURL=app.4646b114.js.map