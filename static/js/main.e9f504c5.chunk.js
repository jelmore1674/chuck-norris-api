(this["webpackJsonpchuck-norris-api"]=this["webpackJsonpchuck-norris-api"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(4),i=n.n(r),a=(n(13),n(5)),s=n(6),j=n(8),u=n(7),h=n(2),d=n.n(h),k=n(0),l=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={joke:"Loading..."},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.chucknorris.io/jokes/random").then((function(e){return e.json()})).then((function(t){return e.setState({joke:t.value})}))}},{key:"handleClick",value:function(){var e=this;fetch("https://api.chucknorris.io/jokes/random").then((function(t){return t.json().then((function(t){return e.setState({joke:t.value})}))}))}},{key:"render",value:function(){var e=this.state.joke;return Object(k.jsxs)("div",{className:d.a.content,children:[Object(k.jsx)("div",{className:d.a.header,children:Object(k.jsx)("h1",{children:"Chuck Norris Jokes"})}),Object(k.jsx)("div",{className:d.a.joke,children:Object(k.jsx)("p",{children:e})}),Object(k.jsx)("div",{children:Object(k.jsx)("button",{className:d.a.button,onClick:this.handleClick.bind(this),children:"Load a random joke!"})})]})}}]),n}(o.a.Component);n(15);var b=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(l,{})})};i.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(b,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={content:"joke-body_content__348Uf",header:"joke-body_header__2Cp7q",joke:"joke-body_joke__cKEPX",button:"joke-body_button__-kZw4"}}},[[16,1,2]]]);
//# sourceMappingURL=main.e9f504c5.chunk.js.map