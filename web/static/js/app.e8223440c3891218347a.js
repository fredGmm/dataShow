webpackJsonp([1],{1:function(t,s,a){"use strict";var i=a(33),e=a.n(i),r=a(78),c=a.n(r);a(65);e()(c.a.defaults,c.a.defaults.headers.post["Content-Type"])},23:function(t,s,a){"use strict";var i=a(2),e=a(76);i.a.use(e.a);var r=new e.a({routes:[{path:"/index",component:a(72)},{path:"*",redirect:"/index"}]});s.a=r},24:function(t,s){},27:function(t,s,a){a(61);var i=a(7)(a(29),a(73),null,null);t.exports=i.exports},29:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"app",components:{},data:function(){return{mshow:!1}},created:function(){},events:{},methods:{menushow:function(){var t=this;t.mshow=!t.mshow}}}},30:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});a(1);s.default={components:{},data:function(){return{}},props:[],created:function(){},mounted:function(){},methods:{}}},31:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=(a(2),a(1),a(71)),e=a.n(i);s.default={name:"index",components:{topNav:e.a},data:function(){return{}},mounted:function(){new window.Swiper("#swiper1",{pagination:".swiper-pagination",paginationClickable:!0,spaceBetween:0,centeredSlides:!1,autoplay:500,loop:!0,autoplayDisableOnInteraction:!0,lazyLoading:!0})},methods:{}}},32:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a(2),e=a(27),r=a.n(e),c=a(23),n=(a(1),a(28)),l=(a.n(n),a(25)),o=a.n(l),v=a(26),p=a.n(v),_=a(24);a.n(_);window.FastClick=o.a,window.Swiper=p.a;new i.a({el:"#app",router:c.a,template:"<App/>",components:{App:r.a}})},61:function(t,s){},62:function(t,s){},63:function(t,s){},70:function(t,s,a){t.exports=a.p+"static/img/juzi_logo2.5b2f2b0.jpg"},71:function(t,s,a){a(62);var i=a(7)(a(30),a(74),null,null);t.exports=i.exports},72:function(t,s,a){a(63);var i=a(7)(a(31),a(75),null,null);t.exports=i.exports},73:function(t,s,a){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"header"},[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"header-top"},[t._m(0),t._v(" "),i("div",{staticClass:"top-menu right"},[i("div",[i("router-link",{attrs:{to:{path:"index"}}},[t._v("苹果")]),t._v(" "),i("router-link",{attrs:{to:{path:"index"}}},[t._v("香蕉")]),t._v(" "),i("router-link",{attrs:{to:{path:"index"}}},[t._v("猕猴桃")]),t._v(" "),i("router-link",{attrs:{to:{path:"index"}}},[t._v("葡萄")]),t._v(" "),i("router-link",{attrs:{to:{path:"index"}}},[i("i"),t._v("水果购入")])],1)])]),t._v(" "),i("div",{staticClass:"header-bottom"},[i("div",{staticClass:"img-c left"},[i("router-link",{attrs:{to:{path:"index"}}},[i("img",{attrs:{src:a(70),alt:"桔子吃饭"}})])],1),t._v(" "),i("div",{staticClass:"header-menu right"},[i("ul",{staticClass:"menu"},[t._m(1),t._v(" "),i("li",{staticClass:"menu-item-has-children",on:{click:function(s){t.menushow()}}},[i("a",{attrs:{href:"javascript:;"}},[t._v("博客")]),t._v(" "),i("ul",{staticClass:"sub-menu",class:{show:t.mshow}},[t._m(2),t._v(" "),t._m(3)])]),t._v(" "),i("li",{staticClass:"menu-item-has-children",on:{click:function(s){t.menushow()}}},[i("a",{attrs:{href:"javascript:;"}},[t._v("水果")]),t._v(" "),i("ul",{staticClass:"sub-menu",class:{show:t.mshow}},[t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)])]),t._v(" "),i("li",{staticClass:"menu-item-has-children",on:{click:function(s){t.menushow()}}},[i("a",{attrs:{href:"javascript:;"}},[t._v("蔬菜")]),t._v(" "),i("ul",{staticClass:"sub-menu",class:{show:t.mshow}},[t._m(7),t._v(" "),t._m(8)])]),t._v(" "),t._m(9),t._v(" "),i("li",{staticClass:"menu-item-has-children",on:{click:function(s){t.menushow()}}},[i("a",{attrs:{href:"javascript:;"}},[t._v("爬虫趣事")]),t._v(" "),i("ul",{staticClass:"sub-menu",class:{show:t.mshow}},[t._m(10),t._v(" "),t._m(11)])]),t._v(" "),t._m(12)])])])])]),t._v(" "),i("section",{staticClass:"app-main"},[i("router-view")],1)])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"top-menu left"},[a("span",[t._v("您好，欢迎访问本站!")]),t._v(" "),a("a",{attrs:{href:"javascript:;"}},[a("i"),t._v("登录")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("首页")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("桂明明")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("罗双玥")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("橘子")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("香蕉")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("苹果")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("胡萝卜")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("白萝卜")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("肉类")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("bxj发帖分析")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("知乎故事会")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("关于")])])}]}},74:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div")},staticRenderFns:[]}},75:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("section",{staticClass:"container",attrs:{id:"aa"}},[a("section",{staticClass:"bulletin wrapper wow bounceInUp animated"},[a("div",{staticClass:"bulletin_title"},[a("i",{staticClass:"icon-mic"}),t._v(" "),a("h3",[t._v("公告")])]),t._v(" "),a("div",{staticClass:"swiper-container swiper-bulletin swiper-container-vertical"},[a("p",[t._v("萨龙网络微信网页登录与客户端内登录")])])]),t._v(" "),a("section",{staticClass:"slides-sticky wrapper wow bounceInUp animated"},[a("div",{staticClass:"slide-main slide-home"},[a("div",{staticClass:"swiper-container ",attrs:{id:"swiper1"}},[a("div",{staticClass:"swiper-wrapper"},[a("div",{staticClass:"swiper-slide",staticStyle:{"background-image":"url(https://yfdxs.com/wp-content/themes/lensnews/images/slides/01.jpg)"}}),t._v(" "),a("div",{staticClass:"swiper-slide",staticStyle:{"background-image":"url(https://yfdxs.com/wp-content/themes/lensnews/images/slides/02.jpg)"}}),t._v(" "),a("div",{staticClass:"swiper-slide",staticStyle:{"background-image":"url(https://yfdxs.com/wp-content/themes/lensnews/images/slides/03.jpg)"}})]),t._v(" "),a("div",{staticClass:"swiper-pagination"},[t._v("111")])])]),t._v(" "),a("div",{staticClass:"sticky box triangle"},[a("ul",[a("li",[a("div",{staticClass:"postlist clear"},[a("div",{staticClass:"left figure clear"},[a("a",{attrs:{href:"javascript:;"}},[a("img",{attrs:{src:"https://yfdxs.com/wp-content/themes/lensnews/images/slides/01.jpg"}})])]),t._v(" "),a("div",{staticClass:"right right-list claer"},[a("p",[a("a",{attrs:{href:"javascript:;"}},[t._v("第二次徒步登上苍山之巅(崇圣寺三塔至大理电视塔)")])]),t._v(" "),a("div",{staticClass:"homeinfo"},[a("span",{staticClass:"category"},[a("a",{attrs:{href:"javascript:;",rel:"category tag"}},[t._v("徒步登山")])]),t._v(" "),a("span",{staticClass:"date"},[t._v("2017-04-26")]),t._v(" "),a("span",{staticClass:"like",attrs:{title:"请先浏览本文章，再确定是否点赞！"}},[a("i",{staticClass:"icon-thumbs-up"}),a("span",{staticClass:"count"},[t._v("37")])])])])])]),t._v(" "),a("li",[a("div",{staticClass:"postlist clear"},[a("div",{staticClass:"left figure clear"},[a("a",{attrs:{href:"javascript:;"}},[a("img",{attrs:{src:"https://yfdxs.com/wp-content/themes/lensnews/images/slides/01.jpg"}})])]),t._v(" "),a("div",{staticClass:"right right-list claer"},[a("p",[a("a",{attrs:{href:"javascript:;"}},[t._v("第二次徒步登上苍山之巅(崇圣寺三塔至大理电视塔)")])]),t._v(" "),a("div",{staticClass:"homeinfo"},[a("span",{staticClass:"category"},[a("a",{attrs:{href:"javascript:;",rel:"category tag"}},[t._v("徒步登山")])]),t._v(" "),a("span",{staticClass:"date"},[t._v("2017-04-26")]),t._v(" "),a("span",{staticClass:"like",attrs:{title:"请先浏览本文章，再确定是否点赞！"}},[a("i",{staticClass:"icon-thumbs-up"}),a("span",{staticClass:"count"},[t._v("37")])])])])])]),t._v(" "),a("li",[a("div",{staticClass:"postlist clear"},[a("div",{staticClass:"left figure clear"},[a("a",{attrs:{href:"javascript:;"}},[a("img",{attrs:{src:"https://yfdxs.com/wp-content/themes/lensnews/images/slides/01.jpg"}})])]),t._v(" "),a("div",{staticClass:"right right-list claer"},[a("p",[a("a",{attrs:{href:"javascript:;"}},[t._v("第二次徒步登上苍山之巅(崇圣寺三塔至大理电视塔)")])]),t._v(" "),a("div",{staticClass:"homeinfo"},[a("span",{staticClass:"category"},[a("a",{attrs:{href:"javascript:;",rel:"category tag"}},[t._v("徒步登山")])]),t._v(" "),a("span",{staticClass:"date"},[t._v("2017-04-26")]),t._v(" "),a("span",{staticClass:"like",attrs:{title:"请先浏览本文章，再确定是否点赞！"}},[a("i",{staticClass:"icon-thumbs-up"}),a("span",{staticClass:"count"},[t._v("37")])])])])])]),t._v(" "),a("li",[a("div",{staticClass:"postlist clear"},[a("div",{staticClass:"left figure clear"},[a("a",{attrs:{href:"javascript:;"}},[a("img",{attrs:{src:"https://yfdxs.com/wp-content/themes/lensnews/images/slides/01.jpg"}})])]),t._v(" "),a("div",{staticClass:"right right-list claer"},[a("p",[a("a",{attrs:{href:"javascript:;"}},[t._v("第二次徒步登上苍山之")])]),t._v(" "),a("div",{staticClass:"homeinfo"},[a("span",{staticClass:"category"},[a("a",{attrs:{href:"javascript:;",rel:"category tag"}},[t._v("徒步登山")])]),t._v(" "),a("span",{staticClass:"date"},[t._v("2017-04-26")]),t._v(" "),a("span",{staticClass:"like",attrs:{title:"请先浏览本文章，再确定是否点赞！"}},[a("i",{staticClass:"icon-thumbs-up"}),a("span",{staticClass:"count"},[t._v("37")])])])])])])]),t._v(" "),a("a",{staticClass:"more",attrs:{href:"javascript:;",title:"查看更多置顶推荐的文章"}},[a("span",[t._v("更多置顶推荐的文章")]),a("i",{staticClass:"icon-right"})])])]),t._v(" "),a("section",{staticClass:"like wrapper box triangle wow bounceInUp animated"},[a("div",{staticClass:"home_title clear"},[a("h3",{staticClass:"left"},[t._v("最喜欢的文章")])]),t._v(" "),a("div",{staticClass:"post_list post_bottom clear"},[a("ul",{staticClass:"layout_ul"},[a("li",{staticClass:"layout_li"},[a("div",{staticClass:"postgrid"},[a("div",{staticClass:"figure"},[a("img",{staticClass:"thumb",attrs:{src:"https://yfdxs.com/wp-content/themes/lensnews/includes/timthumb.php?src=https://pic.salongweb.com/sites/2/2014/10/qixingdali_122.jpg&h=338&w=600"}})]),t._v(" "),a("h2",[a("a",{attrs:{href:"https://yfdxs.com/riding-dali-life.html",title:"骑行去大理生活",target:"_blank"}},[t._v("骑行去大理生活")])]),t._v(" "),a("div",{staticClass:"homeinfo"},[a("span",{staticClass:"category"},[a("a",{attrs:{href:"javascript:;",rel:"category tag"}},[t._v("珍藏记忆")])]),t._v(" "),a("span",{staticClass:"date"},[t._v("2014-10-25")]),t._v(" "),a("span",{staticClass:"like",attrs:{title:"请先浏览本文章，再确定是否点赞！"}},[a("i",{staticClass:"icon-thumbs-up"}),a("span",{staticClass:"count"},[t._v("63")])])])])]),t._v(" "),a("li",{staticClass:"layout_li"},[a("div",{staticClass:"postgrid"},[a("div",{staticClass:"figure"},[a("img",{staticClass:"thumb",attrs:{src:"https://yfdxs.com/wp-content/themes/lensnews/includes/timthumb.php?src=https://pic.salongweb.com/sites/2/2014/10/qixingdali_122.jpg&h=338&w=600"}})]),t._v(" "),a("h2",[a("a",{attrs:{href:"https://yfdxs.com/riding-dali-life.html",title:"骑行去大理生活",target:"_blank"}},[t._v("骑行去大理生活")])]),t._v(" "),a("div",{staticClass:"homeinfo"},[a("span",{staticClass:"category"},[a("a",{attrs:{href:"javascript:;",rel:"category tag"}},[t._v("珍藏记忆")])]),t._v(" "),a("span",{staticClass:"date"},[t._v("2014-10-25")]),t._v(" "),a("span",{staticClass:"like",attrs:{title:"请先浏览本文章，再确定是否点赞！"}},[a("i",{staticClass:"icon-thumbs-up"}),a("span",{staticClass:"count"},[t._v("63")])])])])]),t._v(" "),a("li",{staticClass:"layout_li"},[a("div",{staticClass:"postgrid"},[a("div",{staticClass:"figure"},[a("img",{staticClass:"thumb",attrs:{src:"https://yfdxs.com/wp-content/themes/lensnews/includes/timthumb.php?src=https://pic.salongweb.com/sites/2/2014/10/qixingdali_122.jpg&h=338&w=600"}})]),t._v(" "),a("h2",[a("a",{attrs:{href:"https://yfdxs.com/riding-dali-life.html",title:"骑行去大理生活",target:"_blank"}},[t._v("骑行去大理生活")])]),t._v(" "),a("div",{staticClass:"homeinfo"},[a("span",{staticClass:"category"},[a("a",{attrs:{href:"javascript:;",rel:"category tag"}},[t._v("珍藏记忆")])]),t._v(" "),a("span",{staticClass:"date"},[t._v("2014-10-25")]),t._v(" "),a("span",{staticClass:"like",attrs:{title:"请先浏览本文章，再确定是否点赞！"}},[a("i",{staticClass:"icon-thumbs-up"}),a("span",{staticClass:"count"},[t._v("63")])])])])]),t._v(" "),a("li",{staticClass:"layout_li"},[a("div",{staticClass:"postgrid"},[a("div",{staticClass:"figure"},[a("img",{staticClass:"thumb",attrs:{src:"https://yfdxs.com/wp-content/themes/lensnews/includes/timthumb.php?src=https://pic.salongweb.com/sites/2/2016/08/chudengcangshan_001.jpg&h=338&w=600"}})]),t._v(" "),a("h2",[a("a",{attrs:{href:"https://yfdxs.com/riding-dali-life.html",title:"骑行去大理生活",target:"_blank"}},[t._v("骑行去大理生活")])]),t._v(" "),a("div",{staticClass:"homeinfo"},[a("span",{staticClass:"category"},[a("a",{attrs:{href:"javascript:;",rel:"category tag"}},[t._v("珍藏记忆")])]),t._v(" "),a("span",{staticClass:"date"},[t._v("2014-10-25")]),t._v(" "),a("span",{staticClass:"like",attrs:{title:"请先浏览本文章，再确定是否点赞！"}},[a("i",{staticClass:"icon-thumbs-up"}),a("span",{staticClass:"count"},[t._v("63")])])])])])])])])])])}]}}},[32]);
//# sourceMappingURL=app.e8223440c3891218347a.js.map