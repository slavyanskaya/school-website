(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{240:function(t,e,r){"use strict";r.r(e);r(23);var n=r(2),c={name:"index",head:function(){return{title:"Новости, страница "+this.$route.params.page}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,l,o,m,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,t.route,c=2,l=parseInt(n.page),o=l*c-c,e.next=6,r("articles").without(["body"]).sortBy("createdAt","desc").skip(o).limit(c).fetch();case 6:return m=e.sent,e.t0=Math,e.next=10,r("articles").only(["createdAt"]).fetch();case 10:return e.t1=e.sent.length,e.t2=c,e.t3=e.t1/e.t2,d=e.t0.ceil.call(e.t0,e.t3),e.abrupt("return",{articles:m,page:l,pagesCount:d,skip:o});case 15:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"})},changePageBefore:function(){this.$router.push({name:"articles-page",params:{page:parseInt(this.$route.params.page)-1}})},changePageAfter:function(){this.$router.push({name:"articles-page",params:{page:parseInt(this.$route.params.page)+1}})}}},l=r(6),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fragment",[r("section",{attrs:{id:"mu-page-breadcrumb"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"mu-page-breadcrumb-area"},[r("h2",{staticStyle:{color:"white"}},[t._v("Новости")]),t._v(" "),r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[t._v("Главная")])],1),t._v(" "),r("li",{staticClass:" breadcrumb-item active"},[t._v("Новости")])])])])])])]),t._v(" "),r("section",{attrs:{id:"mu-course-content"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"mu-course-content-area"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"mu-course-container mu-blog-archive"},[r("div",{staticClass:"row"},t._l(t.articles,(function(article,e){return r("div",{key:article.slug,staticClass:"col-md-12 col-sm-12"},[r("article",{staticClass:"mu-blog-single-item"},[r("figure",{staticClass:"mu-blog-single-img"},[r("figcaption",{staticClass:"mu-blog-caption"},[r("h3",[r("strong",[r("nuxt-link",{attrs:{to:{name:"article-slug",params:{slug:article.slug}}}},[t._v(t._s(article.description))])],1)])]),t._v(" "),r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:"/images/articles/"+article.slug+"/article-header-image.jpg",alt:article.description}})])]),t._v(" "),r("div",{staticClass:"mu-blog-meta"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tАвтор: "),r("i",[t._v(t._s(article.author.name))]),t._v(" "),r("br"),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.formatDate(article.createdAt))+"\n")]),t._v(" "),r("div",{staticClass:"mu-blog-description"},[r("nuxt-link",{staticClass:"mu-read-more-btn",attrs:{to:{name:"article-slug",params:{slug:article.slug}}}},[t._v("Подробнее")])],1)])])})),0)])])])])])])])])])}),[],!1,null,"5835f938",null);e.default=component.exports}}]);