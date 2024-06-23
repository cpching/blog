"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6098],{8338:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>u});var i=l(4848),a=l(8453);const t={},s="Plugin Manager - Lazy",r={id:"Neovim/plugin-manager-lazy",title:"Plugin Manager - Lazy",description:"\u5b89\u88dd plugins \u8b93\u4eba\u5011\u7684 Neovim \u4f7f\u7528\u66f4\u52a0\u65b9\u4fbf\uff0c\u800c plugin manager \u662f\u7528\u4f86\u7ba1\u7406 plugins \u7684\u5b89\u88dd\u3001\u52a0\u8f09\u548c\u8a2d\u5b9a\u3002",source:"@site/docs/Neovim/plugin-manager-lazy.md",sourceDirName:"Neovim",slug:"/Neovim/plugin-manager-lazy",permalink:"/tutorial-and-blog/zh-Hans/docs/Neovim/plugin-manager-lazy",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Neovim/plugin-manager-lazy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Useful Vi Tips",permalink:"/tutorial-and-blog/zh-Hans/docs/Neovim/useful-vi-tips"},next:{title:"Plugins",permalink:"/tutorial-and-blog/zh-Hans/docs/category/plugins"}},o={},u=[{value:"Directory Structure",id:"directory-structure",level:2},{value:"Installation of Lazy",id:"installation-of-lazy",level:2},{value:"Installation of Plugins",id:"installation-of-plugins",level:2}];function c(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"plugin-manager---lazy",children:"Plugin Manager - Lazy"}),"\n",(0,i.jsx)(e.p,{children:"\u5b89\u88dd plugins \u8b93\u4eba\u5011\u7684 Neovim \u4f7f\u7528\u66f4\u52a0\u65b9\u4fbf\uff0c\u800c plugin manager \u662f\u7528\u4f86\u7ba1\u7406 plugins \u7684\u5b89\u88dd\u3001\u52a0\u8f09\u548c\u8a2d\u5b9a\u3002\n\u9019\u500b tutorial \u662f\u4f7f\u7528 Lazy \u4f5c\u70ba Neovim \u7684 Plugin Manager\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"directory-structure",children:"Directory Structure"}),"\n",(0,i.jsxs)(e.p,{children:["\u6a94\u6848\u76ee\u9304\u7684\u914d\u503c\u5728\u8a2d\u7f6e\u5b8c plunins \u5f8c\u5927\u6982\u6703\u9577\u5f97\u50cf\u4e0b\u9762\uff0c\u672c\u7bc7\u6703\u5c08\u6ce8\u5728 ",(0,i.jsx)(e.code,{children:"plugin-manager.lua"})," \u7684\u8a2d\u5b9a\u548c plugins \u7684\u5b89\u88dd\uff0c",(0,i.jsx)(e.code,{children:"plugins/"})," \u4e0b\u5404\u5225 plugin \u7684\u8a2d\u5b9a\u6703\u5728\u4e0b\u4e00\u7bc7\u7ae0\u8b1b\u89e3\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"~/.config/nvim\n|-- init.lua\n|-- lua/\n    |-- keymaps.lua\n    |-- options.lua\n    |-- plugin-manager.lua\n    |-- plugins/\n        |-- plugin_a.lua\n        |-- plugin_b.lua\n"})}),"\n",(0,i.jsx)(e.h2,{id:"installation-of-lazy",children:"Installation of Lazy"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Add the file ",(0,i.jsx)(e.code,{children:"lua/plugin-manager.lua"})," and load it by ",(0,i.jsx)(e.code,{children:'require("plugin-manager.lua")'})," in ",(0,i.jsx)(e.code,{children:"~/.config/nvim/init.lua"})]}),"\n",(0,i.jsxs)(e.li,{children:["Add the following Lua code in ",(0,i.jsx)(e.code,{children:"lua/plugin-manager.lua"})," to bootstrap ",(0,i.jsx)(e.strong,{children:"lazy.nvim"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-lua",children:'local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"\nif not vim.loop.fs_stat(lazypath) then\nvim.fn.system({\n        "git",\n        "clone",\n        "--filter=blob:none",\n        "https://github.com/folke/lazy.nvim.git",\n        "--branch=stable", -- latest stable release\n        lazypath,\n        })\nend vim.opt.rtp:prepend(lazypath)\n\n-- the `lua` files under `plugins` directory will be loaded\nrequire("lazy").setup("plugins")\n\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:":wq"})," \u5f8c\u518d\u9032\u5165 Neovim\uff0c\u4f7f\u7528\u6307\u4ee4 ",(0,i.jsx)(e.code,{children:":Lazy"})," \u5c31\u53ef\u4ee5\u770b\u5230 Lazy \u7684\u4ecb\u9762\uff0c\u4ee3\u8868 Lazy \u53ef\u4ee5\u6210\u529f\u8f09\u5165\uff0c\u63a5\u8457\u5c31\u662f\u5b89\u88dd\u548c\u8a2d\u5b9a\u9700\u8981\u7684 plugins"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"installation-of-plugins",children:"Installation of Plugins"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Add different configuration files (*.lua) to ",(0,i.jsx)(e.code,{children:"lua/plugins/"})]}),"\n",(0,i.jsxs)(e.li,{children:["The shortest spec for installing a plugin","\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-lua",children:"return\n{\n    '<plugin-short-url>'\n}\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5982\u679c\u6c92\u6709\u9700\u8981\u7279\u5225\u8a2d\u5b9a plugin \u5c31\u53ea\u9700\u8981\u65b0\u589e\u4e0a\u9762\u7684\u90a3\u6bb5 code \u5230 ",(0,i.jsx)(e.code,{children:"lua/plugins/"})," \u7684\u96a8\u4fbf\u4e00\u500b\uff08\u540d\u5b57\u53ef\u4ee5\u81ea\u5df1\u53d6\uff09\u6a94\u6848\u4e0b\uff0c\u63a5\u8457\u5b58\u6a94\u9000\u51fa\u518d\u6b21\u9032\u5165 Neovim \u5f8c ",(0,i.jsx)(e.code,{children:":Lazy"})," \u9032\u5165 Lazy \u756b\u9762\uff0c\u6309\u4e0b\u5927\u5beb ",(0,i.jsx)(e.code,{children:"I"})," \u5c31\u53ef\u4ee5\u5b89\u88dd\u8a72 plugin"]}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},8453:(n,e,l)=>{l.d(e,{R:()=>s,x:()=>r});var i=l(6540);const a={},t=i.createContext(a);function s(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);