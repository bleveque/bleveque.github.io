(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{25:function(t,e,a){t.exports=a(37)},30:function(t,e,a){},31:function(t,e,a){},37:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(22),_=a.n(r),s=a(17),h=a(8),o=(a(30),a(11)),l=a(1),c=(a(31),a(6)),d=a(7),u=a(15),p=a(13),g=a(14),v=function(t,e,a){return t*(1-a)+e*a},f=function(){function t(e,a,n){Object(c.a)(this,t),this.content="",this.textMetadata=[],this.data=n||[],this.width=e,this.breakWidth=this.width+1,this.height=a,this.interval=null}return Object(d.a)(t,[{key:"setData",value:function(t){this.data=t}},{key:"getContent",value:function(){return this.content}},{key:"setContent",value:function(t){this.content=t}},{key:"getTextMetadata",value:function(){return this.textMetadata}},{key:"interpolateContent",value:function(t,e,a){t.length>e.length?e+=new Array(t.length-e.length+1).join(" "):e.length>t.length&&(t+=new Array(e.length-t.length+1).join(" "));for(var n=new Array(t.length),i=Math.max(t.length,e.length),r=0;r<i;r++)r%this.breakWidth===this.breakWidth-1?n[r]="\n":n[r]=String.fromCharCode(Math.round(v(t[r].charCodeAt(),e[r].charCodeAt(),a)));return n.join("")}},{key:"fillEmptyEntriesAndAddLineBreaks",value:function(t){for(var e=0,a=t.length;e<a;e++)t[e]=t[e]||" ",e%this.breakWidth===this.breakWidth-1&&(t[e]="\n")}},{key:"generateRenderData",value:function(t,e){for(var a=[],n=0,i=0;i<t.length;i++)if(t[i]){var r=t[i],_=r.type,s=r.data;"text"===_?n=this.renderText(a,e,s,n):"textrect"===_?n=this.renderTextrect(a,e,s,n):"line"===_&&this.renderLine(a,s)}return e.sort((function(t,e){return t.start-e.start})),this.fillEmptyEntriesAndAddLineBreaks(a),{str:a.join(""),textMetadata:e}}},{key:"render",value:function(){this.textMetadata.length=0;var t=this.generateRenderData(this.data,this.textMetadata),e=t.str;t.textMetadata;return this.content=e,{str:this.content,textMetadata:this.textMetadata}}},{key:"getIdxWithBreaks",value:function(t,e){return e*this.breakWidth+t}},{key:"renderText",value:function(t,e,a,n){var i=a.text,r=Object(l.a)(a.start,2),_=r[0],s=r[1];a.isYRelative&&(s+=n),_<0&&(_+=this.width);for(var h=_,o=1/0,c=-1/0,d=0,u=0;u<i.length;u++,_++)if("\n"!==i[u]){if(!(_<0)&&(!(_>=this.width)||a.maxWidth)){if(a.maxWidth)if(_>=this.width||_-h+1>a.maxWidth)_=h,s++;else if(" "===i[u]){var p=i.indexOf("\n",u+1),g=i.indexOf(" ",u+1),v=-1===p||-1===g?Math.max(g,p):Math.min(g,p),f=v-u+_;v>0&&(f>this.width||f-h+1>a.maxWidth)&&(_=h,s++,u++)}var m=this.getIdxWithBreaks(_,s);t[m]=i[u],o=Math.min(o,m),c=Math.max(c,m),d=Math.max(d,s)}}else _=h-1,s++;return e&&a.props&&e.push({start:o,end:c,inputData:a}),d}},{key:"renderTextrect",value:function(t,e,a,n){var i=a.text,r=Object(l.a)(a.start,2),_=r[0],s=r[1],h=a.width;a.isYRelative&&(s+=n),_<0&&(_+=this.width);for(var o=-1/0,c=-1/0,d=0,u=0;u<i.length;u++)if(!(_+u%h<0||_+u%h>=this.width)){var p=u%h,g=Math.floor(u/h),v=this.getIdxWithBreaks(_+p,s+g);t[v]=i[u],d=Math.max(d,s+g),v>c+1&&(isFinite(c)&&e&&a.props&&e.push({start:o,end:c,inputData:a}),o=v),c=v}return isFinite(c)&&e&&a.props&&e.push({start:o,end:c,inputData:a}),d}},{key:"renderLine",value:function(t,e){var a=e.start,n=e.end;if(a[0]===n[0]&&a[1]===n[1])t[this.getIdxWithBreaks(a[0],a[1])]="\xb7";else if(a[0]===n[0])for(var i=this.parseHeight(t,a[1]),r=this.parseHeight(t,n[1]),_=i;_<=r;_++){t[this.getIdxWithBreaks(this.parseWidth(a[0]),_)]="|"}else if(a[1]===n[1])for(var s=this.parseWidth(a[0]),h=this.parseWidth(n[0]),o=s;o<=h;o++){t[this.getIdxWithBreaks(o,this.parseHeight(t,a[1]))]="\u2014"}}},{key:"parseWidth",value:function(t){return"number"===typeof t?t:parseFloat(t)*this.width/100}},{key:"parseHeight",value:function(t,e){if("number"===typeof e)return e;var a=Math.max(this.height,Math.ceil(t.length/this.width));return parseFloat(e)*a/100}},{key:"setDimensions",value:function(t,e){this.width=t,this.breakWidth=this.width+1,this.height=e}}]),t}(),m=function(t,e){for(var a=[],n=-1,r=0;r<e.length;r++){var _=e[r],s=_.start,h=_.end,o=_.inputData;(s=Math.max(s,n+1))>n+1&&a.push(i.a.createElement("span",{key:"span-prev-".concat(r)},t.substring(n+1,s))),o&&o.props&&o.props.href?a.push(i.a.createElement("a",Object.assign({key:"a-".concat(r)},o.props),t.substring(s,h+1))):a.push(i.a.createElement("span",Object.assign({key:"span-".concat(r)},o.props),t.substring(s,h+1))),n=h}return n<t.length&&a.push(i.a.createElement("span",{key:"span-last"},t.substring(n+1,t.length))),a},x=[14,6],y=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(p.a)(e).call(this,t))).singleCharRef=i.a.createRef(),a.doubleCharRef=i.a.createRef(),a.singleCharWidth=-1,a.singleCharHeight=-1,a.windowCharWidth=40,a.windowCharHeight=40,a.verticalCharPadding=0,a.resizeHandler=null,a.content="",a.stringRenderer=new f(a.windowCharWidth,a.windowCharHeight,t.data),a}return Object(g.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){this.props.autoResize&&(this.resizeHandler=this.resize.bind(this),window.addEventListener("resize",this.resizeHandler));var t=this.singleCharRef.current.getBoundingClientRect().height,e=2*t-this.doubleCharRef.current.getBoundingClientRect().height;this.singleCharWidth=this.singleCharRef.current.getBoundingClientRect().width,this.singleCharHeight=t-e,this.verticalCharPadding=e,this.resize(),this.props.onSetCharDims&&this.props.onSetCharDims(this.singleCharWidth,this.singleCharHeight,this.verticalCharPadding)}},{key:"componentWillUnmount",value:function(){this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null)}},{key:"resize",value:function(){this.windowCharWidth=Math.floor((this.props.fixedWidthPx||Math.min(window.innerWidth,1400))/this.singleCharWidth),this.windowCharHeight=Math.floor(((this.props.fixedHeightPx||window.innerHeight)-this.verticalCharPadding)/this.singleCharHeight),this.stringRenderer.setDimensions(this.windowCharWidth,this.windowCharHeight),this.forceUpdate()}},{key:"interpolateToNewData",value:function(){var t=this.stringRenderer.generateRenderData(this.props.newData,[]),e=t.str,a=t.textMetadata,n=this.stringRenderer.interpolateContent(this.content,e,this.props.interpolationParameter);return m(n,a)}},{key:"render",value:function(){var t;if(this.props.newData)t=this.interpolateToNewData();else if(this.singleCharWidth>0){this.stringRenderer.setData(this.props.data);var e=this.stringRenderer.render(),a=e.str,n=e.textMetadata;this.content=a,t=m(a,n)}return i.a.createElement("div",{className:"string-render-area ".concat(this.props.className)},t||i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{ref:this.singleCharRef},"_"),i.a.createElement("br",null),i.a.createElement("span",{ref:this.doubleCharRef},"_\n_")),this.props.childElementDataGenerator&&this.props.childElementDataGenerator(this.singleCharWidth,this.singleCharHeight,this.verticalCharPadding))}}]),e}(i.a.Component),b=["                                      ||                                              _||\\\\\\                                           \\_  _\\                         /--- //\\_           \\  \\                       /\\\\/\\/\\-\\/\\-\\          \\  \\                     -/\\M\\\\/\\ \\\\MM-\\          \\  \\                  ///          ||\\|           \\  \\                 //            \\\\|            \\  \\                ||/==>   <==\\ |||             \\  \\               || <a>   <a>   |/)            /  |               \\|      |     /|/            /   /                |    / \\    /||            /   /                 |  _ ^-^) _   |           /   /                  \\\\( ______ )/ |          /___/_                   \\  \\____/ /  /         /     |                    \\         //|        /      /                     \\\\______// |\\      /      |              _______/|          / \\____/      /              /        \\         /             /              /          \\_______/             /              /                                |              /                                /              /                                /              /      /|    S E A T T L E       /              /______/ |                       |               |    /   |   M A R I N E R S     |               |   |    |                       |            ","         ||                                            ///||_                                           /_  _/                                           /  /         /--- //\\_                          /  /        /\\\\/\\/\\-\\/\\-\\                       /  /        -/\\M\\\\/\\ \\\\MM-\\                     /  /       ///          ||\\|                    /  /        //            \\\\|                   /  /         ||/==>   <==\\ |||                   |  \\         || <a>   <a>   |/)                  \\   \\        \\|      |     /|/                    \\   \\        |    / \\    /||                      \\   \\       |  _ ^-^) _   |                      _\\___\\      \\\\( ______ )/ |                      |     \\      \\  \\____/ /  /                      \\      \\      \\         //|                       |      \\      \\\\______// |\\                       \\      \\____/|          / \\_______                \\           \\         /          \\                \\           \\_______/            \\                |                                \\                \\                                \\                \\                                \\                \\     S E A T T L E      |\\      \\                |                       | \\______\\               |   M A R I N E R S     |   \\    |               |                       |    |   |   "],w=Object(l.a)(x,2),C=w[0],k=w[1],O=Object(l.a)(x,2),E=O[0],R=O[1],M=a(12),D=["#","m","o","\u2022","\u2218","\xb7","."," "],W=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;Object(c.a)(this,t),this.charWidth=e,this.charHeight=a,this.verticalCharPadding=n}return Object(d.a)(t,[{key:"setCharDimensions",value:function(t,e,a){this.charWidth=t,this.charHeight=e,this.verticalCharPadding=a}},{key:"convolveKernel",value:function(t,e,a,n,i,r){for(var _=(r-1)/2,s=(i.length/r-1)/2,h=0;h<n;h++)for(var o=0;o<a;o++){for(var l=0,c=0,d=0,u=-s;u<=s;u++)for(var p=-_;p<=_;p++){var g=Math.min(a-1,Math.max(0,o+p)),v=a*Math.min(n-1,Math.max(0,h+u))+g,f=e[4*v],m=e[4*v+1],x=e[4*v+2],y=(u+s)*r+(p+_);l+=f*i[y],c+=m*i[y],d+=x*i[y]}var b=a*h+o;t[4*b]=l,t[4*b+1]=c,t[4*b+2]=d}}},{key:"forEachPixel",value:function(t,e,a,n){for(var i=0;i<a;i++)for(var r=0;r<e;r++){var _=4*(e*i+r);n(t[_],t[_+1],t[_+2],t[_+3],_)}}},{key:"invert",value:function(t,e,a,n){this.forEachPixel(e,a,n,(function(e,a,n,i,r){t[r]=255-t[r],t[r+1]=255-t[r+1],t[r+2]=255-t[r+2]}))}},{key:"grayscale",value:function(t,e){this.forEachPixel(e.data,e.width,e.height,(function(e,a,n,i,r){var _=.2126*e+.7152*a+.0722*n;t[r]=_,t[r+1]=_,t[r+2]=_,t[r+3]=i}))}},{key:"edgeDetection",value:function(t,e){var a=new Array(e.data.length);this.grayscale(a,e);var n=new Array(e.data.length);this.convolveKernel(n,a,e.width,e.height,[-1,0,1,-2,0,2,-1,0,1],3);var i=new Array(e.data.length);this.convolveKernel(i,a,e.width,e.height,[-1,-2,-1,0,0,0,1,2,1],3);for(var r=0;r<n.length;r+=4){var _=Math.sqrt(Math.pow(n[r],2)+Math.pow(i[r],2));t[r]=_,t[r+1]=_,t[r+2]=_,t[r+3]=e.data[r+3]}this.invert(t,t,e.width,e.height)}},{key:"getCharForVal",value:function(t){for(var e=0;e<D.length;e++){var a=(e+1)/D.length;if(t<Math.pow(a,1))return D[e]}return D[D.length-1]}},{key:"convert",value:function(t,e){for(var a=t.width/t.height,n=Math.ceil(e/a/(this.charHeight/this.charWidth)),i=t.data,r=[],_=[],s=t.width/e,h=t.height/n,o=0;o<n;o++)for(var l=0;l<e;l++){for(var c=l*s,d=o*h,u=0,p=d;p<d+h;p++)for(var g=Math.round(p),v=c;v<c+s;v++){var f=Math.round(v),m=g*t.width+f;r[u++]=i[4*m],r[u++]=i[4*m+1],r[u++]=i[4*m+2]}r.length=u;var x=r.reduce((function(t,e){return t+e}),0)/(255*r.length);_.push(this.getCharForVal(x))}return _}}]),t}(),j=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(p.a)(e).call(this,t))).state={singleCharWidth:1,singleCharHeight:2,verticalCharPadding:0,paused:!1},a.imageConverter=new W,a.interval=null,a.refreshRate=30,a.videoRef=i.a.createRef(),a.canvasRef=i.a.createRef(),a.setCharDims=a.setCharDims.bind(Object(M.a)(a)),a}return Object(g.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){t.forceUpdate()}),1e3/this.refreshRate)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval),this.interval=null}},{key:"getBlankScreenElements",value:function(){return[{type:"textrect",data:{start:[0,0],width:this.getCharWidthTvUnits(),text:new Array(this.getCharWidthTvUnits()*this.getCharHeightTvUnits()+1).join("#")}}]}},{key:"getElementsFromVideo",value:function(){var t=this.videoRef.current,e=this.canvasRef.current,a=e.getContext("2d");e.width=300,e.height=e.width*t.videoHeight/t.videoWidth,a.drawImage(t,0,0,e.width,e.height);var n=a.getImageData(0,0,e.width,e.height);!0===this.props.edgeModeOn&&this.imageConverter.edgeDetection(n.data,n),a.putImageData(n,0,0);var i=this.imageConverter.convert(n,this.getCharWidthTvUnits());return[{type:"textrect",data:{start:[0,0],width:this.getCharWidthTvUnits(),text:i.join("")}}]}},{key:"getCharWidthTvUnits",value:function(){return Math.floor(this.props.tvWidthPx/this.state.singleCharWidth)}},{key:"getCharHeightTvUnits",value:function(){return Math.floor((this.props.tvHeightPx-this.state.verticalCharPadding)/this.state.singleCharHeight)}},{key:"setCharDims",value:function(t,e,a){this.imageConverter.setCharDimensions(t,e,a),this.setState({singleCharWidth:t,singleCharHeight:e,verticalCharPadding:a})}},{key:"render",value:function(){var t,e=this;return this.props.on&&this.videoRef.current&&this.videoRef.current.videoHeight?(this.state.paused?this.videoRef.current.pause():this.videoRef.current.paused&&this.videoRef.current.play(),t=this.getElementsFromVideo()):(this.videoRef.current&&!this.videoRef.current.paused&&this.videoRef.current.pause(),t=this.getBlankScreenElements()),i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{onClick:function(){return e.setState({paused:!e.state.paused})}},i.a.createElement(y,{data:t,fixedWidthPx:this.props.tvWidthPx,fixedHeightPx:this.props.tvHeightPx,onSetCharDims:this.setCharDims})),i.a.createElement("div",{key:"video-helper-elt-container",className:"video-helper-elt-container"},i.a.createElement("video",{controls:!0,width:"300px",ref:this.videoRef,src:this.props.src}),i.a.createElement("canvas",{ref:this.canvasRef})))}}]),e}(i.a.Component),N=Object(l.a)(x,2),H=N[0],S=N[1],P=[{src:"/yell-ElkandCars000125MTS.mp4",title:"Bull elk ramming a car (NPS)",url:"https://www.nps.gov/media/video/view.htm?id=CEF4E37F-1DD8-B71B-0B7B5EC8C8071E13"},{src:"/yell-BighornSheep00697MTS_original_1920x1080.mp4",title:"Bighorn Sheep (NPS)",url:"https://www.nps.gov/media/video/view.htm?id=0E023AB3-155D-451F-677AEBFA0925A047"},{src:"/yell-GBear00452.mp4",title:"Grizzly Bear (early spring) (NPS)",url:"https://www.nps.gov/media/video/view.htm?id=DCE37092-155D-451F-67F448AC5DE819B0"},{src:"/grca-paddleraft.mp4",title:"Paddle Assisted Raft in Rapid (NPS)",url:"https://www.nps.gov/media/video/view.htm?id=5A9F1B07-155D-451F-673B996C4F4164BA"},{src:"/grca-trainmix.mp4",title:"Grand Canyon Railway Mix (NPS)",url:"https://www.nps.gov/grca/learn/photosmultimedia/b-roll_hd29.htm"},{src:"/242_OceanWorlds_small.mp4",title:"ScienceCasts: Ocean Worlds (NASA)",url:"https://images.nasa.gov/details-242_OceanWorlds"}],B=H+6,A=S+4,T=74+"DOWN     ".length,F=74+"OFF      ".length,I=Math.floor(19),z="About this website\n---------------------\nThe idea for this website was to use characters as the building blocks for the page's content -- one big string of characters that wraps at the right side of the page or after ".concat(1400,'px. Some characters are wrapped in separate elements for styling and interactivity, and the "screen" on the TV page is its own "character render area", but hopefully the site retains the spirit of the original idea.\n\n\n\n\nWhy??\n---------------------\nI think ASCII/unicode art looks neat, and it was an interesting experiment!\n\nI also think train station-style flip boards are fun, so I wanted to try to incorporate that type of animation into the page transitions here.\n\nHowever, since the page is essentially a long string interrupted by some inline elements in left-right top-down order, it is horribly inaccessible to screen readers. I would love to fix this in a future version.\n\n\n\n\n'),U=Object(l.a)(x,2),L=U[0],Y=U[1],G={home:function(){return{stringRenderData:[{type:"text",data:{start:[C,k],text:"I'm Ben:"}},{type:"textrect",data:{start:[C,k+2],width:49,text:b[Math.floor(2*Math.random())]}}]}},projects:function(){return{stringRenderData:[{type:"textrect",data:{start:[E,R],width:40,text:""}}]}},tv:function(t){var e=t.tvOn,a=t.setTvOn,n=t.tvChannel,r=t.setTvChannel,_=t.tvEdgeModeOn,s=t.setTvEdgeModeOn,h=t.tvDimMultiplier,o=t.setTvDimMultiplier,l=t.fontSize,c=e?"Channel: ".concat(P[n].title," (link)"):"";return{stringRenderData:[{type:"text",data:{start:[B,7],text:'Press "ON" in the bottom right to watch some Unicode TV!'}},{type:"text",data:{start:[B,9],text:"Press the number buttons to change the resolution."}},{type:"textrect",data:{start:[B,10],width:90,text:"__________________________________________________________________________________________|                                                                    |                   ||  ________________________________________________________________  |___________________||  |\\____________________________________________________________/|  |    - QUALITY -    ||  ||                                                            ||  |      _______      ||  ||                                                            ||  |     / _____ \\     ||  ||                                                            ||  |    / /   //\\ \\    ||  ||                                                            ||  |   / /   //  \\ \\   ||  ||                                                            ||  |   \\ \\  //   / /   ||  ||                                                            ||  |    \\ \\_____/ /    ||  ||                                                            ||  |     \\_______/     ||  ||                                                            ||  |                   ||  ||                                                            ||  |    - CHANNEL -    ||  ||                                                            ||  |    DOWN     UP    ||  ||                                                            ||  |                   ||  ||                                                            ||  |    -EDGE MODE-    ||  ||                                                            ||  |    OFF      ON    ||  ||                                                            ||  |___________________||  ||                                                            ||  | _________________ ||  ||                                                            ||  | _________________ ||  ||                                                            ||  | _________________ ||  ||                                                            ||  | _________________ ||  ||                                                            ||  | _________________ ||  ||                                                            ||  | _________________ ||  ||____________________________________________________________||  |___________________||  |/____________________________________________________________\\|  |                   ||                                                                    |         ||        ||____________________________________________________________________|___________________||  /                                                                                  \\  ||_/                                                                                    \\_|"}},{type:"text",data:{start:[B+74,A+26],text:"OFF",props:{className:"clickable ".concat(e?"":"selected"),onClick:function(){return a(!1)}}}},{type:"text",data:{start:[B+F,A+26],text:"ON",props:{className:"clickable ".concat(e?"selected":""),onClick:function(){return a(!0)}}}},{type:"text",data:{start:[B+74,A+13],text:"DOWN",props:{className:"clickable",onClick:function(){return r((n-1+P.length)%P.length)}}}},{type:"text",data:{start:[B+T,A+13],text:"UP",props:{className:"clickable",onClick:function(){return r((n+1)%P.length)}}}},{type:"text",data:{start:[B+74,A+16],text:"OFF",props:{className:"clickable ".concat(_?"":"selected"),onClick:function(){return s(!1)}}}},{type:"text",data:{start:[B+F,A+16],text:"ON",props:{className:"clickable ".concat(_?"selected":""),onClick:function(){return s(!0)}}}},{type:"text",data:{start:[B+73+9,A+5+0],text:"1",props:{className:"clickable ".concat(1===h?"selected":""),onClick:function(){return o(1)}}}},{type:"text",data:{start:[B+73+11,A+5+2],text:"2",props:{className:"clickable ".concat(2===h?"selected":""),onClick:function(){return o(2)}}}},{type:"text",data:{start:[B+73+10,A+5+4],text:"3",props:{className:"clickable ".concat(3===h?"selected":""),onClick:function(){return o(3)}}}},{type:"text",data:{start:[B+73+2,A+5+4],text:"4",props:{className:"clickable ".concat(4===h?"selected":""),onClick:function(){return o(4)}}}},{type:"text",data:{start:[B+73+1,A+5+2],text:"5",props:{className:"clickable ".concat(5===h?"selected":""),onClick:function(){return o(5)}}}},{type:"text",data:{start:[B+73+3,A+5+0],text:"6",props:{className:"clickable ".concat(6===h?"selected":""),onClick:function(){return o(6)}}}},e&&{type:"text",data:{start:[B+5,A+26],text:c}},e&&{type:"text",data:{start:[B+5+c.length-5,A+26],text:"link",props:{href:P[n].url}}},{type:"text",data:{start:[B,A+30+5],maxWidth:90,text:"About this TV page\n----------------------\n\nWhy these videos?\n\nI was looking for some public domain videos to use here, and the National Parks Service and NASA had some fun ones!\n"}}],stringRenderChildElementDataGenerator:function(t,a,r){var s=(B+5)*t,o=(A+4)*a+r/2,c=60*t,d=21*a,u=l/h;return[i.a.createElement("div",{key:"tv-container",style:{left:"".concat(s,"px"),top:"".concat(o,"px"),width:"".concat(c,"px"),height:"".concat(d,"px"),position:"absolute",fontSize:"".concat(u,"px"),lineHeight:"".concat(u,"px")}},i.a.createElement(j,{key:"tv-screen-".concat(h),on:e,edgeModeOn:_,src:P[n].src,tvWidthPx:c,tvHeightPx:d}))]}}},work:function(){return{stringRenderData:[{type:"text",data:{start:[14,6],maxWidth:80,text:"In 2014, I joined Floored, a real estate tech startup specializing in space visualization and optimization problems, as a full-stack engineer. "}},{type:"textrect",data:{start:[14+I,2],isYRelative:!0,width:33,text:"  ..........                     ..............                     ...............                     ...............                     ..............                      ..............                      ..............                     ..............\u2218\xb7                    ........\xb7\u2022*#-                       ..\xb7\u2022*####-       \xb7\u2218               \u2218#######-       \u2218##*\u2218\xb7           \u2022#######-       \u2218#####-\u2218         \u2022#######-       \u2218######-\xb7        \u2022#####*\u2218.       \u2218###-\u2022......     \u2022##*-\xb7          \u2218*\u2022\xb7..........   \u2022-\u2218                ............\xb7-\u2218                     ......\xb7\u2022*##\u2218                       .\xb7\u2022*#####\u2218                       \xb7########\u2218                       \xb7########\u2218                       \xb7########\u2218               \xb7\u2022.     \xb7######*\u2218.               \u2218###\u2022\u2218  \xb7###-\u2218                   \u2218#####*\u2022\u2218-\u2218.                     \u2218#######*                        \u2218#######-                        \u2218#######-                        \u2218#######-                        \u2218#######-                        \u2218#######-                        \u2218#####-\u2022.                        \u2218##*\u2022\xb7                           \u2218-\xb7                        ",props:{className:"floored-purple"}}},{type:"text",data:{start:[14,4],isYRelative:!0,maxWidth:80,text:"In 2017, Floored was acquired by CBRE, and our team became CBRE Build NYC. "}},{type:"textrect",data:{start:[14,3],isYRelative:!0,width:71,text:"                     .\xb7\u2022-******-\u2218\u2022-*****-\xb7                                             \xb7\u2218-*********-********-****-\xb7                                          \xb7*********\u2218    \xb7*****\xb7  \xb7****-\u2218                                   .\xb7\u2218\u2022************-\xb7    \xb7****-\xb7  \xb7-****\u2218                                \u2218********-\u2022\u2218\xb7.\u2022****-.    \u2218****-.  \xb7****-\xb7                              ****\u2022\u2218\xb7         \u2022****-\xb7    \u2218****-\xb7  \xb7****-\xb7                           \u2218***               \u2218****-\xb7    \u2218****\u2022   \xb7-***.                         \xb7***\u2218   .\xb7\xb7\u2218\xb7         \u2218-***-\xb7    -**\u2022     -**-                        \u2218-*************\u2022.        \u2218-***\u2218            \u2218****\u2022                     \u2218**********---****-\u2218        \u2022**-             *****\u2022                    ***-\u2218\xb7.        \u2218*****\u2022.     .***\u2218            \u2218*****.                  \u2022***.             \xb7-*****\u2218.   \u2218***             *****\u2022                 \xb7***\u2218                .\u2022*****\xb7  .***\xb7            -*****                 -***                    \u2218-***.  -**-            \xb7*****\u2218               .***\u2218                      ***\u2022  \xb7***\u2218            \u2022*****\xb7             \xb7\u2022***\u2218                      -***   ****            .*******\u2218           *****\xb7                      .***\u2218  \u2218***\xb7            -*******\u2022.        .****   ..                    \u2022***.  -**-      .\xb7\u2218\u2022-*****-\u2218*****\u2022\xb7      \xb7***-. \u2022***\u2022\u2022                .***-\u2218\xb7\u2218***\u2022\u2218\u2022-**********-\u2022. .\u2218******-\u2218.   .****-******.   -\u2022\u2218\xb7.        *****************-\u2022\u2218\xb7.          \xb7\u2022****\u2218    \xb7**********\u2022\u2218\xb7.*****\u2022       \u2218\u2218\u2022--*******-\u2218\u2218\xb7.                 .***\u2218      \xb7\xb7\u2218\u2022-*************-\u2218\xb7\xb7.           ..                        \u2218***\u2218             .\xb7\u2218\u2022-****************-\u2022\u2218\xb7.                     ..\xb7\xb7\u2022*****\xb7                    .\xb7\u2218\u2022---***************-\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022---***********\u2022\xb7                                  ..\xb7\u2218\u2022-************************--\u2022\xb7                                              .\xb7\xb7\xb7\u2218\u2218\u2218\u2218\u2218\u2218\u2218\u2218\u2218\xb7\xb7..              ",props:{className:"cbre"}}},{type:"text",data:{start:[14,4],isYRelative:!0,maxWidth:80,text:"Working on the Floored / CBRE Build team has been an incredible experience.\n\n\nSome projects I've enjoyed:\n\n- building 3D scene-editing tools for our amazingly talented 3D art team\n\n- helping build a floorplan optimization product from the first commits through the MVP (and beyond)\n\n- accelerating 2D graph operations in said product\n\n- helping build a system for visualizing 2D floorplans in 3D\n\n- helping implement a faceted navigation feature using Algolia\n\n- contributing to a database system upgrade (CouchDB 1.x --\x3e 2.x) and writing a blog post about it: https://medium.com/cbrebuild/moving-to-couchdb-2-x-c2bc606970cb\n\n- spreading the word about our in-house WebGL graphics engine through documentation, tutorials, and presentations \n\n "}}]}},about:function(){return{stringRenderData:[{type:"text",data:{start:[L,Y],maxWidth:80,text:z}}]}}},V="ben.leveque@gmail.com",q=function(t,e){return{className:"clickable",onClick:function(){return t(e)}}},K=function(t){return[{type:"text",data:{start:[14,1],text:"Ben(jamin) LeVeque"}},{type:"text",data:{start:[-(V.length+3),1],text:V}},{type:"text",data:{start:[-("linkedin".length+3),2],text:"linkedin",props:{href:"https://www.linkedin.com/in/benjamin-leveque-5a534361/"}}},{type:"text",data:{start:[3,5],text:"Home",props:q(t,"home")}},{type:"text",data:{start:[3,3],isYRelative:!0,text:"Work",props:q(t,"work")}},{type:"text",data:{start:[3,3],isYRelative:!0,text:"TV",props:q(t,"tv")}},{type:"text",data:{start:[3,3],isYRelative:!0,text:"About",props:q(t,"about")}},{type:"line",data:{start:[13,4],end:["100%",4]}},{type:"line",data:{start:[12,0],end:[12,"98%"]}}]},J=function(t){var e=t.animationLength,a=void 0===e?400:e,n=t.intervalLength,i=void 0===n?50:n,r=t.onTick,_=t.onDone,s=0,h=setInterval((function(){s+=i,r(Math.min(1,s/a)),s>=a&&(clearInterval(h),_())}),i)},Q=function(){var t=Object(h.f)().pathname.substring(1);G.hasOwnProperty(t)||(t="home");var e=Object(n.useState)(t),a=Object(l.a)(e,2),r=a[0],_=a[1],s=Object(n.useState)(null),c=Object(l.a)(s,2),d=c[0],u=c[1],p=Object(n.useState)(0),g=Object(l.a)(p,2),v=g[0],f=g[1],m=Object(n.useState)(!1),x=Object(l.a)(m,2),b=x[0],w=x[1],C=Object(n.useState)(0),k=Object(l.a)(C,2),O=k[0],E=k[1],R=Object(n.useState)(!1),M=Object(l.a)(R,2),D=M[0],W=M[1],j=Object(n.useState)(4),N=Object(l.a)(j,2),H={tv:{tvOn:b,setTvOn:w,tvChannel:O,setTvChannel:E,tvEdgeModeOn:D,setTvEdgeModeOn:W,tvDimMultiplier:N[0],setTvDimMultiplier:N[1],fontSize:14}},S=G[r](H[r]),P=S.stringRenderData,B=S.stringRenderChildElementDataGenerator,A=K((function t(e){var a=G[e](H[e]).stringRenderData;u([].concat(Object(o.a)(a),Object(o.a)(K(t)))),J({onTick:f,onDone:function(){_(e),u(null)}})}));return i.a.createElement("div",{className:"root",style:{fontSize:"".concat(14,"px"),lineHeight:"".concat(14,"px")}},i.a.createElement(y,{className:"home-background",data:[].concat(Object(o.a)(P),Object(o.a)(A)),childElementDataGenerator:!d&&B,newData:d,interpolationParameter:v,autoResize:!0}))};_.a.render(i.a.createElement((function(){return i.a.createElement(s.a,null,i.a.createElement(h.c,null,i.a.createElement(h.a,{path:"/"},i.a.createElement(Q,null))))}),null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.17e39277.chunk.js.map