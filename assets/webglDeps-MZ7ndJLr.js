import{h8 as p,jX as d,AG as b,AH as m,x9 as x,lV as y,k1 as j,ha as g,AI as h,wX as A}from"./index-e4odrhqs.js";function c(r){const{options:e,value:o}=r;return typeof e[o]=="number"}function $(r){let e="";for(const o in r){const n=r[o];if(typeof n=="boolean")n&&(e+=`#define ${o}
`);else if(typeof n=="number")e+=`#define ${o} ${n.toFixed()}
`;else if(typeof n=="object")if(c(n)){const{value:t,options:f,namespace:a}=n,s=a?`${a}_`:"";for(const i in f)e+=`#define ${s}${i} ${f[i].toFixed()}
`;e+=`#define ${o} ${s}${t}
`}else{const t=n.options;let f=0;for(const a in t)e+=`#define ${t[a]} ${(f++).toFixed()}
`;e+=`#define ${o} ${t[n.value]}
`}}return e}export{p as BufferObject,d as FramebufferObject,b as Program,m as ProgramCache,x as Renderbuffer,y as ShaderCompiler,j as Texture,g as VertexArrayObject,h as createContext,A as createProgram,$ as glslifyDefineMap};
