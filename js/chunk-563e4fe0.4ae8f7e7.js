(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-563e4fe0"],{"1dde":function(t,e,c){var a=c("d039"),n=c("b622"),o=c("2d00"),l=n("species");t.exports=function(t){return o>=51||!a((function(){var e=[],c=e.constructor={};return c[l]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,c){var a=c("861d"),n=c("e8b5"),o=c("b622"),l=o("species");t.exports=function(t,e){var c;return n(t)&&(c=t.constructor,"function"!=typeof c||c!==Array&&!n(c.prototype)?a(c)&&(c=c[l],null===c&&(c=void 0)):c=void 0),new(void 0===c?Array:c)(0===e?0:e)}},8418:function(t,e,c){"use strict";var a=c("c04e"),n=c("9bf2"),o=c("5c6c");t.exports=function(t,e,c){var l=a(e);l in t?n.f(t,l,o(0,c)):t[l]=c}},"99af":function(t,e,c){"use strict";var a=c("23e7"),n=c("d039"),o=c("e8b5"),l=c("861d"),r=c("7b0b"),s=c("50c4"),u=c("8418"),i=c("65f0"),d=c("1dde"),f=c("b622"),b=c("2d00"),p=f("isConcatSpreadable"),m=9007199254740991,j="Maximum allowed index exceeded",O=b>=51||!n((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),h=d("concat"),v=function(t){if(!l(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},g=!O||!h;a({target:"Array",proto:!0,forced:g},{concat:function(t){var e,c,a,n,o,l=r(this),d=i(l,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(o=-1===e?l:arguments[e],v(o)){if(n=s(o.length),f+n>m)throw TypeError(j);for(c=0;c<n;c++,f++)c in o&&u(d,f,o[c])}else{if(f>=m)throw TypeError(j);u(d,f++,o)}return d.length=f,d}})},b789:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n=Object(a["e"])(" 購物車 "),o={class:"container"},l={class:"text-end"},r={class:"table align-middle"},s=Object(a["f"])("thead",null,[Object(a["f"])("tr",null,[Object(a["f"])("th"),Object(a["f"])("th",null,"品名"),Object(a["f"])("th",{style:{width:"150px"}},"數量/單位"),Object(a["f"])("th",null,"單價")])],-1),u=Object(a["f"])("div",{class:"text-success"}," 已套用優惠券 ",-1),i={class:"input-group input-group-sm"},d={class:"text-end"},f=Object(a["f"])("small",{class:"text-success"},"折扣價：",-1),b=Object(a["f"])("td",{colspan:"3",class:"text-end"},"總計",-1),p={class:"text-end"},m=Object(a["f"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),j={class:"text-end text-success"},O={class:"my-5 row justify-content-center"},h={class:"mb-3"},v=Object(a["f"])("label",{for:"email",class:"form-label"},"Email",-1),g={class:"mb-3"},y=Object(a["f"])("label",{for:"username",class:"form-label"},"收件人姓名",-1),x={class:"mb-3"},C=Object(a["f"])("label",{for:"phone",class:"form-label"},"收件人電話",-1),w={class:"mb-3"},V=Object(a["f"])("label",{for:"address",class:"form-label"},"收件人地址",-1),k=Object(a["f"])("div",{class:"mb-3"},[Object(a["f"])("label",{for:"message",class:"form-label"},"留言"),Object(a["f"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10"})],-1),A=Object(a["f"])("div",{class:"text-end"},[Object(a["f"])("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function P(t,e,c,P,q,U){var $=Object(a["w"])("Field"),z=Object(a["w"])("error-message"),S=Object(a["w"])("Form");return Object(a["r"])(),Object(a["d"])(a["a"],null,[n,Object(a["f"])("div",o,[Object(a["f"])("div",l,[Object(a["f"])("button",{class:"btn btn-outline-danger",type:"button",onClick:e[1]||(e[1]=function(){return U.delAllCartProduct&&U.delAllCartProduct.apply(U,arguments)})}," 清空購物車 ")]),Object(a["f"])("table",r,[s,Object(a["f"])("tbody",null,[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(q.cart.carts,(function(t){return Object(a["r"])(),Object(a["d"])("tr",{key:t},[Object(a["f"])("td",null,[Object(a["f"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:Object(a["H"])((function(e){return U.delCartProduct(t.id)}),["prevent"])}," x ",8,["onClick"])]),Object(a["f"])("td",null,[Object(a["e"])(Object(a["z"])(t.product.title)+" ",1),u]),Object(a["f"])("td",null,[Object(a["f"])("div",i,[Object(a["G"])(Object(a["f"])("input",{type:"number","onUpdate:modelValue":function(e){return t.qty=e},onBlur:Object(a["H"])((function(e){return U.updateCartProduct(t)}),["prevent"])},null,40,["onUpdate:modelValue","onBlur"]),[[a["C"],t.qty,void 0,{number:!0}]]),Object(a["e"])(" / "+Object(a["z"])(t.product.unit),1)])]),Object(a["f"])("td",d,[f,Object(a["e"])(" "+Object(a["z"])(t.final_total),1)])])})),128))]),Object(a["f"])("tfoot",null,[Object(a["f"])("tr",null,[b,Object(a["f"])("td",p,Object(a["z"])(q.cart.total),1)]),Object(a["f"])("tr",null,[m,Object(a["f"])("td",j,Object(a["z"])(q.cart.final_total),1)])])]),Object(a["f"])("div",O,[Object(a["f"])(S,{class:"col-md-6",onSubmit:Object(a["H"])(U.onSubmit,["prevent"])},{default:Object(a["F"])((function(t){var c=t.errors;return[Object(a["f"])("div",h,[v,Object(a["f"])($,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":c["email"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:q.user.email,"onUpdate:modelValue":e[2]||(e[2]=function(t){return q.user.email=t})},null,8,["class","modelValue"]),Object(a["f"])(z,{name:"email",class:"invalid-feedback"})]),Object(a["f"])("div",g,[y,Object(a["f"])($,{id:"username",name:"姓名",type:"text",class:["form-control",{"is-invalid":c["姓名"]}],placeholder:"請輸入收件人姓名",rules:"required",modelValue:q.user.username,"onUpdate:modelValue":e[3]||(e[3]=function(t){return q.user.username=t})},null,8,["class","modelValue"]),Object(a["f"])(z,{name:"姓名",class:"invalid-feedback"})]),Object(a["f"])("div",x,[C,Object(a["f"])($,{id:"phone",name:"電話",type:"tel",class:["form-control",{"is-invalid":c["電話"]}],placeholder:"請輸入收件人電話",rules:U.isPhone,modelValue:q.user.phone,"onUpdate:modelValue":e[4]||(e[4]=function(t){return q.user.phone=t})},null,8,["class","rules","modelValue"]),Object(a["f"])(z,{name:"電話",class:"invalid-feedback"})]),Object(a["f"])("div",w,[V,Object(a["f"])($,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":c["地址"]}],placeholder:"請輸入收件人地址",rules:"required",modelValue:q.user.address,"onUpdate:modelValue":e[5]||(e[5]=function(t){return q.user.address=t})},null,8,["class","modelValue"]),Object(a["f"])(z,{name:"地址",class:"invalid-feedback"})]),k,A]})),_:1},8,["onSubmit"])])])],64)}c("99af");var q={data:function(){return{cart:{},user:{email:"",username:"",phone:"",address:""}}},methods:{getCart:function(){var t=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("linvueportfolio","/cart")).then((function(e){e.data.success?t.cart=e.data.data:alert(e.data.message)})).catch((function(t){console.log(t)}))},updateCartProduct:function(t){var e=this;this.$http.put("".concat("https://vue3-course-api.hexschool.io/","api/").concat("linvueportfolio","/cart/").concat(t.id),{data:{product_id:t.id,qty:t.qty}}).then((function(t){t.data.success?(console.log(t.data.message),e.getCart()):alert(t.data.message)})).catch((function(t){console.log(t)}))},delCartProduct:function(t){var e=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io/","api/").concat("linvueportfolio","/cart/").concat(t)).then((function(t){t.data.success?(console.log(t.data.message),e.getCart()):alert(t.data.message)})).catch((function(t){console.log(t)}))},delAllCartProduct:function(){var t=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io/","api/").concat("linvueportfolio","/carts")).then((function(e){e.data.success?(console.log(e.data.message),t.getCart()):alert(e.data.message)})).catch((function(t){console.log(t)}))},isPhone:function(t){var e=/^(09)[0-9]{8}$/;return!!e.test(t)||"需要正確的電話號碼"},onSubmit:function(){var t=this;this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("linvueportfolio","/pay/:order_id")).then((function(e){e.data.success?(console.log(e.data.message),t.delAllCartProduct(),t.getCart()):alert(e.data.message)})).catch((function(t){console.log(t)}))}},created:function(){this.getCart()}};q.render=P;e["default"]=q},e8b5:function(t,e,c){var a=c("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}}}]);
//# sourceMappingURL=chunk-563e4fe0.4ae8f7e7.js.map