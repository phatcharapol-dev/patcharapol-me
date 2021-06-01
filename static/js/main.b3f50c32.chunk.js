(this["webpackJsonpreact-tailwind"]=this["webpackJsonpreact-tailwind"]||[]).push([[0],{51:function(e,s,t){},70:function(e,s,t){"use strict";t.r(s);var c=t(1),i=t.n(c),n=t(25),a=t.n(n),l=(t(51),t(21)),r=t(0);var o=function(e){var s=Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-full w-full",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}),t=Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})}),c=e.isDarkMode?s:t;return Object(r.jsx)("div",{className:"rounded-full cursor-pointer z-30",onClick:e.toggleMode,children:Object(r.jsx)("div",{className:"flex justify-center items-center md:w-6 md:h-6 w-6 h-6 text-blue-main",children:c})})},d=t(14);var j=function(e){return Object(r.jsx)(d.Link,{to:e.goto,spy:!0,smooth:!0,duration:500,className:"nav-items cursor-pointer",activeClass:"underline",style:{textUnderlineOffset:"1rem"},children:e.children})};var m=function(e){var s=e.isTop?"bg-opacity-0":"shadow-lg";return Object(r.jsx)("nav",{className:"nav ".concat(s," "),role:"navigation",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"flex items-center justify-between",children:[Object(r.jsx)("div",{className:"block cursor-pointer md:hidden text-blue-main",onClick:e.toggle,children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),Object(r.jsxs)("div",{className:"md:block hidden",children:[Object(r.jsx)(j,{goto:"hero",children:"Home"}),Object(r.jsx)(j,{goto:"about",children:"About"}),Object(r.jsx)(j,{goto:"experience",children:"Experience"}),Object(r.jsx)(j,{goto:"skills",children:"Skills"}),Object(r.jsx)(j,{goto:"portfolios",children:"Portfolios"})]}),Object(r.jsx)(o,{isDarkMode:e.isDarkMode,toggleMode:e.toggleMode})]})})})};var x=function(e){return Object(r.jsx)("div",{className:"py-4 text-lg",children:Object(r.jsx)(d.Link,{to:e.goto,spy:!0,smooth:!0,duration:500,className:"dropdown-items cursor-pointer",activeClass:"underline",onClick:e.toggle,style:{textUnderlineOffset:"1rem"},children:e.children})})};var b=function(e){var s=e.isDarkMode?"bg-black-main":"bg-gray-light";return Object(r.jsxs)("div",{className:e.isOpen?"flex h-screen z-40 flex-col fixed w-full text-black-main dark:text-white-main ".concat(s):"hidden",children:[Object(r.jsx)("div",{className:"p-6 flex justify-end flex-row w-full",onClick:e.toggle,children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6  cursor-pointer hover:h-7 hover:w-7 duration-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),Object(r.jsxs)("div",{className:"flex justify-center flex-col items-center w-full h-full",children:[Object(r.jsx)(x,{toggle:e.toggle,goto:"hero",children:"Home"}),Object(r.jsx)(x,{toggle:e.toggle,goto:"about",children:"About"}),Object(r.jsx)(x,{toggle:e.toggle,goto:"experience",children:"Experience"}),Object(r.jsx)(x,{toggle:e.toggle,goto:"skills",children:"Skills"}),Object(r.jsx)(x,{toggle:e.toggle,goto:"portfolios",children:"Portfolios"})]})]})},h=t(10),u=t(6),p=t(11),f=t(12),O=t(13);u.b.add(p.a,f.a,O.a);var g=function(e){return Object(r.jsxs)("div",{className:"flex flex-col justify-center items-center interest-box",children:[Object(r.jsx)(h.a,{icon:["fas",e.icons]}),Object(r.jsx)("p",{className:"pt-2 md:text-sm text-xs",children:e.name})]})};var v=function(){return Object(r.jsxs)("div",{className:" w-full",children:[Object(r.jsx)("h5",{children:"Interests"}),Object(r.jsxs)("div",{className:"grid md:grid-cols-4 grid-cols-3",children:[Object(r.jsx)(g,{name:"Code",icons:"code"}),Object(r.jsx)(g,{name:"Money",icons:"money-bill-alt"}),Object(r.jsx)(g,{name:"Travel",icons:"road"}),Object(r.jsx)(g,{name:"Movies",icons:"video"}),Object(r.jsx)(g,{name:"Games",icons:"gamepad"}),Object(r.jsx)(g,{name:"Music",icons:"headphones"}),Object(r.jsx)(g,{name:"Food",icons:"utensils"}),Object(r.jsx)(g,{name:"Coffee",icons:"coffee"})]})]})};u.b.add(p.a,f.a,O.a);var N=function(e){return Object(r.jsxs)("div",{className:"education-box flex flex-row justify-start items-start",children:[Object(r.jsx)(h.a,{className:"md:text-2xl text-xl",icon:["fas",e.icons]}),Object(r.jsxs)("div",{className:"pl-4",children:[Object(r.jsx)("p",{children:e.subject}),Object(r.jsx)("p",{className:"text-sm py-2",children:e.place})]})]})};var w=function(){return Object(r.jsxs)("div",{className:" w-full",children:[Object(r.jsx)("h5",{children:"Education"}),Object(r.jsx)(N,{icons:"graduation-cap",subject:"B.Sc. Computer Science, 2017",place:"King Mongkut's University of Technology North Bangkok"}),Object(r.jsx)(N,{icons:"graduation-cap",subject:"Science - Mathematics, 2013",place:"Satriwittaya 2 School"})]})};var y=function(){return Object(r.jsx)("section",{className:"section about",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"grid grid-cols-1 mb-5",children:[Object(r.jsx)("h1",{children:"About Me"}),Object(r.jsx)("p",{className:"py-2",children:"Hi, My name is Patcharaphol Tridechee.I have a Bachelor of Computer Science degree from the King Monkut\u2019s University of Technology North Bangkok (KMUTNB). Currently I'm web developer. I develop E-Commerce website ( Magento) and Web application ( Laravel ) .I also freelance when I can, while my focus frontend developer because it's neccesary to be a great fullstack deleveloper."}),Object(r.jsx)("p",{children:" I am always experimenting, always learning, and never bored."})]}),Object(r.jsxs)("div",{className:"grid md:grid-cols-2 grid-cols-1",children:[Object(r.jsxs)("div",{className:"flex flex-col flex-1 justify-start items-start",children:[Object(r.jsxs)("div",{className:"flex flex-col w-full",children:[Object(r.jsx)("h5",{children:"Personal Detail"}),Object(r.jsxs)("div",{className:"grid grid-cols-9",children:[Object(r.jsxs)("div",{className:"col-span-3",children:[Object(r.jsx)("p",{className:"py-2",children:"Age "}),Object(r.jsx)("p",{className:"py-2",children:"Birth Date "}),Object(r.jsx)("p",{className:"py-2",children:"Phone"}),Object(r.jsx)("p",{className:"py-2",children:"Email"}),Object(r.jsx)("p",{className:"py-2",children:"Website"}),Object(r.jsx)("p",{className:"py-2",children:"Address"})]}),Object(r.jsxs)("div",{className:"col-span-6",children:[Object(r.jsx)("p",{className:"py-2",children:"26"}),Object(r.jsx)("p",{className:"py-2",children:"02-02-1995"}),Object(r.jsx)("p",{className:"py-2",children:"089-407-7868"}),Object(r.jsx)("p",{className:"py-2",children:"nuttt.x3@gmail.com"}),Object(r.jsx)("p",{className:"py-2",children:"www.patcharaphol.me"}),Object(r.jsx)("p",{className:"py-2",children:"Bangkok, Thailand"})]})]})]}),Object(r.jsxs)("div",{className:"btn-outline",children:[Object(r.jsx)("span",{className:"pr-2",children:"Download CV"}),Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"md:h-6 md:w-6 h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})})]})]}),Object(r.jsx)("div",{className:"flex flex-col flex-1 justify-start items-start md:pt-0 pt-10",children:Object(r.jsxs)("div",{className:"flex flex-col justify-start items-start w-full ",children:[Object(r.jsx)(w,{}),Object(r.jsx)(v,{})]})})]})]})})},k=t(95),M=t(45),S=t(94),C=t(96),L=t(90),B=t(92),D=t(93),E=t(91);var P=function(e){var s=e.role.map((function(e,s){return Object(r.jsx)("li",{children:e},s)})),t=e.currently?"default":"outlined";return Object(r.jsxs)(C.a,{children:[Object(r.jsxs)(L.a,{children:[Object(r.jsx)(E.a,{className:"md:h-6 md:w-6 w-5 h-5",variant:t,color:"primary"}),Object(r.jsx)(B.a,{})]}),Object(r.jsx)(D.a,{className:"mb-6",children:Object(r.jsxs)("div",{className:"company-box",children:[Object(r.jsx)("h4",{children:e.name}),Object(r.jsx)("p",{className:"font-bold",children:e.position}),Object(r.jsx)("h5",{children:e.period}),Object(r.jsx)("ul",{className:"list-disc list-inside mt-2",children:s})]})})]})},T=Object(M.a)({palette:{primary:{main:"#3fc1c9",contrastText:"#ffffff"}},overrides:{MuiTimelineItem:{missingOppositeContent:{"&:before":{display:"none"}}}}});var A=function(){var e=[{name:"MFEC Public Company Limited",position:"Software Developer",period:"May 2020 - Present",currently:!0,role:["Build E-Comerece Website","Fix bug issue in the projects.","Develop new user-facing features.","Build reusable code and libraries for future use."]},{name:"Endoflimit Team",position:"Magento Developer [ Freelance ]",period:"May 2020 - Present",currently:!1,role:["Build E-Comerece Website","Fix bug issue in the projects.","Develop new user-facing features.","Build reusable code and libraries for future use."]},{name:"IT Element Company Limited",position:"Software Developer",period:"August 2017 \u2013 April 2020",currently:!1,role:["Supporting fund management business such as fund selling agent and omnibus.","Fix bug issue in the projects.","Build Core Function for use in the projects.","Build Service for other systems.","Migrate Data for New Site.","Upgrade Platform PHP Version 5.3 to PHP Version 7.2"]},{name:"IT Element Company Limited",position:"Software Developer [ Intern ]",period:"June 2016 - August 2016",currently:!1,role:["Build Web Portal (Joomla).","Build www.it-element.com (HTML5, CSS3, Bootstrap, JavaScript)","Training PHP(Yii2),Virtual Machine,Linux"]}].map((function(e,s){return Object(r.jsx)(P,{name:e.name,position:e.position,period:e.period,role:e.role,currently:e.currently},s)}));return Object(r.jsx)(S.a,{theme:T,children:Object(r.jsx)(k.a,{align:"left",className:"",children:e})})};var I=function(){return Object(r.jsx)("section",{className:"section experience",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"grid md:grid-cols-3 grid-cols-1",children:[Object(r.jsx)("div",{className:"flex flex-row md:justify-center justify-start",children:Object(r.jsx)("h1",{children:"Experience"})}),Object(r.jsx)("div",{className:"md:col-span-2 w-full",children:Object(r.jsx)(A,{})})]})})})};var F=function(){return Object(r.jsx)("div",{className:"footer",children:Object(r.jsx)("div",{className:"container h-full",children:Object(r.jsx)("div",{className:"flex flex-col justify-center items-center h-full",children:Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim"})})})})};u.b.add(p.a,f.a,O.a);var J=function(e){return Object(r.jsx)("div",{className:"social-icon",children:Object(r.jsx)(h.a,{icon:["fab",e.icon]})})},W=function(){return Object(r.jsxs)("div",{className:"social-group",children:[Object(r.jsx)(J,{icon:"facebook-f"}),Object(r.jsx)(J,{icon:"github-alt"}),Object(r.jsx)(J,{icon:"linkedin-in"}),Object(r.jsx)(J,{icon:"instagram"})]})},H=("".concat("/patcharapol-me","/bg-video-dark.mp4"),"".concat("/patcharapol-me","/bg-video-light.mp4"),"".concat("/patcharapol-me","/profile_img.jpg")),U=function(e){e.isDarkMode;return Object(r.jsx)("section",{className:"hero bg-blue-light dark:bg-gray-dark",children:Object(r.jsx)("div",{className:"hero-content",children:Object(r.jsxs)("div",{className:"text-center",children:[Object(r.jsx)("div",{className:"md:w-60 w-48 m-auto",children:Object(r.jsx)("img",{src:H,alt:"profile-img",className:"profile-image"})}),Object(r.jsxs)("div",{className:"font-bold",children:[Object(r.jsx)("h3",{className:"pt-8",children:"Patcharaphol T"}),Object(r.jsx)("h4",{className:"pb-5",children:"Software Developer"})]}),Object(r.jsx)(W,{})]})})})};u.b.add(p.a,f.a,O.a);var V=function(e){return Object(r.jsxs)("div",{className:"grid md:grid-cols-2 grid-cols-1 portfolio-box",children:[Object(r.jsxs)("div",{className:"flex flex-col justify-center items-start md:my-0 my-3 md:order-first order-last",children:[Object(r.jsx)("h5",{children:e.name}),Object(r.jsx)("p",{className:"py-2",children:e.description}),Object(r.jsxs)("p",{className:"py-2",children:["Stack:",e.stack]}),Object(r.jsxs)("div",{className:"flex xs:flex-col lg:flex-row md:flex-col flex-row justify-start w-full",children:[Object(r.jsxs)("div",{className:"btn-outline",children:[Object(r.jsx)("span",{className:"pr-2",children:"View Source"}),Object(r.jsx)(h.a,{className:"text-2xl ml-2",icon:["fab","github"]})]}),Object(r.jsxs)("div",{className:"btn-full lg:ml-5 md:ml-0 xs:ml-0 ml-5",children:[Object(r.jsx)("span",{className:"pr-2",children:"Visit Site"}),Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"md:h-5 md:w-6 h-4 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 5l7 7-7 7M5 5l7 7-7 7"})})]})]})]}),Object(r.jsxs)("div",{className:"flex flex-col items-center my-3",children:[Object(r.jsxs)("div",{className:"flex flex-row w-full h-5 bg-gray-100 justify-start items-center",children:[Object(r.jsx)("div",{className:"bg-red-500 w-3 h-3 my-2 mx-1 rounded-full"}),Object(r.jsx)("div",{className:"bg-yellow-500 w-3 h-3 my-2 mx-1 rounded-full"}),Object(r.jsx)("div",{className:"bg-green-400 w-3 h-3 my-2 mx-1 rounded-full"})]}),Object(r.jsx)("img",{className:"w-full",src:e.image,alt:e.name})]})]})},z="".concat("/patcharapol-me","/sriseree.png"),K="".concat("/patcharapol-me","/anime-database.png"),R="".concat("/patcharapol-me","/tpm.png");var G=function(){var e=[{name:"Sriseree",description:"Back Office Transport System",stack:"HTML5, CSS3, JS, Magento, jQuery, AJAX, Bootstrap",img:z,source:"https://www.github.com/phatcharapol.dev"},{name:"Thongpratheep Machinery Part., Ltd.",description:"Company Website Responsive",stack:"HTML5, CSS3, JS,jQuery, AJAX, Bootstrap",img:R,source:"https://www.github.com/phatcharapol.dev"},{name:"The Anime Databae",description:"Mini Project",stack:"ReactJS, Material UI",img:K,source:"https://www.github.com/phatcharapol.dev"}].map((function(e,s){return Object(r.jsx)(V,{name:e.name,description:e.description,stack:e.stack,image:e.img,source:e.source},s)}));return Object(r.jsx)("section",{className:"section portfolio",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:"Portfolio"}),Object(r.jsx)("div",{className:"grid grid-cols-1",children:e})]})})};u.b.add(p.a,f.a,O.a);var Q=function(e){var s="database"===e.icons?"fas":"fab";return Object(r.jsxs)("div",{className:"skills-box flex flex-col justify-around  items-center md:w-1/4 w-1/3 my-6",children:[Object(r.jsx)(h.a,{icon:[s,e.icons]}),Object(r.jsx)("p",{className:"font-bold pt-5",children:e.name})]})},X=[{name:"Laravel",icon:"laravel"},{name:"Magento",icon:"magento"},{name:"ReactJS",icon:"react"},{name:"Bootstrap",icon:"bootstrap"},{name:"MySql",icon:"database"},{name:"Docker",icon:"docker"},{name:"Git",icon:"git-alt"},{name:"Jenkins",icon:"jenkins"}].map((function(e,s){return Object(r.jsx)(Q,{name:e.name,icons:e.icon},s)}));var q=function(){return Object(r.jsx)("section",{className:"section skills",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"flex flex-col justify-center flex-wrap items-start",children:[Object(r.jsx)("div",{className:"md:text-center text-left w-full mb-10",children:Object(r.jsx)("h1",{children:"Skills Set"})}),Object(r.jsx)("div",{className:"flex flex-row flex-wrap justify-start w-full items-start",children:X})]})})})};var Y=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.Element,{name:"hero",className:"element",children:Object(r.jsx)(U,{isDarkMode:e.isDarkMode})}),Object(r.jsx)(d.Element,{name:"about",className:"element",children:Object(r.jsx)(y,{})}),Object(r.jsx)(d.Element,{name:"experience",className:"element",children:Object(r.jsx)(I,{})}),Object(r.jsx)(d.Element,{name:"skills",className:"element",children:Object(r.jsx)(q,{})}),Object(r.jsx)(d.Element,{name:"portfolios",className:"element",children:Object(r.jsx)(G,{})}),Object(r.jsx)(F,{})]})};var _=function(){var e=Object(c.useState)(!1),s=Object(l.a)(e,2),t=s[0],i=s[1],n=Object(c.useState)(!1),a=Object(l.a)(n,2),o=a[0],d=a[1],j=function(){i(!t)};return Object(c.useEffect)((function(){i(!1),d(!1)}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m,{toggle:j,isDarkMode:o,toggleMode:function(){d(!o),o?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark")}}),Object(r.jsx)(b,{isOpen:t,toggle:j,isDarkMode:o}),Object(r.jsx)(Y,{isDarkMode:o})]})},Z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,97)).then((function(s){var t=s.getCLS,c=s.getFID,i=s.getFCP,n=s.getLCP,a=s.getTTFB;t(e),c(e),i(e),n(e),a(e)}))},$=t(46);a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)($.a,{children:Object(r.jsx)(_,{})})}),document.getElementById("root")),Z()}},[[70,1,2]]]);
//# sourceMappingURL=main.b3f50c32.chunk.js.map