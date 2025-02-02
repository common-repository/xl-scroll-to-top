
/**
 scrollup v2.2.0
 Author: Mark Goodyear - http://markgoodyear.com
 Git: https://github.com/markgoodyear/scrollup
 Copyright 2014 Mark Goodyear.
 Licensed under the MIT license
 http://www.opensource.org/licenses/mit-license.php
 Twitter: @markgdyr
 */
;(function(c,b,a){c.fn.scrollUp=function(d){if(!c.data(a.body,"scrollUp")){c.data(a.body,"scrollUp",true);c.fn.scrollUp.init(d)}};c.fn.scrollUp.init=function(d){var g=c.fn.scrollUp.settings=c.extend({},c.fn.scrollUp.defaults,d),e=(g.scrollTitle)?g.scrollTitle:g.scrollText,f;if(g.scrollTrigger){f=c(g.scrollTrigger)}else{f=c("<a/>",{id:g.scrollName,href:"#top",title:e})}f.appendTo("body");if(!(g.scrollImg||g.scrollTrigger)){f.html(g.scrollText)}f.css({display:"none",position:"fixed",zIndex:g.zIndex});if(g.activeOverlay){c("<div/>",{id:g.scrollName+"-active"}).css({position:"absolute",top:g.scrollDistance+"px",width:"100%",borderTop:"1px dotted"+g.activeOverlay,zIndex:g.zIndex}).appendTo("body")}scrollEvent=c(b).scroll(function(){if(g.scrollFrom==="top"){scrollDis=g.scrollDistance}else{scrollDis=c(a).height()-c(b).height()-g.scrollDistance}switch(g.animation){case"fade":c((c(b).scrollTop()>scrollDis)?f.fadeIn(g.animationInSpeed):f.fadeOut(g.animationOutSpeed));break;case"slide":c((c(b).scrollTop()>scrollDis)?f.slideDown(g.animationInSpeed):f.slideUp(g.animationOutSpeed));break;default:c((c(b).scrollTop()>scrollDis)?f.show(0):f.hide(0))}});f.click(function(h){h.preventDefault();c("html, body").animate({scrollTop:0},g.scrollSpeed,g.easingType)})};c.fn.scrollUp.defaults={scrollName:"scrollUp",scrollDistance:300,scrollFrom:"top",scrollSpeed:300,easingType:"linear",animation:"fade",animationInSpeed:200,animationOutSpeed:200,scrollTrigger:false,scrollText:"Scroll to top",scrollTitle:false,scrollImg:false,activeOverlay:false,zIndex:2147483647};c.fn.scrollUp.destroy=function(d){c.removeData(a.body,"scrollUp");c("#"+c.fn.scrollUp.settings.scrollName).remove();c("#"+c.fn.scrollUp.settings.scrollName+"-active").remove();if(c.fn.jquery.split(".")[1]>=7){c(b).off("scroll",d)}else{c(b).unbind("scroll",d)}};c.scrollUp=c.fn.scrollUp})(jQuery,window,document);
