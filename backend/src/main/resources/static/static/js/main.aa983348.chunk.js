(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{139:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(12),o=n.n(r),c=n(7),s=n(29),l=n(16),d=n(8),u=n(166),b=Object(u.a)((function(e){return{formControl:{minWidth:315,background:"#f7f7f2",fontSize:"0.7em",borderRadius:"10px"},MenuItem:{fontSize:"0.9em"},Select:{marginLeft:7,fontFamily:"Helvetica Neue"}}})),f=n(169),p=n(171),j=n(172),g=[{value:"easy",label:"Easy"},{value:"medium",label:"Medium"},{value:"hard",label:"Hard"}],x=[{value:9,label:"General Knowledge"},{value:10,label:"Entertainment: Books"},{value:11,label:"Entertainment: Film"},{value:12,label:"Entertainment: Music"},{value:13,label:"Entertainment: Musicals & Theaters"},{value:14,label:"Entertainment: Television"},{value:15,label:"Entertainment: Video Games"},{value:16,label:"Entertainment: Board Games"},{value:17,label:"Science & Nature"},{value:18,label:"Science: Computers"},{value:19,label:"Science: Mathematics"},{value:20,label:"Mythology"},{value:21,label:"Sports"},{value:22,label:"Geography"},{value:23,label:"History"},{value:24,label:"Politics"},{value:25,label:"Art"},{value:26,label:"Celebrities"},{value:27,label:"Animals"},{value:28,label:"Vehicles"},{value:29,label:"Entertainment: Comics"},{value:30,label:"Science: Gadgets"},{value:31,label:"Entertainment: Japanese Anime & Manga"},{value:32,label:"Entertainment: Cartoon & Animations"}],h=[{value:5,label:"5"},{value:10,label:"10"},{value:15,label:"15"},{value:20,label:"20"},{value:25,label:"25"},{value:30,label:"30"}],m=n(38),O=n(36),v=n.n(O),y="/questions",S="/api/user",w=function(e){return v.a.get("".concat(S,"/").concat(e)).then((function(e){return e.data}))},C=d.c.button.withConfig({displayName:"NextButtonStyle",componentId:"sc-16ouha9-0"})(["border:none;background:var(--greenStandard);color:var(--beigeStandard);padding:10px 0 10px 0;font-size:40px;display:flex;align-items:flex-end;outline:none;box-shadow:none;"]),k=n(4);function P(e){var t=e.triviaApiParametersDTO,n=e.setSelectionParameters,a=e.setPoints,i=Object(l.f)(),r=t.difficulty.length>0,o=t.amount>0,c=t.category>0;return Object(k.jsx)(C,{children:Object(k.jsx)(m.b,{onClick:function(e){r||o||c?(e.preventDefault(),function(e){return v.a.post(y,e).then()}(t).then((function(){a(0),n(t),i.push("/questions/1")}))):alert("Please ensure you select amount, category and level of difficulty")}})})}function N(e){var t=e.onClickSetNumberOfQuestions,n=e.setSelectionParameters,i=e.setPoints,r=b(),o=Object(a.useState)(""),s=Object(c.a)(o,2),l=s[0],d=s[1],u=Object(a.useState)(""),m=Object(c.a)(u,2),O=m[0],v=m[1],y=Object(a.useState)(""),S=Object(c.a)(y,2),w=S[0],C=S[1],N={amount:O,category:l,difficulty:w};return Object(k.jsxs)(_,{children:[Object(k.jsxs)("section",{children:[Object(k.jsx)("header",{children:" Select number of questions:"}),Object(k.jsx)(f.a,{className:r.formControl,children:Object(k.jsx)(p.a,{className:r.Select,disableUnderline:!0,onChange:function(e){var n=e.target.value;v(n),t(n)},value:O,children:h.map((function(e){return Object(k.jsx)(j.a,{className:r.MenuItem,value:e.value,children:e.label},e.value)}))})})]}),Object(k.jsxs)("section",{children:[Object(k.jsx)("header",{children:" Select category:"}),Object(k.jsx)(f.a,{className:r.formControl,children:Object(k.jsx)(p.a,{className:r.Select,disableUnderline:!0,onChange:function(e){return d(e.target.value)},value:l,children:x.map((function(e){return Object(k.jsx)(j.a,{value:e.value,children:e.label},e.value)}))})})]}),Object(k.jsxs)("section",{children:[Object(k.jsx)("header",{children:" Select level of difficulty:"}),Object(k.jsx)(f.a,{className:r.formControl,children:Object(k.jsx)(p.a,{className:r.Select,disableUnderline:!0,onChange:function(e){return C(e.target.value)},value:w,children:g.map((function(e){return Object(k.jsx)(j.a,{value:e.value,children:e.label},e.value)}))})})]}),Object(k.jsx)("footer",{children:Object(k.jsx)(P,{setSelectionParameters:n,triviaApiParametersDTO:N,setPoints:i})})]})}var _=d.c.main.withConfig({displayName:"Selections__Wrapper",componentId:"vii9e8-0"})(["overflow-y:scroll;padding:0 30px;display:grid;grid-template-rows:20% 20% 20% auto;header{font-size:1.2em;padding:30px 10px 10px 0;}footer{display:flex;justify-content:flex-end;}"]);function z(e){var t=e.handleClick;return Object(k.jsx)(I,{children:Object(k.jsx)(m.a,{onClick:t})})}var I=d.c.button.withConfig({displayName:"BackButton__ArrowButton",componentId:"sc-1rieeht-0"})(["border:none;background:var(--beigeStandard);color:var(--greenStandard);padding:0;font-size:40px;cursor:pointer;justify-self:start;display:flex;align-items:center;"]),D=n.p+"static/media/greenMan.60631596.png";function q(e){var t=e.onClickSetNumberOfQuestions,n=e.setSelectionParameters,a=e.setPoints,i=Object(l.f)();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(U,{children:[Object(k.jsx)(z,{handleClick:function(e){i.push("/welcome")}}),Object(k.jsx)("img",{src:D,alt:"Logo"})]}),Object(k.jsx)(N,{onClickSetNumberOfQuestions:t,setSelectionParameters:n,setPoints:a})]})}var E,T,U=d.c.header.withConfig({displayName:"TriviaSelector__Header",componentId:"jveiyg-0"})(["background:var(--beigeStandard);padding:10px 30px 10px 30px;display:grid;grid-template-columns:1fr 1fr;img{justify-self:end;height:3em;}"]),W=d.c.div.withConfig({displayName:"Layout",componentId:"sc-1a96ajs-0"})(["height:100vh;background:var(--greenStandard);color:var(--beigeStandard);display:grid;grid-template-rows:auto 1fr;"]),A=n(20),B=n(53),M=d.c.button.withConfig({displayName:"AnswersButtonStyle__AnswerButtonStyle",componentId:"tg7uby-0"})(['background-color:var(--beigeStandard);color:var(--greenStandard);height:min-content;display:flex;flex-flow:wrap;justify-content:left;width:100%;padding:15px;font-size:1.1em;font-family:"Playfair Display\', serif"; margin-bottom: 15px; cursor: pointer; border-radius: 10px; outline: none; box-shadow: none; border: none; '," ",""],(function(e){return"correct"===e.status&&Object(d.b)(E||(E=Object(B.a)(["\n      background-color: limegreen;\n      outline: none;\n      box-shadow: none;\n      border: none;\n    "])))}),(function(e){return"incorrect"===e.status&&Object(d.b)(T||(T=Object(B.a)(["\n      background-color: red;\n      outline: none;\n      box-shadow: none;\n      border: none;\n    "])))})),Q=n(59);function G(e){var t=e.answers,n=e.points,i=e.setPoints,r=Object(l.g)().questionID,o=Object(a.useState)([]),s=Object(c.a)(o,2),d=s[0],u=s[1];function b(e){d.some((function(t){return t.id===e}))||function(e){return v.a.post(y+"/answer",e).then((function(e){return e.data}))}({questionId:r,selectedAnswer:e}).then((function(t){var a=t?"correct":"incorrect",r=[].concat(Object(A.a)(d),[{id:e,status:a}]);u(r);var o=n;t?o+=10:o-=10,i(o),console.log("Points:"+n)}))}var f=function(e){var t=d.find((function(t){return t.id===e}));if(void 0!==t)return t.status};return Object(k.jsx)("section",{children:t.map((function(e){return Object(k.jsx)(M,{answer:e,status:f(e),onClick:function(){return b(e)},children:Object(Q.a)(e)},e)}))})}function L(e){var t=e.numberOfQuestions,n=e.setVisibleSeconds,i=e.setPoints,r=e.points,o=Object(l.f)(),s=Object(l.g)().questionID,d=Object(a.useState)(void 0),u=Object(c.a)(d,2),b=u[0],f=u[1],p=Object(a.useState)(30),j=Object(c.a)(p,2),g=j[0],x=j[1];Object(a.useEffect)((function(){(function(e){return v.a.get("".concat(y,"/").concat(e)).then((function(e){return e.data}))})(s).then(f),x(30)}),[s]);var h=function(){if(console.log({numberOfQuestions:t,questionID:s}),t==s)o.push("/results");else{var e=parseInt(s,10);o.push("/questions/"+(e+1))}};return Object(a.useEffect)((function(){var e=setTimeout((function(){g>=0?(x(g-1),n(g)):h()}),1e3);return function(){return clearTimeout(e)}}),[g]),b?Object(k.jsxs)(R,{children:[Object(k.jsx)("p",{children:Object(Q.a)(b.question)}),Object(k.jsx)("section",{children:Object(k.jsx)(G,{answers:b.answers,setPoints:i,points:r})}),Object(k.jsx)("footer",{children:Object(k.jsx)(C,{children:Object(k.jsx)(m.b,{onClick:h})})})]}):Object(k.jsx)("p",{children:" loading "})}var R=d.c.main.withConfig({displayName:"Questions__Wrapper",componentId:"sc-17kzum0-0"})(["padding:0 30px;display:grid;grid-template-rows:auto 1fr auto;p{background-color:var(--beigeStandard);color:var(--greenStandard);height:min-content;display:flex;flex-flow:wrap;justify-content:left;width:100%;padding:20px;font-size:1.1em;margin-bottom:30px;border-radius:10px;}footer{display:flex;justify-content:flex-end;}"]);function H(e){var t=e.numberOfQuestions,n=e.points,i=e.setPoints,r=Object(a.useState)(30),o=Object(c.a)(r,2),s=o[0],l=o[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(F,{children:[Object(k.jsx)("div",{children:" "}),Object(k.jsxs)("div",{children:[" ",s," sec "]}),Object(k.jsx)("img",{src:D,alt:"Logo"})]}),Object(k.jsx)(L,{numberOfQuestions:t,setVisibleSeconds:l,setPoints:i,points:n})]})}var F=d.c.header.withConfig({displayName:"TriviaGame__Header",componentId:"sc-1gd9glt-0"})(["background:var(--beigeStandard);color:var(--greenStandard);display:grid;grid-template-columns:1fr 1fr 1fr;padding:10px 30px 10px 30px;img{justify-self:end;height:3em;}div{justify-self:center;align-self:center;font-size:1.2em;}"]),V=d.c.button.withConfig({displayName:"NewGameButtonStyle",componentId:"jrbqc5-0"})(['padding:0px;width:100%;border-radius:10px;height:35px;font-size:1em;background-color:var(--beigeStandard);font-color:var(--standardGreen);border:none;outline:none;box-shadow:none;font-family:"Playfair Display\', serif";']);function J(e){var t=e.user,n=Object(l.f)(),i=Object(a.useState)(0),r=Object(c.a)(i,2),o=r[0],s=r[1];return Object(a.useEffect)((function(){(function(e){return v.a.get("".concat("/questions/totalScore","/").concat(e)).then((function(e){return e.data}))})(t).then(s)}),[]),Object(k.jsxs)(K,{children:[Object(k.jsx)("header",{children:" Welcome back,"}),Object(k.jsxs)("p",{children:[" ",t,"! "]}),Object(k.jsxs)("div",{children:[" Current score: ",o," points"]}),Object(k.jsxs)("buttons",{children:[Object(k.jsx)(V,{onClick:function(){return n.push("/questions")},children:"New Game"}),Object(k.jsx)(V,{onClick:function(){return n.push("/scoreOverview")},children:"Score Overview"})]})]})}var K=d.c.section.withConfig({displayName:"TriviaWelcome__Wrapper",componentId:"sc-1o4mq3u-0"})(['height:100vh;background:var(--greenStandard);color:var(--beigeStandard);padding:30px 30px 20px 30px;display:grid;grid-template-rows:30% 20% 10% auto;font-family:"Playfair Display\', serif"; header { display: flex; font-size: 3em; align-self: end; padding-bottom: 10px; text-align: center; } p { font-size: 3em; margin: 0px; padding-bottom: 10px; justify-self: center; } div { font-size: 1.5em; text-align: center; } buttons { display: flex; flex-direction: column; grid-gap: 15px; width: 100%; padding-top: 20px; }']);function Y(e){var t=e.user,n=e.points,a=e.selectionParameters,i=Object(l.f)(),r={user:t,category:a.category,amount:a.amount,difficulty:a.difficulty,points:n};function o(e){(function(e){return v.a.post(y+"/points",e).then((function(e){return e.data}))})(e).then((function(e){i.push("/scoreOverview")}))}return Object(k.jsxs)(X,{children:[Object(k.jsx)("h1",{children:" Congratulations! "}),Object(k.jsxs)("p",{children:[" You scored: ",n," points "]}),Object(k.jsxs)("section",{children:[Object(k.jsx)(V,{onClick:function(){return i.push("/questions")},children:"New Game"}),Object(k.jsxs)(V,{onClick:function(){return o(r)},children:[" ","Save Score"]})]})]})}var X=d.c.section.withConfig({displayName:"TriviaResults__Wrapper",componentId:"sc-1acqklh-0"})(["height:100vh;background:var(--greenStandard);color:var(--beigeStandard);display:grid;grid-template-rows:1fr 1fr 1fr;padding:30px;h1{display:flex;flex-direction:column;justify-content:flex-end;align-items:center;font-size:2.5em;margin-bottom:10px;}p{font-size:1.6em;justify-self:center;margin:0;}section{display:flex;flex-direction:column;grid-gap:15px;width:100%;padding-top:20px;}"]);function Z(e){var t=e.category,n=e.triviaPointDetails;return Object(k.jsxs)(te,{children:[Object(k.jsxs)("header",{children:[t," "]}),Object(k.jsxs)("ul",{children:[Object(k.jsxs)($,{children:[Object(k.jsx)("div",{children:" Level "}),Object(k.jsx)("div",{className:"alignRight",children:" # Points"}),Object(k.jsx)("div",{className:"alignRight",children:" # Questions"})]}),n.map((function(e){return Object(k.jsx)("li",{children:Object(k.jsxs)(ee,{children:[Object(k.jsxs)("li",{children:[" ",e.difficulty," "]}),Object(k.jsxs)("li",{className:"alignRight",children:[" ",e.points," "]}),Object(k.jsxs)("li",{className:"alignRight",children:[" ",e.amount," "]})]})})}))]})]})}var $=d.c.section.withConfig({displayName:"CategoryScoreCard__TableHeader",componentId:"sc-9dl14t-0"})(["display:grid;grid-template-columns:20% [end] 1fr 1fr;text-decoration:underline;border-width:thin;"]),ee=d.c.section.withConfig({displayName:"CategoryScoreCard__Section",componentId:"sc-9dl14t-1"})(["display:grid;grid-template-columns:20% 1fr 1fr;"]),te=d.c.section.withConfig({displayName:"CategoryScoreCard__CategoryList",componentId:"sc-9dl14t-2"})(["header{font-size:1.3em;}ul{padding:0px;margin:10px 0 25px 0;list-style:none;display:grid;grid-gap:2px;}.alignRight{text-align:end;}"]);function ne(e){var t=e.user,n=Object(a.useState)([]),i=Object(c.a)(n,2),r=i[0],o=i[1];return Object(a.useEffect)((function(){(function(e){return v.a.get("".concat("/questions/scoreOverview","/").concat(e)).then((function(e){return e.data}))})(t).then(o)}),[]),Object(k.jsxs)(ae,{children:[Object(k.jsx)("h1",{children:" Score Overview "}),r.map((function(e){return Object(k.jsx)("li",{children:Object(k.jsx)(Z,{category:e.category,triviaPointDetails:e.triviaPointDetails},e.category)})}))]})}var ae=d.c.section.withConfig({displayName:"Scores__Wrapper",componentId:"sc-1jnoza6-0"})(["h1{color:var(--beigeStandard);font-size:2.5em;padding-bottom:25px;margin:0px;}li{grid-gap:10px;list-style:none;}"]);function ie(e){var t=e.user,n=Object(l.f)();return Object(k.jsxs)(re,{children:[Object(k.jsx)(ne,{user:t}),Object(k.jsx)("footer",{children:Object(k.jsx)(m.a,{onClick:function(){return n.push("/welcome")}})})]})}var re=d.c.section.withConfig({displayName:"ScoreOverview__Wrapper",componentId:"rxv7pf-0"})(["padding:30px 30px 0px 30px;layout:grid;grid-template-rows:1fr 10%;color:var(--beigeStandard);background:var(--greenStandard);border:double;footer{display:flex;align-content:end;font-size:40px;cursor:pointer;border:none;}"]),oe=n.p+"static/media/whiteMan.2ab37e44.png",ce=n(51),se=n(88);function le(e){var t=e.setUser,n=Object(l.f)(),i=Object(a.useState)(""),r=Object(c.a)(i,2),o=r[0],s=r[1],d=o.length>0,u=Object(ce.useSpring)({delay:1e3,opacity:1,from:{opacity:0}}),b=Object(ce.useSpring)({delay:2e3,opacity:1,from:{opacity:0}});return Object(k.jsxs)(ue,{onSubmit:function(e){e.preventDefault(),d&&s("")},children:[Object(k.jsx)(ce.animated.div,{style:u,children:Object(k.jsx)("header",{children:"triviap"})}),Object(k.jsx)("div",{children:Object(k.jsx)("img",{src:oe,alt:"Logo"})}),Object(k.jsx)(ce.animated.div,{style:b,children:Object(k.jsxs)("buttons",{children:[Object(k.jsx)("input",{type:"text",value:o,placeholder:"Enter User","font-size":"16px",style:{backgroundColor:"#f7f7f2",fontSize:"1em",font:"Playfair Display', serif",outline:"none",border:"none",boxShadow:"none"},onChange:function(e){var n=e.target.value;s(n),t(n)}}),Object(k.jsx)(V,{backgroundColor:"#f7f7f2",disabled:!d,onClick:function(){w(o).then((function(e){e?n.push("/welcome"):alert("User does not exist. Please try again or add user")}))},children:"Login"})]})}),Object(k.jsx)(de,{children:Object(k.jsx)(ce.animated.div,{style:b,children:Object(k.jsx)(se.a,{onClick:function(){return n.push("/register")}})})})]})}var de=d.c.button.withConfig({displayName:"LoginPage__AddNewUserButton",componentId:"uet54d-0"})(["border:none;background:var(--greenStandard);color:var(--beigeStandard);font-size:30px;justify-self:end;align-self:end;padding:0px;"]),ue=d.c.form.withConfig({displayName:"LoginPage__Wrapper",componentId:"uet54d-1"})(['height:100vh;background:var(--greenStandard);color:var(--beigeStandard);display:grid;grid-template-rows:30% 30% auto 10%;padding:30px 30px 20px 30px;font-family:"Playfair Display\', serif"; header { font-size: 4em; align-self: flex-end; justify-self: center; padding-bottom: 10px; } div { display: flex; justify-content: center; align-self: center; height: 100%; } buttons { display: flex; flex-direction: column; grid-gap: 15px; width: 100%; padding-top: 20px; input { padding: 0px; width: 100%; border-radius: 10px; height: 35px; font-size: 1em; text-align: center; background-color: var(--beigeStandard); align-self: end; outline: none; box-shadow: none; font-family: "Playfair Display\', serif";}}']);function be(e){var t=e.setUser,n=Object(l.f)(),i=Object(a.useState)(""),r=Object(c.a)(i,2),o=r[0],s=r[1],d=o.length>0,u={user:o,triviaPointCategory:[]};return Object(k.jsxs)(pe,{onSubmit:function(e){e.preventDefault(),d&&s("")},children:[Object(k.jsx)("header",{children:"Welcome!"}),Object(k.jsx)("p",{children:"Please register below"}),Object(k.jsxs)("buttons",{children:[Object(k.jsx)("input",{type:"text",value:o,placeholder:"Enter New User","font-size":"16px",style:{backgroundColor:"#f7f7f2",fontSize:"1em",font:"Playfair Display', serif",outline:"none",border:"none",boxShadow:"none"},onChange:function(e){var t=e.target.value;s(t)}}),Object(k.jsx)(V,{backgroundColor:"#f7f7f2",disabled:!d,onClick:function(){w(o).then((function(e){e?alert("User already exists. Please try again"):(n.push("/questions"),function(e){return v.a.post(S,e).then((function(e){return e.data}))}(u).then((function(e){var n=e.user;t(n)})))}))},children:"Register"})]})]})}var fe,pe=d.c.form.withConfig({displayName:"TriviaRegister__Wrapper",componentId:"sc-171q16r-0"})(['height:100vh;background:var(--greenStandard);color:var(--beigeStandard);display:grid;grid-template-rows:30% 30% auto 10%;padding:30px 30px 20px 30px;font-family:"Playfair Display\', serif"; header { font-size: 4em; align-self: flex-end; justify-self: center; padding-bottom: 10px; } p { font-size: 1.5em; margin: 0px; padding-bottom: 10px; justify-self: center; } buttons { display: flex; flex-direction: column; grid-gap: 15px; width: 100%; padding-top: 20px; input { padding: 0px; width: 100%; border-radius: 10px; height: 35px; font-size: 1em; text-align: center; background-color: var(--beigeStandard); align-self: end; outline: none; box-shadow: none; font-family: "Playfair Display\', serif";}}']);function je(){var e=Object(a.useState)(0),t=Object(c.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(0),o=Object(c.a)(r,2),d=o[0],u=o[1],b=Object(a.useState)({}),f=Object(c.a)(b,2),p=f[0],j=f[1],g=Object(a.useState)(""),x=Object(c.a)(g,2),h=x[0],m=x[1];return console.log(p),Object(k.jsx)("div",{children:Object(k.jsx)(s.a,{children:Object(k.jsxs)(l.c,{children:[Object(k.jsx)(l.a,{exact:!0,path:"/login",children:Object(k.jsx)(le,{setUser:m})}),Object(k.jsx)(l.a,{exact:!0,path:"/welcome",children:Object(k.jsx)(J,{user:h})}),Object(k.jsx)(l.a,{exact:!0,path:"/register",children:Object(k.jsx)(be,{setUser:m})}),Object(k.jsx)(l.a,{exact:!0,path:"/questions",children:Object(k.jsx)(W,{children:Object(k.jsx)(q,{onClickSetNumberOfQuestions:i,setSelectionParameters:j,setPoints:u})})}),Object(k.jsx)(l.a,{exact:!0,path:"/questions/:questionID",children:Object(k.jsx)(W,{children:Object(k.jsx)(H,{numberOfQuestions:n,setPoints:u,points:d})})}),Object(k.jsx)(l.a,{exact:!0,path:"/results",children:Object(k.jsx)(Y,{user:h,points:d,selectionParameters:p})}),Object(k.jsx)(l.a,{exact:!0,path:"/scoreOverview",children:Object(k.jsx)(ie,{user:h})})]})})})}var ge=Object(d.a)(fe||(fe=Object(B.a)(['\n  :root {\n    --greenStandard: #015252;\n    --beigeStandard: #f7f7f2;\n    font-family: "Playfair Display\', serif";\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    background-color: #015252;\n  }\n\n'])));o.a.render(Object(k.jsxs)(i.a.StrictMode,{children:[Object(k.jsx)(ge,{}),Object(k.jsx)(je,{})]}),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.aa983348.chunk.js.map