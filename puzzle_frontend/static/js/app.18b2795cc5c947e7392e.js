webpackJsonp([1],{CyQh:function(t,e){},DUGH:function(t,e){},"Kl+P":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},n,!1,function(t){s("CyQh"),s("PuAr")},null,null).exports,o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"welcome-page"},[t._m(0),t._v(" "),s("button",{staticClass:"btn-primary",on:{click:function(e){return t.$emit("join")}}},[t._v("Start Game")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"logo"}),this._v(" "),e("div",{staticClass:"intro-wrapper"},[e("div",{staticClass:"intro"},[e("p",[this._v("\n          The contentos harmony puzzle game utilizes fast\n          finality of the game to make it frictionless and the\n          immutability of ledger to record game state, and\n          thus enable trust between players.\n        ")]),this._v(" "),e("p",[this._v("Stake. Play. Get rewarded!")])])])])}]};var r=s("VU/8")({name:"WelcomePage",props:{},data:function(){return{}},mounted:function(){},methods:{}},o,!1,function(t){s("frv/")},"data-v-067b17f2",null).exports,l=s("mvHQ"),c=s.n(l),u=s("woOf"),d=s.n(u),h=["#00E0FF","#482AFF","#00AEE9","#69FABD"],v=["#706B5E","white","white","#19586D"],m={name:"Chip",props:["value"],computed:{style:function(){return{fontSize:"30px",backgroundColor:this.backColor,color:this.color}},backColor:function(){return h[this.value%h.length]},color:function(){return v[this.value%v.length]}}},f={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"chip",style:this.style},[this._v(this._s(this.value))])},staticRenderFns:[]},p=s("VU/8")(m,f,!1,null,null,null).exports,b=s("oYgK");s("Ya8g");function g(t,e,s){return Math.max(e,Math.min(s,t))}var j={L:{x:0,y:-1},U:{x:-1,y:0},R:{x:0,y:1},D:{x:1,y:0}},y={37:"L",38:"U",39:"R",40:"D"},x={name:"Game",components:{Chip:p},props:{game:{contents:Array,initialSelected:{x:Number,y:Number}},listenOwnKeyEventsOnly:{type:Boolean,default:!1},tabIndex:{type:Number,default:1},boardSizePx:{type:Number,default:0},animationTimeMs:{type:Number,default:150},gameEnded:Boolean},data:function(){return{cells:this.game.contents.slice(0),position:d()({},this.game.initialSelected),boardSizeAutoPx:0,size:3,moves:""}},mounted:function(){this.boardSizeAutoPx=this.boardSizePx>0?this.boardSizePx:this.$el.getBoundingClientRect().width,this.startGame()},computed:{index:function(){return 3*this.position.x+this.position.y},boardStyle:function(){return{width:this.boardSizePx>0?this.boardSizePx+"px":"100%",height:this.boardSizePx>0?this.boardSizePx+"px":"100%",borderRadius:7/this.size+"%"}},cellStyle:function(){return{width:this.cellSizePct+"%",height:this.cellSizePct+"%",marginLeft:this.cellMarginPct+"%",marginTop:this.cellMarginPct+"%"}},cellSizePct:function(){return 8*this.cellMarginPct},cellMarginPct:function(){return 100/(9*this.size+1)},cellSizePx:function(){return this.cellSizePct/100*(this.boardSizePx>0?this.boardSizePx:this.boardSizeAutoPx)}},watch:{gameEnded:function(t){t&&this.$emit("ended")}},methods:{startGame:function(){Object(b.playBeginSound)(),this.runKeyboardControl(this.move),this.runTouchControl(this.move)},runKeyboardControl:function(t){var e=this.listenOwnKeyEventsOnly?this.$el:document,s=function(e){var s=y[e.keyCode];null!=s&&(e.preventDefault(),Object(b.playMoveSound)(),t(s))};e.addEventListener("keydown",s),this.$once("completeLevel",function(){e.removeEventListener("keydown",s)})},runTouchControl:function(t){var e=function(t){var e,s=5;function a(t){e=t.touches[0],t.preventDefault()}function n(a){var n=a.changedTouches[0],i=e.clientX-n.clientX,o=e.clientY-n.clientY,r=Math.abs(i),l=Math.abs(o);r<s&&l<s||t(r>l?i>0?"L":"R":o>0?"U":"D")}return{attach:function(t){t.addEventListener("touchstart",a,!1),t.addEventListener("touchend",n,!1)},detach:function(t){t.removeEventListener("touchstart",a),t.removeEventListener("touchend",n)}}}(function(e){Object(b.playMoveSound)(),t(e)}),s=this.$el;e.attach(s),this.$once("completeLevel",function(){e.detach(s)})},finishLevel:function(){this.$emit("completeLevel",this.moves)},move:function(t){console.log("minh move",this.moves),this.moves+=t;var e=j[t],s=g(this.position.x+e.x,0,2),a=g(this.position.y+e.y,0,2);s===this.position.x&&a===this.position.y||(this.position.x=s,this.position.y=a,this.cells[this.index]++,this.isLevelPassed()&&this.finishLevel())},isLevelPassed:function(){var t=this.cells[0];return-1===this.cells.findIndex(function(e){return e!==t})},reset:function(){this.cells=this.game.contents.slice(0),this.position=d()({},this.position,this.game.initialSelected)}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"board",style:t.boardStyle,attrs:{tabindex:t.tabIndex}},t._l(t.cells,function(e,a){return s("div",{key:a,ref:"cells",refInFor:!0,staticClass:"cell",class:{selected:t.index===a},style:t.cellStyle},[s("Chip",{ref:"chips",refInFor:!0,attrs:{"animation-time-ms":t.animationTimeMs,value:e,"size-px":t.cellSizePx}})],1)}),0)},staticRenderFns:[]};var k=s("VU/8")(x,_,!1,function(t){s("Kl+P")},"data-v-79e84fdd",null).exports,C=(s("+Uzz"),s("mtWM")),S=s.n(C),z={data:{txs:[],stakeTxId:"",balance:100,email:"",account:""},addTx:function(t){this.data.txs.push(t),"Register"===t.action?(this.data.email=t.email,this.data.account=t.account,this.data.balance+=t.tokenChange):"Stake"===t.action?(this.data.stakeTxId=t.txId,this.data.balance+=t.tokenChange):"CompleteLevel"===t.action&&(this.data.balance+=t.tokenChange)},getStakeTxId:function(){return this.data.stakeTxId}},w="https://us-central1-harmony-puzzle.cloudfunctions.net";function P(t,e){return e.key=E,S.a.post(w+t,e,{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}})}var E="1",T=function(t){return P("/reg",{id:t}).then(function(t){console.log("register",t.data),z.addTx({action:"Register",email:t.data.email,account:t.data.account,timestamp:t.data.timestamp,tokenChange:100})})},I=function(t){return P("/play",{stake:t}).then(function(e){console.log("stakeToken",e.data),z.addTx({action:"Stake",timestamp:e.data.timestamp,value:t,txId:e.data.txId,tokenChange:-t})})},L=function(t,e,s){return P("/finish",{level:t,board:e,moves:s,txId:z.getStakeTxId()}).then(function(t){console.log("completeLevel",t.data),t.data.rewards=4,z.addTx({action:"CompleteLevel",timestamp:t.data.timestamp,tokenChange:t.data.rewards,level:t.data.level})})},F=function(t,e){return Math.floor(Math.random()*(e-t)+t)},O=function(t){return 1==t?1:t>=2&&t<=4?2:t>=5&&t<=8?3:4},M=function(t,e,s){return-1!=s&&((0!=s||0!=Math.floor(e/3))&&((1!=s||2!=Math.floor(e/3))&&((2!=s||e%3!=0)&&(3!=s||e%3!=2))))};var R=s("162o"),D={name:"TxHistoryPanel",data:function(){return{globalData:z.data}}},G={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tx-history-panel"},[s("div",{staticClass:"content flex-vertical"},[s("button",{staticClass:"btn-primary close-btn",on:{click:function(e){return t.$emit("close")}}},[t._v("Close")]),t._v(" "),s("div",{staticClass:"table-wrapper"},[s("table",{staticClass:"tx-history-table"},[t._m(0),t._v(" "),t._l(t.globalData.txs,function(e,a){return s("tr",{key:a,staticClass:"container"},[s("td",[t._v(t._s(t._f("timestamp")(e.timestamp)))]),t._v(" "),s("td",[t._v(t._s(e.action))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(e.tokenChange>0?"+"+e.tokenChange:e.tokenChange))])])})],2)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("Timestamp")]),this._v(" "),e("th",[this._v("Action")]),this._v(" "),e("th",{staticClass:"text-right"},[this._v("Token Change")])])}]};var U={name:"PuzzlePage",components:{Game:k,Chip:p,TxHistoryPanel:s("VU/8")(D,G,!1,function(t){s("cRq3")},"data-v-67c04c68",null).exports},data:function(){return{globalData:z.data,levelIndex:0,levels:[],boardSizePx:0,size:3,gameEnded:!1,secondsLeft:30,timer:null,timeIncrease:"",balanceIncrease:"",isTxPanelOpen:!1}},created:function(){this.loadState()},mounted:function(){this.startGame(),this.boardSizePx=Math.min(this.$refs.gameContainer.clientWidth,420)},computed:{gameOverStyle:function(){return{fontSize:this.boardSizePx/6+"px"}},boardWrapperStyle:function(){return{width:this.boardSizePx+"px",height:this.boardSizePx+"px"}},level:function(){return this.levels[this.levelIndex]}},methods:{loadState:function(){try{var t=document.cookie;if(t){var e=JSON.parse(t);e&&(e.awards&&(this.awards=e.awards),e.bestScore&&(this.bestScore=e.bestScore))}}catch(t){}},persistState:function(){try{var t={bestScore:this.bestScore,awards:this.awards};document.cookie=c()(t)}catch(t){}},startGame:function(){var t=this;this.gameEnded=!1,this.levelIndex=0,this.levels=function(){for(var t,e=new Array(100),s=1;s<101;s++){t=O(s);for(var a=s+3,n=F(3*t,4*t),i={},o=[],r=0;r<9;r++)o.push(a);var l=F(0,9),c=[];for(o[l]-=1,r=0;r<n;r++){var u=-1;do{u=F(0,4)}while(!M(o,l,u));switch(u){case 0:l-=3,c.push('"d"'),r+1!=n&&(o[l]-=1);break;case 1:l+=3,c.push('"u"'),r+1!=n&&(o[l]-=1);break;case 2:l-=1,c.push('"r"'),r+1!=n&&(o[l]-=1);break;case 3:l+=1,c.push('"l"'),r+1!=n&&(o[l]-=1)}}var d=l%3,h=Math.floor(l/3);c=c.reverse(),i.contents=o,i.initialSelected={},i.initialSelected.x=d,i.initialSelected.y=h,e[s-1]=i}return e}(),this.secondsLeft=30,this.timer=Object(R.setInterval)(function(){t.secondsLeft--,t.secondsLeft<=0&&t.endGame()},1e3)},resetLevel:function(){this.$refs["game"+this.levelIndex][0].reset()},onLevelComplete:function(t){var e=this;this.levelIndex!==this.levels.length-1?L(this.levelIndex,this.level,t).then(function(){e.levelIndex++;e.secondsLeft+=15,e.timeIncrease="+15";e.globalData.balance+=5,e.balanceIncrease="+5",a.a.nextTick(function(){e.timeIncrease="",e.balanceIncrease=""}),e.persistState()}):this.endGame()},endGame:function(){this.gameEnded=!0,Object(R.clearInterval)(this.timer),this.timer=null},viewTxHistory:function(){this.isTxPanelOpen=!0}}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t.isTxPanelOpen?s("tx-history-panel",{staticClass:"tx-history-panel",on:{close:function(e){t.isTxPanelOpen=!1}}}):t._e(),t._v(" "),s("div",{staticClass:"main-container appearing"},[s("div",{ref:"gameContainer",staticClass:"game-container"},[s("div",{staticClass:"score-container",style:{width:t.boardSizePx+"px"}},[s("div",{staticClass:"logo"}),t._v(" "),s("div",{staticClass:"flex-horizontal"},[s("div",{staticClass:"count-down info-item"},[s("div",{staticClass:"label"},[t._v("Time Left")]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"seconds-left",class:{"hurry-up":t.secondsLeft&&t.secondsLeft<=12,"game-over":!t.secondsLeft}},[t._v(t._s(t.secondsLeft))]),t._v(" "),s("transition",[""!=t.timeIncrease?s("span",{staticClass:"number-increase"},[t._v("\n                  "+t._s(t.timeIncrease)+"\n                ")]):t._e()])],1)]),t._v(" "),s("div",{staticClass:"balance info-item"},[s("div",{staticClass:"label"},[t._v("Balance")]),t._v(" "),s("div",{staticClass:"content"},[t._v("\n              "+t._s(t.globalData.balance)+"\n              "),s("transition",[""!=t.balanceIncrease?s("span",{staticClass:"number-increase"},[t._v("\n                  "+t._s(t.balanceIncrease)+"\n                ")]):t._e()])],1)])])]),t._v(" "),s("div",{staticClass:"board-wrapper",style:t.boardWrapperStyle},[t.gameEnded?s("div",[s("div",{staticClass:"overlay game-over-message appearing"},[s("div",{staticClass:"content"},[s("p",{style:t.gameOverStyle},[t._v("Game over!")]),t._v(" "),s("div",[s("button",{staticClass:"btn-primary",on:{click:function(e){return t.$emit("restart")}}},[t._v("Restart")])])])])]):t._e(),t._v(" "),t._l(t.levels,function(e,a){return s("transition",{key:a,attrs:{name:"fade"}},[a===t.levelIndex?s("Game",{ref:"game"+a,refInFor:!0,attrs:{"listen-own-key-events-only":!1,"tab-index":1,"board-size-px":t.boardSizePx,game:e,gameEnded:t.gameEnded},on:{completeLevel:t.onLevelComplete}}):t._e()],1)})],2),t._v(" "),s("footer",{staticClass:"flex-vertical",style:{width:t.boardSizePx+"px"}},[s("div",{staticClass:"flex-horizontal action-row"},[s("span",{staticClass:"flex-grow"},[t._v("levels: "+t._s(t.levelIndex+1)+" / "+t._s(t.levels.length))]),t._v(" "),s("button",{staticClass:"btn-primary",style:{visibility:t.gameEnded?"hidden":"visible"},on:{click:t.resetLevel}},[s("font-awesome-icon",{attrs:{icon:"sync"}})],1)]),t._v(" "),s("div",{staticClass:"flex-horizontal action-row"},[s("div",{staticClass:"flex-grow"}),t._v(" "),s("button",{staticClass:"btn-primary view-tx-btn",on:{click:t.viewTxHistory}},[t._v("View Transactions")])])])])])],1)},staticRenderFns:[]};var A=s("VU/8")(U,N,!1,function(t){s("dv5Q")},"data-v-2564f7af",null).exports,H={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"email-page"},[s("div",{staticClass:"content"},[s("div",{staticClass:"logo"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"email-input",attrs:{type:"text",placeholder:"Enter Email Address Here..."},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("button",{staticClass:"btn-primary",attrs:{disabled:!t.email.trim()},on:{click:function(e){t.$emit("submit",t.email.trim())}}},[t._v("Submit")])])},staticRenderFns:[]};var V={name:"KeyPage",data:function(){return{globalData:z.data}}},$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"key-page"},[s("div",{staticClass:"content"},[s("div",{staticClass:"logo"}),t._v(" "),s("div",{staticClass:"msg"},[t._v("Your key has generated")]),t._v(" "),s("div",{staticClass:"key"},[t._v(t._s(t.globalData.account))])]),t._v(" "),s("button",{staticClass:"btn-primary",on:{click:function(e){return t.$emit("start")}}},[t._v("Start Game")])])},staticRenderFns:[]};var q={name:"TutorialPage",data:function(){return{hideTutorial:!1}},methods:{startGame:function(){this.hideTutorial&&localStorage.setItem("hideTutorial",!0),this.$emit("start")}}},B={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tutorial-page"},[s("div",{staticClass:"content"},[s("div",{staticClass:"logo"}),t._v(" "),t._m(0),t._v(" "),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.hideTutorial,expression:"hideTutorial"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.hideTutorial)?t._i(t.hideTutorial,null)>-1:t.hideTutorial},on:{change:function(e){var s=t.hideTutorial,a=e.target,n=!!a.checked;if(Array.isArray(s)){var i=t._i(s,null);a.checked?i<0&&(t.hideTutorial=s.concat([null])):i>-1&&(t.hideTutorial=s.slice(0,i).concat(s.slice(i+1)))}else t.hideTutorial=n}}}),t._v(" Don't show tutorial again.\n    ")])]),t._v(" "),s("button",{staticClass:"btn-primary",on:{click:t.startGame}},[t._v("Start Game")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"msg"},[e("ul",[e("li",[this._v("Swipe or use arrow keys to move between chips")]),this._v(" "),e("li",[this._v("The number on chip increments by one when you move onto it")]),this._v(" "),e("li",[this._v("You complete the level once all the chips have the same number")])])])}]};var Y={name:"TutorialPage",data:function(){return{globalData:z.data,stake:20}},methods:{minus:function(){this.stake<=20||(this.stake-=20)},plus:function(){this.stake+20>this.globalData.balance||(this.stake+=20)},stakeToken:function(){confirm(this.stake+" tokens will be deducted from your balance. Are you sure?")&&this.$emit("stake",this.stake)}}},K={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tutorial-page"},[s("div",{staticClass:"page-content"},[s("header",{staticClass:"flex-horizontal"},[s("div",{staticClass:"logo"}),t._v(" "),s("div",{staticClass:"balance info-item"},[s("div",{staticClass:"label"},[t._v("Balance")]),t._v(" "),s("div",{staticClass:"content"},[t._v(t._s(t.globalData.balance))])])]),t._v(" "),s("div",{staticClass:"stake"},[s("div",{staticClass:"msg"},[t._v("How many tokens do you want to stake?")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t.stake))]),t._v(" "),s("div",{staticClass:"msg"},[t._v("\n        Stake more, win more! You'll get\n        "),s("span",{staticClass:"multiplier"},[t._v(t._s(t.stake/20)+"x")]),t._v("\n        rewards.\n      ")]),t._v(" "),s("div",{staticClass:"action-buttons flex-horizontal"},[s("button",{staticClass:"btn-mini",attrs:{disabled:t.stake<=20},on:{click:t.minus}},[s("font-awesome-icon",{attrs:{icon:"minus"}})],1),t._v(" "),s("button",{staticClass:"btn-mini",attrs:{disabled:t.stake+20>t.globalData.balance},on:{click:t.plus}},[s("font-awesome-icon",{attrs:{icon:"plus"}})],1)])])]),t._v(" "),s("button",{staticClass:"btn-primary",attrs:{disabled:t.globalData.balance<20},on:{click:t.stakeToken}},[t._v("Stake")])])},staticRenderFns:[]};var W={name:"HostingPage",components:{WelcomePage:r,EmailPage:s("VU/8")({name:"Submit",data:function(){return{email:""}}},H,!1,function(t){s("NYrh")},"data-v-776e6b07",null).exports,KeyPage:s("VU/8")(V,$,!1,function(t){s("DUGH")},"data-v-7c82d3ae",null).exports,TutorialPage:s("VU/8")(q,B,!1,function(t){s("OrfU")},"data-v-d0d6325c",null).exports,StakePage:s("VU/8")(Y,K,!1,function(t){s("aV4w")},"data-v-400d726a",null).exports,PuzzlePage:A},data:function(){return{step:3,userKey:"Oxhsa89sd23jkl3450stypose00"}},mounted:function(){},methods:{join:function(){this.step++},submitEmail:function(t){var e=this;T(t).then(function(){e.step++})},stake:function(t){var e=this;I(t).then(function(){localStorage.getItem("hideTutorial")&&e.step++,e.step++})},startGame:function(){this.step++},restartGame:function(){this.step=3}}},X={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"host"},[0===t.step?s("welcome-page",{on:{join:t.join}}):t._e(),t._v(" "),1===t.step?s("email-page",{on:{submit:t.submitEmail}}):t._e(),t._v(" "),2===t.step?s("key-page",{attrs:{userKey:t.userKey},on:{start:t.startGame}}):t._e(),t._v(" "),3===t.step?s("stake-page",{on:{stake:t.stake}}):t._e(),t._v(" "),4===t.step?s("tutorial-page",{on:{start:t.startGame}}):t._e(),t._v(" "),5===t.step?s("puzzle-page",{on:{restart:t.restartGame}}):t._e()],1)},staticRenderFns:[]};var Q=s("VU/8")(W,X,!1,function(t){s("QNi7")},"data-v-a6632fb4",null).exports,J=s("/ocq");a.a.use(J.a);var Z=new J.a({routes:[{path:"/",name:"HostingPage",component:Q}]}),tt=s("PJh5"),et=s.n(tt);a.a.filter("timestamp",function(t){return et()(t).format("MM/DD/YYYY hh:mm:ss")});var st=s("C/JF"),at=s("fhbW"),nt=s("1e6/");st.c.add(at.c,at.b,at.a),a.a.component("font-awesome-icon",nt.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:Z,components:{App:i},template:"<App/>"})},NYrh:function(t,e){},OrfU:function(t,e){},PuAr:function(t,e){},QNi7:function(t,e){},aV4w:function(t,e){},cRq3:function(t,e){},dv5Q:function(t,e){},"frv/":function(t,e){},hYqd:function(t,e,s){t.exports=s.p+"static/media/begin.cb0209d.wav"},j5xL:function(t,e,s){t.exports=s.p+"static/media/move.ee58807.wav"},oYgK:function(t,e,s){var a=s("j5xL"),n=s("hYqd"),i=s("rteI");playSound=function(t){new Audio(t).play()},playMoveSound=function(){playSound(a)},playBeginSound=function(){playSound(n)},playEndSound=function(){playSound(i)},t.exports={playMoveSound:playMoveSound,playBeginSound:playBeginSound,playEndSound:playEndSound}},rteI:function(t,e,s){t.exports=s.p+"static/media/end.594bb95.wav"},uslO:function(t,e,s){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return s(i(t))}function i(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.18b2795cc5c947e7392e.js.map