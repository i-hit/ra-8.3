(this["webpackJsonpra-8.3"]=this["webpackJsonpra-8.3"]||[]).push([[0],{19:function(e,n,t){},20:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(11),i=t.n(c),o=(t(19),t(20),t(5)),s=t.n(o),l=t(8),d=t(4),u=Object(r.createContext)({login:"",password:"",error:"",token:null,profile:null});function j(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=Object(r.useState)(t?JSON.parse(e.getItem(n)):e.getItem(n)),c=Object(d.a)(a,2),i=c[0],o=c[1];return Object(r.useEffect)((function(){null!==i?e.setItem(n,t?JSON.stringify(i):i):e.removeItem(n)}),[i,e,n,t]),[i,o]}var p=t(1);function b(e){var n=Object(r.useState)(""),t=Object(d.a)(n,2),a=t[0],c=t[1],i=Object(r.useState)(""),o=Object(d.a)(i,2),b=o[0],h=o[1],f=Object(r.useState)(""),O=Object(d.a)(f,2),x=O[0],g=O[1],v=Object(r.useState)(""),m=Object(d.a)(v,2),w=m[0],k=m[1],y=j(localStorage,"token"),S=Object(d.a)(y,2),C=S[0],I=S[1],L=j(localStorage,"profile",!0),P=Object(d.a)(L,2),N=P[0],F=P[1],J=function(){var e=Object(l.a)(s.a.mark((function e(){var n,t,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),e.prev=1,e.next=4,fetch("https://ra-8-3-server.herokuapp.com/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:b,password:x})});case 4:if((n=e.sent).ok){e.next=10;break}return e.next=8,n.json();case 8:throw t=e.sent,new Error("Auth failed: "+t.message);case 10:return e.next=12,n.json();case 12:r=e.sent,a=r.token,I(a),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),c(e.t0);case 20:return e.prev=20,h(""),g(""),e.finish(20);case 24:case"end":return e.stop()}}),e,null,[[1,17,20,24]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){if(C){c("");var e=function(){var e=Object(l.a)(s.a.mark((function e(n,t){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n,{headers:{Authorization:"Bearer "+C}});case 3:return(r=e.sent).ok||(k(""),I(null),F(null)),e.next=7,r.json();case 7:a=e.sent,t(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),c(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n,t){return e.apply(this,arguments)}}();e("".concat("https://ra-8-3-server.herokuapp.com/private","/me"),F),e("".concat("https://ra-8-3-server.herokuapp.com/private","/news"),k)}}),[C,F,I]),Object(p.jsx)(u.Provider,{value:{handleInputLogin:function(e){h(e)},handleInputPassword:function(e){g(e)},handleLogin:J,handleLogout:function(){k(""),I(null),F(null)},login:b,password:x,token:C,profile:N,error:a,news:w},children:e.children})}var h,f,O,x,g,v,m,w,k=t(2),y=t(3),S=y.a.div(h||(h=Object(k.a)(["\n  width: 1000px;\n  min-height: 400px;\n  margin: 20px auto;\n  padding: 10px 30px;\n  background-color: #fafafa;\n"]))),C=y.a.div(f||(f=Object(k.a)(["\n  width: 1000px;\n  margin: 20px auto;\n  padding: 10px 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]))),I=y.a.div(O||(O=Object(k.a)(["\n  width: 47.5%;\n  border: 1px solid black;\n\n  :nth-child(n + 3) {\n    margin-top: 5%;\n  }\n"]))),L=y.a.img(x||(x=Object(k.a)(["\n  display: block;\n  width: 100%;\n"]))),P=y.a.div(g||(g=Object(k.a)(["\n  padding: 10px;\n"])));function N(){var e=Object(r.useContext)(u).news;return e?Object(p.jsx)(C,{children:e.map((function(e){return Object(p.jsxs)(I,{children:[Object(p.jsx)(L,{src:e.image,alt:e.title}),Object(p.jsxs)(P,{children:[Object(p.jsx)("h3",{children:e.title}),Object(p.jsx)("p",{children:e.content})]})]},e.id)}))}):Object(p.jsxs)(S,{children:[Object(p.jsx)("h1",{children:"Neto Social"}),Object(p.jsx)("h3",{children:"Facebook and VK Killed"})]})}var F=y.a.form(v||(v=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),J=y.a.input(m||(m=Object(k.a)(["\n  width: 40%;\n  padding: 10px;\n"]))),z=y.a.button(w||(w=Object(k.a)(["\n  width: 15%;\n  font-size: inherit;\n  color: green;\n  border: 1px solid green;\n  border-radius: 4px;\n  cursor: pointer;\n"])));var E,T,A,B,D=function(e){var n=Object(r.useContext)(u),t=n.login,a=n.password,c=n.handleLogin,i=n.handleInputPassword,o=n.handleInputLogin,s=Object(r.useRef)(null);return Object(p.jsxs)(F,{children:[Object(p.jsx)(J,{name:"login",placeholder:"Username",value:t,onChange:function(e){o(e.target.value)}}),Object(p.jsx)(J,{name:"password",type:"password",placeholder:"Password",value:a,onChange:function(e){i(e.target.value)}}),Object(p.jsx)(z,{ref:s,onClick:function(e){e.preventDefault(),s.current.blur(),c()},children:"Login"})]})},K=y.a.div(E||(E=Object(k.a)(["\n  width: 22%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),H=y.a.div(T||(T=Object(k.a)(["\n  overflow: hidden;\n  border-radius: 50%;\n"]))),M=y.a.img(A||(A=Object(k.a)(["\n  display: block;\n  object-fit: cover;\n"]))),R=y.a.button(B||(B=Object(k.a)(["\n  width: 33%;\n  padding: 10px;\n  font-size: inherit;\n  color: red;\n  border: 1px solid red;\n  border-radius: 4px;\n  cursor: pointer;\n"])));var U,V,q,G,Q=function(e){var n=Object(r.useContext)(u),t=n.profile,a=n.handleLogout;return Object(p.jsxs)(K,{children:["Hello, ",t.name,Object(p.jsx)(H,{children:Object(p.jsx)(M,{src:t.avatar,alt:t.name})}),Object(p.jsx)(R,{onClick:a,children:"Logout"})]})},W=y.a.div(U||(U=Object(k.a)(["\n  margin-top: 20px;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fafafa;\n"]))),X=y.a.div(V||(V=Object(k.a)(["\n  display: flex;\n  align-items: center;\n"]))),Y=y.a.div(q||(q=Object(k.a)(["\n  color: red;\n  margin-right: 10px;\n"]))),Z=y.a.div(G||(G=Object(k.a)(["\n  font-weight: bold;\n  font-size: 1.5rem;\n"])));var $=function(e){var n=Object(r.useContext)(u),t=n.error,a=n.profile;return Object(p.jsxs)(W,{children:[Object(p.jsx)(Z,{children:"Neto Social"}),a?Object(p.jsx)(Q,{}):Object(p.jsxs)(X,{children:[Object(p.jsx)(Y,{children:t.message}),Object(p.jsx)(D,{})]})]})};var _=function(){return Object(p.jsx)(b,{children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)($,{}),Object(p.jsx)(N,{})]})})},ee=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(_,{})}),document.getElementById("root")),ee()}},[[25,1,2]]]);
//# sourceMappingURL=main.f04c751a.chunk.js.map