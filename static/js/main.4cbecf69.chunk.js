(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{27:function(e,t,a){e.exports=a(40)},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(22),s=a.n(r),o=a(17),l=a(9),h=(a(32),a(10)),_=a(1),c=(a(33),a(7)),d=a(8),u=a(14),p=a(13),g=a(15),m=a(26),f=/\[([^\]]*)\]\((http[^\]\s]*)\)/,v=function(e,t,a){return e*(1-a)+t*a},b=function(e,t,a,n,i,r){var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;if("\n"===e[t])return!0;if(r){if(a>=i-s||a-n+1>r)return!0;if(" "===e[t]){var o=e.substring(t+1).search(/[\n ]/);if(o>=0){var l=(o+=t+1)-t+a;if(l>=i-s||l-n+1>r)return!0}}}return!1},x=function(e,t,a,n,i,r,s){if(!isFinite(n)||!isFinite(i)||!e)return 1/0;var o=r?Object(m.a)({},r):null;if(s&&(o||(o={}),o.tabIndex="-1"),a)for(var l=0;l<a.length;l++)if(a[l].start<=t&&t<=a[l].end){(o=o||{}).href=a[l].href;break}return o&&e.push({start:n,end:i,props:o}),1/0},y=function(e,t){for(var a=0;a<t.length;a++)if(t[a].start===e)return!0;return!1},w=function(e,t){for(var a=0;a<t.length;a++)if(t[a].end===e)return!0;return!1},k=function(){function e(t,a,n){Object(c.a)(this,e),this.content="",this.textMetadata=[],this.data=n||[],this.width=t,this.breakWidth=this.width+1,this.height=a,this.interval=null}return Object(d.a)(e,[{key:"setData",value:function(e){this.data=e}},{key:"getContent",value:function(){return this.content}},{key:"setContent",value:function(e){this.content=e}},{key:"getTextMetadata",value:function(){return this.textMetadata}},{key:"interpolateContent",value:function(e,t,a){e.length>t.length?t+=new Array(e.length-t.length+1).join(" "):t.length>e.length&&(e+=new Array(t.length-e.length+1).join(" "));for(var n=new Array(e.length),i=Math.max(e.length,t.length),r=0;r<i;r++)r%this.breakWidth===this.breakWidth-1?n[r]="\n":n[r]=String.fromCharCode(Math.round(v(e[r].charCodeAt(),t[r].charCodeAt(),a)));return n.join("")}},{key:"fillEmptyEntriesAndAddLineBreaks",value:function(e){for(var t=0,a=e.length;t<a;t++)e[t]=e[t]||" ",t%this.breakWidth===this.breakWidth-1&&(e[t]="\n")}},{key:"scanForAccessibility",value:function(e,t){}},{key:"generateRenderData",value:function(e,t){for(var a=[],n=0,i=0;i<e.length;i++)if(e[i]){var r=e[i],s=r.type,o=r.data;"text"===s?n=this.renderText(a,t,o,n):"textrect"===s?n=this.renderTextrect(a,t,o,n):"line"===s&&this.renderLine(a,t,o)}return this.fillEmptyEntriesAndAddLineBreaks(a),this.scanForAccessibility(a,t),t.sort((function(e,t){return e.start-t.start})),{str:a.join(""),textMetadata:t}}},{key:"render",value:function(){this.textMetadata.length=0;var e=this.generateRenderData(this.data,this.textMetadata),t=e.str;e.textMetadata;return this.content=t,{str:this.content,textMetadata:this.textMetadata}}},{key:"getIdxWithBreaks",value:function(e,t){return t*this.breakWidth+e}},{key:"renderText",value:function(e,t,a,n){var i=a.text,r=Object(_.a)(a.start,2),s=r[0],o=r[1],l=a.maxWidth,h=a.rightMargin,c=a.isYRelative,d=a.props;s=this.parseWidth(s),o=this.parseHeight(e,o),c&&(o+=n),s<0&&(s+=this.width);for(var u=s,p=function(e){for(var t,a=[];t=e.match(f);)e=e.substring(0,t.index)+t[1]+e.substring(t.index+t[0].length),a.push({start:t.index,end:t.index+t[1].length-1,href:t[2]});return[e,a]}(i),g=Object(_.a)(p,2),m=g[0],v=g[1],k=1/0,C=-1/0,E=o,O=0;O<m.length;O++)if(s<0||s>=this.width&&!l)s++;else if(b(m,O,s,u,this.width,l,h))s=u,o++,k=x(t,O,v,k,C,d);else if(s!==u||" "!==m[O]){y(O,v)&&(k=x(t,-1,null,k,C,d));var W=this.getIdxWithBreaks(s,o);e[W]=m[O],k=Math.min(k,W),C=Math.max(C,W),E=Math.max(E,o),s++,w(O,v)&&(k=x(t,O,v,k,C,d))}return x(t,-1,null,k,C,d),"\n"===m[m.length-1]&&(e[this.getIdxWithBreaks(s,o-1)]="\n"),E}},{key:"renderTextrect",value:function(e,t,a,n){var i=a.text,r=Object(_.a)(a.start,2),s=r[0],o=r[1],l=a.width,h=a.isYRelative,c=a.props;s=this.parseWidth(s),o=this.parseHeight(e,o),h&&(o+=n),s<0&&(s+=this.width);for(var d=-1/0,u=-1/0,p=0,g=!0,m=0;m<i.length;m++)if(!(s+m%l<0||s+m%l>=this.width)){var f=m%l,v=Math.floor(m/l),b=this.getIdxWithBreaks(s+f,o+v);e[b]=i[m],p=Math.max(p,o+v),b>u+1&&(x(t,-1,null,d,u,c,!g),isFinite(d)&&isFinite(u)&&c&&c.onClick&&(g=!1),d=b),u=b}return x(t,-1,null,d,u,c,!g),p}},{key:"renderLine",value:function(e,t,a){var n=a.start,i=a.end;if(n[0]===i[0]&&n[1]===i[1]){var r=this.getIdxWithBreaks(n[0],n[1]);e[r]="\xb7",t.push({start:r,end:r,props:{"aria-hidden":!0}})}else if(n[0]===i[0])for(var s=this.parseHeight(e,n[1]),o=this.parseHeight(e,i[1]),l=s;l<=o;l++){e[this.getIdxWithBreaks(this.parseWidth(n[0]),l)]="|"}else if(n[1]===i[1]){for(var h=this.parseWidth(n[0]),_=this.parseWidth(i[0]),c=this.getIdxWithBreaks(h,this.parseHeight(e,n[1])),d=this.getIdxWithBreaks(_,this.parseHeight(e,n[1])),u=h;u<=_;u++){e[this.getIdxWithBreaks(u,this.parseHeight(e,n[1]))]="\u2014"}t.push({start:c,end:d,props:{"aria-hidden":!0}})}}},{key:"parseWidth",value:function(e){return"number"===typeof e?e:Math.floor(parseFloat(e)*this.width/100)}},{key:"parseHeight",value:function(e,t){if("number"===typeof t)return t;var a=Math.max(this.height,Math.ceil(e.length/this.width));return parseFloat(t)*a/100}},{key:"setDimensions",value:function(e,t){this.width=e,this.breakWidth=this.width+1,this.height=t}}]),e}(),C=a(23),E=function(e){var t=e.children,a=e.onClick,n=e.className,r=Object(C.a)(e,["children","onClick","className"]);return i.a.createElement("span",Object.assign({className:"".concat(n," clickable"),role:"button",tabIndex:"0",onClick:a,onKeyDown:function(e){(function(e){return e.code?"Space"===e.code||"Enter"===e.code:32===e.which||13===e.which})(e)&&(e.preventDefault(),e.stopPropagation(),a(e))}},r),t)},O=function(e,t,a){for(var n=[],r=-1,s=0;s<t.length;s++){var o=t[s],l=o.start,h=o.end,_=o.props;(l=Math.max(l,r+1))>r+1&&n.push(i.a.createElement("span",{key:"span-prev-".concat(s)},e.substring(r+1,l))),_&&_.href?n.push(i.a.createElement("a",Object.assign({key:"a-".concat(s)},_),e.substring(l,h+1))):_&&_.onClick?n.push(i.a.createElement(E,Object.assign({key:"ariabutton-".concat(s),style:{fontSize:a}},_),e.substring(l,h+1))):_?n.push(i.a.createElement("span",Object.assign({key:"span-".concat(s)},_),e.substring(l,h+1))):n.push(i.a.createElement("span",{key:"span-".concat(s)},e.substring(l,h+1))),r=h}return r<e.length&&n.push(i.a.createElement("span",{key:"span-last"},e.substring(r+1,e.length))),n},W=[2,9],D=!!(navigator.maxTouchPoints&&navigator.maxTouchPoints>0),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).singleCharRef=i.a.createRef(),a.doubleCharRef=i.a.createRef(),a.singleCharWidth=-1,a.singleCharHeight=-1,a.windowCharWidth=40,a.windowCharHeight=40,a.verticalCharPadding=0,a.resizeHandler=null,a.content="",a.stringRenderer=new k(a.windowCharWidth,a.windowCharHeight,e.data),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.autoResize&&(this.resizeHandler=this.resize.bind(this),window.addEventListener("resize",this.resizeHandler));var e=this.singleCharRef.current.getBoundingClientRect().height,t=2*e-this.doubleCharRef.current.getBoundingClientRect().height;this.singleCharWidth=this.singleCharRef.current.getBoundingClientRect().width,this.singleCharHeight=e-t,this.verticalCharPadding=t,this.resize(),this.props.onSetCharDims&&this.props.onSetCharDims(this.singleCharWidth,this.singleCharHeight,this.verticalCharPadding)}},{key:"componentWillUnmount",value:function(){this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null)}},{key:"resize",value:function(){this.windowCharWidth=Math.floor((this.props.fixedWidthPx||Math.min(window.innerWidth,1400))/this.singleCharWidth),this.windowCharHeight=Math.floor(((this.props.fixedHeightPx||window.innerHeight)-this.verticalCharPadding)/this.singleCharHeight),this.stringRenderer.setDimensions(this.windowCharWidth,this.windowCharHeight),this.forceUpdate()}},{key:"evaluateData",value:function(e){for(var t=[],a=0;a<e.length;a++)"function"!==typeof e[a]?t.push(e[a]):t.push.apply(t,Object(h.a)(e[a](this.windowCharWidth,this.windowCharHeight)));return t}},{key:"interpolateToNewData",value:function(){var e=this.stringRenderer.generateRenderData(this.evaluateData(this.props.newData),[]),t=e.str,a=e.textMetadata,n=this.stringRenderer.interpolateContent(this.content,t,this.props.interpolationParameter);return O(n,a,this.props.fontSize)}},{key:"render",value:function(){var e;if(this.props.newData)e=this.interpolateToNewData();else if(this.singleCharWidth>0){var t=this.evaluateData(this.props.data);this.stringRenderer.setData(t);var a=this.stringRenderer.render(),n=a.str,r=a.textMetadata;this.content=n,e=O(n,r,this.props.fontSize)}return i.a.createElement("div",{className:"string-render-area ".concat(this.props.className)},e||i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{ref:this.singleCharRef},"_"),i.a.createElement("br",null),i.a.createElement("span",{ref:this.doubleCharRef},"_\n_")),this.props.childElementDataGenerator&&this.props.childElementDataGenerator(this.singleCharWidth,this.singleCharHeight,this.verticalCharPadding))}}]),t}(i.a.Component),j=["                                      ||                                              _||\\\\\\                                           \\_  _\\                         /--- //\\_           \\  \\                       /\\\\/\\/\\-\\/\\-\\          \\  \\                     -/\\M\\\\/\\ \\\\MM-\\          \\  \\                  ///          ||\\|           \\  \\                 //            \\\\|            \\  \\                ||/==>   <==\\ |||             \\  \\               || <a>   <a>   |/)            /  |               \\|      |     /|/            /   /                |    / \\    /||            /   /                 |  _ ^-^) _   |           /   /                  \\\\( ______ )/ |          /___/_                   \\  \\____/ /  /         /     |                    \\         //|        /      /                     \\\\______// |\\      /      |              _______/|          / \\____/      /              /        \\         /             /              /          \\_______/             /              /                                |              /                                /              /                                /              /      /|                        /              /______/ |                       |               |    /   |                       |               |   |    |                       |            ","         ||                                            ///||_                                           /_  _/                                           /  /         /--- //\\_                          /  /        /\\\\/\\/\\-\\/\\-\\                       /  /        -/\\M\\\\/\\ \\\\MM-\\                     /  /       ///          ||\\|                    /  /        //            \\\\|                   /  /         ||/==>   <==\\ |||                   |  \\         || <a>   <a>   |/)                  \\   \\        \\|      |     /|/                    \\   \\        |    / \\    /||                      \\   \\       |  _ ^-^) _   |                      _\\___\\      \\\\( ______ )/ |                      |     \\      \\  \\____/ /  /                      \\      \\      \\         //|                       |      \\      \\\\______// |\\                       \\      \\____/|          / \\_______                \\           \\         /          \\                \\           \\_______/            \\                |                                \\                \\                                \\                \\                                \\                \\                        |\\      \\                |                       | \\______\\               |                       |   \\    |               |                       |    |   |   "],M=Object(_.a)(W,2),I=M[0],N=M[1],T=Object(_.a)(W,2),H=T[0],B=T[1],P=a(12),A=["#","m","o","\u2022","\u2218","\xb7","."," "],S=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;Object(c.a)(this,e),this.charWidth=t,this.charHeight=a,this.verticalCharPadding=n}return Object(d.a)(e,[{key:"setCharDimensions",value:function(e,t,a){this.charWidth=e,this.charHeight=t,this.verticalCharPadding=a}},{key:"convolveKernel",value:function(e,t,a,n,i,r){for(var s=(r-1)/2,o=(i.length/r-1)/2,l=0;l<n;l++)for(var h=0;h<a;h++){for(var _=0,c=0,d=0,u=-o;u<=o;u++)for(var p=-s;p<=s;p++){var g=Math.min(a-1,Math.max(0,h+p)),m=a*Math.min(n-1,Math.max(0,l+u))+g,f=t[4*m],v=t[4*m+1],b=t[4*m+2],x=(u+o)*r+(p+s);_+=f*i[x],c+=v*i[x],d+=b*i[x]}var y=a*l+h;e[4*y]=_,e[4*y+1]=c,e[4*y+2]=d}}},{key:"forEachPixel",value:function(e,t,a,n){for(var i=0;i<a;i++)for(var r=0;r<t;r++){var s=4*(t*i+r);n(e[s],e[s+1],e[s+2],e[s+3],s)}}},{key:"invert",value:function(e,t,a,n){this.forEachPixel(t,a,n,(function(t,a,n,i,r){e[r]=255-e[r],e[r+1]=255-e[r+1],e[r+2]=255-e[r+2]}))}},{key:"grayscale",value:function(e,t){this.forEachPixel(t.data,t.width,t.height,(function(t,a,n,i,r){var s=.2126*t+.7152*a+.0722*n;e[r]=s,e[r+1]=s,e[r+2]=s,e[r+3]=i}))}},{key:"edgeDetection",value:function(e,t){var a=new Array(t.data.length);this.grayscale(a,t);var n=new Array(t.data.length);this.convolveKernel(n,a,t.width,t.height,[-1,0,1,-2,0,2,-1,0,1],3);var i=new Array(t.data.length);this.convolveKernel(i,a,t.width,t.height,[-1,-2,-1,0,0,0,1,2,1],3);for(var r=0;r<n.length;r+=4){var s=Math.sqrt(Math.pow(n[r],2)+Math.pow(i[r],2));e[r]=s,e[r+1]=s,e[r+2]=s,e[r+3]=t.data[r+3]}this.invert(e,e,t.width,t.height)}},{key:"getCharForVal",value:function(e){for(var t=0;t<A.length;t++){var a=(t+1)/A.length;if(e<Math.pow(a,1))return A[t]}return A[A.length-1]}},{key:"convert",value:function(e,t){for(var a=e.width/e.height,n=Math.ceil(t/a/(this.charHeight/this.charWidth)),i=e.data,r=[],s=[],o=e.width/t,l=e.height/n,h=0;h<n;h++)for(var _=0;_<t;_++){for(var c=_*o,d=h*l,u=0,p=d;p<d+l;p++)for(var g=Math.round(p),m=c;m<c+o;m++){var f=Math.round(m),v=g*e.width+f;r[u++]=i[4*v],r[u++]=i[4*v+1],r[u++]=i[4*v+2]}r.length=u;var b=r.reduce((function(e,t){return e+t}),0)/(255*r.length);s.push(this.getCharForVal(b))}return s}}]),e}(),z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={singleCharWidth:1,singleCharHeight:2,verticalCharPadding:0,paused:!1},a.imageConverter=new S,a.interval=null,a.refreshRate=30,a.videoRef=i.a.createRef(),a.canvasRef=i.a.createRef(),a.frameData=null,a.frameConfig={},a.setCharDims=a.setCharDims.bind(Object(P.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){e.shouldRender()&&e.forceUpdate()}),1e3/this.refreshRate)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval),this.interval=null}},{key:"getBlankScreenElements",value:function(){return[{type:"textrect",data:{start:[0,0],width:this.getCharWidthTvUnits(),text:new Array(this.getCharWidthTvUnits()*this.getCharHeightTvUnits()+1).join("#"),props:{"aria-hidden":!0}}}]}},{key:"getElementsFromVideo",value:function(){var e=this.videoRef.current,t=this.canvasRef.current,a=t.getContext("2d");t.width=300,t.height=t.width*e.videoHeight/e.videoWidth,a.drawImage(e,0,0,t.width,t.height);var n=a.getImageData(0,0,t.width,t.height);!0===this.props.edgeModeOn&&this.imageConverter.edgeDetection(n.data,n),a.putImageData(n,0,0);var i=this.imageConverter.convert(n,this.getCharWidthTvUnits());return[{type:"textrect",data:{start:[0,0],width:this.getCharWidthTvUnits(),text:i.join(""),props:{"aria-hidden":!0}}}]}},{key:"getCharWidthTvUnits",value:function(){return Math.floor(this.props.tvWidthPx/this.state.singleCharWidth)}},{key:"getCharHeightTvUnits",value:function(){return Math.floor((this.props.tvHeightPx-this.state.verticalCharPadding)/this.state.singleCharHeight)}},{key:"setCharDims",value:function(e,t,a){this.imageConverter.setCharDimensions(e,t,a),this.setState({singleCharWidth:e,singleCharHeight:t,verticalCharPadding:a})}},{key:"shouldRender",value:function(){return!0}},{key:"render",value:function(){var e,t=this;return this.props.on&&this.videoRef.current&&this.videoRef.current.videoHeight?(this.state.paused?this.videoRef.current.paused||this.videoRef.current.pause():this.videoRef.current.paused&&this.videoRef.current.play(),e=this.getElementsFromVideo()):(this.videoRef.current&&!this.videoRef.current.paused&&this.videoRef.current.pause(),e=this.getBlankScreenElements()),i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{onClick:function(){return t.setState({paused:!t.state.paused})}},i.a.createElement(R,{className:"tv-screen",data:e,fixedWidthPx:this.props.tvWidthPx,fixedHeightPx:this.props.tvHeightPx,onSetCharDims:this.setCharDims})),i.a.createElement("div",{key:"video-helper-elt-container",className:"video-helper-elt-container"},i.a.createElement("video",{controls:!0,width:"300px",ref:this.videoRef,src:this.props.src}),i.a.createElement("canvas",{ref:this.canvasRef})))}}]),t}(i.a.Component),F=Object(_.a)(W,2),q=F[0],U=F[1],Y=[{src:"/yell-ElkandCars000125MTS.mp4",title:"Bull elk ramming a car (NPS)",url:"https://www.nps.gov/media/video/view.htm?id=CEF4E37F-1DD8-B71B-0B7B5EC8C8071E13"},{src:"/yell-BighornSheep00697MTS_original_1920x1080.mp4",title:"Bighorn Sheep (NPS)",url:"https://www.nps.gov/media/video/view.htm?id=0E023AB3-155D-451F-677AEBFA0925A047"},{src:"/yell-GBear00452.mp4",title:"Grizzly Bear (early spring) (NPS)",url:"https://www.nps.gov/media/video/view.htm?id=DCE37092-155D-451F-67F448AC5DE819B0"},{src:"/grca-paddleraft.mp4",title:"Paddle Assisted Raft in Rapid (NPS)",url:"https://www.nps.gov/media/video/view.htm?id=5A9F1B07-155D-451F-673B996C4F4164BA"},{src:"/grca-trainmix.mp4",title:"Grand Canyon Railway Mix (NPS)",url:"https://www.nps.gov/grca/learn/photosmultimedia/b-roll_hd29.htm"},{src:"/242_OceanWorlds_small.mp4",title:"ScienceCasts: Ocean Worlds (NASA)",url:"https://images.nasa.gov/details-242_OceanWorlds"}],G=q+6,L=U+4,V=74+"DOWN     ".length,K=74+"OFF      ".length,J=Object(_.a)(W,2),Q=J[0],X=J[1],Z=Math.floor(8),$="About this website\n---------------------\nThe idea for this website was to use characters as the building blocks for the page's content -- one big string of characters that wraps at the right side of the page or after ".concat(1400,'px. Some characters are wrapped in separate elements for styling and interactivity, and the "screen" on the TV page is its own "character render area", but hopefully the site retains the spirit of the original idea. ').concat(D?"\n\n(Try using a non-touch display to view the TV page.)":"","\n\n\n\n\nWhy??\n---------------------\nI think ASCII/unicode art looks neat, and it was an interesting experiment!\n\nI also think train station-style flip boards are fun, so I wanted to try to incorporate that type of animation into the page transitions here.\n\nHowever, this approach to creating a site doesn't lend itself well to accessibility. [Magdalena Henke](https://www.linkedin.com/in/magdalena-henke/) has helped me think through some of the accessibility concerns of this page (I've only started to incorporate her feedback!); if you would like help improving or auditing the accessibility of your page, she will happily help you, too!\n\n\n\n\nResources\n---------------------\nThis site was built using React and is hosted on GitHub pages. A couple React + GitHub Pages resources I found helpful: "),ee=Object(_.a)(W,2),te=ee[0],ae=ee[1],ne={home:function(){return{stringRenderData:[function(e,t){var a=N+34;return[!1,{type:"text",data:{start:[I,N],text:"I'm Ben:"}},{type:"textrect",data:{start:[I,N+2],width:49,text:j[Math.floor(2*Math.random())],props:{"aria-hidden":!0}}},{type:"text",data:{start:[I,a],text:"This site is a member of the [Bill De Beest](https://billdebeest.club) webring!"}},{type:"text",data:{start:[I+6,a+2],text:"<-- previous",props:{href:"https://billdebeest.club/prev"}}},{type:"text",data:{start:[I+21,a+2],text:"!random!",props:{href:"https://billdebeest.club/random"}}},{type:"text",data:{start:[I+32,a+2],text:"next --\x3e",props:{href:"https://billdebeest.club/next"}}},{type:"text",data:{start:[I,a+4],text:"\n"}}]}]}},projects:function(){return{stringRenderData:[{type:"textrect",data:{start:[H,B],width:40,text:""}}]}},tv:function(e){var t=e.tvOn,a=e.setTvOn,n=e.tvChannel,r=e.setTvChannel,s=e.tvEdgeModeOn,o=e.setTvEdgeModeOn,l=e.tvDimMultiplier,h=e.setTvDimMultiplier,_=e.fontSize,c=t?"Channel: ".concat(Y[n].title," (link)"):"";return{stringRenderData:[{type:"text",data:{start:[G,U],text:'Press "ON" in the bottom right to watch some Unicode TV!'}},{type:"text",data:{start:[G,U+2],text:"Press the number buttons to change the resolution."}},{type:"textrect",data:{start:[G,L],width:90,text:"__________________________________________________________________________________________|                                                                    |                   ||  ________________________________________________________________  |___________________||  |\\____________________________________________________________/|  |    - QUALITY -    ||  ||                                                            ||  |      _______      ||  ||                                                            ||  |     / _____ \\     ||  ||                                                            ||  |    / /   //\\ \\    ||  ||                                                            ||  |   / /   //  \\ \\   ||  ||                                                            ||  |   \\ \\  //   / /   ||  ||                                                            ||  |    \\ \\_____/ /    ||  ||                                                            ||  |     \\_______/     ||  ||                                                            ||  |                   ||  ||                                                            ||  |    - CHANNEL -    ||  ||                                                            ||  |    DOWN     UP    ||  ||                                                            ||  |                   ||  ||                                                            ||  |    -EDGE MODE-    ||  ||                                                            ||  |    OFF      ON    ||  ||                                                            ||  |___________________||  ||                                                            ||  | _________________ ||  ||                                                            ||  | _________________ ||  ||                                                            ||  | _________________ ||  ||                                                            ||  | _________________ ||  ||                                                            ||  | _________________ ||  ||                                                            ||  | _________________ ||  ||____________________________________________________________||  |___________________||  |/____________________________________________________________\\|  |                   ||                                                                    |         ||        ||____________________________________________________________________|___________________||  /                                                                                  \\  ||_/                                                                                    \\_|"}},{type:"text",data:{start:[G+74,L+26],text:"OFF",props:{className:"clickable ".concat(t?"":"selected"),onClick:function(){return a(!1)}}}},{type:"text",data:{start:[G+K,L+26],text:"ON",props:{className:"clickable ".concat(t?"selected":""),onClick:function(){return a(!0)}}}},{type:"text",data:{start:[G+74,L+13],text:"DOWN",props:{className:"clickable",onClick:function(){return r((n-1+Y.length)%Y.length)}}}},{type:"text",data:{start:[G+V,L+13],text:"UP",props:{className:"clickable",onClick:function(){return r((n+1)%Y.length)}}}},{type:"text",data:{start:[G+74,L+16],text:"OFF",props:{className:"clickable ".concat(s?"":"selected"),onClick:function(){return o(!1)}}}},{type:"text",data:{start:[G+K,L+16],text:"ON",props:{className:"clickable ".concat(s?"selected":""),onClick:function(){return o(!0)}}}},{type:"text",data:{start:[G+73+9,L+5+0],text:"1",props:{className:"clickable ".concat(1===l?"selected":""),onClick:function(){return h(1)}}}},{type:"text",data:{start:[G+73+11,L+5+2],text:"2",props:{className:"clickable ".concat(2===l?"selected":""),onClick:function(){return h(2)}}}},{type:"text",data:{start:[G+73+10,L+5+4],text:"3",props:{className:"clickable ".concat(3===l?"selected":""),onClick:function(){return h(3)}}}},{type:"text",data:{start:[G+73+2,L+5+4],text:"4",props:{className:"clickable ".concat(4===l?"selected":""),onClick:function(){return h(4)}}}},{type:"text",data:{start:[G+73+1,L+5+2],text:"5",props:{className:"clickable ".concat(5===l?"selected":""),onClick:function(){return h(5)}}}},{type:"text",data:{start:[G+73+3,L+5+0],text:"6",props:{className:"clickable ".concat(6===l?"selected":""),onClick:function(){return h(6)}}}},t&&{type:"text",data:{start:[G+5,L+26],text:c}},t&&{type:"text",data:{start:[G+5+c.length-5,L+26],text:"link",props:{href:Y[n].url}}},{type:"text",data:{start:[G,L+30+5],maxWidth:90,text:"About this TV page\n----------------------\n\nWhy these videos?\n\nI was looking for some public domain videos to use here, and the National Parks Service and NASA had some fun ones!\n "}}],stringRenderChildElementDataGenerator:function(e,a,r){var o=(G+5)*e,h=(L+4)*a+r/2,c=60*e,d=21*a,u=_/l;return[i.a.createElement("div",{key:"tv-container",style:{left:"".concat(o,"px"),top:"".concat(h,"px"),width:"".concat(c,"px"),height:"".concat(d,"px"),position:"absolute",fontSize:"".concat(u,"px"),lineHeight:"".concat(u,"px")}},i.a.createElement(z,{key:"tv-screen-".concat(l),on:t,edgeModeOn:s,src:Y[n].src,tvWidthPx:c,tvHeightPx:d}))]}}},work:function(){return{stringRenderData:[{type:"text",data:{start:[Q,X],maxWidth:80,rightMargin:5,text:"In 2014, I joined Floored, a real estate tech startup specializing in space visualization and optimization problems, as a full-stack engineer. "}},{type:"textrect",data:{start:[Q+Z,2],isYRelative:!0,width:19,text:".........             ........              ........             .........             ....\u2218o#\u2218   \xb7         \u2218m###\u2218   #m\u2218       o####\u2218   ####\u2218     o###m\xb7   #m\u2022....   o#\u2022.     . ......\xb7\u2022\xb7            ..\u2218o##\xb7             #####\xb7             #####\xb7        m\u2218   ###o\xb7         ###o\xb7m\u2218            #####              #####              #####              ####m              ##o\xb7               \xb7               ",props:{className:"floored-purple","aria-hidden":!0}}},{type:"text",data:{start:[Q,4],isYRelative:!0,maxWidth:80,rightMargin:5,text:"In 2017, Floored was acquired by CBRE, and our team became CBRE Build NYC. "}},{type:"textrect",data:{start:[Q,3],isYRelative:!0,width:35,text:"         \xb7\u2218\u2218\u2022##\u2022\u2022\u2022##\u2218                     \u2218####\u2022\xb7 \u2218\u2022#\xb7\xb7\u2022#\u2218                \xb7##\u2022\u2218\xb7\xb7\xb7\u2022#\u2218  \u2218\u2022\u2022\xb7\xb7\u2022#\u2218              \u2022\u2022       \xb7\u2022#\u2218  \u2218#\u2022 \xb7\u2022#            \u2218#\u2022\u2022###\u2022\xb7   \xb7\u2022#\xb7     \xb7#\u2022\xb7         \u2218#\u2218\xb7\xb7  \xb7\u2218#\u2022\u2218   #\u2218      \u2022##         #\u2022        \xb7\u2022#\u2218 \u2218#      \xb7##\u2218       \u2218#\xb7          \u2218#\xb7 #\u2218      \u2022#\u2022\xb7     \u2218#\u2022            #\u2022 \u2022#      \u2218###\u2022    \xb7#\u2022 \u2218\u2218\u2218        \u2218#\u2218\u2218#\u2218\xb7\u2218\u2022\u2022#\u2022\u2022\u2218\xb7\u2218#\u2022\u2218\xb7 \xb7\u2022####\u2218\xb7#\u2022\u2218   \xb7\u2218\u2022\u2022#\u2022\u2022\u2218\xb7\xb7       \u2218#\u2218     \xb7\u2218\u2218\u2022\u2022##\u2022\u2022\u2022\u2218\u2218\u2218\xb7           \xb7\xb7\u2022#\u2218           \xb7\xb7\xb7\xb7\u2218\u2218\u2218\u2022##\u2022\u2022\u2022\u2022\u2022###\u2022\u2022\u2022\u2218  ",props:{className:"cbre","aria-hidden":!0}}},{type:"text",data:{start:[Q,4],isYRelative:!0,maxWidth:80,rightMargin:5,text:"Working on the Floored / CBRE Build team was an incredible experience.\n\n\nSome projects I enjoyed:\n\n- building 3D scene-editing tools for the amazingly talented 3D art team\n\n- helping build a floorplan optimization product from the first commits through the MVP (and beyond)\n\n- accelerating 2D graph operations in said product\n\n- helping build a system for visualizing 2D floorplans in 3D\n\n- helping implement a faceted navigation feature using Algolia\n\n- spreading the word about our in-house WebGL graphics engine through documentation, tutorials, and presentations \n\n- contributing to a database system upgrade (CouchDB 1.x --\x3e 2.x) and writing a [blog post](https://medium.com/cbrebuild/moving-to-couchdb-2-x-c2bc606970cb) about it "}},{type:"text",data:{start:[Q,1],isYRelative:!0,maxWidth:80,text:"\n"}}]}},about:function(){return{stringRenderData:[{type:"text",data:{start:[te,ae],maxWidth:80,rightMargin:5,text:$}},{type:"text",data:{start:[te+2,2],isYRelative:!0,maxWidth:80,text:"create-react-app",props:{href:"https://github.com/facebook/create-react-app"}}},{type:"text",data:{start:[te+2,1],isYRelative:!0,maxWidth:80,text:"gh-pages",props:{href:"https://www.npmjs.com/package/gh-pages"}}},{type:"text",data:{start:[te+2,1],isYRelative:!0,maxWidth:80,text:"this post",props:{href:"https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d"}}},{type:"text",data:{start:[te,1],isYRelative:!0,maxWidth:80,text:"\n "}}]}}},ie="ben.leveque@gmail.com",re=function(e,t){return{className:"clickable","aria-label":"Navigate to ".concat(t," page"),onClick:function(){return e(t)}}},se=function(e){return[{type:"text",data:{start:[2,1],text:"Ben LeVeque"}},{type:"text",data:{start:[-(ie.length+3),3],text:ie}},{type:"text",data:{start:[-("linkedin".length+3),4],text:"linkedin",props:{href:"https://www.linkedin.com/in/benjamin-leveque-5a534361/"}}},{type:"text",data:{start:["5%",6],text:"Home",props:re(e,"home")}},{type:"text",data:{start:["30%",6],text:"About",props:re(e,"about")}},!D&&{type:"text",data:{start:["55%",6],text:"TV",props:re(e,"tv")}},{type:"line",data:{start:[0,5],end:["100%",5]}},{type:"line",data:{start:[0,7],end:["100%",7]}}]},oe=function(e){var t=e.animationLength,a=void 0===t?400:t,n=e.intervalLength,i=void 0===n?50:n,r=e.onTick,s=e.onDone,o=0,l=setInterval((function(){o+=i,r(Math.min(1,o/a)),o>=a&&(clearInterval(l),s())}),i)},le=function(){var e=Object(l.f)().pathname.substring(1);ne.hasOwnProperty(e)||(e="home");var t=Object(n.useState)(e),a=Object(_.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)(null),c=Object(_.a)(o,2),d=c[0],u=c[1],p=Object(n.useState)(0),g=Object(_.a)(p,2),m=g[0],f=g[1],v=Object(n.useState)(!1),b=Object(_.a)(v,2),x=b[0],y=b[1],w=Object(n.useState)(0),k=Object(_.a)(w,2),C=k[0],E=k[1],O=Object(n.useState)(!1),W=Object(_.a)(O,2),D=W[0],j=W[1],M=Object(n.useState)(4),I=Object(_.a)(M,2),N={tv:{tvOn:x,setTvOn:y,tvChannel:C,setTvChannel:E,tvEdgeModeOn:D,setTvEdgeModeOn:j,tvDimMultiplier:I[0],setTvDimMultiplier:I[1],fontSize:14}},T=ne[r](N[r]),H=T.stringRenderData,B=T.stringRenderChildElementDataGenerator,P=se((function e(t){var a=ne[t](N[t]).stringRenderData;u([].concat(Object(h.a)(a),Object(h.a)(se(e)))),oe({onTick:f,onDone:function(){s(t),u(null)}})}));return i.a.createElement("div",{className:"root",style:{fontSize:"".concat(14,"px"),lineHeight:"".concat(14,"px")}},i.a.createElement(R,{className:"home-background",fontSize:14,data:[].concat(Object(h.a)(H),Object(h.a)(P)),childElementDataGenerator:!d&&B,newData:d,interpolationParameter:m,autoResize:!0}))},he=(a(39),function(){return i.a.createElement("div",{className:"root"},i.a.createElement("a",{href:"/"},"[home]"),i.a.createElement("h1",null,"Squash Blog"),i.a.createElement("h2",null,"Table of Contents"),i.a.createElement("ol",null,i.a.createElement("li",null,i.a.createElement("a",{href:"#planting"},"Planting (5/29/23)")),i.a.createElement("li",null,i.a.createElement("a",{href:"#disclaimer"},"Disclaimer")),i.a.createElement("li",null,i.a.createElement("a",{href:"#context"},"Context"))),i.a.createElement("h2",{id:"planting"},"Planting (5/29/23)"),i.a.createElement("p",null,'When growing squash, the first thing you should do is to bury several squash seeds in some dirt. This is called "planting", "sowing", or "squashing". A prerequisite step, of course, is to find dirt; I found some in two neglected raised beds in the yard, which you can just make out in the images below:',i.a.createElement("div",{class:"image-container"},i.a.createElement("img",{class:"img-medium",src:"/squash/raised_beds_pre_prep_2.jpeg",alt:"Image of overgrown raised planting bed 1"}),i.a.createElement("img",{class:"img-medium",src:"/squash/raised_beds_pre_prep_3.jpeg",alt:"Image of overgrown raised planting bed 2"})),"As you can see, plants have successfully grown here before, so I knew I was on the right track."),i.a.createElement("p",null,"I set about clearing the beds of weeds and old leaves. This left only a layer of old dirt and some slugs, which seemed keen to wander out on their own:",i.a.createElement("div",{class:"image-container"},i.a.createElement("img",{class:"img-medium",src:"/squash/slug_2.jpeg",alt:"Image of slug leaving raised planting bed 1"}),i.a.createElement("img",{class:"img-medium",src:"/squash/slug_4.jpeg",alt:"Image of slug leaving raised planting bed 2"}))),i.a.createElement("p",null,"When all was said and done:",i.a.createElement("div",{class:"image-container"},i.a.createElement("img",{class:"img-large",src:"/squash/raised_beds_post_prep_1.jpeg",alt:"Image of cleared raised beds"})),"A casual observer may find nothing remarkable in the image above, but close inspection reveals two different colors of dirt. This indicates something critical about the acidity, moisture level, and age -- in other words, the squash-friendliness -- of the soil, I'm sure. Expect the blog to revisit this observation frequently as we compare the growth patterns of the squash in each box. Never mind that one box will hold butternut squash and the other, zucchini."),i.a.createElement("p",null,"After clearing the boxes, it was time to put down a layer of fresh soil. I always use Organic All Natural Garden Soil for this purpose:",i.a.createElement("div",{class:"image-container"},i.a.createElement("img",{class:"img-large",src:"/squash/soil_bags.jpeg",alt:"Image of soil bags"}),i.a.createElement("br",null),i.a.createElement("img",{class:"img-large",src:"/squash/raised_beds_post_soil_2.jpeg",alt:"Image of beds and pot with fresh soil"})),"These beds are looking good! You'll notice, too, a small pot in frame. This also got a fresh layer of soil, but what will be planted there?? No soilers!"),i.a.createElement("p",null,"It was now time to plant. In the left box, I buried approximately 9 zucchini seeds in a sort of geometrically optimized lattice pattern. These are probably closer together than they eventually should be, so I may trim a couple out later. In the right box, I planted 4 butternut squash seeds in a squarish pattern. In the small pot in the middle, I planted several jalape\xf1o seeds in a sort of snowflake or flower pattern, with one in the middle and several around the edge. You may also think of this as a hub-and-spoke pattern or a pizza pie pattern. To think of it as any other type of pattern would be incorrect."),i.a.createElement("p",null,"The location of the raised beds is admittedly not ideal for growing squash, as I don't believe the boxes get as much sunlight as squash would prefer, but we'll see."),i.a.createElement("p",null,"Thanks for reading, and please be sure to comment with any squash-growing tips!"),i.a.createElement("hr",null),i.a.createElement("h2",{id:"disclaimer"},"Disclaimer"),i.a.createElement("p",null,"I am, at present, an unskilled and inexperienced gardener. As such, the contents of this blog shall, under no circumstances, be treated as the documented wisdom of a professional or skilled amateur gardener. Any resemblance to reliable gardening advice is purely coincidental. Furthermore, I shall not be held responsible, legally or ethically, for any gardening mishaps or catastrophes that emanate herefrom. Thank you, and happy gardening!"),i.a.createElement("hr",null),i.a.createElement("h2",{id:"context"},"Context"),i.a.createElement("p",null,"I recently placed last in a fantasy football league, and so I was asked to grow squash."),i.a.createElement("p",null,"In all seriousness, I think gardening is pretty cool and am excited for this challenge; I hope to do a good job. This blog is just some nonsense!"),i.a.createElement("p",null,i.a.createElement("i",null,"N.B.")," A previous year's league loser was asked to write a book report on David Brin's ",i.a.createElement("i",null,"Kiln People"),"; the report may be found ",i.a.createElement("a",{href:""},"[todo]"),"."),i.a.createElement("br",null),i.a.createElement("br",null))});s.a.render(i.a.createElement((function(){return i.a.createElement(o.a,null,i.a.createElement(l.c,null,i.a.createElement(l.a,{path:"/squash"},i.a.createElement(he,null)),i.a.createElement(l.a,{path:"/"},i.a.createElement(le,null))))}),null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.4cbecf69.chunk.js.map