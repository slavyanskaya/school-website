(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{194:function(t,e,r){var content=r(215);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(69).default)("2aafe01b",content,!0,{sourceMap:!1})},214:function(t,e,r){"use strict";var c=r(194);r.n(c).a},215:function(t,e,r){(e=r(68)(!1)).push([t.i,"",""]),t.exports=e},248:function(t,e,r){"use strict";r.r(e);r(23);var c=r(2),n={head:function(){return{title:this.article.description,meta:[{hid:"description",name:"description",content:this.article.description},{hid:"article",name:"article",content:this.article.bodyText}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,c=t.params,e.next=3,r("articles",c.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"})}}},l=(r(214),r(6)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fragment",[r("section",{attrs:{id:"mu-page-breadcrumb"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"mu-page-breadcrumb-area"},[r("h2",[t._v("Новость")]),t._v(" "),r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[t._v("Главная")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:{name:"articles-page",params:{page:1}}}},[t._v("Новости")])],1),t._v(" "),r("li",{staticClass:" breadcrumb-item active"},[t._v("Статья")])])])])])])]),t._v(" "),r("section",{attrs:{id:"mu-course-content"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"mu-course-content-area"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"mu-course-container mu-blog-single"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("article",{staticClass:"mu-blog-single-item"},[r("figure",{staticClass:"mu-blog-single-img"},[r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:"/images/articles/"+t.article.slug+"/article-header-image.jpg",alt:t.article.description}})]),t._v(" "),r("br"),t._v(" "),r("figcaption",{staticClass:"mu-blog-caption"},[r("h3",[r("strong",{attrs:{href:"#"}},[t._v(t._s(t.article.description))])])])]),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"mu-blog-description"},[r("nuxt-content",{attrs:{document:t.article}}),t._v(" "),r("hr",{staticClass:"w-100 my-2"})],1),t._v(" "),r("div",{staticClass:"mu-blog-meta"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tАвтор: "),r("i",[t._v(t._s(t.article.author.name))]),t._v(" "),r("br"),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.formatDate(1e3*t.article.manualCreatedAt))+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])])])]),t._v(" "),r("div",{staticClass:"col-md-3"},[r("aside",{staticClass:"mu-sidebar"})])])])])])])])])}),[],!1,null,"a3d8bf88",null);e.default=component.exports}}]);