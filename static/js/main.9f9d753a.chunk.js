(this["webpackJsonpreact-game-doge"]=this["webpackJsonpreact-game-doge"]||[]).push([[0],{42:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},65:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(19),s=c.n(r),o=c(5),i=c(4),l=c(12),u=c(16),j=c(3),b={starsCount:[],platformCount:[],gameScore:"$0000000",gameIsStarts:!1,soundVolumeLvl:1,musicVolumeLvl:.2,gameOver:!1,leaderBoardList:[]},d=function(e){return Math.floor(Math.random()*e)},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STARS_COUNT":var c=24*e.starsCount.length;return Object(j.a)(Object(j.a)({},e),{},{starsCount:[].concat(Object(u.a)(e.starsCount),[c])});case"SET_GAME_IS_STARTS":return Object(j.a)(Object(j.a)({},e),{},{gameIsStarts:!e.gameIsStarts});case"SET_SOUND_IS_ENABLE":var n=e.soundVolumeLvl?0:1,a=e.soundVolumeLvl?0:.2;return Object(j.a)(Object(j.a)({},e),{},{soundVolumeLvl:n,musicVolumeLvl:a});case"SET_PLATFORM_COUNT":var r,s=function(){return 27*(d(3)+1)};return r="object"===typeof t.payload?[].concat(Object(u.a)(e.platformCount),[s()]):s=e.platformCount.map((function(e,c){return c===t.payload?e=s():e})),Object(j.a)(Object(j.a)({},e),{},{platformCount:r});case"SET_GAME_SCORE":var o=+e.gameScore.match(/\d+/)+t.payload,i="$"+o.toString().padStart(7,"0");return Object(j.a)(Object(j.a)({},e),{},{gameScore:i});case"SET_GAME_OVER":return Object(j.a)(Object(j.a)({},e),{},{gameOver:t.payload});case"SET_LEADER_BOARD":var l=t.payload.sort((function(e,t){return t.hiScore-e.hiScore})).slice(0,5);return Object(j.a)(Object(j.a)({},e),{},{leaderBoardList:l});default:return e}},O={onPlatform:!1,dogePosition:{},jumpCount:0,steps:!0},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ON_PLATFORM":return Object(j.a)(Object(j.a)({},e),{},{onPlatform:t.payload});case"SET_DOGE_POSITION":var c={};if(Array.isArray(t.payload)){var n=t.payload[0],a=+n.match(/\d+/)[0]+t.payload[1];c={bottom:a+"px",transition:t.payload[2]+"s"}}return Object(j.a)(Object(j.a)({},e),{},{dogePosition:c});case"SET_JUMP_COUNT":return Object(j.a)(Object(j.a)({},e),{},{jumpCount:0===t.payload?0:e.jumpCount+t.payload});case"SET_STEPS":return Object(j.a)(Object(j.a)({},e),{},{steps:!e.steps});default:return e}},f={coinsCount:[]},h=function(e){return Math.floor(Math.random()*e)},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;if("SET_COINS_COUNT"===t.type){var c=e.coinsCount;return!1===Array.isArray(t.payload)?delete c[t.payload]:c=[].concat(Object(u.a)(e.coinsCount),[h(16)]),Object(j.a)(Object(j.a)({},e),{},{coinsCount:c})}return e},g={inputData:"",userData:{userName:"\u0413\u043e\u0441\u0442\u044c",hiScore:0,id:null}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INPUT":return Object(j.a)(Object(j.a)({},e),{},{inputData:t.payload});case"SET_USER_DATA":return Object(j.a)(Object(j.a)({},e),{},{userData:t.payload});default:return e}},S=Object(l.b)({environment:m,doge:p,coins:x,user:v}),y=c(31),N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,E=Object(l.d)(S,N(Object(l.a)(y.a))),T=c(8),_=c(2),C=c(13),k=(c(42),c(0)),w=a.a.memo((function(e){var t={top:e.position+"vh"};return Object(k.jsx)("img",{style:t,className:"stars flying",src:"/img/stars.svg",alt:"stars"})})),R=(c(44),a.a.memo((function(e){var t={top:e.position+"vh"};return Object(k.jsx)("img",{style:t,className:"platform flying",src:"/img/platform.svg",alt:"platform"})}))),A=function(e){return{type:"SET_ON_PLATFORM",payload:e}},I=function(e){return{type:"SET_DOGE_POSITION",payload:e}},P=function(e){return{type:"SET_JUMP_COUNT",payload:e}};c(45);var M=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.doge})),c=t.dogePosition,a=t.steps,r=t.onPlatform,s=Object(i.c)((function(e){return e.environment})).gameIsStarts;return Object(n.useEffect)((function(){setInterval((function(){return e({type:"SET_STEPS"})}),200)}),[e]),Object(k.jsx)("img",{style:s?c:{bottom:"80vh"},className:"doge",src:"/img/doge/".concat(r?a?"step":"byStep":"jump",".svg"),alt:"doge"})},L=(c(46),a.a.memo((function(e){var t;t=void 0===e.position?{display:"none"}:{top:5*e.position+"vh"};return Object(k.jsx)("img",{id:e.id,className:"coin flying",style:t,src:"/img/coins/".concat(["btc","eth","shiba"][Math.floor(3*Math.random())],".svg"),alt:"coin"})}))),D=c(10),B=c.n(D),U=function(e){return{type:"SET_USER_DATA",payload:e}},V=(c(65),a.a.memo((function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.user})).userData,c=+Object(i.c)((function(e){return e.environment})).gameScore.match(/\d+/),n={userName:t.userName,hiScore:c,id:t.id},a={userName:"\u0413\u043e\u0441\u0442\u044c",hiScore:c,id:null};return null!==t.id&&c>t.hiScore?(e(U(n)),sessionStorage.setItem("user",JSON.stringify(n)),B.a.put("https://61cb6604194ffe0017788d3a.mockapi.io/users/"+t.id,{hiScore:c})):c>t.hiScore&&(e(U(a)),sessionStorage.setItem("user",JSON.stringify(a))),Object(k.jsxs)("ul",{className:"finalBlock",children:[Object(k.jsx)("p",{children:"\u0418\u0433\u0440\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430!"}),Object(k.jsx)("p",{children:"\u0421\u044b\u0433\u0440\u0430\u0442\u044c \u0435\u0449\u0435?"}),Object(k.jsxs)("ul",{className:"finalBtn",children:[Object(k.jsx)("li",{onClick:function(){return window.location.reload()},children:"\u0414\u0430!"}),Object(k.jsx)("a",{href:"/menu",children:Object(k.jsx)("li",{children:"\u0412 \u043c\u0435\u043d\u044e!"})})]})]})}))),J=c(9),G=c.n(J),F=c(15),H=function(e){return{type:"SET_PLATFORM_COUNT",payload:e}};c(67);var q=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.environment})).leaderBoardList;return Object(n.useEffect)((function(){var t=function(){var t=Object(F.a)(G.a.mark((function t(){var c,n;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.get("https://61cb6604194ffe0017788d3a.mockapi.io/users");case 2:c=t.sent,n=c.data,e({type:"SET_LEADER_BOARD",payload:n});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]),Object(k.jsxs)("table",{children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"\u041f\u043e\u0437\u0438\u0446\u0438\u044f"}),Object(k.jsx)("th",{children:"\u0418\u043c\u044f \u0438\u0433\u0440\u043e\u043a\u0430"}),Object(k.jsx)("th",{children:"\u0420\u0435\u043a\u043e\u0440\u0434"})]})}),Object(k.jsx)("tbody",{children:t.map((function(e,t){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:t+1}),Object(k.jsx)("td",{children:e.userName}),Object(k.jsx)("td",{children:e.hiScore})]},e.id)}))})]})};c(68);var X=function(){return Object(k.jsxs)("div",{id:"carouselExampleCaptions",className:"carousel slide","data-bs-ride":"carousel",children:[Object(k.jsxs)("div",{className:"carousel-indicators",children:[Object(k.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(k.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(k.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"2","aria-label":"Slide 3"}),Object(k.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"3","aria-label":"Slide 4"}),Object(k.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"4","aria-label":"Slide 5"})]}),Object(k.jsxs)("div",{className:"carousel-inner",children:[Object(k.jsxs)("div",{className:"carousel-item active",children:[Object(k.jsx)("img",{src:"/img/howToPlay/1.png",className:"d-block w-100",alt:"How to play slide1"}),Object(k.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(k.jsx)("h5",{children:"\u0427\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443,"}),Object(k.jsx)("p",{children:'\u043d\u0430\u0436\u043c\u0438 "\u041b\u0435\u0432\u0443\u044e \u043a\u043d\u043e\u043f\u043a\u0443 \u043c\u044b\u0448\u0438" \u0438 \u0441\u043e\u0432\u0435\u0440\u0448\u0438 \u0441\u0432\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u0440\u043e\u0436\u043e\u043a!'})]})]}),Object(k.jsxs)("div",{className:"carousel-item",children:[Object(k.jsx)("img",{src:"/img/howToPlay/2.png",className:"d-block w-100",alt:"How to play slide2"}),Object(k.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(k.jsx)("h5",{children:"\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0439 \u0441\u0432\u043e\u044e \u043a\u0430\u043f\u0438\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e!"}),Object(k.jsx)("p",{children:"\u041f\u0440\u044b\u0433\u0430\u0439 \u043f\u043e \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u043c \u0438 \u043f\u043e\u0433\u043b\u0430\u0449\u0430\u0439 \u0434\u0440\u0443\u0433\u0438\u0435 \u043c\u043e\u043d\u0435\u0442\u044b!"})]})]}),Object(k.jsxs)("div",{className:"carousel-item",children:[Object(k.jsx)("img",{src:"/img/howToPlay/3.png",className:"d-block w-100",alt:"How to play slide3"}),Object(k.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(k.jsx)("h5",{children:"\u0421\u0442\u0440\u0435\u043c\u0438\u0441\u044c \u043a \u043f\u0435\u0440\u0432\u043e\u043c\u0443 \u043c\u0435\u0441\u0442\u0443 \u043d\u0430 \u0440\u044b\u043d\u043a\u0435!"}),Object(k.jsx)("p",{children:"\u0418 \u0434\u0432\u0438\u0433\u0430\u0439\u0441\u044f \u043f\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043b\u0438\u0434\u0435\u0440\u043e\u0432!"})]})]}),Object(k.jsxs)("div",{className:"carousel-item",children:[Object(k.jsx)("img",{src:"/img/howToPlay/4.png",className:"d-block w-100",alt:"How to play slide4"}),Object(k.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(k.jsx)("h5",{children:"\u041f\u0430\u0434\u0430\u0435\u0448\u044c?"}),Object(k.jsx)("p",{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439 \u0434\u0432\u043e\u0439\u043d\u043e\u0439 \u043f\u0440\u044b\u0436\u043e\u043a \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u044f!"})]})]}),Object(k.jsxs)("div",{className:"carousel-item",children:[Object(k.jsx)("img",{src:"/img/howToPlay/5.png",className:"d-block w-100",alt:"How to play slide5"}),Object(k.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(k.jsx)("h5",{children:"\u041d\u0430\u0434\u043e\u0435\u043b\u0430 \u043c\u0443\u0437\u044b\u043a\u0430?"}),Object(k.jsx)("p",{children:"\u041c\u043e\u0436\u0435\u0448\u044c \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0435\u0435 \u0432 \u043f\u0440\u0430\u0432\u043e\u043c \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u0443\u0433\u043b\u0443!"})]})]})]}),Object(k.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev",children:[Object(k.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(k.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(k.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next",children:[Object(k.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(k.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})};c(69);var $=function(e){return Object(k.jsxs)("div",{className:"title",children:[Object(k.jsx)("img",{className:"titleLogo",src:"/img/coins/shiba.svg",alt:"title logo"}),Object(k.jsxs)("ul",{children:[Object(k.jsx)("a",{href:"https://github.com/alexeyinn/reactGame-2theMoon",target:"_blank",rel:"noreferrer",children:Object(k.jsx)("img",{src:"/img/github.svg",alt:"github logo"})}),Object(k.jsx)(o.b,{to:"/auth",children:Object(k.jsx)("img",{onClick:e.startMusic,src:"/img/toTheMoon.jpg",alt:"to the moon logo"})}),Object(k.jsx)("a",{href:"https://t.me/alexeyinn",target:"_blank",rel:"noreferrer",children:Object(k.jsx)("img",{src:"/img/telegram.svg",alt:"telegram logo"})})]})]})};c(70);var z=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.user})).inputData,c=function(){var c=Object(F.a)(G.a.mark((function c(){var n,a;return G.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,n=function(){var e=Object(F.a)(G.a.mark((function e(){var c,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("https://61cb6604194ffe0017788d3a.mockapi.io/users");case 2:return c=e.sent,n=c.data,e.abrupt("return",n.find((function(e){return e.userName===t})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c.next=4,n();case 4:if(void 0!==(a=c.sent)){c.next=17;break}return c.next=8,B.a.post("https://61cb6604194ffe0017788d3a.mockapi.io/users",{userName:t,hiScore:0});case 8:return c.t0=e,c.t1=U,c.next=12,n();case 12:c.t2=c.sent,c.t3=(0,c.t1)(c.t2),(0,c.t0)(c.t3),c.next=18;break;case 17:e(U(a));case 18:return c.t4=sessionStorage,c.t5=JSON,c.next=22,n();case 22:c.t6=c.sent,c.t7=c.t5.stringify.call(c.t5,c.t6),c.t4.setItem.call(c.t4,"user",c.t7),c.next=30;break;case 27:c.prev=27,c.t8=c.catch(0),alert("\u041d\u0435 \u0432\u044b\u0448\u043b\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430! \u0412\u044b \u043c\u043e\u0436\u0435\u044c\u0435 \u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438, \u0434\u043b\u044f \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0439 \u043f\u043e\u043f\u044b\u0442\u043a\u0438. \u041e\u0448\u0438\u0431\u043a\u0430: "+c.t8);case 30:case"end":return c.stop()}}),c,null,[[0,27]])})));return function(){return c.apply(this,arguments)}}();return Object(k.jsx)("div",{className:"authBlock",children:Object(k.jsxs)("ul",{className:"menuButtons",children:[Object(k.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f/\u043d\u0438\u043a",spellCheck:"false",maxLength:"9",onChange:function(t){e(function(e){return{type:"SET_INPUT",payload:e}}(t.target.value.replace(/\s/g,"")))},value:t}),t?Object(k.jsx)(o.b,{to:"/menu",onClick:c,children:Object(k.jsxs)("li",{children:["\u0418\u0433\u0440\u0430\u0442\u044c \u043a\u0430\u043a: ",t," "]})}):"...\u0438\u043b\u0438...",Object(k.jsx)(o.b,{to:"/menu",children:Object(k.jsx)("li",{children:'\u0412\u043e\u0439\u0442\u0438 \u043a\u0430\u043a "\u0413\u043e\u0441\u0442\u044c"'})})]})})};c(71);var K=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.user})).userData,c=sessionStorage.user;return Object(n.useEffect)((function(){null===t.id&&void 0!==c&&e(U(JSON.parse(c)))}),[e,c,t.id]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"menuBlock",children:Object(k.jsxs)("ul",{className:"menuButtons",children:[Object(k.jsx)(o.b,{to:"/game",children:Object(k.jsx)("li",{children:"\u041d\u0430\u0447\u0430\u0442\u044c!"})}),Object(k.jsx)(o.b,{to:"/pregame/top5",children:Object(k.jsx)("li",{children:"\u0422\u041e\u041f-5 \u0438\u0433\u0440\u043e\u043a\u043e\u0432"})}),Object(k.jsx)(o.b,{to:"/pregame/howtoplay",children:Object(k.jsx)("li",{children:"\u041a\u0430\u043a \u0438\u0433\u0440\u0430\u0442\u044c?"})})]})}),Object(k.jsx)("p",{className:"menuUi userName",children:t.userName}),Object(k.jsxs)("p",{className:"menuUi hiScore",children:["\u0412\u0430\u0448 \u043b\u0443\u0447\u0448\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 - ",t.hiScore]})]})};c(72);var Q=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.user})).userData,c=sessionStorage.user;return Object(n.useEffect)((function(){null===t.id&&void 0!==c&&e(U(JSON.parse(c)))})),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"menuBlock",children:[Object(k.jsxs)("ul",{className:"leaderBlockBtn",children:[Object(k.jsx)(o.b,{to:"/menu",children:Object(k.jsx)("li",{children:"\u041d\u0430\u0437\u0430\u0434"})}),Object(k.jsx)(o.b,{to:"/game",children:Object(k.jsx)("li",{children:"\u0418\u0433\u0440\u0430\u0442\u044c!"})})]}),Object(k.jsxs)(_.c,{children:[Object(k.jsx)(_.a,{path:"/top5",element:Object(k.jsx)(q,{})}),Object(k.jsx)(_.a,{path:"/howtoplay",element:Object(k.jsx)(X,{})})]})]}),Object(k.jsx)("p",{className:"menuUi userName",children:t.userName}),Object(k.jsxs)("p",{className:"menuUi hiScore",children:["\u0412\u0430\u0448 \u043b\u0443\u0447\u0448\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 - ",t.hiScore]})]})},W=function(e){return{type:"SET_COINS_COUNT",payload:e}},Y=function(e){setInterval((function(){!function(e){for(var t=function(t){setTimeout((function(){e(H(t))}),3e3*(t+1))},c=0;c<=5;c++)t(c)}(e)}),3e3)},Z=c.p+"static/media/nyanDogStarts.0ec547b6.mp3",ee=c.p+"static/media/nyanDogMain.b68504e5.mp3",te=c.p+"static/media/coinPick.79891fa1.mp3";c(73);var ce=function(e){var t=Object(i.b)(),c=Object(i.c)((function(e){return e.environment})),a=c.platformCount,r=c.gameScore,s=c.soundVolumeLvl,o=c.musicVolumeLvl,l=c.gameIsStarts,u=c.gameOver,j=Object(i.c)((function(e){return e.doge})),b=j.onPlatform,d=j.dogePosition,m=j.jumpCount,O=Object(i.c)((function(e){return e.coins})).coinsCount;Object(n.useEffect)((function(){void 0!==sessionStorage.user&&t(U(JSON.parse(sessionStorage.user))),y.current=document.querySelector(".doge"),function(e){for(var t=0;t<=4;t++)setTimeout((function(){e(W([]))}),400*t)}(t),Y(t)}),[t]),Object(n.useEffect)((function(){a.length<=5&&setTimeout((function(){t(H([]))}),325)}),[t,a]),Object(n.useEffect)((function(){e.stopMusic()}),[e]);var p=Object(C.a)(Z,{volume:o}),f=Object(T.a)(p,1)[0],h=Object(C.a)(ee,{volume:o}),x=Object(T.a)(h,1)[0],g=Object(C.a)(te,{volume:s}),v=Object(T.a)(g,1)[0],S=function(){f(),setTimeout(x,33500),setTimeout((function(){setInterval(x,22e3)}),33500)},y=Object(n.useRef)(),N=Object(n.useRef)(),E=Object(n.useRef)(),_=Object(n.useRef)(),w=Object(n.useRef)();w.current=d;var D=Object(n.useRef)();D.current=b;var B=Object(n.useRef)(),J=Object(n.useRef)(),G=Object(n.useRef)();return G.current=u,Object(n.useEffect)((function(){E.current=document.querySelectorAll(".platform"),E.current.forEach((function(e){return setInterval((function(){return function(e,t,c,n,a,r,s){var o=t.getBoundingClientRect(),i=n.getBoundingClientRect();0===Object.keys(a).length&&i.left<=o.right&&(o.right<=i.right||o.left<=i.right)&&o.bottom>=i.top&&o.bottom<=i.top+10?(r(A(!0)),r(I([getComputedStyle(n).bottom,40,.1])),r(P(0))):void 0===a.bottom&&o.left<i.right&&!1===s&&i.left<=o.right&&o.bottom>=i.top&&o.bottom<=i.top+30?(r(I([getComputedStyle(n).bottom,40,.1])),r(A(!0)),r(P(0))):!0===s&&void 0!==a.bottom&&o.left>i.right&&o.bottom<=i.bottom&&(r(I({})),r(A(!1)),r(P(1)))}(N.current,y.current,_.current,e,w.current,t,D.current)}),20)}))}),[t,a,E]),Object(n.useEffect)((function(){B.current=document.querySelectorAll(".coin"),B.current.forEach((function(e){return setInterval((function(){return function(e,t,c,n,a,r,s,o){if(!0===s){var i=t.getBoundingClientRect(),l=n.getBoundingClientRect();!1===o&&i.top>=900?(a(P(2)),a({type:"SET_GAME_OVER",payload:!0})):i.right>=l.left&&(l.bottom>=i.bottom||l.bottom+145>=i.bottom)&&(l.right>=i.right||l.right+145>=i.right)&&l.top<=i.bottom&&(a(W(n.id)),a({type:"SET_GAME_SCORE",payload:1e3}),setTimeout((function(){a(W([]))}),400),r())}}(N.current,y.current,J.current,e,t,v,l,G.current)}),650)}))}),[t,O,d,v,l,u]),Object(k.jsxs)("div",{onClick:function(){return function(e,t,c,n,a){!1===c&&(e({type:"SET_GAME_IS_STARTS"}),n()),a<=1&&(e(I([getComputedStyle(t).bottom,400,1])),e(A(!1)),setTimeout((function(){e(I({}))}),600),e(P(1)))}(t,y.current,l,S,m)},className:"game",children:[Object(k.jsx)(M,{}),a.map((function(e,t){return Object(k.jsx)(R,{position:e},t)})),O.map((function(e,t){return Object(k.jsx)(L,{position:e,id:t},t)})),Object(k.jsx)("p",{className:"gameScore",children:r}),u?Object(k.jsx)(V,{}):null]})},ne=c.p+"static/media/shibaInu.ba0410d0.mp3";var ae=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.environment})).musicVolumeLvl,c=Object(i.c)((function(e){return e.environment})).starsCount,a=Object(C.a)(ne,{volume:t}),r=Object(T.a)(a,2),s=r[0],o=r[1].stop;return Object(n.useEffect)((function(){!function(e){for(var t=0;t<=3;t++)setTimeout((function(){e({type:"SET_STARS_COUNT"})}),1e3*t)}(e)}),[e]),Object(k.jsxs)("div",{className:"App",children:[c.map((function(e,t){return Object(k.jsx)(w,{position:e},t)})),Object(k.jsxs)(_.c,{children:[Object(k.jsx)(_.a,{path:"",exact:!0,element:Object(k.jsx)($,{startMusic:function(){s(),setInterval(s,31e3)}})}),Object(k.jsx)(_.a,{path:"/auth",exact:!0,element:Object(k.jsx)(z,{})}),Object(k.jsx)(_.a,{path:"/menu",exact:!0,element:Object(k.jsx)(K,{})}),Object(k.jsx)(_.a,{path:"/pregame/*",element:Object(k.jsx)(Q,{})}),Object(k.jsx)(_.a,{path:"/game",element:Object(k.jsx)(ce,{stopMusic:o})})]}),Object(k.jsx)("img",{onClick:function(){return e({type:"SET_SOUND_IS_ENABLE"})},className:"sound",src:"/img/music".concat(t?"":"Off",".svg"),alt:"sound"})]})};c(74);s.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(i.a,{store:E,children:Object(k.jsx)(o.a,{children:Object(k.jsx)(ae,{})})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.9f9d753a.chunk.js.map