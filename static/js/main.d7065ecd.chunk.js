(this["webpackJsonpapteczka-projekt"]=this["webpackJsonpapteczka-projekt"]||[]).push([[0],{30:function(e,n,t){e.exports=t(41)},41:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(22),c=t.n(i),o=t(27),l=t(12),u=t(13),d=t(15),m=t(16),p=t(14),b=t(7),s=r.a.createContext(),h=t(2),f=t(1);function g(){var e=Object(h.a)(["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600&display=swap&subset=latin-ext');\n\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html{\n    font-size: 62.5%;\n  }\n\n  body{\n    font-size: 1.6rem;\n    font-family: 'Montserrat', sans-serif;\n    background: linear-gradient(135deg, rgba(97,13,103,1) 10%, rgba(167,98,98,1) 100%);\n    min-height: 100vh;\n\n    @media screen and (min-width: 800px) {\n        max-width: 800px;\n        margin: 0 auto;\n      }\n    }\n\n  textarea:focus,\n  input:focus,\n  button:focus {\n    outline: none;\n  }\n\n  input[type='number']::-webkit-outer-spin-button,\n  input[type='number']::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  input[type='number'] {\n    -moz-appearance: textfield;\n  }\n"]);return g=function(){return e},e}var x=Object(f.a)(g());function v(){var e=Object(h.a)(["\n  margin-left: 8px;\n  font-weight: 700;\n"]);return v=function(){return e},e}function E(){var e=Object(h.a)(["\n  font-size: 25px;\n"]);return E=function(){return e},e}function k(){var e=Object(h.a)(["\n  font-size: 18px;\n  margin-bottom: 7px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]);return k=function(){return e},e}function j(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px 40px;\n  margin-bottom: 20px;\n  background-color: rgba(245, 245, 245, 0.3);\n  border-radius: 10%;\n\n  &:last-child {\n    margin-bottom: 30px;\n  }\n"]);return j=function(){return e},e}var y=f.b.div(j()),O=f.b.span(k()),w=Object(f.b)(O)(E()),C=f.b.span(v()),M=function(e){var n=e.name,t=e.amount,a=e.date,i=e.remind;return r.a.createElement(y,null,r.a.createElement(w,null,"Lek ",r.a.createElement(C,null,n)),r.a.createElement(O,null,"Ilo\u015b\u0107 ",r.a.createElement(C,null,t)),r.a.createElement(O,null,"Data wa\u017cno\u015bci ",r.a.createElement(C,null,a)),i?r.a.createElement(O,null,"Przypomnienie",r.a.createElement(C,null,"TAK")):r.a.createElement(O,null,"Przypomnienie",r.a.createElement(C,null,"NIE")))};function z(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 50px;\n"]);return z=function(){return e},e}var I=f.b.div(z()),A=function(e){var n=e.medicines;return r.a.createElement(I,null,n.map((function(e){return r.a.createElement(M,{key:e.id,name:e.name,amount:e.amount,date:e.date,remind:e.remind})})))};function D(){var e=Object(h.a)(["\n  text-decoration: none;\n  color: inherit;\n"]);return D=function(){return e},e}var S=Object(f.b)(p.b)(D()),P=f.b.div.withConfig({componentId:"sc-4zi35c-0"})(["display:flex;flex-direction:column;min-height:100vh;text-align:center;"]),J=f.b.h1.withConfig({componentId:"sc-4zi35c-1"})(["margin-top:20px;color:white;"]),L=f.b.h1.withConfig({componentId:"sc-4zi35c-2"})(["margin:50px 20px;padding:100px 40px;background-color:rgba(245,245,245,0.3);border-radius:10%;color:black;"]),N=f.b.button.withConfig({componentId:"sc-4zi35c-3"})(["width:100%;margin-bottom:20px;font-size:35px;color:white;background-color:transparent;border:none;"]),B=function(){return r.a.createElement(s.Consumer,null,(function(e){return r.a.createElement(P,null,r.a.createElement(J,null,"Apteczka"),e.medicines.length>0?r.a.createElement(A,{medicines:e.medicines}):r.a.createElement(L,null,"Brak lek\xf3w"),r.a.createElement(N,null,r.a.createElement(S,{to:"/ApteczkaProject/addMedicine"},"Dodaj nowy lek")))}))},T=t(20),F=t(29);function K(){var e=Object(h.a)(["\n  width: 50px;\n"]);return K=function(){return e},e}function q(){var e=Object(h.a)(["\n  color: white;\n  padding: 10px 0 10px 15px;\n  margin-right: 10px;\n  background-color: transparent;\n  border: none;\n  border-left: 1px solid black;\n  border-bottom: 1px solid black;\n\n  ::placeholder {\n    font-size: 300;\n    color: white;\n  }\n"]);return q=function(){return e},e}function G(){var e=Object(h.a)(["\n  font-size: 20px;\n  margin-left: 10px;\n"]);return G=function(){return e},e}function H(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  @media screen and (min-width: 800px) {\n    .medicineLabel {\n      margin: 0 80px;\n    }\n  }\n"]);return H=function(){return e},e}var Q=f.b.label(H()),R=f.b.h2(G()),U=f.b.input(q()),V=Object(f.b)(U)(K()),W=function(e){var n=e.name,t=e.type,a=e.placeholder,i=e.value,c=e.onChange,o=e.children,l=Object(F.a)(e,["name","type","placeholder","value","onChange","children"]);return r.a.createElement(Q,{htmlFor:n},r.a.createElement(R,null,o),"checkbox"===t?r.a.createElement(U,{type:t,id:n,checked:l.checked,onChange:c}):"number"===t?r.a.createElement(V,{type:t,id:n,placeholder:a,autoComplete:l.autoComplete,value:i,onChange:c,min:"0"}):r.a.createElement(U,{type:t,id:n,placeholder:a,autoComplete:l.autoComplete,value:i,onChange:c}))};W.defaultProps={placeholder:"",value:""};var X=W;function Y(){var e=Object(h.a)(["\n  width: 250px;\n  height: 50px;\n  margin-top: 20px;\n  letter-spacing: 2px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #a55f62;\n  border: 2px solid black;\n  background-color: black;\n  list-style: none;\n  text-decoration: none;\n  line-height: 45px;\n  text-align: center;\n"]);return Y=function(){return e},e}function Z(){var e=Object(h.a)(["\n  padding: 20px 5px;\n  margin: 30px 0;\n  background: rgba(245, 245, 245, 0.3);\n"]);return Z=function(){return e},e}function $(){var e=Object(h.a)(["\n  width: 100%;\n"]);return $=function(){return e},e}function _(){var e=Object(h.a)(["\n  margin: 20px 0;\n  color: white;\n"]);return _=function(){return e},e}function ee(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n"]);return ee=function(){return e},e}var ne=f.b.div(ee()),te=f.b.h1(_()),ae=f.b.form($()),re=f.b.div(Z()),ie=f.b.button(Y()),ce=function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={nameMedicine:"",amountMedicine:"0",dateMedicine:(new Date).toISOString().slice(0,10),remindMedicine:!1},e.handleInputChange=function(n){"checkbox"===n.target.type?e.setState(Object(T.a)({},n.target.id,n.target.checked)):e.setState(Object(T.a)({},n.target.id,n.target.value))},e.handleClickSubmit=function(){var n=e.state,t=n.nameMedicine,a=n.amountMedicine,r=n.dateMedicine,i=n.remindMedicine;e.props.addMedicine(t.trim(),a,r,i)&&e.setState({nameMedicine:"",amountMedicine:"0",dateMedicine:(new Date).toISOString().slice(0,10),remindMedicine:!1})},e}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(ne,null,r.a.createElement(te,null,"Dodaj Lek"),r.a.createElement(ae,null,r.a.createElement(re,null,r.a.createElement(X,{name:"nameMedicine",type:"text",autoComplete:"off",value:this.state.nameMedicine,onChange:this.handleInputChange,placeholder:"Nazwa"},"Nazwa leku")),r.a.createElement(re,null,r.a.createElement(X,{name:"amountMedicine",type:"number",placeholder:"0",value:this.state.amountMedicine,onChange:this.handleInputChange},"Ilo\u015b\u0107 Tabletek")),r.a.createElement(re,null,r.a.createElement(X,{name:"dateMedicine",type:"date",value:this.state.dateMedicine,onChange:this.handleInputChange},"Data wa\u017cno\u015bci")),r.a.createElement(re,null,r.a.createElement(X,{name:"remindMedicine",type:"checkbox",checked:this.state.remindMedicine,onChange:this.handleInputChange},"Przypomnienia"))),this.state.nameMedicine.length>2?r.a.createElement(S,{to:"/ApteczkaProject/",onClick:this.handleClickSubmit},r.a.createElement(ie,null,"DODAJ")):r.a.createElement(S,null,r.a.createElement(ie,null,"DODAJ")))}}]),t}(r.a.Component),oe=function(){return r.a.createElement(s.Consumer,null,(function(e){return r.a.createElement(ce,{addMedicine:e.addMedicine})}))},le=function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).id=0,e.state={medicines:[]},e.addMedicine=function(n,t,a,r){var i={id:e.id,name:n,amount:t,date:a,remind:r};return e.id++,e.setState((function(e){return{medicines:[].concat(Object(o.a)(e.medicines),[i])}})),!0},e}return Object(u.a)(t,[{key:"render",value:function(){var e={medicines:this.state.medicines,addMedicine:this.addMedicine};return r.a.createElement(p.a,null,r.a.createElement(x,null),r.a.createElement(s.Provider,{value:e},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/ApteczkaProject",component:B}),r.a.createElement(b.a,{path:"/ApteczkaProject/addMedicine",component:oe}))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(le,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.d7065ecd.chunk.js.map