(window.webpackJsonp=window.webpackJsonp||[]).push([[26,7],{231:function(t,e,r){var content=r(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("b1ae614a",content,!0,{sourceMap:!1})},233:function(t,e,r){"use strict";r(231)},234:function(t,e,r){var n=r(77)(!1);n.push([t.i,"",""]),t.exports=n},235:function(t,e,r){"use strict";r.r(e);var n={props:["title","type","link","thumb","category"],name:"GalleryItem"},o=(r(233),r(7)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card col-md-4 col-sm-6 col-xs-12 filtr-item",attrs:{"data-category":t.category}},[r("a",{class:[{"fancybox.iframe":"youtube"===t.type},"fancybox"],attrs:{href:t.link,"data-fancybox-group":"gallery"}},[r("div",{staticClass:"mu-single-gallery"},[r("div",{staticClass:"mu-single-gallery-img"},[r("a",{attrs:{href:"#"}},[r("img",{attrs:{alt:"img",src:t.thumb}})])]),t._v(" "),r("div",{staticClass:"mu-single-gallery-info"},[r("h4",[t._v(t._s(t.title))]),t._v(" "),"image"===t.type?r("a",{staticClass:"aa-link",attrs:{href:"#"}},[r("span",{staticClass:"fa fa-eye"})]):"youtube"===t.type?r("a",{staticClass:"aa-link",attrs:{href:"#"}},[r("span",{staticClass:"fab fa-youtube"})]):r("a",{staticClass:"aa-link",attrs:{href:"#"}},[r("span",{staticClass:"fa fa-link"})])])])])])}),[],!1,null,"3e22d76a",null);e.default=component.exports},272:function(t,e,r){var content=r(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("337b1706",content,!0,{sourceMap:!1})},282:function(t,e,r){"use strict";r(272)},283:function(t,e,r){var n=r(77)(!1);n.push([t.i,"p[data-v-d016140e]{text-align:center}#demo[data-v-d016140e]{height:100%;position:relative;overflow:hidden}.green[data-v-d016140e]{background-color:#6fb936}.thumb[data-v-d016140e]{margin-bottom:30px;min-height:200px}img.zoom[data-v-d016140e]{width:100%;height:200px;border-radius:5px;-o-object-fit:cover;object-fit:cover;-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;-ms-transition:all .3s ease-in-out}.transition[data-v-d016140e]{transform:scale(1.2)}.modal-header[data-v-d016140e]{border-bottom:none}.modal-title[data-v-d016140e]{color:#000}.modal-footer[data-v-d016140e]{display:none}.gallery[data-v-d016140e]{min-height:100vh;padding-bottom:100px}.controls[data-v-d016140e]{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;padding:20px 0;list-style:none}.buttons[data-v-d016140e]{height:40px;width:140px;background:#fff;color:#666;font-size:20px;line-height:40px;cursor:pointer;margin:20px;box-shadow:0 3px 5px rgba(0,0,0,.3);text-align:center}.buttons.active[data-v-d016140e]{background:coral;color:#fff}.gallery .image-container[data-v-d016140e]{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.gallery .image-container .image[data-v-d016140e]{height:250px;width:350px;overflow:hidden;border:10px solid #fff;box-shadow:0 3px 5px rgba(0,0,0,.3);margin:10px}.gallery .image-container .image img[data-v-d016140e]{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.gallery .image-container .image:hover img[data-v-d016140e]{transform:scale(1.4)}",""]),t.exports=n},311:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(29),r(30),r(246)),l=r.n(o),c={name:"gallery",data:function(){return{}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,t.route,t.router,e.next=3,r("galleries").fetch();case 3:return n=e.sent,o=n.map((function(t){return t.imgArray.map((function(t){return t}))})),console.log(o),e.abrupt("return",{galleries:n,allImages:o});case 7:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Галерея"}},methods:{},mounted:function(){jQuery,$(document).ready((function(){new l.a("#filter-container",{gutterPixels:3}),$(".btn[data-filter]").on("click",(function(){$(".btn[data-filter]").removeClass("active"),$(this).addClass("active")})),$(".fancybox").fancybox({arrows:!0,animationEffect:"zoom"}),$(".zoom").hover((function(){$(this).addClass("transition")}),(function(){$(this).removeClass("transition")}))}))},components:{GalleryItem:r(235).default}},d=(r(282),r(7)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{attrs:{id:"mu-page-breadcrumb"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"mu-page-breadcrumb-area"},[r("h2",{staticStyle:{color:"white"}},[t._v("Галерея")]),t._v(" "),r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[t._v("Главная")])],1),t._v(" "),r("li",{staticClass:" breadcrumb-item active"},[t._v("Галерея")])])])])])])]),t._v(" "),r("section",[r("div",{staticClass:"gallery"},[r("ul",{staticClass:"controls"},[r("li",{staticClass:"buttons btn filter",attrs:{"data-filter":"all"}},[t._v("All")]),t._v(" "),r("li",{staticClass:"buttons btn filter",attrs:{"data-filter":"kittens"}},[t._v("М дом")]),t._v(" "),t._l(t.galleries,(function(e,n){return r("li",{key:e+"-filter-"+n,class:["buttons","btn","filter",{active:"Кошкин дом"===e.category}],attrs:{"data-filter":e.category}},[t._v("\n\t\t\t\t\t\t"+t._s(e.category)+"\n\t\t\t\t\t")])}))],2),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"filter-container row",attrs:{id:"filter-container"}},t._l(t.allImages[0],(function(t,e){return r("div",{key:t+e,staticClass:" image filtr-item col-md-4",attrs:{"data-category":t.category}},[r("a",{staticClass:" ice-cream",attrs:{href:t.link}},[r("img",{attrs:{src:t.thumb,alt:""}})])])})),0)])])])])}),[],!1,null,"d016140e",null);e.default=component.exports}}]);