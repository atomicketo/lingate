(this.webpackJsonplingate=this.webpackJsonplingate||[]).push([[0],{58:function(e,t,a){e.exports=a(73)},63:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),i=a.n(r),o=(a(63),a(28)),c=a(16),s=a(41),m=a(42),u=a(53),d=a(46),f=a(121),g=a(8),p=a(54),h=a(45),x=a(3),E=a(21),v=a(128),w=a(111),y=a(112),b=a(114),k=a(118),T=a(30),S=a(117),C=a(115),A=a(49),B=a.n(A),N=a(50),O=a.n(N),I=a(51),j=a.n(I),W=a(129),D=a(119),L=a(120),R=a(116),F=a(52),z=a.n(F),q=Object(d.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),backgroundColor:"#113448"},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(h.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},title:{flexGrow:1,textAlign:"center",color:"white"},button:{color:"white",margin:3}}}));function H(){var e=q(),t=Object(E.a)(),a=l.a.useState(!1),n=Object(p.a)(a,2),r=n[0],i=n[1];return l.a.createElement("div",{className:e.root},l.a.createElement(w.a,null),l.a.createElement(y.a,{position:"fixed",className:Object(x.a)(e.appBar,Object(g.a)({},e.appBarShift,r))},l.a.createElement(b.a,null,l.a.createElement(C.a,{color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},edge:"start",className:Object(x.a)(e.menuButton,r&&e.hide)},l.a.createElement(B.a,null)),l.a.createElement(T.a,{variant:"h6",className:e.title},"LINGATE"),l.a.createElement(R.a,{color:"inherit",className:e.button,variant:"outlined",size:"small",href:"http://atomicketo.github.io/stem-12d"},"Home"))),l.a.createElement(v.a,{className:e.drawer,variant:"persistent",anchor:"left",open:r,classes:{paper:e.drawerPaper}},l.a.createElement("div",{className:e.drawerHeader},l.a.createElement(C.a,{onClick:function(){i(!1)}},"ltr"===t.direction?l.a.createElement(O.a,null):l.a.createElement(j.a,null))),l.a.createElement(S.a,null),l.a.createElement(k.a,null,["Derivatives"].map((function(e,t){return l.a.createElement(W.a,{button:!0,key:e,alignItems:"flex-start"},l.a.createElement(D.a,null,l.a.createElement(z.a,null)),l.a.createElement(L.a,{primary:l.a.createElement(T.a,{type:"body2",style:{fontSize:18,fontStyle:"oblique"}},e)}))}))),l.a.createElement(S.a,null)))}var V=a(122),_=a(33),G=a.n(_),P=function(e){var t=e.latex,a=e.styles;return l.a.createElement(G.a.Provider,null,l.a.createElement(G.a.Node,{formula:t,style:a}))},J=a(55);function M(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{style:{letterSpacing:7,textAlign:"center",marginTop:48}},"DEFINITION OF THE DERIVATIVE"),l.a.createElement("p",null,"The derivative of f(x) with respect to x is the function f\u2032(x) and is defined as,"),l.a.createElement("br",null),l.a.createElement(J.a,{style:{fontStyle:"italic",textAlign:"center",padding:5,backgroundColor:"#ffffba",margin:"auto",maxWidth:400},elevation:2},l.a.createElement(P,{latex:"f'(x) = \\lim\\limits_{x \\to \\infty} f(x+h) - f(x)h"})),l.a.createElement("br",null),l.a.createElement("p",null,"Note that we replaced all the a\u2019s in (1) with x\u2019s to acknowledge the fact that the derivative is really a function as well. We often \u201cread\u201d f\u2032(x) as ",l.a.createElement("strong",null,"\u201cf prime of x\u201d"),". Let\u2019s compute a couple of derivatives using the definition."),l.a.createElement("p",null,"A function f(x) is called differentiable at"," ",l.a.createElement("strong",null,"x = a if f\u2032(a)")," exists and f(x) is called differentiable on an interval if the derivative exists for each point in that interval."),l.a.createElement("p",null,"The next theorem shows us a very nice relationship between functions that are continuous and those that are differentiable."),l.a.createElement(J.a,{elevation:4,style:{padding:20,marginTop:5,marginBottom:10,backgroundColor:"#fcfcfc"}},l.a.createElement("h2",null,"THEOREM"),l.a.createElement("p",null,"If f(x) is differentiable at x = a then f(x) is continuous at x = a ."),l.a.createElement("p",null,"Note that this theorem does not work in reverse. Consider"," ",l.a.createElement("strong",null,"f(x) = |x|")," and take a look at,"),l.a.createElement("p",null,l.a.createElement(J.a,{style:{fontStyle:"italic",textAlign:"center",padding:5,backgroundColor:"#ffffba",margin:"auto",maxWidth:400},elevation:2},l.a.createElement(P,{latex:" \\lim\\limits_{x \\to 0} f(x) = \\lim\\limits_{x \\to 0}|x| = 0 = f(0)"}))),l.a.createElement("p",null,"So, f (x) = | x | is continuous at x = 0 but we\u2019ve just shown above in Example 4 that f(x) = | x | is not differentiable at x = 0 .")),l.a.createElement(J.a,{elevation:4,style:{padding:20,marginTop:5,marginBottom:10,backgroundColor:"#fcfcfc"}},l.a.createElement("h2",null,"ALTERNATE NOTION"),l.a.createElement("p",null,"Next, we need to discuss some alternate notation for the derivative. The typical derivative notation is the \u201cprime\u201d notation. However, there is another notation that is used on occasion so let\u2019s cover that."),l.a.createElement("p",null,"Given a function ",l.a.createElement("strong",null,"y = f(x)")," all of the following are equivalent and represent the derivative of f ( x ) with respect to x."),l.a.createElement("p",null,l.a.createElement(J.a,{elevation:4,style:{padding:20,marginTop:5,marginBottom:10,backgroundColor:"#ffffba",margin:"auto",maxWidth:400}},l.a.createElement(P,{latex:"f'(x)=y'=\\frac{df}{dx}=\\frac{dy}{dx}"}))),l.a.createElement("p",null,"Because we also need to evaluate derivatives on occasion we also need a notation for evaluating derivatives when using the fractional notation. So, if we want to evaluate the derivative at x = a all of the following are equivalent."),l.a.createElement("p",null,l.a.createElement(J.a,{elevation:4,style:{padding:20,marginTop:5,marginBottom:10,backgroundColor:"#ffffba",margin:"auto",maxWidth:400}},l.a.createElement(P,{latex:"f'(a)=y'|_{x=a}=\\frac{df}{dx}|_{x=a}"}))),l.a.createElement("p",null,"Note as well that on occasion we will drop the (x) part on the function to simplify the notation somewhat. In these cases the following are equivalent."),l.a.createElement("p",null,l.a.createElement(J.a,{elevation:4,style:{padding:20,marginTop:5,marginBottom:10,backgroundColor:"#ffffba",margin:"auto",maxWidth:400}},l.a.createElement(P,{latex:"f'(x) = f'"}))),l.a.createElement("p",null,"As a final note in this section we\u2019ll acknowledge that computing most derivatives directly from the definition is a fairly complex (and sometimes painful) process filled with opportunities to make mistakes. In a couple of sections we\u2019ll start developing formulas and/or properties that will help us to take the derivative of many of the common functions so we won\u2019t need to resort to the definition of the derivative too often."),l.a.createElement("p",null,"This does not mean however that it isn\u2019t important to know the definition of the derivative! It is an important definition that we should always know and keep in the back of our minds. It is just something that we\u2019re not going to be working with all that much.")))}function U(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(J.a,{style:{fontWeight:"bold",fontSize:"2rem",textAlign:"center",backgroundColor:"#113448",borderRadius:10,color:"white",marginBottom:50,padding:20},elevation:5},"INTRODUCTION TO DERIVATIVES"),l.a.createElement("p",{style:{textAlign:"center",marginLeft:0}},"Its all about the slope!"),l.a.createElement(J.a,{style:{fontStyle:"italic",textAlign:"center",padding:5,backgroundColor:"#ffffba",margin:"auto",maxWidth:400,marginBottom:40,fontSize:20},elevation:2},l.a.createElement(P,{latex:"Slope=\\frac{Change in Y}{Change in X}"})),l.a.createElement("img",{src:"https://www.mathsisfun.com/algebra/images/slope.svg",alt:"Slope"}),l.a.createElement("p",{style:{textAlign:"center",marginTop:40,marginBottom:40,marginLeft:0}},"We can find an ",l.a.createElement("strong",null,"average")," slope between two points"),l.a.createElement("img",{src:"https://www.mathsisfun.com/calculus/images/slope-average.svg",alt:"Average Slope"}),l.a.createElement("p",{style:{textAlign:"center",marginTop:40,marginLeft:0}},"But how do we find the slope ",l.a.createElement("strong",null,"at a point?")," "),l.a.createElement("p",{style:{textAlign:"center",marginBottom:40,marginLeft:0}},"There is nothing to measure!"),l.a.createElement("img",{src:"https://www.mathsisfun.com/calculus/images/slope-0-0.svg",alt:"Slope Zero"}),l.a.createElement("p",{style:{textAlign:"center",marginTop:40,marginLeft:0}},"But with derivatives we use a small difference ...")," ",l.a.createElement("p",{style:{textAlign:"center",marginBottom:40,marginLeft:0}},"... then have it shrink towards zero."),l.a.createElement("img",{src:"https://www.mathsisfun.com/calculus/images/slope-dy-dx.svg",alt:"Circle"}),l.a.createElement(J.a,{elevation:4,style:{padding:20,marginTop:5,marginBottom:10,backgroundColor:"#fcfcfc"}},l.a.createElement("h2",{style:{textAlign:"center",marginBottom:40}},"Let us Find a Derivative!"),l.a.createElement("p",null,"To find the derivative of a function ",l.a.createElement("strong",null,"y = f(x)")," we use the slope formula:"),l.a.createElement(J.a,{style:{fontStyle:"italic",textAlign:"center",padding:5,backgroundColor:"#ffffba",margin:"auto",maxWidth:400,marginBottom:40},elevation:2},l.a.createElement(P,{latex:"Slope=\\frac{Change in Y}{Change in X}= \\frac{\u0394y}{\u0394x}"})),l.a.createElement("img",{src:"https://www.mathsisfun.com/calculus/images/slope-dy-dx2.gif",alt:"Slope"}),l.a.createElement("p",null,"And (from the diagram) we see that:"),l.a.createElement("p",null,"x changes from ",l.a.createElement("strong",null,"x to x+\u0394x")),l.a.createElement("p",null,"y changes from ",l.a.createElement("strong",null,"f(x) to f(x+\u0394x)")),l.a.createElement("p",{style:{marginTop:40}},"Now follow these steps:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Fill in this slope formula:"),l.a.createElement(J.a,{style:{fontStyle:"italic",textAlign:"center",padding:5,backgroundColor:"#ffffba",margin:"auto",maxWidth:400,marginBottom:40,marginTop:40},elevation:2},l.a.createElement(P,{latex:"\\frac{\u0394y}{\u0394x}=\\frac{f(x+\u0394x) \u2212 f(x)}{\u0394x}"})),l.a.createElement("li",null,"Simplify it as best we can"),l.a.createElement("li",null,"Then make \u0394x shrink towards zero.")),l.a.createElement("p",{style:{marginTop:40}},"Now, you can do this!"),l.a.createElement("div",{style:{backgroundColor:"#e1f7d5",padding:10,borderRadius:5,marginTop:24,marginBottom:24}},l.a.createElement("p",null,"Example: the function ",l.a.createElement("strong",null,"f(x) = x2")),l.a.createElement("p",null,"We know ",l.a.createElement("strong",null,"f(x) = x2"),", and we can calculate"," ",l.a.createElement("strong",null,"f(x+\u0394x) "),":"),l.a.createElement("p",null,"Start with: ",l.a.createElement("strong",null,"f(x+\u0394x) = (x+\u0394x)")),l.a.createElement(P,{styles:{fontSize:11},latex:"(x + \u0394x)^2: f(x+\u0394x) = x^2 + 2x \u0394x + (\u0394x)^2 )"})),l.a.createElement("div",{style:{backgroundColor:"#ddfffc",padding:10,borderRadius:5,marginTop:24,marginBottom:24}},l.a.createElement("p",null,"The slope formula is:"),l.a.createElement(P,{latex:"\\frac{f(x+\u0394x) \u2212 f(x)}{\u0394x}"}),l.a.createElement("p",null,"Put in ",l.a.createElement("strong",null,"f(x+\u0394x)")," and ",l.a.createElement("strong",null,"f(x):")),l.a.createElement(P,{latex:"\\frac{x^2 + 2x  \u0394x + (\u0394x) - x^2}{\u0394x}"}),l.a.createElement("p",null,"Simplify (x",l.a.createElement("sup",null,"2")," and \u2212x",l.a.createElement("sup",null,"2")," cancel):"),l.a.createElement(P,{latex:"\\frac{2x \u0394x + (\u0394x)^2}{\u0394x}"}),l.a.createElement("p",null,"Simplify more (divide through by \u0394x):"),l.a.createElement(P,{latex:"2x + \u0394x"}),l.a.createElement("p",null,"Then as \u0394x heads towards 0 we get:"),l.a.createElement(P,{latex:"2x"}),l.a.createElement("p",null,"Result: the derivative of x",l.a.createElement("sup",null,"2")," is 2x"),l.a.createElement("p",null,"In other words, the slope at x is 2x")),l.a.createElement("div",{style:{marginTop:40}},l.a.createElement("p",null,"We write ",l.a.createElement("strong",null,"dx")," instead of"," ",l.a.createElement("strong",null,'"\u0394x heads towards 0"'),"."),l.a.createElement("p",null,'And "the derivative of" is commonly written ',l.a.createElement("sup",null,"d"),"\u2044",l.a.createElement("sub",null,"dx"),"  ",":"),l.a.createElement(J.a,{style:{fontStyle:"italic",textAlign:"center",padding:5,backgroundColor:"#ffffba",margin:"auto",maxWidth:400}},l.a.createElement(P,{latex:"\\frac{d}{dx}x2 = 2x"}),l.a.createElement("p",{style:{textAlign:"center",paddingTop:16,margin:0}},'"The derivative of ',l.a.createElement("strong",null,"x2")," equals ",l.a.createElement("strong",null,"2x"),'"'),l.a.createElement("p",{style:{textAlign:"center",margin:0}},'or simply "d dx of ',l.a.createElement("strong",null,"x2")," equals ",l.a.createElement("strong",null,"2x"),'"')),l.a.createElement("p",null,"What does ",l.a.createElement("sup",null,"d"),"\u2044",l.a.createElement("sub",null,"dx")," x ",l.a.createElement("sup",null,"2")," = 2x mean?"),l.a.createElement("img",{src:"https://www.mathsisfun.com/calculus/images/slope-x2-2.svg",alt:"Slope"}),l.a.createElement("p",{style:{textAlign:"center",margin:0}},"It means that, for the function x",l.a.createElement("sup",null,"2"),', the slope or "rate of change" at any point is 2x.'),l.a.createElement("p",{style:{textAlign:"center",margin:0}},"So when x=2 the slope is 2x = 4, as shown here:"),l.a.createElement("p",{style:{textAlign:"center",margin:0}},"Or when x=5 the slope is 2x = 10, and so on."),l.a.createElement("div",{className:"Note",style:{backgroundColor:"#e2eeff",padding:10,marginBottom:24,marginTop:24,borderRadius:7}},l.a.createElement("p",null,'Note: sometimes f\u2019(x) is also used for "the derivative of":'),l.a.createElement(P,{latex:"f\u2019(x) = 2x"}),l.a.createElement("p",{style:{textAlign:"center",margin:0}},'"The derivative of f(x) equals 2x"'),l.a.createElement("p",{style:{textAlign:"center",margin:0}},'or simply "f-dash of x equals 2x"')))),l.a.createElement("style",{scoped:!0,jsx:!0},"\n        img {\n          display: block;\n          margin: auto;\n        }\n        @media (min-width: 769px) {\n          p {\n            margin-left: 200px;\n          }\n          li {\n            margin-left: 200px;\n          }\n        }\n      "))}function X(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(J.a,{style:{backgroundColor:"#fcfcfc",borderRadius:10,marginBottom:30,padding:20},elevation:5},l.a.createElement("h2",{style:{backgroundColor:"#113448",textAlign:"center",marginTop:16,color:"white",padding:10,borderRadius:10}},"VIDEO-TUTORIAL")),l.a.createElement("style",{scoped:!0,jsx:!0},"\n        .center {\n          margin: 0 auto;\n          width: 300px;\n        }\n      "))}Object(d.a)({paddingTop:{paddingTop:50}});function Y(e){var t=e.back;return l.a.createElement(l.a.Fragment,null,l.a.createElement(H,null),l.a.createElement(f.a,{fixed:!0,style:{marginTop:80}},l.a.createElement(V.a,{style:{padding:20}},l.a.createElement(U,null),l.a.createElement(M,null),l.a.createElement(X,null),l.a.createElement(R.a,{variant:"contained",style:{marginTop:20,paddingRight:20,paddingLeft:20},color:"#3f51b5",onClick:function(){return t()}},"Back"))),l.a.createElement("style",{jsx:!0},'\n        body {\n          font-family: "Comic Sans MS";\n        }\n        p {\n          font-size: 1rem;\n        }\n        h2 {\n          // margin-top: 50px;\n          font-size: 1.3rem;\n          letter-spacing: 4px;\n        }\n      '))}var Q=a(127),Z=a(123),$=a(126),K=a(125),ee=a(124),te=Object(d.a)({card:{maxWidth:345,margin:30,display:"inline-block"},media:{height:140}});function ae(e){var t=te(),a=e.item,n=a.image,r=a.title,i=a.desc,o=e.handleOnClick;return l.a.createElement(V.a,{className:t.card},l.a.createElement(Z.a,null,l.a.createElement(ee.a,{className:t.media,image:n,title:r}),l.a.createElement(K.a,null,l.a.createElement(T.a,{gutterBottom:!0,variant:"h5",component:"h2"},r),l.a.createElement(T.a,{variant:"body2",color:"textSecondary",component:"p"},i))),l.a.createElement($.a,null,l.a.createElement(R.a,{size:"small",color:"primary",onClick:function(){return o()},disabled:!!e.disable},e.studyNow?"Study Now":"Coming Soon")))}var ne=function(e){var t=e.showDerivatives;return l.a.createElement(n.Fragment,null,l.a.createElement(f.a,{maxWidth:"xl",style:{marginTop:80}},l.a.createElement(Q.a,{container:!0,justify:"center"},l.a.createElement(ae,{item:{title:"Derivatives",desc:"The derivative of a function of a real variable measures the sensitivity to change of the function value (output value) with respect to a change in its argument (input value).",image:"https://images.unsplash.com/photo-1528082992860-d520150d6f6c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"},className:!0,handleOnClick:function(){return t()},studyNow:!0}))),e.children)},le=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showDerivatives:!1,showAntiDerivatives:!1},a.handleBack=function(){a.setState({showDerivatives:!1}),window.scrollTo({top:0,behavior:"smooth"})},a.renderComponent=function(){return a.state.showDerivatives?l.a.createElement(Y,{back:a.handleBack}):l.a.createElement(ne,{showDerivatives:function(){return a.setState({showDerivatives:!0})}})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(H,null),this.renderComponent())}}]),t}(n.Component);var re=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(le,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[58,1,2]]]);
//# sourceMappingURL=main.f2c29d11.chunk.js.map