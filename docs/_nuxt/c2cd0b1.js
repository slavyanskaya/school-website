(window.webpackJsonp=window.webpackJsonp||[]).push([[28,16],{231:function(t,e,r){var content=r(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("dd4e69b8",content,!0,{sourceMap:!1})},235:function(t,e,r){"use strict";e.a={inserted:function(t){function e(){t.src=t.dataset.src}function r(r,l){r.forEach((function(r){r.isIntersecting&&(e(),l.unobserve(t))}))}window.IntersectionObserver?new IntersectionObserver(r,{root:null,threshold:0}).observe(t):e()}}},236:function(t,e,r){"use strict";r.r(e);r(232);var l=r(235),n={props:{placeholder:{type:String,default:"loading.gif"},thumbLink:{required:!0},type:{type:String,required:!0},finalLink:{type:String,required:!0},title:{type:String,required:!0},category:{type:Boolean|String,default:!1},alt:{type:String,default:""},blurAmount:{type:Number,default:5}},directives:{lazyload:l.a},name:"GalleryItem"},o=r(7),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["galleryBlock__item",{"filtr-item":t.category}],attrs:{"data-category":t.category}},[r("a",{class:[{"fancybox.iframe":"youtube"===t.type},"fancybox","galleryBlock__link"],attrs:{href:t.finalLink,"data-fancybox-group":"gallery"}},[r("div",{staticClass:"galleryBlock__container"},[r("div",{staticClass:"galleryBlock__inner"},[r("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],staticClass:"galleryBlock__image",attrs:{"data-src":t.thumbLink?t.thumbLink:t.finalLink,src:"https://via.placeholder.com/330x200/",alt:""}}),t._v(" "),r("div",{staticClass:"galleryBlock__info"},["image"===t.type?r("a",{staticClass:"aa-link",attrs:{href:"#"}},[r("span",{staticClass:"fa fa-eye fa-3x"})]):"youtube"===t.type?r("a",{staticClass:"aa-link",attrs:{href:"#"}},[r("span",{staticClass:"fab fa-youtube fa-3x"})]):r("a",{staticClass:"aa-link",attrs:{href:"#"}},[r("span",{staticClass:"fa fa-link fa-3x"})])])])])])])}),[],!1,null,"2e94c6ce",null);e.default=component.exports},237:function(t,e,r){"use strict";r(231)},238:function(t,e,r){var l=r(77)(!1);l.push([t.i,".disabled[data-v-0e4ded53]{cursor:not-allowed;opacity:.6;pointer-events:none}.pagination[data-v-0e4ded53]{display:flex;flex-wrap:wrap;border-radius:30px}.pagination__item[data-v-0e4ded53]{list-style:none;padding-bottom:2px;padding-top:2px}.pagination__link[data-v-0e4ded53]{display:block;text-decoration:none;width:40px;height:40px;line-height:40px;margin:5px;background:#fff;border-radius:4px;text-align:center;box-shadow:0 2px 5px rgba(0,0,0,.4);color:#2c3a47}.pagination__link--active[data-v-0e4ded53],.pagination__link[data-v-0e4ded53]:hover{background:#00bdfe;color:#fff}.pagination__link--prev[data-v-0e4ded53]{border-radius:20px 0 0 20px}.pagination__link--next[data-v-0e4ded53]{border-radius:0 20px 20px 0}",""]),t.exports=l},239:function(t,e,r){"use strict";r.r(e);var l={name:"Pagination",props:["meta","range"],data:function(){return{allPageNumbers:[],pageNumbersInRange:[],surroundPages:(this.range-1)/2,start:0,end:0}},mounted:function(){parseInt(this.$route.params.page)===this.meta.current_page?this.setFilteredItems():this.$router.push({params:{page:this.meta.current_page}})},created:function(){},methods:{setFilteredItems:function(){var t=0,e=0,r=this.meta.current_page;this.allPageNumbers=[];for(var i=0;i<this.meta.last_page;i++)this.allPageNumbers.push(i+1);r<this.range-this.surroundPages?e=(t=1)+this.range-1:r<=this.allPageNumbers.length&&r>this.allPageNumbers.length-this.range+this.surroundPages?(t=this.allPageNumbers.length-this.range+1,e=this.allPageNumbers.length):(t=r-this.surroundPages,e=parseInt(r)+parseInt(this.surroundPages)),t<1&&(t=1),e>this.allPageNumbers.length&&(e=this.allPageNumbers.length),this.pageNumbersInRange=[];for(var l=t;l<=e;l++)this.pageNumbersInRange.push(l)}}},n=(r(237),r(7)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mu-pagination"},[r("nav",[r("ul",{staticClass:"pagination"},[r("li",{staticClass:"pagination__item"},[r("nuxt-link",{class:["pagination__link","pagination__link--prev",{disabled:t.meta.current_page==t.allPageNumbers[0]||0==t.allPageNumbers.length}],attrs:{to:{params:{page:t.allPageNumbers[0]}}}},[r("i",{staticClass:"fas fa-angle-double-left"})])],1),t._v(" "),r("li",{staticClass:"pagination__item"},[r("nuxt-link",{class:["pagination__link",{disabled:t.meta.current_page<=t.allPageNumbers[0]||0==t.allPageNumbers.length}],attrs:{to:{params:{page:t.meta.current_page-1}}}},[r("span",{staticClass:"fa fa-angle-left"})])],1),t._v(" "),t._l(t.pageNumbersInRange,(function(e,l){return r("li",{key:l,staticClass:"pagination__item"},[r("nuxt-link",{class:["pagination__link",{"pagination__link--active":e==t.meta.current_page}],attrs:{to:{params:{page:e}}}},[t._v(t._s(e)+"\n\t\t\t\t\t\t\t")])],1)})),t._v(" "),r("li",{staticClass:"pagination__item"},[r("nuxt-link",{class:["pagination__link",{disabled:t.meta.current_page>=t.allPageNumbers[t.allPageNumbers.length-1]||0==t.allPageNumbers.length}],attrs:{to:{params:{page:t.meta.current_page+1}}}},[r("span",{staticClass:"fa fa-angle-right"})])],1),t._v(" "),r("li",{staticClass:"pagination__item"},[r("nuxt-link",{class:["pagination__link","pagination__link--next",{disabled:t.meta.current_page>=t.allPageNumbers[t.allPageNumbers.length-1]||0==t.allPageNumbers.length}],attrs:{to:{params:{page:t.meta.last_page}}}},[r("i",{staticClass:"fas fa-angle-double-right"})])],1)],2)])])}),[],!1,null,"0e4ded53",null);e.default=component.exports},302:function(t,e,r){"use strict";r.r(e);var l=r(2),n=(r(29),r(32),r(277)),o=r.n(n),c=r(236),d=r(239),f=(r(270),{name:"gallery",data:function(){return{}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,t.route,t.router,e.next=3,r("galleries").fetch();case 3:return l=e.sent,n=[],l.map((function(t){t.imgArray.map((function(t){n.push(t)}))})),console.log(n,l),e.abrupt("return",{galleries:l,allImages:n});case 8:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Галерея"}},mounted:function(){jQuery,$(document).ready((function(){$(".filter[data-filter]").on("click",(function(){console.log(666),$(".filter[data-filter]").removeClass("mixitup-control-active filterBlock__filter--active"),$(this).addClass("mixitup-control-active filterBlock__filter--active")})),new o.a("#filtr-container",{filter:"skupoy-ricar",spinner:{enabled:!0},gutterPixels:15}),$(".fltr-controls[data-filter]").on("click",(function(){$(".fltr-controls[data-filter]").removeClass("filterBlock__filter--active active"),$(this).addClass("filterBlock__filter--active active")})),$(".fancybox").fancybox({keyboard:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:!0,helpers:{overlay:{locked:!1}},buttons:["zoom","share","slideShow","fullScreen","download","thumbs","close"],animationEffect:"zoom"})}))},methods:{},components:{Pagination:d.default,GalleryItemLazy:c.default}}),m=f,_=r(7),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fb-reset"},[r("section",{attrs:{id:"mu-page-breadcrumb"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"mu-page-breadcrumb-area"},[r("h2",{staticStyle:{color:"white"}},[t._v("Галерея")]),t._v(" "),r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[t._v("Главная")])],1),t._v(" "),r("li",{staticClass:" breadcrumb-item active"},[t._v("Галерея")])])])])])])]),t._v(" "),r("section",{staticStyle:{"min-height":"100vh",background:"#eee"},attrs:{id:"gallery"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"filterBlock"},[t._m(0),t._v(" "),r("div",{staticClass:"filterBlock__content"},[r("ul",{staticClass:"filterBlock__filters-list"},t._l(t.galleries,(function(e,l){return r("li",{key:e+"-filter-"+l,class:["filterBlock__filter","fltr-controls","my-2",{"filterBlock__filter--active":"skupoy-ricar"==e.category}],attrs:{"data-filter":e.category}},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t\t\t\t")])})),0)])])])]),t._v(" "),r("div",{staticClass:"galleryBlock",staticStyle:{"text-align":"center","margin-left":"auto","margin-right":"auto"},attrs:{id:"filtr-container"}},t._l(t.allImages,(function(t,e){return r("gallery-item-lazy",{key:t.title+t.text+e,attrs:{title:t.text,category:t.category,type:t.type,finalLink:t.link,thumbLink:t.thumb}})})),1)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"filterBlock__title"},[r("h2",[t._v('Галерея изображений и видео из жизни "Славянской"')])])}],!1,null,"5eff4c18",null);e.default=component.exports;installComponents(component,{GalleryItemLazy:r(236).default})}}]);