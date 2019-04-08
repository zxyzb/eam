(function(window){var svgSprite='<svg><symbol id="icon-share" viewBox="0 0 1024 1024"><path d="M768.704 703.616c-35.648 0-67.904 14.72-91.136 38.304l-309.152-171.712c9.056-17.568 14.688-37.184 14.688-58.272 0-12.576-2.368-24.48-5.76-35.936l304.608-189.152c22.688 20.416 52.384 33.184 85.216 33.184 70.592 0 128-57.408 128-128s-57.408-128-128-128-128 57.408-128 128c0 14.56 2.976 28.352 7.456 41.408l-301.824 187.392c-23.136-22.784-54.784-36.928-89.728-36.928-70.592 0-128 57.408-128 128 0 70.592 57.408 128 128 128 25.664 0 49.504-7.744 69.568-20.8l321.216 178.4c-3.04 10.944-5.184 22.208-5.184 34.08 0 70.592 57.408 128 128 128s128-57.408 128-128S839.328 703.616 768.704 703.616zM767.2 128.032c35.296 0 64 28.704 64 64s-28.704 64-64 64-64-28.704-64-64S731.904 128.032 767.2 128.032zM191.136 511.936c0-35.296 28.704-64 64-64s64 28.704 64 64c0 35.296-28.704 64-64 64S191.136 547.232 191.136 511.936zM768.704 895.616c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S804 895.616 768.704 895.616z"  ></path></symbol><symbol id="icon-trash" viewBox="0 0 1024 1024"><path d="M736 352.032L736.096 800h-0.128L288 799.968 288.032 352 736 352.032zM384 224h256v64h-256V224z m448 64h-128V202.624C704 182.048 687.232 160 640.16 160h-256.32C336.768 160 320 182.048 320 202.624V288H192a32 32 0 1 0 0 64h32V799.968C224 835.296 252.704 864 288.032 864h447.936A64.064 64.064 0 0 0 800 799.968V352h32a32 32 0 1 0 0-64z"  ></path><path d="M608 690.56a32 32 0 0 0 32-32V448a32 32 0 1 0-64 0v210.56a32 32 0 0 0 32 32M416 690.56a32 32 0 0 0 32-32V448a32 32 0 1 0-64 0v210.56a32 32 0 0 0 32 32"  ></path></symbol><symbol id="icon-trash_fill" viewBox="0 0 1024 1024"><path d="M832 288h-128V202.624C704 182.016 687.232 160 640.128 160h-256.256C336.768 160 320 182.016 320 202.624V288H192a32 32 0 0 0 0 64h224l192 0.032V352h224a32 32 0 0 0 0-64zM384 448a32 32 0 0 1 64 0v210.528a32 32 0 0 1-64 0V448z m192 0a32 32 0 0 1 64 0v210.528a32 32 0 0 1-64 0V448z m32-47.136H224v399.104c0 20.672 9.984 38.848 25.184 50.56 10.784 8.32 24.16 13.472 38.848 13.472h447.936c14.688 0 28.064-5.152 38.88-13.472 15.168-11.712 25.152-29.888 25.152-50.56V400.864h-192z"  ></path></symbol><symbol id="icon-calculator" viewBox="0 0 1024 1024"><path d="M320 384H640v85.333333H298.666667V384h21.333333zM170.666667 213.333333h597.333333v682.666667H170.666667V213.333333z m85.333333 85.333334v512h426.666667V298.666667H256z m42.666667 213.333333h85.333333v85.333333H298.666667v-85.333333z m128 0h85.333333v85.333333h-85.333333v-85.333333z m128 0h85.333333v128h-85.333333v-128z m-256 128h85.333333v85.333333H298.666667v-85.333333z m128 0h85.333333v85.333333h-85.333333v-85.333333z m128 0h85.333333v85.333333h-85.333333v-85.333333z m85.333333-170.666667H298.666667h341.333333zM170.666667 213.333333h597.333333v85.333334H170.666667V213.333333z" fill="#444444" ></path></symbol><symbol id="icon-friend_settings_light" viewBox="0 0 1024 1024"><path d="M797.866667 354.133333c0-157.866667-130.133333-288-288-288S221.866667 196.266667 221.866667 354.133333c0 117.333333 70.4 219.733333 172.8 264.533334-130.133333 42.666667-236.8 153.6-270.933334 296.533333-2.133333 10.666667 4.266667 21.333333 17.066667 23.466667h4.266667c10.666667 0 19.2-6.4 21.333333-17.066667C206.933333 757.333333 349.866667 640 509.866667 640c157.866667 2.133333 288-128 288-285.866667z m-533.333334 0c0-134.4 110.933333-245.333333 245.333334-245.333333s245.333333 110.933333 245.333333 245.333333-110.933333 245.333333-245.333333 245.333334c-136.533333 0-245.333333-110.933333-245.333334-245.333334zM893.866667 823.466667c-2.133333-2.133333-2.133333-4.266667-2.133334-6.4V789.333333c0-2.133333 0-4.266667 2.133334-6.4 6.4-4.266667 12.8-10.666667 17.066666-14.933333 2.133333-2.133333 2.133333-4.266667 2.133334-6.4-6.4-21.333333-17.066667-38.4-29.866667-53.333333-2.133333-2.133333-4.266667-2.133333-6.4-2.133334-6.4 2.133333-14.933333 6.4-21.333333 8.533334-2.133333 2.133333-4.266667 0-6.4 0-8.533333-4.266667-14.933333-8.533333-23.466667-14.933334l-4.266667-4.266666c-2.133333-8.533333-2.133333-14.933333-4.266666-23.466667 0-2.133333-2.133333-4.266667-4.266667-4.266667-6.4-2.133333-14.933333-2.133333-21.333333-4.266666h-21.333334c-6.4 2.133333-12.8 2.133333-19.2 4.266666-4.266667 0-4.266667 2.133333-6.4 6.4 0 6.4-2.133333 14.933333-4.266666 21.333334 0 2.133333-2.133333 4.266667-4.266667 6.4-8.533333 4.266667-17.066667 8.533333-23.466667 12.8-2.133333 0-4.266667 2.133333-6.4 0-6.4-2.133333-14.933333-6.4-21.333333-8.533334-2.133333-2.133333-4.266667 0-6.4 2.133334-14.933333 14.933333-25.6 34.133333-32 53.333333 0 2.133333 0 4.266667 2.133333 6.4 6.4 4.266667 12.8 8.533333 17.066667 14.933333 2.133333 2.133333 2.133333 4.266667 2.133333 6.4v27.733334c0 2.133333 0 4.266667-2.133333 6.4-6.4 4.266667-10.666667 10.666667-17.066667 14.933333-2.133333 2.133333-2.133333 4.266667-2.133333 6.4 6.4 19.2 17.066667 38.4 29.866667 53.333333 2.133333 2.133333 4.266667 2.133333 6.4 2.133334 6.4-2.133333 14.933333-6.4 21.333333-8.533334h6.4c8.533333 4.266667 17.066667 8.533333 25.6 14.933334 2.133333 2.133333 4.266667 4.266667 4.266667 6.4 2.133333 6.4 2.133333 12.8 2.133333 21.333333 0 4.266667 2.133333 6.4 6.4 6.4 6.4 0 12.8 2.133333 19.2 4.266667h23.466667c6.4-2.133333 10.666667-2.133333 17.066666-4.266667 4.266667 0 4.266667-2.133333 6.4-6.4 0-6.4 2.133333-14.933333 4.266667-21.333333 0-2.133333 2.133333-4.266667 4.266667-6.4 8.533333-4.266667 14.933333-8.533333 23.466666-12.8 2.133333 0 4.266667-2.133333 6.4 0 6.4 2.133333 14.933333 4.266667 21.333334 8.533333 2.133333 2.133333 4.266667 0 6.4-2.133333 14.933333-14.933333 25.6-34.133333 32-53.333334 0-2.133333 0-4.266667-2.133334-4.266666-6.4-8.533333-12.8-12.8-17.066666-19.2z m-113.066667 38.4c-32 0-57.6-25.6-57.6-57.6 0-32 25.6-57.6 57.6-57.6 32 0 57.6 25.6 57.6 57.6 0 32-25.6 57.6-57.6 57.6z"  ></path></symbol><symbol id="icon-appstore" viewBox="0 0 1024 1024"><path d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16z m-52 268H212V212h200v200zM864 144H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16z m-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16z m-52 268H212V612h200v200zM864 544H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16z m-52 268H612V612h200v200z"  ></path></symbol><symbol id="icon-project" viewBox="0 0 1024 1024"><path d="M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zM472 472h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zM664 544h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8z"  ></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-40 728H184V184h656v656z"  ></path></symbol><symbol id="icon-user" viewBox="0 0 1024 1024"><path d="M858.5 763.6c-18.9-44.8-46.1-85-80.6-119.5-34.5-34.5-74.7-61.6-119.5-80.6-0.4-0.2-0.8-0.3-1.2-0.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-0.4 0.2-0.8 0.3-1.2 0.5-44.8 18.9-85 46-119.5 80.6-34.5 34.5-61.6 74.7-80.6 119.5C146.9 807.5 137 854 136 901.8c-0.1 4.5 3.5 8.2 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c0.1 4.4 3.6 7.8 8 7.8h60c4.5 0 8.1-3.7 8-8.2-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"  ></path></symbol><symbol id="icon-linechart" viewBox="0 0 1024 1024"><path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"  ></path><path d="M305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6c-3.1-3.1-8.2-3.1-11.3 0l-230 229.9L461.4 404c-3.1-3.1-8.2-3.1-11.3 0L266.3 586.7c-3.1 3.1-3.1 8.2 0 11.3l39.5 39.7z"  ></path></symbol><symbol id="icon-bell" viewBox="0 0 1024 1024"><path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"  ></path></symbol><symbol id="icon-edit" viewBox="0 0 1024 1024"><path d="M257.7 752c2 0 4-0.2 6-0.5L431.9 722c2-0.4 3.9-1.3 5.3-2.8l423.9-423.9c3.9-3.9 3.9-10.2 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2c-1.9 11.1 1.5 21.9 9.4 29.8 6.6 6.4 14.9 9.9 23.8 9.9z m67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)