(this["webpackJsonpreact-auth"]=this["webpackJsonpreact-auth"]||[]).push([[0],{24:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),s=n.n(o),i=n(26),c=n.n(i),r=(n(24),n(29)),u=n(2),l=n(3),p=n(10),d=n(27),j=new(function(){function e(t){Object(p.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(d.a)(e,[{key:"_serverAnswer",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._serverAnswer)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._serverAnswer)}},{key:"updateUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._serverAnswer)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",body:JSON.stringify({avatar:e.avatar}),headers:this._headers}).then(this._serverAnswer)}},{key:"postNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:e.name,link:e.link})}).then(this._serverAnswer)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{headers:this._headers,method:"DELETE"}).then(this._serverAnswer)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"".concat(t?"PUT":"DELETE"),headers:this._headers}).then(this._serverAnswer)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._serverAnswer)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"3b2fde55-52e7-4322-8de5-f90b53e04551","Content-Type":"application/json"}}),m=n.p+"static/media/headerlogo.c2821b38.svg",b=n(8);var h=function(e){var t=e.email,n=e.signOut;return Object(a.jsxs)("div",{className:"auth-info",children:[Object(a.jsx)("span",{children:t}),Object(a.jsx)("a",{href:"/sign-in",className:"header__link",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]})};var f=function(e){var t=e.loggedIn,n=e.email,o=e.signOut,s=Object(l.h)().pathname,i="".concat("/sign-in"===s?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u043e\u0439\u0442\u0438"),c="".concat("/sign-in"===s?"/sign-up":"/sign-in");return Object(a.jsxs)("header",{className:"header section",children:[Object(a.jsx)("img",{className:"header__logo-image",src:m,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430"}),t?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(h,{email:n,signOut:o})}):Object(a.jsx)(b.b,{to:c,className:"link header__link",children:i})]})},O=s.a.createContext();var _=function(e){var t=e.card,n=e.onCardClick,o=e.onCardLike,i=e.onCardDelete,c=s.a.useContext(O),r=t.owner._id===c._id,u="elements__delete ".concat(r?"elements__delete_visible":"elements__delete"),l=t.likes.some((function(e){return e._id===c._id})),p="elements__text-like ".concat(l&&"elements__text-like_active");return Object(a.jsxs)("li",{className:"elements__item",children:[Object(a.jsx)("img",{className:"elements__item-img",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(a.jsx)("button",{type:"button",className:u,onClick:function(){i(t)}}),Object(a.jsxs)("div",{className:"elements__text",children:[Object(a.jsx)("h3",{className:"elements__text-title",children:t.name}),Object(a.jsxs)("div",{className:"elements__text_count",children:[Object(a.jsx)("button",{type:"button",className:p,onClick:function(){o(t)}}),Object(a.jsx)("div",{className:"elements__text-likecounter",children:t.likes.length})]})]})]})};var g=function(e){var t=e.onEditAvatar,n=e.onEditProfile,o=e.onAddPlace,i=e.cards,c=e.onCardClick,r=e.onCardDelete,u=e.onCardLike,l=s.a.useContext(O);return Object(a.jsxs)("div",{className:"content section",children:[Object(a.jsxs)("section",{className:"profile section",children:[Object(a.jsxs)("div",{className:"profile__section",children:[Object(a.jsxs)("div",{className:"profile__avatar",children:[Object(a.jsx)("img",{className:"profile__avatarimage",alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",src:l.avatar}),Object(a.jsx)("div",{className:"profile__cover",children:Object(a.jsx)("button",{type:"button",className:"profile__avatarbutton",onClick:t})})]}),Object(a.jsxs)("div",{className:"profile__intro",children:[Object(a.jsxs)("div",{className:"intro",children:[Object(a.jsx)("h1",{className:"intro__title",children:l.name}),Object(a.jsx)("p",{className:"intro__subtitle",children:l.about})]}),Object(a.jsx)("button",{type:"button",className:"profile__edit-button",onClick:n})]})]}),Object(a.jsx)("button",{type:"button",className:"profile__button",onClick:o})]}),Object(a.jsx)("ul",{className:"elements__list",children:i.map((function(e){return Object(a.jsx)(_,{card:e,onCardClick:c,onCardLike:u,onCardDelete:r},e._id)}))})]})};var x=function(){return Object(a.jsx)("footer",{className:"footer section",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var v=function(e){var t=e.isOpen,n=e.onClose,o=e.link,s=e.name;return Object(a.jsxs)("div",{className:"popup ".concat(t&&"popup_opened"),children:[Object(a.jsx)("div",{className:"popup__background popup__background_photo"}),Object(a.jsxs)("div",{className:"popup__photo-container",children:[Object(a.jsx)("button",{type:"reset",className:"popup__button",onClick:n}),Object(a.jsx)("img",{className:"popup__image",src:o,alt:s}),Object(a.jsx)("h2",{className:"popup__title popup__title_photo",children:s})]})]})};var C=function(e){var t=e.formName,n=e.formId,o=e.onSubmit,s=e.title,i=e.children,c=e.isLoading,r=e.submitButtonText,u=e.isPopup,l=e.path,p=e.loginText,d=e.loginLink,j=e.noConfirm,m=e.disabled,h=e.onClose;return Object(a.jsxs)("form",{name:t,id:n,onSubmit:o,className:"".concat(u&&"popup__form"," popup__form_type_").concat(t),children:[Object(a.jsx)("h2",{className:"".concat(!u&&"authorize__form-title"," popup__title"),children:s}),i,!j&&Object(a.jsx)("button",{type:"submit",className:"".concat(!u&&"authorize__form-button"," popup__submit"),disabled:m,children:c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":r}),u&&Object(a.jsx)("button",{type:"reset",className:"popup__button",onClick:h}),!u&&Object(a.jsxs)("span",{className:"authorize__form-quest",children:[p,Object(a.jsx)(b.b,{to:l,className:"authorize__form-quest authorize__form-link",children:d})]})]})};var N=function(e){var t=e.isOpen,n=e.formId,o=e.onSubmit,s=e.onClose,i=e.formName,c=e.title,r=e.children,u=e.submitButtonText,l=e.disabled,p=e.isLoading,d=e.noConfirm;return Object(a.jsxs)("section",{className:"popup ".concat(t&&"popup_opened"),children:[Object(a.jsx)("div",{className:"popup__background"}),Object(a.jsx)(C,{id:n,isPopup:!0,name:i,onSubmit:o,onClose:s,isLoading:p,title:c,children:r,disabled:l,submitButtonText:u,noConfirm:d})]})};var k=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateAvatar,i=e.isLoading,c=Object(o.useRef)("");return Object(a.jsx)(N,{name:"popup",id:"popup-editavatar-form",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({avatar:c.current.value})},isLoading:i,children:Object(a.jsxs)("label",{htmlFor:"avatar",className:"popup__input-label",children:[Object(a.jsx)("input",{ref:c,type:"url",name:"avatar",className:"popup__input popup__input_avatar",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440"}),Object(a.jsx)("span",{className:"popup__input-error",id:"avatar-error"})]})})};var S=function(e){var t=e.isOpen,n=e.onClose,i=e.onUpdateUser,c=e.isLoading,r=s.a.useContext(O),l=Object(o.useState)(""),p=Object(u.a)(l,2),d=p[0],j=p[1],m=Object(o.useState)(""),b=Object(u.a)(m,2),h=b[0],f=b[1];return s.a.useEffect((function(){j(r.name),f(r.about)}),[r]),Object(a.jsxs)(N,{name:"popup",id:"popup-edit-form",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),i({name:d,about:h})},isLoading:c,children:[Object(a.jsxs)("label",{htmlFor:"name",className:"popup__input-label",children:[Object(a.jsx)("input",{name:"name",value:d||"",className:"popup__input popup__input_name",type:"text",required:!0,pattern:"[\u0410-\u042f\u0430-\u044fA-Za-z -]{1,}",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",minLength:"2",maxLength:"40",autoComplete:"off",onChange:function(e){"name"===e.target.name&&j(e.target.value)}}),Object(a.jsx)("span",{className:"popup__input-error",id:"name-error"})]}),Object(a.jsxs)("label",{htmlFor:"about",className:"popup__input-label",children:[Object(a.jsx)("input",{type:"text",name:"about",className:"popup__input popup__input_job",value:h||"",required:!0,placeholder:"\u0427\u0435\u043c \u0432\u044b \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0435\u0441\u044c?",minLength:"2",maxLength:"200",autoComplete:"off",onChange:function(e){"about"===e.target.name&&f(e.target.value)}}),Object(a.jsx)("span",{className:"popup__input-error",id:"about-error"})]})]})};var y=function(e){var t=e.isOpen,n=e.onClose,i=e.onAddPlace,c=e.isLoading,r=Object(o.useState)(""),l=Object(u.a)(r,2),p=l[0],d=l[1],j=Object(o.useState)(""),m=Object(u.a)(j,2),b=m[0],h=m[1];return s.a.useEffect((function(){d(""),h("")}),[t]),Object(a.jsxs)(N,{formName:"popup",formId:"popup-addCard",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),i({name:p,link:b})},isLoading:c,children:[Object(a.jsxs)("label",{htmlFor:"name",className:"popup__input-label",children:[Object(a.jsx)("input",{id:"name",name:"name",value:p||"",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0,onChange:function(e){"name"===e.target.name&&d(e.target.value)},className:"popup__input popup__input_name",type:"text",autoComplete:"off"}),Object(a.jsx)("span",{className:"popup__input-error",id:"name-error"})]}),Object(a.jsxs)("label",{htmlFor:"link",className:"popup__input-label",children:[Object(a.jsx)("input",{type:"url",id:"link",name:"link",value:b||"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,onChange:function(e){"link"===e.target.name&&h(e.target.value)},className:"popup__input popup__input_link",autoComplete:"off",minLength:"2",maxLength:"200"}),Object(a.jsx)("span",{className:"popup__input-error",id:"link-error"})]})]})};var L=function(e){var t=e.isOpen,n=e.onClose,o=e.onConfirmDelete,s=e.isLoading;return Object(a.jsx)(N,{name:"popup",id:"popup-deleteCards",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u044b?",submitButtonText:"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o()},isLoading:s})},w=n(30),T=n(31),P=function(e){var t=e.component,n=Object(T.a)(e,["component"]);return Object(a.jsx)(l.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(w.a)({},n)):Object(a.jsx)(l.a,{to:"./login"})}})};var A=function(e){var t=e.isOpen,n=e.onClose,o=e.loggedIn,s=e.message;return Object(a.jsxs)(N,{formName:"infoTooltip",noConfirm:!0,isOpen:t,onClose:n,loggedIn:o,isPopup:!0,children:[Object(a.jsx)("img",{src:s.iconPath,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438",className:"form__icon"}),Object(a.jsx)("p",{className:"infoToolTip__text",children:s.text})]})},E=n(16),I=n(18),U=n(19),z=function(e){Object(E.a)(n,e);var t=Object(I.a)(n);function n(e){var a;Object(p.a)(this,n);for(var o=arguments.length,s=new Array(o>1?o-1:0),i=1;i<o;i++)s[i-1]=arguments[i];return(a=t.call.apply(t,[this].concat(s))).status=401,a.message=e,a}return n}(Object(U.a)(Error)),D=function(e){Object(E.a)(n,e);var t=Object(I.a)(n);function n(e){var a;Object(p.a)(this,n);for(var o=arguments.length,s=new Array(o>1?o-1:0),i=1;i<o;i++)s[i-1]=arguments[i];return(a=t.call.apply(t,[this].concat(s))).status=400,a.message=e,a}return n}(Object(U.a)(Error)),B="https://www.api.advent.students.nomoredomains.rocks",F=function(e){return fetch("".concat(B,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw new D(e.message)}))}))};var q=function(e){var t=e.onSubmit,n=e.title,s=e.submitButtonText,i=e.path,c=e.loginText,r=e.loginLink,l=e.autoCompleteEmail,p=e.autoCompletePassword,d=Object(o.useState)(""),j=Object(u.a)(d,2),m=j[0],b=j[1],h=Object(o.useState)(""),f=Object(u.a)(h,2),O=f[0],_=f[1],g=Object(o.useState)(""),x=Object(u.a)(g,2),v=x[0],N=x[1],k=Object(o.useState)(""),S=Object(u.a)(k,2),y=S[0],L=S[1],w=Object(o.useState)(!1),T=Object(u.a)(w,2),P=T[0],A=T[1],E=Object(o.useState)(!1),I=Object(u.a)(E,2),U=I[0],z=I[1],D=Object(o.useRef)(),B=Object(o.useRef)();function F(e){var t=e.target.value;"email"===e.target.name?b(t):_(t),N(D.current.validationMessage),L(B.current.validationMessage),D.current.validity.valid?A(!0):A(!1),B.current.validity.valid?z(!0):z(!1)}return Object(a.jsx)("section",{className:"authorize",children:Object(a.jsxs)(C,{id:"authForm",formName:"signin",title:n,submitButtonText:s,isPopup:!1,path:i,loginText:c,loginLink:r,onSubmit:function(e){e.preventDefault(),(m||O)&&(t(O,m),b(""),_(""))},children:[Object(a.jsxs)("label",{htmlFor:"email",className:"authorize__form-label",children:[Object(a.jsx)("input",{ref:D,id:"email",type:"email",placeholder:"Email",className:"authorize__form-input",name:"email",value:m||"",minLength:"6",maxLength:"40",autoComplete:l,required:!0,onChange:F}),Object(a.jsx)("span",{className:"popup__input-error ".concat(!P&&"authorize__form-error_visible"),id:"email-error",children:v})]}),Object(a.jsxs)("label",{htmlFor:"password",className:"authorize__form-label",children:[Object(a.jsx)("input",{ref:B,id:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"authorize__form-input",name:"password",value:O||"",minLength:"8",maxLength:"30",autoComplete:p,required:!0,onChange:F}),Object(a.jsx)("span",{className:"popup__input-error ".concat(!U&&"authorize__form-error_visible"),id:"password-error",children:y})]})]})})};var J=function(e){var t=e.onLogin;return Object(a.jsx)(q,{title:"\u0412\u0445\u043e\u0434",submitButtonText:"\u0412\u043e\u0439\u0442\u0438",path:"/sign-up",onSubmit:function(e,n){t(e,n)},autoCompleteEmail:"email",autoCompletePassword:"current-password"})};var R=function(e){var t=e.onRegister;return Object(a.jsx)(q,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",submitButtonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",path:"/sign-in",loginText:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",loginLink:"\u0412\u043e\u0439\u0442\u0438",onSubmit:function(e,n){t(e,n)}})},M=n.p+"static/media/resolve.1b6082f8.svg",H=n.p+"static/media/reject.df8eddf6.svg",G=n.p+"static/media/loading.65f78576.svg";var Z=function(){var e=Object(o.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1],c=Object(o.useState)(!1),p=Object(u.a)(c,2),d=p[0],m=p[1],b=Object(o.useState)(!1),h=Object(u.a)(b,2),_=h[0],C=h[1],N=Object(o.useState)(!1),w=Object(u.a)(N,2),T=w[0],E=w[1],I=Object(o.useState)([]),U=Object(u.a)(I,2),q=U[0],Z=U[1],K=Object(o.useState)({isImageOpen:!1,link:"",name:""}),Q=Object(u.a)(K,2),V=Q[0],W=Q[1],X=Object(o.useState)({}),Y=Object(u.a)(X,2),$=Y[0],ee=Y[1],te=Object(o.useState)({}),ne=Object(u.a)(te,2),ae=ne[0],oe=ne[1],se=Object(o.useState)(!1),ie=Object(u.a)(se,2),ce=ie[0],re=ie[1],ue=Object(o.useState)(!1),le=Object(u.a)(ue,2),pe=le[0],de=le[1],je=Object(o.useState)(""),me=Object(u.a)(je,2),be=me[0],he=me[1],fe=Object(o.useState)(!1),Oe=Object(u.a)(fe,2),_e=Oe[0],ge=(Oe[1],Object(o.useState)(!1)),xe=Object(u.a)(ge,2),ve=xe[0],Ce=xe[1],Ne=Object(o.useState)({iconPath:G,text:""}),ke=Object(u.a)(Ne,2),Se=ke[0],ye=ke[1],Le=Object(l.h)(),we=Object(l.g)();function Te(){i(!1),C(!1),m(!1),W({}),E(!1),Ce(!1)}return s.a.useEffect((function(){j.getUserInfo().then((function(e){ee(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435: ".concat(e))}))}),[]),s.a.useEffect((function(){var e=localStorage.getItem("jwt");e&&F(e).then((function(e){de(!0),he(e.data.email),we.push("/")})).catch((function(e){return console.log(e)}))}),[we]),s.a.useEffect((function(){j.getUserInfo().then((function(e){ee(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435: ".concat(e))}))}),[]),s.a.useEffect((function(){j.getInitialCards().then((function(e){Z(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a: ".concat(e))}))}),[]),Object(a.jsx)(O.Provider,{value:$,children:Object(a.jsx)("div",{className:"root",children:Object(a.jsxs)("div",{className:"page",children:[pe&&_e,Object(a.jsx)(f,{loggedIn:pe,locaction:Le,email:be,signOut:function(){de(!1),localStorage.removeItem("jwt"),he(""),we.push("/sign-in")},isAuthInfoOpened:_e}),Object(a.jsxs)(l.d,{children:[Object(a.jsx)(P,{exact:!0,path:"/",loggedIn:pe,component:g,cards:q,onCardClick:function(e){var t=e.link,n=e.name;W({isImageOpen:!0,link:t,name:n})},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===$._id}));j.changeLikeCardStatus(e._id,!t).then((function(t){var n=q.map((function(n){return n._id===e._id?t:n}));Z(n)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043b\u0430\u0439\u043a\u0430: ".concat(e))}))},onCardDelete:function(e){E(!0),oe(e)},onEditProfile:function(){i(!0)},onAddPlace:function(){m(!0)},onEditAvatar:function(){C(!0)}}),Object(a.jsx)(l.b,{path:"/sign-in",children:Object(a.jsx)(J,{onLogin:function(e,t){return function(e,t){return fetch("".concat(B,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){if(400===e.status)throw new z("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439");if(401===e.status)throw new D("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d");return e.json()})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e.token}))}(e,t).then((function(e){F(e).then((function(e){he(e.data.email)})).catch((function(e){return console.log(e)})),de(!0),ye({iconPath:M,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u043e\u0448\u043b\u0438 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435!"}),we.push("/")})).catch((function(e){return ye({iconPath:H,text:e.message})}))}})}),Object(a.jsx)(l.b,{path:"/sign-up",children:Object(a.jsx)(R,{onRegister:function(e,t){(function(e,t){return fetch("".concat(B,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw e.error?new z(e.error):new z(e.message)}))}))})(e,t).then((function(){ye({iconPath:M,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}),we.push("/sign-in")})).catch((function(e){return ye({iconPath:H,text:e.message})})),Ce(!0)}})}),Object(a.jsx)(l.b,{children:pe?Object(a.jsx)(l.a,{to:"/"}):Object(a.jsx)(l.a,{to:"/sign-in"})})]}),Object(a.jsx)(x,{}),Object(a.jsx)(A,{isOpen:ve,onClose:Te,loggedIn:pe,message:Se}),Object(a.jsx)(S,{isOpen:n,onClose:Te,onUpdateUser:function(e){re(!0),j.updateUserInfo(e).then((function(e){ee(e),Te()})).catch((function(e){return"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435: ".concat(e)})).finally((function(){return re(!1)}))},isLoading:ce}),Object(a.jsx)(k,{onUpdateAvatar:function(e){re(!0),j.setUserAvatar(e).then((function(e){ee(e),Te()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430: ".concat(e))})).finally((function(){return re(!1)}))},isOpen:_,onClose:Te,isLoading:ce}),Object(a.jsx)(y,{isOpen:d,onClose:Te,onAddPlace:function(e){re(!0),j.postNewCard(e).then((function(e){Z([e].concat(Object(r.a)(q))),Te()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))})).finally((function(){return re(!1)}))}}),Object(a.jsx)(L,{isOpen:T,onClose:Te,onConfirmDelete:function(){j.deleteCard(ae._id).then((function(){Z(q.filter((function(e){return e!==ae}))),Te()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))}))}}),Object(a.jsx)(v,{name:V.name,link:V.link,isOpen:V.isImageOpen,onClose:Te})]})})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),s(e),i(e)}))};c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(b.a,{basename:"/",children:Object(a.jsx)(Z,{})})}),document.getElementById("root")),K()}},[[42,1,2]]]);
//# sourceMappingURL=main.d82fefcc.chunk.js.map