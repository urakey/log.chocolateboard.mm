window.PR_SHOULD_USE_CONTINUATION=!0;var prettyPrintOne,prettyPrint;!function(){function e(e,n,t,r){n&&(e={sourceCode:n,basePos:e},t(e),r.push.apply(r,e.decorations))}function n(n,t){for(var r,a={},l=n.concat(t),i=[],o={},c=0,u=l.length;u>c;++c){var d=l[c],p=d[3];if(p)for(var f=p.length;0<=--f;)a[p.charAt(f)]=d;d=d[1],p=""+d,o.hasOwnProperty(p)||(i.push(d),o[p]=null)}i.push(/[\0-\uffff]/);for(var g=function(e){var n=e.charCodeAt(0);if(92!==n)return n;var t=e.charAt(1);return(n=y[t])?n:t>="0"&&"7">=t?parseInt(e.substring(1),8):"u"===t||"x"===t?parseInt(e.substring(2),16):e.charCodeAt(1)},h=function(e){return 32>e?(16>e?"\\x0":"\\x")+e.toString(16):(e=String.fromCharCode(e),"\\"===e||"-"===e||"]"===e||"^"===e?"\\"+e:e)},m=function(e){var n=e.substring(1,e.length-1).match(RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),e=[],t="^"===n[0],r=["["];t&&r.push("^");for(var t=t?1:0,a=n.length;a>t;++t){var s=n[t];if(/\\[bdsw]/i.test(s))r.push(s);else{var l,s=g(s);a>t+2&&"-"===n[t+1]?(l=g(n[t+2]),t+=2):l=s,e.push([s,l]),65>l||s>122||(65>l||s>90||e.push([32|Math.max(65,s),32|Math.min(l,90)]),97>l||s>122||e.push([-33&Math.max(97,s),-33&Math.min(l,122)]))}}for(e.sort(function(e,n){return e[0]-n[0]||n[1]-e[1]}),n=[],a=[],t=0;t<e.length;++t)s=e[t],s[0]<=a[1]+1?a[1]=Math.max(a[1],s[1]):n.push(a=s);for(t=0;t<n.length;++t)s=n[t],r.push(h(s[0])),s[1]>s[0]&&(s[1]+1>s[0]&&r.push("-"),r.push(h(s[1])));return r.push("]"),r.join("")},l=function(e){for(var n=e.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),t=n.length,r=[],a=0,s=0;t>a;++a){var l=n[a];"("===l?++s:"\\"===l.charAt(0)&&(l=+l.substring(1))&&(s>=l?r[l]=-1:n[a]=h(l))}for(a=1;a<r.length;++a)-1===r[a]&&(r[a]=++R);for(s=a=0;t>a;++a)l=n[a],"("===l?(++s,r[s]||(n[a]="(?:")):"\\"===l.charAt(0)&&(l=+l.substring(1))&&s>=l&&(n[a]="\\"+r[l]);for(a=0;t>a;++a)"^"===n[a]&&"^"!==n[a+1]&&(n[a]="");if(e.ignoreCase&&P)for(a=0;t>a;++a)l=n[a],e=l.charAt(0),2<=l.length&&"["===e?n[a]=m(l):"\\"!==e&&(n[a]=l.replace(/[a-zA-Z]/g,function(e){return e=e.charCodeAt(0),"["+String.fromCharCode(-33&e,32|e)+"]"}));return n.join("")},R=0,P=!1,o=!1,c=0,u=i.length;u>c;++c)if(d=i[c],d.ignoreCase)o=!0;else if(/[a-z]/i.test(d.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){P=!0,o=!1;break}for(var y={b:8,t:9,n:10,v:11,f:12,r:13},p=[],c=0,u=i.length;u>c;++c){if(d=i[c],d.global||d.multiline)throw Error(""+d);p.push("(?:"+l(d)+")")}r=RegExp(p.join("|"),o?"gi":"g");var v=t.length,x=function(n){for(var l=n.basePos,i=[l,"pln"],o=0,c=n.sourceCode.match(r)||[],u={},d=0,p=c.length;p>d;++d){var f,g=c[d],h=u[g],m=void 0;if("string"==typeof h)f=!1;else{var R=a[g.charAt(0)];if(R)m=g.match(R[1]),h=R[0];else{for(f=0;v>f;++f)if(R=t[f],m=g.match(R[1])){h=R[0];break}m||(h="pln")}!(f=5<=h.length&&"lang-"===h.substring(0,5))||m&&"string"==typeof m[1]||(f=!1,h="src"),f||(u[g]=h)}if(R=o,o+=g.length,f){f=m[1];var P=g.indexOf(f),y=P+f.length;m[2]&&(y=g.length-m[2].length,P=y-f.length),h=h.substring(5),e(l+R,g.substring(0,P),x,i),e(l+R+P,f,s(h,f),i),e(l+R+y,g.substring(y),x,i)}else i.push(l+R,h)}n.decorations=i};return x}function t(e){var t=[],r=[];e.tripleQuotedStrings?t.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):e.multiLineStrings?t.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):t.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),e.verbatimStrings&&r.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var a=e.hashComments;return a&&(e.cStyleComments?(a>1?t.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):t.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),r.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):t.push(["com",/^#[^\r\n]*/,null,"#"])),e.cStyleComments&&(r.push(["com",/^\/\/[^\r\n]*/,null]),r.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,null])),e.regexLiterals&&r.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C[\\s\\S]|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+/)")]),(a=e.types)&&r.push(["typ",a]),e=(""+e.keywords).replace(/^ | $/g,""),e.length&&r.push(["kwd",RegExp("^(?:"+e.replace(/[\s,]+/g,"|")+")\\b"),null]),t.push(["pln",/^\s+/,null," \r\n	\xa0"]),r.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,null],["typ",/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],["pln",/^[a-z_$][a-z_$@0-9]*/i,null],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,"0123456789"],["pln",/^\\[\s\S]?/,null],["pun",/^.[^\s\w\.$@\'\"\`\/\\]*/,null]),n(t,r)}function r(e,n,t){function r(e){switch(e.nodeType){case 1:if(s.test(e.className))break;if("br"===e.nodeName)a(e),e.parentNode&&e.parentNode.removeChild(e);else for(e=e.firstChild;e;e=e.nextSibling)r(e);break;case 3:case 4:if(t){var n=e.nodeValue,o=n.match(l);if(o){var c=n.substring(0,o.index);e.nodeValue=c,(n=n.substring(o.index+o[0].length))&&e.parentNode.insertBefore(i.createTextNode(n),e.nextSibling),a(e),c||e.parentNode.removeChild(e)}}}}function a(e){function n(e,t){var r=t?e.cloneNode(!1):e,a=e.parentNode;if(a){var a=n(a,1),s=e.nextSibling;a.appendChild(r);for(var l=s;l;l=s)s=l.nextSibling,a.appendChild(l)}return r}for(;!e.nextSibling;)if(e=e.parentNode,!e)return;for(var t,e=n(e.nextSibling,0);(t=e.parentNode)&&1===t.nodeType;)e=t;c.push(e)}for(var s=/(?:^|\s)nocode(?:\s|$)/,l=/\r\n?|\n/,i=e.ownerDocument,o=i.createElement("li");e.firstChild;)o.appendChild(e.firstChild);for(var c=[o],u=0;u<c.length;++u)r(c[u]);n===(0|n)&&c[0].setAttribute("value",n);var d=i.createElement("ol");d.className="linenums";for(var n=Math.max(0,n-1|0)||0,u=0,p=c.length;p>u;++u)o=c[u],o.className="L"+(u+n)%10,o.firstChild||o.appendChild(i.createTextNode("\xa0")),d.appendChild(o);e.appendChild(d)}function a(e,n){for(var t=n.length;0<=--t;){var r=n[t];P.hasOwnProperty(r)?i.console&&console.warn("cannot override language handler %s",r):P[r]=e}}function s(e,n){return e&&P.hasOwnProperty(e)||(e=/^\s*</.test(n)?"default-markup":"default-code"),P[e]}function l(e){var n,t,r=e.langExtension;try{var a=e.pre,l=function(e){switch(e.nodeType){case 1:if(o.test(e.className))break;for(var n=e.firstChild;n;n=n.nextSibling)l(n);n=e.nodeName.toLowerCase(),("br"===n||"li"===n)&&(c[p]="\n",d[p<<1]=u++,d[p++<<1|1]=e);break;case 3:case 4:n=e.nodeValue,n.length&&(n=a?n.replace(/\r\n?/g,"\n"):n.replace(/[ \t\r\n]+/g," "),c[p]=n,d[p<<1]=u,u+=n.length,d[p++<<1|1]=e)}},o=/(?:^|\s)nocode(?:\s|$)/,c=[],u=0,d=[],p=0;l(e.sourceNode),n=c.join("").replace(/\n$/,""),t=d,e.sourceCode=n,e.spans=t,e.basePos=0,s(r,n)(e);var f=/\bMSIE\s(\d+)/.exec(navigator.userAgent),f=f&&8>=+f[1];n=/\n/g;var g=e.sourceCode,h=g.length;t=0;var m=e.spans,R=m.length,r=0,P=e.decorations,y=P.length,v=0;P[y]=h;var x,b;for(b=x=0;y>b;)P[b]!==P[b+2]?(P[x++]=P[b++],P[x++]=P[b++]):b+=2;for(y=x,b=x=0;y>b;){for(var w=P[b],N=P[b+1],_=b+2;y>=_+2&&P[_+1]===N;)_+=2;P[x++]=w,P[x++]=N,b=_}P.length=x;var S,C=e.sourceNode;C&&(S=C.style.display,C.style.display="none");try{for(;R>r;){var L,T=m[r+2]||h,E=P[v+2]||h,_=Math.min(T,E),A=m[r+1];if(1!==A.nodeType&&(L=g.substring(t,_))){f&&(L=L.replace(n,"\r")),A.nodeValue=L;var I=A.ownerDocument,k=I.createElement("span");k.className=P[v+1];var O=A.parentNode;O.replaceChild(k,A),k.appendChild(A),T>t&&(m[r+1]=A=I.createTextNode(g.substring(_,T)),O.insertBefore(A,k.nextSibling))}t=_,t>=T&&(r+=2),t>=E&&(v+=2)}}finally{C&&(C.style.display=S)}}catch($){i.console&&console.log($&&$.stack?$.stack:$)}}var i=window,o=["break,continue,do,else,for,if,return,while"],c=[[o,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],u=[c,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],d=[c,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],p=[d,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],c=[c,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],f=[o,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],g=[o,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],o=[o,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],h=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,m=/\S/,R=t({keywords:[u,p,c,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END"+f,g,o],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),P={};a(R,["default-code"]),a(n([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup htm html mxml xhtml xml xsl".split(" ")),a(n([["pln",/^[\s]+/,null," 	\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),a(n([],[["atv",/^[\s\S]+/]]),["uq.val"]),a(t({keywords:u,hashComments:!0,cStyleComments:!0,types:h}),"c cc cpp cxx cyc m".split(" ")),a(t({keywords:"null,true,false"}),["json"]),a(t({keywords:p,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:h}),["cs"]),a(t({keywords:d,cStyleComments:!0}),["java"]),a(t({keywords:o,hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]),a(t({keywords:f,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py"]),a(t({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl","pl","pm"]),a(t({keywords:g,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]),a(t({keywords:c,cStyleComments:!0,regexLiterals:!0}),["js"]),a(t({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),a(n([],[["str",/^[\s\S]+/]]),["regex"]);var y=i.PR={createSimpleLexer:n,registerLangHandler:a,sourceDecorator:t,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:i.prettyPrintOne=function(e,n,t){var a=document.createElement("pre");return a.innerHTML=e,t&&r(a,t,!0),l({langExtension:n,numberLines:t,sourceNode:a,pre:1}),a.innerHTML},prettyPrint:i.prettyPrint=function(e){function n(){for(var t=i.PR_SHOULD_USE_CONTINUATION?u.now()+250:1/0;p<a.length&&u.now()<t;p++){var s=a[p],o=s.className;if(g.test(o)&&!h.test(o)){for(var c=!1,v=s.parentNode;v;v=v.parentNode)if(y.test(v.tagName)&&v.className&&g.test(v.className)){c=!0;break}if(!c){s.className+=" prettyprinted";var x,o=o.match(f);if(c=!o){for(var c=s,v=void 0,b=c.firstChild;b;b=b.nextSibling)var w=b.nodeType,v=1===w?v?c:b:3===w&&m.test(b.nodeValue)?c:v;c=(x=v===c?void 0:v)&&P.test(x.tagName)}c&&(o=x.className.match(f)),o&&(o=o[1]),c=R.test(s.tagName)?1:(c=(c=s.currentStyle)?c.whiteSpace:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(s,null).getPropertyValue("white-space"):0)&&"pre"===c.substring(0,3),(v=(v=s.className.match(/\blinenums\b(?::(\d+))?/))?v[1]&&v[1].length?+v[1]:!0:!1)&&r(s,v,c),d={langExtension:o,sourceNode:s,numberLines:v,pre:c},l(d)}}}p<a.length?setTimeout(n,250):e&&e()}for(var t=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],a=[],s=0;s<t.length;++s)for(var o=0,c=t[s].length;c>o;++o)a.push(t[s][o]);var t=null,u=Date;u.now||(u={now:function(){return+new Date}});var d,p=0,f=/\blang(?:uage)?-([\w.]+)(?!\S)/,g=/\bprettyprint\b/,h=/\bprettyprinted\b/,R=/pre|xmp/i,P=/^code$/i,y=/^(?:pre|code|xmp)$/i;n()}};"function"==typeof define&&define.amd&&define("google-code-prettify",[],function(){return y})}(),/*

 Copyright (C) 2012 Kyo Nagashima <kyo@hail2u.net>

 http://hail2u.mit-license.org/2012
*/
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_COMMENT,/^#[^\r\n]*/,null,"#"],[PR.PR_PLAIN,/^\s+/,null," 	\r\n"]],[[PR.PR_PLAIN,/^\w+/]]),["config","conf"]),/*

 Copyright (C) 2009 Google Inc.
 Copyright (C) 2010 Kyo Nagashima <kyo@hail2u.net>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[ \t\r\n\f]+/,null," 	\r\n\f"]],[[PR.PR_STRING,/^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/,null],[PR.PR_STRING,/^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/,null],["lang-css-str",/^url\(([^\)\"\']+)\)/i],[PR.PR_KEYWORD,/^(?:url|rgba?|hsla?|local|\!important|@import|@page|@media|@charset|@font-face|inherit)(?=[^\-\w]|$)/i,null],["lang-css-kw",/^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],[PR.PR_COMMENT,/^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],[PR.PR_COMMENT,/^(?:<\!--|--\>)/],[PR.PR_LITERAL,/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],[PR.PR_LITERAL,/^#(?:[0-9a-f]{3}){1,2}/i],[PR.PR_PLAIN,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],[PR.PR_PUNCTUATION,/^[^\s\w\'\"]+/]]),["css"]),PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_KEYWORD,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]]),["css-kw"]),PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_STRING,/^[^\)\"\']+/]]),["css-str"]),/*

 Copyright (C) 2009 Google Inc.
 Copyright (C) 2011 Kyo Nagashima <kyo@hail2u.net>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[ \t\r\n\f]+/,null," 	\r\n\f"]],[[PR.PR_STRING,/^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/,null],[PR.PR_STRING,/^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/,null],["lang-scss-str",/^url\(([^\)\"\']+)\)/i],[PR.PR_KEYWORD,/^(?:url|rgba?|hsla?|\!important|@import|@page|@media|@charset|inherit|abs|adjust-color|adjust-hue|alpha|blue|ceil|change-color|comparable|complement|darken|desaturate|fade-in|fade-out|floor|grayscale|green|hue|invert|join|length|lighten|lightness|mix|nth|opacity|percentage|quote|red|round|saturate|saturation|scale-color|transparentize|type-of|unit|unitless|unquote|!default|@extend|@debug|@warn|@if|@else( if)?|@for|@each|@while|@mixin|@include|@function|@return)(?=[^\-\w]|$)/i,null],["lang-scss-kw",/^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],[PR.PR_COMMENT,/^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],[PR.PR_COMMENT,/^\/\/[^\r\n]*/,null],[PR.PR_LITERAL,/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],[PR.PR_LITERAL,/^#(?:[0-9a-f]{3}){1,2}/i],[PR.PR_LITERAL,/^#{.*?}/],[PR.PR_LITERAL,/^&/],[PR.PR_PLAIN,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],[PR.PR_PLAIN,/^\$?-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],[PR.PR_PUNCTUATION,/^[^\s\w\'\"#{}$]+/]]),["scss"]),PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_KEYWORD,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]]),["scss-kw"]),PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_STRING,/^[^\)\"\']+/]]),["scss-str"]),/*

 Copyright (C) 2012 Kyo Nagashima <kyo@hail2u.net>

 http://hail2u.mit-license.org/2012
*/
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0\u2028\u2029]+/,null,"	\n\r \xa0\u2028\u2029"]],[[PR.PR_STRING,/^\"[^\"\r\n]*?\"/],[PR.PR_STRING,/^\'[^\'\r\n]*?\'/],[PR.PR_COMMENT,/^[\"\u2018\u2019][^\r\n\u2028\u2029]*/],[PR.PR_KEYWORD,/^(?:function|endfunction|delfunction|return|call|let|unlet|lockvar|unlockvar|if|endif|else|elseif|while|endwhile|for|in|endfor|continue|break|try|endtry|catch|finally|throw|echo|ehon|echohl|echomsg|echoerr|execute|set|autocmd|augroup|[nvxsoilc]?(?:nore)?map|command)\b/i],[PR.PR_LITERAL,/^(?:\d+)/i],[PR.PR_PLAIN,/^(?:(?:[a-z]|_\w)[\w\:]*)/i],[PR.PR_PUNCTUATION,/^[^\s\w\'\"]+/]]),["vim"]),window.addEventListener&&window.addEventListener("DOMContentLoaded",function(){var e=RegExp("\\blanguage-(bsh|c|cc|cpp|cs|csh|cyc|cv|htm|html|java|js|m|mxml|perl|pl|pm|py|rb|sh|xhtml|xml|xsl|conf|config|css|scss|vim)\\b");if(document.querySelectorAll){var n=document.querySelectorAll("code[class*=language-]");if(n){for(var t=0,r=n.length;r>t;t++){var a=n[t],s=a.parentNode;"pre"===s.tagName.toLowerCase()&&e.test(a.className)&&(s.className+=" prettyprint")}prettyPrint()}}},!1);