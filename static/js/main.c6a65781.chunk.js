(this.webpackJsonpreact_image_finder=this.webpackJsonpreact_image_finder||[]).push([[0],{122:function(e,t,a){},123:function(e,t,a){},284:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),r=a(12),i=a.n(r),s=(a(122),a.p,a(123),a(115)),o=a.n(s),l=a(116),j=a.n(l),u=function(){return Object(c.jsx)(j.a,{title:"INFINITE SCROLL IMAGE BROWSER"})},b=a(72),O=a(13),g=a(71),x=a(67),h=a.n(x),d=a(68),f=a.n(d),p=a(18),m=a.n(p),v=a(45),T=a(35),y=a.n(T),k=a(69),I=a.n(k),L=function(e){var t,a=e.setSearchState,r=e.searchState,i=e.loading,s=(r.page,Object(n.useRef)()),o=Object(n.useCallback)((function(e){i||(s.current&&s.current.disconnect(),s.current=new IntersectionObserver((function(e){console.log("Observing"),e[0].isIntersecting&&(console.log(" Visible!!!!!"),a((function(e){return Object(O.a)(Object(O.a)({},e),{},{page:e.page+1})})))})),e&&s.current.observe(e))}),[i]),l=function(){alert("Thank you for upvoting the image!")};return t=r.images?Object(c.jsx)(v.GridList,{col:3,children:r.images.map((function(e,t){return r.images.length===t+1?Object(c.jsx)(v.GridTile,{title:e.tags,subtitle:Object(c.jsxs)("span",{ref:o,children:[" by ",e.user," - ",e.views," views - ",e.likes," likes"]}),actionIcon:Object(c.jsx)(y.a,{onClick:l,children:Object(c.jsx)(I.a,{color:"white"})}),children:Object(c.jsx)("img",{src:e.largeImageURL,alt:""})},e.id):Object(c.jsx)(v.GridTile,{title:e.tags,subtitle:Object(c.jsxs)("span",{children:[" by ",e.user," - ",e.views," views - ",e.likes," likes"]}),actionIcon:Object(c.jsx)(y.a,{onClick:l,children:Object(c.jsx)(I.a,{color:"white"})}),children:Object(c.jsx)("img",{src:e.largeImageURL,alt:""})},e.id)}))}):null,Object(c.jsx)("div",{children:t})},S={searchText:"",page:1,color:"",order:"popular",apiURL:"https://pixabay.com/api/",apiKey:"11564517-84b49995a08b6211495e54cc9",images:[]},w=a(70),C=a.n(w),R=function(){var e=Object(n.useState)(S),t=Object(g.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!1),s=Object(g.a)(i,2),o=s[0],l=s[1],j=a.searchText,u=a.page,x=a.order,d=a.color;Object(n.useEffect)((function(){r(Object(O.a)(Object(O.a)({},a),{},{images:[]}))}),[j]),Object(n.useEffect)((function(){var e;return l(!0),C()({method:"GET",url:"\n            ".concat(S.apiURL,"/?key=").concat(S.apiKey,"&q=").concat(a.searchText,"&image_type=photo&page=").concat(a.page,"&order=").concat(a.order,"&colors=").concat(a.color,"&safesearch=true"),cancelToken:new C.a.CancelToken((function(t){return e=t}))}).then((function(e){r(Object(O.a)(Object(O.a)({},a),{},{images:[].concat(Object(b.a)(a.images),Object(b.a)(e.data.hits))})),l(!1)})).catch((function(e){return console.log(e)})),function(){return e()}}),[j,u,x,d]);return Object(c.jsxs)("div",{id:"Search-bar-container",children:[Object(c.jsx)(h.a,{name:"searchText",value:a.searchText,onChange:function(e){console.log(e.target.value),r(Object(O.a)(Object(O.a)({},a),{},{searchText:e.target.value}))},floatingLabelText:"Search Your Images",fullWidth:!0}),Object(c.jsx)("br",{}),Object(c.jsxs)(f.a,{name:"color",floatingLabelText:"Color",value:a.color,onChange:function(e,t,c){r(Object(O.a)(Object(O.a)({},a),{},{images:[],color:"default"==c?"":c}))},children:[Object(c.jsx)(m.a,{value:"default",primaryText:"Default"}),Object(c.jsx)(m.a,{value:"red",primaryText:"Red"}),Object(c.jsx)(m.a,{value:"orange",primaryText:"Orange"}),Object(c.jsx)(m.a,{value:"yellow",primaryText:"Yellow"}),Object(c.jsx)(m.a,{value:"green",primaryText:"Green"}),Object(c.jsx)(m.a,{value:"blue",primaryText:"Blue"})]}),Object(c.jsxs)(f.a,{name:"order",floatingLabelText:"Order",value:a.order,onChange:function(e,t,c){r(Object(O.a)(Object(O.a)({},a),{},{images:[],order:c}))},children:[Object(c.jsx)(m.a,{value:"popular",primaryText:"Popular"}),Object(c.jsx)(m.a,{value:"latest",primaryText:"Latest"})]}),Object(c.jsx)("br",{}),a.images.length>0?Object(c.jsx)(L,{setSearchState:r,searchState:a,loading:o}):null]})};var E=function(){return Object(c.jsx)(o.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(u,{}),Object(c.jsx)(R,{})]})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,285)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))};i.a.render(Object(c.jsx)(E,{}),document.getElementById("root")),G()}},[[284,1,2]]]);
//# sourceMappingURL=main.c6a65781.chunk.js.map