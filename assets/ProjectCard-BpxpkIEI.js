import{a as r,u as i,j as t,l as c,n as d,o as x,p as m,q as u,s as g,t as h}from"./index-aZC9DjbO.js";import{S as b}from"./index-Ci092YTt.js";const j={HTML:h,CSS:g,JavaScript:u,"Node.js":m,React:x,Tailwind:b,Git:d,GitHub:c},f=({project:s})=>{const l=r(),{t:o}=i(),a=()=>{l(`/projects/${s.slug||"coming-soon"}`)};return t.jsxs("div",{role:"button",tabIndex:0,onClick:a,onKeyDown:e=>e.key==="Enter"&&a(),className:`\r
        cursor-pointer overflow-hidden\r
        border border-white/5\r
        shadow-md hover:shadow-lg\r
        transition-all duration-300\r
        focus:outline-none focus:ring-2 focus:ring-accent\r
      `,children:[t.jsx("img",{src:s.mainImage,alt:s.title,loading:"lazy",className:"w-full h-44 md:h-60 object-cover"}),t.jsxs("div",{className:"p-4 text-left",children:[t.jsxs("h3",{className:"text-2xl lg:text-3xl font-semibold text-white",children:[t.jsx("span",{className:"text-secondary mr-1",children:">"}),s.title]}),t.jsx("p",{className:"text-sm lg:text-lg text-gray-400 mt-1 line-clamp-3",children:s.description}),s.tech&&t.jsx("div",{className:"flex gap-3 mt-3 text-secondary",children:s.tech.slice(0,5).map(e=>{const n=j[e];return n?t.jsx(n,{className:"text-lg lg:text-2xl",title:e},e):null})}),t.jsx("div",{className:"flex justify-end",children:t.jsx("button",{onClick:e=>{e.stopPropagation(),a()},className:`\r
              btn btn-sm btn-outline\r
              rounded-xs btn-secondary\r
              mt-4 lg:text-xl  hover:text-primary\r
            `,children:o("projects.cta")})})]})]})};export{f as P};
