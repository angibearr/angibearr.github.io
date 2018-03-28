var sound2=document.getElementById("sound2");var sound3=document.getElementById("sound3");var sound4=document.getElementById("sound4");var isMobile,isSafari,isiPad;var parallax;var pages=["","Universum","Trilogy of novels","Our team","Gallery"];var currentPage=0;var currentBg,currentKitWidth;var realLoaded=false;var loadingFinished=false;var aInterval=0;window.onload=function(){if(loadingFinished===true){clearInterval(aInterval);document.querySelector(".t-loading-screen").outerHTML="";document.body.classList.remove("loading");var scene=document.getElementsByClassName('parallax-scene')[0];parallax=new Parallax(scene);document.querySelector(".o-stars-layer").classList.add("stars-anim");document.getElementsByClassName("o-content-kit")[0].classList.remove("transparent");if(!isMobile){document.getElementById("theme-song").play();document.body.classList.remove("first-landing");}setTimeout(function(){document.body.classList.remove("first-landing");},3000);}realLoaded=true;};window.onhashchange=function(){if(!document.body.contains(document.querySelector(".t-loading-screen"))){loadPage(document.getElementsByClassName("page-content")[0].getAttribute("data-page-name"));}document.getElementsByClassName("hamburger-button")[0].classList.remove("opened-nav");document.getElementsByClassName("o-content")[0].classList.remove("transparent");document.getElementsByTagName("body")[0].classList.remove("nav-open");};document.addEventListener("DOMContentLoaded",function(){userAgent=navigator.userAgent.toLowerCase();isMobile=/iphone|ipad|ipod|android/i.test(userAgent);isiPad=/iphone|ipad/i.test(userAgent);if(isMobile){document.querySelector(".sounds-button").classList.add("u-hidden");}else{document.getElementById("theme-song").setAttribute("preload","");}if(navigator.userAgent.search("Safari")>=0&&navigator.userAgent.search("Chrome")<0){isSafari=true;}if(isiPad){document.body.classList.add("iPad");}change_classes_after_reload(document.getElementsByClassName("bg-parallax")[0],false,["pos-h","pos-u","pos-r","pos-a","pos-n","pos-t","pos-g"]);setTimeout(function(){document.querySelector(".t-loading-screen .bg").classList.remove("transparent");percLoading();aInterval=setInterval(function(){alphabet();},900);},1000);});var loading;function percLoading(){p=parseInt(document.querySelector(".t-loading-screen h3.top").innerHTML);document.querySelector(".t-loading-screen h3.top").innerHTML=(++p);document.querySelector(".t-loading-screen .circle-loading>div:nth-child("+p+")").classList.add("shown");if(p<100){loading=setTimeout(function(){percLoading();},80);}else{loading=setTimeout(function(){document.querySelector(".t-loading-screen").classList.add("transparent");loading=setTimeout(function(){if(realLoaded===true){clearInterval(aInterval);document.querySelector(".t-loading-screen").outerHTML="";document.body.classList.remove("loading");var scene=document.getElementsByClassName('parallax-scene')[0];parallax=new Parallax(scene);document.querySelector(".o-stars-layer").classList.add("stars-anim");document.getElementsByClassName("o-content-kit")[0].classList.remove("transparent");if(!isMobile){document.getElementById("theme-song").play();document.body.classList.remove("first-landing");}setTimeout(function(){document.body.classList.remove("first-landing");},3000);}loadingFinished=true;},1400);if(document.getElementsByClassName("page-content")[0].hasAttribute("data-page-name")){loadPage(document.getElementsByClassName("page-content")[0].getAttribute("data-page-name"));}},1000);}}var aChars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];var aChance=.3;var aTimeout1=400;var aTimeout2=500;function alphabet(){for(ii=1;ii<7;ii++){var i=ii;if(Math.random()>aChance){alphabetAnim(ii);}}}function alphabetAnim(i){setTimeout(function(){if(document.body.contains(document.querySelector(".chars"))){document.querySelector(".chars .char:nth-child("+i+") .n").src="/src/assets/images/chars/"+aChars[Math.floor(Math.random()*aChars.length)]+".svg";document.querySelector(".chars .char:nth-child("+i+") .ch").classList.add("prev");document.querySelector(".chars .char:nth-child("+i+") .n").classList.remove("next");setTimeout(function(){if(document.body.contains(document.querySelector(".chars"))){document.querySelector(".chars .char:nth-child("+i+") .ch").src=document.querySelector(".chars .char:nth-child("+i+") .n").src;}},aTimeout1);setTimeout(function(){if(document.body.contains(document.querySelector(".chars"))){document.querySelector(".chars .char:nth-child("+i+") .ch").classList.remove("prev");document.querySelector(".chars .char:nth-child("+i+") .n").classList.add("next");}},aTimeout2);}},200*(i-1));}document.body.addEventListener('click',function(event){if(event.target.classList.contains("hamburger-button")){hamburger();sound(sound4);}else if(event.target.classList.contains("main-nav-link")){hamburger();sound(sound2);}else if(event.target.classList.contains("sounds-button")){sounds();}else if(event.target.classList.contains("socs-link")){sound(sound2);}else if(event.target.classList.contains("a-button-next-page")){sound(sound3);}if(event.target.hasAttribute("data-page")){event.preventDefault();if(event.target.getAttribute("data-page")!=document.getElementsByClassName("page-content")[0].getAttribute("data-page-name")||event.target.classList.contains("team-mobile-nav")||event.target.classList.contains("team-nav")){document.getElementsByClassName("o-content")[0].classList.add("transparent");setTimeout(function(){window.location=event.target.getAttribute("href");},1000);}}});function sound(s){if(!isMobile&&!isSafari&&!document.querySelector(".sounds-button").classList.contains("muted")){ss=s.cloneNode(true);ss.play();}}function sounds(){sounds_button=document.querySelector(".sounds-button");theme_song=document.getElementById("theme-song");if(sounds_button.classList.contains("muted")){sounds_button.classList.remove("muted");if(!isMobile)theme_song.play();}else{sounds_button.classList.add("muted");if(!isMobile)theme_song.pause();}}function hamburger(){hamburger_button=document.getElementsByClassName("hamburger-button")[0];page_content=document.getElementsByClassName("o-content")[0];if(hamburger_button.classList.contains("opened-nav")){hamburger_button.classList.remove("opened-nav");page_content.classList.remove("transparent");document.getElementsByTagName("body")[0].classList.remove("nav-open");}else{hamburger_button.classList.add("opened-nav");page_content.classList.add("transparent");document.getElementsByTagName("body")[0].classList.add("nav-open");}}function loadPage(page){bg=document.getElementsByClassName("bg-parallax")[0];pc=document.getElementsByClassName("page-content")[0];ln=document.getElementsByClassName("o-left-nav")[0];lnpn=document.querySelector(".o-left-nav .current-page-name");lnp=document.querySelector(".o-left-nav ul");currentKitWidth=(document.getElementsByClassName("page-content")[0].clientWidth/window.innerWidth)*100;document.getElementsByClassName("o-content-kit")[0].style.width=currentKitWidth+"%";document.getElementsByClassName("o-content-kit")[0].style.left=((100-currentKitWidth)/2)+"%";setTimeout(function(){document.getElementsByClassName("o-content")[0].classList.remove("transparent");},500);switch(page){case"home":change_classes_after_reload(bg,["pos-h"],["pos-u","pos-r","pos-a","pos-n","pos-t","pos-g"]);change_classes_after_reload(lnp,false,["shown"]);document.getElementsByClassName("o-glitch-layer")[0].classList.add("do-glitch");document.getElementsByClassName("o-glitch-layer")[1].classList.add("do-glitch");if(typeof(parallax)!=='undefined')parallax.enable();currentPage=0;currentBg="pos-h";break;case"universum":change_classes_after_reload(bg,["pos-u"],["pos-h","pos-r","pos-a","pos-n","pos-t","pos-g"]);change_classes_after_reload(lnp,["shown"],false);if(typeof(parallax)!=='undefined')parallax.disable();currentPage=1;currentBg="pos-u";break;case"universum2":case"universum3":change_classes_after_reload(bg,["pos-r"],["pos-h","pos-u","pos-a","pos-n","pos-t","pos-g"]);change_classes_after_reload(document.querySelector(".o-left-nav a[data-page='universum2']"),["active"],false);change_classes_after_reload(document.querySelector(".o-left-nav a[data-page='ativa']"),false,["active"]);change_classes_after_reload(lnp,["shown"],false);if(typeof(parallax)!=='undefined')parallax.disable();currentPage=1;currentBg="pos-r";break;case"universum4":change_classes_after_reload(bg,["pos-r"],["pos-h","pos-u","pos-a","pos-n","pos-t","pos-g"]);change_classes_after_reload(document.querySelector(".o-left-nav a[data-page='universum2']"),["active"],false);change_classes_after_reload(document.querySelector(".o-left-nav a[data-page='ativa']"),false,["active"]);change_classes_after_reload(lnp,["shown"],false);if(typeof(parallax)!=='undefined')parallax.disable();currentPage=1;currentBg="pos-r";break;case"ativa":case"ativans":case"axiner-tal":case"esinet-orte":change_classes_after_reload(bg,["pos-a"],["pos-h","pos-u","pos-r","pos-n","pos-t","pos-g"]);change_classes_after_reload(lnp,["shown"],false);change_classes_after_reload(document.querySelector(".o-left-nav a[data-page='ativa']"),["active"],false);change_classes_after_reload(document.querySelector(".o-left-nav a[data-page='universum2']"),false,["active"]);if(typeof(parallax)!=='undefined')parallax.disable();currentPage=1;currentBg="pos-a";break;case"vectum":change_classes_after_reload(bg,["pos-a"],["pos-h","pos-u","pos-r","pos-n","pos-t","pos-g"]);change_classes_after_reload(lnp,["shown"],false);change_classes_after_reload(document.querySelector(".o-left-nav a[data-page='ativa']"),false,["active"]);change_classes_after_reload(document.querySelector(".o-left-nav a[data-page='universum2']"),false,["active"]);if(typeof(parallax)!=='undefined')parallax.disable();currentPage=1;currentBg="pos-a";break;case"novel":case"novel2":change_classes_after_reload(bg,["pos-n"],["pos-h","pos-u","pos-r","pos-a","pos-t","pos-g"]);change_classes_after_reload(lnp,false,["shown"]);if(typeof(parallax)!=='undefined')parallax.disable();currentPage=2;currentBg="pos-n";break;case"team":change_classes_after_reload(bg,["pos-t"],["pos-h","pos-u","pos-r","pos-a","pos-n","pos-g"]);change_classes_after_reload(lnp,false,["shown"]);if(typeof(parallax)!=='undefined')parallax.disable();currentPage=3;currentBg="pos-t";break;case"gallery":change_classes_after_reload(bg,["pos-g"],["pos-h","pos-u","pos-r","pos-a","pos-n","pos-t"]);change_classes_after_reload(lnp,false,["shown"]);if(typeof(parallax)!=='undefined')parallax.disable();currentPage=4;currentBg="pos-g";break;}lnpn.innerHTML=pages[currentPage];var nextPageArrow=false,nextPageHTML="",nextPage="";switch(page){case"home":nextPage="universum";nextPageHTML="explore";break;case"universum":nextPage="universum2";nextPageArrow=true;nextPageHTML="<span class='arrow'></span>";break;case"universum2":nextPage="universum3";nextPageArrow=true;nextPageHTML="<span class='arrow'></span>";break;case"universum3":nextPage="ativa";nextPageArrow=true;nextPageHTML="<span class='arrow'></span>";break;case"ativa":nextPage="ativans";nextPageArrow=true;nextPageHTML="<span class='arrow'></span>";break;case"ativans":case"axiner-tal":case"esinet-orte":nextPage="vectum";nextPageArrow=true;nextPageHTML="<span class='arrow'></span>";break;case"vectum":nextPage="novel";nextPageHTML="Novel";break;case"novel":nextPage="novel2";nextPageArrow=true;nextPageHTML="<span class='arrow'></span>";break;case"novel2":nextPage="team-danny";nextPageHTML="Our team";break;case"team":nextPage="gallery";nextPageHTML="Gallery";break;case"gallery":default:nextPage="";nextPageHTML="Home";break;}nextPageButton=document.getElementById("next-page-permanent");nextPageButton.setAttribute("href","#/"+nextPage);nextPageButton.setAttribute("data-page",nextPage);if(nextPageArrow===true){nextPageButton.classList.add("arrow");}else{nextPageButton.classList.remove("arrow");}nextPageButton.innerHTML=nextPageHTML;}function change_classes_after_reload(el,add,remove){if(add!==false){add.forEach(function(cl){el.classList.add(cl);});}if(remove!==false){remove.forEach(function(cl){el.classList.remove(cl);});}}countdown.setLabels('||||',' | | | | | | | ','','');countdown(new Date(2027,6,31),function(ts){d=parseInt(ts)%365;document.querySelector('.countdown .d').innerHTML=(d>=10?d:"0"+d);},countdown.DAYS);countdown(new Date(2027,6,31),function(ts){h=parseInt(ts)%24;document.querySelector('.countdown .h').innerHTML=(h>=10?h:"0"+h);},countdown.HOURS);countdown(new Date(2027,6,31),function(ts){m=parseInt(ts)%60;document.querySelector('.countdown .m').innerHTML=(m>=10?m:"0"+m);},countdown.MINUTES);countdown(new Date(2027,6,31),function(ts){s=parseInt(ts)%60;document.querySelector('.countdown .s').innerHTML=(s>=10?s:"0"+s);},countdown.SECONDS);countdown(new Date(2027,6,31),function(ts){hs=parseInt((parseInt(ts)/10)%100);document.querySelector('.countdown .hs').innerHTML=(hs>=10?hs:"0"+hs);},countdown.MILLISECONDS);
