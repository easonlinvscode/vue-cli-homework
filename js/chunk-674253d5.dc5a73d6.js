(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-674253d5"],{"1dde":function(t,e,a){var c=a("d039"),n=a("b622"),o=a("2d00"),l=n("species");t.exports=function(t){return o>=51||!c((function(){var e=[],a=e.constructor={};return a[l]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"6be2":function(t,e,a){"use strict";var c=function(t){return{all:t=t||new Map,on:function(e,a){var c=t.get(e);c?c.push(a):t.set(e,[a])},off:function(e,a){var c=t.get(e);c&&(a?c.splice(c.indexOf(a)>>>0,1):t.set(e,[]))},emit:function(e,a){var c=t.get(e);c&&c.slice().map((function(t){t(a)})),(c=t.get("*"))&&c.slice().map((function(t){t(e,a)}))}}},n=c();e["a"]=n},8418:function(t,e,a){"use strict";var c=a("a04b"),n=a("9bf2"),o=a("5c6c");t.exports=function(t,e,a){var l=c(e);l in t?n.f(t,l,o(0,a)):t[l]=a}},"99af":function(t,e,a){"use strict";var c=a("23e7"),n=a("da84"),o=a("d039"),l=a("e8b5"),r=a("861d"),s=a("7b0b"),i=a("07fa"),u=a("8418"),d=a("65f0"),b=a("1dde"),h=a("b622"),m=a("2d00"),f=h("isConcatSpreadable"),O=9007199254740991,j="Maximum allowed index exceeded",p=n.TypeError,g=m>=51||!o((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),v=b("concat"),k=function(t){if(!r(t))return!1;var e=t[f];return void 0!==e?!!e:l(t)},x=!g||!v;c({target:"Array",proto:!0,forced:x},{concat:function(t){var e,a,c,n,o,l=s(this),r=d(l,0),b=0;for(e=-1,c=arguments.length;e<c;e++)if(o=-1===e?l:arguments[e],k(o)){if(n=i(o),b+n>O)throw p(j);for(a=0;a<n;a++,b++)a in o&&u(r,b,o[a])}else{if(b>=O)throw p(j);u(r,b++,o)}return r.length=b,r}})},b0c0:function(t,e,a){var c=a("83ab"),n=a("5e77").EXISTS,o=a("e330"),l=a("9bf2").f,r=Function.prototype,s=o(r.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=o(i.exec),d="name";c&&!n&&l(r,d,{configurable:!0,get:function(){try{return u(i,s(this))[1]}catch(t){return""}}})},cc55:function(t,e,a){"use strict";a.r(e);a("99af"),a("b0c0"),a("b64b");var c=a("7a23"),n=Object(c["h"])("h2",null,"購物車",-1),o={class:"container"},l={class:"mt-4"},r={class:"text-end"},s={class:"table align-middle"},i=Object(c["h"])("thead",null,[Object(c["h"])("tr",null,[Object(c["h"])("th"),Object(c["h"])("th",null,"品名"),Object(c["h"])("th",{style:{width:"150px"}},"數量/單位"),Object(c["h"])("th",null,"單價")])],-1),u=["onClick","disabled"],d={class:"input-group input-group-sm"},b={class:"input-group mb-3"},h=["onUpdate:modelValue","onChange","disabled"],m=["value"],f={class:"input-group-text",id:"basic-addon2"},O={class:"text-end"},j=Object(c["h"])("h1",null,"尚未有商品加入",-1),p=[j],g=Object(c["h"])("td",{colspan:"3",class:"text-end"},"總計",-1),v={class:"text-end"},k={class:"my-5 row justify-content-center"},x={class:"mb-3"},y=Object(c["h"])("label",{for:"email",class:"form-label"},"Email",-1),C={class:"mb-3"},V=Object(c["h"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),S={class:"mb-3"},w=Object(c["h"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),I={class:"mb-3"},q=Object(c["h"])("label",{for:"address",class:"form-label"},"收件人地址",-1),D={class:"mb-3"},M=Object(c["h"])("label",{for:"message",class:"form-label"},"留言",-1),L={class:"text-end"},U=["disabled"];function $(t,e,a,j,$,J){var z=Object(c["J"])("Loading"),E=Object(c["J"])("Field"),A=Object(c["J"])("ErrorMessage"),F=Object(c["J"])("Form");return Object(c["z"])(),Object(c["g"])(c["a"],null,[Object(c["h"])("div",null,[n,Object(c["k"])(z,{active:$.isLoading},null,8,["active"])]),Object(c["h"])("div",o,[Object(c["h"])("div",l,[Object(c["W"])(Object(c["h"])("div",r,[Object(c["h"])("button",{class:"btn btn-outline-danger",type:"button",onClick:e[0]||(e[0]=function(){return J.removerCartAll&&J.removerCartAll.apply(J,arguments)})}," 清空購物車 ")],512),[[c["R"],0!==$.cartData.carts.length]]),Object(c["h"])("table",s,[i,Object(c["h"])("tbody",null,[$.cartData.carts?(Object(c["z"])(),Object(c["g"])(c["a"],{key:0},[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["H"])($.cartData.carts,(function(t){return Object(c["z"])(),Object(c["g"])("tr",{key:t.id},[Object(c["h"])("td",null,[Object(c["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return J.removerCartItem(t.id)},disabled:$.loadingStatus.loadingItem===t.id}," x ",8,u)]),Object(c["h"])("td",null,Object(c["M"])(t.product.title),1),Object(c["h"])("td",null,[Object(c["h"])("div",d,[Object(c["h"])("div",b,[Object(c["W"])(Object(c["h"])("select",{id:"",class:"form-select","onUpdate:modelValue":function(e){return t.qty=e},onChange:function(e){return J.updateCartItem(t)},disabled:$.loadingStatus.loadingItem===t.id},[(Object(c["z"])(),Object(c["g"])(c["a"],null,Object(c["H"])(20,(function(e){return Object(c["h"])("option",{key:"".concat(e,"-").concat(t.id),value:e},Object(c["M"])(e),9,m)})),64))],40,h),[[c["P"],t.qty]]),Object(c["h"])("span",f,Object(c["M"])(t.product.unit),1)])])]),Object(c["h"])("td",O,Object(c["M"])(t.product.price),1)])})),128)),Object(c["W"])(Object(c["h"])("div",null,p,512),[[c["R"],0===$.cartData.carts.length]])],64)):Object(c["f"])("",!0)]),Object(c["h"])("tfoot",null,[Object(c["h"])("tr",null,[g,Object(c["h"])("td",v,Object(c["M"])($.cartData.total),1)])])])]),Object(c["h"])("div",k,[Object(c["k"])(F,{ref:"form",class:"col-md-6",onSubmit:J.createOrder},{default:Object(c["V"])((function(t){var a=t.errors;return[Object(c["h"])("div",x,[y,Object(c["k"])(E,{id:"email",name:"email",type:"email",class:Object(c["s"])(["form-control",{"is-invalid":a["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:$.form.user.email,"onUpdate:modelValue":e[1]||(e[1]=function(t){return $.form.user.email=t})},null,8,["class","modelValue"]),Object(c["k"])(A,{name:"email",class:"invalid-feedback"})]),Object(c["h"])("div",C,[V,Object(c["k"])(E,{id:"name",name:"姓名",type:"text",class:Object(c["s"])(["form-control",{"is-invalid":a["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:$.form.user.name,"onUpdate:modelValue":e[2]||(e[2]=function(t){return $.form.user.name=t})},null,8,["class","modelValue"]),Object(c["k"])(A,{name:"姓名",class:"invalid-feedback"})]),Object(c["h"])("div",S,[w,Object(c["k"])(E,{id:"tel",name:"電話",type:"text",class:Object(c["s"])(["form-control",{"is-invalid":a["電話"]}]),placeholder:"請輸入電話",rules:"required",modelValue:$.form.user.tel,"onUpdate:modelValue":e[3]||(e[3]=function(t){return $.form.user.tel=t})},null,8,["class","modelValue"]),Object(c["k"])(A,{name:"電話",class:"invalid-feedback"})]),Object(c["h"])("div",I,[q,Object(c["k"])(E,{id:"address",name:"地址",type:"text",class:Object(c["s"])(["form-control",{"is-invalid":a["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:$.form.user.address,"onUpdate:modelValue":e[4]||(e[4]=function(t){return $.form.user.address=t})},null,8,["class","modelValue"]),Object(c["k"])(A,{name:"地址",class:"invalid-feedback"})]),Object(c["h"])("div",D,[M,Object(c["W"])(Object(c["h"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":e[5]||(e[5]=function(t){return $.form.message=t})},null,512),[[c["Q"],$.form.message]])]),Object(c["h"])("div",L,[Object(c["h"])("button",{type:"submit",class:"btn btn-danger",disabled:Object.keys(a).length>0||0===$.cartData.carts.length},"送出訂單",8,U)])]})),_:1},8,["onSubmit"])])])],64)}var J=a("6be2"),z={data:function(){return{cartData:{carts:[]},products:[],loadingStatus:{loadingItem:""},isLoading:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getProducts:function(){var t=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("vue-cake","/products/all")).then((function(e){t.products=e.data.products}))},getCart:function(){var t=this;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("vue-cake","/cart")).then((function(e){t.isLoading=!1,t.cartData=e.data.data}))},removerCartItem:function(t){var e=this;this.loadingStatus.loadingItem=t,this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("vue-cake","/cart/").concat(t)).then((function(){e.getCart(),e.loadingStatus.loadingItem="",J["a"].emit("get-cart")}))},removerCartAll:function(){var t=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("vue-cake","/carts")).then((function(){t.getCart(),J["a"].emit("get-cart")}))},updateCartItem:function(t){var e=this,a={product_id:t.id,qty:t.qty};this.loadingStatus.loadingItem=t.id,this.$http.put("".concat("https://vue3-course-api.hexschool.io","/api/").concat("vue-cake","/cart/").concat(t.id),{data:a}).then((function(){e.getCart(),e.loadingStatus.loadingItem=""})).catch((function(){e.loadingStatus.loadingItem=""}))},createOrder:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("vue-cake","/order"),a=this.form;this.$http.post(e,{data:a}).then((function(e){console.console.log(e.data.message),t.$refs.form.resetForm(),t.isLoading=!1})).catch((function(t){console.console.log(t.data.message)}))}},mounted:function(){this.getProducts(),this.getCart()}},E=a("6b0d"),A=a.n(E);const F=A()(z,[["render",$]]);e["default"]=F}}]);
//# sourceMappingURL=chunk-674253d5.dc5a73d6.js.map