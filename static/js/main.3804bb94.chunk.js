(this["webpackJsonpapteczka-projekt"]=this["webpackJsonpapteczka-projekt"]||[]).push([[0],{29:function(e,t,n){e.exports=n(40)},40:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(21),r=n.n(c),l=n(27),o=n(9),d=n(10),m=n(11),p=n(12),u=n(16),h=n(7),s=i.a.createContext(),g=n(22),b=n(1);function f(){var e=Object(g.a)(["\n\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html{\n    font-size: 62.5%;\n  }\n\n  body{\n    font-size: 1.6rem;\n    font-family: 'Montserrat', sans-serif;\n    background: linear-gradient(135deg, rgba(97,13,103,1) 10%, rgba(167,98,98,1) 100%);\n    min-height: var(--app-height);\n\n    @media screen and (min-width: 800px) {\n        max-width: 800px;\n        margin: 0 auto;\n      }\n    }\n\n  textarea:focus,\n  input:focus,\n  button:focus {\n    outline: none;\n  }\n\n  input[type='number']::-webkit-outer-spin-button,\n  input[type='number']::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  input[type='number'] {\n    -moz-appearance: textfield;\n  }\n"]);return f=function(){return e},e}var y=function(){return document.documentElement.style.setProperty("--app-height","".concat(window.innerHeight,"px"))};window.addEventListener("resize",y),y();var x=Object(b.a)(f()),E=Object(b.b)(u.b).withConfig({displayName:"Link",componentId:"sc-1cmzxpj-0"})(["text-decoration:none;color:inherit;"]),C=b.b.div.withConfig({displayName:"Item__Wrapper",componentId:"sc-1qmifbg-0"})(["display:flex;flex-direction:column;padding:20px 40px;margin-bottom:20px;background-color:rgba(245,245,245,0.3);border-radius:10%;&:last-child{margin-bottom:30px;}"]),v=b.b.span.withConfig({displayName:"Item__Title",componentId:"sc-1qmifbg-1"})(["font-size:18px;margin-bottom:7px;&:last-child{margin-bottom:0;}"]),k=Object(b.b)(v).withConfig({displayName:"Item__TitleName",componentId:"sc-1qmifbg-2"})(["font-size:25px;"]),w=b.b.span.withConfig({displayName:"Item__Value",componentId:"sc-1qmifbg-3"})(["margin-left:8px;font-weight:700;"]),M=function(e){var t=e.id,n=e.name,a=e.amount,c=e.date,r=e.remind,l=e.handle;return i.a.createElement(C,null,i.a.createElement(k,null,"Lek ",i.a.createElement(w,null,n)),i.a.createElement(v,null,"Ilo\u015b\u0107 ",i.a.createElement(w,null,a)),i.a.createElement(v,null,"Data wa\u017cno\u015bci ",i.a.createElement(w,null,c)),r?i.a.createElement(v,null,"Przypomnienie",i.a.createElement(w,null,"TAK")):i.a.createElement(v,null,"Przypomnienie",i.a.createElement(w,null,"NIE")),i.a.createElement(E,{to:"/ApteczkaProject/editMedicine",onClick:function(e){return l(parseInt(e.target.id,10))}},i.a.createElement("span",{id:t},"edytuj")))},j=b.b.div.withConfig({displayName:"List__Wrapper",componentId:"zfclqd-0"})(["display:flex;flex-direction:column;align-items:center;padding-top:50px;"]),I=function(e){var t=e.medicines,n=e.handle;return i.a.createElement(j,null,t.map((function(e){return i.a.createElement(M,{key:e.id,id:e.id,name:e.name,amount:e.amount,date:e.date,remind:e.remind,handle:n})})))},_=b.b.div.withConfig({displayName:"Medicine__Wrapper",componentId:"sc-4zi35c-0"})(["display:flex;flex-direction:column;min-height:100vh;text-align:center;"]),z=b.b.h1.withConfig({displayName:"Medicine__Title",componentId:"sc-4zi35c-1"})(["margin-top:20px;color:white;"]),N=b.b.h1.withConfig({displayName:"Medicine__Empty",componentId:"sc-4zi35c-2"})(["margin:50px 20px;padding:100px 40px;background-color:rgba(245,245,245,0.3);border-radius:10%;color:black;"]),O=b.b.button.withConfig({displayName:"Medicine__ButtonAddNew",componentId:"sc-4zi35c-3"})(["width:100%;margin-bottom:20px;font-size:35px;color:white;background-color:transparent;border:none;"]),A=function(){return i.a.createElement(s.Consumer,null,(function(e){return i.a.createElement(_,null,i.a.createElement(z,null,"Apteczka"),e.medicines.length>0?i.a.createElement(I,{medicines:e.medicines,handle:e.handle}):i.a.createElement(N,null,"Brak lek\xf3w"),i.a.createElement(O,null,i.a.createElement(E,{to:"/ApteczkaProject/addMedicine"},"Dodaj nowy lek")))}))},P=n(6),S=b.b.input.withConfig({displayName:"Inputs__Input",componentId:"sc-1n3r4yl-0"})(["color:white;padding:10px 0 10px 15px;margin-right:10px;background-color:transparent;border:none;border-left:1px solid black;border-bottom:1px solid black;::placeholder{font-size:300;color:white;}"]),F=Object(b.b)(S).withConfig({displayName:"Inputs__InputAmount",componentId:"sc-1n3r4yl-1"})(["width:50px;"]),D=function(e){var t=e.type,n=e.id,a=e.checked,c=e.placeholder,r=e.autoComplete,l=e.value,o=e.onChange,d=e.min;return i.a.createElement(i.a.Fragment,null,"text"===t&&i.a.createElement(S,{type:t,id:n,placeholder:c,autoComplete:r,value:l,onChange:o})||"tel"===t&&i.a.createElement(F,{type:t,id:n,placeholder:c,autoComplete:r,value:l,onChange:o,min:d})||"date"===t&&i.a.createElement(S,{type:t,id:n,placeholder:c,autoComplete:r,value:l,onChange:o})||"checkbox"===t&&i.a.createElement(S,{type:t,id:n,checked:a,onChange:o}))};D.defaultProps={checked:!1,placeholder:"",autoComplete:"on",value:"",min:""};var L=D,T=b.b.label.withConfig({displayName:"Label__MedicineLabel",componentId:"sc-11ue4vq-0"})(["display:flex;justify-content:space-between;align-items:center;@media screen and (min-width:800px){.medicineLabel{margin:0 80px;}}"]),q=b.b.h2.withConfig({displayName:"Label__Title",componentId:"sc-11ue4vq-1"})(["font-size:20px;margin-left:10px;"]),W=function(e){var t=e.name,n=e.type,a=e.placeholder,c=e.value,r=e.onChange,l=e.children,o=e.checked,d=e.autoComplete;return i.a.createElement(T,{htmlFor:t},i.a.createElement(q,null,l),i.a.createElement(L,{type:n,id:t,checked:o,placeholder:a,autoComplete:d,value:c,onChange:r,min:"1"}))};W.defaultProps={placeholder:"",value:"",checked:!1,autoComplete:"on"};var B=W,J=b.b.div.withConfig({displayName:"Form__Wrapper",componentId:"sc-1janl74-0"})(["display:flex;flex-direction:column;align-items:center;min-height:100vh;"]),Z=b.b.h1.withConfig({displayName:"Form__Title",componentId:"sc-1janl74-1"})(["margin:20px 0;color:white;"]),G=b.b.form.withConfig({displayName:"Form__FormAdd",componentId:"sc-1janl74-2"})(["width:100%;"]),U=b.b.div.withConfig({displayName:"Form__WrapperMedicine",componentId:"sc-1janl74-3"})(["padding:20px 5px;margin:30px 0;background:rgba(245,245,245,0.3);"]),H=b.b.button.withConfig({displayName:"Form__ButtonAdd",componentId:"sc-1janl74-4"})(["width:250px;height:50px;margin-top:20px;letter-spacing:2px;font-size:20px;font-weight:700;color:#a55f62;border:2px solid black;background-color:black;list-style:none;text-decoration:none;line-height:45px;text-align:center;"]),K=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={nameMedicine:"",amountMedicine:"",dateMedicine:(new Date).toISOString().slice(0,10),remindMedicine:!1},e.handleInputChange=function(t){"checkbox"===t.target.type?e.setState(Object(P.a)({},t.target.id,t.target.checked)):"tel"===t.target.type?(t.target.value=t.target.value.replace(/[^0-9]+/,""),"0"===t.target.value?t.target.value="0":e.setState(Object(P.a)({},t.target.id,t.target.value))):"text"===t.target.type?(t.target.value=t.target.value.replace(/[^a-zA-Z]+/,""),e.setState(Object(P.a)({},t.target.id,t.target.value))):e.setState(Object(P.a)({},t.target.id,t.target.value))},e.handleClickSubmit=function(){var t=e.state,n=t.nameMedicine,a=t.amountMedicine,i=t.dateMedicine,c=t.remindMedicine,r=n.charAt(0).toUpperCase()+n.slice(1);e.props.addMedicine(r,a,i,c)},e}return Object(d.a)(n,[{key:"render",value:function(){return i.a.createElement(J,null,i.a.createElement(Z,null,"Dodaj Lek"),i.a.createElement(G,null,i.a.createElement(U,null,i.a.createElement(B,{name:"nameMedicine",type:"text",autoComplete:"off",value:this.state.nameMedicine,onChange:this.handleInputChange,placeholder:"Nazwa"},"Nazwa leku")),i.a.createElement(U,null,i.a.createElement(B,{name:"amountMedicine",type:"tel",placeholder:"0",autoComplete:"off",value:this.state.amountMedicine,onChange:this.handleInputChange},"Ilo\u015b\u0107 Tabletek")),i.a.createElement(U,null,i.a.createElement(B,{name:"dateMedicine",type:"date",value:this.state.dateMedicine,onChange:this.handleInputChange},"Data wa\u017cno\u015bci")),i.a.createElement(U,null,i.a.createElement(B,{name:"remindMedicine",type:"checkbox",checked:this.state.remindMedicine,onChange:this.handleInputChange},"Przypomnienia"))),this.state.nameMedicine.length>2&&this.state.amountMedicine.length>0?i.a.createElement(E,{to:"/ApteczkaProject/",onClick:this.handleClickSubmit},i.a.createElement(H,null,"DODAJ")):i.a.createElement(E,{to:"/ApteczkaProject/AddMedicine"},i.a.createElement(H,null,"DODAJ")))}}]),n}(i.a.Component),V=function(){return i.a.createElement(s.Consumer,null,(function(e){return i.a.createElement(K,{addMedicine:e.addMedicine,handle:e.handle})}))},Q=b.b.div.withConfig({displayName:"FormEdit__Wrapper",componentId:"yhj9m5-0"})(["display:flex;flex-direction:column;align-items:center;min-height:100vh;"]),R=b.b.h1.withConfig({displayName:"FormEdit__Title",componentId:"yhj9m5-1"})(["margin:20px 0;color:white;"]),X=b.b.form.withConfig({displayName:"FormEdit__FormAdd",componentId:"yhj9m5-2"})(["width:100%;"]),Y=b.b.div.withConfig({displayName:"FormEdit__WrapperMedicine",componentId:"yhj9m5-3"})(["padding:20px 5px;margin:30px 0;background:rgba(245,245,245,0.3);"]),$=b.b.button.withConfig({displayName:"FormEdit__ButtonAdd",componentId:"yhj9m5-4"})(["width:250px;height:50px;margin-top:20px;letter-spacing:2px;font-size:20px;font-weight:700;color:#a55f62;border:2px solid black;background-color:black;list-style:none;text-decoration:none;line-height:45px;text-align:center;"]),ee=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={nameMedicine:e.props.medicines[e.props.target].name,amountMedicine:e.props.medicines[e.props.target].amount,dateMedicine:e.props.medicines[e.props.target].date,remindMedicine:e.props.medicines[e.props.target].remind},e.handleInputChange=function(t){"checkbox"===t.target.type?e.setState(Object(P.a)({},t.target.id,t.target.checked)):"tel"===t.target.type?(t.target.value=t.target.value.replace(/[^0-9]+/,""),"0"===t.target.value?t.target.value="0":e.setState(Object(P.a)({},t.target.id,t.target.value))):"text"===t.target.type?(t.target.value=t.target.value.replace(/[^a-zA-Z]+/,""),e.setState(Object(P.a)({},t.target.id,t.target.value))):e.setState(Object(P.a)({},t.target.id,t.target.value))},e.handleClickSubmit=function(){var t=e.state,n=t.nameMedicine,a=t.amountMedicine,i=t.dateMedicine,c=t.remindMedicine,r=n.trim(),l=r.charAt(0).toUpperCase()+r.slice(1).trim();e.props.changeMedicine(l,a,i,c)},e}return Object(d.a)(n,[{key:"render",value:function(){return i.a.createElement(Q,null,i.a.createElement(R,null,"Edytuj Lek"),i.a.createElement(X,null,i.a.createElement(i.a.Fragment,null,i.a.createElement(Y,null,i.a.createElement(B,{name:"nameMedicine",type:"text",autoComplete:"off",value:this.state.nameMedicine,onChange:this.handleInputChange,placeholder:"Nazwa"},"Nazwa leku")),i.a.createElement(Y,null,i.a.createElement(B,{name:"amountMedicine",type:"tel",placeholder:"0",autoComplete:"off",value:this.state.amountMedicine,onChange:this.handleInputChange},"Ilo\u015b\u0107 Tabletek")),i.a.createElement(Y,null,i.a.createElement(B,{name:"dateMedicine",type:"date",value:this.state.dateMedicine,onChange:this.handleInputChange},"Data wa\u017cno\u015bci")),i.a.createElement(Y,null,i.a.createElement(B,{name:"remindMedicine",type:"checkbox",checked:this.state.remindMedicine,onChange:this.handleInputChange},"Przypomnienia")))),this.state.nameMedicine.length>2&&this.state.amountMedicine.length>0?i.a.createElement(E,{to:"/ApteczkaProject/",onClick:this.handleClickSubmit},i.a.createElement($,null,"Zapisz zmiany")):i.a.createElement(E,{to:"/ApteczkaProject/editMedicine"},i.a.createElement($,null,"Zapisz zmiany")))}}]),n}(i.a.Component),te=function(){return i.a.createElement(s.Consumer,null,(function(e){return i.a.createElement(ee,{medicines:e.medicines,changeMedicine:e.changeMedicine,target:e.target})}))},ne=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).id=0,e.state={target:null,medicines:[]},e.addMedicine=function(t,n,a,i){var c={id:e.id,name:t,amount:n,date:a,remind:i};e.id++,e.setState((function(e){return{medicines:[].concat(Object(l.a)(e.medicines),[c])}}))},e.changeMedicine=function(t,n,a,i){var c=e.state.medicines;c[e.state.target]={id:e.state.target,name:t,amount:n,date:a,remind:i},e.setState({medicines:c})},e.handleClickGetId=function(t){return e.setState({target:t}),!0},e}return Object(d.a)(n,[{key:"render",value:function(){var e={medicines:this.state.medicines,target:this.state.target,addMedicine:this.addMedicine,changeMedicine:this.changeMedicine,handle:this.handleClickGetId};return i.a.createElement(u.a,null,i.a.createElement(x,null),i.a.createElement(s.Provider,{value:e},i.a.createElement(h.c,null,i.a.createElement(h.a,{exact:!0,path:"/ApteczkaProject",component:A}),i.a.createElement(h.a,{path:"/ApteczkaProject/addMedicine",component:V}),i.a.createElement(h.a,{path:"/ApteczkaProject/editMedicine",component:te}))))}}]),n}(i.a.Component);r.a.render(i.a.createElement(ne,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.3804bb94.chunk.js.map