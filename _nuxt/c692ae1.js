(window.webpackJsonp=window.webpackJsonp||[]).push([[24,4,6,12],{330:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},331:function(t,e,r){var content=r(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("c1602c40",content,!0,{sourceMap:!1})},332:function(t,e,r){var content=r(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("6f1f5be4",content,!0,{sourceMap:!1})},333:function(t,e,r){"use strict";r.r(e);var n={props:{products:{type:Boolean,default:!1},current:{type:Object,default:function(){}},category:{type:Object,default:function(){}},subcategory:{type:Object,default:function(){}}},computed:{returnLang:function(){return this.$i18n.locale}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-wrap border-t-2 py-4 px-4 border-b-2 border-primary"},[r("NuxtLink",{staticClass:"mr-2",attrs:{to:t.localePath("/")}},[t._v("\n    "+t._s("en"===t.returnLang?"Home":"Početna")+"\n    "),r("span",{staticClass:"ml-2"},[t._v("/")])]),t._v(" "),t.products?r("NuxtLink",{staticClass:"mr-2",attrs:{to:t.localePath("/products")}},[t._v("\n    "+t._s("en"===t.returnLang?"Products":"Proizvodi")+"\n    "),r("span",{staticClass:"ml-2"},[t._v("/")])]):t._e(),t._v(" "),t.category?r("NuxtLink",{staticClass:"mr-2",attrs:{to:t.localePath("/products/"+t.category.slug)}},[t._v("\n    "+t._s("en"===t.returnLang?t.category.name_en:t.category.name_sr)+"\n    "),r("span",{staticClass:"ml-2"},[t._v("/")])]):t._e(),t._v(" "),t.subcategory?r("NuxtLink",{staticClass:"mr-2",attrs:{to:t.localePath("/products/"+t.category.slug+"/"+t.subcategory.slug)}},[t._v("\n    "+t._s("en"===t.returnLang?t.subcategory.name_en:t.subcategory.name_sr)+"\n    "),r("span",{staticClass:"ml-2"},[t._v("/")])]):t._e(),t._v(" "),t.current?r("span",{staticClass:"mr-2"},[t._v("\n    "+t._s("en"===t.returnLang?t.current.name_en:t.current.name_sr)+"\n    "+t._s("en"===t.returnLang?t.current.title_en:t.current.title_sr)+"\n    "+t._s(t.current.name)+"\n  ")]):t._e()],1)}),[],!1,null,"08ec14bd",null);e.default=component.exports},334:function(t,e,r){var n=r(5),o=r(40),l=r(17),c=r(330),f=n("".replace),d="["+c+"]",m=RegExp("^"+d+d+"*"),_=RegExp(d+d+"*$"),y=function(t){return function(e){var r=l(o(e));return 1&t&&(r=f(r,m,"")),2&t&&(r=f(r,_,"")),r}};t.exports={start:y(1),end:y(2),trim:y(3)}},335:function(t,e,r){"use strict";var n=r(4),o=r(334).trim;n({target:"String",proto:!0,forced:r(338)("trim")},{trim:function(){return o(this)}})},336:function(t,e,r){"use strict";r(331)},337:function(t,e,r){var n=r(55)((function(i){return i[1]}));n.push([t.i,"@media only screen and (min-width:1024px){.filterContainer[data-v-ab8c0b8c]{max-width:20rem!important}}",""]),n.locals={},t.exports=n},338:function(t,e,r){var n=r(91).PROPER,o=r(6),l=r(330);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||n&&l[t].name!==t}))}},339:function(t,e,r){"use strict";r(332)},340:function(t,e,r){var n=r(55)((function(i){return i[1]}));n.push([t.i,".refs{max-width:100vw}.refs::-webkit-scrollbar{display:none}.product-table tr+tr{border-top-width:1px;--tw-border-opacity:1;border-color:rgb(60 98 189 / var(--tw-border-opacity))}.product-table td+td{border-left-width:1px;--tw-border-opacity:1;border-color:rgb(60 98 189 / var(--tw-border-opacity))}",""]),n.locals={},t.exports=n},341:function(t,e,r){"use strict";r.r(e);r(26),r(20),r(38),r(39);var n=r(15),o=(r(22),r(11),r(25),r(41));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={data:function(){return{toggled:{category:!0,industry:!1,brand:!1},filter:{category:null,brand:null,industry:null},categories:[]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({returnLang:function(){return this.$i18n.locale},products:function(){return this.$store.getters.getProductsByBrand(this.$route.params.slug)},brandName:function(){return this.$store.getters.getBrand(this.$route.params.slug)},watchToggled:function(){return this.toggled},watchCategories:function(){return this.categories}},Object(o.b)(["sinofarm","brands","industries"])),mounted:function(){this.fillCategories(),this.setCatToggledOnMount(this.$route.params.category)},methods:{returnSubcategories:function(t,e){return e.filter((function(sub){return sub.category.name_sr===t.name_sr}))},setFilter:function(t,e){"category"===e?this.filter.category=t:"industry"===e?this.filter.industry=t:"brand"===e&&(this.filter.brand=t),this.filteredProducts=this.products.filter(this.filterProducts)},setToggled:function(t,e,r){t.target.classList.contains("main")&&("category"===e?(this.toggled.category=!this.toggled.category,this.toggled.brand=!1,this.toggled.industry=!1):"brand"===e?(this.toggled.category=!1,this.toggled.brand=!this.toggled.brand,this.toggled.industry=!1):"industry"===e&&(this.toggled.category=!1,this.toggled.brand=!1,this.toggled.industry=!this.toggled.industry))},setCatToggled:function(t){this.categories.forEach((function(e){e.slug===t.slug?e.toggled=!e.toggled:e.toggled=!1}))},setCatToggledOnMount:function(t){this.categories.forEach((function(e){e.slug===t?e.toggled=!0:e.toggled=!1}))},isCatToggled:function(t,e){var r=!1;return t.forEach((function(t){t.slug===e.slug&&(r=!!t.toggled)})),r},fillCategories:function(){var t=this;this.$store.getters.getCategories.forEach((function(e){var r={};r.slug=e.slug,r.toggled=!1,t.categories.push(r)}))}}},f=c,d=(r(336),r(12)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex mb-10 flex-col w-full filterContainer lg:mr-10"},[n("Collapsible",{attrs:{filter:"","link-title":t.$t("productspage.filter.categories"),"text-color":"text-primary","is-toggled":t.watchToggled.category,main:""},nativeOn:{click:function(e){return t.setToggled(e,"category",!t.toggled.category)}},scopedSlots:t._u([{key:"body",fn:function(){return t._l(t.sinofarm.categories,(function(e){return n("Collapsible",{key:e.name_sr,attrs:{linkurl:t.localePath("/products/"+e.slug),category:"","link-title":"sr"===t.returnLang?e.name_sr:e.name_en,"text-color":"text-primary","is-toggled":t.isCatToggled(t.watchCategories,e)},nativeOn:{click:function(r){return t.setCatToggled(e)}},scopedSlots:t._u([{key:"body",fn:function(){return t._l(t.returnSubcategories(e,t.sinofarm.subcategories),(function(e){return n("NuxtLink",{key:e.name_sr,staticClass:"mb-1 flex justify-between items-center text-left font-lato text-gray focus:outline-none focus:text-black",attrs:{to:t.localePath("/products/"+e.category.slug+"/"+e.slug)}},[t._v("\n            "+t._s("sr"===t.returnLang?e.name_sr:e.name_en)+"\n            "),t.$route.params.subcat===e.slug?n("img",{staticClass:"w-4 h-4",attrs:{src:r(121),alt:""}}):t._e()])}))},proxy:!0}],null,!0)})}))},proxy:!0}])}),t._v(" "),n("Collapsible",{attrs:{filter:"","link-title":t.$t("productspage.filter.industries"),"text-color":"text-primary","is-toggled":t.watchToggled.industry,main:""},nativeOn:{click:function(e){return t.setToggled(e,"industry",!t.toggled.industry)}},scopedSlots:t._u([{key:"body",fn:function(){return t._l(t.industries,(function(e){return n("NuxtLink",{key:e.title_sr,staticClass:"mb-2 flex justify-between items-center text-left font-lato text-primary focus:outline-none focus:text-black",attrs:{to:t.localePath("/industries/"+e.slug)}},[t._v("\n        "+t._s(e.title_sr)+"\n      ")])}))},proxy:!0}])}),t._v(" "),n("Collapsible",{attrs:{filter:"","link-title":t.$t("productspage.filter.brands"),"text-color":"text-primary","is-toggled":t.watchToggled.brand,main:""},nativeOn:{click:function(e){return t.setToggled(e,"brand",!t.toggled.brand)}},scopedSlots:t._u([{key:"body",fn:function(){return t._l(t.brands,(function(e){return n("NuxtLink",{key:e.name,staticClass:"mb-2 flex justify-between items-center font-lato text-primary text-left focus:outline-none focus:text-black",attrs:{to:e.slug!==t.$route.params.slug?t.localePath("/brands/"+e.slug):t.localePath("/products")}},[t._v("\n        "+t._s(e.name)+"\n      ")])}))},proxy:!0}])})],1)}),[],!1,null,"ab8c0b8c",null);e.default=component.exports;installComponents(component,{Collapsible:r(221).default})},342:function(t,e,r){"use strict";r.r(e);r(45),r(23),r(68),r(335),r(11),r(25);var n={props:{product:{type:Object,default:function(){return{}}}},computed:{returnLang:function(){return this.$i18n.locale}},methods:{formatSpec:function(t){var e=t.refNumber.split("-").map((function(t){return t.trim()})),r=null;r=t.type_en?t.type_en.split("-").map((function(t){return t.trim()})):t.type.split("-").map((function(t){return t.trim()}));var n=null;n=t.type_sr?t.type_sr.split("-").map((function(t){return t.trim()})):t.type.split("-").map((function(t){return t.trim()}));var o=null;o=t.size_en?t.size_en.split("-").map((function(t){return t.trim()})):t.size.split("-").map((function(t){return t.trim()}));var l=null;l=t.size_sr?t.size_sr.split("-").map((function(t){return t.trim()})):t.size.split("-").map((function(t){return t.trim()}));var c=null;c=t.color_en?t.color_en.split("-").map((function(t){return t.trim()})):t.color.split("-").map((function(t){return t.trim()}));var f=null;f=t.color_sr?t.color_sr.split("-").map((function(t){return t.trim()})):t.color.split("-").map((function(t){return t.trim()}));var d=t.package.split("-").map((function(t){return t.trim()})),m=[];return e.forEach((function(t,i){var e={};e.ref=t,e.type_en=r[i],e.type_sr=n[i],e.size_en=o[i],e.size_sr=l[i],e.color_en=c[i],e.color_sr=f[i],e.pack=d[i],m.push(e)})),m}}},o=(r(339),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",{ref:"product",staticClass:"flex w-full flex-col",attrs:{tabindex:"0"}},[r("div",{staticClass:"flex flex-col mb-10 lg:flex-row"},[r("a",{ref:"overview",staticClass:"product-image border-2 border-primary md:w-96 lg:mr-10",attrs:{href:"https://sinofarm-portal.4bees.io"+t.product.image.url,target:"_blank"}},[t.product.image.url?r("img",{staticClass:"w-full h-full object-cover",attrs:{src:"https://sinofarm-portal.4bees.io"+t.product.image.url,alt:""}}):t._e()]),t._v(" "),r("div",{staticClass:"lg:w-4/6"},[r("h1",{staticClass:"font-lato font-bold text-2xl text-primary mt-6 mb-6"},[t._v("\n        "+t._s("sr"===t.returnLang?t.product.name_sr:t.product.name_en)+"\n      ")]),t._v(" "),r("p",{staticClass:"font-lato font-normal text-lg text-gray"},[t._v("\n        "+t._s("sr"===t.returnLang?t.product.description_sr:t.product.description_en)+"\n      ")])])]),t._v(" "),t.product.refNumber||t.product["specification_"+t.returnLang]?r("div",{ref:"specification",staticClass:"mb-20",attrs:{id:"specification"}},[r("h2",{staticClass:"font-lato font-bold text-2xl text-primary mb-6"},[t._v("\n      "+t._s(t.$t("product.specification"))+"\n    ")]),t._v(" "),r("div",{staticClass:"refs overflow-x-scroll"},[null!==t.product.refNumber?r("table",{staticClass:"product-table mb-6 w-full border border-primary"},[r("tr",{staticClass:"bg-primary text-white text-left"},[r("th",{staticClass:"sm:pl-2 w-4 sm:w-1/5 font-normal py-2"},[t._v("\n            "+t._s("en"===t.returnLang?"REF Number":"REF Broj")+"\n          ")]),t._v(" "),r("th",{staticClass:"sm:pl-2 font-normal w-1/5"},[t._v("\n            "+t._s("en"===t.returnLang?"Type":"Tip")+"\n          ")]),t._v(" "),r("th",{staticClass:"sm:pl-2 font-normal w-1/5"},[t._v("\n            "+t._s("en"===t.returnLang?"Size":"Veličina")+"\n          ")]),t._v(" "),r("th",{staticClass:"sm:pl-2 font-normal w-1/5"},[t._v("\n            "+t._s("en"===t.returnLang?"Color":"Boja")+"\n          ")]),t._v(" "),r("th",{staticClass:"sm:pl-2 font-normal w-auto"},[t._v("\n            "+t._s("en"===t.returnLang?"Package":"Pakovanje")+"\n          ")])]),t._v(" "),t._l(t.formatSpec(t.product),(function(e){return r("tr",{key:e.ref},[r("td",{staticClass:"py-2 sm:p-2"},[t._v(t._s(e.ref))]),t._v(" "),r("td",{staticClass:"sm:p-2"},[t._v("\n            "+t._s("en"===t.returnLang?e.type_en:e.type_sr)+"\n          ")]),t._v(" "),r("td",{staticClass:"sm:p-2 break-words"},[t._v("\n            "+t._s("en"===t.returnLang?e.size_en:e.size_sr)+"\n          ")]),t._v(" "),r("td",{staticClass:"sm:p-2"},[t._v("\n            "+t._s("en"===t.returnLang?e.color_en:e.color_sr)+"\n          ")]),t._v(" "),r("td",{staticClass:"sm:p-2"},[t._v(t._s(e.pack))])])}))],2):t._e()]),t._v(" "),t.product.specification_sr||t.product.specification_en?r("div",{staticClass:"whitespace-pre-line"},[t._v("\n      "+t._s("sr"===t.returnLang?t.product.specification_sr:t.product.specification_en)+"\n    ")]):t._e()]):t._e()]):t._e()}),[],!1,null,null,null);e.default=component.exports},368:function(t,e,r){var content=r(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("74113d17",content,!0,{sourceMap:!1})},414:function(t,e,r){"use strict";r(368)},415:function(t,e,r){var n=r(55)((function(i){return i[1]}));n.push([t.i,".product-image[data-v-b23050fc]{width:50%}@media only screen and (max-width:1024px){.row-container[data-v-b23050fc]{min-width:800px}.product-image[data-v-b23050fc]{width:100%}}",""]),n.locals={},t.exports=n},438:function(t,e,r){"use strict";r.r(e);r(45),r(23),r(68),r(335),r(11),r(25);var n={data:function(){return{pageTitle:""}},computed:{returnLang:function(){return this.$i18n.locale},product:function(){return this.$store.getters.getProductById(parseInt(this.$route.params.id))}},mounted:function(){this.setPageTitle()},methods:{scrollOverview:function(){this.$scrollTo(this.$refs.overview,500,{easing:"ease-in",offset:-150})},scrollSpec:function(){this.$scrollTo(this.$refs.specification,500,{easing:"ease-in",offset:-270})},setPageTitle:function(){var t=this.$store.getters.getProductById(parseInt(this.$route.params.id));"en"===this.returnLang?this.pageTitle=t.name_en:this.pageTitle=t.name_sr},formatSpec:function(t){var e=t.refNumber.split("-").map((function(t){return t.trim()})),r=t.type.split("-").map((function(t){return t.trim()})),n=t.size.split("-").map((function(t){return t.trim()})),o=t.color.split("-").map((function(t){return t.trim()})),l=t.package.split("-").map((function(t){return t.trim()})),c=[];return e.forEach((function(t,i){var e={};e.ref=t,e.type=r[i],e.size=n[i],e.color=o[i],e.pack=l[i],c.push(e)})),c}},head:function(){return{title:"Sinofarm | ".concat(this.pageTitle)}}},o=(r(414),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pt-48"},[r("div",{staticClass:"container mx-auto px-4 py-10"},[r("BreadcrumbN",{attrs:{products:""}}),t._v(" "),r("div",{staticClass:"flex flex-col lg:flex-row mt-4 lg:mt-16"},[r("SideMenu"),t._v(" "),t.product?r("Product",{attrs:{product:t.product}}):t._e()],1)],1)])}),[],!1,null,"b23050fc",null);e.default=component.exports;installComponents(component,{BreadcrumbN:r(333).default,SideMenu:r(341).default,Product:r(342).default})}}]);