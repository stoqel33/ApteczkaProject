(this["webpackJsonpapteczka-projekt"]=this["webpackJsonpapteczka-projekt"]||[]).push([[0],{1:function(e,a,t){e.exports={wrapper:"Form_wrapper__31AVx",title:"Form_title__2tGoc",form:"Form_form__1YoZ1",medicineWrapper:"Form_medicineWrapper__UO38_",medicineLabel:"Form_medicineLabel__1bkED",nameTitle:"Form_nameTitle__1VB22",input:"Form_input__1fqNQ",inputAmount:"Form_inputAmount__2-G5s",btnAdd:"Form_btnAdd__7zxpD"}},10:function(e,a,t){e.exports=t(16)},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(8),r=t.n(c),l=t(9),m=t(2),d=t(3),o=t(4),s=t(5),u=function(){return i.a.createElement(i.a.Fragment,null)},p=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,null))}}]),t}(i.a.Component),h=t(6),b=t(1),E=t.n(b),f=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).state={nameMedicine:"",amountMedicine:"",dateMedicine:(new Date).toISOString().slice(0,10),remindMedicine:!1},e.handleInputChange=function(a){"checkbox"===a.target.type?e.setState(Object(h.a)({},a.target.id,a.target.checked)):e.setState(Object(h.a)({},a.target.id,a.target.value))},e.handleClickSubmit=function(){var a=e.state,t=a.nameMedicine,n=a.amountMedicine,i=a.dateMedicine,c=a.remindMedicine;e.props.addMedicine(t.trim(),i,n,c)&&e.setState({nameMedicine:"",amountMedicine:"",dateMedicine:(new Date).toISOString().slice(0,10),remindMedicine:!1})},e}return Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:E.a.wrapper},i.a.createElement("h1",{className:E.a.title},"Dodaj Lek"),i.a.createElement("form",{className:E.a.form},i.a.createElement("div",{className:E.a.medicineWrapper},i.a.createElement("label",{htmlFor:"nameMedicine",className:E.a.medicineLabel},i.a.createElement("h2",{className:E.a.nameTitle},"Nazwa Leku:"),i.a.createElement("input",{type:"text",id:"nameMedicine",className:E.a.input,placeholder:"Nazwa",autoComplete:"off",value:this.state.nameMedicine,onChange:this.handleInputChange}))),i.a.createElement("div",{className:E.a.medicineWrapper},i.a.createElement("label",{htmlFor:"amountMedicine",className:E.a.medicineLabel},i.a.createElement("h2",{className:E.a.amountTitle},"Ilo\u015b\u0107 Tabletek:"),i.a.createElement("input",{type:"number",id:"amountMedicine",className:E.a.inputAmount,placeholder:"0",max:"999",value:this.state.amountMedicine,onChange:this.handleInputChange}))),i.a.createElement("div",{className:E.a.medicineWrapper},i.a.createElement("label",{htmlFor:"dateMedicine",className:E.a.medicineLabel},i.a.createElement("h2",{className:E.a.dateTitle},"Data wa\u017cno\u015bci:"),i.a.createElement("input",{type:"date",id:"dateMedicine",className:E.a.input,value:this.state.dateMedicine,onChange:this.handleInputChange}))),i.a.createElement("div",{className:E.a.medicineWrapper},i.a.createElement("label",{htmlFor:"remindMedicine",className:E.a.medicineLabel},i.a.createElement("h2",{className:E.a.remindTitle},"Przypomnienia:"),i.a.createElement("input",{type:"checkbox",id:"remindMedicine",className:E.a.inputRemind,checked:this.state.remindMedicine,onChange:this.handleInputChange})))),i.a.createElement("button",{onClick:this.handleClickSubmit,className:E.a.btnAdd},"DODAJ"))}}]),t}(i.a.Component),M=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).id=0,e.state={medicines:[]},e.addMedicine=function(a,t,n,i){if(a.length>2){var c={id:e.id,amount:t,date:n,remind:i};return e.id++,e.setState((function(e){return{medicines:[].concat(Object(l.a)(e.medicines),[c])}})),!0}},e}return Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{addMedicine:this.addMedicine}),i.a.createElement(p,null))}}]),t}(i.a.Component);t(15);r.a.render(i.a.createElement(M,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.e448c401.chunk.js.map