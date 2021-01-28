(this["webpackJsonpreact-auth"]=this["webpackJsonpreact-auth"]||[]).push([[0],{24:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),i=n.n(s),o=n(26),c=n.n(o),r=(n(24),n(29)),l=n(2),u=n(3),p=n(10),d=n(27),j=new(function(){function e(t){Object(p.a)(this,e),this._url=t.baseUrl,this._headers=t.headers,this._credentials=t.credentials}return Object(d.a)(e,[{key:"_sendRequest",value:function(e,t){return fetch("".concat(this._url).concat(e),t).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"getUserInfo",value:function(){return this._sendRequest("users/me",{headers:this._headers,credentials:this._credentials})}},{key:"getInitialCards",value:function(){return this._sendRequest("cards",{headers:this._headers,credentials:this._credentials})}},{key:"updateUserInfo",value:function(e){return this._sendRequest("users/me",{method:"PATCH",headers:this._headers,credentials:this._credentials,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"postNewCard",value:function(e){return this._sendRequest("cards",{method:"POST",body:JSON.stringify({name:e.title,link:e.link}),headers:this._headers,credentials:this._credentials})}},{key:"changeLikeCardStatus",value:function(e,t){return this._sendRequest("cards/likes/".concat(e),{method:"".concat(t?"PUT":"DELETE"),headers:this._headers,credentials:this._credentials})}},{key:"deleteCard",value:function(e){return this._sendRequest("cards/".concat(e),{method:"DELETE",headers:this._headers,credentials:this._credentials})}},{key:"updateUserAvatar",value:function(e){return this._sendRequest("users/me/avatar",{method:"PATCH",body:JSON.stringify({avatar:e.url}),headers:this._headers,credentials:this._credentials})}}]),e}())({baseUrl:"https://api.advent.students.nomoredomains.rocks",headers:{"Content-Type":"application/json"},"\u0441redentials":"include"}),m=n.p+"static/media/headerlogo.c2821b38.svg",b=n(8);var h=function(e){var t=e.email,n=e.signOut;return Object(a.jsxs)("div",{className:"auth-info",children:[Object(a.jsx)("span",{children:t}),Object(a.jsx)("a",{href:"/sign-in",className:"header__link",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]})};var O=function(e){var t=e.loggedIn,n=e.email,s=e.signOut,i=Object(u.h)().pathname,o="".concat("/signin"===i?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u043e\u0439\u0442\u0438"),c="".concat("/signin"===i?"/signup":"/signin");return Object(a.jsxs)("header",{className:"header section",children:[Object(a.jsx)("img",{className:"header__logo-image",src:m,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430"}),t?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(h,{email:n,signOut:s})}):Object(a.jsx)(b.b,{to:c,className:"link header__link",children:o})]})},f=i.a.createContext();var _=function(e){var t=e.card,n=e.onCardClick,s=e.onCardLike,o=e.onCardDelete,c=i.a.useContext(f),r=t.owner._id===c._id,l="elements__delete ".concat(r?"elements__delete_visible":"elements__delete"),u=t.likes.some((function(e){return e._id===c._id})),p="elements__text-like ".concat(u&&"elements__text-like_active");return Object(a.jsxs)("li",{className:"elements__item",children:[Object(a.jsx)("img",{className:"elements__item-img",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(a.jsx)("button",{type:"button",className:l,onClick:function(){o(t)}}),Object(a.jsxs)("div",{className:"elements__text",children:[Object(a.jsx)("h3",{className:"elements__text-title",children:t.name}),Object(a.jsxs)("div",{className:"elements__text_count",children:[Object(a.jsx)("button",{type:"button",className:p,onClick:function(){s(t)}}),Object(a.jsx)("div",{className:"elements__text-likecounter",children:t.likes.length})]})]})]})};var g=function(e){var t=e.onEditAvatar,n=e.onEditProfile,s=e.onAddPlace,o=e.cards,c=e.onCardClick,r=e.onCardDelete,l=e.onCardLike,u=i.a.useContext(f);return Object(a.jsxs)("div",{className:"content section",children:[Object(a.jsxs)("section",{className:"profile section",children:[Object(a.jsxs)("div",{className:"profile__section",children:[Object(a.jsxs)("div",{className:"profile__avatar",children:[Object(a.jsx)("img",{className:"profile__avatarimage",alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",src:u.avatar}),Object(a.jsx)("div",{className:"profile__cover",children:Object(a.jsx)("button",{type:"button",className:"profile__avatarbutton",onClick:t})})]}),Object(a.jsxs)("div",{className:"profile__intro",children:[Object(a.jsxs)("div",{className:"intro",children:[Object(a.jsx)("h1",{className:"intro__title",children:u.name}),Object(a.jsx)("p",{className:"intro__subtitle",children:u.about})]}),Object(a.jsx)("button",{type:"button",className:"profile__edit-button",onClick:n})]})]}),Object(a.jsx)("button",{type:"button",className:"profile__button",onClick:s})]}),Object(a.jsx)("ul",{className:"elements__list",children:o.map((function(e){return Object(a.jsx)(_,{card:e,onCardClick:c,onCardLike:l,onCardDelete:r},e._id)}))})]})};var x=function(){return Object(a.jsx)("footer",{className:"footer section",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var v=function(e){var t=e.isOpen,n=e.onClose,s=e.link,i=e.name;return Object(a.jsxs)("div",{className:"popup ".concat(t&&"popup_opened"),children:[Object(a.jsx)("div",{className:"popup__background popup__background_photo"}),Object(a.jsxs)("div",{className:"popup__photo-container",children:[Object(a.jsx)("button",{type:"reset",className:"popup__button",onClick:n}),Object(a.jsx)("img",{className:"popup__image",src:s,alt:i}),Object(a.jsx)("h2",{className:"popup__title popup__title_photo",children:i})]})]})};var C=function(e){var t=e.formName,n=e.formId,s=e.onSubmit,i=e.title,o=e.children,c=e.isLoading,r=e.submitButtonText,l=e.isPopup,u=e.path,p=e.loginText,d=e.loginLink,j=e.noConfirm,m=e.disabled,h=e.onClose;return Object(a.jsxs)("form",{name:t,id:n,onSubmit:s,className:"".concat(l&&"popup__form"," popup__form_type_").concat(t),children:[Object(a.jsx)("h2",{className:"".concat(!l&&"authorize__form-title"," popup__title"),children:i}),o,!j&&Object(a.jsx)("button",{type:"submit",className:"".concat(!l&&"authorize__form-button"," popup__submit"),disabled:m,children:c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":r}),l&&Object(a.jsx)("button",{type:"reset",className:"popup__button",onClick:h}),!l&&Object(a.jsxs)("span",{className:"authorize__form-quest",children:[p,Object(a.jsx)(b.b,{to:u,className:"authorize__form-quest authorize__form-link",children:d})]})]})};var N=function(e){var t=e.isOpen,n=e.formId,s=e.onSubmit,i=e.onClose,o=e.formName,c=e.title,r=e.children,l=e.submitButtonText,u=e.disabled,p=e.isLoading,d=e.noConfirm;return Object(a.jsxs)("section",{className:"popup ".concat(t&&"popup_opened"),children:[Object(a.jsx)("div",{className:"popup__background"}),Object(a.jsx)(C,{id:n,isPopup:!0,name:o,onSubmit:s,onClose:i,isLoading:p,title:c,children:r,disabled:u,submitButtonText:l,noConfirm:d})]})};var k=function(e){var t=e.isOpen,n=e.onClose,i=e.onUpdateAvatar,o=e.isLoading,c=Object(s.useRef)("");return Object(a.jsx)(N,{name:"popup",id:"popup-editavatar-form",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),i({avatar:c.current.value})},isLoading:o,children:Object(a.jsxs)("label",{htmlFor:"avatar",className:"popup__input-label",children:[Object(a.jsx)("input",{ref:c,type:"url",name:"avatar",className:"popup__input popup__input_avatar",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440"}),Object(a.jsx)("span",{className:"popup__input-error",id:"avatar-error"})]})})};var S=function(e){var t=e.isOpen,n=e.onClose,o=e.onUpdateUser,c=e.isLoading,r=i.a.useContext(f),u=Object(s.useState)(""),p=Object(l.a)(u,2),d=p[0],j=p[1],m=Object(s.useState)(""),b=Object(l.a)(m,2),h=b[0],O=b[1];return i.a.useEffect((function(){j(r.name),O(r.about)}),[r]),Object(a.jsxs)(N,{name:"popup",id:"popup-edit-form",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o({name:d,about:h})},isLoading:c,children:[Object(a.jsxs)("label",{htmlFor:"name",className:"popup__input-label",children:[Object(a.jsx)("input",{name:"name",value:d||"",className:"popup__input popup__input_name",type:"text",required:!0,pattern:"[\u0410-\u042f\u0430-\u044fA-Za-z -]{1,}",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",minLength:"2",maxLength:"40",autoComplete:"off",onChange:function(e){"name"===e.target.name&&j(e.target.value)}}),Object(a.jsx)("span",{className:"popup__input-error",id:"name-error"})]}),Object(a.jsxs)("label",{htmlFor:"about",className:"popup__input-label",children:[Object(a.jsx)("input",{type:"text",name:"about",className:"popup__input popup__input_job",value:h||"",required:!0,placeholder:"\u0427\u0435\u043c \u0432\u044b \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0435\u0441\u044c?",minLength:"2",maxLength:"200",autoComplete:"off",onChange:function(e){"about"===e.target.name&&O(e.target.value)}}),Object(a.jsx)("span",{className:"popup__input-error",id:"about-error"})]})]})};var y=function(e){var t=e.isOpen,n=e.onClose,o=e.onAddPlace,c=e.isLoading,r=Object(s.useState)(""),u=Object(l.a)(r,2),p=u[0],d=u[1],j=Object(s.useState)(""),m=Object(l.a)(j,2),b=m[0],h=m[1];return i.a.useEffect((function(){d(""),h("")}),[t]),Object(a.jsxs)(N,{formName:"popup",formId:"popup-addCard",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o({name:p,link:b})},isLoading:c,children:[Object(a.jsxs)("label",{htmlFor:"name",className:"popup__input-label",children:[Object(a.jsx)("input",{id:"name",name:"name",value:p||"",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0,onChange:function(e){"name"===e.target.name&&d(e.target.value)},className:"popup__input popup__input_name",type:"text",autoComplete:"off"}),Object(a.jsx)("span",{className:"popup__input-error",id:"name-error"})]}),Object(a.jsxs)("label",{htmlFor:"link",className:"popup__input-label",children:[Object(a.jsx)("input",{type:"url",id:"link",name:"link",value:b||"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,onChange:function(e){"link"===e.target.name&&h(e.target.value)},className:"popup__input popup__input_link",autoComplete:"off",minLength:"2",maxLength:"200"}),Object(a.jsx)("span",{className:"popup__input-error",id:"link-error"})]})]})};var L=function(e){var t=e.isOpen,n=e.onClose,s=e.onConfirmDelete,i=e.isLoading;return Object(a.jsx)(N,{name:"popup",id:"popup-deleteCards",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u044b?",submitButtonText:"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s()},isLoading:i})},T=n(30),P=n(31),w=function(e){var t=e.component,n=Object(P.a)(e,["component"]);return Object(a.jsx)(u.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(T.a)({},n)):Object(a.jsx)(u.a,{to:"/signin"})}})};var I=function(e){var t=e.isOpen,n=e.onClose,s=e.loggedIn,i=e.message;return Object(a.jsxs)(N,{formName:"infoTooltip",noConfirm:!0,isOpen:t,onClose:n,loggedIn:s,isPopup:!0,children:[Object(a.jsx)("img",{src:i.iconPath,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438",className:"form__icon"}),Object(a.jsx)("p",{className:"infoToolTip__text",children:i.text})]})},E=n(16),q=n(18),A=n(19),U=function(e){Object(E.a)(n,e);var t=Object(q.a)(n);function n(e){var a;Object(p.a)(this,n);for(var s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];return(a=t.call.apply(t,[this].concat(i))).status=401,a.message=e,a}return n}(Object(A.a)(Error)),D=function(e){Object(E.a)(n,e);var t=Object(q.a)(n);function n(e){var a;Object(p.a)(this,n);for(var s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];return(a=t.call.apply(t,[this].concat(i))).status=400,a.message=e,a}return n}(Object(A.a)(Error)),R="https://api.advent.students.nomoredomains.rocks";var z=function(e){var t=e.onSubmit,n=e.title,i=e.submitButtonText,o=e.path,c=e.loginText,r=e.loginLink,u=e.autoCompleteEmail,p=e.autoCompletePassword,d=Object(s.useState)(""),j=Object(l.a)(d,2),m=j[0],b=j[1],h=Object(s.useState)(""),O=Object(l.a)(h,2),f=O[0],_=O[1],g=Object(s.useState)(""),x=Object(l.a)(g,2),v=x[0],N=x[1],k=Object(s.useState)(""),S=Object(l.a)(k,2),y=S[0],L=S[1],T=Object(s.useState)(!1),P=Object(l.a)(T,2),w=P[0],I=P[1],E=Object(s.useState)(!1),q=Object(l.a)(E,2),A=q[0],U=q[1],D=Object(s.useRef)(),R=Object(s.useRef)();function z(e){var t=e.target.value;"email"===e.target.name?b(t):_(t),N(D.current.validationMessage),L(R.current.validationMessage),D.current.validity.valid?I(!0):I(!1),R.current.validity.valid?U(!0):U(!1)}return Object(a.jsx)("section",{className:"authorize",children:Object(a.jsxs)(C,{id:"authForm",formName:"signin",title:n,submitButtonText:i,isPopup:!1,path:o,loginText:c,loginLink:r,onSubmit:function(e){e.preventDefault(),(m||f)&&(t(f,m),b(""),_(""))},children:[Object(a.jsxs)("label",{htmlFor:"email",className:"authorize__form-label",children:[Object(a.jsx)("input",{ref:D,id:"email",type:"email",placeholder:"Email",className:"authorize__form-input",name:"email",value:m||"",minLength:"6",maxLength:"40",autoComplete:u,required:!0,onChange:z}),Object(a.jsx)("span",{className:"popup__input-error ".concat(!w&&"authorize__form-error_visible"),id:"email-error",children:v})]}),Object(a.jsxs)("label",{htmlFor:"password",className:"authorize__form-label",children:[Object(a.jsx)("input",{ref:R,id:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"authorize__form-input",name:"password",value:f||"",minLength:"8",maxLength:"30",autoComplete:p,required:!0,onChange:z}),Object(a.jsx)("span",{className:"popup__input-error ".concat(!A&&"authorize__form-error_visible"),id:"password-error",children:y})]})]})})};var B=function(e){var t=e.onLogin;return Object(a.jsx)(z,{title:"\u0412\u0445\u043e\u0434",submitButtonText:"\u0412\u043e\u0439\u0442\u0438",path:"/signup",onSubmit:function(e,n){t(e,n)},autoCompleteEmail:"email",autoCompletePassword:"current-password"})};var F=function(e){var t=e.onRegister;return Object(a.jsx)(z,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",submitButtonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",path:"/signin",loginText:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",loginLink:"\u0412\u043e\u0439\u0442\u0438",onSubmit:function(e,n){t(e,n)}})},J=n.p+"static/media/resolve.1b6082f8.svg",M=n.p+"static/media/reject.df8eddf6.svg",H=n.p+"static/media/loading.65f78576.svg";var Z=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),o=t[0],c=t[1],p=Object(s.useState)(!1),d=Object(l.a)(p,2),m=d[0],b=d[1],h=Object(s.useState)(!1),_=Object(l.a)(h,2),C=_[0],N=_[1],T=Object(s.useState)(!1),P=Object(l.a)(T,2),E=P[0],q=P[1],A=Object(s.useState)([]),z=Object(l.a)(A,2),Z=z[0],G=z[1],K=Object(s.useState)({isImageOpen:!1,link:"",name:""}),Q=Object(l.a)(K,2),V=Q[0],W=Q[1],X=Object(s.useState)({}),Y=Object(l.a)(X,2),$=Y[0],ee=Y[1],te=Object(s.useState)({}),ne=Object(l.a)(te,2),ae=ne[0],se=ne[1],ie=Object(s.useState)(!1),oe=Object(l.a)(ie,2),ce=oe[0],re=oe[1],le=Object(s.useState)(!1),ue=Object(l.a)(le,2),pe=ue[0],de=ue[1],je=Object(s.useState)(""),me=Object(l.a)(je,2),be=me[0],he=me[1],Oe=Object(s.useState)(!1),fe=Object(l.a)(Oe,2),_e=fe[0],ge=(fe[1],Object(s.useState)(!1)),xe=Object(l.a)(ge,2),ve=xe[0],Ce=xe[1],Ne=Object(s.useState)({iconPath:H,text:""}),ke=Object(l.a)(Ne,2),Se=ke[0],ye=ke[1],Le=Object(u.h)(),Te=Object(u.g)(),Pe=n(42);function we(){c(!1),N(!1),b(!1),W({}),q(!1),Ce(!1)}return i.a.useEffect((function(){pe&&j.getUserInfo().then((function(e){console.log(e),ee(e),console.log($)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435: ".concat(e))}))}),[pe]),i.a.useEffect((function(){pe&&j.getInitialCards().then((function(e){G(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a: ".concat(e))}))}),[pe]),Object(a.jsx)(f.Provider,{value:$,children:Object(a.jsx)("div",{className:"root",children:Object(a.jsxs)("div",{className:"page",children:[pe&&_e,Object(a.jsx)(O,{loggedIn:pe,locaction:Le,email:be,signOut:function(){de(!1),localStorage.removeItem("jwt"),he(""),Te.push("/signin")},isAuthInfoOpened:_e}),Object(a.jsxs)(u.d,{children:[Object(a.jsx)(w,{exact:!0,path:"/",loggedIn:pe,component:g,cards:Z,onCardClick:function(e){var t=e.link,n=e.name;W({isImageOpen:!0,link:t,name:n})},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===$._id}));j.changeLikeCardStatus(e._id,!t).then((function(t){var n=Z.map((function(n){return n._id===e._id?t:n}));G(n)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043b\u0430\u0439\u043a\u0430: ".concat(e))}))},onCardDelete:function(e){q(!0),se(e)},onEditProfile:function(){c(!0)},onAddPlace:function(){b(!0)},onEditAvatar:function(){N(!0)}}),Object(a.jsx)(u.b,{path:"/signin",children:Object(a.jsx)(B,{onLogin:function(e,t){(function(e,t){return fetch("".concat(R,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},"\u0441redentials":"include",body:JSON.stringify({password:e,email:t})}).then((function(e){if(400===e.status)throw new U("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439");if(401===e.status)throw new D("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d");return e.json()}))})(Pe(e),t).then((function(e){de(!0),ye({iconPath:J,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u043e\u0448\u043b\u0438 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435!"}),Te.push("/")})).catch((function(e){return ye({iconPath:M,text:e.message})})),Ce(!0)}})}),Object(a.jsx)(u.b,{path:"/signup",children:Object(a.jsx)(F,{onRegister:function(e,t){(function(e,t){return fetch("".concat(R,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},"\u0441redentials":"include",body:JSON.stringify({password:e,email:t})}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw e.error?new U(e.error):new U(e.message)}))}))})(Pe(e),t).then((function(){ye({iconPath:J,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}),Te.push("/signin")})).catch((function(e){return ye({iconPath:M,text:e.message})})),Ce(!0)}})}),Object(a.jsx)(u.b,{children:pe?Object(a.jsx)(u.a,{to:"/"}):Object(a.jsx)(u.a,{to:"/signin"})})]}),Object(a.jsx)(x,{}),Object(a.jsx)(I,{isOpen:ve,onClose:we,loggedIn:pe,message:Se}),Object(a.jsx)(S,{isOpen:o,onClose:we,onUpdateUser:function(e){re(!0),j.updateUserInfo(e).then((function(e){ee(e),we()})).catch((function(e){return"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435: ".concat(e)})).finally((function(){return re(!1)}))},isLoading:ce}),Object(a.jsx)(k,{onUpdateAvatar:function(e){re(!0),j.setUserAvatar(e).then((function(e){ee(e),we()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430: ".concat(e))})).finally((function(){return re(!1)}))},isOpen:C,onClose:we,isLoading:ce}),Object(a.jsx)(y,{isOpen:m,onClose:we,onAddPlace:function(e){re(!0),j.postNewCard(e).then((function(e){G([e].concat(Object(r.a)(Z))),we()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))})).finally((function(){return re(!1)}))}}),Object(a.jsx)(L,{isOpen:E,onClose:we,onConfirmDelete:function(){j.deleteCard(ae._id).then((function(){G(Z.filter((function(e){return e!==ae}))),we()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))}))}}),Object(a.jsx)(v,{name:V.name,link:V.link,isOpen:V.isImageOpen,onClose:we})]})})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),i(e),o(e)}))};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(b.a,{basename:"/",children:Object(a.jsx)(Z,{})})}),document.getElementById("root")),G()}},[[43,1,2]]]);
//# sourceMappingURL=main.da67160b.chunk.js.map