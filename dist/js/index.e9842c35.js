(function(e){function a(a){for(var i,r,l=a[0],u=a[1],d=a[2],c=0,s=[];c<l.length;c++)r=l[c],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&s.push(n[r][0]),n[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);m&&m(a);while(s.length)s.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],i=!0,r=1;r<t.length;r++){var l=t[r];0!==n[l]&&(i=!1)}i&&(o.splice(a--,1),e=u(u.s=t[0]))}return e}var i={},r={index:0},n={index:0},o=[];function l(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"60505145"}[e]+".js"}function u(a){if(i[a])return i[a].exports;var t=i[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var a=[],t={about:1};r[e]?a.push(r[e]):0!==r[e]&&t[e]&&a.push(r[e]=new Promise((function(a,t){for(var i="css/"+({about:"about"}[e]||e)+"."+{about:"5653c7ca"}[e]+".css",n=u.p+i,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var d=o[l],c=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(c===i||c===n))return a()}var s=document.getElementsByTagName("style");for(l=0;l<s.length;l++){d=s[l],c=d.getAttribute("data-href");if(c===i||c===n)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var i=a&&a.target&&a.target.src||n,o=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete r[e],m.parentNode.removeChild(m),t(o)},m.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){r[e]=0})));var i=n[e];if(0!==i)if(i)a.push(i[2]);else{var o=new Promise((function(a,t){i=n[e]=[a,t]}));a.push(i[2]=o);var d,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=l(e);var s=new Error;d=function(a){c.onerror=c.onload=null,clearTimeout(m);var t=n[e];if(0!==t){if(t){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,t[1](s)}n[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:c})}),12e4);c.onerror=c.onload=d,document.head.appendChild(c)}return Promise.all(a)},u.m=e,u.c=i,u.d=function(e,a,t){u.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,a){if(1&a&&(e=u(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)u.d(t,i,function(a){return e[a]}.bind(null,i));return t},u.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(a,"a",a),a},u.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},u.p="/estbike/",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=a,d=d.slice();for(var s=0;s<d.length;s++)a(d[s]);var m=c;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"188c":function(e){e.exports=JSON.parse('["Tip Motor","Consum*","Emisii CO2*","Alezaj × Cursă","Cutie de viteze","Putere","Cuplu maxim","Lungime","Lățime","Înălțime","Ampatament","Garda la sol","Faţă Suspensie","Spate Suspensie","Faţă Frână","Spate Frână","Faţă Cauciuc","Spate Cauciuc"]')},"1c82":function(e,a,t){"use strict";t("7036")},"1ee9":function(e,a,t){"use strict";t("c3db")},"25f1":function(e,a,t){"use strict";t("6fd3")},"4ec5":function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAfCAYAAADwbH0HAAAACXBIWXMAAAsTAAALEwEAmpwYAAACc0lEQVRIibWXP2hTURSHvz6RKJUs2k26dOkgdHCwQ4eAFByEjpEuhU7duoiLm4uLi24Fh25OHdzq1qGbRclULHSq0EGEDhUjQj+He555pC+veU1y4ZA/99z75Zzzu+e+TKn0jQbQBH4CF/2T4xpZCfQ58AV4NikoAGpumfrKNM7D2oX5sVrxw4uAflTX1CO1q65MErwe0H11Lr5rqaeTihx1Xj1TDwpQCvCTiHx13OCXV6R0IpGj7kZU9yscW5GVsyjLyOAMuBcC/1Mh/j3gKfAXeAdsjHqaMuA83jeu8N0HngC/gTdAe1TwN+AWcH8I/9vAzXh/YxQwIRhDZFV1adlrLJvjENdsiOZQbQ5wbKqdUP/GuFRdbJWDon4Y83vjgOaqvgDeA99Jap0rqciveL0DTI9U20KN86jXIqoP6nTfL2zE96pbFSWpleqyzTdLnGcj1arb6syATbPYa2hwvnnHJLaVAfCdgO+UwJum221PXaoDRl1Wf4QtlMzPFDKza+9iyaH5OFQX64Az003UjcX9N1YO2SoA3kamNB23dmGuFD4oFVls0I0N50t8psPn2NRUDgKYxXw71h+Xpf0q9W3GpocD0p6nfs7LJyGHnwd8sQ64CD+qqlmFrZXBh128bu8+LqZzWFuNtSc5vM7idizU1FrrNpEV05PMobpUN20tk4g0Haky0VVZ3gO264IxCSk/x52o4bBaObtuxLk17T2Hd03nuOy8Y9LD6/D9L9DrgvMNl+01jqOIaiF+xLyprnk365iu11qqrrKZQkRdU6s9tfdIrCV6mNJL/xavMxrAA+Ax8Ai4C3SBr8An4DO9Ox2Af/hzCAKbQzChAAAAAElFTkSuQmCC"},"56d7":function(e,a,t){"use strict";t.r(a);var i=t("2b0e"),r=function(){var e=this,a=e._self._c;return a("div",{attrs:{id:"app"}},[a("Header"),a("div",{style:{left:e.menuPos+"%"},attrs:{id:"mobile-menu-container"}},[a("nav",{on:{click:function(a){return e.toggleMenu()}}},[a("router-link",{attrs:{to:"/"}},[e._v("Acasă")]),a("router-link",{attrs:{to:"/models"}},[e._v("Modele")]),a("router-link",{attrs:{to:"/about"}},[e._v("Despre noi")]),a("router-link",{attrs:{to:"/contact"}},[e._v("Contact")]),a("router-link",{attrs:{to:"/rabla"}},[e._v("Rabla")]),a("router-link",{attrs:{to:"/service"}},[e._v("Service")])],1)]),a("main",[a("router-view")],1),a("Footer"),a("preloader"),a("button",{attrs:{id:"scroll-to-top"},on:{click:function(a){return e.scrollToTop()}}},[a("div",{staticClass:"top-icon"})])],1)},n=[],o=function(){var e=this,a=e._self._c;return a("footer",[a("div",{attrs:{id:"footer-container"}},[a("div",{staticClass:"footer-wrapper"},[a("img",{attrs:{src:t("fdc3"),alt:"Logo EstBike"}}),a("p",{staticClass:"footer-about"},[e._v(" EST BIKE reprezinta pasiunea imensa pentru motociclete si ATV-uri concretizata intr-un magazin de motociclete si ATV, echipamente si accesorii. Proiectul a fost inceput in primavara... ")]),a("router-link",{attrs:{to:"/about"}},[e._v("cititi mai mult...")])],1),e._m(0),a("div",{staticClass:"footer-wrapper"},[a("div",{staticClass:"footer-info"},[a("router-link",{attrs:{to:"/"}},[e._v("Acasă")])],1),a("div",{staticClass:"footer-info"},[a("router-link",{attrs:{to:"/models"}},[e._v("Modele")])],1),a("div",{staticClass:"footer-info"},[a("router-link",{attrs:{to:"/about"}},[e._v("Despre noi")])],1),a("div",{staticClass:"footer-info"},[a("router-link",{attrs:{to:"/contact"}},[e._v("Contact")])],1),a("div",{staticClass:"footer-info"},[a("router-link",{attrs:{to:"/rabla"}},[e._v("Rabla")])],1),a("div",{staticClass:"footer-info"},[a("router-link",{attrs:{to:"/service"}},[e._v("Service")])],1)])])])},l=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"footer-wrapper"},[a("div",{staticClass:"footer-info"},[a("div",{staticClass:"footer-info-title"},[e._v("ADRESA:")]),a("div",{staticClass:"footer-info-content"},[e._v("Strada Medeea 1A, Contanta")])]),a("div",{staticClass:"footer-info"},[a("div",{staticClass:"footer-info-title"},[e._v("TELEFON:")]),a("div",{staticClass:"footer-info-content"},[e._v("0733 782 453")])]),a("div",{staticClass:"footer-info"},[a("div",{staticClass:"footer-info-title"},[e._v("EMAIL:")]),a("div",{staticClass:"footer-info-content"},[a("a",{attrs:{href:"mailto:office@estbike.ro"}},[e._v("office@estbike.ro")])])]),a("div",{staticClass:"footer-info"},[a("div",{staticClass:"footer-info-title"},[e._v("PROGRAM LUCRU/PROGRAMARI:")]),a("div",{staticClass:"footer-info-content"},[e._v(" Luni - Vineri / 9:00 AM - 6:00 PM ")])])])}],u={},d=u,c=(t("1ee9"),t("2877")),s=Object(c["a"])(d,o,l,!1,null,null,null),m=s.exports,p=function(){var e=this,a=e._self._c;return a("header",[a("div",{staticClass:"desktop-logo",attrs:{id:"logo-container"}},[a("img",{attrs:{src:t("fdc3"),alt:"Logo EstBike"}})]),a("div",{attrs:{id:"header-container"}},[a("div",{attrs:{id:"phone-container"}},[a("img",{attrs:{src:t("4ec5"),alt:"Logo EstBike"}}),e._m(0)]),a("nav",[a("router-link",{attrs:{to:"/"}},[e._v("Acasă")]),a("router-link",{attrs:{to:"/models"}},[e._v("Modele")]),a("router-link",{attrs:{to:"/about"}},[e._v("Despre noi")]),a("router-link",{attrs:{to:"/contact"}},[e._v("Contact")]),a("router-link",{attrs:{to:"/rabla"}},[e._v("Rabla")]),a("router-link",{attrs:{to:"/service"}},[e._v("Service")])],1),e._m(1)]),a("div",{attrs:{id:"mobile-header"}},[a("div",{attrs:{id:"mobile-menu-button"},on:{click:function(a){return e.toggleMenu()}}},[a("img",{attrs:{src:t("869f")}})]),a("div",{staticClass:"mobile-logo",attrs:{id:"logo-container"}},[a("img",{attrs:{src:t("fdc3"),alt:"Logo EstBike"}})]),e._m(2)])])},g=[function(){var e=this,a=e._self._c;return a("div",{attrs:{id:"phone-number-container"}},[a("div",{attrs:{id:"phone-number-title"}},[e._v("Telefon")]),a("div",{attrs:{id:"phone-number"}},[e._v("0733 782 453")])])},function(){var e=this,a=e._self._c;return a("div",{attrs:{id:"header-decoration"}},[a("div",{attrs:{id:"top-decoration"}}),a("div",{attrs:{id:"top-decoration-shadow"}}),a("div",{attrs:{id:"bottom-decoration"}}),a("div",{attrs:{id:"bottom-decoration-shadow"}})])},function(){var e=this,a=e._self._c;return a("div",{attrs:{id:"phone-number-container"}},[a("div",{attrs:{id:"phone-number"}},[e._v("+40 0733 782 453")])])}],f={methods:{toggleMenu(){window.EventBus.dispatch("showmenu")}}},v=f,h=(t("1c82"),Object(c["a"])(v,p,g,!1,null,null,null)),_=h.exports,b=function(){var e=this,a=e._self._c;return e.isVisible?a("div",{attrs:{id:"preloader"}},[a("div",{attrs:{id:"preload-content"}},[a("div",{attrs:{id:"preload-logo"}},[a("img",{attrs:{src:t("fdc3"),alt:"Logo EstBike"}})]),e._m(0)])]):e._e()},C=[function(){var e=this,a=e._self._c;return a("div",{attrs:{id:"spinner-container"}},[a("div",{attrs:{id:"pulsing-spinner"}}),a("div",{attrs:{id:"first-spinner"}}),a("div",{attrs:{id:"second-spinner"}})])}],A={data(){return{isVisible:!1}},mounted(){let e=this;window.EventBus.listen("showpreloader",(function(){e.isVisible=!0,setTimeout(()=>{e.isVisible=!1;let a=document.getElementsByTagName("body")[0];a.style.overflow="initial"},1e3)}))}},S=A,M=(t("25f1"),Object(c["a"])(S,b,C,!1,null,null,null)),j=M.exports,R={components:{Header:_,Footer:m,Preloader:j},data(){return{menuPos:-100}},mounted(){let e=this,a=document.getElementsByTagName("header")[0];window.EventBus.listen("sectionnothome",(function(){a.classList.add("wide-header")})),window.EventBus.listen("sectionishome",(function(){a.classList.remove("wide-header")})),window.EventBus.listen("showpreloader",(function(){let e=document.getElementsByTagName("body")[0];e.style.overflow="hidden"})),window.EventBus.listen("showmenu",(function(){e.toggleMenu()}))},methods:{toggleMenu(){-100===this.menuPos?this.menuPos=0:this.menuPos=-100},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}},P=R,T=(t("f249"),Object(c["a"])(P,r,n,!1,null,null,null)),k=T.exports,E=t("8c4f");const x=[{path:"/",name:"Home",component:()=>t.e("about").then(t.bind(null,"bb51"))},{path:"/about",name:"About",component:()=>t.e("about").then(t.bind(null,"f820"))},{path:"/models",name:"Models",component:()=>t.e("about").then(t.bind(null,"cda7"))},{path:"/contact",name:"Contact",component:()=>t.e("about").then(t.bind(null,"b8fa"))},{path:"/rabla",name:"Rabla",component:()=>t.e("about").then(t.bind(null,"4a88"))},{path:"/service",name:"Service",component:()=>t.e("about").then(t.bind(null,"e2f8"))},{path:"/model",name:"Model",component:()=>t.e("about").then(t.bind(null,"b679"))},{path:"/dev",name:"Dev",component:()=>t.e("about").then(t.bind(null,"4409"))}];var Y=x;i["default"].use(E["a"]);const y=new E["a"]({routes:Y});y.beforeEach((e,a,t)=>{window.scrollTo({top:0,behavior:"smooth"}),"/"!==e.path?window.EventBus.dispatch("sectionnothome"):window.EventBus.dispatch("sectionishome"),window.EventBus.dispatch("showpreloader"),t()});var L=y,I=t("2f62"),N=t("aadf"),O=t("188c"),z=t("6970");i["default"].use(I["a"]);var D=new I["a"].Store({state:{moto:N,popular:z,isChrome:navigator.userAgent.indexOf("Chrome")>-1,isFirefox:navigator.userAgent.indexOf("Firefox")>-1,selectedModel:{},activeBrand:"honda",activeCategory:"",details:O},mutations:{selectModel(e,a){e.selectedModel=a},selectBrand(e,a){e.activeBrand=a},selectCategory(e,a){e.activeCategory=a}},actions:{},modules:{}}),w=t("be33"),X=t("ad3d"),U=t("4ab5"),B=t("11ca");class G{constructor(){this.vue=new i["default"]}dispatch(e,a=null){this.vue.$emit(e,a)}listen(e,a){this.vue.$on(e,a)}}var V=G,F=t("5f5b"),H=t("b1e0"),Z=(t("f9e3"),t("2dd8"),t("9001"));w["c"].add(U["a"],U["b"],B["a"],B["b"]),i["default"].component("font-awesome-icon",X["a"]),i["default"].use(F["a"]),i["default"].use(Z["a"]),i["default"].use(H["a"]),i["default"].config.productionTip=!1,window.EventBus=new V,new i["default"]({router:L,store:D,render:e=>e(k)}).$mount("#app")},6528:function(e,a,t){},6970:function(e){e.exports=JSON.parse('[{"name":"Africa Twin","brand":"honda","category":"adventure","description":"Africa Twin este proiectată pentru a depăși limitele. Oferă manevrare precisă și agilă în off-road, fie că vorbim despre un drum forestier de viteză, sau o urcare pe un drum stâncos.","price":"14950","technical":[{"detail":"Putere","data":"102CP"},{"detail":"Înălțime șa","data":"850/870 mm"},{"detail":"Consum mixt","data":"4.9 L/100km"},{"detail":"Volum rezervor","data":"18.8 l"}],"thumbnail":"Africa-details-bike-image-300x225.png","img":["22YM_AFRICA_TWIN_L1_LOCATION_2652-1024x768.jpg","22YM_AFRICA_TWIN_L1_LOCATION_2786-1024x768.jpg","22YM_AFRICA_TWIN_L1_LOCATION_9901-1024x768.jpg"]},{"name":"Adventure Sports","brand":"honda","category":"adventure","description":"Privește către un nou orizont și către un nou cer senin. Pentru asta am construit noua Africa Twin Adventure Sports - pregătită să cutreiere lumea cu tehnologie avansată și dotări premium.","price":"19350","technical":[{"detail":"Putere","data":"102CP"},{"detail":"Înălțime șa","data":"850/870 mm"},{"detail":"Consum mixt","data":"4.9 L/100km"},{"detail":"Volum rezervor","data":"24.8 l"}],"thumbnail":"Africa-Adventure-Details-11-300x225.png","img":["22YM_AFRICA_TWIN_L4_LOCATION_2095-1024x768.jpg","22YM_AFRICA_TWIN_L4_LOCATION_6078-1024x768.jpg","22YM_AFRICA_TWIN_L4_LOCATION_8464-1024x768.jpg"]},{"name":"NC 750 X","brand":"honda","category":"adventure","description":"Noul NC750X este pregătit pentru orice aventură. Fie că mergi în oraș sau la drum lung, cutia automată cu dublu ambreiaj DCT iți va oferi tot confortul de care ai nevoie.","price":"8950","technical":[{"detail":"Putere","data":"58CP"},{"detail":"Înălțime șa","data":"800 mm"},{"detail":"Consum mixt","data":"3.5 L/100km"},{"detail":"Volum rezervor","data":"14.1 l"}],"thumbnail":"NC750X-23YM-300x165.png","img":["21YM_NC750X_Grand_Prix_Red_R-380_Headlight_On_High-1024x576.jpg","21YM_NC750X_Grand_Prix_Red_R-380_Logo-1024x576.jpg","21YM_NC750X_Grand_Prix_Red_R-380_Tank-1024x576.jpg"]}]')},"6fd3":function(e,a,t){},7036:function(e,a,t){},"869f":function(e,a,t){e.exports=t.p+"img/menu.9bc5c980.svg"},aadf:function(e){e.exports=JSON.parse('[{"name":"Africa Twin","brand":"honda","category":"adventure","description":"Africa Twin este proiectată pentru a depăși limitele. Oferă manevrare precisă și agilă în off-road, fie că vorbim despre un drum forestier de viteză, sau o urcare pe un drum stâncos.","price":"14950","technical":[{"detail":"Putere","data":"102CP"},{"detail":"Înălțime șa","data":"850/870 mm"},{"detail":"Consum","data":"4.9 L/100km"},{"detail":"Volum rezervor","data":"18.8 l"}],"thumbnail":"Africa-details-bike-image-300x225.png","mainImage":"africa-twin-main.png","img":["22YM_AFRICA_TWIN_L1_LOCATION_2652-1024x768.jpg","22YM_AFRICA_TWIN_L1_LOCATION_2786-1024x768.jpg","22YM_AFRICA_TWIN_L1_LOCATION_9901-1024x768.jpg"]},{"name":"Adventure Sports","brand":"honda","category":"adventure","description":"Privește către un nou orizont și către un nou cer senin. Pentru asta am construit noua Africa Twin Adventure Sports - pregătită să cutreiere lumea cu tehnologie avansată și dotări premium.","price":"19350","technical":[{"detail":"Putere","data":"102CP"},{"detail":"Înălțime șa","data":"850/870 mm"},{"detail":"Consum","data":"4.9 L/100km"},{"detail":"Volum rezervor","data":"24.8 l"}],"thumbnail":"Africa-Adventure-Details-11-300x225.png","mainImage":"adventure-sports-main.png","img":["22YM_AFRICA_TWIN_L4_LOCATION_2095-1024x768.jpg","22YM_AFRICA_TWIN_L4_LOCATION_6078-1024x768.jpg","22YM_AFRICA_TWIN_L4_LOCATION_8464-1024x768.jpg"]},{"name":"NC 750 X","brand":"honda","category":"adventure","description":"Noul NC750X este pregătit pentru orice aventură. Fie că mergi în oraș sau la drum lung, cutia automată cu dublu ambreiaj DCT iți va oferi tot confortul de care ai nevoie.","price":"8950","technical":[{"detail":"Putere","data":"58CP"},{"detail":"Înălțime șa","data":"800 mm"},{"detail":"Consum","data":"3.5 L/100km"},{"detail":"Volum rezervor","data":"14.1 l"}],"thumbnail":"NC750X-23YM-300x165.png","mainImage":"nc-main.png","img":["21YM_NC750X_Grand_Prix_Red_R-380_Headlight_On_High-1024x576.jpg","21YM_NC750X_Grand_Prix_Red_R-380_Logo-1024x576.jpg","21YM_NC750X_Grand_Prix_Red_R-380_Tank-1024x576.jpg"]},{"name":"X-ADV","brand":"honda","category":"adventure","description":"Combinând performanțele unei motociclete adventure, cu confortul unui scuter de cilindree mare, este un SUV cu două roți care sfidează convențiile. Un explorator urban premium, capabil să treacă de asfaltul orașului, la un traseu off-road (și înapoi) într-o clipă, X-ADV transformă fiecare călătorie într-o experiență unică.","price":"13250","technical":[{"detail":"Putere","data":"58.6CP"},{"detail":"Înălțime șa","data":"820 mm"},{"detail":"Consum","data":"3.6 L/100km"},{"detail":"Volum rezervor","data":"13.2 l"}],"thumbnail":"XADV23YM-300x165.png","mainImage":"xadv-main.png","img":["21YM_X-ADV_PEARL_MUD_GRAY_NH-C47P_HEADLIGHT_ON_HIGH-1024x576.jpg","21YM_X-ADV_PEARL_MUD_GRAY_NH-C47P_WINDSCREEN_HIGH-1024x576.jpg","21YM_X-ADV_PEARL_MUD_GRAY_NH-C47P_SEAT-1024x576.jpg"]},{"name":"CB1000R BLACK EDITION","brand":"honda","category":"naked","description":"Ochii tăi trebuie să se adapteze. În afară de câteva detalii din aluminiu, întreaga motocicletă este învăluită de un negru intens.","price":"15390","technical":[{"detail":"Putere","data":"145.5 CP "},{"detail":"Înălțime șa","data":"830 mm"},{"detail":"Consum","data":"5.8 L/100km"},{"detail":"Volum rezervor","data":"16.2 l"}],"thumbnail":"Bike-Image-CB1000R-Black-Edition-09-300x213.png","mainImage":"cbr1000black-main.png","img":["CB1000R_Black_gallery-13.jpg","CB1000R_Black_gallery-11.jpg","CB1000R_Black_gallery-16-16.jpg"]},{"name":"CB 1000 R","brand":"honda","category":"naked","description":"Compactă și musculară, atrage atenția prin finisajele metalice mate care reflectă tradiția unui Café Racer cu design minimalist „Neo Sports Café”.","price":"14150","technical":[{"detail":"Putere","data":"145.5 CP "},{"detail":"Înălțime șa","data":"830 mm"},{"detail":"Consum","data":"6.0 L/100km"},{"detail":"Volum rezervor","data":"16.2 l"}],"thumbnail":"21YM_CB1000_CANDY_CHROMOSPHERE_RED_R-381C_RHS_LAYERED-2-300x225.jpg","mainImage":"cbr1000-main.png","img":["CB-1000-R-1.jpg","CB-1000-R-2.jpg","21YM_CB1000_CANDY_CHROMOSPHERE_RED_R-381C_ENGINE.jpg"]},{"name":"CB 650 R","brand":"honda","category":"naked","description":"Fiecare zi este o călatorie. Începe ziua cu noul CB650R. Stilul Neo Sports Café este gata sa te conducă într-o aventură urbană de neuitat.","price":"8750","technical":[{"detail":"Putere","data":"95.2 CP"},{"detail":"Înălțime șa","data":"810 mm"},{"detail":"Consum","data":"4.9 L/100km"},{"detail":"Volum rezervor","data":"15.4 l"}],"thumbnail":"23YM_CB650R_CANDY_CHROMOSPHERE_RED_R381_RHS-300x225.jpg","mainImage":"cb650r-main.png","img":["19YM_CB650R_9140.jpg","19YM_CB650R_9280_Engine.jpg","19YM_CB650R_9141.jpg"]},{"name":"CB 750 Hornet","brand":"honda","category":"naked","description":"Este timpul ca o nouă generație de rideri să își lase amprenta. Cu un motor nou și puternic, un cadru gândit pentru sportivitate și stilul streetfighter inconfundabil, noul CB750 Hornet va întoarce toate privirile.","price":"8450","technical":[{"detail":"Putere","data":"91.8 CP"},{"detail":"Înălțime șa","data":"795 mm"},{"detail":"Consum","data":"4.35 L/100km"},{"detail":"Volum rezervor","data":"15.2 l"}],"thumbnail":"CB750-Hornet-4-3-300x225.png","mainImage":"cb750hornet-main.jpg","img":["415772_23YM_HONDA_CB750_HORNET-2000x1333.jpg","415690_23YM_HONDA_CB750_HORNET-2000x1500.jpg","415746_23YM_HONDA_CB750_HORNET-2000x1333.jpg"]},{"name":"R6 Race","brand":"yamaha","category":"supersport","description":"Aceasta este cea mai bună motocicletă Supersport de 600 cmc, care domină cursele WorldSSP de ani de zile. La fel ca toate modelele din seria R, a fost dezvoltată fără compromisuri pentru a atinge cele mai înalte niveluri de performanță.","price":"14050","technical":[{"detail":"Putere","data":"108CP"},{"detail":"Înălțime șa","data":"850 mm"},{"detail":"Consum","data":"6.6 L/100km"},{"detail":"Volum rezervor","data":"17 l"}],"thumbnail":"2022-Yamaha-YZF600R6RCOMP-EU-Tech_Black-Studio-001-03_Mobile.jpg","mainImage":"r6-main.jpg","img":["2022-Yamaha-YZF600R6RCOMP-EU-Detail-001-03.jpg","2022-Yamaha-YZF600R6RCOMP-EU-Detail-003-03.jpg","2022-Yamaha-YZF600R6RCOMP-EU-Detail-007-03.jpg"]},{"name":"R7","brand":"yamaha","category":"supersport","description":"De peste 20 de ani, modelele din seria R de la Yamaha au încântat mii de piloți. Acum, gama este completată cu adăugiri cu un aspect ager, gata să întâmpine o nouă generație de piloți în lumea R/World. Rapid, agil și atrăgător, modelul R7 oferă performanțe sportive și distracție de zi cu zi.","price":"9700","technical":[{"detail":"Putere","data":"73CP"},{"detail":"Înălțime șa","data":"835 mm"},{"detail":"Consum","data":"4.2 L/100 km"},{"detail":"Volum rezervor","data":"13 l"}],"thumbnail":"2022-Yamaha-YZF700R7-EU-Icon_Blue_-Studio-001-03_Mobile.jpg","mainImage":"r7-main.jpg","img":["2022-Yamaha-YZF700R7-EU-Detail-002-03_Mobile.jpg","2022-Yamaha-YZF700R7-EU-Detail-003-03_Mobile.jpg","2022-Yamaha-YZF700R7-EU-Detail-005-03_Mobile.jpg"]},{"name":"R1M","brand":"yamaha","category":"supersport","description":"R1M este cea mai avansată motocicletă de serie creată vreodată de Yamaha. Construită special pentru performanțe supreme pe pistă, este echipată cu o tehnologie revoluționară de control electronic, care îți permite să forțezi mai mult și să îți descoperi adevăratul potențial.","price":"27050","technical":[{"detail":"Putere","data":"197CP"},{"detail":"Înălțime șa","data":"860 mm"},{"detail":"Consum","data":"6.8 L/100km"},{"detail":"Volum rezervor","data":"17 l"}],"thumbnail":"2022-Yamaha-YZF1000R1SPL-EU-Icon_Performance-Studio-001-03_Mobile.jpg","mainImage":"r1m-main.jpg","img":["2022-Yamaha-YZF1000R1SPL-EU-Detail-001-03.jpg","2022-Yamaha-YZF1000R1SPL-EU-Detail-012-03.jpg","2022-Yamaha-YZF1000R1SPL-EU-Detail-010-03.jpg"]},{"name":"R1 World GP 60th Anniversary","brand":"yamaha","category":"supersport","description":"Dispunând de tehnologie de ultimă oră de la modelul câștigător al Yamaha, M1 MotoGP®, R1 este supersportul suprem, de curse. Iar pentru a celebra 60 de ani de curse Grand Prix, a fost creat extraordinarul model R7 dedicat celei de-a 60-a aniversări World GP.","price":"21050","technical":[{"detail":"Putere","data":"197CP"},{"detail":"Înălțime șa","data":"855 mm"},{"detail":"Consum","data":"6.8 L/100km"},{"detail":"Volum rezervor","data":"17 l"}],"thumbnail":"2022-Yamaha-YZF1000R1SV1-EU-Anniversary_White-Studio-001-03_Mobile.jpg","mainImage":"r1gp-main.jpg","img":["2022-Yamaha-YZF1000R1SV1-EU-Detail-001-03.jpg","2022-Yamaha-YZF1000R1SV1-EU-Detail-002-03.jpg","2022-Yamaha-YZF1000R1SV1-EU-Detail-007-03.jpg"]},{"name":"MT-10 SP","brand":"yamaha","category":"hyper naked","description":"Următoarea evoluție a modelului MT-10 SP este pregătită să îți prezinte experiența supremă de pilotaj. Motorul CP4 EU5 actualizat este cel mai puternic din gama Hyper Naked. Iar suspensia electronică revoluționară, semi-activă, și asistența de înaltă tehnologie pentru pilot reprezintă începutul unei noi ere palpitante pentru controlul electronic total.","price":"19500","technical":[{"detail":"Putere","data":"165CP"},{"detail":"Înălțime șa","data":"835 mm"},{"detail":"Consum","data":"6.83 L/100km"},{"detail":"Volum rezervor","data":"17 l"}],"thumbnail":"2023-Yamaha-MT10DX-EU-Icon_Performance-Studio-001-03_Mobile.jpg","mainImage":"mt10sp-main.jpg","img":["2023-Yamaha-MT10DX-EU-Detail-011-03_Mobile.jpg","2023-Yamaha-MT10DX-EU-Detail-002-03_Mobile.jpg","2023-Yamaha-MT10DX-EU-Detail-006-03_Mobile.jpg"]},{"name":"MT-10","brand":"yamaha","category":"hyper naked","description":"Creat pentru a produce o senzație de cuplu îmbunătățită pentru cea mai palpitantă experiență, modelul MT-10 este cea mai avansată motocicletă Hyper Naked produsă vreodată de Yamaha. Produsă folosind tehnologia de ultimă oră pentru motor și șasiu de pe R1, cel mai recent model MT-10 oferă mai multă putere, mai multă agilitate și un răspuns mai bun.","price":"16200","technical":[{"detail":"Putere","data":"165CP"},{"detail":"Înălțime șa","data":"835 mm"},{"detail":"Consum","data":"6.83 L/100km"},{"detail":"Volum rezervor","data":"17 l"}],"thumbnail":"2023-Yamaha-MT10-EU-Cyan_Storm-Studio-001-03_Mobile.jpg","mainImage":"mt10-main.jpg","img":["2023-Yamaha-MT10-EU-Detail-010-03_Mobile.jpg","2023-Yamaha-MT10-EU-Detail-011-03_Mobile.jpg","2023-Yamaha-MT10-EU-Detail-009-03_Mobile.jpg"]},{"name":"MT-07","brand":"yamaha","category":"hyper naked","description":"De când a fost lansată, cu peste 160.000 de unități vândute, MT-07 ocupă poziția numărul 1 în clasa sa. Cu un motor CP2 de 690 cmc, cu cuplu generos, șasiu compact și agil și flexibilitate excelentă, este imposibil să nu te îndrăgostești de cel mai bine vândut model Hyper Naked de la Yamaha.","price":"8200","technical":[{"detail":"Putere","data":"73CP"},{"detail":"Înălțime șa","data":"805 mm"},{"detail":"Consum","data":"4.2 L/100km"},{"detail":"Volum rezervor","data":"14 l"}],"thumbnail":"2023-Yamaha-MT07A-EU-Cyan_Storm-Studio-001-03_Mobile.jpg","mainImage":"mt07-main.jpg","img":["2023-Yamaha-MT07A-35-EU-Detail-004-03.jpg","2023-Yamaha-MT07A-EU-Detail-003-03.jpg","2023-Yamaha-MT07A-EU-Detail-007-03.jpg"]},{"name":"MT-03","brand":"yamaha","category":"hyper naked","description":"Motocicletele Hyper Naked de la Yamaha sunt construite pentru experiențe palpitante. Cu designul lor atletic și performanța încărcată cu adrenalină, modelele MT din topurile de vânzări au cucerit inimile și mințile motocicliștilor din întreaga Europă. Iar acum există un MT-03 complet nou, cu specificații înalte și o prezență impunătoare pe șosea.","price":"6250","technical":[{"detail":"Putere","data":"40CP"},{"detail":"Înălțime șa","data":"780 mm"},{"detail":"Consum","data":"N/A"},{"detail":"Volum rezervor","data":"14 l"}],"thumbnail":"2023-Yamaha-MT320-EU-Cyan_Storm-Studio-001-03_Mobile.jpg","mainImage":"mt03-main.jpg","img":["2023-Yamaha-MT320-EU-Detail-003-03.jpg","2023-Yamaha-MT320-EU-Detail-001-03.jpg","2023-Yamaha-MT320-EU-Detail-008-03.jpg"]},{"name":"GSX-R125","brand":"suzuki","category":"supersport","description":"Suzuki GSX-R line definește performanța motocicletelor sport pentru mai bine de 30 ani, fiind vândute în mai mult de 1 milion de exemplare. De aceea, inginerii Suzuki, care și-au dedicat o bună parte din viață GSX-R-ului și-au luat rolul foarte în serios: fiecare GSX-R trebuie să fie foarte ușor și cea mai performantă motocicletă din clasa sa, într-un pachet perfect. ","price":"4650","technical":[{"detail":"Putere","data":"20CP"},{"detail":"Înălțime șa","data":"785 mm"},{"detail":"Consum","data":"2.4 L/100km"},{"detail":"Volum rezervor","data":"11 l"}],"thumbnail":"GSX-R125-M3.png","mainImage":"gsx-main.png","img":["Suzuki-GSX-R125-M3-action.jpg","Suzuki-GSX-R125-M3-action-3.jpg","Suzuki-GSX-R125-M3-action-1.jpg"]},{"name":"GSX-S1000GT","brand":"suzuki","category":"street","description":"Confortul, controlul, conectivitatea și stilul atrăgător se combină cu performanțele unei cilindree mari pentru a oferi o experiență touring sportivă demnă de denumirea GT (Grand Tourer). Indiferent dacă preferați curse de mare viteză pe șosele lungi și deschise sau negocierea drumurilor sinuoase. Indiferent dacă călătoriți singur sau preferați compania unui pasager.","price":"12990","technical":[{"detail":"Putere","data":"152CP"},{"detail":"Înălțime șa","data":"810 mm"},{"detail":"Consum","data":"6.1 L/100km"},{"detail":"Volum rezervor","data":"19 l"}],"thumbnail":"SUZUKI-GSX-S1000GT-Category-pic-1.png","mainImage":"gsx1000gt-main.png","img":["SUZUKI-GSX-S1000GT-Action-20.jpg","SUZUKI-GSX-S1000GT-Action-21.jpg","SUZUKI-GSX-S1000GT-Action-26.jpg"]},{"name":"GSX-S1000","brand":"suzuki","category":"street","description":"Folosind genele supersportivelor, Suzuki a creat cel mai sportiv roadster de până acum, GSX-S1000. O motocicletă creată pentru senzații, care a moștenit propulsorul și principalele elemente constructive a supersportivei GSX-R1000.","price":"11490","technical":[{"detail":"Putere","data":"152CP"},{"detail":"Înălțime șa","data":"810 mm"},{"detail":"Consum","data":"6.1 L/100km"},{"detail":"Volum rezervor","data":"19 l"}],"thumbnail":"GSX-S1000--category-pic-M2-1.png","mainImage":"gsx1000-main.png","img":["GSX-S1000-live-58.jpg","GSX-S1000-live-46.jpg","GSX-S1000-live-50.jpg"]},{"name":"GSX-8S","brand":"suzuki","category":"street","description":"GSX-8S a fost dezvoltat cu scopul de a le oferi utilizatorilor de toate vârstele și abilitățile posibilități nelimitate de a se bucura de experiența pilotajului.","price":"0","technical":[{"detail":"Putere","data":"0"},{"detail":"Înălțime șa","data":"810 mm"},{"detail":"Consum","data":"4.2 L/100km"},{"detail":"Volum rezervor","data":"14 l"}],"thumbnail":"Suzuki-GSX800-model-cat-pic.png","mainImage":"gsx800-main.png","img":["Suzuki-GSX800-action.jpg","Suzuki-GSX800-action-6.jpg","Suzuki-GSX800-action-8.jpg"]},{"name":"GSX-650X","brand":"suzuki","category":"street","description":"Dacă ești în căutarea unui motor sportiv în stil „cafe racer” trebuie privit cu atenție Suzuki SV650X. Cu motorul V-Twin (2 cilindri în „V”) ascuns într-un cadru suplu și ușor, SV650X combină puterea și agilitatea cu aspectul „café racer”. În traficul urban intens sau pe drumuri nemodernizate, motocicleta oferă o plăcere deosebită a pilotajului. Oriunde va fi parcat Suzuki SV650X, aspectul retro va atrage atenția prin stilul farului, carenei restilizate, ale șelei și scărițelor redesenate. Puterea și maniabilitatea asigură o plăcere deosebită în exploatarea acestei motociclete.","price":"7390","technical":[{"detail":"Putere","data":"73CP"},{"detail":"Înălțime șa","data":"790 mm"},{"detail":"Consum","data":"4 L/100km"},{"detail":"Volum rezervor","data":"14.5 l"}],"thumbnail":"SV650X-m3-model.png","mainImage":"gsx650x-main.png","img":["SV-650X-24.jpg","SV-650X-25.jpg","SV-650X-28.jpg"]}]')},c3db:function(e,a,t){},f249:function(e,a,t){"use strict";t("6528")},fdc3:function(e,a,t){e.exports=t.p+"img/logoest.4b4db916.jpg"}});
//# sourceMappingURL=index.e9842c35.js.map