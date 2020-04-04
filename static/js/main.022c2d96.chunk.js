(this["webpackJsonpapteczka-projekt"]=this["webpackJsonpapteczka-projekt"]||[]).push([[0],{29:function(e,t,n){e.exports=n(40)},40:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(21),l=n.n(r),c=n(27),o=n(9),d=n(10),m=n(11),p=n(12),u=n(16),s=n(7),h=i.a.createContext(),g=n(22),b=n(1);function f(){var e=Object(g.a)(["\n\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html{\n    font-size: 62.5%;\n  }\n\n  body{\n    font-size: 1.6rem;\n    font-family: 'Montserrat', sans-serif;\n    background: linear-gradient(135deg, rgba(97,13,103,1) 10%, rgba(167,98,98,1) 100%);\n    min-height: var(--app-height);\n\n    @media screen and (min-width: 800px) {\n        max-width: 800px;\n        margin: 0 auto;\n      }\n    }\n\n  textarea:focus,\n  input:focus,\n  button:focus {\n    outline: none;\n  }\n\n  input[type='number']::-webkit-outer-spin-button,\n  input[type='number']::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  input[type='number'] {\n    -moz-appearance: textfield;\n  }\n"]);return f=function(){return e},e}var y=function(){return document.documentElement.style.setProperty("--app-height","".concat(window.innerHeight,"px"))};window.addEventListener("resize",y),y();var x=Object(b.a)(f()),E=Object(b.b)(u.b).withConfig({displayName:"Link",componentId:"sc-1cmzxpj-0"})(["text-decoration:none;color:inherit;"]),v=b.b.div.withConfig({displayName:"Item__Wrapper",componentId:"sc-1qmifbg-0"})(["display:flex;flex-direction:column;padding:20px 40px;margin-bottom:20px;background-color:rgba(245,245,245,0.3);border-radius:10%;&:last-child{margin-bottom:30px;}"]),C=b.b.span.withConfig({displayName:"Item__Title",componentId:"sc-1qmifbg-1"})(["font-size:18px;margin-bottom:7px;&:last-child{margin-bottom:0;}"]),k=Object(b.b)(C).withConfig({displayName:"Item__TitleName",componentId:"sc-1qmifbg-2"})(["font-size:25px;"]),w=b.b.span.withConfig({displayName:"Item__Value",componentId:"sc-1qmifbg-3"})(["margin-left:8px;font-weight:700;"]),M=function(e){var t=e.id,n=e.name,a=e.amount,r=e.date,l=e.remind,c=e.handle;return i.a.createElement(v,null,i.a.createElement(k,null,"Lek ",i.a.createElement(w,null,n)),i.a.createElement(C,null,"Ilo\u015b\u0107 ",i.a.createElement(w,null,a)),i.a.createElement(C,null,"Data wa\u017cno\u015bci ",i.a.createElement(w,null,r)),l?i.a.createElement(C,null,"Przypomnienie",i.a.createElement(w,null,"TAK")):i.a.createElement(C,null,"Przypomnienie",i.a.createElement(w,null,"NIE")),i.a.createElement(E,{to:"/ApteczkaProject/editMedicine",onClick:function(e){return c(parseInt(e.target.id,10))}},i.a.createElement("span",{id:t},"edytuj")))},j=b.b.div.withConfig({displayName:"List__Wrapper",componentId:"zfclqd-0"})(["display:flex;flex-direction:column;align-items:center;padding-top:50px;"]),I=function(e){var t=e.medicines,n=e.handle;return i.a.createElement(j,null,t.map((function(e){return i.a.createElement(M,{key:e.id,id:e.id,name:e.name,amount:e.amount,date:e.date,remind:e.remind,handle:n})})))},_=b.b.div.withConfig({displayName:"Medicine__Wrapper",componentId:"sc-4zi35c-0"})(["display:flex;flex-direction:column;min-height:100vh;text-align:center;"]),z=b.b.h1.withConfig({displayName:"Medicine__Title",componentId:"sc-4zi35c-1"})(["margin-top:20px;color:white;"]),A=b.b.h1.withConfig({displayName:"Medicine__Empty",componentId:"sc-4zi35c-2"})(["margin:50px 20px;padding:100px 40px;background-color:rgba(245,245,245,0.3);border-radius:10%;color:black;"]),N=b.b.button.withConfig({displayName:"Medicine__ButtonAddNew",componentId:"sc-4zi35c-3"})(["width:100%;margin-bottom:20px;font-size:35px;color:white;background-color:transparent;border:none;"]),O=function(){return i.a.createElement(h.Consumer,null,(function(e){return i.a.createElement(_,null,i.a.createElement(z,null,"Apteczka"),e.medicines.length>0?i.a.createElement(I,{medicines:e.medicines,handle:e.handle}):i.a.createElement(A,null,"Brak lek\xf3w"),i.a.createElement(N,null,i.a.createElement(E,{to:"/ApteczkaProject/addMedicine"},"Dodaj nowy lek")))}))},D=n(6),P=b.b.input.withConfig({displayName:"Inputs__Input",componentId:"sc-1n3r4yl-0"})(["color:white;padding:10px 0 10px 15px;margin-right:10px;background-color:transparent;border:none;border-left:1px solid black;border-bottom:1px solid black;::placeholder{font-size:300;color:white;}"]),S=Object(b.b)(P).withConfig({displayName:"Inputs__InputAmount",componentId:"sc-1n3r4yl-1"})(["width:50px;"]),F=function(e){var t=e.type,n=e.id,a=e.checked,r=e.placeholder,l=e.autoComplete,c=e.value,o=e.onChange,d=e.minAmount,m=e.minDate;return i.a.createElement(i.a.Fragment,null,"text"===t&&i.a.createElement(P,{type:t,id:n,placeholder:r,autoComplete:l,value:c,onChange:o})||"tel"===t&&i.a.createElement(S,{type:t,id:n,placeholder:r,autoComplete:l,value:c,onChange:o,min:d})||"date"===t&&i.a.createElement(P,{type:t,id:n,placeholder:r,autoComplete:l,value:c,onChange:o,min:m})||"checkbox"===t&&i.a.createElement(P,{type:t,id:n,checked:a,onChange:o}))};F.defaultProps={checked:!1,placeholder:"",autoComplete:"on",value:"",minAmount:"1",minDate:""};var L=F,T=b.b.label.withConfig({displayName:"Label__MedicineLabel",componentId:"sc-11ue4vq-0"})(["display:flex;justify-content:space-between;align-items:center;@media screen and (min-width:800px){.medicineLabel{margin:0 80px;}}"]),q=b.b.h2.withConfig({displayName:"Label__Title",componentId:"sc-11ue4vq-1"})(["font-size:20px;margin-left:10px;"]),W=function(e){var t=e.name,n=e.type,a=e.placeholder,r=e.value,l=e.onChange,c=e.children,o=e.checked,d=e.autoComplete,m=e.minAmount,p=e.minDate;return i.a.createElement(T,{htmlFor:t},i.a.createElement(q,null,c),i.a.createElement(L,{type:n,id:t,checked:o,placeholder:a,autoComplete:d,value:r,onChange:l,minAmount:m,minDate:p}))};W.defaultProps={placeholder:"",value:"",checked:!1,autoComplete:"on",minAmount:"1",minDate:""};var B=W,J=b.b.div.withConfig({displayName:"Form__Wrapper",componentId:"sc-1janl74-0"})(["display:flex;flex-direction:column;align-items:center;min-height:100vh;"]),Z=b.b.h1.withConfig({displayName:"Form__Title",componentId:"sc-1janl74-1"})(["margin:20px 0;color:white;"]),G=b.b.form.withConfig({displayName:"Form__FormAdd",componentId:"sc-1janl74-2"})(["width:100%;"]),U=b.b.div.withConfig({displayName:"Form__WrapperMedicine",componentId:"sc-1janl74-3"})(["padding:20px 5px;margin:30px 0;background:rgba(245,245,245,0.3);"]),H=b.b.button.withConfig({displayName:"Form__ButtonAdd",componentId:"sc-1janl74-4"})(["width:250px;height:50px;margin-top:20px;letter-spacing:2px;font-size:20px;font-weight:700;color:#a55f62;border:2px solid black;background-color:black;list-style:none;text-decoration:none;line-height:45px;text-align:center;"]),K=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={nameMedicine:"",amountMedicine:"",dateMedicine:e.props.today,remindMedicine:!1},e.handleInputChange=function(t){if("checkbox"===t.target.type)e.setState(Object(D.a)({},t.target.id,t.target.checked));else if("tel"===t.target.type)t.target.value=t.target.value.replace(/[^0-9]+/,""),"0"===t.target.value?t.target.value="0":e.setState(Object(D.a)({},t.target.id,t.target.value));else if("text"===t.target.type)t.target.value=t.target.value.replace(/[^a-zA-Z]+/,""),e.setState(Object(D.a)({},t.target.id,t.target.value));else{var n=new Date(e.props.today);new Date(t.target.value)>=n&&e.setState(Object(D.a)({},t.target.id,t.target.value))}},e.handleClickSubmit=function(){var t=e.state,n=t.nameMedicine,a=t.amountMedicine,i=t.dateMedicine,r=t.remindMedicine,l=n.charAt(0).toUpperCase()+n.slice(1);e.props.addMedicine(l,a,i,r)},e}return Object(d.a)(n,[{key:"render",value:function(){return i.a.createElement(J,null,i.a.createElement(Z,null,"Dodaj Lek"),i.a.createElement(G,null,i.a.createElement(U,null,i.a.createElement(B,{name:"nameMedicine",type:"text",placeholder:"Nazwa",autoComplete:"off",value:this.state.nameMedicine,onChange:this.handleInputChange},"Nazwa leku")),i.a.createElement(U,null,i.a.createElement(B,{name:"amountMedicine",type:"tel",placeholder:"0",autoComplete:"off",minAmount:"1",value:this.state.amountMedicine,onChange:this.handleInputChange},"Ilo\u015b\u0107 Tabletek")),i.a.createElement(U,null,i.a.createElement(B,{name:"dateMedicine",type:"date",minDate:this.props.today,value:this.state.dateMedicine,onChange:this.handleInputChange},"Data wa\u017cno\u015bci")),i.a.createElement(U,null,i.a.createElement(B,{name:"remindMedicine",type:"checkbox",checked:this.state.remindMedicine,onChange:this.handleInputChange},"Przypomnienia"))),this.state.nameMedicine.length>2&&this.state.amountMedicine.length>0?i.a.createElement(E,{to:"/ApteczkaProject/",onClick:this.handleClickSubmit},i.a.createElement(H,null,"DODAJ")):i.a.createElement(E,{to:"/ApteczkaProject/AddMedicine"},i.a.createElement(H,null,"DODAJ")))}}]),n}(i.a.Component),V=function(){return i.a.createElement(h.Consumer,null,(function(e){return i.a.createElement(K,{addMedicine:e.addMedicine,handle:e.handle,today:e.today})}))},Q=b.b.div.withConfig({displayName:"FormEdit__Wrapper",componentId:"yhj9m5-0"})(["display:flex;flex-direction:column;align-items:center;min-height:100vh;"]),R=b.b.h1.withConfig({displayName:"FormEdit__Title",componentId:"yhj9m5-1"})(["margin:20px 0;color:white;"]),X=b.b.form.withConfig({displayName:"FormEdit__FormAdd",componentId:"yhj9m5-2"})(["width:100%;"]),Y=b.b.div.withConfig({displayName:"FormEdit__WrapperMedicine",componentId:"yhj9m5-3"})(["padding:20px 5px;margin:30px 0;background:rgba(245,245,245,0.3);"]),$=b.b.button.withConfig({displayName:"FormEdit__ButtonAdd",componentId:"yhj9m5-4"})(["width:250px;height:50px;margin-top:20px;letter-spacing:2px;font-size:20px;font-weight:700;color:#a55f62;border:2px solid black;background-color:black;list-style:none;text-decoration:none;line-height:45px;text-align:center;"]),ee=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={nameMedicine:e.props.medicines[e.props.target].name,amountMedicine:e.props.medicines[e.props.target].amount,dateMedicine:e.props.medicines[e.props.target].date,remindMedicine:e.props.medicines[e.props.target].remind},e.handleInputChange=function(t){if("checkbox"===t.target.type)e.setState(Object(D.a)({},t.target.id,t.target.checked));else if("tel"===t.target.type)t.target.value=t.target.value.replace(/[^0-9]+/,""),"0"===t.target.value?t.target.value="0":e.setState(Object(D.a)({},t.target.id,t.target.value));else if("text"===t.target.type)t.target.value=t.target.value.replace(/[^a-zA-Z]+/,""),e.setState(Object(D.a)({},t.target.id,t.target.value));else{var n=new Date(e.props.today);new Date(t.target.value)>=n&&e.setState(Object(D.a)({},t.target.id,t.target.value))}},e.handleClickSubmit=function(){var t=e.state,n=t.nameMedicine,a=t.amountMedicine,i=t.dateMedicine,r=t.remindMedicine,l=n.trim(),c=l.charAt(0).toUpperCase()+l.slice(1).trim();e.props.changeMedicine(c,a,i,r)},e}return Object(d.a)(n,[{key:"render",value:function(){return i.a.createElement(Q,null,i.a.createElement(R,null,"Edytuj Lek"),i.a.createElement(X,null,i.a.createElement(i.a.Fragment,null,i.a.createElement(Y,null,i.a.createElement(B,{name:"nameMedicine",type:"text",placeholder:"Nazwa",autoComplete:"off",value:this.state.nameMedicine,onChange:this.handleInputChange},"Nazwa leku")),i.a.createElement(Y,null,i.a.createElement(B,{name:"amountMedicine",type:"tel",placeholder:"0",autoComplete:"off",minAmount:"1",value:this.state.amountMedicine,onChange:this.handleInputChange},"Ilo\u015b\u0107 Tabletek")),i.a.createElement(Y,null,i.a.createElement(B,{name:"dateMedicine",type:"date",minDate:this.props.today,value:this.state.dateMedicine,onChange:this.handleInputChange},"Data wa\u017cno\u015bci")),i.a.createElement(Y,null,i.a.createElement(B,{name:"remindMedicine",type:"checkbox",checked:this.state.remindMedicine,onChange:this.handleInputChange},"Przypomnienia")))),this.state.nameMedicine.length>2&&this.state.amountMedicine.length>0?i.a.createElement(E,{to:"/ApteczkaProject/",onClick:this.handleClickSubmit},i.a.createElement($,null,"Zapisz zmiany")):i.a.createElement(E,{to:"/ApteczkaProject/editMedicine"},i.a.createElement($,null,"Zapisz zmiany")))}}]),n}(i.a.Component),te=function(){return i.a.createElement(h.Consumer,null,(function(e){return i.a.createElement(ee,{medicines:e.medicines,changeMedicine:e.changeMedicine,target:e.target,today:e.today})}))},ne=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).id=0,e.state={today:(new Date).toISOString().slice(0,10),target:null,medicines:[]},e.addMedicine=function(t,n,a,i){var r={id:e.id,name:t,amount:n,date:a,remind:i};e.id++,e.setState((function(e){return{medicines:[].concat(Object(c.a)(e.medicines),[r])}}))},e.changeMedicine=function(t,n,a,i){var r=e.state.medicines;r[e.state.target]={id:e.state.target,name:t,amount:n,date:a,remind:i},e.setState({medicines:r})},e.handleClickGetId=function(t){return e.setState({target:t}),!0},e}return Object(d.a)(n,[{key:"render",value:function(){var e={today:this.state.today,target:this.state.target,medicines:this.state.medicines,addMedicine:this.addMedicine,changeMedicine:this.changeMedicine,handle:this.handleClickGetId};return i.a.createElement(u.a,null,i.a.createElement(x,null),i.a.createElement(h.Provider,{value:e},i.a.createElement(s.c,null,i.a.createElement(s.a,{exact:!0,path:"/ApteczkaProject",component:O}),i.a.createElement(s.a,{path:"/ApteczkaProject/addMedicine",component:V}),i.a.createElement(s.a,{path:"/ApteczkaProject/editMedicine",component:te}))))}}]),n}(i.a.Component);l.a.render(i.a.createElement(ne,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.022c2d96.chunk.js.map