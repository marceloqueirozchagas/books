(this.webpackJsonpbooks=this.webpackJsonpbooks||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(13),r=a.n(o),A=(a(22),a(8)),c=a(14),i=a(16),u=a(15),m=(a(23),function(){return l.a.createElement("header",{id:"main-header"},"Minhas Leituras")});a(24);var s=function(e){return l.a.createElement("div",{className:"card",onClick:function(){return e.changeMode(e.mode)}},l.a.createElement("div",{className:"lb-total"},e.total),l.a.createElement("div",{className:"lb-title"},e.title))};a(25);var E=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement(s,{total:e.info.books,title:"Livros",mode:1,changeMode:e.changeMode}),l.a.createElement(s,{total:e.info.authors,title:"Autores",mode:2,changeMode:e.changeMode}))},d=(a(26),a(9)),h=a.n(d);var g=function(e){var t=e.books;return t.length>0?l.a.createElement("div",{className:"container"},l.a.createElement("table",null,l.a.createElement("caption",null,"Livros"),l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Ano leitura"),l.a.createElement("th",null,"Titulo"),l.a.createElement("th",null,"Autor"),l.a.createElement("th",null,"P\xe1ginas"))),l.a.createElement("tbody",null,t.map((function(e,t){return l.a.createElement("tr",{key:e.key},l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.year),l.a.createElement("td",null,e.title),l.a.createElement("td",null,e.author),l.a.createElement("td",null,e.pages))}))))):l.a.createElement("div",{className:"container"},l.a.createElement("p",null,l.a.createElement("img",{src:h.a,alt:"carregando"}),"carregando"))};a(27);var p=function(e){var t=[],a=e.books;return a.forEach((function(e){t.some((function(t){return t.name===e.author}))||t.push({name:e.author,books:a.filter((function(t){return t.author===e.author})).sort((function(e,t){return e.title<t.title?-1:e.title>t.title?1:0})).map((function(e){return{title:e.title,pages:e.pages}}))})})),e.books.length>0?l.a.createElement("div",{className:"container"},l.a.createElement("table",null,l.a.createElement("caption",null,"Autores"),l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Nome"),l.a.createElement("th",null,"Livros"))),t.map((function(e,t){return l.a.createElement("tbody",{key:t},l.a.createElement("tr",null,l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.books.length)),l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null,e.books.map((function(e,t){return l.a.createElement("ul",{key:t},l.a.createElement("li",null,e.title," - ",e.pages," p\xe1ginas"))}))),l.a.createElement("td",null)))})))):l.a.createElement("div",{className:"container"},l.a.createElement("p",null,l.a.createElement("img",{src:h.a,alt:"carregando"}),"carregando"))},M=(a(28),a(10)),b=(M.initializeApp({apiKey:"AIzaSyCP_trX5q4lrqdl5gjIQG2yDuwp9pVL3kU",authDomain:"app-livros.firebaseapp.com",databaseURL:"https://app-livros.firebaseio.com",projectId:"app-livros",storageBucket:"app-livros.appspot.com",messagingSenderId:"881812370219",appId:"1:881812370219:web:c05d3f7d2d6978e0c60b6e"}),M.database()),k=(M.auth(),function e(){Object(A.a)(this,e)});k.getBooks=function(e,t){var a=b.ref(e).orderByKey();return a.once("value",(function(e){var a=[];e.forEach((function(e){var t=e.val();t.key=e.key,a.push({key:t.key,title:t.titulo,author:t.autor,pages:t.paginas,year:t.ano,isbn:t.isbn})})),t(a)})),a};var f=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(A.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={mode:1,books:[],info:{books:0,authors:0,pages:0}},e.loadBooks=function(){k.getBooks("livros",(function(t){if(null!=t){var a={books:t.length,authors:Array.from(new Set(t.map((function(e){return e.author})))).length};e.setState({books:t,info:a})}}))},e.changeMode=function(t){console.log(t),e.setState({mode:t})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.loadBooks(null,null)}},{key:"render",value:function(){var e=this.state,t=e.books,a=e.info,n=e.mode;return l.a.createElement("div",{className:"App"},l.a.createElement(m,null),l.a.createElement(E,{info:a,changeMode:this.changeMode}),1===n?l.a.createElement(g,{books:t}):l.a.createElement(p,{books:t}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t){e.exports="data:image/gif;base64,R0lGODlhEAAQAKIGAGJiYoKCgpKSkkJCQsLCwgAAAP///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVBMTJDOTZFMjVCOTExRTFCN0NDODU5QTNFREE1MTM0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVBMTJDOTZGMjVCOTExRTFCN0NDODU5QTNFREE1MTM0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUExMkM5NkMyNUI5MTFFMUI3Q0M4NTlBM0VEQTUxMzQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUExMkM5NkQyNUI5MTFFMUI3Q0M4NTlBM0VEQTUxMzQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQJDAAGACwAAAAAEAAQAAADM2i63P4wyklrI2MQOkoZnAdOmGYRALAxxLoAWcC2rhHEhCDQLQsEOd2mBxEEAgJKa+dIAAAh+QQJDAAGACwAAAAAEAAQAAADNGi63P6OjEEgG6UMu7DmikRxBABUIDAFoBFMQFsGqCwItXXfrRAEAgMh1xjihkMZsiUkKhIAIfkECQwABgAsAAAAABAAEAAAAzZoujRDK8pRypAsgFYvNoATCA70BQ7wSQQQmCshCPBqzLO9CMGoKwRZ7Rf8AYPDDzKpZBqfvwQAIfkECQwABgAsAAAAABAAEAAAAzNouhRAK0owRpBMiFZfhYumEUBADEUxREIQCBGqRgSx0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQwABgAsAAAAABAAEAAAAzJouiRCK0rnZCRQhPACgAwmdsMQXGIElICEuR5oWUQpz8pQFAMe6TwfwyYsGo/IpFKSAAAh+QQJDAAGACwAAAAAEAAQAAADM2i6RsSQORfjdEK82h4JGccIoCAuRLadygesYjAMAWsAM2C7sDX3lUGhMLAJibufbSlKAAAh+QQJDAAGACwAAAAAEAAQAAADMmi63P7wERLZnFVdmg3umiBwFRGInRCc3TSWQEBGwDAAEGGbdgANhcKAEJsxgMLWzpEAACH5BAkMAAYALAAAAAAQABAAAAMyaLrc/jDKSatlhNScKdceaBDDII6CcA5FMTCpyrAuAQSEEAQCVtolgCF1YgSCnlvRkAAAOw=="}},[[17,1,2]]]);
//# sourceMappingURL=main.c74e70f6.chunk.js.map