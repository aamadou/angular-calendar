(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{cgg9:function(e,t,n){"use strict";n.r(t),n.d(t,"DemoModule",(function(){return f}));var c=n("ofXK"),a=n("Nrjh"),i=n("/om3"),o=n("tyNb"),s=n("dBcC"),r=n("WIjQ"),d=n("G6Tw"),v=n("G6HM"),p=n("fXoL"),u=n("kx+m");class w{constructor(){this.viewDate=new Date,this.events=[{start:new Date,title:"An event",color:v.a.red}]}dayClicked({date:e,events:t}){Object(r.a)(e,this.viewDate)&&(Object(d.a)(this.viewDate,e)&&!0===this.activeDayIsOpen||0===t.length?this.activeDayIsOpen=!1:(this.activeDayIsOpen=!0,this.viewDate=e))}}w.\u0275fac=function(e){return new(e||w)},w.\u0275cmp=p.bc({type:w,selectors:[["mwl-demo-component"]],decls:3,vars:4,consts:[[3,"viewDate","events","activeDayIsOpen","dayClicked"]],template:function(e,t){1&e&&(p.mc(0,"mwl-calendar-month-view",0),p.yc("dayClicked",(function(e){return t.dayClicked(e.day)})),p.id(1,"\n"),p.lc(),p.id(2,"\n")),2&e&&p.Jc("@.disabled",!0)("viewDate",t.viewDate)("events",t.events)("activeDayIsOpen",t.activeDayIsOpen)},directives:[u.a],encapsulation:2,changeDetection:0});var l=n("j1vE");class f{}f.\u0275mod=p.fc({type:f}),f.\u0275inj=p.ec({factory:function(e){return new(e||f)},imports:[[c.c,a.a.forRoot({provide:i.a,useFactory:l.a}),s.a,o.e.forChild([{path:"",component:w}])]]})},dBcC:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n("ofXK"),a=n("3Pt+"),i=n("Nrjh"),o=n("fXoL");class s{}s.\u0275mod=o.fc({type:s}),s.\u0275inj=o.ec({factory:function(e){return new(e||s)},imports:[[c.c,a.c,i.a]]})}}]);