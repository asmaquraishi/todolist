(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,a){t.exports=a(19)},17:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},19:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),o=a(9),r=a.n(o),s=(a(6),a(1)),c=a(2),l=a(4),m=a(3),u=a(5),h=(a(17),a(8),function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",null,i.a.createElement("form",{className:"forminput",style:{textDecorationLine:this.props.listData.textline}},i.a.createElement("label",{className:"container"},i.a.createElement("input",{type:"checkbox",checked:"line-through"===this.props.listData.textline,name:"checkbutton",onClick:function(){return t.props.checkbox(t.props.index)}}),i.a.createElement("span",{className:"checkmark"}),this.props.listData.title)),i.a.createElement("button",{className:"clearbtn",onClick:function(){return t.props.removelist(t.props.index)}},"\u2716\ufe0f"))}}]),e}(n.Component)),p=a(10),d=a.n(p),f=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(i)))).state={formData:{title:"",textline:""},list:[]},a.updateForm=function(t){var e=t.target.value,n=a.state.formData,i=Object.assign({},n);i[t.target.name]=e,a.setState({formData:i})},a.addList=function(t){t.preventDefault();var e=a.state.list.slice(0);e.push(a.state.formData),a.setState({list:e})},a.removelist=function(t){var e=a.state.list.slice(0);e.splice(t,1),a.setState({list:e})},a.checkbox=function(t){var e=a.state.list.slice(0);"line-through"!==e[t].textline?e[t].textline="line-through":e[t].textline="",a.setState({list:e})},a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;console.log("second",this.state.list);var e=this.state.list.map(function(e,a){return i.a.createElement(h,{checkbox:t.checkbox,listData:e,removelist:t.removelist,index:a})});return i.a.createElement("div",{className:"mainform"},i.a.createElement("h2",{className:"moment"},d()().format("MMMM Do YYYY, h:mm:ss a")),i.a.createElement("header",null,i.a.createElement("h1",null," -TODOS- ")),i.a.createElement("form",{onSubmit:this.addList},i.a.createElement("input",{className:"input",type:"text",name:"title",placeholder:"Things need to be done",onChange:this.updateForm,value:this.state.formData.title}),i.a.createElement("button",{className:"btnadd",type:"submit"},"Add")),e)}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},6:function(t,e,a){},8:function(t,e,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.4417f4c1.chunk.js.map