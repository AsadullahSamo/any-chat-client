(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[224],{2426:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Messages",function(){return r(4393)}])},1283:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.1a4e4c4e.svg",height:36,width:153,blurWidth:0,blurHeight:0}},234:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893),s=r(7294),a=r(1283),o=r(3309),l=r.n(o);function i(e){let{siteUrl:t}=e,[r,o]=(0,s.useState)(a.Z),[i,c]=(0,s.useState)(""),[d,m]=(0,s.useState)(""),[u,h]=(0,s.useState)(""),[p,x]=(0,s.useState)(""),[g,b]=(0,s.useState)("");return(0,s.useEffect)(()=>{fetch("http://localhost:8000/scrape?url=".concat(t)).then(e=>e.json()).then(e=>{o(e.image),c(e.title),m(e.description),h(e.favicon),x(e.siteName),b(e.url)}).catch(e=>{console.error("An error occurred:",e)})},[]),(0,n.jsxs)("article",{className:"-mt-5 max-w-sm rounded overflow-hidden shadow-lg",children:[(0,n.jsx)("a",{href:g,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)("img",{className:"w-full",src:r,alt:"image"})}),(0,n.jsxs)("div",{className:"px-6 py-4",children:[(0,n.jsx)("h2",{className:"font-bold text-xl mb-2 ".concat(l().poppinsMedium),children:i}),(0,n.jsx)("p",{className:"text-gray-700 text-base ".concat(l().poppinsRegular),children:d})]}),(0,n.jsxs)("div",{className:"flex gap-2 mx-5 my-2",children:[(0,n.jsx)("img",{src:u,alt:"Favicon",style:{objectFit:"cover"}}),(0,n.jsx)("a",{href:g,target:"_blank",rel:"noopener noreferrer",className:"".concat(l().poppinsRegular),children:p})]})]})}},1812:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),s=r(7294),a=r(3309),o=r.n(a),l=r(8994),i=r(1425);function c(e){let{index:t,onDeleteClick:r,onDeleteForMe:a,name:c,nickname:d}=e,[m,u]=(0,s.useState)(!1),h=()=>{a(t)};return(0,n.jsxs)("div",{className:"relative inline-block text-left",children:[(0,n.jsx)(l.Z,{className:"flex justify-center",fullWidth:!0,open:m,onClose:()=>{u(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,n.jsx)(i.Z,{className:"",children:c===d?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"w-[600px] bg-gray-100 flex flex-col items-center gap-1",children:[(0,n.jsx)("p",{className:"mb-5 ".concat(o().poppinsMedium),children:" Are you sure you want to delete? "}),(0,n.jsxs)("div",{className:"flex justify-start gap-3",children:[(0,n.jsx)("button",{className:"mb-5 text-white hover:text-black font-semibold hover:border-2 hover:border-solid hover:border-[#434ce6] hover:bg-white hover:cursor-pointer hover:transition-all hover:duration-500 w-48 h-12 rounded-lg bg-red-600",onClick:h,children:" Delete for me "}),(0,n.jsx)("button",{className:"text-white hover:text-black font-semibold hover:border-2 hover:border-solid hover:border-[#434ce6] hover:bg-white hover:cursor-pointer hover:transition-all hover:duration-500 w-48 h-12 rounded-lg bg-red-600",onClick:()=>{r(t)},children:" Delete for everyone "})]})]})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"w-96 bg-gray-100 flex flex-col items-center gap-1",children:[(0,n.jsx)("p",{className:"mb-5 ".concat(o().poppinsMedium),children:" Are you sure you want to delete? "}),(0,n.jsx)("button",{className:"mb-5 text-white hover:text-black font-semibold hover:border-2 hover:border-solid hover:border-[#434ce6] hover:bg-white hover:cursor-pointer hover:transition-all hover:duration-500 w-48 h-12 rounded-lg bg-red-600",onClick:h,children:" Delete for me "})]})})})}),(0,n.jsx)("div",{className:"absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",tabIndex:"-1",children:(0,n.jsx)("ul",{className:"py-1",role:"none",children:(0,n.jsx)("li",{className:"text-gray-700 block px-4 py-2 text-sm ".concat(o().poppinsRegular," hover:bg-gray-300 hover:cursor-pointer"),role:"menuitem",tabIndex:"-1",id:"menu-item-0",onClick:()=>{u(!0)},children:"Delete"})})})]})}},4393:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),s=r(7294),a=r(234),o=r(3309),l=r.n(o),i=r(1812);function c(e){let{messages:t,nickname:r,onDeleteMessage:o,onDeleteForMe:c}=e,[d,m]=(0,s.useState)(Array.isArray(t)?Array(t.length).fill(!1):[]),[u,h]=(0,s.useState)(0),p=e=>{m(t=>{let r=[...t];return r[e]=!r[e],r}),h(e)},x=e=>/(https?:\/\/[^\s]+)/g.test(e),g=e=>{m(t=>{let r=[...t];return r[e]=!1,r})},b=e=>{o(e),g(e)},f=e=>{c(e),g(e)};return Array.isArray(t)&&0!==t.length?(0,n.jsx)(n.Fragment,{children:t.map((e,t)=>(0,n.jsx)(s.Fragment,{children:e&&(0,n.jsx)(n.Fragment,{children:x(e.message)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{className:"break-words px-4 w-[30%] text-center ".concat(l().poppinsMedium," ").concat(e.name===r?"text-white bg-blue-500 self-end mr-10":"text-[#737070] bg-[#D6DCE3] mx-10"," mt-5 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl"),children:e.message.substring(0,e.message.indexOf("http"))}),(0,n.jsx)("div",{className:"".concat(e.name===r?"flex justify-end mr-10":"ml-10"),children:(0,n.jsx)(a.default,{siteUrl:e.message.substring(e.message.indexOf("http"))})}),(0,n.jsxs)("p",{className:"".concat(l().poppinsMedium," text-[#737070] -mt-12 ").concat(e.name===r?"self-end mr-10":"mx-10"," py-2"),children:[e.name===r?"You":e.name,", ",(0,n.jsx)("span",{className:"text-[#a2a2a2]",children:e.time})]})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:" w-[30%] ".concat(e.name===r?"text-white bg-blue-500 self-end mr-10":"text-[#737070] bg-[#D6DCE3] mx-10"," mt-5 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl"),children:[(0,n.jsx)("span",{className:"hover:cursor-pointer mr-5 self-center float-right relative top-0",onClick:()=>p(t),children:"▾"}),(0,n.jsx)("p",{className:"break-words px-4 text-center ".concat(l().poppinsMedium),children:e.message})]}),d[t]&&(0,n.jsx)("div",{className:"".concat(e.name===r?"self-end mr-10 -mt-16":"ml-96 -mt-16"),children:(0,n.jsx)(i.default,{name:e.name,nickname:r,index:t,onDeleteClick:b,onDeleteForMe:f})}),(0,n.jsxs)("p",{className:"".concat(l().poppinsMedium," text-[#737070] -mt-12 ").concat(e.name===r?"self-end mr-10":"mx-10"," py-2"),children:[e.name===r?"You":e.name,", ",(0,n.jsx)("span",{className:"text-[#a2a2a2]",children:e.time})]})]})})},t))}):null}},3309:function(e){e.exports={poppinsExtraBold:"Fonts_poppinsExtraBold__a95Vf",poppinsMedium:"Fonts_poppinsMedium__4nx49",poppinsRegular:"Fonts_poppinsRegular__YuFNr",poppinsSemiBold:"Fonts_poppinsSemiBold__TIEwV"}}},function(e){e.O(0,[978,888,774,179],function(){return e(e.s=2426)}),_N_E=e.O()}]);