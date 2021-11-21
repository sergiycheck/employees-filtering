(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,r){},22:function(e,t,r){},33:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),i=r(7),s=r.n(i),a=(r(21),r(22),r(2)),u=r(3),l=r(9),o=r.n(l),d=function(){return Object(a.c)()},j=a.d,b=r(12),f=r.n(b),h=r(14),O=r(4),m="".concat("https://yalantis-react-school-api.yalantis.com","/api"),v="".concat(m,"/task0/users"),p=["January","February","March","April","May","June","July","August","September","October","November","December"],x=function(e){return p[new Date(e).getMonth()]},y=Object(O.c)({sortComparer:function(e,t){return!e.firstName||t.firstName,e.firstName.localeCompare(t.firstName)}}),N=y.getInitialState({maxLettersSelected:3,selectedLettersFilter:""}),g=Object(O.b)("users/fetchUsers",Object(h.a)(f.a.mark((function e(){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))),F=Object(O.d)({name:"users",initialState:N,reducers:{concatRemoveLetterFilter:function(e,t){var r=t.payload,c=r.toLowerCase(),n=e.selectedLettersFilter;n?n.includes(c)?e.selectedLettersFilter=n.split("").filter((function(e){return e!==c})).join(""):e.selectedLettersFilter.length!==e.maxLettersSelected&&(e.selectedLettersFilter=n.concat(r)):e.selectedLettersFilter=r},toggleUser:function(e,t){var r=t.payload,c=r.id,n=r.activity,i=e.entities[c];i&&(i.isActive=n)}},extraReducers:function(e){e.addCase(g.fulfilled,(function(e,t){var r=t.payload,c={};r.forEach((function(e){c[e.id]=e})),y.upsertMany(e,c)}))}}),C=F.actions,L=C.concatRemoveLetterFilter,S=C.toggleUser,w=function(e){return e.users.selectedLettersFilter},k=function(e){return e.users.maxLettersSelected},A=y.getSelectors((function(e){return e.users})),E=A.selectAll,I=A.selectById,M=(A.selectIds,F.reducer),U=r(0),J=function(e){var t=e.id,r=d(),n=Object(c.useState)(!1),i=Object(u.a)(n,2),s=i[0],a=i[1],l=j((function(e){return I(e,t)}));return Object(c.useEffect)((function(){a(!!(null===l||void 0===l?void 0:l.isActive))}),[l]),Object(U.jsx)("li",{children:Object(U.jsxs)("div",{className:"userContainer",children:[Object(U.jsxs)("h4",{className:o()(s&&"userActive"),children:[l.firstName," ",l.lastName]}),Object(U.jsxs)("div",{className:"activity",children:[Object(U.jsxs)("div",{className:"activityCheck",children:[Object(U.jsx)("input",{onChange:function(e){r(S({id:t,activity:!1})),a(!1)},type:"radio",name:"".concat(l.id,"-activity"),id:"".concat(l.id,"-activeFalse"),checked:!s,value:"false"}),Object(U.jsx)("label",{htmlFor:"".concat(l.id,"-activeFalse"),children:"not active"})]}),Object(U.jsxs)("div",{className:"activityCheck",children:[Object(U.jsx)("input",{onChange:function(e){r(S({id:t,activity:!0})),a(!0)},type:"radio",name:"".concat(l.id,"-activity"),id:"".concat(l.id,"-activeTrue"),checked:s,value:"true"}),Object(U.jsx)("label",{htmlFor:"".concat(l.id,"-activeTrue"),children:"active"})]})]})]})})},B=function(e){var t=E(e),r=w(e);return r?r.split("").reduce((function(e,r){var c=t.filter((function(e){return e.firstName.toUpperCase().startsWith(r.toUpperCase())})).map((function(e){return e.id}));return e[r]=c,e}),{}):{all:t.map((function(e){return e.id}))}},D=Object(a.b)((function(e){return{userFilteredKeyedIds:B(e)}}))((function(e){var t=e.userFilteredKeyedIds,r=Object.keys(t).map((function(e,r){var c=t[e].map((function(e){return Object(U.jsx)(J,{id:e},e)}));return Object(U.jsxs)("div",{children:[Object(U.jsx)("h3",{children:e.toUpperCase()}),Object(U.jsxs)("ul",{className:"users-list",children:[c,!c.length&&Object(U.jsx)("h4",{children:"No Employees"})]})]},r)}));return Object(U.jsxs)("div",{className:"employees-container",children:[Object(U.jsx)("div",{className:"employee-title",children:Object(U.jsx)("h2",{children:"Employees"})}),Object(U.jsx)("div",{className:"userLists",children:r})]})})),R=r(16);function T(){var e;return Object(R.a)(Array(26)).map((function(t){return(++e).toString(36)}),e=9)}var K=function(){var e=Object(c.useMemo)(T,[]).map((function(e,t){return Object(U.jsx)(W,{letter:e,children:Object(U.jsxs)(U.Fragment,{children:[e," "]})},t)}));return Object(U.jsx)("div",{className:"buttons-container",children:e})},W=function(e){var t=e.letter,r=e.children,i=d(),s=j(w),a=j(k),u=Object(c.useRef)(t),l=!!s&&s.includes(u.current),b=Object(c.useMemo)((function(){var e=Boolean(s),t=Boolean(!l),r=Boolean(s.length===a);return!!(e&&t&&r)}),[s,l,a]);return Object(U.jsx)(n.a.Fragment,{children:Object(U.jsx)("button",{type:"button",disabled:b,className:o()(l&&"buttonActive"),onClick:function(e){var t=u.current;T().includes(t)&&i(L(t))},children:r})})},Y=function(){var e=j((function(e){return function(e){var t=E(e).filter((function(e){return e.isActive})).reduce((function(e,t){var r=x(t.dob);return e[r]||(e[r]=[]),e[r].push(t),e}),{}),r=Object.entries(t).reduce((function(e,t){var r=Object(u.a)(t,2),c=r[0],n=r[1];return e[c]=n.sort((function(e,t){return e.lastName.toLowerCase().localeCompare(t.lastName.toLowerCase())})),e}),{}),c=Object.fromEntries(Object.entries(r).sort((function(e,t){var r=Object(u.a)(e,1)[0],c=Object(u.a)(t,1)[0],n=p.indexOf(r),i=p.indexOf(c);return n<10&&(n+=12),i<10&&(i+=12),n-i})));return Object.entries(c).reduce((function(e,t){var r=Object(u.a)(t,2),c=r[0],n=r[1];return e[c]=n.map((function(e){return e.id})),e}),{})}(e)})),t=Object.keys(e).map((function(t,r){var c=e[t].map((function(e){return Object(U.jsx)(q,{id:e},e)}));return Object(U.jsxs)("div",{children:[Object(U.jsx)("hr",{}),Object(U.jsx)("h3",{children:t.toUpperCase()}),Object(U.jsxs)("ul",{className:"users-list",children:[c,!c.length&&Object(U.jsx)("h4",{children:"Employee list empty"})]})]},r)}));return Object(U.jsxs)("div",{className:"employees-birthdays",children:[Object(U.jsx)("div",{className:"employee-title",children:Object(U.jsx)("h2",{children:"Employees birthday"})}),Object(U.jsxs)("div",{children:[t,(!t||!t.length)&&Object(U.jsx)("h4",{children:"Employees List is empty"})]})]})},q=function(e){var t=e.id,r=j((function(e){return I(e,t)})),n=Object(c.useMemo)((function(){var e=r.dob,t=new Date(e);return"".concat(t.getUTCDate()," ").concat(x(e),", ").concat(t.getFullYear()," year")}),[r]);return Object(U.jsx)("li",{children:Object(U.jsx)("div",{children:Object(U.jsxs)("h4",{children:[r.lastName," ",r.firstName," - ",n]})})})};var z=function(){return Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)("header",{className:"App-header",children:Object(U.jsx)(K,{})}),Object(U.jsx)("main",{children:Object(U.jsx)("div",{className:"container",children:Object(U.jsxs)("div",{className:"row",children:[Object(U.jsx)(D,{}),Object(U.jsx)("div",{className:"vertical-line"}),Object(U.jsx)(Y,{})]})})}),Object(U.jsx)("footer",{children:Object(U.jsx)("hr",{})})]})},G=r(6),H=r(15),P="state",Q=function(e){return function(t){return function(r){V("dispatching",r);var c=t(r);return V("next state",e.getState()),c}}},V=function(){},X=function(){try{var e=window.localStorage.getItem(P);if(!e)return;return JSON.parse(e)}catch(t){return}}(),Z=Object(O.a)({reducer:{users:M},preloadedState:X,middleware:function(e){return e().prepend(Q)}});Z.subscribe(Object(H.throttle)((function(){var e=Z.getState();!function(e){try{var t=JSON.stringify(e);window.localStorage.setItem(P,t)}catch(r){}}(Object(G.a)({},e))}),1e3)),Z.dispatch(g()),s.a.render(Object(U.jsx)(n.a.StrictMode,{children:Object(U.jsx)(a.a,{store:Z,children:Object(U.jsx)(z,{})})}),document.getElementById("root"))}},[[33,1,2]]]);