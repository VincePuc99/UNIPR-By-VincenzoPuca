(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[112],{2651:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var a=n(7294),l=n(9499),o=n(6823);var r,c=n(5444),i=n(9477),m=["component","location"],s=function(e){var t=e.component,n=e.location,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,m);return(0,i.jl)()||"/app/login"===n.pathname?(0,i.jl)()||"/app/booking"===n.pathname?(0,i.jl)()||"/app/hystory"===n.pathname?a.createElement(t,l):((0,c.c4)("/app/hystory"),null):((0,c.c4)("/app/booking"),null):((0,c.c4)("/app/login"),null)},u=function(){return a.createElement(a.Fragment,null,a.createElement("h1",null,"Benvenuto nel tuo Profilo"),a.createElement("div",{class:"form__item"},a.createElement("img",{class:"img",src:n(4872).Z,alt:"Logo"}),a.createElement("button",{class:"form__btn",type:"submit"},a.createElement(c.rU,{to:"/app/booking"},"Prenotazioni")),a.createElement("button",{class:"form__btn",type:"submit"},a.createElement(c.rU,{to:"/app/hystory"},"Lista"))))},d=n(3552),p=n(4529),h=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(t=e.call.apply(e,[this].concat(a))||this).state={username:"",password:""},t.handleUpdate=function(e){var n;t.setState(((n={})[e.target.name]=e.target.value,n))},t.handleSubmit=function(e){e.preventDefault(),t.state.password=p.AES.encrypt(JSON.stringify(t.state.password),"q@ZPm+9g5oYVRqwF5R$5[/YT~W^7ya").toString(),t.state.username=p.AES.encrypt(JSON.stringify(t.state.username),'h3(2g|"p3:Q/L"=`TkOL1XzX9Cp{7I').toString(),(0,i.jc)(t.state)},t}return(0,d.Z)(t,e),t.prototype.render=function(){var e=this;return(0,i.jl)()&&(0,c.c4)("/app/profile"),a.createElement(a.Fragment,null,a.createElement("link",{rel:"stylesheet",href:"styles/global.css"}),a.createElement("body",{class:"body"},a.createElement("form",{class:"login-form",action:"./",method:"post",onSubmit:function(t){e.handleSubmit(t),(0,c.c4)("/app/profile")}},a.createElement("div",{class:"login-form__logo-container"},a.createElement("img",{class:"login-form__logo",src:n(3033).Z,alt:"Logo"})),a.createElement("div",{class:"login-form__content"},a.createElement("div",{class:"login-form__header"},"Login to your account"),a.createElement("input",{class:"login-form__input",type:"text",name:"username",placeholder:"Username",onChange:this.handleUpdate}),a.createElement("input",{class:"login-form__input",type:"password",name:"password",placeholder:"Password",onChange:this.handleUpdate}),a.createElement("button",{class:"login-form__button",type:"submit"},"Login")))))},t}(a.Component),E=n(3609),f=n.n(E),_=n(4529),g=!1,b=[],y=[],v=0;function k(){"admin"!=(0,i.ot)()&&(document.getElementById("accept").disabled=!0,document.getElementById("reject").disabled=!0)}function C(){r=0;var e=D(),t=_.AES.decrypt(e,"q@ZPm+9g5oYVRqwF5R$5[/YT~W^7ya");b=JSON.parse(t.toString(_.enc.Utf8));for(var n=1;n<4;n++)document.getElementById("num"+n).innerHTML=b[r],r++,document.getElementById("checkin"+n).innerHTML=b[r],r++,document.getElementById("checkout"+n).innerHTML=b[r],r++,document.getElementById("name"+n).innerHTML=b[r],r++,document.getElementById("surname"+n).innerHTML=b[r],r++,document.getElementById("contacts"+n).innerHTML=b[r],r++,document.getElementById("adult"+n).innerHTML=b[r],r++,document.getElementById("child"+n).innerHTML=b[r],r++,document.getElementById("service"+n).innerHTML=b[r],r++,document.getElementById("note"+n).innerHTML=b[r],r++}function I(){r=0;for(var e=1;e<4;e++)document.getElementById("num"+e).innerHTML=b[r],r++,document.getElementById("checkin"+e).innerHTML=b[r],r++,document.getElementById("checkout"+e).innerHTML=b[r],r++,document.getElementById("name"+e).innerHTML=b[r],r++,document.getElementById("surname"+e).innerHTML=b[r],r++,document.getElementById("contacts"+e).innerHTML=b[r],r++,document.getElementById("adult"+e).innerHTML=b[r],r++,document.getElementById("child"+e).innerHTML=b[r],r++,document.getElementById("service"+e).innerHTML=b[r],r++,document.getElementById("note"+e).innerHTML=b[r],r++}function V(){g=!1;var e=document.getElementById("prenodel").value.toString(),t=parseInt(e);if(t>=4||isNaN(t)||0===t)alert("Prenotazione da cancellare non valida");else{for(var n=0;n<b.length;n+=10)b[n]===t&&(b[n]="Vuoto",b[n+1]="Vuoto",b[n+2]="Vuoto",b[n+3]="Vuoto",b[n+4]="Vuoto",b[n+5]="Vuoto",b[n+6]="Vuoto",b[n+7]="Vuoto",b[n+8]="Vuoto",b[n+9]="Vuoto",g=!0);!0===g?(alert("Cancellato con successo"),I(),v++):alert("Già cancellata o non disonibile")}}function N(){var e,t=!1,n=document.getElementById("prenorejacc").value.toString(),a=parseInt(n);if(a>=4||isNaN(a)||0===a)alert("Prenotazione da accettare non valida");else for(var l=0;l<b.length;l+=10)b[l]===a&&(y.push(b[l]),y.push(b[l+1]),y.push(b[l+2]),y.push(b[l+3]),y.push(b[l+4]),y.push(b[l+5]),y.push(b[l+6]),y.push(b[l+7]),y.push(b[l+8]),y.push(b[l+9]),b[l]="Vuoto",b[l+1]="Vuoto",b[l+2]="Vuoto",b[l+3]="Vuoto",b[l+4]="Vuoto",b[l+5]="Vuoto",b[l+6]="Vuoto",b[l+7]="Vuoto",b[l+8]="Vuoto",b[l+9]="Vuoto",t=!0);!0===t?(I(),v++,e=y,f().post("savesettings.php",{checkin:e[1],checkout:e[2],name:e[3],surname:e[4],contatcs:e[5],adultsnum:e[6],childnum:e[7],servicetype:e[8],notes:e[9]},(function(e,t){document.getElementById("saveWarningText").innerHTML=e,f()("#saveWarningText").fadeIn(100),setTimeout((function(){f()("#saveWarningText").fadeOut(100)}),3e3)})),y=[]):alert("Già accettata o non disponibile")}function T(){var e=!1,t=document.getElementById("prenorejacc").value.toString(),n=parseInt(t);if(n>=4||isNaN(n)||0===n)alert("Prenotazione da rifiutare non valida");else for(var a=0;a<b.length;a+=10)b[a]===n&&(b[a]="Vuoto",b[a+1]="Vuoto",b[a+2]="Vuoto",b[a+3]="Vuoto",b[a+4]="Vuoto",b[a+5]="Vuoto",b[a+6]="Vuoto",b[a+7]="Vuoto",b[a+8]="Vuoto",b[a+9]="Vuoto",e=!0);!0===e?(alert("Prenotazione rifiutata con successo"),I(),v++):alert("Già rifiuatata o non disponibile")}var L,B,M,S,z,x=function(e){function t(){return e.apply(this,arguments)||this}return(0,d.Z)(t,e),t.prototype.render=function(){var e;return a.createElement(a.Fragment,null,a.createElement("h1",{class:"h1"},"Questa è la lista delle tue prenotazioni"),a.createElement("table",{class:"content-table"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"N°"),a.createElement("th",null,"Check-In"),a.createElement("th",null,"Check-Out"),a.createElement("th",null,"Nome"),a.createElement("th",null,"Cognome"),a.createElement("th",null,"Contatti"),a.createElement("th",null,"Numero Adulti"),a.createElement("th",null,"Numero Bambini"),a.createElement("th",null,"Tipo di servizio"),a.createElement("th",null,"Note"))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",{id:"num1"}," "),a.createElement("td",{id:"checkin1"}," "),a.createElement("td",{id:"checkout1"}," "),a.createElement("td",{id:"name1"}," "),a.createElement("td",{id:"surname1"}," "),a.createElement("td",{id:"contacts1"}," "),a.createElement("td",{id:"adult1"}," "),a.createElement("td",{id:"child1"}," "),a.createElement("td",{id:"service1"}," "),a.createElement("td",{id:"note1"}," ")),a.createElement("tr",null,a.createElement("td",{id:"num2"}," "),a.createElement("td",{id:"checkin2"}," "),a.createElement("td",{id:"checkout2"}," "),a.createElement("td",{id:"name2"}," "),a.createElement("td",{id:"surname2"}," "),a.createElement("td",{id:"contacts2"}," "),a.createElement("td",{id:"adult2"}," "),a.createElement("td",{id:"child2"}," "),a.createElement("td",{id:"service2"}," "),a.createElement("td",{id:"note2"}," ")),a.createElement("tr",null,a.createElement("td",{id:"num3"}," "),a.createElement("td",{id:"checkin3"}," "),a.createElement("td",{id:"checkout3"}," "),a.createElement("td",{id:"name3"}," "),a.createElement("td",{id:"surname3"}," "),a.createElement("td",{id:"contacts3"}," "),a.createElement("td",{id:"adult3"}," "),a.createElement("td",{id:"child3"}," "),a.createElement("td",{id:"service3"}," "),a.createElement("td",{id:"note3"}," ")))),a.createElement("button",{class:"form__btn",onClick:C},"Carica")," ",a.createElement("button",{class:"form__btn",id:"checkuser",onClick:k},"User")," ",a.createElement("text",{class:"text"},"AutoFunction onLoad"),a.createElement("div",{class:"form__item"},a.createElement("text",{class:"text"},"Cancella Prenotazione N°"),a.createElement("input",{claass:"form__input",id:"prenodel",type:"text",class:"input"}),a.createElement("button",{class:"form__btn",onClick:V},"Cancella Prenotazione")),a.createElement("div",{class:"form__item"},a.createElement("label",{class:"text"},"Accetta/Rifiuta N°"),a.createElement("input",((e={class:"form__input",id:"prenorejacc",type:"text"}).class="input",e))),a.createElement("button",{class:"form__btn",id:"accept",onClick:N},"Accetta Prenotazione"),"  ",a.createElement("button",{class:"form__btn",id:"reject",onClick:T},"Rifiuta Prenotazione"),a.createElement("div",null))},t}(a.Component),H=function(){return v},P=function(){return b},w=function(){v--},U=x,A=n(4529),j=[],O=1,Z=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(t=e.call.apply(e,[this].concat(a))||this).state={checkin:"",checkout:"",name:"",surname:"",contacts:"",adultnumber:"",childnumber:"",servicetype:"",notes:""},t.handleSubmit=function(e){e.preventDefault();var n=H();if(0!==n&&(w(),j=P(),O--),z=(new Date).toISOString().slice(0,10),L=new Date,B=new Date,L=t.state.checkin,B=t.state.checkout,M=parseInt(t.state.adultnumber),S=parseInt(t.state.childnumber),4===O)alert("Limite max prenotazioni raggiunto");else if(L>=B)alert("Data check-in/check-out non valida");else if(L<z)alert("Data check-in non valida");else if(""===t.state.name||""===t.state.surname)alert("Campo vuoto non valido");else if(isNaN(t.state.name)&&isNaN(t.state.surname)){if(isNaN(M)||isNaN(S))alert("Campo numerico non valido");else if(M<1||M>=5)alert("Valore adulti non disponibile Min 1 Max 5");else if(S<0||S>=5)alert("Valore bambini non disponibile Min 0 Max 5");else if("Mezza Pensione"!==t.state.servicetype&&"Pensione Completa"!==t.state.servicetype&&"All inclusive"!==t.state.servicetype)alert("Campo servizio non valido");else if(0===n)j.push(O),j.push(t.state.checkin),j.push(t.state.checkout),j.push(t.state.name),j.push(t.state.surname),j.push(t.state.contacts),j.push(t.state.adultnumber),j.push(t.state.childnumber),j.push(t.state.servicetype),j.push(t.state.notes),O++,alert("Prenotazione effettuata con successo");else for(var a=0;a<30;a+=10)if("Vuoto"===j[a]||void 0===j[a]){0!==a&&void 0!==j[a]||(j[a]=1),10!==a&&void 0!==j[a]||(j[a]=2),20!==a&&void 0!==j[a]||(j[a]=3),j[a+1]=t.state.checkin,j[a+2]=t.state.checkout,j[a+3]=t.state.name,j[a+4]=t.state.surname,j[a+5]=t.state.contacts,j[a+6]=t.state.adultnumber,j[a+7]=t.state.childnumber,j[a+8]=t.state.servicetype,j[a+9]=t.state.notes,O++,alert("Prenotazione effettuata con successo");break}}else alert("Non puoi chiamarti come un numero")},t.handleUpdate=function(e){var n;t.setState(((n={})[e.target.name]=e.target.value,n))},t}return(0,d.Z)(t,e),t.prototype.render=function(){var e=this;return a.createElement(a.Fragment,null,a.createElement("form",{class:"form",method:"post",onSubmit:function(t){e.handleSubmit(t)}},a.createElement("div",{class:"form__title"},"Form per la  prenotazione"),a.createElement("p",{class:"form__desc"},"Compila i campi per effettuare una prenotazione"),a.createElement("div",{class:"form__item"},a.createElement("label",{class:"form__label"},"Data check-In",a.createElement("input",{type:"date",class:"form__input form__input--small",name:"checkin",onChange:this.handleUpdate}))),a.createElement("div",{class:"form__item"},a.createElement("label",{class:"form__label"},"Data check-Out",a.createElement("input",{type:"date",class:"form__input form__input--small",name:"checkout",onChange:this.handleUpdate}))),a.createElement("div",{class:"form__item"},a.createElement("label",{for:"name",class:"form__label"},"Nome",a.createElement("input",{type:"text",class:"form__input ",name:"name",placeholder:"Inserisci Nome",onChange:this.handleUpdate}))),a.createElement("div",{class:"form__item"},a.createElement("label",{class:"form__label"},"Cognome",a.createElement("input",{type:"text",class:"form__input",name:"surname",placeholder:"Inserisci Cognome",onChange:this.handleUpdate}))),a.createElement("div",{class:"form__item"},a.createElement("label",{class:"form__label"},"Contatti",a.createElement("input",{type:"text",class:"form__input",name:"contacts",placeholder:"Inserisci un contatto",onChange:this.handleUpdate}))),a.createElement("div",{class:"form__item"},a.createElement("label",{class:"form__label"},"Numero adulti",a.createElement("input",{type:"number",class:"form__input form__input--small",name:"adultnumber",min:"1",max:"5",placeholder:"Numero Adulti",onChange:this.handleUpdate}))),a.createElement("div",{class:"form__item"},a.createElement("label",{class:"form__label"},"Numero bambini",a.createElement("input",{type:"number",class:"form__input form__input--small",name:"childnumber",min:"0",max:"5",placeholder:"Numero Bambini",onChange:this.handleUpdate}))),a.createElement("div",{class:"form__item"},a.createElement("label",{class:"form__label"},"Tipo di servizio",a.createElement("input",{type:"text",class:"form__input",name:"servicetype",placeholder:"Tipologia del servizio",onChange:this.handleUpdate})),a.createElement("span",{class:"form__span"},"Mezza Pensione / Pensione Completa / All inclusive")),a.createElement("div",{class:"form__item"},a.createElement("label",{class:"form__label"},"Note",a.createElement("input",{type:"text",class:"form__input",name:"notes",placeholder:"Note",onChange:this.handleUpdate}))),a.createElement("div",{class:"form__item"},a.createElement("button",{class:"form__btn",type:"submit",onClick:this.handleSubmit},"Prenota"))))},t}(a.Component),D=function(){return A.AES.encrypt(JSON.stringify(j),"q@ZPm+9g5oYVRqwF5R$5[/YT~W^7ya").toString()},F=Z,R=function(){return a.createElement(o.Z,null,a.createElement(l.Router,null,a.createElement(s,{path:"/app/profile",component:u}),a.createElement(s,{path:"/app/booking",component:F}),a.createElement(s,{path:"/app/hystory",component:U}),a.createElement(h,{path:"/app/login"})))}},4872:function(e,t,n){"use strict";t.Z=n.p+"static/profile-a9136072d073801df253d6c3e74febd5.png"}}]);
//# sourceMappingURL=component---src-pages-app-js-9381b7df57f342adef3a.js.map