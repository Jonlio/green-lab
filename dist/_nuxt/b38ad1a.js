(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(t,e,n){var content=n(215);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("56b15182",content,!0,{sourceMap:!1})},162:function(t,e,n){"use strict";n(214);var o=n(23),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Navbar"),this._v(" "),e("Nuxt"),this._v(" "),e("LazyFooter")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Navbar:n(228).default,LazyFooter:function(){return n.e(2).then(n.bind(null,257)).then((function(t){return t.default||t}))}})},168:function(t,e,n){n(169),t.exports=n(170)},214:function(t,e,n){"use strict";n(145)},215:function(t,e,n){(e=n(53)(!1)).push([t.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}',""]),t.exports=e},216:function(t,e,n){t.exports=n.p+"img/a63d715.png"},228:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"w-40 md:ml-10",attrs:{src:n(216),alt:"logo web more green"}})])}],r={data:function(){return{isOpen:!1}},watch:{isOpen:{immediate:!0,handler:function(t){t?document.body.style.setProperty("overflow","hidden"):document.body.style.removeProperty("overflow")}}},mounted:function(){var t=this;document.addEventListener("keydown",(function(e){27==e.keyCode&&t.isOpen&&(t.isOpen=!1)}))},methods:{drawer:function(){this.isOpen=!this.isOpen}}},l=n(23),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"w-screen pr-8"},[n("div",{staticClass:"h-30 flex justify-between items-center p-10"},[t._m(0),t._v(" "),n("div",{staticClass:"md:hidden"},[n("button",{on:{click:t.drawer}},[n("svg",{staticClass:"h-8 w-8 fill-current text-black",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16"}})])])]),t._v(" "),n("div",{staticClass:"hidden md:block"},[n("ul",{staticClass:"flex space-x-8 text-xl font-bold text-black font-sans"},[n("li",[n("nuxt-link",{staticClass:"transition duration-500 ease-in-out border-b-2 pb-2 border-white hover:border-blue-900",attrs:{to:"/"}},[t._v("\n            Agenda\n          ")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"transition duration-500 ease-in-out border-b-2 pb-2 border-white hover:border-blue-900",attrs:{to:"/#"}},[t._v("\n            Services et infos pratiques\n          ")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"transition duration-500 ease-in-out border-b-2 pb-2 border-white hover:border-blue-900",attrs:{to:"/#"}},[t._v("\n            Action municipale\n          ")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"transition duration-500 ease-in-out border-b-2 pb-2 border-white hover:border-blue-900",attrs:{to:"/#"}},[t._v("\n            Découvrir Tours\n          ")])],1)])]),t._v(" "),n("transition",{attrs:{"enter-class":"opacity-0","enter-active-class":"ease-out transition-medium","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-active-class":"ease-out transition-medium","leave-to-class":"opacity-0"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"z-10 fixed inset-0 transition-opacity",on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.isOpen=!1}}},[n("div",{staticClass:"absolute inset-0 bg-black opacity-50",attrs:{tabindex:"0"},on:{click:function(e){t.isOpen=!1}}})])]),t._v(" "),n("aside",{staticClass:"p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30",class:t.isOpen?"translate-x-0":"-translate-x-full"},[n("div",{staticClass:"close"},[n("button",{staticClass:"absolute top-0 right-0 mt-4 mr-4",on:{click:function(e){t.isOpen=!1}}},[n("svg",{staticClass:"w-6 h-6",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{d:"M6 18L18 6M6 6l12 12"}})])])]),t._v(" "),n("ul",{staticClass:"divide-y"},[n("li",{on:{click:t.drawer}},[n("nuxt-link",{staticClass:"my-4 inline-block",attrs:{to:"/"}},[t._v("\n            Agenda\n          ")])],1),t._v(" "),n("li",{on:{click:t.drawer}},[n("nuxt-link",{staticClass:"my-4 inline-block",attrs:{to:"#"},on:{click:function(e){t.isOpen=!0}}},[t._v("\n            Services et infos pratiques\n          ")])],1),t._v(" "),n("li",{on:{click:t.drawer}},[n("nuxt-link",{staticClass:"my-4 inline-block",attrs:{to:"#"},on:{click:function(e){t.isOpen=!0}}},[t._v("\n            Action municipale\n          ")])],1),t._v(" "),n("li",{on:{click:t.drawer}},[n("nuxt-link",{staticClass:"my-4 inline-block",attrs:{to:"#"},on:{click:function(e){t.isOpen=!0}}},[t._v("\n            Découvrir Tours\n          ")])],1),t._v(" "),n("li",[n("a",{staticClass:"my-4 inline-block",attrs:{href:"mailto:webmoregreen@gmail.com"},on:{click:function(e){t.isOpen=!1}}},[t._v("Contact")])])]),t._v(" "),n("div",{staticClass:"follow"},[n("p",{staticClass:"italic font-sans text-sm"},[t._v("\n          follow us:\n        ")]),t._v(" "),n("div",{staticClass:"social flex space-x-5 mt-4 "},[n("a",{attrs:{href:"https://twitter.com/WebMoreGreen1"}},[n("svg",{staticClass:"h-5 w-5 fill-current text-gray-600",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"twitter",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})])])])])])],1)])}),o,!1,null,null,null);e.default=component.exports}},[[168,5,1,6]]]);