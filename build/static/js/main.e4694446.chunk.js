(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,a,t){e.exports={"join-page":"Join_join-page__2YmLo","join-page__heading":"Join_join-page__heading__3h6GC","join-page__left-side":"Join_join-page__left-side__2HVKs","join-page__right-side":"Join_join-page__right-side__2hNRb","join-page__credentials":"Join_join-page__credentials__SNQNg","join-page__input-group":"Join_join-page__input-group__2myRp",invalid:"Join_invalid__3O9Zv"}},16:function(e,a,t){e.exports={message:"Message_message__3cVBO",message__owner:"Message_message__owner__Pea1S","message-sender__owner":"Message_message-sender__owner__2meLg","message-sender":"Message_message-sender__3l_CX","message-text__owner":"Message_message-text__owner__118AX","message-text":"Message_message-text__26R6R"}},53:function(e,a,t){e.exports={"messages-container":"Messages_messages-container__2kENy"}},59:function(e,a,t){},7:function(e,a,t){e.exports={"chat-page":"Chat_chat-page__2b1H-","chat-page__user-list-container":"Chat_chat-page__user-list-container__2gaLc","user-list__heading":"Chat_user-list__heading__27wXY","chat-container__change-room":"Chat_chat-container__change-room__3k7Xb","user-list":"Chat_user-list__3hf1i","user-list__user":"Chat_user-list__user__1qwec","chat-page__chat-container":"Chat_chat-page__chat-container__2NoOT","chat-container__chat-heading":"Chat_chat-container__chat-heading__lDGfv","chat-container__chat-output":"Chat_chat-container__chat-output__3gnTd","chat-container__input":"Chat_chat-container__input__27KAK"}},99:function(e,a,t){"use strict";t.r(a);var n,s=t(0),c=t(49),i=t.n(c),r=t(18),o=t(2),_=(t(59),t(13)),j=t(14),l=t.n(j),h=t(1),u=function(){var e=Object(s.useState)(""),a=Object(_.a)(e,2),t=a[0],n=a[1],c=Object(s.useState)("Vermilion"),i=Object(_.a)(c,2),o=i[0],j=i[1],u=Object(s.useState)(!1),m=Object(_.a)(u,2),g=m[0],d=m[1],p=g&&t.trim().length<3,b=p?"invalid":"";return Object(h.jsxs)("div",{className:l.a["join-page"],children:[Object(h.jsx)("h1",{className:l.a["join-page__heading"],children:"Chat In Peace"}),Object(h.jsx)("div",{className:l.a["join-page__left-side"]}),Object(h.jsx)("div",{className:l.a["join-page__right-side"],children:Object(h.jsxs)("div",{className:l.a["join-page__credentials"],children:[Object(h.jsxs)("div",{className:l.a["join-page__input-group"],children:[Object(h.jsx)("label",{htmlFor:"username",children:"Username"}),Object(h.jsx)("input",{className:l.a[b],type:"text",id:"username",onChange:function(e){n(e.target.value)},onFocus:function(){d(!1)},onBlur:function(){d(!0)}}),p&&Object(h.jsx)("p",{children:"Username must be at least 3 characters long"})]}),Object(h.jsxs)("div",{className:l.a["join-page__input-group"],children:[Object(h.jsx)("label",{htmlFor:"room",children:"Choose a room: "}),Object(h.jsxs)("select",{name:"room",id:"room",onChange:function(e){j(e.target.value)},children:[Object(h.jsx)("option",{value:"vermilion",children:"Vermilion"}),Object(h.jsx)("option",{value:"lavender",children:"Lavender"}),Object(h.jsx)("option",{value:"viridian",children:"Viridian"})]})]}),Object(h.jsx)(r.b,{to:"/chat?name=".concat(t,"&room=").concat(o),onClick:function(e){p&&e.preventDefault()},children:Object(h.jsx)("button",{children:"Enter"})})]})})]})},m=t(54),g=t(51),d=t.n(g),p=t(52),b=t.n(p),O=t(7),x=t.n(O),f=t(53),v=t.n(f),N=t(16),C=t.n(N),w=function(e){var a=e.message,t=!1,n=e.name.trim().toLowerCase(),s=a.user;return s===n&&(t=!0),t?Object(h.jsxs)("div",{className:C.a.message__owner,children:[Object(h.jsx)("p",{className:C.a["message-sender__owner"],children:n}),Object(h.jsx)("p",{className:C.a["message-text__owner"],children:a.text})]}):Object(h.jsxs)("div",{className:C.a.message,children:[Object(h.jsx)("p",{className:C.a["message-sender"],children:s}),Object(h.jsx)("p",{className:C.a["message-text"],children:a.text})]})},S=function(e){var a=e.messages,t=e.name;return Object(s.useEffect)((function(){var e=document.getElementById("message-container");e.scrollTop=e.scrollHeight}),[a]),Object(h.jsx)("div",{id:"message-container",className:v.a["messages-container"],children:a.map((function(e,a){return Object(h.jsx)("div",{children:Object(h.jsx)(w,{message:e,name:t})},a)}))})},J=function(e){var a=e.location,t=Object(s.useState)("Vermilion"),c=Object(_.a)(t,2),i=c[0],o=c[1],j=Object(s.useState)(""),l=Object(_.a)(j,2),u=l[0],g=l[1],p=Object(s.useState)([]),O=Object(_.a)(p,2),f=O[0],v=O[1],N=Object(s.useState)([]),C=Object(_.a)(N,2),w=C[0],J=C[1],k=Object(s.useState)([]),y=Object(_.a)(k,2),E=y[0],M=y[1],V="https://realtime-peace-chat.herokuapp.com/";Object(s.useEffect)((function(){var e=d.a.parse(a.search),t=e.name,s=e.room;return n=b()(V),o(s),g(t),n.emit("join",{name:t,room:s},(function(e,a){M(e)})),function(){n.disconnect(),n.off()}}),[V,a.search]),Object(s.useEffect)((function(){n.on("message",(function(e){J([].concat(Object(m.a)(w),[e]))}))}),[w]);Object(s.useEffect)((function(){n.on("user-left",(function(e){M(e)})),n.on("user-joined",(function(e){M(e)}))}),[E]);var L=function(){f&&n.emit("message-sent",f,(function(){v("")}))};return Object(h.jsxs)("div",{className:x.a["chat-page"],children:[Object(h.jsxs)("div",{className:x.a["chat-page__user-list-container"],children:[Object(h.jsx)("h2",{className:x.a["user-list__heading"],children:"Users Present"}),Object(h.jsx)("ul",{className:x.a["user-list"],children:E.map((function(e){return Object(h.jsx)("li",{className:x.a["user-list__user"],children:e.name},e.name)}))})]}),Object(h.jsxs)("div",{className:x.a["chat-page__chat-container"],children:[Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)("h2",{className:x.a["chat-container__change-room"],children:"Change Room"})}),Object(h.jsx)("h2",{className:x.a["chat-container__chat-heading"],children:i}),Object(h.jsx)("div",{className:x.a["chat-container__chat-output"],children:Object(h.jsx)(S,{messages:w,name:u})}),Object(h.jsxs)("div",{className:x.a["chat-container__input"],children:[Object(h.jsx)("input",{type:"text",placeholder:"Send a message",value:f,onChange:function(e){v(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&L()}}),Object(h.jsx)("button",{onClick:L,children:"Send"})]})]})]})},k=function(){return Object(h.jsxs)(r.a,{children:[Object(h.jsx)(o.a,{path:"/",exact:!0,component:u}),Object(h.jsx)(o.a,{path:"/chat",component:J})]})};i.a.render(Object(h.jsx)(k,{}),document.querySelector("#root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.e4694446.chunk.js.map