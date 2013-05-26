/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.txt / wet-boew.github.io/wet-boew/Licence-fra.txt
 *
 * Version: v3.0.8-development Build: 2013-05-26 06:22 PM
 *
 */
(function(a){a.fn.datalist=function(){return a(this).each(function(g){var h=a(this),k=this.id,e=k+"-label",i=pe.main.find("label").filter("[for="+k+"]"),m=a("#"+h.attr("list")),f,n,d=[],j,c,l,b;if(i.length!==0){i.attr("id",e)}j=function(q){var o,p;if(q.length!==0){o=q.toLowerCase();p=n.filter(function(){var s=a(this),r=s.find("span.al-value").html();if(r.length===0){r=s.find("span.al-label").html()}return(o.length===0||r.toLowerCase().indexOf(o)!==-1)})}else{p=n}f.empty().append(p);if(p.length!==0){l();f.removeClass("al-hide");h.attr("aria-expanded","true")}else{f.addClass("al-hide");h.attr("aria-expanded","false")}};c=function(){f.addClass("al-hide").empty();h.attr({"aria-expanded":"false","aria-activedescendent":""})};l=function(){f.css("width",h.innerWidth());if(pe.ie>0&&pe.ie<8){f.css("top",h.innerHeight()+13)}};pe.resize(l);m.find("option").each(function(r){var q=a(this),p=q.attr("value"),o=q.attr("label");if(p==="undefined"){p=q.text()}d.push('<li class="al-option" id="al-option-'+g+"-"+r+'"><a href="javascript:;"><span class="al-value">'+(p!=="undefined"?p:"")+'</span><span class="al-label">'+(o!=="undefined"?o:"")+"</span></a></li>")});h.attr({autocomplete:"off",role:"textbox","aria-haspopup":"true","aria-autocomplete":"list","aria-owns":"wb-autolist-"+g,"aria-activedescendent":""}).wrap('<div class="wb-al-container" role="application" aria-'+(i.length!==0?'labelledby="'+e:'-label="'+h.attr("title"))+'"/>');b=h.parent();f=a('<ul role="listbox" id="wb-autolist-'+g+'" class="wb-autolist al-hide" aria-hidden="true" aria-live="polite"></ul>');n=a(d.join(""));h.after(f);h.on("keyup keydown click vclick touchstart focus",function(r){var q=r.type,o=r.keyCode,p;if(q==="keyup"){if(!(r.ctrlKey||r.altKey||r.metaKey)){if((o>47&&o<58)||(o>64&&o<91)||o===32||o===8){j(h.val())}}}else{if(q==="keydown"){if(!(r.ctrlKey||r.metaKey)){if(!r.altKey&&!f.hasClass("al-hide")){if(o===27){c();return false}else{if((o===38||o===40)&&h.attr("aria-activedescendent")===""){if(o===38){p=f.find("a").last()}else{p=f.find("a").eq(0)}h.attr("aria-activedescendent",p.parent().attr("id"));pe.focus(p);return false}}}else{if(o===38||o===40){j("");return false}}}}else{if(q==="click"||q==="vclick"){if(!f.hasClass("al-hide")){c()}return false}else{if(q==="focus"&&pe.ie>0&&pe.ie<8){f.addClass("al-hide").empty()}}}}});f.on("keyup keydown click vclick touchstart","a, span",function(r){var u=r.type,t=r.keyCode,s=a(r.target),o,q,w,p=h.val(),v;if(u==="keyup"){if(!(r.ctrlKey||r.altKey||r.metaKey)){if((t>47&&t<58)||(t>64&&t<91)||t===32){h.val(p+String.fromCharCode(t));pe.focus(h);j(h.val())}else{if(t===8){if(h.val().length>0){h.val(p.substring(0,p.length-1));j(h.val())}pe.focus(h)}}}}else{if(u==="keydown"){if(!(r.ctrlKey||r.altKey||r.metaKey)){if(t===13){v=s.find("span.al-value").html();if(v.length===0){v=s.find("span.al-label").html()}h.val(v);pe.focus(h);c();return false}else{if(t===9||t===27){pe.focus(h);c();return false}else{if(t===38||t===40){o=f.find("a");if(o.length!==0){q=o.index(s);if(t===38){w=((q-1)===-1?o.last():o.eq(q-1))}else{w=((q+1)===o.length?o.eq(0):o.eq(q+1))}h.attr("aria-activedescendent",w.parent().attr("id"));pe.focus(w)}return false}}}}}else{if(u==="click"||u==="vclick"||u==="touchstart"){if(!s.hasClass("al-option")){s=s.parent()}v=s.find("span.al-value").html();if(v.length===0){v=s.find("span.al-label").html()}h.val(v);pe.focus(h);c()}}}});pe.document.on("click vclick touchstart",function(o){if(!f.hasClass("al-hide")&&!a(o.target).is(h)){c()}})})};a("input[list]").datalist()}(jQuery));