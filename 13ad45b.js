(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{431:function(t,e,r){"use strict";r.r(e);r(26),r(20),r(22),r(11),r(38),r(25),r(39);var n=r(15),c=r(41);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({returnLang:function(){return this.$i18n.locale}},Object(c.b)(["articles"]))},f=l,d=r(12),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pt-48"},[r("Breadcrumb",{attrs:{items:t.$t("breadcrumb.news")}}),t._v(" "),r("div",{staticClass:"container mx-auto px-4 py-10"},[r("div",{staticClass:"grid grid-cols-1 justify-items-center md:grid-cols-2 gap-10 lg:grid-cols-3"},t._l(t.articles,(function(article){return r("NuxtLink",{key:article.id,staticClass:"bg-white w-full h-full shadow-lg sm:w-96 mb-10 xl:mb-0 duration-300 transform hover:-translate-y-2",attrs:{to:"/news/"+article.id}},[r("img",{staticClass:"w-full h-64 object-cover",attrs:{src:"https://sinofarm-portal.4bees.io"+article.image.url,alt:""}}),t._v(" "),r("div",{staticClass:"p-6"},[r("h2",{staticClass:"font-lato text-2xl font-bold text-gray mb-5"},[t._v("\n            "+t._s("sr"===t.returnLang?article.title_sr:article.title_en)+"\n          ")]),t._v(" "),r("p",{staticClass:"font-lato text-gray font-bold"},[t._v("\n            "+t._s("sr"===t.returnLang?article.short_desc_sr:article.short_desc_en)+"\n          ")])])])})),1)])],1)}),[],!1,null,"47db43ca",null);e.default=component.exports;installComponents(component,{Breadcrumb:r(225).default})}}]);