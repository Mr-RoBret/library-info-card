(()=>{"use strict";var e,r={847:()=>{const e=window.wp.blocks,r=window.React,t=window.wp.i18n,n=window.wp.blockEditor,o=window.wp.components,a=JSON.parse('{"u2":"create-block/library-info-card"}');(0,e.registerBlockType)(a.u2,{edit:function({attributes:e,setAttributes:a}){const{contentType:l,headingText:c}=e,i=(0,n.useBlockProps)();return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(n.BlockControls,{group:"block",title:"Card Type"},(0,r.createElement)(o.ToolbarGroup,{label:"Card Type"},(0,r.createElement)("p",{className:"card-type-dropdown-label"},"Card Type"),(0,r.createElement)(o.DropdownMenu,{icon:"arrow-down",label:(0,t.__)("Card Type","library-info-card"),controls:[{title:(0,t.__)("Info - Generic","library-info-card"),onClick:()=>a({contentType:"wp-block-heading-info"})},{title:(0,t.__)("Library Hours","library-info-card"),onClick:()=>a({contentType:"wp-block-heading-clock"})},{title:(0,t.__)("Post","library-info-card"),onClick:()=>a({contentType:"wp-block-heading-post"})},{title:(0,t.__)("Announcements","library-info-card"),onClick:()=>a({contentType:"wp-block-heading-megaphone"})}]}))),(0,r.createElement)("div",{...i},(0,r.createElement)("label",{for:"library-info-wrapper-div",class:"components-placeholder__label"},"Library Info Card"),(0,r.createElement)("div",{className:l+" dashicons-before"},(0,r.createElement)("input",{type:"text",placeholder:"Add your title here",value:c,onChange:e=>{return r=e.target.value,void a({headingText:r});var r}})),(0,r.createElement)(n.InnerBlocks,{template:[["core/paragraph",{placeholder:"Add content or block here"}]],template_lock:"remove"})))},save:function({attributes:e}){const t=n.useBlockProps.save(),{contentType:o}=e;return(0,r.createElement)("div",{...t},(0,r.createElement)("h2",{className:o+" dashicons-before"},e.headingText),(0,r.createElement)(n.InnerBlocks.Content,null))}})}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={exports:{}};return r[e](a,a.exports,n),a.exports}n.m=r,e=[],n.O=(r,t,o,a)=>{if(!t){var l=1/0;for(s=0;s<e.length;s++){for(var[t,o,a]=e[s],c=!0,i=0;i<t.length;i++)(!1&a||l>=a)&&Object.keys(n.O).every((e=>n.O[e](t[i])))?t.splice(i--,1):(c=!1,a<l&&(l=a));if(c){e.splice(s--,1);var p=o();void 0!==p&&(r=p)}}return r}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[t,o,a]},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={826:0,431:0};n.O.j=r=>0===e[r];var r=(r,t)=>{var o,a,[l,c,i]=t,p=0;if(l.some((r=>0!==e[r]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(i)var s=i(n)}for(r&&r(t);p<l.length;p++)a=l[p],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},t=globalThis.webpackChunklibrary_info_card=globalThis.webpackChunklibrary_info_card||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var o=n.O(void 0,[431],(()=>n(847)));o=n.O(o)})();