(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{31:function(e,t,a){e.exports=a(63)},53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),c=a.n(l),o=a(7),m=a(1),s=a(10),u=a(11),i=a(13),p=a(12),h=a(14),E=a.n(h),d=function(){return E.a.get("http://dummy.restapiexample.com/api/v1/employees")};var v=function(e){return r.a.createElement("ul",{className:"list-group"},e.results.map((function(e){return r.a.createElement("ul",{key:e.id},r.a.createElement("li",{className:"list-group-item"},"ID: ",e.id),r.a.createElement("li",{className:"list-group-item"},"Name: ",e.employee_name),r.a.createElement("li",{className:"list-group-item"},"Age: ",e.employee_age),r.a.createElement("li",{className:"list-group-item"},"Salary: ",e.employee_salary))})))},f=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={results:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;d().then((function(t){return e.setState({results:t.data.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"All Employees"),r.a.createElement(v,{results:this.state.results}))}}]),a}(n.Component);a(53);var y=function(e){return r.a.createElement("div",{className:"hero text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")}},e.children)};var b=function(){return r.a.createElement("div",null,r.a.createElement(y,{backgroundImage:"https://d3timt52sxdbq0.cloudfront.net/wp-content/uploads/2017/04/empoweremployees.jpg"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("h2",null,"An employee management tool.")))},g=a(29);var N=function(e){return console.log("here is the list of names"+e.names),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"search"},"Search:"),r.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Enter employee name",id:"search",list:"names"}),r.a.createElement("datalist",{id:"names"},e.names.map((function(e){return r.a.createElement("option",{value:e,key:e})}))),r.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary mt-3"},"Search")))},k=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={search:"",results:[],names:[],searchedEmployee:[]},e.searchEmployee=function(t){d().then((function(a){return e.setState({searchedEmployee:a.data.data.filter((function(e){return e.employee_name===t}))})}))},e.handleInputChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(g.a)({},a,n))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchEmployee(e.state.search)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;d().then((function(t){return e.setState({results:t.data.data})})).catch((function(e){return console.log(e)}));var t=[];d().then((function(e){return e.data.data.map((function(e){return t.push(e.employee_name)}))})).catch((function(e){return console.log(e)})),this.setState({names:t}),console.log(t)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,names:this.state.names}),r.a.createElement(v,{results:this.state.searchedEmployee}))}}]),a}(n.Component);var w=function(){return r.a.createElement(k,null)};a(54);var S=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(o.b,{className:"navbar-brand",to:"/"},"Employee Directory"),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/",className:"/"===window.location.pathname||"/about"===window.location.pathname?"nav-link active":"nav-link"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/employees",className:"/employees"===window.location.pathname?"nav-link active":"nav-link"},"All Employees")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link"},"Search Employee")))))};a(60);var j=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("span",null,"Employee Directory 2020"))};a(61);var x=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))};var O=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(x,null,r.a.createElement(m.a,{exact:!0,path:"/",component:b}),r.a.createElement(m.a,{exact:!0,path:"/about",component:b}),r.a.createElement(m.a,{exact:!0,path:"/employees",component:f}),r.a.createElement(m.a,{exact:!0,path:"/search",component:w})),r.a.createElement(j,null)))};a(62);c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.d1eeb16b.chunk.js.map