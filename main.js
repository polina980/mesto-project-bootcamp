(()=>{"use strict";var e=document.querySelector("#popupAvatar"),t=document.querySelector("#popupEdit"),n=document.querySelector("#popupAdd"),r=document.querySelector("#popupImage"),o=document.querySelector(".profile__image"),c=document.querySelector(".profile__edit-button"),a=document.querySelector(".profile__add-button"),u=document.querySelector("#avatar"),i=document.querySelector("#edit"),l=document.querySelector("#add"),d=document.querySelector("#url-avatar"),s=document.querySelector(".profile__title"),f=document.querySelector(".profile__text"),m=document.querySelector("#person-input"),p=document.querySelector("#about-input"),v=document.querySelector("#place-input"),_=document.querySelector("#url-input"),y=document.querySelector(".cards"),h=e.querySelector(".popup__close-button"),S=n.querySelector(".popup__close-button"),b=t.querySelector(".popup__close-button"),q=r.querySelector(".popup__close-button"),k=r.querySelector(".popup__image"),E=r.querySelector(".popup__text"),L="",C={baseUrl:"https://nomoreparties.co/v1/wbc-cohort-1",headers:{authorization:"61650a97-0198-4977-9b18-131273aaff2f","Content-Type":"application/json"}};function g(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function x(e){console.log(e)}function A(e,t){t.querySelector(".form__submit-button").textContent=e?"Сохранение...":"Сохранить"}function U(){return fetch("".concat(C.baseUrl,"/users/me"),{headers:C.headers}).then(g).then((function(e){L=e._id,s.textContent=e.name,f.textContent=e.about,o.style.backgroundImage="url(".concat(e.avatar,")")})).catch(x)}function N(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",B)}function T(e){e.classList.add("popup_opened"),document.addEventListener("keydown",B)}function O(e){e.target===e.currentTarget&&N(document.querySelector(".popup_opened"))}function B(e){"Escape"===e.key&&N(document.querySelector(".popup_opened"))}function D(e){var t=document.querySelector("#card-template").content.querySelector(".card__item").cloneNode(!0),n=t.querySelector(".card__image"),o=t.querySelector(".card__delete-button"),c=t.querySelector(".card__like-button"),a=t.querySelector(".card__like-counter");n.src=e.link,n.alt=e.name,t.id=e._id,t.querySelector(".card__title").textContent=e.name,t.querySelector(".card__like-counter").textContent=e.likes.length,c.addEventListener("click",(function(){!function(e,t,n){t.classList.contains("card__like-button_active")?(function(e,t){fetch("".concat(C.baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:C.headers,body:JSON.stringify({id:t,likes:e})}).then(g)}(L,e.id),t.classList.remove("card__like-button_active"),n.textContent=Number(n.textContent)-1):(function(e,t){fetch("".concat(C.baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:C.headers,body:JSON.stringify({id:t,likes:e})}).then(g)}(L,e.id),t.classList.add("card__like-button_active"),n.textContent=Number(n.textContent)+1)}(t,c,a)}));for(var u=0;u<e.likes.length;u++)e.likes[u]._id===L&&c.classList.add("card__like-button_active");return o.addEventListener("click",(function(){!function(e){return(t=e.id,fetch("".concat(C.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:C.headers,body:JSON.stringify({id:t})}).then(g)).then((function(){e.remove()})).catch(x);var t}(t)})),e.owner._id!==L&&o.remove(),n.addEventListener("click",(function(){k.src=e.link,k.alt=e.name,E.textContent=e.name,T(r)})),t}function J(e,t){var n=document.querySelector(".".concat(e.id,"-error"));e.classList.remove(t.inputErrorClass),n.classList.remove(t.errorClass),n.textContent=""}function P(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(e){J(e,t)})),w(r,t)}function w(e,t){var n=t.inactiveButtonClass;e.classList.add(n),e.disabled=!0}function j(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?function(e,t){var n=t.inactiveButtonClass;e.classList.remove(n),e.disabled=!1}(t,n):w(t,n)}var H,I={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_inactive",inputErrorClass:"form__input_type-error",errorClass:"form__input-error_active"};o.addEventListener("click",(function(t){t.preventDefault(),d.value="",P(u,I),T(e)})),c.addEventListener("click",(function(){m.value=s.textContent,p.value=f.textContent,P(i,I),T(t)})),a.addEventListener("click",(function(){v.value="",_.value="",P(l,I),T(n)})),u.addEventListener("submit",(function(t){t.preventDefault(),A(!0,e),fetch("".concat(C.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:C.headers,body:JSON.stringify({avatar:d.value})}).then(g).then(U).catch(x).finally((function(){A(!1,e)})),N(e)})),i.addEventListener("submit",(function(e){e.preventDefault(),A(!0,t),fetch("".concat(C.baseUrl,"/users/me"),{method:"PATCH",headers:C.headers,body:JSON.stringify({name:m.value,about:p.value})}).then(g).then(U).catch(x).finally((function(){A(!1,t)})),N(t)})),l.addEventListener("submit",(function(e){e.preventDefault(),A(!0,n),fetch("".concat(C.baseUrl,"/cards"),{method:"POST",headers:C.headers,body:JSON.stringify({name:v.value,link:_.value})}).then(g).then((function(e){y.prepend(D(e))})).catch(x).finally((function(){A(!1,n)})),N(n)})),e.addEventListener("click",O),t.addEventListener("click",O),n.addEventListener("click",O),r.addEventListener("click",O),h.addEventListener("click",(function(){N(e)})),b.addEventListener("click",(function(){N(t)})),S.addEventListener("click",(function(){N(n)})),q.addEventListener("click",(function(){N(r)})),H=I,Array.from(document.querySelectorAll(H.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);j(n,r,t),n.forEach((function(e){e.addEventListener("input",(function(){(function(e,t){e.validity.valid?J(e,t):function(e,t,n){var r=document.querySelector(".".concat(e.id,"-error"));e.classList.add(n.inputErrorClass),r.classList.add(n.errorClass),r.textContent=t}(e,e.validationMessage,t)})(e,t),j(n,r,t)}))}))}(e,H)})),U(),fetch("".concat(C.baseUrl,"/cards"),{headers:C.headers}).then(g).then((function(e){for(var t=0;t<e.length;t++)y.append(D(e[t]));console.log(e)})).catch(x)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQU8sSUFBTUEsRUFBY0MsU0FBU0MsY0FBYyxnQkFDckNDLEVBQVlGLFNBQVNDLGNBQWMsY0FDbkNFLEVBQVdILFNBQVNDLGNBQWMsYUFDbENHLEVBQWFKLFNBQVNDLGNBQWMsZUFFcENJLEVBQWdCTCxTQUFTQyxjQUFjLG1CQUN2Q0ssRUFBaUJOLFNBQVNDLGNBQWMseUJBQ3hDTSxFQUFnQlAsU0FBU0MsY0FBYyx3QkFDdkNPLEVBQWFSLFNBQVNDLGNBQWMsV0FDcENRLEVBQVdULFNBQVNDLGNBQWMsU0FDbENTLEVBQVVWLFNBQVNDLGNBQWMsUUFFakNVLEVBQWlCWCxTQUFTQyxjQUFjLGVBQ3hDVyxFQUFXWixTQUFTQyxjQUFjLG1CQUNsQ1ksRUFBWWIsU0FBU0MsY0FBYyxrQkFDbkNhLEVBQWdCZCxTQUFTQyxjQUFjLGlCQUN2Q2MsRUFBaUJmLFNBQVNDLGNBQWMsZ0JBQ3hDZSxFQUFpQmhCLFNBQVNDLGNBQWMsZ0JBQ3hDZ0IsRUFBZ0JqQixTQUFTQyxjQUFjLGNBQ3ZDaUIsRUFBaUJsQixTQUFTQyxjQUFjLFVBQ3hDa0IsRUFBb0JwQixFQUFZRSxjQUFjLHdCQUM5Q21CLEVBQWlCakIsRUFBU0YsY0FBYyx3QkFDeENvQixFQUFrQm5CLEVBQVVELGNBQWMsd0JBQzFDcUIsRUFBbUJsQixFQUFXSCxjQUFjLHdCQUU1Q3NCLEVBQVduQixFQUFXSCxjQUFjLGlCQUNwQ3VCLEVBQVdwQixFQUFXSCxjQUFjLGdCQ2pCdEN3QixFQUFTLEdBRWRDLEVBQVMsQ0FDYkMsUUFBUywyQ0FDVEMsUUFBUyxDQUNQQyxjQUFlLHVDQUNmLGVBQWdCLHFCQUliLFNBQVNDLEVBQWVDLEdBQzdCLE9BQUlBLEVBQUlDLEdBQ0NELEVBQUlFLE9BRU5DLFFBQVFDLE9BQVIsa0JBQTBCSixFQUFJSyxRQUN0QyxDQUVNLFNBQVNDLEVBQVlDLEdBQzFCQyxRQUFRQyxJQUFJRixFQUNiLENBRUQsU0FBU0csRUFBWUMsRUFBUUMsR0FDVEEsRUFBTTFDLGNBQWMsd0JBRTFCMkMsWUFEUkYsRUFDc0IsZ0JBRUEsV0FFM0IsQ0FHTSxTQUFTRyxJQUNkLE9BQU9DLE1BQU0sR0FBRCxPQUFJcEIsRUFBT0MsUUFBWCxhQUErQixDQUN6Q0MsUUFBU0YsRUFBT0UsVUFFZm1CLEtBQUtqQixHQUNMaUIsTUFBSyxTQUFDQyxHQUNMdkIsRUFBU3VCLEVBQU9DLElBQ2hCckMsRUFBU2dDLFlBQWNJLEVBQU9FLEtBQzlCckMsRUFBVStCLFlBQWNJLEVBQU9HLE1BQy9COUMsRUFBYytDLE1BQU1DLGdCQUFwQixjQUE2Q0wsRUFBT00sT0FBcEQsSUFDRCxJQUNBQyxNQUFNbEIsRUFDVixDQ3BETSxTQUFTbUIsRUFBV2IsR0FDekJBLEVBQU1jLFVBQVVDLE9BQU8sZ0JBQ3ZCMUQsU0FBUzJELG9CQUFvQixVQUFXQyxFQUN6QyxDQUVNLFNBQVNDLEVBQVVsQixHQUN4QkEsRUFBTWMsVUFBVUssSUFBSSxnQkFDcEI5RCxTQUFTK0QsaUJBQWlCLFVBQVdILEVBRXRDLENBRU0sU0FBU0ksRUFBa0JyQixHQUM1QkEsRUFBTXNCLFNBQVd0QixFQUFNdUIsZUFFekJWLEVBRGN4RCxTQUFTQyxjQUFjLGlCQUd4QyxDQUVNLFNBQVMyRCxFQUFjTyxHQUNWLFdBQWRBLEVBQU1DLEtBRVJaLEVBRGN4RCxTQUFTQyxjQUFjLGlCQUd4QyxDQ25CTSxTQUFTb0UsRUFBV0MsR0FDekIsSUFDTUMsRUFEZXZFLFNBQVNDLGNBQWMsa0JBQWtCdUUsUUFDakN2RSxjQUFjLGVBQWV3RSxXQUFVLEdBQzlEQyxFQUFZSCxFQUFRdEUsY0FBYyxnQkFDbEMwRSxFQUFtQkosRUFBUXRFLGNBQWMsd0JBQ3pDMkUsRUFBaUJMLEVBQVF0RSxjQUFjLHNCQUN2QzRFLEVBQWNOLEVBQVF0RSxjQUFjLHVCQUMxQ3lFLEVBQVVJLElBQU1SLEVBQUtTLEtBQ3JCTCxFQUFVTSxJQUFNVixFQUFLcEIsS0FDckJxQixFQUFRVSxHQUFLWCxFQUFLckIsSUFDbEJzQixFQUFRdEUsY0FBYyxnQkFBZ0IyQyxZQUFjMEIsRUFBS3BCLEtBQ3pEcUIsRUFBUXRFLGNBQWMsdUJBQXVCMkMsWUFBYzBCLEVBQUtZLE1BQU1DLE9BRXRFUCxFQUFlYixpQkFBaUIsU0FBUyxZQW9DcEMsU0FBbUJRLEVBQVNLLEVBQWdCQyxHQUM3Q0QsRUFBZW5CLFVBQVUyQixTQUFTLDZCRm1HakMsU0FBcUIzRCxFQUFRNEQsR0FDM0J2QyxNQUFNLEdBQUQsT0FBSXBCLEVBQU9DLFFBQVgsd0JBQWtDMEQsR0FBVSxDQUN0REMsT0FBUSxTQUNSMUQsUUFBU0YsRUFBT0UsUUFDaEIyRCxLQUFNQyxLQUFLQyxVQUFVLENBQ25CUixHQUFJSSxFQUNKSCxNQUFPekQsTUFHUnNCLEtBQUtqQixFQUNULENFNUdHNEQsQ0FBWWpFLEVBQVE4QyxFQUFRVSxJQUM1QkwsRUFBZW5CLFVBQVVDLE9BQU8sNEJBQ2hDbUIsRUFBWWpDLFlBQWMrQyxPQUFPZCxFQUFZakMsYUFBZSxJRm1GekQsU0FBa0JuQixFQUFRNEQsR0FDeEJ2QyxNQUFNLEdBQUQsT0FBSXBCLEVBQU9DLFFBQVgsd0JBQWtDMEQsR0FBVSxDQUN0REMsT0FBUSxNQUNSMUQsUUFBU0YsRUFBT0UsUUFDaEIyRCxLQUFNQyxLQUFLQyxVQUFVLENBQ25CUixHQUFJSSxFQUNKSCxNQUFPekQsTUFHUnNCLEtBQUtqQixFQUNULENFM0ZHOEQsQ0FBU25FLEVBQVE4QyxFQUFRVSxJQUN6QkwsRUFBZW5CLFVBQVVLLElBQUksNEJBQzdCZSxFQUFZakMsWUFBYytDLE9BQU9kLEVBQVlqQyxhQUFlLEVBRS9ELENBN0NHaUQsQ0FBVXRCLEVBQVNLLEVBQWdCQyxFQUNwQyxJQUNELElBQUssSUFBSWlCLEVBQUksRUFBR0EsRUFBSXhCLEVBQUtZLE1BQU1DLE9BQVFXLElBQ2pDeEIsRUFBS1ksTUFBTVksR0FBRzdDLE1BQVF4QixHQUN4Qm1ELEVBQWVuQixVQUFVSyxJQUFJLDRCQWtCakMsT0FkQWEsRUFBaUJaLGlCQUFpQixTQUFTLFlBa0J0QyxTQUFvQlEsR0FDekIsT0ZtRitCYyxFRW5GUGQsRUFBUVUsR0ZvRnpCbkMsTUFBTSxHQUFELE9BQUlwQixFQUFPQyxRQUFYLGtCQUE0QjBELEdBQVUsQ0FDaERDLE9BQVEsU0FDUjFELFFBQVNGLEVBQU9FLFFBQ2hCMkQsS0FBTUMsS0FBS0MsVUFBVSxDQUNuQlIsR0FBSUksTUFHTHRDLEtBQUtqQixJRTFGTGlCLE1BQUssV0FDSndCLEVBQVFiLFFBQ1QsSUFDQUgsTUFBTWxCLEdGK0VKLElBQTBCZ0QsQ0U5RWhDLENBdkJHVSxDQUFXeEIsRUFDWixJQUNHRCxFQUFLMEIsTUFBTS9DLE1BQVF4QixHQUNyQmtELEVBQWlCakIsU0FHbkJnQixFQUFVWCxpQkFBaUIsU0FBUyxXQUNsQ3hDLEVBQVN1RCxJQUFNUixFQUFLUyxLQUNwQnhELEVBQVN5RCxJQUFNVixFQUFLcEIsS0FDcEIxQixFQUFTb0IsWUFBYzBCLEVBQUtwQixLQUM1QlcsRUFBVXpELEVBQ1gsSUFFTW1FLENBQ1IsQ0NsQ00sU0FBUzBCLEVBQWVDLEVBQWNDLEdBQzNDLElBQU1DLEVBQVlwRyxTQUFTQyxjQUFULFdBQTJCaUcsRUFBYWpCLEdBQXhDLFdBQ2xCaUIsRUFBYXpDLFVBQVVDLE9BQU95QyxFQUFVRSxpQkFDeENELEVBQVUzQyxVQUFVQyxPQUFPeUMsRUFBVUcsWUFDckNGLEVBQVV4RCxZQUFjLEVBQ3pCLENBZ0JNLFNBQVMyRCxFQUFlQyxFQUFhTCxHQUMxQyxJQUFNTSxFQUFZQyxNQUFNQyxLQUFLSCxFQUFZSSxpQkFBaUJULEVBQVVVLGdCQUM5REMsRUFBZU4sRUFBWXZHLGNBQWNrRyxFQUFVWSxzQkFDekROLEVBQVVPLFNBQVEsU0FBVWQsR0FDMUJELEVBQWVDLEVBQWNDLEVBQzlCLElBQ0RjLEVBQXFCSCxFQUFjWCxFQUNwQyxDQUVNLFNBQVNjLEVBQXFCSCxFQUE5QixHQUFxRSxJQUF2QkksRUFBdUIsRUFBdkJBLG9CQUNuREosRUFBYXJELFVBQVVLLElBQUlvRCxHQUMzQkosRUFBYUssVUFBVyxDQUN6QixDQU9NLFNBQVNDLEVBQWtCWCxFQUFXSyxFQUFjWCxJQXpCcEQsU0FBeUJNLEdBQzlCLE9BQU9BLEVBQVVZLE1BQUssU0FBVW5CLEdBQzlCLE9BQVFBLEVBQWFvQixTQUFTQyxLQUMvQixHQUNGLENBc0JLQyxDQUFnQmYsR0FOZixTQUE0QkssRUFBNUIsR0FBbUUsSUFBdkJJLEVBQXVCLEVBQXZCQSxvQkFDakRKLEVBQWFyRCxVQUFVQyxPQUFPd0QsR0FDOUJKLEVBQWFLLFVBQVcsQ0FDekIsQ0FNR00sQ0FBbUJYLEVBQWNYLEdBRmpDYyxFQUFxQkgsRUFBY1gsRUFJdEMsQ0M1QkQsSUQwQ2lDQSxFQzFDM0J1QixFQUFpQixDQUNyQkMsYUFBYyxRQUNkZCxjQUFlLGVBQ2ZFLHFCQUFzQix1QkFDdEJHLG9CQUFxQiwrQkFDckJiLGdCQUFpQix5QkFDakJDLFdBQVksNEJBR2RqRyxFQUFjMEQsaUJBQWlCLFNBK0MvQixTQUF5QkksR0FDdkJBLEVBQU15RCxpQkFDTmpILEVBQWVrSCxNQUFRLEdBQ3ZCdEIsRUFBZS9GLEVBQVlrSCxHQUMzQjdELEVBQVU5RCxFQUNYLElBbkRETyxFQUFleUQsaUJBQWlCLFNBcURoQyxXQUNFakQsRUFBYytHLE1BQVFqSCxFQUFTZ0MsWUFDL0I3QixFQUFlOEcsTUFBUWhILEVBQVUrQixZQUNqQzJELEVBQWU5RixFQUFVaUgsR0FDekI3RCxFQUFVM0QsRUFDWCxJQXpEREssRUFBY3dELGlCQUFpQixTQTJEL0IsV0FDRS9DLEVBQWU2RyxNQUFRLEdBQ3ZCNUcsRUFBYzRHLE1BQVEsR0FDdEJ0QixFQUFlN0YsRUFBU2dILEdBQ3hCN0QsRUFBVTFELEVBQ1gsSUE5RERLLEVBQVd1RCxpQkFBaUIsVUF5QjVCLFNBQTBCSSxHQUN4QkEsRUFBTXlELGlCSjBCTm5GLEdBQVksRUFBTTFDLEdBQ1grQyxNQUFNLEdBQUQsT0FBSXBCLEVBQU9DLFFBQVgsb0JBQXNDLENBQ2hEMkQsT0FBUSxRQUNSMUQsUUFBU0YsRUFBT0UsUUFDaEIyRCxLQUFNQyxLQUFLQyxVQUFVLENBQ25CbkMsT0FBUTNDLEVBQWVrSCxVQUd4QjlFLEtBQUtqQixHQUNMaUIsS0FBS0YsR0FDTFUsTUFBTWxCLEdBQ055RixTQUFRLFdBQ1ByRixHQUFZLEVBQU8xQyxFQUNwQixJSXJDSHlELEVBQVd6RCxFQUNaLElBNUJEVSxFQUFTc0QsaUJBQWlCLFVBOEIxQixTQUF3QkksR0FDdEJBLEVBQU15RCxpQkpDTm5GLEdBQVksRUFBTXZDLEdBQ1g0QyxNQUFNLEdBQUQsT0FBSXBCLEVBQU9DLFFBQVgsYUFBK0IsQ0FDekMyRCxPQUFRLFFBQ1IxRCxRQUFTRixFQUFPRSxRQUNoQjJELEtBQU1DLEtBQUtDLFVBQVUsQ0FDbkJ2QyxLQUFNcEMsRUFBYytHLE1BQ3BCMUUsTUFBT3BDLEVBQWU4RyxVQUd2QjlFLEtBQUtqQixHQUNMaUIsS0FBS0YsR0FDTFUsTUFBTWxCLEdBQ055RixTQUFRLFdBQ1ByRixHQUFZLEVBQU92QyxFQUNwQixJSWJIc0QsRUFBV3RELEVBQ1osSUFqQ0RRLEVBQVFxRCxpQkFBaUIsVUFtQ3pCLFNBQXVCSSxHQUNyQkEsRUFBTXlELGlCSmdDTm5GLEdBQVksRUFBTXRDLEdBQ1gyQyxNQUFNLEdBQUQsT0FBSXBCLEVBQU9DLFFBQVgsVUFBNEIsQ0FDdEMyRCxPQUFRLE9BQ1IxRCxRQUFTRixFQUFPRSxRQUNoQjJELEtBQU1DLEtBQUtDLFVBQVUsQ0FDbkJ2QyxLQUFNbEMsRUFBZTZHLE1BQ3JCOUMsS0FBTTlELEVBQWM0RyxVQUdyQjlFLEtBQUtqQixHQUNMaUIsTUFBSyxTQUFDQyxHQUNMOUIsRUFBZTZHLFFBQVExRCxFQUFXckIsR0FDbkMsSUFDQU8sTUFBTWxCLEdBQ055RixTQUFRLFdBQ1ByRixHQUFZLEVBQU90QyxFQUNwQixJSTlDSHFELEVBQVdyRCxFQUNaLElBckNESixFQUFZZ0UsaUJBQWlCLFFBQVNDLEdBQ3RDOUQsRUFBVTZELGlCQUFpQixRQUFTQyxHQUNwQzdELEVBQVM0RCxpQkFBaUIsUUFBU0MsR0FDbkM1RCxFQUFXMkQsaUJBQWlCLFFBQVNDLEdBRXJDN0MsRUFBa0I0QyxpQkFBaUIsU0FBUyxXQUMxQ1AsRUFBV3pELEVBQ1osSUFDRHNCLEVBQWdCMEMsaUJBQWlCLFNBQVMsV0FDeENQLEVBQVd0RCxFQUNaLElBQ0RrQixFQUFlMkMsaUJBQWlCLFNBQVMsV0FDdkNQLEVBQVdyRCxFQUNaLElBQ0RtQixFQUFpQnlDLGlCQUFpQixTQUFTLFdBQ3pDUCxFQUFXcEQsRUFDWixJRFNnQytGLEVDbUNoQnVCLEVEbENFaEIsTUFBTUMsS0FBSzNHLFNBQVM0RyxpQkFBaUJULEVBQVV3QixlQUN2RFgsU0FBUSxTQUFVUixJQWR0QixTQUEyQkEsRUFBYUwsR0FDN0MsSUFBTU0sRUFBWUMsTUFBTUMsS0FBS0gsRUFBWUksaUJBQWlCVCxFQUFVVSxnQkFDOURDLEVBQWVOLEVBQVl2RyxjQUFja0csRUFBVVksc0JBQ3pESyxFQUFrQlgsRUFBV0ssRUFBY1gsR0FDM0NNLEVBQVVPLFNBQVEsU0FBVWQsR0FDMUJBLEVBQWFuQyxpQkFBaUIsU0FBUyxZQTlDcEMsU0FBNEJtQyxFQUFjQyxHQUMxQ0QsRUFBYW9CLFNBQVNDLE1BR3pCdEIsRUFBZUMsRUFBY0MsR0FsQjFCLFNBQXdCRCxFQUFjOEIsRUFBYzdCLEdBQ3pELElBQU1DLEVBQVlwRyxTQUFTQyxjQUFULFdBQTJCaUcsRUFBYWpCLEdBQXhDLFdBQ2xCaUIsRUFBYXpDLFVBQVVLLElBQUlxQyxFQUFVRSxpQkFDckNELEVBQVUzQyxVQUFVSyxJQUFJcUMsRUFBVUcsWUFDbENGLEVBQVV4RCxZQUFjb0YsQ0FDekIsQ0FXR0MsQ0FBZS9CLEVBQWNBLEVBQWFnQyxrQkFBbUIvQixFQUloRSxFQXlDS2dDLENBQW1CakMsRUFBY0MsR0FDakNpQixFQUFrQlgsRUFBV0ssRUFBY1gsRUFDNUMsR0FDRixHQUNGLENBS0dpQyxDQUFrQjVCLEVBQWFMLEVBQ2hDLElDa0NIdEQsSUpqRFNDLE1BQU0sR0FBRCxPQUFJcEIsRUFBT0MsUUFBWCxVQUE0QixDQUN0Q0MsUUFBU0YsRUFBT0UsVUFFZm1CLEtBQUtqQixHQUNMaUIsTUFBSyxTQUFDQyxHQUNMLElBQUssSUFBSThDLEVBQUksRUFBR0EsRUFBSTlDLEVBQU9tQyxPQUFRVyxJQUNqQzVFLEVBQWVtSCxPQUFPaEUsRUFBV3JCLEVBQU84QyxLQUUxQ3ZELFFBQVFDLElBQUlRLEVBQ2IsSUFDQU8sTUFBTWxCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXN0by1wcm9qZWN0LWJvb3RjYW1wLy4vc3JjL2NvbXBvbmVudHMvdmFyaWFibGVzLmpzIiwid2VicGFjazovL21lc3RvLXByb2plY3QtYm9vdGNhbXAvLi9zcmMvY29tcG9uZW50cy9hcGkuanMiLCJ3ZWJwYWNrOi8vbWVzdG8tcHJvamVjdC1ib290Y2FtcC8uL3NyYy9jb21wb25lbnRzL21vZGFsLmpzIiwid2VicGFjazovL21lc3RvLXByb2plY3QtYm9vdGNhbXAvLi9zcmMvY29tcG9uZW50cy9jYXJkLmpzIiwid2VicGFjazovL21lc3RvLXByb2plY3QtYm9vdGNhbXAvLi9zcmMvY29tcG9uZW50cy92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9tZXN0by1wcm9qZWN0LWJvb3RjYW1wLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHBvcHVwQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwQXZhdGFyJyk7XG5leHBvcnQgY29uc3QgcG9wdXBFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwRWRpdCcpO1xuZXhwb3J0IGNvbnN0IHBvcHVwQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwQWRkJyk7XG5leHBvcnQgY29uc3QgcG9wdXBJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cEltYWdlJyk7XG4vLyBleHBvcnQgY29uc3QgcG9wdXBEZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9wdXBEZWxldGUnKTtcbmV4cG9ydCBjb25zdCBwcm9maWxlQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2ltYWdlJyk7XG5leHBvcnQgY29uc3QgYnV0dG9uT3BlbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fZWRpdC1idXR0b24nKTtcbmV4cG9ydCBjb25zdCBidXR0b25PcGVuQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2FkZC1idXR0b24nKTtcbmV4cG9ydCBjb25zdCBmb3JtQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F2YXRhcicpO1xuZXhwb3J0IGNvbnN0IGZvcm1FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQnKTtcbmV4cG9ydCBjb25zdCBmb3JtQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZCcpO1xuLy8gZXhwb3J0IGNvbnN0IGZvcm1EZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlJyk7XG5leHBvcnQgY29uc3QgaW5wdXRBdmF0YXJVcmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXJsLWF2YXRhcicpO1xuZXhwb3J0IGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX3RpdGxlJyk7XG5leHBvcnQgY29uc3QgdXNlckFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX3RleHQnKTtcbmV4cG9ydCBjb25zdCBpbnB1dFVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlcnNvbi1pbnB1dCcpO1xuZXhwb3J0IGNvbnN0IGlucHV0VXNlckFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0LWlucHV0Jyk7XG5leHBvcnQgY29uc3QgaW5wdXRQbGFjZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxhY2UtaW5wdXQnKTtcbmV4cG9ydCBjb25zdCBpbnB1dFBsYWNlVXJsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VybC1pbnB1dCcpO1xuZXhwb3J0IGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJyk7XG5leHBvcnQgY29uc3QgYnV0dG9uQ2xvc2VBdmF0YXIgPSBwb3B1cEF2YXRhci5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Nsb3NlLWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IGJ1dHRvbkNsb3NlQWRkID0gcG9wdXBBZGQucXVlcnlTZWxlY3RvcignLnBvcHVwX19jbG9zZS1idXR0b24nKTtcbmV4cG9ydCBjb25zdCBidXR0b25DbG9zZUVkaXQgPSBwb3B1cEVkaXQucXVlcnlTZWxlY3RvcignLnBvcHVwX19jbG9zZS1idXR0b24nKTtcbmV4cG9ydCBjb25zdCBidXR0b25DbG9zZUltYWdlID0gcG9wdXBJbWFnZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Nsb3NlLWJ1dHRvbicpO1xuLy8gZXhwb3J0IGNvbnN0IGJ1dHRvbkNsb3NlRGVsZXRlID0gcG9wdXBEZWxldGUucXVlcnlTZWxlY3RvcignLnBvcHVwX19jbG9zZS1idXR0b24nKTtcbmV4cG9ydCBjb25zdCBwb3B1cEltZyA9IHBvcHVwSW1hZ2UucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbWFnZScpO1xuZXhwb3J0IGNvbnN0IHBvcHVwVHh0ID0gcG9wdXBJbWFnZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3RleHQnKTsiLCJpbXBvcnQge1xuICBwcm9maWxlQXZhdGFyLCB1c2VyTmFtZSwgdXNlckFib3V0LFxuICBjYXJkc0NvbnRhaW5lciwgaW5wdXRBdmF0YXJVcmwsXG4gIGlucHV0VXNlck5hbWUsIGlucHV0VXNlckFib3V0LFxuICBpbnB1dFBsYWNlTmFtZSwgaW5wdXRQbGFjZVVybCwgcG9wdXBBdmF0YXIsIHBvcHVwRWRpdCwgcG9wdXBBZGQsXG5cbn0gZnJvbSBcIi4vdmFyaWFibGVzLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVDYXJkIH0gZnJvbSBcIi4vY2FyZC5qc1wiO1xuXG5leHBvcnQgbGV0IHVzZXJJZCA9ICcnO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIGJhc2VVcmw6IGBodHRwczovL25vbW9yZXBhcnRpZXMuY28vdjEvd2JjLWNvaG9ydC0xYCxcbiAgaGVhZGVyczoge1xuICAgIGF1dGhvcml6YXRpb246ICc2MTY1MGE5Ny0wMTk4LTQ5NzctOWIxOC0xMzEyNzNhYWZmMmYnLFxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2UocmVzKSB7XG4gIGlmIChyZXMub2spIHtcbiAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyKSB7XG4gIGNvbnNvbGUubG9nKGVycik7XG59O1xuXG5mdW5jdGlvbiBzYXZpbmdQb3B1cChzYXZpbmcsIHBvcHVwKSB7XG4gIGNvbnN0IHBvcHVwU2F2ZSA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19zdWJtaXQtYnV0dG9uJylcbiAgaWYgKHNhdmluZykge1xuICAgIHBvcHVwU2F2ZS50ZXh0Q29udGVudCA9ICfQodC+0YXRgNCw0L3QtdC90LjQtS4uLidcbiAgfSBlbHNlIHtcbiAgICBwb3B1cFNhdmUudGV4dENvbnRlbnQgPSAn0KHQvtGF0YDQsNC90LjRgtGMJ1xuICB9XG59XG5cbi8vLy/Ql9Cw0LPRgNGD0LfQutCwINC40L3RhNC+0YDQvNCw0YbQuNC4INC+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtSDRgSDRgdC10YDQstC10YDQsC8vLy9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJVc2VyRGF0YSgpIHtcbiAgcmV0dXJuIGZldGNoKGAke2NvbmZpZy5iYXNlVXJsfS91c2Vycy9tZWAsIHtcbiAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVycyxcbiAgfSlcbiAgICAudGhlbihoYW5kbGVSZXNwb25zZSlcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICB1c2VySWQgPSByZXN1bHQuX2lkO1xuICAgICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSByZXN1bHQubmFtZTtcbiAgICAgIHVzZXJBYm91dC50ZXh0Q29udGVudCA9IHJlc3VsdC5hYm91dDtcbiAgICAgIHByb2ZpbGVBdmF0YXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3Jlc3VsdC5hdmF0YXJ9KWA7XG4gICAgfSlcbiAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xufVxuXG4vLy8v0JfQsNCz0YDRg9C30LrQsCDQutCw0YDRgtC+0YfQtdC6INGBINGB0LXRgNCy0LXRgNCwLy8vL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlckluaXRpYWxDYXJkcygpIHtcbiAgcmV0dXJuIGZldGNoKGAke2NvbmZpZy5iYXNlVXJsfS9jYXJkc2AsIHtcbiAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVycyxcbiAgfSlcbiAgICAudGhlbihoYW5kbGVSZXNwb25zZSlcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmQoY3JlYXRlQ2FyZChyZXN1bHRbaV0pKVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgIH0pXG4gICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcbn1cblxuLy8vL9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0L/RgNC+0YTQuNC70Y8vLy8vXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hVc2VyRGF0YSgpIHtcbiAgc2F2aW5nUG9wdXAodHJ1ZSwgcG9wdXBFZGl0KVxuICByZXR1cm4gZmV0Y2goYCR7Y29uZmlnLmJhc2VVcmx9L3VzZXJzL21lYCwge1xuICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVycyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBuYW1lOiBpbnB1dFVzZXJOYW1lLnZhbHVlLFxuICAgICAgYWJvdXQ6IGlucHV0VXNlckFib3V0LnZhbHVlLFxuICAgIH0pXG4gIH0pXG4gICAgLnRoZW4oaGFuZGxlUmVzcG9uc2UpXG4gICAgLnRoZW4oZ2V0U2VydmVyVXNlckRhdGEpXG4gICAgLmNhdGNoKGhhbmRsZUVycm9yKVxuICAgIC5maW5hbGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhdmluZ1BvcHVwKGZhbHNlLCBwb3B1cEVkaXQpXG4gICAgfSlcbn1cblxuLy8vL9Ce0LHQvdC+0LLQu9C10L3QuNC1INCw0LLQsNGC0LDRgNCwINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjy8vLy9cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaFVzZXJBdmF0YXIoKSB7XG4gIHNhdmluZ1BvcHVwKHRydWUsIHBvcHVwQXZhdGFyKVxuICByZXR1cm4gZmV0Y2goYCR7Y29uZmlnLmJhc2VVcmx9L3VzZXJzL21lL2F2YXRhcmAsIHtcbiAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgaGVhZGVyczogY29uZmlnLmhlYWRlcnMsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgYXZhdGFyOiBpbnB1dEF2YXRhclVybC52YWx1ZVxuICAgIH0pXG4gIH0pXG4gICAgLnRoZW4oaGFuZGxlUmVzcG9uc2UpXG4gICAgLnRoZW4oZ2V0U2VydmVyVXNlckRhdGEpXG4gICAgLmNhdGNoKGhhbmRsZUVycm9yKVxuICAgIC5maW5hbGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhdmluZ1BvcHVwKGZhbHNlLCBwb3B1cEF2YXRhcilcbiAgICB9KVxufVxuXG4vLy8v0JTQvtCx0LDQstC70LXQvdC40LUg0L3QvtCy0L7QuSDQutCw0YDRgtC+0YfQutC4Ly8vL1xuZXhwb3J0IGZ1bmN0aW9uIHBvc3ROZXdDYXJkKCkge1xuICBzYXZpbmdQb3B1cCh0cnVlLCBwb3B1cEFkZClcbiAgcmV0dXJuIGZldGNoKGAke2NvbmZpZy5iYXNlVXJsfS9jYXJkc2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVycyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBuYW1lOiBpbnB1dFBsYWNlTmFtZS52YWx1ZSxcbiAgICAgIGxpbms6IGlucHV0UGxhY2VVcmwudmFsdWVcbiAgICB9KVxuICB9KVxuICAgIC50aGVuKGhhbmRsZVJlc3BvbnNlKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGNhcmRzQ29udGFpbmVyLnByZXBlbmQoY3JlYXRlQ2FyZChyZXN1bHQpKTtcbiAgICB9KVxuICAgIC5jYXRjaChoYW5kbGVFcnJvcilcbiAgICAuZmluYWxseShmdW5jdGlvbiAoKSB7XG4gICAgICBzYXZpbmdQb3B1cChmYWxzZSwgcG9wdXBBZGQpXG4gICAgfSlcbn1cblxuLy8vL9Cj0LTQsNC70LXQvdC40LUg0YLQvtC70YzQutC+INGB0LLQvtC10Lkg0LrQsNGA0YLQvtGH0LrQuC8vLy9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVTZXJ2ZXJDYXJkKGNhcmRJZCkge1xuICByZXR1cm4gZmV0Y2goYCR7Y29uZmlnLmJhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfWAsIHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIGhlYWRlcnM6IGNvbmZpZy5oZWFkZXJzLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGlkOiBjYXJkSWRcbiAgICB9KVxuICB9KVxuICAgIC50aGVuKGhhbmRsZVJlc3BvbnNlKVxufVxuXG4vLy8v0JTQvtCx0LDQstC70LXQvdC40LUg0LvQsNC50LrQsC8vLy9cbmV4cG9ydCBmdW5jdGlvbiBsaWtlQ2FyZCh1c2VySWQsIGNhcmRJZCkge1xuICByZXR1cm4gZmV0Y2goYCR7Y29uZmlnLmJhc2VVcmx9L2NhcmRzL2xpa2VzLyR7Y2FyZElkfWAsIHtcbiAgICBtZXRob2Q6ICdQVVQnLFxuICAgIGhlYWRlcnM6IGNvbmZpZy5oZWFkZXJzLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGlkOiBjYXJkSWQsXG4gICAgICBsaWtlczogdXNlcklkXG4gICAgfSlcbiAgfSlcbiAgICAudGhlbihoYW5kbGVSZXNwb25zZSlcbn1cblxuLy8vL9Cj0LTQsNC70LXQvdC40LUg0LvQsNC50LrQsC8vLy9cbmV4cG9ydCBmdW5jdGlvbiBkaXNsaWtlQ2FyZCh1c2VySWQsIGNhcmRJZCkge1xuICByZXR1cm4gZmV0Y2goYCR7Y29uZmlnLmJhc2VVcmx9L2NhcmRzL2xpa2VzLyR7Y2FyZElkfWAsIHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIGhlYWRlcnM6IGNvbmZpZy5oZWFkZXJzLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGlkOiBjYXJkSWQsXG4gICAgICBsaWtlczogdXNlcklkXG4gICAgfSlcbiAgfSlcbiAgICAudGhlbihoYW5kbGVSZXNwb25zZSlcbn0iLCJleHBvcnQgZnVuY3Rpb24gY2xvc2VQb3B1cChwb3B1cCkge1xuICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cF9vcGVuZWQnKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNsb3NlUG9wdXBFc2MpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Qb3B1cChwb3B1cCkge1xuICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cF9vcGVuZWQnKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNsb3NlUG9wdXBFc2MpO1xuXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQb3B1cE92ZXJsYXkocG9wdXApIHtcbiAgaWYgKHBvcHVwLnRhcmdldCA9PT0gcG9wdXAuY3VycmVudFRhcmdldCkge1xuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX29wZW5lZCcpO1xuICAgIGNsb3NlUG9wdXAocG9wdXApO1xuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQb3B1cEVzYyhldmVudCkge1xuICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX29wZW5lZCcpO1xuICAgIGNsb3NlUG9wdXAocG9wdXApO1xuICB9XG59OyIsImltcG9ydCB7IGhhbmRsZUVycm9yLCB1c2VySWQsIGxpa2VDYXJkLCBkaXNsaWtlQ2FyZCwgZGVsZXRlU2VydmVyQ2FyZCB9IGZyb20gXCIuL2FwaS5qc1wiO1xuaW1wb3J0IHsgb3BlblBvcHVwIH0gZnJvbSBcIi4vbW9kYWwuanNcIjtcbmltcG9ydCB7IHBvcHVwSW1hZ2UsIHBvcHVwSW1nLCBwb3B1cFR4dCB9IGZyb20gXCIuL3ZhcmlhYmxlcy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyZChjYXJkKSB7XG4gIGNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkLXRlbXBsYXRlJykuY29udGVudDtcbiAgY29uc3QgY2FyZE5ldyA9IGNhcmRUZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbScpLmNsb25lTm9kZSh0cnVlKTtcbiAgY29uc3QgY2FyZEltYWdlID0gY2FyZE5ldy5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faW1hZ2UnKTtcbiAgY29uc3QgY2FyZERlbGV0ZUJ1dHRvbiA9IGNhcmROZXcucXVlcnlTZWxlY3RvcignLmNhcmRfX2RlbGV0ZS1idXR0b24nKTtcbiAgY29uc3QgY2FyZExpa2VCdXR0b24gPSBjYXJkTmV3LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19saWtlLWJ1dHRvbicpO1xuICBjb25zdCBsaWtlQ291bnRlciA9IGNhcmROZXcucXVlcnlTZWxlY3RvcignLmNhcmRfX2xpa2UtY291bnRlcicpXG4gIGNhcmRJbWFnZS5zcmMgPSBjYXJkLmxpbms7XG4gIGNhcmRJbWFnZS5hbHQgPSBjYXJkLm5hbWU7XG4gIGNhcmROZXcuaWQgPSBjYXJkLl9pZDtcbiAgY2FyZE5ldy5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fdGl0bGUnKS50ZXh0Q29udGVudCA9IGNhcmQubmFtZTtcbiAgY2FyZE5ldy5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fbGlrZS1jb3VudGVyJykudGV4dENvbnRlbnQgPSBjYXJkLmxpa2VzLmxlbmd0aDtcbiAgLy8vL0xpa2UvLy8vXG4gIGNhcmRMaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGxpa2VkQ2FyZChjYXJkTmV3LCBjYXJkTGlrZUJ1dHRvbiwgbGlrZUNvdW50ZXIpXG4gIH0pXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZC5saWtlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChjYXJkLmxpa2VzW2ldLl9pZCA9PT0gdXNlcklkKSB7XG4gICAgICBjYXJkTGlrZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYXJkX19saWtlLWJ1dHRvbl9hY3RpdmUnKTtcbiAgICB9XG4gIH1cbiAgLy8vL0RlbGV0ZS8vLy9cbiAgY2FyZERlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBkZWxldGVDYXJkKGNhcmROZXcpXG4gIH0pXG4gIGlmIChjYXJkLm93bmVyLl9pZCAhPT0gdXNlcklkKSB7XG4gICAgY2FyZERlbGV0ZUJ1dHRvbi5yZW1vdmUoKVxuICB9XG4gIC8vLy9GdWxsIEltYWdlLy8vL1xuICBjYXJkSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgcG9wdXBJbWcuc3JjID0gY2FyZC5saW5rO1xuICAgIHBvcHVwSW1nLmFsdCA9IGNhcmQubmFtZTtcbiAgICBwb3B1cFR4dC50ZXh0Q29udGVudCA9IGNhcmQubmFtZTtcbiAgICBvcGVuUG9wdXAocG9wdXBJbWFnZSk7XG4gIH0pO1xuICAvLy8vTmV3IGNhcmQvLy8vXG4gIHJldHVybiBjYXJkTmV3O1xufTtcblxuLy8vL0RlbGV0ZS8vLy9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDYXJkKGNhcmROZXcpIHtcbiAgcmV0dXJuIGRlbGV0ZVNlcnZlckNhcmQoY2FyZE5ldy5pZClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBjYXJkTmV3LnJlbW92ZSgpO1xuICAgIH0pXG4gICAgLmNhdGNoKGhhbmRsZUVycm9yKVxufVxuXG4vLy8vTGlrZS8vLy9cbmV4cG9ydCBmdW5jdGlvbiBsaWtlZENhcmQoY2FyZE5ldywgY2FyZExpa2VCdXR0b24sIGxpa2VDb3VudGVyKSB7XG4gIGlmIChjYXJkTGlrZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmRfX2xpa2UtYnV0dG9uX2FjdGl2ZScpKSB7XG4gICAgZGlzbGlrZUNhcmQodXNlcklkLCBjYXJkTmV3LmlkKTtcbiAgICBjYXJkTGlrZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjYXJkX19saWtlLWJ1dHRvbl9hY3RpdmUnKTtcbiAgICBsaWtlQ291bnRlci50ZXh0Q29udGVudCA9IE51bWJlcihsaWtlQ291bnRlci50ZXh0Q29udGVudCkgLSAxO1xuICB9IGVsc2Uge1xuICAgIGxpa2VDYXJkKHVzZXJJZCwgY2FyZE5ldy5pZCk7XG4gICAgY2FyZExpa2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FyZF9fbGlrZS1idXR0b25fYWN0aXZlJyk7XG4gICAgbGlrZUNvdW50ZXIudGV4dENvbnRlbnQgPSBOdW1iZXIobGlrZUNvdW50ZXIudGV4dENvbnRlbnQpICsgMTtcbiAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBzaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSwgc2VsZWN0b3JzKSB7XG4gIGNvbnN0IGZvcm1FcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcbiAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoc2VsZWN0b3JzLmlucHV0RXJyb3JDbGFzcyk7XG4gIGZvcm1FcnJvci5jbGFzc0xpc3QuYWRkKHNlbGVjdG9ycy5lcnJvckNsYXNzKTtcbiAgZm9ybUVycm9yLnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgc2VsZWN0b3JzKSB7XG4gIGNvbnN0IGZvcm1FcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcbiAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoc2VsZWN0b3JzLmlucHV0RXJyb3JDbGFzcyk7XG4gIGZvcm1FcnJvci5jbGFzc0xpc3QucmVtb3ZlKHNlbGVjdG9ycy5lcnJvckNsYXNzKTtcbiAgZm9ybUVycm9yLnRleHRDb250ZW50ID0gJyc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCwgc2VsZWN0b3JzKSB7XG4gIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50LCBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2UsIHNlbGVjdG9ycyk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50LCBzZWxlY3RvcnMpO1xuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkge1xuICByZXR1cm4gaW5wdXRMaXN0LnNvbWUoZnVuY3Rpb24gKGlucHV0RWxlbWVudCkge1xuICAgIHJldHVybiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkO1xuICB9KVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJldmFsaWRhdGVGb3JtKGZvcm1FbGVtZW50LCBzZWxlY3RvcnMpIHtcbiAgY29uc3QgaW5wdXRMaXN0ID0gQXJyYXkuZnJvbShmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycy5pbnB1dFNlbGVjdG9yKSk7XG4gIGNvbnN0IGJ1dHRvblN1Ym1pdCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcbiAgaW5wdXRMaXN0LmZvckVhY2goZnVuY3Rpb24gKGlucHV0RWxlbWVudCkge1xuICAgIGhpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgc2VsZWN0b3JzKTtcbiAgfSk7XG4gIGluYWN0aXZlU3VibWl0QnV0dG9uKGJ1dHRvblN1Ym1pdCwgc2VsZWN0b3JzKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmFjdGl2ZVN1Ym1pdEJ1dHRvbihidXR0b25TdWJtaXQsIHsgaW5hY3RpdmVCdXR0b25DbGFzcyB9KSB7XG4gIGJ1dHRvblN1Ym1pdC5jbGFzc0xpc3QuYWRkKGluYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICBidXR0b25TdWJtaXQuZGlzYWJsZWQgPSB0cnVlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2ZVN1Ym1pdEJ1dHRvbihidXR0b25TdWJtaXQsIHsgaW5hY3RpdmVCdXR0b25DbGFzcyB9KSB7XG4gIGJ1dHRvblN1Ym1pdC5jbGFzc0xpc3QucmVtb3ZlKGluYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICBidXR0b25TdWJtaXQuZGlzYWJsZWQgPSBmYWxzZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIGJ1dHRvblN1Ym1pdCwgc2VsZWN0b3JzKSB7XG4gIGlmIChoYXNJbnZhbGlkSW5wdXQoaW5wdXRMaXN0KSkge1xuICAgIGluYWN0aXZlU3VibWl0QnV0dG9uKGJ1dHRvblN1Ym1pdCwgc2VsZWN0b3JzKTtcbiAgfSBlbHNlIHtcbiAgICBhY3RpdmVTdWJtaXRCdXR0b24oYnV0dG9uU3VibWl0LCBzZWxlY3RvcnMpO1xuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0RXZlbnRMaXN0ZW5lcnMoZm9ybUVsZW1lbnQsIHNlbGVjdG9ycykge1xuICBjb25zdCBpbnB1dExpc3QgPSBBcnJheS5mcm9tKGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzLmlucHV0U2VsZWN0b3IpKTtcbiAgY29uc3QgYnV0dG9uU3VibWl0ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMuc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuICB0b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIGJ1dHRvblN1Ym1pdCwgc2VsZWN0b3JzKTtcbiAgaW5wdXRMaXN0LmZvckVhY2goZnVuY3Rpb24gKGlucHV0RWxlbWVudCkge1xuICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQsIHNlbGVjdG9ycyk7XG4gICAgICB0b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIGJ1dHRvblN1Ym1pdCwgc2VsZWN0b3JzKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlVmFsaWRhdGlvbihzZWxlY3RvcnMpIHtcbiAgY29uc3QgZm9ybUxpc3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzLmZvcm1TZWxlY3RvcikpO1xuICBmb3JtTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtRWxlbWVudCkge1xuICAgIHNldEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50LCBzZWxlY3RvcnMpO1xuICB9KTtcbn07IiwiaW1wb3J0ICcuLi9wYWdlcy9pbmRleC5jc3MnO1xuXG5pbXBvcnQge1xuICBwb3B1cEF2YXRhciwgcG9wdXBFZGl0LCBwb3B1cEFkZCwgcG9wdXBJbWFnZSxcbiAgcHJvZmlsZUF2YXRhciwgYnV0dG9uT3BlbkVkaXQsIGJ1dHRvbk9wZW5BZGQsXG4gIGZvcm1BdmF0YXIsIGZvcm1FZGl0LCBmb3JtQWRkLFxuICBpbnB1dEF2YXRhclVybCxcbiAgdXNlck5hbWUsIHVzZXJBYm91dCwgaW5wdXRVc2VyTmFtZSwgaW5wdXRVc2VyQWJvdXQsXG4gIGlucHV0UGxhY2VOYW1lLCBpbnB1dFBsYWNlVXJsLFxuICBidXR0b25DbG9zZUF2YXRhciwgYnV0dG9uQ2xvc2VBZGQsIGJ1dHRvbkNsb3NlRWRpdCwgYnV0dG9uQ2xvc2VJbWFnZSxcbiAgY2FyZHNDb250YWluZXJcbn0gZnJvbSAnLi92YXJpYWJsZXMuanMnO1xuLy8gaW1wb3J0IHsgaW5pdGlhbENhcmRzIH0gZnJvbSAnLi9kYXRhLmpzJztcbiBpbXBvcnQgeyBjcmVhdGVDYXJkIH0gZnJvbSAnLi9jYXJkLmpzJztcbmltcG9ydCB7IHJldmFsaWRhdGVGb3JtLCBlbmFibGVWYWxpZGF0aW9uIH0gZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5pbXBvcnQge1xuICBjbG9zZVBvcHVwLCBvcGVuUG9wdXAsXG4gIGNsb3NlUG9wdXBPdmVybGF5XG59IGZyb20gJy4vbW9kYWwuanMnO1xuaW1wb3J0IHtcbiAgZ2V0U2VydmVyVXNlckRhdGEsIGdldFNlcnZlckluaXRpYWxDYXJkcyxcbiAgcGF0Y2hVc2VyRGF0YSwgcGF0Y2hVc2VyQXZhdGFyLCBwb3N0TmV3Q2FyZCxcbiAgdXNlcklkXG59IGZyb20gJy4vYXBpLmpzJztcblxuY29uc3QgbWVzdG9TZWxlY3RvcnMgPSB7XG4gIGZvcm1TZWxlY3RvcjogJy5mb3JtJyxcbiAgaW5wdXRTZWxlY3RvcjogJy5mb3JtX19pbnB1dCcsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiAnLmZvcm1fX3N1Ym1pdC1idXR0b24nLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAnZm9ybV9fc3VibWl0LWJ1dHRvbl9pbmFjdGl2ZScsXG4gIGlucHV0RXJyb3JDbGFzczogJ2Zvcm1fX2lucHV0X3R5cGUtZXJyb3InLFxuICBlcnJvckNsYXNzOiAnZm9ybV9faW5wdXQtZXJyb3JfYWN0aXZlJyxcbn07XG5cbnByb2ZpbGVBdmF0YXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuUG9wdXBBdmF0YXIpO1xuYnV0dG9uT3BlbkVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuUG9wdXBFZGl0KTtcbmJ1dHRvbk9wZW5BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuUG9wdXBBZGQpO1xuLy9idXR0b25PcGVuRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblBvcHVwRGVsZXRlKTtcbmZvcm1BdmF0YXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc3VibWl0Rm9ybUF2YXRhcik7XG5mb3JtRWRpdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBzdWJtaXRGb3JtRWRpdCk7XG5mb3JtQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHN1Ym1pdEZvcm1BZGQpO1xuLy9mb3JtRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHN1Ym1pdEZvcm1EZWxldGUpO1xucG9wdXBBdmF0YXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBvcHVwT3ZlcmxheSk7XG5wb3B1cEVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBvcHVwT3ZlcmxheSk7XG5wb3B1cEFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUG9wdXBPdmVybGF5KTtcbnBvcHVwSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBvcHVwT3ZlcmxheSk7XG5cbmJ1dHRvbkNsb3NlQXZhdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBjbG9zZVBvcHVwKHBvcHVwQXZhdGFyKTtcbn0pO1xuYnV0dG9uQ2xvc2VFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBjbG9zZVBvcHVwKHBvcHVwRWRpdCk7XG59KTtcbmJ1dHRvbkNsb3NlQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBjbG9zZVBvcHVwKHBvcHVwQWRkKTtcbn0pO1xuYnV0dG9uQ2xvc2VJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgY2xvc2VQb3B1cChwb3B1cEltYWdlKTtcbn0pO1xuLy8gYnV0dG9uQ2xvc2VEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4vLyAgIGNsb3NlUG9wdXAocG9wdXBEZWxldGUpO1xuLy8gfSk7XG5cbmZ1bmN0aW9uIHN1Ym1pdEZvcm1BdmF0YXIoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgcGF0Y2hVc2VyQXZhdGFyKCk7XG4gIGNsb3NlUG9wdXAocG9wdXBBdmF0YXIpO1xufTtcblxuZnVuY3Rpb24gc3VibWl0Rm9ybUVkaXQoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgcGF0Y2hVc2VyRGF0YSgpO1xuICBjbG9zZVBvcHVwKHBvcHVwRWRpdCk7XG59O1xuXG5mdW5jdGlvbiBzdWJtaXRGb3JtQWRkKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHBvc3ROZXdDYXJkKCk7XG4gIGNsb3NlUG9wdXAocG9wdXBBZGQpO1xufTtcblxuZnVuY3Rpb24gb3BlblBvcHVwQXZhdGFyKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGlucHV0QXZhdGFyVXJsLnZhbHVlID0gJyc7XG4gIHJldmFsaWRhdGVGb3JtKGZvcm1BdmF0YXIsIG1lc3RvU2VsZWN0b3JzKTtcbiAgb3BlblBvcHVwKHBvcHVwQXZhdGFyKTtcbn07XG5cbmZ1bmN0aW9uIG9wZW5Qb3B1cEVkaXQoKSB7XG4gIGlucHV0VXNlck5hbWUudmFsdWUgPSB1c2VyTmFtZS50ZXh0Q29udGVudDtcbiAgaW5wdXRVc2VyQWJvdXQudmFsdWUgPSB1c2VyQWJvdXQudGV4dENvbnRlbnQ7XG4gIHJldmFsaWRhdGVGb3JtKGZvcm1FZGl0LCBtZXN0b1NlbGVjdG9ycyk7XG4gIG9wZW5Qb3B1cChwb3B1cEVkaXQpO1xufTtcblxuZnVuY3Rpb24gb3BlblBvcHVwQWRkKCkge1xuICBpbnB1dFBsYWNlTmFtZS52YWx1ZSA9ICcnO1xuICBpbnB1dFBsYWNlVXJsLnZhbHVlID0gJyc7XG4gIHJldmFsaWRhdGVGb3JtKGZvcm1BZGQsIG1lc3RvU2VsZWN0b3JzKTtcbiAgb3BlblBvcHVwKHBvcHVwQWRkKTtcbn07XG5cbmVuYWJsZVZhbGlkYXRpb24obWVzdG9TZWxlY3RvcnMpO1xuXG5cbmdldFNlcnZlclVzZXJEYXRhKCk7XG5nZXRTZXJ2ZXJJbml0aWFsQ2FyZHMoKTtcblxuLy8vLy8vLy8vLy8vL0FQSS8vLy8vLy8vLy8vLy9cbi8vIGV4cG9ydCBsZXQgdXNlcklkO1xuXG4vLyBQcm9taXNlLmFsbChbZ2V0U2VydmVyVXNlckRhdGEoKSwgZ2V0U2VydmVySW5pdGlhbENhcmRzKCldKVxuLy8gICAudGhlbigocmVzdWx0KSA9PiB7XG4vLyAgICAgdXNlcklkID0gcmVzdWx0Ll9pZDtcbi8vICAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IHJlc3VsdC5uYW1lO1xuLy8gICAgIHVzZXJBYm91dC50ZXh0Q29udGVudCA9IHJlc3VsdC5hYm91dDtcbi8vICAgICBwcm9maWxlQXZhdGFyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtyZXN1bHQuYXZhdGFyfSlgO1xuXG4gICAgXG4vLyAvLyAgICAgICDQm9Cw0LnQulxuXG4vLyAvLyAgICAgICDQmtCw0YDRgtC+0YfQutC4P1xuXG4vLyB9KVxuLy8gLmNhdGNoKChlcnIpID0+IHtcbi8vICAgY29uc29sZS5sb2coZXJyKTtcbi8vIH0pIl0sIm5hbWVzIjpbInBvcHVwQXZhdGFyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicG9wdXBFZGl0IiwicG9wdXBBZGQiLCJwb3B1cEltYWdlIiwicHJvZmlsZUF2YXRhciIsImJ1dHRvbk9wZW5FZGl0IiwiYnV0dG9uT3BlbkFkZCIsImZvcm1BdmF0YXIiLCJmb3JtRWRpdCIsImZvcm1BZGQiLCJpbnB1dEF2YXRhclVybCIsInVzZXJOYW1lIiwidXNlckFib3V0IiwiaW5wdXRVc2VyTmFtZSIsImlucHV0VXNlckFib3V0IiwiaW5wdXRQbGFjZU5hbWUiLCJpbnB1dFBsYWNlVXJsIiwiY2FyZHNDb250YWluZXIiLCJidXR0b25DbG9zZUF2YXRhciIsImJ1dHRvbkNsb3NlQWRkIiwiYnV0dG9uQ2xvc2VFZGl0IiwiYnV0dG9uQ2xvc2VJbWFnZSIsInBvcHVwSW1nIiwicG9wdXBUeHQiLCJ1c2VySWQiLCJjb25maWciLCJiYXNlVXJsIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJoYW5kbGVSZXNwb25zZSIsInJlcyIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJzdGF0dXMiLCJoYW5kbGVFcnJvciIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzYXZpbmdQb3B1cCIsInNhdmluZyIsInBvcHVwIiwidGV4dENvbnRlbnQiLCJnZXRTZXJ2ZXJVc2VyRGF0YSIsImZldGNoIiwidGhlbiIsInJlc3VsdCIsIl9pZCIsIm5hbWUiLCJhYm91dCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYXZhdGFyIiwiY2F0Y2giLCJjbG9zZVBvcHVwIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsb3NlUG9wdXBFc2MiLCJvcGVuUG9wdXAiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2VQb3B1cE92ZXJsYXkiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZXZlbnQiLCJrZXkiLCJjcmVhdGVDYXJkIiwiY2FyZCIsImNhcmROZXciLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiY2FyZEltYWdlIiwiY2FyZERlbGV0ZUJ1dHRvbiIsImNhcmRMaWtlQnV0dG9uIiwibGlrZUNvdW50ZXIiLCJzcmMiLCJsaW5rIiwiYWx0IiwiaWQiLCJsaWtlcyIsImxlbmd0aCIsImNvbnRhaW5zIiwiY2FyZElkIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXNsaWtlQ2FyZCIsIk51bWJlciIsImxpa2VDYXJkIiwibGlrZWRDYXJkIiwiaSIsImRlbGV0ZUNhcmQiLCJvd25lciIsImhpZGVJbnB1dEVycm9yIiwiaW5wdXRFbGVtZW50Iiwic2VsZWN0b3JzIiwiZm9ybUVycm9yIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsInJldmFsaWRhdGVGb3JtIiwiZm9ybUVsZW1lbnQiLCJpbnB1dExpc3QiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5wdXRTZWxlY3RvciIsImJ1dHRvblN1Ym1pdCIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiZm9yRWFjaCIsImluYWN0aXZlU3VibWl0QnV0dG9uIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImRpc2FibGVkIiwidG9nZ2xlQnV0dG9uU3RhdGUiLCJzb21lIiwidmFsaWRpdHkiLCJ2YWxpZCIsImhhc0ludmFsaWRJbnB1dCIsImFjdGl2ZVN1Ym1pdEJ1dHRvbiIsIm1lc3RvU2VsZWN0b3JzIiwiZm9ybVNlbGVjdG9yIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImZpbmFsbHkiLCJwcmVwZW5kIiwiZXJyb3JNZXNzYWdlIiwic2hvd0lucHV0RXJyb3IiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImNoZWNrSW5wdXRWYWxpZGl0eSIsInNldEV2ZW50TGlzdGVuZXJzIiwiYXBwZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==