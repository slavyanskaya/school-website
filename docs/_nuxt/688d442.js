(window.webpackJsonp=window.webpackJsonp||[]).push([[24,7,13],{231:function(t,e,r){var content=r(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("dd4e69b8",content,!0,{sourceMap:!1})},232:function(t,e,r){"use strict";r(231)},233:function(t,e,r){var n=r(77)(!1);n.push([t.i,".disabled[data-v-0e4ded53]{cursor:not-allowed;opacity:.6;pointer-events:none}.pagination[data-v-0e4ded53]{display:flex;flex-wrap:wrap;border-radius:30px}.pagination__item[data-v-0e4ded53]{list-style:none;padding-bottom:2px;padding-top:2px}.pagination__link[data-v-0e4ded53]{display:block;text-decoration:none;width:40px;height:40px;line-height:40px;margin:5px;background:#fff;border-radius:4px;text-align:center;box-shadow:0 2px 5px rgba(0,0,0,.4);color:#2c3a47}.pagination__link--active[data-v-0e4ded53],.pagination__link[data-v-0e4ded53]:hover{background:#00bdfe;color:#fff}.pagination__link--prev[data-v-0e4ded53]{border-radius:20px 0 0 20px}.pagination__link--next[data-v-0e4ded53]{border-radius:0 20px 20px 0}",""]),t.exports=n},241:function(t,e,r){"use strict";r.r(e);var n={name:"Pagination",props:["meta","range"],data:function(){return{allPageNumbers:[],pageNumbersInRange:[],surroundPages:(this.range-1)/2,start:0,end:0}},mounted:function(){parseInt(this.$route.params.page)===this.meta.current_page?this.setFilteredItems():this.$router.push({params:{page:this.meta.current_page}})},created:function(){},methods:{setFilteredItems:function(){var t=0,e=0,r=this.meta.current_page;this.allPageNumbers=[];for(var i=0;i<this.meta.last_page;i++)this.allPageNumbers.push(i+1);r<this.range-this.surroundPages?e=(t=1)+this.range-1:r<=this.allPageNumbers.length&&r>this.allPageNumbers.length-this.range+this.surroundPages?(t=this.allPageNumbers.length-this.range+1,e=this.allPageNumbers.length):(t=r-this.surroundPages,e=parseInt(r)+parseInt(this.surroundPages)),t<1&&(t=1),e>this.allPageNumbers.length&&(e=this.allPageNumbers.length),this.pageNumbersInRange=[];for(var n=t;n<=e;n++)this.pageNumbersInRange.push(n)}}},l=(r(232),r(7)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mu-pagination"},[r("nav",[r("ul",{staticClass:"pagination"},[r("li",{staticClass:"pagination__item"},[r("nuxt-link",{class:["pagination__link","pagination__link--prev",{disabled:t.meta.current_page==t.allPageNumbers[0]||0==t.allPageNumbers.length}],attrs:{to:{params:{page:t.allPageNumbers[0]}}}},[r("i",{staticClass:"fas fa-angle-double-left"})])],1),t._v(" "),r("li",{staticClass:"pagination__item"},[r("nuxt-link",{class:["pagination__link",{disabled:t.meta.current_page<=t.allPageNumbers[0]||0==t.allPageNumbers.length}],attrs:{to:{params:{page:t.meta.current_page-1}}}},[r("span",{staticClass:"fa fa-angle-left"})])],1),t._v(" "),t._l(t.pageNumbersInRange,(function(e,n){return r("li",{key:n,staticClass:"pagination__item"},[r("nuxt-link",{class:["pagination__link",{"pagination__link--active":e==t.meta.current_page}],attrs:{to:{params:{page:e}}}},[t._v(t._s(e)+"\n\t\t\t\t\t\t\t")])],1)})),t._v(" "),r("li",{staticClass:"pagination__item"},[r("nuxt-link",{class:["pagination__link",{disabled:t.meta.current_page>=t.allPageNumbers[t.allPageNumbers.length-1]||0==t.allPageNumbers.length}],attrs:{to:{params:{page:t.meta.current_page+1}}}},[r("span",{staticClass:"fa fa-angle-right"})])],1),t._v(" "),r("li",{staticClass:"pagination__item"},[r("nuxt-link",{class:["pagination__link","pagination__link--next",{disabled:t.meta.current_page>=t.allPageNumbers[t.allPageNumbers.length-1]||0==t.allPageNumbers.length}],attrs:{to:{params:{page:t.meta.last_page}}}},[r("i",{staticClass:"fas fa-angle-double-right"})])],1)],2)])])}),[],!1,null,"0e4ded53",null);e.default=component.exports},242:function(t,e,r){"use strict";var n=r(5),l=r(30),o=r(31),c=r(156),d=r(79),f=r(11),m=r(57).f,_=r(58).f,h=r(14).f,v=r(243).trim,y="Number",k=n.Number,x=k,C=k.prototype,N=o(r(103)(C))==y,I="trim"in String.prototype,P=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,l,o=(e=I?e.trim():v(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>l)return NaN;return parseInt(c,n)}}return+e};if(!k(" 0o1")||!k("0b1")||k("+0x1")){k=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof k&&(N?f((function(){C.valueOf.call(r)})):o(r)!=y)?c(new x(P(e)),r,k):P(e)};for(var w,E=r(9)?m(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),B=0;E.length>B;B++)l(x,w=E[B])&&!l(k,w)&&h(k,w,_(x,w));k.prototype=C,C.constructor=k,r(16)(n,y,k)}},243:function(t,e,r){var n=r(4),l=r(42),o=r(11),c=r(244),d="["+c+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),_=function(t,e,r){var l={},d=o((function(){return!!c[t]()||"​"!="​"[t]()})),f=l[t]=d?e(h):c[t];r&&(l[r]=f),n(n.P+n.F*d,"String",l)},h=_.trim=function(t,e){return t=String(l(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=_},244:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},272:function(t,e,r){"use strict";r.r(e);r(242);var n={props:{placeholder:{type:String,default:"loading.gif"},thumbLink:{type:String,required:!0},type:{type:String,required:!0},finalLink:{type:String,required:!0},title:{type:String,required:!0},category:{type:String,required:!0},alt:{type:String,default:""},blurAmount:{type:Number,default:5}},data:function(){return{imagePlaceholder:this.placeholder,imageThumb:this.placeholder,loaded:!1,completed:!1}},methods:{setWindowLoaded:function(){var t=this;setTimeout((function(){t.loaded=!0}),100)},lazyLoad:function(){this.loaded&&!this.completed&&(this.completed=!0,this.imageThumb=this.thumbLink)}},mounted:function(){window.addEventListener("load",this.setWindowLoaded),window.addEventListener("scroll",this.lazyLoad)},name:"GalleryItem"},l=r(7),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 galleryBlock__item mix filtr-item",attrs:{"data-category":t.category,"data-sort":"value"}},[r("a",{class:[{"fancybox.iframe":"youtube"===t.type},"fancybox","galleryBlock__link"],attrs:{href:t.finalLink,"data-fancybox-group":"gallery"}},[r("div",{staticClass:"galleryBlock__container"},[r("div",{staticClass:"galleryBlock__inner"},[r("img",{staticClass:"galleryBlock__image",attrs:{src:t.imageThumb,alt:""}}),t._v(" "),r("div",{staticClass:"galleryBlock__info"},["image"===t.type?r("a",{staticClass:"aa-link",attrs:{href:"#"}},[r("span",{staticClass:"fa fa-eye fa-3x"})]):"youtube"===t.type?r("a",{staticClass:"aa-link",attrs:{href:"#"}},[r("span",{staticClass:"fab fa-youtube fa-3x"})]):r("a",{staticClass:"aa-link",attrs:{href:"#"}},[r("span",{staticClass:"fa fa-link fa-3x"})])])])])])])}),[],!1,null,"efd7401e",null);e.default=component.exports},299:function(t,e,r){"use strict";r.r(e);var n=r(2),l=(r(29),r(33),r(272)),o={name:"gallery",data:function(){return{}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,t.route,t.router,e.next=3,r("galleries").fetch();case 3:return n=e.sent,l=n.map((function(t){return t.imgArray.map((function(t){return t}))})),e.abrupt("return",{galleries:n,allImages:l});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Галерея"}},mounted:function(){jQuery,$(document).ready((function(){jQuery((function(){jQuery("#mixit-container").mixItUp()})),$(".fancybox").fancybox({keyboard:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:!0,helpers:{overlay:{locked:!1}},buttons:["zoom","share","slideShow","fullScreen","download","thumbs","close"],animationEffect:"zoom"})}))},components:{Pagination:r(241).default,GalleryItemLazy:l.default}},c=o,d=r(7),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fb-reset"},[r("section",{attrs:{id:"mu-page-breadcrumb"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"mu-page-breadcrumb-area"},[r("h2",{staticStyle:{color:"white"}},[t._v("Галерея")]),t._v(" "),r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[t._v("Главная")])],1),t._v(" "),r("li",{staticClass:" breadcrumb-item active"},[t._v("Галерея")])])])])])])]),t._v(" "),r("section",{staticStyle:{"min-height":"100vh",background:"#eee"},attrs:{id:"gallery"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"filterBlock"},[t._m(0),t._v(" "),r("div",{staticClass:"filterBlock__content"},[r("ul",{staticClass:"filterBlock__filters-list"},t._l(t.galleries,(function(e,n){return r("li",{key:e+"-filter-"+n,class:["filterBlock__filter","filter",{"filterBlock__filter--active":"Кошкин дом"===e.category}],attrs:{"data-filter":e.category}},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.category)+"\n\t\t\t\t\t\t\t\t\t")])})),0)])])])]),t._v(" "),r("ul",{staticClass:"row filter-container galleryBlock",attrs:{id:"filter-container mixit-container"}},t._l(t.allImages[0],(function(e,n){return r("li",{key:e+n,staticClass:"col-12 col-sm-12 col-md-6 col-lg-4 galleryBlock__item mix filtr-item",attrs:{"data-category":e.category,"data-sort":"value"}},[r("a",{class:[{"fancybox.iframe":"youtube"===e.type},"fancybox","galleryBlock__link"],attrs:{href:e.link,"data-fancybox-group":"gallery"}},[r("div",{staticClass:"galleryBlock__container"},[r("div",{staticClass:"galleryBlock__inner"},[r("img",{staticClass:"galleryBlock__image",attrs:{src:e.thumb,alt:""}}),t._v(" "),r("div",{staticClass:"galleryBlock__info"},["image"===e.type?r("a",{staticClass:"aa-link",attrs:{href:"#"}},[r("span",{staticClass:"fa fa-image fa-3x"})]):"youtube"===e.type?r("a",{staticClass:"aa-link",attrs:{href:"#"}},[r("span",{staticClass:"fab fa-youtube fa-3x"})]):r("a",{staticClass:"aa-link",attrs:{href:"#"}},[r("span",{staticClass:"fa fa-link fa-3x"})])])])])])])})),0)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"filterBlock__title"},[r("h2",[t._v('Галерея изображений и видео из жизни "Славянской"')])])}],!1,null,"b4b3f716",null);e.default=component.exports}}]);