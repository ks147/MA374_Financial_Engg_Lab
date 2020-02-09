
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"1276",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"campaign",
      "vtp_defaultValue":"unknown",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__r"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){b:{var c=\"Visitor\\x3d\";var a=document.cookie.split(\";\");for(var b=0;b\u003Ca.length;b++){var e=a[b].trim();if(0==e.indexOf(c)){a=e.substring(c.length,e.length);break b}}a=\"\"}c={};if(a)for(a=a.split(\"\\x26\"),b=0;b\u003Ca.length;b++){var d=a[b];e=d.substring(0,d.indexOf(\"\\x3d\"));d=d.substring(d.indexOf(\"\\x3d\")+1);c[e]=d}return\"username\"in c\u0026\u0026-1!==c.username.indexOf(\"TMF\")?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"EmailReady.hashed_email"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"TMF",
      "vtp_name":"OrderResults.Partner"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"EcapResults.Source"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderPageView.Uid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderPageView.PixelUrl"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderPageView.ProductId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderPageView.PromoCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderPageView.Source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderPageView.Skin"
    },{
      "function":"__r"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"EmailReady.hashed_email_256"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"undefined\"!==typeof Fool\u0026\u0026\"undefined\"!==typeof Fool.Cookie)return Fool.Cookie.getValues(\"Visitor\").uid;if(\"undefined\"!==typeof jQuery.cookie){var b=jQuery.cookie(\"Visitor\");var a=\"uid\";a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");a=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";a=new RegExp(a);b=a.exec(b);b=null==b?\"\":decodeURIComponent(b[1].replace(\/\\+\/g,\" \"));return b}return 0})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.PromotionId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.OrderId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"1.00",
      "vtp_name":"OrderResults.Price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=function(c){c+=\"\\x3d\";for(var a=document.cookie.split(\";\"),d=0;d\u003Ca.length;d++){for(var b=a[d];\" \"===b.charAt(0);)b=b.substring(1,b.length);if(0===b.indexOf(c))return b.substring(c.length,b.length)}return null};a=a(\"utms\");a=a.split(\"\\x26\");var e=\"\";a.forEach(function(a,f){a=a.split(\"\\x3d\");\"utm_source\"==a[0]\u0026\u0026(e=a[1])});return e})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){b:{var c=\"PlookieUsmf\\x3d\";var a=document.cookie.split(\";\");for(var b=0;b\u003Ca.length;b++){var e=a[b].trim();if(0==e.indexOf(c)){a=e.substring(c.length,e.length);break b}}a=\"\"}c={};if(a)for(a=a.split(\"\\x26\"),b=0;b\u003Ca.length;b++){var d=a[b];e=d.substring(0,d.indexOf(\"\\x3d\"));d=d.substring(d.indexOf(\"\\x3d\")+1);c[e]=d}return\"C\"in c\u0026\u00260\u003Cc.C?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.Source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.ProductName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.ProductId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.HashedEmail"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.HashedEmail256"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.HashedFirstname256"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.HashedLastname256"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.HashedCity256"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.HashedState256"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.HashedZipcode256"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"EcapResults.Email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.Email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"AddToCart.Price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"EcapResults.Medium"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"EcapResults.HashedEmail"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f"
    },{
      "function":"__r"
    },{
      "function":"__j",
      "vtp_name":"Article"
    },{
      "function":"__k",
      "vtp_name":"Fool"
    },{
      "function":"__k",
      "vtp_name":"Sookie"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"!==typeof Fool\u0026\u0026\"undefined\"!==typeof Fool.Cookie?\"true\"==Fool.Cookie.getValues(\"Fool\").R?\"true\":\"false\":\"undefined\"!==typeof jQuery.cookie?\"true\"==getSubCookie(jQuery.cookie(\"Fool\"),\"R\")?\"true\":\"false\":!1})();"]
    },{
      "function":"__k",
      "vtp_name":"orderpage"
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__v",
      "vtp_name":"virtualUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[\"esafbtxt0000004\",\"esafbtxt0000006\",\"isafbtxt0000007\"],c=function(a){a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");a=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";a=new RegExp(a);a=a.exec(window.location.search);return null==a?\"\":decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))};return(-1\u003Cb.indexOf(c(\"source\"))).toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"undefined\"!==typeof Fool\u0026\u0026\"undefined\"!==typeof Fool.Cookie)return Fool.Cookie.getValues(\"Visitor\").visits;if(\"undefined\"!==typeof jQuery.cookie){var b=jQuery.cookie(\"Visitor\");var a=\"visits\";a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");a=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";a=new RegExp(a);b=a.exec(b);b=null==b?\"\":decodeURIComponent(b[1].replace(\/\\+\/g,\" \"));return b}return 0})();"]
    },{
      "function":"__v",
      "vtp_name":"source",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"product",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"!==typeof jQuery})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003CjQuery(\".confirmPasswordHotSpot\").size()})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__ctv"
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function A(){var h=\"\",l={};return{track:function(w,k){k.referrerFromTrackingLibrary=document.referrer;var m=UAParser();k.browserName=m.browser.name;k.browserVersion=m.browser.name+\"-\"+m.browser.major;k.browserEngine=m.engine.name;k.broswerDevice=m.device.type;k.browserOS=m.os.name+\" \"+m.os.version;\"undefined\"!==typeof analytics?(h=\"segmentio\",l=analytics):\"undefined\"!==typeof Keen?(h=\"keen\",l=Keen):\"undefined\"!==typeof keen\u0026\u0026(h=\"keen\",l=keen);switch(h){case \"segmentio\":l.track(w,k);break;\ncase \"keen\":l.addEvent(w,k)}}}}(function(h,l){var w=\"\",k=\"?\",m=\"function\",x=\"undefined\",B=\"object\",e=\"major\",g=\"model\",a=\"name\",c=\"type\",f=\"vendor\",b=\"version\",q=\"architecture\",C=\"console\",n=\"mobile\",p=\"tablet\",A=\"smarttv\",u={has:function(a,b){return-1!==b.toLowerCase().indexOf(a.toLowerCase())},lowerize:function(a){return a.toLowerCase()}},v=function(){for(var a,b=0,d,e,f,g,c,h=arguments;b\u003Ch.length;b+=2){c=h[b];var k=h[b+1];if(typeof a===x)for(f in a={},k)d=k[f],typeof d===B?a[d[0]]=l:a[d]=l;for(d=\ne=0;d\u003Cc.length;d++)if(g=c[d].exec(this.getUA())){for(f=0;f\u003Ck.length;f++)c=g[++e],d=k[f],typeof d===B\u0026\u00260\u003Cd.length?2==d.length?a[d[0]]=typeof d[1]==m?d[1].call(this,c):d[1]:3==d.length?a[d[0]]=typeof d[1]!==m||d[1].exec\u0026\u0026d[1].test?c?c.replace(d[1],d[2]):l:c?d[1].call(this,c,d[2]):l:4==d.length\u0026\u0026(a[d[0]]=c?d[3].call(this,c.replace(d[1],d[2])):l):a[d]=c?c:l;break}if(g)break}return a},t=function(a,b){for(var d in b)if(typeof b[d]===B\u0026\u00260\u003Cb[d].length)for(var c=0;c\u003Cb[d].length;c++){if(u.has(b[d][c],a))return d===\nk?l:d}else if(u.has(b[d],a))return d===k?l:d;return a},E={1:[\"\/8\",\"\/1\",\"\/3\"],2:\"\/4\",\"?\":\"\/\"},F={\"1.0\":\"\/8\",\"1.2\":\"\/1\",\"1.3\":\"\/3\",\"2.0\":\"\/412\",\"2.0.2\":\"\/416\",\"2.0.3\":\"\/417\",\"2.0.4\":\"\/419\",\"?\":\"\/\"},G={\"Evo Shift 4G\":\"7373KT\"},H={HTC:\"APA\",Sprint:\"Sprint\"},D={ME:\"4.90\",\"NT 3.11\":\"NT3.51\",\"NT 4.0\":\"NT4.0\",2E3:\"NT 5.0\",XP:[\"NT 5.1\",\"NT 5.2\"],Vista:\"NT 6.0\",7:\"NT 6.1\",8:\"NT 6.2\",\"8.1\":\"NT 6.3\",RT:\"ARM\"},I=[[\/(opera\\smini)\\\/((\\d+)?[\\w\\.-]+)\/i,\/(opera\\s[mobiletab]+).+version\\\/((\\d+)?[\\w\\.-]+)\/i,\/(opera).+version\\\/((\\d+)?[\\w\\.]+)\/i,\n\/(opera)[\\\/\\s]+((\\d+)?[\\w\\.]+)\/i],[a,b,e],[\/\\s(opr)\\\/((\\d+)?[\\w\\.]+)\/i],[[a,\"Opera\"],b,e],[\/(kindle)\\\/((\\d+)?[\\w\\.]+)\/i,\/(lunascape|maxthon|netfront|jasmine|blazer)[\\\/\\s]?((\\d+)?[\\w\\.]+)*\/i,\/(avant\\s|iemobile|slim|baidu)(?:browser)?[\\\/\\s]?((\\d+)?[\\w\\.]*)\/i,\/(?:ms|\\()(ie)\\s((\\d+)?[\\w\\.]+)\/i,\/(rekonq)((?:\\\/)[\\w\\.]+)*\/i,\/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\\\/((\\d+)?[\\w\\.-]+)\/i],[a,b,e],[\/(trident).+rv[:\\s]((\\d+)?[\\w\\.]+).+like\\sgecko\/i],[[a,\"IE\"],b,e],[\/(yabrowser)\\\/((\\d+)?[\\w\\.]+)\/i],\n[[a,\"Yandex\"],b,e],[\/(comodo_dragon)\\\/((\\d+)?[\\w\\.]+)\/i],[[a,\/_\/g,\" \"],b,e],[\/(chrome|omniweb|arora|[tizenoka]{5}\\s?browser)\\\/v?((\\d+)?[\\w\\.]+)\/i],[a,b,e],[\/(dolfin)\\\/((\\d+)?[\\w\\.]+)\/i],[[a,\"Dolphin\"],b,e],[\/((?:android.+)crmo|crios)\\\/((\\d+)?[\\w\\.]+)\/i],[[a,\"Chrome\"],b,e],[\/version\\\/((\\d+)?[\\w\\.]+).+?mobile\\\/\\w+\\s(safari)\/i],[b,e,[a,\"Mobile Safari\"]],[\/version\\\/((\\d+)?[\\w\\.]+).+?(mobile\\s?safari|safari)\/i],[b,e,a],[\/webkit.+?(mobile\\s?safari|safari)((\\\/[\\w\\.]+))\/i],[a,[e,t,E],[b,t,F]],[\/(konqueror)\\\/((\\d+)?[\\w\\.]+)\/i,\n\/(webkit|khtml)\\\/((\\d+)?[\\w\\.]+)\/i],[a,b,e],[\/(navigator|netscape)\\\/((\\d+)?[\\w\\.-]+)\/i],[[a,\"Netscape\"],b,e],[\/(swiftfox)\/i,\/(icedragon|iceweasel|camino|chimera|fennec|maemo\\sbrowser|minimo|conkeror)[\\\/\\s]?((\\d+)?[\\w\\.\\+]+)\/i,\/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\\\/((\\d+)?[\\w\\.-]+)\/i,\/(mozilla)\\\/((\\d+)?[\\w\\.]+).+rv:.+gecko\\\/\\d+\/i,\/(uc\\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|qqbrowser)[\\\/\\s]?((\\d+)?[\\w\\.]+)\/i,\/(links)\\s\\(((\\d+)?[\\w\\.]+)\/i,\/(gobrowser)\\\/?((\\d+)?[\\w\\.]+)*\/i,\n\/(ice\\s?browser)\\\/v?((\\d+)?[\\w\\._]+)\/i,\/(mosaic)[\\\/\\s]((\\d+)?[\\w\\.]+)\/i],[a,b,e],[\/(apple(?:coremedia|))\\\/((\\d+)[\\w\\._]+)\/i,\/(coremedia) v((\\d+)[\\w\\._]+)\/i],[a,b,e],[\/(aqualung|lyssna|bsplayer)\\\/([\\w\\.-]+)\/i],[a,b],[\/(ares|ossproxy)\\s((\\d+)[\\w\\.-]+)\/i],[a,b,e],[\/(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\\\/((\\d+)[\\w\\.-]+)\/i,\/(clementine|music player daemon)\\s((\\d+)[\\w\\.-]+)\/i,\/(lg player|nexplayer)\\s((\\d+)[\\d\\.]+)\/i,\/player\\\/(nexplayer|lg player)\\s((\\d+)[\\w\\.-]+)\/i],\n[a,b,e],[\/(nexplayer)\\s((\\d+)[\\w\\.-]+)\/i],[a,b,e],[\/(flrp)\\\/((\\d+)[\\w\\.-]+)\/i],[[a,\"Flip Player\"],b,e],[\/(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)\/i],[a],[\/(gstreamer) souphttpsrc (?:\\([^\\)]+\\)){0,1} libsoup\\\/((\\d+)[\\w\\.-]+)\/i],[a,b,e],[\/(htc streaming player)\\s[\\w_]+\\s\\\/\\s((\\d+)[\\d\\.]+)\/i,\/(java|python-urllib|python-requests|wget|libcurl)\\\/((\\d+)[\\w\\.-_]+)\/i,\/(lavf)((\\d+)[\\d\\.]+)\/i],[a,b,e],[\/(htc_one_s)\\\/((\\d+)[\\d\\.]+)\/i],[[a,\/_\/g,\" \"],b,e],[\/(mplayer)(?:\\s|\\\/)(?:(?:sherpya-){0,1}svn)(?:-|\\s)(r\\d+(?:-\\d+[\\w\\.-]+){0,1})\/i],\n[a,b],[\/(mplayer)(?:\\s|\\\/)((\\d+)[\\w\\.-]+)\/i,\/(mplayer) unknown-((\\d+)[\\w\\.\\-]+)\/i],[a,b,e],[\/(mplayer)\/i,\/(yourmuze)\/i,\/(media player classic|nero showtime)\/i],[a],[\/(nero (?:home|scout))\\\/((\\d+)[\\w\\.-]+)\/i],[a,b,e],[\/(nokia\\d+)\\\/((\\d+)[\\w\\.-]+)\/i],[a,b,e],[\/\\s(songbird)\\\/((\\d+)[\\w\\.-]+)\/i],[a,b,e],[\/(winamp)3 version ((\\d+)[\\w\\.-]+)\/i,\/(winamp)\\s((\\d+)[\\w\\.-]+)\/i,\/(winamp)mpeg\\\/((\\d+)[\\w\\.-]+)\/i],[a,b,e],[\/(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)\/i],[a],[\/(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\\\/((\\d+)[\\w\\.-]+)\/i],\n[a,b,e],[\/(smp)((\\d+)[\\d\\.]+)\/i],[a,b,e],[\/(vlc) media player - version ((\\d+)[\\w\\.]+)\/i,\/(vlc)\\\/((\\d+)[\\w\\.-]+)\/i,\/(xbmc|gvfs|xine|xmms|irapp)\\\/((\\d+)[\\w\\.-]+)\/i,\/(foobar2000)\\\/((\\d+)[\\d\\.]+)\/i,\/(itunes)\\\/((\\d+)[\\d\\.]+)\/i],[a,b,e],[\/(wmplayer)\\\/((\\d+)[\\w\\.-]+)\/i,\/(windows-media-player)\\\/((\\d+)[\\w\\.-]+)\/i],[[a,\/-\/g,\" \"],b,e],[\/windows\\\/((\\d+)[\\w\\.-]+) upnp\\\/[\\d\\.]+ dlnadoc\\\/[\\d\\.]+ (home media server)\/i],[b,e,[a,\"Windows\"]],[\/(com\\.riseupradioalarm)\\\/((\\d+)[\\d\\.]*)\/i],[a,b,e],[\/(rad.io)\\s((\\d+)[\\d\\.]+)\/i,\n\/(radio.(?:de|at|fr))\\s((\\d+)[\\d\\.]+)\/i],[[a,\"rad.io\"],b,e]],J=[[\/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\\)]\/i],[[q,\"amd64\"]],[\/(ia32(?=;))\/i],[[q,u.lowerize]],[\/((?:i[346]|x)86)[;\\)]\/i],[[q,\"ia32\"]],[\/windows\\s(ce|mobile);\\sppc;\/i],[[q,\"arm\"]],[\/((?:ppc|powerpc)(?:64)?)(?:\\smac|;|\\))\/i],[[q,\/ower\/,\"\",u.lowerize]],[\/(sun4\\w)[;\\)]\/i],[[q,\"sparc\"]],[\/(ia64(?=;)|68k(?=\\))|arm(?=v\\d+;)|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)\/i],[q,u.lowerize]],K=[[\/\\((ipad|playbook);[\\w\\s\\);-]+(rim|apple)\/i],[g,f,\n[c,p]],[\/applecoremedia\\\/[\\w\\.]+ \\((ipad)\/],[g,[f,\"Apple\"],[c,p]],[\/(apple\\s{0,1}tv)\/i],[[g,\"Apple TV\"],[f,\"Apple\"]],[\/(hp).+(touchpad)\/i,\/(kindle)\\\/([\\w\\.]+)\/i,\/\\s(nook)[\\w\\s]+build\\\/(\\w+)\/i,\/(dell)\\s(strea[kpr\\s\\d]*[\\dko])\/i],[f,g,[c,p]],[\/\\((ip[honed|\\s\\w*]+);.+(apple)\/i],[g,f,[c,n]],[\/\\((ip[honed|\\s\\w*]+);\/i],[g,[f,\"Apple\"],[c,n]],[\/(blackberry)[\\s-]?(\\w+)\/i,\/(blackberry|benq|palm(?=\\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola)[\\s_-]?([\\w-]+)*\/i,\/(hp)\\s([\\w\\s]+\\w)\/i,\/(asus)-?(\\w+)\/i],\n[f,g,[c,n]],[\/\\((bb10);\\s(\\w+)\/i],[[f,\"BlackBerry\"],g,[c,n]],[\/android.+((transfo[prime\\s]{4,10}\\s\\w+|eeepc|slider\\s\\w+))\/i],[[f,\"Asus\"],g,[c,p]],[\/(sony)\\s(tablet\\s[ps])\/i],[f,g,[c,p]],[\/(nintendo)\\s([wids3u]+)\/i],[f,g,[c,C]],[\/((playstation)\\s[3portablevi]+)\/i],[[f,\"Sony\"],g,[c,C]],[\/(sprint\\s(\\w+))\/i],[[f,t,H],[g,t,G],[c,n]],[\/(htc)[;_\\s-]+([\\w\\s]+(?=\\))|\\w+)*\/i,\/(zte)-(\\w+)*\/i,\/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\\s)sony)[_\\s-]?([\\w-]+)*\/i],[f,[g,\/_\/g,\" \"],[c,n]],[\/\\s((milestone|droid(?:[2-4x]|\\s(?:bionic|x2|pro|razr))?(:?\\s4g)?))[\\w\\s]+build\\\/\/i,\n\/(mot)[\\s-]?(\\w+)*\/i],[[f,\"Motorola\"],g,[c,n]],[\/android.+\\s((mz60\\d|xoom[\\s2]{0,2}))\\sbuild\\\/\/i],[[f,\"Motorola\"],g,[c,p]],[\/android.+((sch-i[89]0\\d|shw-m380s|gt-p\\d{4}|gt-n8000|sgh-t8[56]9))\/i],[[f,\"Samsung\"],g,[c,p]],[\/((s[cgp]h-\\w+|gt-\\w+|galaxy\\snexus))\/i,\/(sam[sung]*)[\\s-]*(\\w+-?[\\w-]*)*\/i,\/sec-((sgh\\w+))\/i],[[f,\"Samsung\"],g,[c,n]],[\/(sie)-(\\w+)*\/i],[[f,\"Siemens\"],g,[c,n]],[\/(maemo|nokia).*(n900|lumia\\s\\d+)\/i,\/(nokia)[\\s_-]?([\\w-]+)*\/i],[[f,\"Nokia\"],g,[c,n]],[\/android\\s3\\.[\\s\\w-;]{10}((a\\d{3}))\/i],\n[[f,\"Acer\"],g,[c,p]],[\/android\\s3\\.[\\s\\w-;]{10}(lg?)-([06cv9]{3,4})\/i],[[f,\"LG\"],g,[c,p]],[\/((nexus\\s[45]))\/i,\/(lg)[e;\\s-\\\/]+(\\w+)*\/i],[[f,\"LG\"],g,[c,n]],[\/android.+((ideatab[a-z0-9\\-\\s]+))\/i],[[f,\"Lenovo\"],g,[c,p]],[\/(lg) netcast\\.tv\/i],[f,[c,A]],[\/(mobile|tablet);.+rv:.+gecko\\\/\/i],[c,f,g]],L=[[\/(presto)\\\/([\\w\\.]+)\/i,\/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\\\/([\\w\\.]+)\/i,\/(khtml|tasman|links)[\\\/\\s]\\(?([\\w\\.]+)\/i,\/(icab)[\\\/\\s]([23]\\.[\\d\\.]+)\/i],[a,b],[\/rv:([\\w\\.]+).*(gecko)\/i],[b,a]],M=[[\/microsoft\\s(windows)\\s(vista|xp)\/i],\n[a,b],[\/(windows)\\snt\\s6\\.2;\\s(arm)\/i,\/(windows\\sphone(?:\\sos)*|windows\\smobile|windows)[\\s\\\/]?([ntce\\d\\.\\s]+\\w)\/i],[a,[b,t,D]],[\/(win(?=3|9|n)|win\\s9x\\s)([nt\\d\\.]+)\/i],[[a,\"Windows\"],[b,t,D]],[\/\\((bb)(10);\/i],[[a,\"BlackBerry\"],b],[\/(blackberry)\\w*\\\/?([\\w\\.]+)*\/i,\/(tizen)\\\/([\\w\\.]+)\/i,\/(android|webos|palmos|qnx|bada|rim\\stablet\\sos|meego)[\\\/\\s-]?([\\w\\.]+)*\/i],[a,b],[\/(symbian\\s?os|symbos|s60(?=;))[\\\/\\s-]?([\\w\\.]+)*\/i],[[a,\"Symbian\"],b],[\/mozilla.+\\(mobile;.+gecko.+firefox\/i],[[a,\"Firefox OS\"],b],\n[\/(nintendo|playstation)\\s([wids3portablevu]+)\/i,\/(mint)[\\\/\\s\\(]?(\\w+)*\/i,\/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\\\/\\s-]?([\\w\\.-]+)*\/i,\/(hurd|linux)\\s?([\\w\\.]+)*\/i,\/(gnu)\\s?([\\w\\.]+)*\/i],[a,b],[\/(cros)\\s[\\w]+\\s([\\w\\.]+\\w)\/i],[[a,\"Chromium OS\"],b],[\/(sunos)\\s?([\\w\\.]+\\d)*\/i],[[a,\"Solaris\"],b],[\/\\s([frentopc-]{0,4}bsd|dragonfly)\\s?([\\w\\.]+)*\/i],[a,b],[\/(ip[honead]+)(?:.*os\\s*([\\w]+)*\\slike\\smac|;\\sopera)\/i],[[a,\"iOS\"],[b,\/_\/g,\".\"]],\n[\/(mac\\sos\\sx)\\s?([\\w\\s\\.]+\\w)*\/i],[a,[b,\/_\/g,\".\"]],[\/(haiku)\\s(\\w+)\/i,\/(aix)\\s((\\d)(?=\\.|\\)|\\s)[\\w\\.]*)*\/i,\/(macintosh|mac(?=_powerpc)|plan\\s9|minix|beos|os\\\/2|amigaos|morphos|risc\\sos)\/i,\/(unix)\\s?([\\w\\.]+)*\/i],[a,b]],r=function(a){var b=a||(h\u0026\u0026h.navigator\u0026\u0026h.navigator.userAgent?h.navigator.userAgent:w);if(!(this instanceof r))return(new r(a)).getResult();this.getBrowser=function(){return v.apply(this,I)};this.getCPU=function(){return v.apply(this,J)};this.getDevice=function(){return v.apply(this,\nK)};this.getEngine=function(){return v.apply(this,L)};this.getOS=function(){return v.apply(this,M)};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return b};this.setUA=function(a){b=a;return this};this.setUA(b)};if(typeof exports!==x)typeof module!==x\u0026\u0026module.exports\u0026\u0026(exports=module.exports=r),exports.UAParser=r;else if(h.UAParser=r,typeof define===m\u0026\u0026define.amd\u0026\u0026\ndefine(function(){return r}),typeof h.jQuery!==x){var y=h.jQuery,z=new r;y.ua=z.getResult();y.ua.get=function(){return z.getUA()};y.ua.set=function(a){z.setUA(a);a=z.getResult();for(var b in a)y.ua[b]=a[b]}}})(this);return A()})();"]
    },{
      "function":"__v",
      "vtp_name":"EcapOccurred",
      "vtp_defaultValue":"false",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"!==typeof Fool\u0026\u0026\"undefined\"!==typeof Fool.Cookie?\"undefined\"!=typeof Fool.Cookie.getValues(\"PlookieUsmf\")[\"1255\"]:\"undefined\"!==typeof jQuery.cookie?\"undefined\"!=typeof getSubCookie(jQuery.cookie(\"PlookieUsmf\"),\"1255\"):!1})();"]
    },{
      "function":"__v",
      "vtp_name":"campaign",
      "vtp_defaultValue":"unknown",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__j",
      "vtp_name":"order"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.order;return\"undefined\"===typeof a||\"undefined\"===typeof a.serviceName?!1:a.serviceName})();"]
    },{
      "function":"__j",
      "vtp_name":"window.google_tag_params"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"!==typeof window._pp})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(-1\u003Cwindow.location.href.indexOf(\".aspx\")\u0026\u00260\u003Cdocument.getElementsByTagName(\"h1\").length)for(var b=document.getElementsByTagName(\"h1\"),a=0;a\u003Cb.length;a++)if(h1=b[a],\"404\"==h1.innerText)return!0;return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return location.href.toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=navigator.userAgent||navigator.vendor||window.opera;return\/(android|bb\\d+|meego).+mobile|avantgo|bada\\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino\/i.test(a)||\/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-\/i.test(a.substr(0,\n4))?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b={desktop:769,tablet:321,mobile:0},a;for(a in b)if(window.screen.width\u003E=b[a])return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"EcapResults.HashedEmail256"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"page_slug",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"EcapResults.Campaign"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_id",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"isEcapped"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"EcapResults.Medium"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__hid"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":99,
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-obct type=\"text\/gtmscript\"\u003E!function(d,e){var b=\"002906dcc853f6eb1963e0797b4404c5ad\";if(d.obApi){var c=function(a){return\"[object Array]\"===Object.prototype.toString.call(a)?a:[a]};d.obApi.marketerId=c(d.obApi.marketerId).concat(c(b))}else{var a=d.obApi=function(){a.dispatch?a.dispatch.apply(a,arguments):a.queue.push(arguments)};a.version=\"1.1\";a.loaded=!0;a.marketerId=b;a.queue=[];b=e.createElement(\"script\");b.async=!0;b.src=\"\/\/amplify.outbrain.com\/cp\/obtp.js\";b.type=\"text\/javascript\";c=e.getElementsByTagName(\"script\")[0];\nc.parentNode.insertBefore(b,c)}}(window,document);obApi(\"track\",\"PAGE_VIEW\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":519
    },{
      "function":"__html",
      "priority":88,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\" src=\"https:\/\/embed.evenfinancial.com\/script\/helper\/bundle.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":521
    },{
      "function":"__html",
      "priority":10,
      "unlimited":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\" id=\"comscore_init_script_",["escape",["macro",22],3],"\"\u003Evar _comscore=_comscore||[];_comscore.push({c1:\"2\",c2:\"17054958\"});(function(){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.async=!0;a.id=\"comscore_script_",["escape",["macro",22],7],"\";a.src=(\"https:\"==document.location.protocol?\"https:\/\/sb\":\"http:\/\/b\")+\".scorecardresearch.com\/beacon.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"\/\/b.scorecardresearch.com\/p?c1=2\u0026amp;c2=17054958\u0026amp;cv=2.0\u0026amp;cj=1\"\u003E\n\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "priority":2,
      "once_per_event":true,
      "vtp_html":"\n \u003Cscript type=\"text\/gtmscript\"\u003E!function(b){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var a=window.pintrk;a.queue=[];a.version=\"3.0\";a=document.createElement(\"script\");a.async=!0;a.src=b;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(\"https:\/\/s.pinimg.com\/ct\/core.js\");pintrk(\"load\",\"2614449390740\");pintrk(\"page\");\u003C\/script\u003E\n \u003Cnoscript\u003E\n   \u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/ct.pinterest.com\/v3\/?tid=2614449390740\u0026amp;event=init\u0026amp;noscript=1\"\u003E\n \u003C\/noscript\u003E\n ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":591
    },{
      "function":"__cl",
      "tag_id":61
    },{
      "function":"__img",
      "vtp_useCacheBuster":false,
      "vtp_url":["template","\/\/","infotron.fool.com\/pitcher\/record_user_attribute\/VideoPageAbandon\/",["escape",["macro",2],3]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "tag_id":138
    },{
      "function":"__img",
      "vtp_useCacheBuster":true,
      "vtp_url":["template","\/\/infotron.fool.com\/pitcher\/record_user_attribute\/Ecap\/",["escape",["macro",2],3]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":143
    },{
      "function":"__img",
      "vtp_useCacheBuster":false,
      "vtp_url":["template","\/\/","infotron.fool.com\/pitcher\/record_user_attribute\/EcapLP\/",["escape",["macro",2],3]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "tag_id":144
    },{
      "function":"__img",
      "vtp_useCacheBuster":true,
      "vtp_url":["template","\/\/","p.rfihub.com\/ca.gif?rb=9749\u0026ca=20562175"],
      "vtp_cacheBusterQueryParam":"ra",
      "vtp_randomNumber":["macro",3],
      "tag_id":218
    },{
      "function":"__crto",
      "once_per_event":true,
      "vtp_accountId":"27608",
      "vtp_hashedEmail":["macro",5],
      "vtp_tagType":"HOME_TAG",
      "vtp_siteType":["macro",6],
      "tag_id":385
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"821251",
      "tag_id":405
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"831400",
      "tag_id":406
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"831462",
      "tag_id":407
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"240466",
      "tag_id":408
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"859171",
      "tag_id":409
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/trends.revcontent.com\/conv.php?t=GX31SqPRrTGFaA%2BZLJ%2FnJc5yfbH5hnDg0ae7FAZMUTWpFLC74Vn0WnTem1WqmeYH",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":411
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.dianomi.com\/pixeltrack.pl?t=FOOL",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":422
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/bat.bing.com\/action\/0?ti=5151830\u0026amp;Ver=2",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":423
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/trends.revcontent.com\/conv.php?t=oAqQr9GHAaR8WaS7XMKtSg5fsWGCloYYfEg6x0w7scdFwPQtQM3MmhqikXWNZbVw",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":432
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/myfinance.go2cloud.org\/aff_l?offer_id=14",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":433
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimpj\/N553.amex\/B22113503.236413603;dc_trk_aid=433913379;dc_trk_cid=110088570;u=MF8110002;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":440
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimpj\/N553.amex\/B22113503.236413603;dc_trk_aid=433913379;dc_trk_cid=110088570;u=MF8110005;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":441
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"803689071",
      "vtp_conversionLabel":"38sWCJbu64MBEO-knf8C",
      "vtp_url":["macro",10],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":449
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"803689071",
      "vtp_conversionLabel":"POO1CKuq84MBEO-knf8C",
      "vtp_url":["macro",10],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":450
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"927869",
      "tag_id":451
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":456
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimpj\/N553.amex\/B22113503.236413603;dc_trk_aid=433913379;dc_trk_cid=110088570;u=MF8110025;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":462
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N3941.fool.com\/B23598328.265521843;dc_trk_aid=460356156;dc_trk_cid=67442974;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":463
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N3941.fool.com\/B23598328.265186685;dc_trk_aid=460356150;dc_trk_cid=67442974;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":464
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N3941.fool.com\/B23598328.265518783;dc_trk_aid=460356153;dc_trk_cid=67442974;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":465
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":467
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":468
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":469
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":470
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":471
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":472
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":473
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":474
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":487
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":490
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":491
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":492
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":493
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N7285.3096THEMOTLEYFOOL\/B10441782.231577213;dc_trk_aid=318634803;dc_trk_cid=79790866;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":494
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":496
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":497
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.dianomi.com\/pixeltrack.pl?t=boa.cash.rewards",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":502
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":515
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/a.mgid.com\/1x1.gif?id=46172\u0026type=c\u0026g=x\u0026t=x\u0026tg=\u0026v=1\u0026r=",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":526
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N84001.3096THEMOTLEYFOOL\/B23594548.263893893;dc_trk_aid=459488087;dc_trk_cid=126743288;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":530
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N84001.3096THEMOTLEYFOOL\/B23594548.263893890;dc_trk_aid=459490076;dc_trk_cid=126743279;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":531
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N84001.3096THEMOTLEYFOOL\/B23594548.263841982;dc_trk_aid=459490037;dc_trk_cid=126759705;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":532
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N84001.3096THEMOTLEYFOOL\/B23594548.263531162;dc_trk_aid=459467199;dc_trk_cid=126826489;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":533
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N3941.fool.com\/B23598328.265185887;dc_trk_aid=460356147;dc_trk_cid=67442974;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":534
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N805.mf2004\/B23455123.260317876;dc_trk_aid=456628666;dc_trk_cid=124759388;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":535
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":557
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":558
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":559
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":560
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":561
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":562
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N970858.1970501CONSUMERTRACK\/B22519465.243404464;dc_trk_aid=440113133;dc_trk_cid=114145505;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":563
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"WiderFunnel Event",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",13],
      "vtp_eventLabel":["macro",14],
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":566
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"760307589",
      "vtp_conversionLabel":"a5vxCIbAipYBEIW_xeoC",
      "vtp_url":["macro",10],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":568
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"760307589",
      "vtp_conversionLabel":"T-lNCIX99ZUBEIW_xeoC",
      "vtp_url":["macro",10],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":569
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"ecap",
      "vtp_tagId":"5151830",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "tag_id":570
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"FE Order Page Modal",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click modal CTA",
      "vtp_eventLabel":["macro",14],
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":574
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Chrome Extension Hello Bar",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click button CTA",
      "vtp_eventLabel":["macro",15],
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":576
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"o1oqt",
      "tag_id":585
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"5 Free Stocks Modal",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click modal CTA",
      "vtp_eventLabel":["macro",14],
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":586
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"Purchase",
      "vtp_twitter_pixel_id":"o1oqt",
      "tag_id":587
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"Signup",
      "vtp_twitter_pixel_id":"o1oqt",
      "tag_id":588
    },{
      "function":"__hjtc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_hotjar_site_id":"252959",
      "tag_id":609
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Instant Upgrade Event",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Yellow Button Click",
      "vtp_eventLabel":["macro",14],
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":610
    },{
      "function":"__bzi",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_id":"42522",
      "tag_id":612
    },{
      "function":"__bzi",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_id":"1376554",
      "tag_id":619
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/trk.lockerdome.com\/ldpix.gif?ldc=8823685167449857_themotleyfool_lead",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":622
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/trk.lockerdome.com\/ldpix.gif?ldc=8823685167449857_themotleyfool_conv",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":623
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"803689071",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",10],
      "vtp_enableRdpCheckbox":false,
      "tag_id":648
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"1069646824",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",10],
      "vtp_enableRdpCheckbox":false,
      "tag_id":649
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"760307589",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",10],
      "vtp_enableRdpCheckbox":false,
      "tag_id":650
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Advertorial",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click Question CTA",
      "vtp_eventLabel":"Yes",
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":651
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Advertorial",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click Continue CTA",
      "vtp_eventLabel":"Continue",
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":652
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Advertorial",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click Question CTA",
      "vtp_eventLabel":"No",
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":653
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026.yp=430113\u0026ec=ulead",
      "tag_id":654
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026.yp=430113\u0026ec=usale",
      "tag_id":655
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"FE Order Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click CTA Button",
      "vtp_eventLabel":"In-content CTA",
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":656
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"FE Order Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click CTA Button",
      "vtp_eventLabel":"Sticky Header CTA",
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":657
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template",["escape",["macro",17],14,3],"?uid=",["escape",["macro",16],12],"\u0026product_id=",["escape",["macro",18],12],"\u0026promo_code=",["escape",["macro",19],12],"\u0026source=",["escape",["macro",20],12],"\u0026skin=",["escape",["macro",21],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",3],
      "tag_id":658
    },{
      "function":"__hl",
      "tag_id":661
    },{
      "function":"__cl",
      "tag_id":662
    },{
      "function":"__cl",
      "tag_id":663
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_933",
      "tag_id":664
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1024",
      "tag_id":665
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1025",
      "tag_id":666
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1027",
      "tag_id":667
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1030",
      "tag_id":668
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1032",
      "tag_id":669
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1033",
      "tag_id":670
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1034",
      "tag_id":671
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1035",
      "tag_id":672
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1036",
      "tag_id":673
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1037",
      "tag_id":674
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1038",
      "tag_id":675
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1039",
      "tag_id":676
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1040",
      "tag_id":677
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1041",
      "tag_id":678
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1042",
      "tag_id":679
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1043",
      "tag_id":680
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1133",
      "tag_id":681
    },{
      "function":"__cl",
      "tag_id":682
    },{
      "function":"__cl",
      "tag_id":683
    },{
      "function":"__cl",
      "tag_id":684
    },{
      "function":"__cl",
      "tag_id":685
    },{
      "function":"__cl",
      "tag_id":686
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1303",
      "tag_id":687
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1304",
      "tag_id":688
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"90",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"122374_1331",
      "vtp_enableTriggerStartOption":true,
      "tag_id":689
    },{
      "function":"__cl",
      "tag_id":690
    },{
      "function":"__cl",
      "tag_id":691
    },{
      "function":"__cl",
      "tag_id":692
    },{
      "function":"__cl",
      "tag_id":693
    },{
      "function":"__cl",
      "tag_id":694
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar getQueryStringParam=function(a){a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");a=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";a=new RegExp(a);a=a.exec(window.location.search);return null==a?\"\":decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))},gtmAid=getQueryStringParam(\"vsaid\"),gtmSource=getQueryStringParam(\"src\"),gtmIid=getQueryStringParam(\"iid\"),isExternal=\"e\"==gtmSource.substr(0,1),isEcapWidget=\"ewd\"==gtmSource.substr(6,3);\nif(isExternal){var externalPartner=gtmSource.substr(3,3);dataLayer.push({event:\"externalEcapPartner_\"+externalPartner})}setTimeout(\"trackEcap()\",1E3);function trackEcap(){dataLayer.push({event:\"ecapDataHelperComplete\"})};\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":25
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar getQueryStringParam=function(a){a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");a=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";a=new RegExp(a);a=a.exec(window.location.search);return null==a?\"\":decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))},sourceParam=getQueryStringParam(\"source\"),externalPartnerSourceParam=sourceParam.substr(3,3),srcParam=getQueryStringParam(\"src\"),externalPartnerSrcParam=srcParam.substr(3,3);\nif(\"a4d\"==externalPartnerSourceParam||\"a4d\"==externalPartnerSrcParam){var iframeObj=document.createElement(\"iframe\");i;iframeObj.width=0;iframeObj.height=0;iframeObj.title=\"freshtrx pixel\";iframeObj.src=\"https:\/\/freshtrx.com\/p.ashx?o\\x3d52790\\x26t\\x3dTRANSACTION_ID\"};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":202
    },{
      "function":"__html",
      "metadata":["map"],
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");var sha256Email=\"",["escape",["macro",24],7],"\";\"\"!=sha256Email?fbq(\"init\",\"1561515534098628\",{em:sha256Email}):fbq(\"init\",\"1561515534098628\");\nfbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1561515534098628\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":241
    },{
      "function":"__html",
      "unlimited":true,
      "vtp_html":"\u003Cdiv id=\"infotron_pixel_1\" style=\"display:none\"\u003E\u003C\/div\u003E\n\u003Cdiv id=\"infotron_pixel_2\" style=\"display:none\"\u003E\u003C\/div\u003E\n\u003Cdiv id=\"infotron_pixel_3\" style=\"display:none\"\u003E\u003C\/div\u003E\n\n\u003Cscript id=\"infotron_pixel_script_block\" type=\"text\/gtmscript\"\u003Efunction infotron_pixel_1(a){document.getElementById(\"infotron_pixel_1\").innerHTML=a}function infotron_pixel_2(a){document.getElementById(\"infotron_pixel_2\").innerHTML=a}function infotron_pixel_3(a){document.getElementById(\"infotron_pixel_3\").innerHTML=a}function getScript(a,c){var b=document.createElement(\"script\");b.src=a+\"\\x26callback\\x3d\"+c;b.id=c+\"_script\";document.getElementsByTagName(\"head\")[0].appendChild(b)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":253
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar googletag=googletag||{};googletag.cmd=googletag.cmd||[];googletag.cmd.push(function(){googletag.defineSlot(\"\/3910\/usmf.newsletters\",[470,300],\"div-gpt-ad-1433440511681-0\").addService(googletag.pubads()).setCollapseEmptyDiv(!0);googletag.enableServices()});\njQuery.ajax({url:\"\/\/www.googletagservices.com\/tag\/js\/gpt.js\",dataType:\"script\",cache:!0,success:function(){jQuery(\"#InfotronNewsletterArticlePitch\").after('\\x3cdiv id\\x3d\"div-gpt-ad-1433440511681-0\" style\\x3d\"width:470px; height:300px;\"\\x3e');googletag.cmd.push(function(){googletag.display(\"div-gpt-ad-1433440511681-0\")})}});\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":254
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_supportDocumentWrite":false,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{$(\"#id_card_number\").change(function(){var a=$(this).val();16\u003Ea.length||(a=get_card_type(a),$.ajax({url:\"https:\/\/infotron.fool.com\/pitcher\/record_user_attribute\/octype-\"+a+\"\/1\",dataType:\"jsonp\",jsonp:\"callback\",jsonpCallback:\"jsponCallBack_\"+Math.floor(1E8*Math.random()+1),crossDomain:!0}),document.cookie=\"octype\\x3d\"+a+\";expires\\x3dThu, 31 Dec 2015 12:00:00 UTC; domain\\x3d.fool.com; path\\x3d\/\")})}catch(a){}\nfunction get_card_type(a){visa_regex=\/^4[0-9]{0,15}$\/;mastercard_regex=\/^5$|^5[1-5][0-9]{0,14}$\/;amex_regex=\/^3$|^3[47][0-9]{0,13}$\/;diners_regex=\/^3$|^3[068]$|^3(?:0[0-5]|[68][0-9])[0-9]{0,11}$\/;discover_regex=\/^6$|^6[05]$|^601[1]?$|^65[0-9][0-9]?$|^6(?:011|5[0-9]{2})[0-9]{0,12}$\/;jcb_regex=\/^2[1]?$|^21[3]?$|^1[8]?$|^18[0]?$|^(?:2131|1800)[0-9]{0,11}$|^3[5]?$|^35[0-9]{0,14}$\/;if(a.match(visa_regex))return\"v\";if(a.match(mastercard_regex))return\"m\";if(a.match(amex_regex))return\"a\";if(a.match(discover_regex))return\"d\"}\n;\u003C\/script\u003E",
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":268
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar ssaUrl=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"centro.pixel.ad\/iap\/37735c612e457a4b\";(new Image).src=ssaUrl;\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":287
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Enull!==document.getElementById(\"upsell-fool-pass-form\")\u0026\u0026(!0!==jQuery(\"#upsell-fool-pass-form\").is(\":visible\")?Infotrack.track(\"FoolPass Fail\",{category:\"FoolPass\",label:\"Fool Pass Failed to Show When it Should\"}):Infotrack.track(\"FoolPass Success\",{category:\"FoolPass\",label:\"Fool Pass Showed When it was Supposed To\"}));\u003C\/script\u003E  \n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":291
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"5151830\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":292
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-obct type=\"text\/gtmscript\"\u003E!function(a,b){var d=[\"00e9ce2f1c669946a79bfac548f4eebd1a\",\"00afaf09ccd9eeb7f3333963113cad51d6\"];if(a.obApi)b=function(a){return\"[object Array]\"===Object.prototype.toString.call(a)?a:[a]},a.obApi.marketerId=b(a.obApi.marketerId).concat(b(d));else{var c=a.obApi=function(){c.dispatch?c.dispatch.apply(c,arguments):c.queue.push(arguments)};c.version=\"1.1\";c.loaded=!0;c.marketerId=d;c.queue=[];a=b.createElement(\"script\");a.async=!0;a.src=\"\/\/amplify.outbrain.com\/cp\/obtp.js\";a.type=\"text\/javascript\";b=b.getElementsByTagName(\"script\")[0];\nb.parentNode.insertBefore(a,b)}}(window,document);obApi(\"track\",\"PAGE_VIEW\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":299
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\" id=\"twitter_script\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" id=\"twitter_init_script\"\u003Etwttr.conversion.trackPid(\"nuo4p\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuo4p\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=nuo4p\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":306
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar campaign=\"",["escape",["macro",2],7],"\";if(\"\"!=campaign){var campaignKeenClient=new Keen({projectId:\"5798087538314468b82abada\",writeKey:\"e188d9ad4223e77b9e6a3345f6865cb1f19e6b48643b08ef456dd33052f8c0bf5e7ec2f32cfdc8f47fcd30e40ee411d8f3d332d4d617fb829456ce6f89cdc5ebe4837c3dfdc2786625ffcf64d8e035c6a82a3ea7c66e867d4327c4d3609ba7d2\"});campaignKeenClient.addEvent(\"CampaignTraffic\",{type:\"video\",campaign:\"",["escape",["macro",2],7],"\"})};\u003C\/script\u003E "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":329
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Clink rel=\"stylesheet\" href=\"https:\/\/maxcdn.bootstrapcdn.com\/font-awesome\/4.6.3\/css\/font-awesome.min.css\"\u003E\n\u003Clink rel=\"stylesheet\" href=\"https:\/\/fonts.googleapis.com\/css?family=Lato:700|Lora:400,400italic\"\u003E\n\n\u003Cstyle\u003E\n    #ouibounce-modal {\n        display: none;  \n    }\n  \n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  background: url(data:;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK\/OAAAAATSURBVBhXY2RgYNgHxGAAYuwDAA78AjwwRoQYAAAAAElFTkSuQmCC) repeat fixed transparent\\9;\n  z-index: 9998;\n  color: #fff;\n  transition: opacity 500ms;\n}\n\n#ouibounce-modal header {\n  text-align: center;\n}\n#ouibounce-modal header h1 {\n  font-size: 50px;\n  margin: 10px auto;\n  font-family: 'Lato', sans-serif;\n  text-transform: uppercase;\n}\n#ouibounce-modal header h1 u {\n  color: #1E824C;\n}\n#ouibounce-modal header h2 {\n  margin: 0 auto 10px auto;\n  color: #34495e;\n  font-size: 36px;\n  font-family: 'Lora', serif;\n}\n\n.fa-ul {\n  display: table;\n  margin: 0 auto;\n  font-family: 'Lora', serif;\n}\n.fa-ul li {\n  margin: 0 auto;\n}\n\n.popup {\n  margin: 0px;\n  padding: 20px;\n  z-index: 9999;\n  padding-bottom: 0px;\n  text-align: left;\n  background: #fff;\n  border-radius: 5px;\n  width: 570px;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  color: #000;\n}\n\n.btn-large {\n  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.3);\n  font-weight: bold;\n  background-color: #ffc579;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#ffc579), to(#fb9d23));\n  background-image: -webkit-linear-gradient(top, #ffc579, #fb9d23);\n  background-image: -moz-linear-gradient(top, #ffc579, #fb9d23);\n  background-image: -ms-linear-gradient(top, #ffc579, #fb9d23);\n  background-image: -o-linear-gradient(top, #ffc579, #fb9d23);\n  background-image: linear-gradient(to bottom, #ffc579, #fb9d23);\n  position: relative;\n  text-align: center;\n  cursor: pointer;\n  display: block;\n  max-width: 60%;\n  font-family: 'Lato', sans-serif;\n  text-transform: uppercase;\n  text-align: center;\n  margin: 15px auto;\n  padding: 20px;\n  border-radius: 5px;\n  color: #000;\n  font-size: 24px;\n  font-weight: 300;\n  line-height: 24px;\n  text-decoration: none;\n  cursor: pointer;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n}\n.btn-large:hover {\n  transition: all 1s;\n  background-color: #ffaf46;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#ffaf46), to(#e78404));\n  background-image: -webkit-linear-gradient(top, #ffaf46, #e78404);\n  background-image: -moz-linear-gradient(top, #ffaf46, #e78404);\n  background-image: -ms-linear-gradient(top, #ffaf46, #e78404);\n  background-image: -o-linear-gradient(top, #ffaf46, #e78404);\n  background-image: linear-gradient(to bottom, #ffaf46, #e78404);\n}\n.btn-large:active {\n  transition: all 60ms ease;\n  transform: scale(0.97);\n  opacity: .75;\n}\n\n.popup .closePopupCross {\n  position: absolute;\n    right: 5px;\n    top: 1px;\n}\n.popup .closePopupCross:hover {\n  color: #919191;\n}\n\n  \n\u003C\/style\u003E\n\n\u003Cscript data-gtmsrc=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/2.1.3\/jquery.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/ouibounce\/0.0.11\/ouibounce.min.js\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Econsole.log(\"UK HERE\");\njQuery(document).ready(function(){jQuery(\"body\").prepend('\\x3cdiv id\\x3d\"ouibounce-modal\"\\x3e \\x3cdiv class\\x3d\"overlay\"\\x3e\\x3c\/div\\x3e\\x3cdiv class\\x3d\"popup\"\\x3e \\x3ca class\\x3d\"closePopupNow closePopupCross\" href\\x3d\"#\"\\x3e\\x3cspan class\\x3d\"fa fa-times-circle\"\\x3e\\x3c\/span\\x3e\\x3c\/a\\x3e \\x3cdiv class\\x3d\"content\"\\x3e \\x3cheader\\x3e \\x3cimg src\\x3d\"http:\/\/g.foolcdn.com\/art\/shop\/newsletters\/tmf\/logo_InvestBetter.png\" alt\\x3d\"\"\/\\x3e \\x3ch1\\x3e\\x3cu\\x3eFREE\\x3c\/u\\x3e 7-Day Trial\\x3c\/h1\\x3e \\x3ch2\\x3eTest drive\\x3c\/br\\x3e \\x3cem\\x3eMotley Fool\\x3c\/em\\x3e\\x3c\/br\\x3e \\x3cem\\x3eStock Advisor\\x3c\/em\\x3e\\x3c\/br\\x3e for 7 days...\\x3c\/h2\\x3e \\x3c\/header\\x3e \\x3cul class\\x3d\"fa-ul\"\\x3e \\x3cli\\x3e\\x3ci class\\x3d\"fa-li fa fa-check-square-o\"\\x3e\\x3c\/i\\x3eSee every stock recommendation\\x3c\/li\\x3e\\x3cli\\x3e\\x3ci class\\x3d\"fa-li fa fa-check-square-o\"\\x3e\\x3c\/i\\x3eDownload every stock report\\x3c\/li\\x3e\\x3cli\\x3e\\x3ci class\\x3d\"fa-li fa fa-check-square-o\"\\x3e\\x3c\/i\\x3eGet unlimited access to our investing materials\\x3c\/li\\x3e\\x3c\/ul\\x3e \\x3ca href\\x3d\"http:\/\/www.fool.com\/mms\/mark\/eip-saft\" class\\x3d\"btn-large \"\\x3eStart My \\x3cu\\x3e\\x3cb\\x3eFREE\\x3c\/b\\x3e\\x3c\/u\\x3e Trial\\x3c\/a\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e');jQuery(\".closePopupNow, .closeLeavePage, .overlay\").click(function(){jQuery(\".overlay, .popup\").fadeOut(500)});\nouibounce(document.getElementById(\"ouibounce-modal\"),{aggressive:!0,timer:0,callback:function(){console.log(\"ouibounce fired!\")}})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":330
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E\n  .overlayElement {font-size: 14px; position: relative; visibility: visible; border-style: none; background-color: #fff;}\n   .overlayElement h1 {font-size:36px; margin:0 0 20px;} \n  .overlayElement h3 {font-size: 20px; margin:0 0 20px;}\n  .overlayElement p {line-height: 1.4em; margin:0 0 12px;}\n \u003C\/style\u003E \n\n\u003Cscript type=\"text\/gtmscript\"\u003E\/*\n Reqwest! A general purpose XHR connection manager\n license MIT (c) Dustin Diaz 2014\n https:\/\/github.com\/ded\/reqwest\n*\/\n!function(b,d,g){\"undefined\"!=typeof module\u0026\u0026module.exports?module.exports=g():\"function\"==typeof define\u0026\u0026define.amd?define(g):d[b]=g()}(\"reqwest\",this,function(){function b(a,e,c){return function(){if(a._aborted)return c(a.request);a.request\u0026\u00264==a.request[t]\u0026\u0026(a.request.onreadystatechange=O,P.test(a.request.status)?e(a.request):c(a.request))}}function d(a,e){var c=e.headers||{},b;c.Accept=c.Accept||r.accept[e.type]||r.accept[\"*\"];e.crossOrigin||c[F]||(c[F]=r.requestedWith);c[G]||(c[G]=e.contentType||\nr.contentType);for(b in c)c.hasOwnProperty(b)\u0026\u0026\"setRequestHeader\"in a\u0026\u0026a.setRequestHeader(b,c[b])}function g(a){u=a}function l(a,e){return a+(\/\\?\/.test(a)?\"\\x26\":\"?\")+e}function v(a,e,c,b){var d=Q++,f=a.jsonpCallback||\"callback\";a=a.jsonpCallbackName||m.getcallbackPrefix(d);var n=new RegExp(\"((^|\\\\?|\\x26)\"+f+\")\\x3d([^\\x26]+)\"),k=b.match(n),h=H.createElement(\"script\"),q=0,r=-1!==navigator.userAgent.indexOf(\"MSIE 10.0\");return k?\"?\"===k[3]?b=b.replace(n,\"$1\\x3d\"+a):a=k[3]:b=l(b,f+\"\\x3d\"+a),p[a]=g,h.type=\n\"text\/javascript\",h.src=b,h.async=!0,\"undefined\"!=typeof h.onreadystatechange\u0026\u0026!r\u0026\u0026(h.htmlFor=h.id=\"_reqwest_\"+d),h.onload=h.onreadystatechange=function(){if(h[t]\u0026\u0026\"complete\"!==h[t]\u0026\u0026\"loaded\"!==h[t]||q)return!1;h.onload=h.onreadystatechange=null;h.onclick\u0026\u0026h.onclick();e(u);u=void 0;x.removeChild(h);q=1},x.appendChild(h),{abort:function(){h.onload=h.onreadystatechange=null;c({},\"Request is aborted: timeout\",{});u=void 0;x.removeChild(h);q=1}}}function y(a,e){var c=this.o,q=(c.method||\"GET\").toUpperCase(),\nw=\"string\"==typeof c?c:c.url,f=!1!==c.processData\u0026\u0026c.data\u0026\u0026\"string\"!=typeof c.data?m.toQueryString(c.data):c.data||null,n=!1;(\"jsonp\"==c.type||\"GET\"==q)\u0026\u0026f\u0026\u0026(w=l(w,f),f=null);if(\"jsonp\"==c.type)a=v(c,a,e,w);else{var k=c.xhr\u0026\u0026c.xhr(c)||R(c);k.open(q,w,!1===c.async?!1:!0);d(k,c);\"undefined\"!=typeof c.withCredentials\u0026\u0026\"undefined\"!=typeof k.withCredentials\u0026\u0026(k.withCredentials=!!c.withCredentials);a=(p[z]\u0026\u0026k instanceof p[z]?(k.onload=a,k.onerror=e,k.onprogress=function(){},n=!0):k.onreadystatechange=b(this,\na,e),c.before\u0026\u0026c.before(k),n?setTimeout(function(){k.send(f)},200):k.send(f),k)}return a}function A(a,e){this.o=a;this.fn=e;J.apply(this,arguments)}function S(a){if(a.match(\"json\"))return\"json\";if(a.match(\"javascript\"))return\"js\";if(a.match(\"text\"))return\"html\";if(a.match(\"xml\"))return\"xml\"}function J(a,e){function c(c){a.timeout\u0026\u0026clearTimeout(f.timeout);for(f.timeout=null;0\u003Cf._completeHandlers.length;)f._completeHandlers.shift()(c)}function b(b){var k=a.type||S(b.getResponseHeader(\"Content-Type\"));\nb=\"jsonp\"!==k?f.request:b;var h=K.dataFilter(b.responseText,k);try{b.responseText=h}catch(I){}if(h)switch(k){case \"json\":try{b=p.JSON?p.JSON.parse(h):eval(\"(\"+h+\")\")}catch(I){return d(b,\"Could not parse JSON in response\",I)}break;case \"js\":b=eval(h);break;case \"html\":b=h;break;case \"xml\":b=b.responseXML\u0026\u0026b.responseXML.parseError\u0026\u0026b.responseXML.parseError.errorCode\u0026\u0026b.responseXML.parseError.reason?null:b.responseXML}f._responseArgs.resp=b;f._fulfilled=!0;e(b);for(f._successHandler(b);0\u003Cf._fulfillmentHandlers.length;)b=\nf._fulfillmentHandlers.shift()(b);c(b)}function d(a,b,e){a=f.request;f._responseArgs.resp=a;f._responseArgs.msg=b;f._responseArgs.t=e;for(f._erred=!0;0\u003Cf._errorHandlers.length;)f._errorHandlers.shift()(a,b,e);c(a)}this.url=\"string\"==typeof a?a:a.url;this.timeout=null;this._fulfilled=!1;this._successHandler=function(){};this._fulfillmentHandlers=[];this._errorHandlers=[];this._completeHandlers=[];this._erred=!1;this._responseArgs={};var f=this;e=e||function(){};a.timeout\u0026\u0026(this.timeout=setTimeout(function(){f.abort()},\na.timeout));a.success\u0026\u0026(this._successHandler=function(){a.success.apply(a,arguments)});a.error\u0026\u0026this._errorHandlers.push(function(){a.error.apply(a,arguments)});a.complete\u0026\u0026this._completeHandlers.push(function(){a.complete.apply(a,arguments)});this.request=y.call(this,b,d)}function m(a,b){return new A(a,b)}function B(a){return a?a.replace(\/\\r?\\n\/g,\"\\r\\n\"):\"\"}function L(a,b){var c=a.name,e=a.tagName.toLowerCase(),d=function(a){a\u0026\u0026!a.disabled\u0026\u0026b(c,B(a.attributes.value\u0026\u0026a.attributes.value.specified?\na.value:a.text))},f,g,k;if(!a.disabled\u0026\u0026c)switch(e){case \"input\":\/reset|button|image|file\/i.test(a.type)||(f=\/checkbox\/i.test(a.type),g=\/radio\/i.test(a.type),k=a.value,(!f\u0026\u0026!g||a.checked)\u0026\u0026b(c,B(f\u0026\u0026\"\"===k?\"on\":k)));break;case \"textarea\":b(c,B(a.value));break;case \"select\":if(\"select-one\"===a.type.toLowerCase())d(0\u003C=a.selectedIndex?a.options[a.selectedIndex]:null);else for(e=0;a.length\u0026\u0026e\u003Ca.length;e++)a.options[e].selected\u0026\u0026d(a.options[e])}}function M(){var a=this,b;for(b=0;b\u003Carguments.length;b++){var c=\narguments[b];\/input|select|textarea\/i.test(c.tagName)\u0026\u0026L(c,a);var d,g,f=c,n=[\"input\",\"select\",\"textarea\"];for(g=0;g\u003Cn.length;g++)for(c=f[N](n[g]),d=0;d\u003Cc.length;d++)L(c[d],a)}}function T(){return m.toQueryString(m.serializeArray.apply(null,arguments))}function U(){var a={};return M.apply(function(b,c){b in a?(a[b]\u0026\u0026!C(a[b])\u0026\u0026(a[b]=[a[b]]),a[b].push(c)):a[b]=c},arguments),a}function D(a,b,c,d){var e,f=\/\\[\\]$\/;if(C(b))for(e=0;b\u0026\u0026e\u003Cb.length;e++){var g=b[e];c||f.test(a)?d(a,g):D(a+\"[\"+(\"object\"==typeof g?\ne:\"\")+\"]\",g,c,d)}else if(b\u0026\u0026\"[object Object]\"===b.toString())for(e in b)D(a+\"[\"+e+\"]\",b[e],c,d);else d(a,b)}var p=window,H=document,P=\/^(20\\d|1223)$\/,N=\"getElementsByTagName\",t=\"readyState\",G=\"Content-Type\",F=\"X-Requested-With\",x=H[N](\"head\")[0],Q=0,V=\"reqwest_\"+ +new Date,u,E=\"XMLHttpRequest\",z=\"XDomainRequest\",O=function(){},C=\"function\"==typeof Array.isArray?Array.isArray:function(a){return a instanceof Array},r={contentType:\"application\/x-www-form-urlencoded\",requestedWith:E,accept:{\"*\":\"text\/javascript, text\/html, application\/xml, text\/xml, *\/*\",\nxml:\"application\/xml, text\/xml\",html:\"text\/html\",text:\"text\/plain\",json:\"application\/json, text\/javascript\",js:\"application\/javascript, text\/javascript\"}},R=function(a){if(!0===a.crossOrigin){if((a=p[E]?new XMLHttpRequest:null)\u0026\u0026\"withCredentials\"in a)return a;if(p[z])return new XDomainRequest;throw Error(\"Browser does not support cross-origin requests\");}return p[E]?new XMLHttpRequest:new ActiveXObject(\"Microsoft.XMLHTTP\")},K={dataFilter:function(a){return a}};return A.prototype={abort:function(){this._aborted=\n!0;this.request.abort()},retry:function(){J.call(this,this.o,this.fn)},then:function(a,b){return a=a||function(){},b=b||function(){},this._fulfilled?this._responseArgs.resp=a(this._responseArgs.resp):this._erred?b(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):(this._fulfillmentHandlers.push(a),this._errorHandlers.push(b)),this},always:function(a){return this._fulfilled||this._erred?a(this._responseArgs.resp):this._completeHandlers.push(a),this},fail:function(a){return this._erred?\na(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):this._errorHandlers.push(a),this}},m.serializeArray=function(){var a=[];return M.apply(function(b,c){a.push({name:b,value:c})},arguments),a},m.serialize=function(){if(0===arguments.length)return\"\";var a,b,c=Array.prototype.slice.call(arguments,0);return a=c.pop(),a\u0026\u0026a.nodeType\u0026\u0026c.push(a)\u0026\u0026(a=null),a\u0026\u0026(a=a.type),\"map\"==a?b=U:\"array\"==a?b=m.serializeArray:b=T,b.apply(null,c)},m.toQueryString=function(a,b){var c,d=b||!1,e=[],f=encodeURIComponent;\nb=function(a,b){b=\"function\"==typeof b?b():null==b?\"\":b;e[e.length]=f(a)+\"\\x3d\"+f(b)};if(C(a))for(c=0;a\u0026\u0026c\u003Ca.length;c++)b(a[c].name,a[c].value);else for(c in a)a.hasOwnProperty(c)\u0026\u0026D(c,a[c],d,b);return e.join(\"\\x26\").replace(\/%20\/g,\"+\")},m.getcallbackPrefix=function(){return V},m.compat=function(a,b){return a\u0026\u0026(a.type\u0026\u0026(a.method=a.type)\u0026\u0026delete a.type,a.dataType\u0026\u0026(a.type=a.dataType),a.jsonpCallback\u0026\u0026(a.jsonpCallbackName=a.jsonpCallback)\u0026\u0026delete a.jsonpCallback,a.jsonp\u0026\u0026(a.jsonpCallback=a.jsonp)),\nnew A(a,b)},m.ajaxSetup=function(a){a=a||{};for(var b in a)K[b]=a[b]},m});window.dataLayer=window.dataLayer||[];\nInfotronQueue=function(){return{EventName:\"overrideInPage\",Queue:null,AllKeysInPage:null,AllCallsRegistered:!1,PageId:Math.floor(1E8*Math.random()+1),Register:function(b){this.Queue=this.Queue||{};this.AllKeysInPage=this.AllKeysInPage||{};this.Queue[b]=1;this.AllKeysInPage[b]=1},Unregister:function(b){delete this.Queue[b];this.IsReadyToFire()\u0026\u0026this.Complete()},Length:function(){var b=0;for(key in this.Queue)this.Queue.hasOwnProperty(key)\u0026\u0026b++;return b},EndOfPage:function(b){this.EventName=b;this.AllCallsRegistered=\n!0;this.IsReadyToFire()\u0026\u0026this.Complete()},IsReadyToFire:function(){return(\"complete\"===document.readyState||\"interactive\"===document.readyState)\u0026\u00260==this.Length()},Complete:function(){reqwest({url:\"\/\/infotron.fool.com\/infotrack\/pageview\",data:{pageId:this.PageId},timeout:3E3,type:\"jsonp\",crossOrigin:!0,error:function(b,d){},success:function(b){}});window.dataLayer.push({event:this.EventName})}}};window.infotronQueue=InfotronQueue();var dataLayer=dataLayer||[];\nPitchEngine=function(){return{Url:\"\/\/infotron.fool.com\/pitcher\/get_pitch\",ContainsPitchBase:!1,tryParseInt:function(b,d){null!=b\u0026\u00260\u003Cb.length\u0026\u0026(isNaN(b)||(d=parseInt(b)));return d},initialize:function(b){var d=this,g=window.location.host.split(\".\")[0];if(-1\u003Cg.indexOf(\"test.www\")||-1\u003Cg.indexOf(\"staging.www\"))d.Url=d.Url.replace(\"infotron.fool.com\",g+\".infotron.fool.com\");d.get(b)},get:function(b){window.infotronQueue\u0026\u0026(b.pageId=window.infotronQueue.PageId);var d=this;d.RegisterQueue(b.pitchContainer);\nd.ContainsPitchBase=b.containsPitchBase;d.Params=b;reqwest({url:d.Url,data:b,timeout:3E3,type:\"jsonp\",crossOrigin:!0,error:function(g,l){d.pitcherError(b.pitchContainer)},success:function(g){d.pitcherDone(b.placement,b.pitchContainer,g)}})},pitcherDone:function(b,d,g){var l=this;l.UnRegisterQueue(d);0\u003Cg.length\u0026\u0026(null!=document.getElementById(d)?(l.placeInPage(d,g),window.dataLayer.push({customPitch:\"false\"})):\"article_pitch\"==b\u0026\u0026null!=document.getElementById(\"pitcherPitch\")?(window.dataLayer.push({customPitch:\"false\"}),\nwindow.dataLayer.push({fallBackPitch:\"true\"}),l.placeInPage(\"pitcherPitch\",g)):window.dataLayer.push({customPitch:\"true\"}))},placeInPage:function(b,d){b=document.getElementById(b);b.innerHTML=d;try{var g=b.getElementsByTagName(\"script\");for(d=0;d\u003Cg.length;d++)if(\"\"!=g[d].src){var l=document.createElement(\"script\");l.type=\"text\/javascript\";l.async=!0;l.src=g[d].src;var v=document.getElementsByTagName(\"script\")[0];v.parentNode.insertBefore(l,v)}else eval(g[d].text)}catch(y){\"undefined\"!==typeof console\u0026\u0026\n\"undefined\"!==typeof console.error\u0026\u0026console.error(y)}},pitcherError:function(b){var d=this;d.UnRegisterQueue(b)},RegisterQueue:function(b){window.infotronQueue\u0026\u0026window.infotronQueue.Register(b)},UnRegisterQueue:function(b){window.infotronQueue\u0026\u0026window.infotronQueue.Unregister(b)}}};\nFoolPitchEngineTracker=function(){return{DataLayer:null,EventType:\"articlePageView\",initialize:function(b,d){this.DataLayer=\"undefined\"!==typeof b?b:window.dataLayer;\"\"!=d\u0026\u0026(this.EventType=d)},CustomPitch:function(b){this.DataLayer.push({customPitch:b})},Track:function(){this.DataLayer.push({event:\"articlePageView\"})}}};function insertAfter(b,d){d.parentNode.insertBefore(b,d.nextSibling)}var newEl=document.createElement(\"div\");newEl.id=\"InfotronNewsletterOverlayPitch\";var ref=document.querySelector(\"div\");\ninsertAfter(newEl,ref);\"undefined\"!==typeof window.infotronQueue\u0026\u0026window.infotronQueue.Register(\"InfotronNewsletterOverlayPitch\");var pitchEngine=PitchEngine();pitchEngine.initialize({site:\"fool\",placement:\"newsletter_overlay\",pitchContainer:\"InfotronNewsletterOverlayPitch\"});window.infotronQueue.EndOfPage(\"articlePageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":338
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{window.btoa||(window.btoa=base64.encode);window.atob||(window.atob=base64.decode);\"remove\"in Element.prototype||(Element.prototype.remove=function(){this.parentNode\u0026\u0026this.parentNode.removeChild(this)});var uid=",["escape",["macro",25],8,16],";if(\"\"!=uid\u0026\u00260!=uid){var pingPoint=\"\/\/infotron.fool.com\/ping?p\\x3d\",actionData=JSON.stringify({Id:uid,Actions:[{Action:\"url\",Value:window.location.pathname+window.location.search}]});encoded_string=window.btoa(actionData);var el=document.createElement(\"script\");el.src=\npingPoint+encoded_string;el.type=\"text\/javascript\";el.id=\"actionData\";el.onreadystatechange=el.onload=function(){var a=el.readyState;a\u0026\u0026!\/loaded|complete\/.test(a)||el.remove()};document.body.appendChild(el)}}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":343
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Clink rel=\"stylesheet\" href=\"https:\/\/fonts.googleapis.com\/css?family=Lato:700%7CLora:400,400italic\"\u003E\n\u003Clink rel=\"stylesheet\" href=\"https:\/\/maxcdn.bootstrapcdn.com\/font-awesome\/4.6.3\/css\/font-awesome.min.css\"\u003E\n  \u003Cstyle\u003E\n  \t#ouibounce-modal {\n        display: none;  \n    }\n    \n    .overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.4);\n    background: url(data:;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK\/OAAAAATSURBVBhXY2RgYNgHxGAAYuwDAA78AjwwRoQYAAAAAElFTkSuQmCC) repeat fixed transparent\\9;\n    z-index: 9998;\n    color: #ffffff;\n    -webkit-transition: opacity 500ms;\n    -moz-transition: opacity 500ms;\n    -o-transition: opacity 500ms;\n    transition: opacity 500ms;\n  }\n  \n  #ouibounce-modal header {\n    text-align: center;\n  }\n  \n  #ouibounce-modal header h1 {\n    font-size: 40px;\n    margin: 25px auto 25px auto;\n    color: #ffffff;\n    font-family: 'Lato', sans-serif;\n  }\n  \n  #ouibounce-modal header h2 {\n    font-size: 35px;\n    font-family: 'Lato', sans-serif;\n    color: #ffffff;\n    margin-top: 0;\n  }\n  \n  .popup {\n    margin: 0px;\n    padding: 10px 15px 35px 15px;\n    z-index: 9999;\n    padding-bottom: 0px;\n    text-align: left;\n    background: #2679be url(https:\/\/g.foolcdn.com\/art\/fool15\/bg\/cap.png) 215px 10px no-repeat;\n    border-radius: 10px;\n    background-size: 467px 280px;\n    width: 100%;\n    max-width: 596px;\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    -moz-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    -o-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    color: #000;\n    border: 2px solid #41719c;\n    box-sizing: border-box;\n  }\n  \n  .popup.resize {\n    top: 0;\n    -webkit-transform: translate(-50%, 0);\n    -moz-transform: translate(-50%, 0);\n    -ms-transform: translate(-50%, 0);\n    -o-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    position: relative;\n  }\n  \n  .logo {\n    background: white;\n    border: 2px solid #2679be;\n    border-radius: 10px;\n    padding: 10px;\n  }\n  \n  .logo img {\n    max-width: 220px;\n    width: 100%;\n  }\n  \n  .block-center {\n    width: 80%;\n    margin: 0 auto;\n  }\n  \n  .btn-large {\n    text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.3);\n    background-color: transparent;\n    border: 1px solid white;\n    border-radius: 10px;\n    position: relative;\n    display: inline-block;\n    max-width: 38%;\n    width: 100%;\n    font-family: 'Lato', sans-serif;\n    text-align: center;\n    margin: 15px auto;\n    padding: 20px;\n    color: #ffffff!important;\n    font-size: 24px;\n    font-weight: 300;\n    line-height: 24px;\n    text-decoration: none;\n    cursor: pointer;\n    text-decoration: none!important;\n    -webkit-transition: background-color 1s, box-shadow 0.5s, color 1s, opacity 1s, transform 1s;\n    -moz-transition: background-color 1s, box-shadow 0.5s, color 1s, opacity 1s, transform 1s;\n    -o-transition: background-color 1s, box-shadow 0.5s, color 1s, opacity 1s, transform 1s;\n    transition: background-color 1s, box-shadow 0.5s, color 1s, opacity 1s, transform 1s;\n  }\n  \n  .btn-large.first {\n    margin-right: 4%;\n  }\n  \n  .btn-large.btn-bg {\n    background-color: #ffffff;\n    color: #2679be!important;\n  }\n  \n  .btn-large:hover,\n  .btn-large.btn-bg:hover {\n    background-color: #ffffff;\n    color: #2679be!important;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n  }\n  \n  .btn-large:active {\n    -webkit-transition: all 60ms ease;\n    -moz-transition: all 60ms ease;\n    -o-transition: all 60ms ease;\n    transition: all 60ms ease;\n    -webkit-transform: scale(0.97);\n    transform: scale(0.97);\n    opacity: .75;\n  }\n  \n .popup .closePopupCross {\n    position: absolute;\n    right: 2px;\n    top: 0px;\n    color: white !important;\n}\n  .popup .closePopupCross:hover {\n    color: #919191 !important;\n  }\n  \n  @media (max-width: 767px) {\n    .popup {\n      background-size: 85%;\n      background-position: 250% 15%;\n    }\n    .logo img {\n      width: 100%;\n      max-width: 326px;\n    }\n    #ouibounce-modal header h1 {\n      font-size: 30px;\n      line-height: 40px;\n    }\n    .btn-large {\n      display: block;\n      width: 100%;\n      max-width: 100%;\n      margin: 15px auto!important;\n      box-sizing: border-box;\n      padding: 0;\n      height: 40px;\n      line-height: 35px;\n      font-size: 14px;\n    }\n    #ouibounce-modal header h2 {\n      font-size: 25px;\n      margin-top: 10px;\n    }\n  }\n  \u003C\/style\u003E\n\n  \u003Cscript data-gtmsrc=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/2.1.3\/jquery.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n  \u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/ouibounce\/0.0.11\/ouibounce.min.js\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Econsole.log(\"UK HERE\");function fixHeight(){jQuery(window).height()\u003C=jQuery(\".popup\").height()?jQuery(\".popup\").addClass(\"resize\"):jQuery(window).height()\u003EjQuery(\".popup\").height()\u0026\u0026jQuery(\".popup\").removeClass(\"resize\")}\njQuery(document).ready(function(){jQuery(\"body\").prepend('\\x3cdiv id\\x3d\"ouibounce-modal\"\\x3e \\x3cdiv class\\x3d\"overlay\"\\x3e\\x3c\/div\\x3e\\x3cdiv class\\x3d\"popup\"\\x3e\\x3ca class\\x3d\"closePopupNow closePopupCross\" href\\x3d\"#\"\\x3e\\x3cspan class\\x3d\"fa fa-times-circle\"\\x3e\\x3c\/span\\x3e\\x3c\/a\\x3e  \\x3cdiv class\\x3d\"content\"\\x3e \\x3cheader\\x3e \\x3cdiv class\\x3d\"logo\"\\x3e\\x3cimg src\\x3d\"https:\/\/g.foolcdn.com\/art\/fool15\/bg\/fool-logo.png\" alt\\x3d\"The Motley Fool Logo\"\/\\x3e\\x3c\/div\\x3e\\x3ch1\\x3eVideo not your thing?\\x3c\/h1\\x3e \\x3ch2\\x3eRead the transcript\\x3c\/br\\x3eat your own pace\\x3c\/h2\\x3e \\x3c\/header\\x3e\\x3cdiv class\\x3d\"block-center\"\\x3e\\x3ca id\\x3d\"leave\" class\\x3d\"btn-large first\" tabindex\\x3d\"1\"\\x3eLeave\\x3c\/a\\x3e \\x3ca href\\x3d\"https:\/\/www.fool.com\/investor-alert\/stock-advisor\/sa-applecar\/\" id\\x3d\"exitPopupLink\" class\\x3d\"btn-large btn-bg\" tabindex\\x3d\"2\"\\x3eRead Transcript\\x3c\/a\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e');fixHeight();\njQuery(\".closePopupNow, .closeLeavePage, .overlay,#leave\").click(function(){jQuery(\".overlay, .popup\").fadeOut(500)});ouibounce(document.getElementById(\"ouibounce-modal\"),{aggressive:!0,timer:0,callback:function(){console.log(\"ouibounce fired!\")}})});jQuery(window).resize(function(){fixHeight()});\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar getQueryStringParam=getQueryStringParam||function(b){b=b.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");b=\"[\\\\?\\x26]\"+b+\"\\x3d([^\\x26#]*)\";b=new RegExp(b);b=b.exec(window.location.search);return null==b?\"\":decodeURIComponent(b[1].replace(\/\\+\/g,\" \"))},updateQueryStringParam=updateQueryStringParam||function(b,d,a){var c,e=new RegExp(\"([?\\x26])\"+b+\"\\x3d.*?(\\x26|#|$)(.*)\",\"gi\");return(a||(a=window.location.href),e.test(a))?\"undefined\"!=typeof d\u0026\u0026null!==d?a.replace(e,\"$1\"+b+\"\\x3d\"+d+\"$2$3\"):(c=a.split(\"#\"),\na=c[0].replace(e,\"$1$3\").replace(\/(\u0026|\\?)$\/,\"\"),\"undefined\"!=typeof c[1]\u0026\u0026null!==c[1]\u0026\u0026(a+=\"#\"+c[1]),a):\"undefined\"!=typeof d\u0026\u0026null!==d?(e=-1!==a.indexOf(\"?\")?\"\\x26\":\"?\",c=a.split(\"#\"),a=c[0]+e+b+\"\\x3d\"+d,\"undefined\"!=typeof c[1]\u0026\u0026null!==c[1]\u0026\u0026(a+=\"#\"+c[1]),a):a};\n$(window).load(function(){if(\"function\"==typeof getQueryStringParam\u0026\u0026\"function\"==typeof updateQueryStringParam){var b=getQueryStringParam(\"source\")||getQueryStringParam(\"psource\"),d=getQueryStringParam(\"aid\")||getQueryStringParam(\"paid\"),a=$(\"#exitPopupLink\")[0];b\u0026\u0026(a.href=updateQueryStringParam(\"source\",b,a.href));d\u0026\u0026(a.href=updateQueryStringParam(\"aid\",d,a.href))}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":351
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-p4jUuewM-vyu5\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg src=\"\/\/pixel.quantserve.com\/pixel\/p-p4jUuewM-vyu5.gif?labels=_fp.event.Default\" style=\"display: none;\" border=\"0\" height=\"1\" width=\"1\" alt=\"Quantcast\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":352
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-p4jUuewM-vyu5\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg src=\"\/\/pixel.quantserve.com\/pixel\/p-p4jUuewM-vyu5.gif?labels=_fp.event.Default\" style=\"display: none;\" border=\"0\" height=\"1\" width=\"1\" alt=\"Quantcast\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":353
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-p4jUuewM-vyu5\",labels:\"_fp.event.Subscription Signup,_fp.pcat.",["escape",["macro",26],7],"\",orderid:\"",["escape",["macro",27],7],"\",revenue:\"",["escape",["macro",28],7],"\",event:\"refresh\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"\/\/pixel.quantserve.com\/pixel\/p-p4jUuewM-vyu5.gif?labels=_fp.event.Subscription+Signup,_fp.pcat.INSERT+PRODUCT+CATEGORY\u0026amp;orderid=INSERT+ORDER+ID\u0026amp;revenue=INSERT+REVENUE\" style=\"display: none;\" border=\"0\" height=\"1\" width=\"1\" alt=\"Quantcast\"\u003E\n\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":354
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Clink rel=\"stylesheet\" href=\"https:\/\/maxcdn.bootstrapcdn.com\/font-awesome\/4.6.3\/css\/font-awesome.min.css\"\u003E\n\u003Clink rel=\"stylesheet\" href=\"https:\/\/fonts.googleapis.com\/css?family=Lato:700|Lora:400,400italic\"\u003E\n\n\u003Cstyle\u003E\n    #ouibounce-modal {\n        display: none;  \n    }\n  \n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  background: url(data:;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK\/OAAAAATSURBVBhXY2RgYNgHxGAAYuwDAA78AjwwRoQYAAAAAElFTkSuQmCC) repeat fixed transparent\\9;\n  z-index: 9998;\n  color: #fff;\n  transition: opacity 500ms;\n}\n\n#ouibounce-modal header {\n  text-align: center;\n}\n#ouibounce-modal header h1 {\n  font-size: 50px;\n  margin: 10px auto;\n  font-family: 'Lato', sans-serif;\n  text-transform: uppercase;\n  color: #1E90FF;\n}\n#ouibounce-modal header h1 u {\n  color: #1E824C;\n}\n  \n#ouibounce-modal header h2 {\n  text-align: center;\n  font-family: 'Lato', sans-serif;\n}\n\n.fa-ul {\n  display: table;\n  margin: 0 auto;\n  font-family: 'Lora', serif;\n}\n\n.fa-ul li {\n  margin: 0 auto;\n  font-family: 'Lato', sans-serif;\n  font-size: 25px;\n  line-height: 30px;\n}\n\n.popup {\n  margin: 0px;\n  padding: 20px;\n  z-index: 9999;\n  padding-bottom: 0px;\n  text-align: left;\n  background: #fff;\n  border-radius: 5px;\n  width: 570px;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  color: #000;\n}\n\n.btn-large {\n  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.3);\n  font-weight: bold;\n  background-color: #ffc579;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#ffc579), to(#fb9d23));\n  background-image: -webkit-linear-gradient(top, #ffc579, #fb9d23);\n  background-image: -moz-linear-gradient(top, #ffc579, #fb9d23);\n  background-image: -ms-linear-gradient(top, #ffc579, #fb9d23);\n  background-image: -o-linear-gradient(top, #ffc579, #fb9d23);\n  background-image: linear-gradient(to bottom, #ffc579, #fb9d23);\n  position: relative;\n  text-align: center;\n  cursor: pointer;\n  display: block;\n  font-family: 'Lato', sans-serif;\n  text-transform: uppercase;\n  text-align: center;\n  margin: 15px auto;\n  padding: 20px;\n  border-radius: 5px;\n  color: #000;\n  font-size: 24px;\n  font-weight: 300;\n  line-height: 24px;\n  text-decoration: none;\n  cursor: pointer;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n}\n.btn-large:hover {\n  transition: all 1s;\n  background-color: #ffaf46;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#ffaf46), to(#e78404));\n  background-image: -webkit-linear-gradient(top, #ffaf46, #e78404);\n  background-image: -moz-linear-gradient(top, #ffaf46, #e78404);\n  background-image: -ms-linear-gradient(top, #ffaf46, #e78404);\n  background-image: -o-linear-gradient(top, #ffaf46, #e78404);\n  background-image: linear-gradient(to bottom, #ffaf46, #e78404);\n}\n.btn-large:active {\n  transition: all 60ms ease;\n  transform: scale(0.97);\n  opacity: .75;\n}\n\n.popup .closePopupCross {\n  position: absolute;\n    right: 5px;\n    top: 1px;\n}\n.popup .closePopupCross:hover {\n  color: #919191;\n}\n  \nimg.modal-logo {\n    max-width: 400px;\n}\n\n  \n\u003C\/style\u003E\n\n\u003Cscript data-gtmsrc=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/2.1.3\/jquery.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/ouibounce\/0.0.11\/ouibounce.min.js\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(document).ready(function(){jQuery(\"body\").prepend('\\x3cdiv id\\x3d\"ouibounce-modal\"\\x3e \\x3cdiv class\\x3d\"overlay\"\\x3e\\x3c\/div\\x3e\\x3cdiv class\\x3d\"popup\"\\x3e \\x3ca class\\x3d\"closePopupNow closePopupCross\" href\\x3d\"#\"\\x3e\\x3cspan class\\x3d\"fa fa-times-circle\"\\x3e\\x3c\/span\\x3e\\x3c\/a\\x3e \\x3cdiv class\\x3d\"content\"\\x3e \\x3cheader\\x3e \\x3cimg class\\x3d\"modal-logo\" src\\x3d\"https:\/\/g.foolcdn.com\/misc-assets\/logo-sa-APGFIA.jpg\" alt\\x3d\"\"\\x3e \\x3ch1\\x3eWait!\\x3c\/h1\\x3e \\x3ch2\\x3eNot interested in this exclusive offer?\\x3c\/h2\\x3e\\x3ch2\\x3eAccess your \\x3cem\\x3eStock Advisor\\x3c\/em\\x3e\\x3cbr \/\\x3e membership now and...\\x3c\/h2\\x3e \\x3c\/header\\x3e \\x3cul class\\x3d\"fa-ul\"\\x3e \\x3cli\\x3e\\x3ci class\\x3d\"fa-li fa fa-check-square-o\"\\x3e\\x3c\/i\\x3e\\x3cli\\x3eExplore the Best Buys Now\\x3c\/li\\x3e\\x3cli\\x3e\\x3ci class\\x3d\"fa-li fa fa-check-square-o\"\\x3e\\x3c\/i\\x3eDive into your Bonus Reports\\x3c\/li\\x3e\\x3cli\\x3e\\x3ci class\\x3d\"fa-li fa fa-check-square-o\"\\x3e\\x3c\/i\\x3eGet in on the latest stock picks\\x3c\/li\\x3e\\x3c\/ul\\x3e \\x3ca href\\x3d\"https:\/\/www.fool.com\/mms\/mark\/cross-sell-opt-out-proceed-to-sa\" class\\x3d\"btn-large \"\\x3eTake me to Stock Advisor\\x3c\/a\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e');\njQuery(\".closePopupNow, .closeLeavePage, .overlay\").click(function(){jQuery(\".overlay, .popup\").fadeOut(500)});ouibounce(document.getElementById(\"ouibounce-modal\"),{aggressive:!0,timer:0,callback:function(){console.log(\"ouibounce fired!\")}})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":367
    },{
      "function":"__html",
      "unlimited":true,
      "vtp_html":["template","\u003Cdiv id=\"infotron_pixel_1\" style=\"display:none\"\u003E\u003C\/div\u003E\n\n\u003Cscript id=\"infotron_pixel_script_block\" type=\"text\/gtmscript\"\u003Efunction infotron_pixel_1(a){document.getElementById(\"infotron_pixel_1\").innerHTML=a}function getScript(a,c){var b=document.createElement(\"script\");b.src=a+\"\\x26callback\\x3d\"+c;b.id=c+\"_script\";document.getElementsByTagName(\"head\")[0].appendChild(b)}window._pp=window._pp||[];\nif(\"undefined\"!==typeof window._pp){window._pp.siteId=1058;var siteUid=\"",["escape",["macro",25],7],"\";\"\"!=siteUid\u0026\u00260!=siteUid\u0026\u0026(window._pp.siteUId=siteUid);var utm_source=\"",["escape",["macro",29],7],"\";if(\"\"!=utm_source){var d=new Date;_pp.tags=utm_source+(d.getMonth()+1)+d.getFullYear()}}getScript(\"\/\/infotron.fool.com\/pitcher\/get_pitch?placement\\x3dpixel1\",\"infotron_pixel_1\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":368
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript id=\"pebblepost_init_script\" type=\"text\/gtmscript\"\u003Ewindow._pp=window._pp||[];\nif(\"undefined\"!==typeof window._pp){window._pp.siteId=1058;var siteUid=\"",["escape",["macro",25],7],"\";\"\"!=siteUid\u0026\u00260!=siteUid\u0026\u0026(window._pp.siteUId=siteUid);var utm_source=\"",["escape",["macro",29],7],"\";if(\"\"!=utm_source){var d=new Date;_pp.tags=utm_source+(d.getMonth()+1)+d.getFullYear()}(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.id=\"pebblepost_script\";a.src=(\"https:\"==document.location.protocol?\"https:\":\"http:\")+\"\/\/cdn.pbbl.co\/r\/\"+_pp.siteId+\".js\";var b=document.getElementsByTagName(\"script\")[0];\nb.parentNode.insertBefore(a,b)})()};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":375
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"vanguard-2017-article-pixel\"\u003E\u003C\/div\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar pixel='\\x3cIMG SRC\\x3d\"https:\/\/ad.doubleclick.net\/ddm\/ad\/N2992.Motley_Fool.com__\/B20415716.210099621;sz\\x3d1x1;ord\\x3d[timestamp];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d?\" BORDER\\x3d0 WIDTH\\x3d1 HEIGHT\\x3d1 ALT\\x3d\"Advertisement\"\\x3e\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d210099621\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e',\nd=new Date;pixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#vanguard-2017-article-pixel\").append(pixel);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":378
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"vanguard-2017-article-pixel\"\u003E\u003C\/div\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar pixel='\\x3cIMG SRC\\x3d\"https:\/\/ad.doubleclick.net\/ddm\/ad\/N2992.Motley_Fool.com__\/B20415716.210030182;sz\\x3d1x1;ord\\x3d[timestamp];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d?\" BORDER\\x3d0 WIDTH\\x3d1 HEIGHT\\x3d1 ALT\\x3d\"Advertisement\"\\x3e\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d210030182\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e',\nd=new Date;pixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#vanguard-2017-article-pixel\").append(pixel);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":379
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"read-more-vanguard-pixel\"\u003E\u003C\/div\u003E\n\u003Cdiv id=\"read-more-vanguard-pixel2\"\u003E\u003C\/div\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(\".read-more-section ul li a\")[0].text=\"10 Common Questions About ETFs [Paid Post]\";jQuery(\".read-more-section ul li a\")[0].href=\"https:\/\/ad.doubleclick.net\/ddm\/clk\/409057485;209442234;h\";var pixel='\\x3cIMG SRC\\x3d\"https:\/\/ad.doubleclick.net\/ddm\/ad\/N2992.Motley_Fool.com__\/B20415716.209442234;sz\\x3d1x1;ord\\x3d[timestamp];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d?\" BORDER\\x3d0 WIDTH\\x3d1 HEIGHT\\x3d1 ALT\\x3d\"Advertisement\"\\x3e',d=new Date;pixel=pixel.replace(\"[timestamp]\",d.getTime());\nvar pixel2='\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d209442234\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e';\njQuery(\"#read-more-vanguard-pixel2\").append(pixel2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":380
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"read-more-vanguard-pixel\"\u003E\u003C\/div\u003E\n\u003Cdiv id=\"read-more-vanguard-pixel2\"\u003E\u003C\/div\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(\".read-more-section ul li a\")[0].text=\"First Job out of College? How to Get an Easy A on Your 401(k) [Paid Post]\";jQuery(\".read-more-section ul li a\")[0].href=\"https:\/\/ad.doubleclick.net\/ddm\/clk\/409189652;209444889;b\";var pixel='\\x3cIMG SRC\\x3d\"https:\/\/ad.doubleclick.net\/ddm\/ad\/N2992.Motley_Fool.com__\/B20415716.209444889;sz\\x3d1x1;ord\\x3d[timestamp];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d?\" BORDER\\x3d0 WIDTH\\x3d1 HEIGHT\\x3d1 ALT\\x3d\"Advertisement\"\\x3e',d=new Date;\npixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#read-more-vanguard-pixel\").append(pixel);var pixel2='\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d209444889\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e';\njQuery(\"#read-more-vanguard-pixel2\").append(pixel2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":381
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/www.dwin1.com\/12195.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":382
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar AWIN={Tracking:{}};AWIN.Tracking.Sale={};AWIN.Tracking.Sale.amount=\"",["escape",["macro",28],7],"\";AWIN.Tracking.Sale.channel=\"",["escape",["macro",31],7],"\";AWIN.Tracking.Sale.orderRef=\"",["escape",["macro",27],7],"\";AWIN.Tracking.Sale.parts=\"",["escape",["macro",32],7],":",["escape",["macro",28],7],"\";AWIN.Tracking.Sale.test=\"0\";AWIN.Tracking.Sale.currency=\"USD\";AWIN.Tracking.Sale.voucher=\"\";\u003C\/script\u003E  \n\u003Cform style=\"display: none;\" name=\"aw_basket_form\"\u003E\n\u003Ctextarea wrap=\"physical\" id=\"aw_basket\"\u003E\nAW:P|12195|",["escape",["macro",27],2],"|",["escape",["macro",33],2],"|",["escape",["macro",32],2],"|",["escape",["macro",28],2],"|1|",["escape",["macro",33],2],"|",["escape",["macro",32],2],"|\n\u003C\/textarea\u003E\n\u003C\/form\u003E\n\n\u003Cscript data-gtmsrc=\"https:\/\/www.dwin1.com\/12195.js\" defer type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cimg src=\"https:\/\/www.awin1.com\/sread.img?tt=ns\u0026amp;tv=2\u0026amp;merchant=12195\u0026amp;amount=",["escape",["macro",28],12],"\u0026amp;ch=",["escape",["macro",31],12],"\u0026amp;parts=",["escape",["macro",32],12],":",["escape",["macro",28],12],"\u0026amp;ref=",["escape",["macro",27],12],"\u0026amp;testmode=0\"\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":383
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"read-more-vanguard-pixel\"\u003E\u003C\/div\u003E\n\u003Cdiv id=\"read-more-vanguard-pixel2\"\u003E\u003C\/div\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(\".read-more-section ul li a\")[0].text=\"It's All Relative - Paid Post\";jQuery(\".read-more-section ul li a\")[0].href=\"https:\/\/ad.doubleclick.net\/ddm\/clk\/410632542;211162178;r\";var pixel='\\x3cIMG SRC\\x3d\"https:\/\/ad.doubleclick.net\/ddm\/ad\/N2992.Motley_Fool.com__\/B20415716.211162178;sz\\x3d1x1;ord\\x3d[timestamp];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d?\" BORDER\\x3d0 WIDTH\\x3d1 HEIGHT\\x3d1 ALT\\x3d\"Advertisement\"\\x3e',d=new Date;pixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#read-more-vanguard-pixel\").append(pixel);\nvar pixel2='\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d211162178\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e';\njQuery(\"#read-more-vanguard-pixel2\").append(pixel2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":390
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"read-more-vanguard-pixel\"\u003E\u003C\/div\u003E\n\u003Cdiv id=\"read-more-vanguard-pixel2\"\u003E\u003C\/div\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(\".read-more-section ul li a\")[0].text=\"Your Investing Life\\u2122: Spending Your Retirement Savings - Paid Post\";jQuery(\".read-more-section ul li a\")[0].href=\"https:\/\/ad.doubleclick.net\/ddm\/clk\/410676425;211211151;l\";var pixel='\\x3cIMG SRC\\x3d\"https:\/\/ad.doubleclick.net\/ddm\/ad\/N2992.Motley_Fool.com__\/B20415716.211211151;sz\\x3d1x1;ord\\x3d[timestamp];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d?\" BORDER\\x3d0 WIDTH\\x3d1 HEIGHT\\x3d1 ALT\\x3d\"Advertisement\"\\x3e',d=new Date;\npixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#read-more-vanguard-pixel\").append(pixel);var pixel2='\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d211211151\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e';\njQuery(\"#read-more-vanguard-pixel2\").append(pixel2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":391
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"vanguard-2017-article-pixel\"\u003E\u003C\/div\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar pixel='\\x3cIMG SRC\\x3d\"https:\/\/ad.doubleclick.net\/ddm\/ad\/N2992.Motley_Fool.com__\/B20415716.211167629;sz\\x3d1x1;ord\\x3d[timestamp];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d?\" BORDER\\x3d0 WIDTH\\x3d1 HEIGHT\\x3d1 ALT\\x3d\"Advertisement\"\\x3e\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d211167629\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e',\nd=new Date;pixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#vanguard-2017-article-pixel\").append(pixel);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":392
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"vanguard-2017-article-pixel\"\u003E\u003C\/div\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar pixel='\\x3cIMG SRC\\x3d\"https:\/\/ad.doubleclick.net\/ddm\/ad\/N2992.Motley_Fool.com__\/B20415716.211165727;sz\\x3d1x1;ord\\x3d[timestamp];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d?\" BORDER\\x3d0 WIDTH\\x3d1 HEIGHT\\x3d1 ALT\\x3d\"Advertisement\"\\x3e\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d211165727\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e',\nd=new Date;pixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#vanguard-2017-article-pixel\").append(pixel);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":393
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"read-more-vanguard-pixel\"\u003E\u003C\/div\u003E\n\u003Cdiv id=\"read-more-vanguard-pixel2\"\u003E\u003C\/div\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(\".read-more-section ul li a\")[0].text=\"How Are ETFs Different from Mutual Funds? - Paid Post\";jQuery(\".read-more-section ul li a\")[0].href=\"https:\/\/ad.doubleclick.net\/ddm\/clk\/412402335;213268321;n\";var pixel='\\x3cIMG SRC\\x3d\"https:\/\/ad.doubleclick.net\/ddm\/ad\/N2992.Motley_Fool.com__\/B20415716.213268321;sz\\x3d1x1;ord\\x3d[timestamp];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d?\" BORDER\\x3d0 WIDTH\\x3d1 HEIGHT\\x3d1 ALT\\x3d\"Advertisement\"\\x3e',d=new Date;\npixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#read-more-vanguard-pixel\").append(pixel);var pixel2='\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d213268321\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e';\njQuery(\"#read-more-vanguard-pixel2\").append(pixel2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":398
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"read-more-vanguard-pixel\"\u003E\u003C\/div\u003E\n\u003Cdiv id=\"read-more-vanguard-pixel2\"\u003E\u003C\/div\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(\".read-more-section ul li a\")[0].text=\"How to Put a Dynamic Retirement Spending Strategy in Place - Paid Post\";jQuery(\".read-more-section ul li a\")[0].href=\"https:\/\/ad.doubleclick.net\/ddm\/clk\/412401354;213229925;u\";var pixel='\\x3cIMG SRC\\x3d\"https:\/\/ad.doubleclick.net\/ddm\/ad\/N2992.Motley_Fool.com__\/B20415716.213229925;sz\\x3d1x1;ord\\x3d[timestamp];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d?\" BORDER\\x3d0 WIDTH\\x3d1 HEIGHT\\x3d1 ALT\\x3d\"Advertisement\"\\x3e',d=new Date;\npixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#read-more-vanguard-pixel\").append(pixel);var pixel2='\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d213229925\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e';\njQuery(\"#read-more-vanguard-pixel2\").append(pixel2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":399
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"vanguard-2017-article-pixel\"\u003E\u003C\/div\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar pixel='\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d213227708\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e',\nd=new Date;pixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#vanguard-2017-article-pixel\").append(pixel);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":400
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"vanguard-2017-article-pixel\"\u003E\u003C\/div\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar pixel='\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d213229877\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e',\nd=new Date;pixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#vanguard-2017-article-pixel\").append(pixel);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":401
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\",hashedEmail=unescape(encodeURIComponent(\"",["escape",["macro",34],7],"\")).trim().toLowerCase(),quantity=1;\nwindow.criteo_q.push({event:\"setAccount\",account:27608},{event:\"setSiteType\",type:deviceType},{event:\"setHashedEmail\",email:hashedEmail},{event:\"trackTransaction\",id:\"",["escape",["macro",27],7],"\",item:[{id:\"",["escape",["macro",26],7],"\",price:",["escape",["macro",28],8,16],",quantity:quantity}]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":410
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");var targetting={},sha256Email=\"",["escape",["macro",35],7],"\";\"\"!=sha256Email\u0026\u0026(targetting.em=sha256Email);var fn=\"",["escape",["macro",36],7],"\";\n\"\"!=fn\u0026\u0026(targetting.fn=fn);var ln=\"",["escape",["macro",37],7],"\";\"\"!=ln\u0026\u0026(targetting.ln=ln);var ct=\"",["escape",["macro",38],7],"\";\"\"!=ct\u0026\u0026(targetting.ct=ct);var st=\"",["escape",["macro",39],7],"\";\"\"!=st\u0026\u0026(targetting.st=st);var zp=\"",["escape",["macro",40],7],"\";\"\"!=zp\u0026\u0026(targetting.zp=zp);fbq(\"init\",\"1561515534098628\",targetting);fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\",{value:\"",["escape",["macro",28],7],"\",currency:\"USD\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1561515534098628\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":412
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1561515534098628\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Lead\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1561515534098628\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":413
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.pi_params={};pi_params.company_id=\"1997\";(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/cdn.powerinboxedge.com\/framework\/pi-notify.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":414
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"nuo4p\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuo4p\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/t.co\/i\/adsct?txn_id=nuo4p\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":420
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"430113\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":425
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"make_purchase\",id:1008198});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1008198\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"https:\/\/trc.taboola.com\/1008198\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":426
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",132,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,b){var d=[\"00e9ce2f1c669946a79bfac548f4eebd1a\",\"00afaf09ccd9eeb7f3333963113cad51d6\"];if(a.obApi)b=function(a){return\"[object Array]\"===Object.prototype.toString.call(a)?a:[a]},a.obApi.marketerId=b(a.obApi.marketerId).concat(b(d));else{var c=a.obApi=function(){c.dispatch?c.dispatch.apply(c,arguments):c.queue.push(arguments)};c.version=\"1.1\";c.loaded=!0;c.marketerId=d;c.queue=[];a=b.createElement(\"script\");a.async=!0;a.src=\"\/\/amplify.outbrain.com\/cp\/obtp.js\";a.type=\"text\/javascript\";b=b.getElementsByTagName(\"script\")[0];\nb.parentNode.insertBefore(a,b)}}(window,document);obApi(\"track\",\"Purchase\",{orderValue:\"",["escape",["macro",28],7],"\",orderId:\"",["escape",["macro",27],7],"\",currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":427
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!==typeof window.analytics\u0026\u0026analytics.ready(function(){var a=\"",["escape",["macro",41],7],"\";\"\"==a\u0026\u0026(a=\"",["escape",["macro",42],7],"\");a=a.toLowerCase();\"\"!=a\u0026\u0026\"undefined\"!==typeof window.jstag\u0026\u0026window.jstag.send({email:a})});\u003C\/script\u003E  "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":442
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q=window.criteo_q||[];var hashedEmail=\"",["escape",["macro",5],7],"\";window.criteo_q.push({event:\"setAccount\",account:27608},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:hashedEmail},{event:\"viewItem\",item:1});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":444
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\",hashedEmail=\"",["escape",["macro",5],7],"\",price=",["escape",["macro",43],8,16],";window.criteo_q.push({event:\"setAccount\",account:27608},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:hashedEmail},{event:\"viewBasket\",item:[{id:1,price:price,quantity:1}]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":445
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"10064414\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":455
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",132,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,b){var d=[\"00e9ce2f1c669946a79bfac548f4eebd1a\",\"00afaf09ccd9eeb7f3333963113cad51d6\"];if(a.obApi)b=function(a){return\"[object Array]\"===Object.prototype.toString.call(a)?a:[a]},a.obApi.marketerId=b(a.obApi.marketerId).concat(b(d));else{var c=a.obApi=function(){c.dispatch?c.dispatch.apply(c,arguments):c.queue.push(arguments)};c.version=\"1.1\";c.loaded=!0;c.marketerId=d;c.queue=[];a=b.createElement(\"script\");a.async=!0;a.src=\"\/\/amplify.outbrain.com\/cp\/obtp.js\";a.type=\"text\/javascript\";b=b.getElementsByTagName(\"script\")[0];\nb.parentNode.insertBefore(a,b)}}(window,document);obApi(\"track\",\"Lead\");\u003C\/script\u003E  ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":459
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"499723707110066\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\",{value:\"",["escape",["macro",28],7],"\",currency:\"USD\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=499723707110066\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":460
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026amp;.yp=430113\u0026amp;ea=sale\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":461
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Ciframe src=\"https:\/\/secure.verifiedlink.net\/aff_l?offer_id=769\" scrolling=\"no\" frameborder=\"0\" width=\"1\" height=\"1\"\u003E\u003C\/iframe\u003E\n\n\n\u003Cimg src=\"https:\/\/secure.verifiedlink.net\/aff_l?offer_id=769\" width=\"1\" height=\"1\"\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":466
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\",id:1150963});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1150963\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":475
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"ApplyNow\",id:1150963});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg src=\"\/\/trc.taboola.com\/1150963\/log\/3\/unip?en=ApplyNow\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":477
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"499723707110066\");fbq(\"track\",\"Lead\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=499723707110066\u0026amp;ev=Lead\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":485
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(\".offer\").each(function(){var a=$(this),c=a.data(\"term\"),b=a.data(\"productName\").replace(\"MotleyFool\",\"\");a=a.data(\"discountedPrice\");c=\"OrderPageView_\"+b+\"_price_seen_\"+c+\"yr\";b={};b[c]=a;\"undefined\"!==typeof window.jstag\u0026\u0026window.jstag.send(b)});\u003C\/script\u003E  ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":486
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\",id:1008198});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1008198\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"\/\/trc.taboola.com\/1008198\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":489
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"2f1f9f24050e48058e3c6024f79a68b1\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/2f1f9f24050e48058e3c6024f79a68b1\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":520
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"e2f4cee7b1d3457da6cceb16018039ee\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/e2f4cee7b1d3457da6cceb16018039ee\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"GenerateLead\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":523
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"e2f4cee7b1d3457da6cceb16018039ee\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/e2f4cee7b1d3457da6cceb16018039ee\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":524
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"e2f4cee7b1d3457da6cceb16018039ee\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/e2f4cee7b1d3457da6cceb16018039ee\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"Generic\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":525
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/cdn.inpwrd.net\/track\/1.0.0\/bundle.min.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":527
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"\/\/content.inpwrd.net\/data\/conversion\/?conversionTypeId=c1\" style=\"opacity: 0; width: 0px; height: 0px;\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":528
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"\/\/content.inpwrd.net\/data\/conversion\/?conversionTypeId=c2\" style=\"opacity: 0; width: 0px; height: 0px;\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":529
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"10067574\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":536
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"10067574\",qstrings:{ea:\"ecap\"}}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":537
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"10067574\",qstrings:{ea:\"purchase\"}}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":538
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"http:\/\/trends.revcontent.com\/conv.php?t=abSmBvPtii1fdIzyCqCsWNtHGYuVJolTtdnF8xZdMeKSPsm28%2FQ6b3bz6118O6Ex\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":539
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"http:\/\/trends.revcontent.com\/conv.php?t=abSmBvPtii1fdIzyCqCsWNtHGYuVJolTtdnF8xZdMeKSPsm28%2FQ6b3bz6118O6Ex\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":540
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar now=Date.now(),i=new Image;i.src=\"https:\/\/alb.reddit.com\/snoo.gif?q\\x3dCAAHAAABAAoACQAAAC2oj-BZAA\\x3d\\x3d\\x26s\\x3d9N0OUe7rhbIpQEkk3qYk5BwKxDgh3Lo6Uzkqo1CQGAs\\x3d\\x26ts\\x3dhttps:\/\/alb.reddit.com\/snoo.gif?q\\x3dCAAHAAABAAoACQAAAC2oj-BZAA\\x3d\\x3d\\x26s\\x3d9N0OUe7rhbIpQEkk3qYk5BwKxDgh3Lo6Uzkqo1CQGAs\\x3d\\x26ts\\x3d\"+now;\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/alb.reddit.com\/snoo.gif?q=CAAHAAABAAoACQAAAC2ojBZAA==\u0026amp;s=9N0OUe7rhbIpQEkk3qYk5BwKxDgh3Lo6Uzkqo1CQGAs=https:\/\/alb.reddit.com\/snoo.gif?q=CAAHAAABAAoACQAAAC2oj-BZAA==\u0026amp;s=9N0OUe7rhbIpQEkk3qYk5BwKxDgh3Lo6Uzkqo1CQGAs=\n\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":541
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u0026quot;\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,e){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];var d=\"script\";a=b.createElement(d);a.async=!0;a.src=e;b=b.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"fd01cab3-59c7-4e50-a50c-ba320163da14\",{user_email:\"\\x3cUSER-EMAIL\\x3e\"});snaptr(\"track\",\"PURCHASE\");\u003C\/script\u003E\u0026quot;",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":542
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o17j8\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o17j8\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o17j8\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":544
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"10064414\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":546
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o184a\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o184a\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o184a\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":547
    },{
      "function":"__html",
      "setup_tags":["list",["tag",131,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.uetq=window.uetq||[];window.uetq.push({event_category:\"ecap\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":553
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.pi_params={};pi_params.company_id=\"2338\";(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/cdn.powerinboxedge.com\/framework\/pi-notify.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":565
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"lead\",id:1008198});\u003C\/script\u003E\n\u003Cnoscript\u003E\n   \u003Cimg src=\"\/\/trc.taboola.com\/1008198\/log\/3\/unip?en=lead\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":575
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d){if(!c.rdt){var a=c.rdt=function(){a.sendEvent?a.sendEvent.apply(a,arguments):a.callQueue.push(arguments)};a.callQueue=[];var b=d.createElement(\"script\");b.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";b.async=!0;var e=d.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(b,e)}}(window,document);rdt(\"init\",\"t2_2rcna216\");rdt(\"track\",\"PageVisit\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":580
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Erdt(\"track\",\"Lead\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":581
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Erdt(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":582
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/c.pmsrv.co\/v2\/conversion\/src?a=7ddca2cd-5b7d-410f-8081-0a52c7cb97fd\u0026amp;event=lead\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":583
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/c.pmsrv.co\/v2\/conversion\/src?a=7ddca2cd-5b7d-410f-8081-0a52c7cb97fd\u0026amp;event=purchase\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":584
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"26011910\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":589
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.uetq=window.uetq||[];window.uetq.push(\"event\",\"Apply_Now\",{event_category:\"Click\",event_label:\"Bing_Ads\",event_value:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":590
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Epintrk(\"track\",\"lead\",{lead_type:\"Apply Now Button\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":592
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar img=document.createElement(\"img\");img.src=\"https:\/\/protect-us.mimecast.com\/s\/MzNtC1wzrXf5O26kFLfoup?domain\\x3dpubads.g.doubleclick.net\"+Math.floor(1E9*Math.random());img.style.position=\"absolute\";img.style.display=\"none\";document.body.appendChild(img);\u003C\/script\u003E\n\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"https:\/\/protect-us.mimecast.com\/s\/vfpSC3102Zf0x6XGf2EJVw?domain=pubads.g.doubleclick.net\" width=\"1\" height=\"1\" border=\"0\/\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":593
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg src=\"https:\/\/bnm.go2cloud.org\/aff_l?offer_id=970\" width=\"1\" height=\"1\"\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":594
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cimg src=\"https:\/\/data.dianomi.com\/frontend\/pixel2?shortcode=theascent.retargeting\" width=\"1\" height=\"1\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":596
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar AWIN={Tracking:{}};AWIN.Tracking.Sale={};AWIN.Tracking.Sale.amount=\"1\";AWIN.Tracking.Sale.channel=\"",["escape",["macro",8],7],"\";AWIN.Tracking.Sale.orderRef=\"",["escape",["macro",45],7],"\";AWIN.Tracking.Sale.parts=\"motleyfool:1\";AWIN.Tracking.Sale.test=\"0\";AWIN.Tracking.Sale.currency=\"USD\";AWIN.Tracking.Sale.voucher=\"\";\u003C\/script\u003E \n\u003Cform style=\"display: none;\" name=\"aw_basket_form\"\u003E\n\u003Ctextarea wrap=\"physical\" id=\"aw_basket\"\u003E\nAW:P|12195|",["escape",["macro",45],2],"|1|motley fool|1|1|1|motley fool|\n\u003C\/textarea\u003E\n\u003C\/form\u003E\n\u003Cscript data-gtmsrc=\"https:\/\/www.dwin1.com\/12195.js\" defer type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cimg src=\"https:\/\/www.awin1.com\/sread.img?tt=ns\u0026amp;tv=2\u0026amp;merchant=12195\u0026amp;amount=1.00\u0026amp;cr=USD\u0026amp;ref=",["escape",["macro",45],12],"\u0026amp;parts=motleyfool:1.00\u0026amp;vc=\u0026amp;ch=aw\u0026amp;testmode=0\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":603
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cimg src=\"https:\/\/www.dianomi.com\/pixeltrack.pl?t=the.ascent\" width=\"1\" height=\"1\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":605
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cimg src=\"https:\/\/data.dianomi.com\/frontend\/pixel2?shortcode=theascent.retargeting.creditcard\" width=\"1\" height=\"1\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":606
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/b-code.liadm.com\/a-0264.min.js\" async=\"true\" charset=\"utf-8\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":607
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.liQ=window.liQ||[];window.liQ.push({event:\"conversion\",name:\"email_signup\",email:\"",["escape",["macro",45],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":608
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.liQ=window.liQ||[];window.liQ.push({event:\"conversion\",name:\"product_purchase\",email:\"",["escape",["macro",34],7],"\",conversionId:\"",["escape",["macro",27],7],"\",amount:\"",["escape",["macro",28],7],"\",currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":611
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=42522\u0026amp;conversionId=1204809\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":613
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=42522\u0026amp;conversionId=1204817\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":614
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Ciframe src=\"https:\/\/protect-us.mimecast.com\/s\/DO-KCmZVQDCoXZmDSG-h49?domain=clicks.itstrackable.com\" scrolling=\"no\" frameborder=\"0\" width=\"1\" height=\"1\"\u003E\u003C\/iframe\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":615
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=1376554\u0026amp;conversionId=681387\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":620
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=1376554\u0026amp;conversionId=681395\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":621
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"430113\",qstrings:{et:\"custom\",ea:\"lead\"}}});\u003C\/script\u003E \n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":626
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"430113\",qstrings:{et:\"custom\",ea:\"brlead\"}}});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":627
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"430113\",qstrings:{et:\"custom\",ea:\"brsale\"}}});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":628
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",125,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efbq(\"trackCustom\",\"90pct_Scroll\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":630
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3cimg src\\x3d\"https:\/\/pubads.g.doubleclick.net\/activity;xsp\\x3d4601000;ord\\x3d1;num\\x3d'+a+'?\" width\\x3d1 height\\x3d1 border\\x3d0\\x3e');\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"https:\/\/pubads.g.doubleclick.net\/activity;xsp=4601000;ord=1;num=1?\" width=\"1\" height=\"1\" border=\"0\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":631
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"make_purchase\",id:1250761});\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg src=\"https:\/\/trc.taboola.com\/1250761\/log\/3\/unip?en=make_purchase\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":633
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"lead\",id:1250761});\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg src=\"https:\/\/trc.taboola.com\/1250761\/log\/3\/unip?en=lead\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":634
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"make_purchase\",id:1250760});\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg src=\"https:\/\/trc.taboola.com\/1250760\/log\/3\/unip?en=make_purchase\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":635
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"lead\",id:1250760});\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg src=\"https:\/\/trc.taboola.com\/1250760\/log\/3\/unip?en=lead\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":636
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"lead\",id:1250762});\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg src=\"https:\/\/trc.taboola.com\/1250762\/log\/3\/unip?en=lead\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":637
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"make_purchase\",id:1250762});\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg src=\"https:\/\/trc.taboola.com\/1250762\/log\/3\/unip?en=make_purchase\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":638
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"lead\",id:1250763});\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg src=\"https:\/\/trc.taboola.com\/1250763\/log\/3\/unip?en=lead\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":639
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"make_purchase\",id:1250763});\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg src=\"https:\/\/trc.taboola.com\/1250763\/log\/3\/unip?en=make_purchase\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":640
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\",id:1250763});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1250763\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"https:\/\/trc.taboola.com\/1250763\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":641
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\",id:1250760});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1250760\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"https:\/\/trc.taboola.com\/1250760\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":642
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\",id:1250761});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1250761\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"https:\/\/trc.taboola.com\/1250761\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":643
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\",id:1250762});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1250762\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"https:\/\/trc.taboola.com\/1250762\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":644
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript src=\"https:\/\/c.pmsrv.co\/v2\/conversion\/src?a=7ddca2cd-5b7d-410f-8081-0a52c7cb97fd\u0026amp;event=viewcontent\" type=\"text\/javascript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":645
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.liQ=window.liQ||[];window.liQ.push({event:\"conversion\",name:\"apply_now\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":647
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\" id=\"hs-script-loader\" async defer data-gtmsrc=\"\/\/js.hs-scripts.com\/6313684.js\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":659
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\" id=\"hs-script-loader\" async defer data-gtmsrc=\"\/\/js.hs-scripts.com\/4465084.js\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":660
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"articlePageView"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"http:\/\/www.fool.com\/video-alert"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"EcapResults"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/ecap\/1255\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"EcapLandingPage"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/fool\/thank-you\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/credit-cards\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/pwa\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"EmailReady"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"https:\/\/www.fool.com\/vip\/investor-alert\/biotech\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"order\/e5d1ddf3-a704-4387-8454-6580392b2383"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"fool.com\/vip\/investor-alert\/biotech-vlp\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"https:\/\/www.fool.com\/order\/fe_offers\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"order\/ec78f908-ebfa-4013-b52a-ea86bb905d59"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"revcontent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"OrderResults"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"dianomi"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"bing"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"revcontent"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"myfinance"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks\/savings-accounts\/synchrony-bank-high-yield-savings-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks\/savings-accounts\/american-express-personal-savings-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/the-ascent\/banks\/savings-accounts\/marcus-goldman-sachs-savings-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks\/savings-accounts\/ally-online-savings-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks\/savings-accounts\/discover-savings-review\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/the-ascent\/banks\/savings-accounts\/barclays-online-savings-review\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/the-ascent\/banks\/best-savings-accounts\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks\/landing\/best-savings-accounts\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks\/savings-accounts\/rates\/"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"google"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"google"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/ext-content\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"ascent"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"the-blueprint"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"millionacres"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"soapbox"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks\/best-cd-rates\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks\/best-5-year-cd-rates\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks\/best-2-year-cd-rates\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/buying-stocks\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/buying-stocks\/best-online-stock-brokers-beginners\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/buying-stocks\/td-ameritrade-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/buying-stocks"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/mortgage"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/personal-loans"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"\/the-ascent\/offers\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)122374_933($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/discover-it-student-cash-back-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/best-credit-cards-for-students\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/discover\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/top-ten\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/beginners-guide\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/high-limit-credit-cards\/fair-credit\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/high-limit-credit-cards\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/discover-it-student-chrome-review\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/discover-it-chrome-review\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/discover-it-secured-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/bad-credit\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/high-limit-credit-cards\/bad-credit\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/secured-credit-cards\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/what-credit-score-do-i-need-discover-credit-card\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/american-express-blue-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/capital-one-journey-student-review\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/chase-vs-discover-credit-cards-which-are-better\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/blog\/definitive-guide-securing-higher-credit-limit\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/capital-one-secured-mastercard-review\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/blog\/7-top-credit-cards-amazon-cash-back\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/blog\/chase-freedom-vs-discover-it-cash-back\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/blog\/costco-credit-card-worth-it\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/blog\/discover-cash-back-calendar\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/blog\/discover-it-cash-back-vs-bank-of-america-cash-rewards\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/capital-one-quicksilver-one-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/capital-one-savorone-cash-rewards-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/chase-amazon-prime-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/chase-amazon-rewards-visa-review\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/kohls-credit-card-worth-it\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/cabelas-credit-card-worth-it\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/tj-maxx-credit-card-worth-it\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/discover-it-cash-back-review\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/best-cash-back-credit-card\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/best-no-annual-fee-cards\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/best-rewards-credit-cards\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/best-sign-up-bonus-cards\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/cards-for-gas-and-groceries\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/excellent-credit\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/good-credit\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/these-credit-cards-give-the-most-cash-back\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/best-credit-cards\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/cards-for-excellent-credit\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/discover-it-cash-back-review"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/discover-it-cash-back-highest\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/best-credit-cards-newlpv1\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/0-percent-apr-cards-2\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/0-percent-apr-cards-1\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/no-annual-fee-cards-1\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/rewards-cards-1\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"order-results"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"thank-you"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/credit-scores-and-bonuses\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/rewards-picks\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/cash-back-picks\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/low-apr-picks\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/the-ascent\/credit-cards\/landing\/discover-it-cash-back-review-v1\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/the-ascent\/credit-cards\/landing\/business-casual-podcast\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/discover-it-miles-review\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/airline-cards\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/best-travel-cards-no-annual-fee\/"
    },{
      "function":"_sw",
      "arg0":["macro",11],
      "arg1":"https:\/\/www.fool.com\/the-ascent\/offers\/credit-cards\/bank-of-america-cash-rewards\/"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)122374_1030($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/best-zero-interest-cards\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/discover-it-balance-transfer-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/high-limit-credit-cards\/average-credit\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/low-interest-cards\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/discover-it-balance-transfer-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/our-highest-rated-balance-transfer-cards\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/10k-balance-transfer-1\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/10k-balance-transfer-2\/"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"mgid"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/buying-stocks\/etrade-review\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/buying-stocks\/best-brokers-iras\/"
    },{
      "function":"_sw",
      "arg0":["macro",11],
      "arg1":"https:\/\/www.fool.com\/the-ascent\/offers\/credit-cards\/wells-fargo-platinum\/"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)122374_1043($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",11],
      "arg1":"https:\/\/www.fool.com\/the-ascent\/offers\/credit-cards\/discover-it-cash-back\/"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)122374_1024($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"\/the-ascent\/offers\/credit-cards\/"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)122374_1133($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"wf-track-"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"bing"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"take-me-to-sa-click"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"Make The Motley Fool my homepage"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"twitter"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"twitter"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"5-free-stocks"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"https:\/\/www.fool.com"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"https:\/\/www.fool.com\/pwa\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"https:\/\/www.fool.com\/premium\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"https:\/\/www.fool.com\/order"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"https:\/\/www.fool.com\/ecap"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"https:\/\/www.fool.com\/ext"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"SD_ANCHOR"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/order\/instant-upgrade\/"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"lockerdome"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"lockerdome"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"tmf-gold"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"tmf-cta-right"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"Yes!"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"tmf-track-continue"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"tmf-cta-left"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"tmf-silver"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"No"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"button"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"order\/fe_offers\/"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"tmf-sticky-cta"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"OrderPageView"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"www.fool.com\/order\/ret"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"MRE"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/\/www.fool.com\/thank-you"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"nextlevelmedia"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"newsletters.fool.com"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/order\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.historyChange"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"SkipOrderResults=true"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/vip\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"boards.fool.com"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"my.fool.com"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"www.fool.com\/ecap\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/order-results\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Foolwealth_Microsite_Pageview"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"foolwealth.com"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"www.fool.com\/vip\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"newsletters.fool.com\/1255"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"newsletters.fool.com\/1451"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"newsletters.fool.com\/30"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"newsletters.fool.com\/1228"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"newsletters.fool.com\/52"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"newsletters.fool.com\/50"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"newsletters.fool.com\/1502"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"https:\/\/www.fool.com\/order\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/mutualfunds\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/retirement\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"qa=ndw"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"1255"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"qa=vsl"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"MDPModal"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/10-common-questions-about-etfs-paid-post"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/first-job-out-of-college-how-to-get-an-easy-a-on-y"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"your-investing-life-spending-your-retirement-savin"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"its-all-relative-paid-post"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"how-to-put-a-dynamic-retirement-spending-strategy"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"how-are-etfs-different-from-mutual-funds-paid-post"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"contentreach"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"facebook"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"powerinbox"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"taboola"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"outbrain"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"OrderPageAddToCart"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"outbrain"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"yahoo"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"strikepointmedia"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"contentreach"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"quora"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"quora"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"inpwrd"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"inpwrd"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"contentreachyahoo"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"contentreachyahoo"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"contentreachrevcontent"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"contentreachrevcontent"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"contentreachreddit"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"contentreachsnap"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"reddit"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"reddit"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"performmedia"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"performmedia"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"investingchannel"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"meta42"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"aw"
    },{
      "function":"_eq",
      "arg0":["macro",44],
      "arg1":"affiliate-leadgen"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/credit-cards\/"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"liveintent"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"liveintent"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"linkedin"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"linkedin"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"itstodaymedia"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"yahoo"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"brightroll"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"brightroll"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"ext-content"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)122374_1331($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"concierge"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/investor-alert\/"
    }],
  "rules":[
    [["if",0],["add",4]],
    [["if",1,2],["add",5,134]],
    [["if",3],["add",6,167,84,199,228,230,231,233]],
    [["if",5],["unless",4],["add",7]],
    [["if",2,6],["add",8]],
    [["if",9],["unless",7,8],["add",9,167]],
    [["if",2,11],["add",10]],
    [["if",2,12],["add",11]],
    [["if",2,13],["add",12]],
    [["if",2,14],["add",13,125]],
    [["if",2,15],["add",14]],
    [["if",16,17],["add",15]],
    [["if",17,18],["add",16]],
    [["if",17,19],["add",17]],
    [["if",3,20],["add",18]],
    [["if",3,21],["add",19]],
    [["if",2,22],["add",20]],
    [["if",2,23],["add",20]],
    [["if",2,24],["add",20]],
    [["if",2,25],["add",20]],
    [["if",2,26],["add",20]],
    [["if",2,27],["add",20]],
    [["if",2,28],["add",21]],
    [["if",2,29],["add",21]],
    [["if",2,30],["add",21]],
    [["if",3,31],["add",22,63]],
    [["if",17,32],["add",23,64]],
    [["if",2,33],["add",24,125]],
    [["if",2],["unless",8,34,35,36,37],["add",25,68,74,75,78,79,80,126,131,132,133,140,144,149,179,184,187,235,236,237,238,239]],
    [["if",2,38],["add",26,61]],
    [["if",2,39],["add",26]],
    [["if",2,40],["add",26]],
    [["if",2,41],["add",27,49]],
    [["if",2,42],["add",28,52]],
    [["if",2,43],["add",29]],
    [["if",2,44],["add",30]],
    [["if",2,45],["add",31]],
    [["if",2,46],["add",32]],
    [["if",2,47],["add",33]],
    [["if",2,48],["add",34,1]],
    [["if",2,49],["add",35]],
    [["if",50,51,52,53],["add",36,38,176,180,194,195,198,206,207,212,240]],
    [["if",2,51],["add",37,170,175,0,205,3,210,242]],
    [["if",2,54],["add",39]],
    [["if",2,55],["add",39]],
    [["if",2,56],["add",39,40,41,42,44,45,47]],
    [["if",2,57],["add",39,42,44,47]],
    [["if",2,58],["add",39,42]],
    [["if",2,59],["add",39,40]],
    [["if",2,60],["add",39,47]],
    [["if",2,61],["add",40]],
    [["if",2,62],["add",41]],
    [["if",2,63],["add",42]],
    [["if",2,64],["add",42]],
    [["if",2,65],["add",42]],
    [["if",2,66],["add",42]],
    [["if",2,67],["add",43]],
    [["if",2,68],["add",43]],
    [["if",2,69],["add",43]],
    [["if",2,70],["add",43,45]],
    [["if",2,71],["add",43]],
    [["if",2,72],["add",43]],
    [["if",2,73],["add",43]],
    [["if",2,74],["add",43]],
    [["if",2,75],["add",43]],
    [["if",2,76],["add",43]],
    [["if",2,77],["add",43]],
    [["if",2,78],["add",43]],
    [["if",2,79],["add",43]],
    [["if",2,80],["add",43]],
    [["if",2,81],["add",43]],
    [["if",2,82],["add",43]],
    [["if",2,83],["add",43]],
    [["if",2,84],["add",43]],
    [["if",2,85],["add",44]],
    [["if",2,86],["add",44]],
    [["if",2,87],["add",44,47]],
    [["if",2,88],["add",44]],
    [["if",2,89],["add",44,47]],
    [["if",2,90],["add",44,45]],
    [["if",2,91],["add",44]],
    [["if",2,92],["add",44]],
    [["if",2,93],["add",44,45,47]],
    [["if",2,94],["add",44]],
    [["if",2,95],["add",44,47]],
    [["if",2,96],["add",44,47]],
    [["if",2,97],["add",44,226]],
    [["if",2,98],["add",44]],
    [["if",2,99],["add",44,47]],
    [["if",2,100],["add",44]],
    [["if",2,101],["add",44,47]],
    [["if",2,102],["add",44,47]],
    [["if",2,103],["add",44]],
    [["if",2],["unless",104,105],["add",44]],
    [["if",2,106],["add",44]],
    [["if",2,107],["add",44]],
    [["if",2,108],["add",44]],
    [["if",2,109],["add",44]],
    [["if",2,110],["add",44]],
    [["if",2,111],["add",44,47]],
    [["if",2,112],["add",45]],
    [["if",2,113],["add",45]],
    [["if",2,114],["add",45]],
    [["if",52,115,116],["add",46]],
    [["if",2,117],["add",47]],
    [["if",2,118],["add",47]],
    [["if",2,119],["add",47]],
    [["if",2,120],["add",47]],
    [["if",2,121],["add",47]],
    [["if",2,122],["add",47]],
    [["if",2,123],["add",47]],
    [["if",2,124],["add",47]],
    [["if",17,125],["add",48]],
    [["if",2,126],["add",50]],
    [["if",2,127],["add",51,53,54]],
    [["if",52,128,129],["add",55,56]],
    [["if",52,130,131],["add",57,58]],
    [["if",51,52,132,133],["add",59,60]],
    [["if",134,135],["add",62]],
    [["if",3,136],["add",65,197]],
    [["if",135,137],["add",66]],
    [["if",135,138],["add",67]],
    [["if",135,141],["add",69]],
    [["if",17,140],["add",70,163],["block",68]],
    [["if",3,139],["add",71,196],["block",68]],
    [["if",2,142],["unless",143,144,145,146,147],["add",72,125]],
    [["if",135,148,149],["add",73]],
    [["if",3,150],["add",76]],
    [["if",17,151],["add",77]],
    [["if",33,135,152,153,154],["add",81]],
    [["if",33,135,155],["add",82]],
    [["if",33,135,156,157,158],["add",83]],
    [["if",17],["add",85,141,150,159,160,167]],
    [["if",135,159,160],["add",86]],
    [["if",135,160,161],["add",87]],
    [["if",163],["unless",162],["add",88]],
    [["if",2],["add",89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,118,119,120,121,122,139,183,200,214,164]],
    [["if",2,165],["add",116]],
    [["if",166],["add",117]],
    [["if",2,167],["add",123]],
    [["if",3,168],["add",123]],
    [["if",2,169],["unless",170,171],["add",2]],
    [["if",169,172],["unless",170,171],["add",2]],
    [["if",2,144,173],["add",124]],
    [["if",2,174],["add",125,137]],
    [["if",2,175],["add",125,136]],
    [["if",2,176],["add",125,136]],
    [["if",2,177],["add",125]],
    [["if",2,170],["unless",182,183,184,185,186,187,188],["add",127]],
    [["if",2,187],["add",127]],
    [["if",2,189],["add",128]],
    [["if",2,190],["add",129]],
    [["if",2,191],["add",129]],
    [["if",2,171],["add",130,143,137],["block",126,239]],
    [["if",2,192],["add",135]],
    [["if",2,193],["add",136]],
    [["if",2,194],["add",138]],
    [["if",195],["add",142]],
    [["if",2,196],["add",145,148]],
    [["if",2,197],["add",146,147]],
    [["if",2,199],["add",151,154]],
    [["if",2,200],["add",152,153]],
    [["if",2,201],["add",155,158]],
    [["if",2,202],["add",156,157]],
    [["if",3,204],["add",161]],
    [["if",3,205],["add",162]],
    [["if",17,206],["add",165,227,229,232,234]],
    [["if",17,207],["add",166]],
    [["if",163],["add",168,178]],
    [["if",208],["add",169]],
    [["if",3,209],["add",171]],
    [["if",17,203],["add",172],["block",160]],
    [["if",17,210],["add",173]],
    [["if",17,211],["add",174]],
    [["if",3,212],["add",177]],
    [["if",3,213],["add",181]],
    [["if",17,214],["add",182]],
    [["if",3,215],["add",185]],
    [["if",17,216],["add",186]],
    [["if",17,217],["add",188]],
    [["if",3,218],["add",189]],
    [["if",3,219],["add",190]],
    [["if",17,220],["add",191]],
    [["if",17,221],["add",192]],
    [["if",17,222],["add",193]],
    [["if",3,223],["add",201]],
    [["if",17,224],["add",202]],
    [["if",3,225],["add",203],["block",239]],
    [["if",17,226],["add",204],["block",239]],
    [["if",17,227],["add",208]],
    [["if",3,228],["add",209]],
    [["if",3,229,230],["add",211]],
    [["if",2,51,231],["add",213]],
    [["if",3,232],["add",215]],
    [["if",17,233],["add",216]],
    [["if",3,234],["add",217,220]],
    [["if",17,235],["add",218,221]],
    [["if",3,236],["add",219]],
    [["if",3,237],["add",222]],
    [["if",3,238],["add",223]],
    [["if",17,239],["add",224]],
    [["if",240,241,242],["add",225]],
    [["if",2,243,244],["add",241]],
    [["if",9,10],["block",9]],
    [["if",2,10],["block",68,74,75,78,79,80,125,131,132,133,144,149,164,179,183,184,187,200,214,235,236,237,238,239]],
    [["if",2,164],["block",88]],
    [["if",2,178],["block",126,239]],
    [["if",179],["block",126,143]],
    [["if",2,180],["block",126,143]],
    [["if",2,181],["block",126]],
    [["if",2,198],["block",149]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={lf:!0},fa={};try{fa.__proto__=ea;da=fa.lf;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=ca,ja=this||self,la=/^[\w+/_-]+[=]{0,2}$/,ma=null;var pa=function(){},qa=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},ra=function(a){return"number"==typeof a&&!isNaN(a)},ua=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},r=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},va=function(a,b){if(a&&ua(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!ra(a)||
!ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},za=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Aa=function(a){return Math.round(Number(a))||0},Ba=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ca=function(a){var b=[];if(ua(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ea=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},xa=function(){this.prefix="gtm.";this.values={}};xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};xa.prototype.get=function(a){return this.values[this.prefix+a]};
var Ga=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ha=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ia=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ja=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ka=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},La=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Ma=function(a){var b=
[];za(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")},Na=function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b.push(d):2048>d?b.push(192|d>>6,128|d&63):55296>d||57344<=d?b.push(224|d>>12,128|d>>6&63,128|d&63):(d=65536+((d&1023)<<10|a.charCodeAt(++c)&1023),b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return new Uint8Array(b)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Oa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Pa=function(a){if(null==a)return String(a);var b=Oa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Qa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ra=function(a){if(!a||"object"!=Pa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Qa(a,"constructor")&&!Qa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Qa(a,b)},B=function(a,b){var c=b||("array"==Pa(a)?[]:{}),d;for(d in a)if(Qa(a,d)){var e=a[d];"array"==Pa(e)?("array"!=Pa(c[d])&&(c[d]=[]),c[d]=B(e,c[d])):Ra(e)?(Ra(c[d])||(c[d]={}),c[d]=B(e,c[d])):c[d]=e}return c};
var Sa=[],Ta={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ua=function(a){return Ta[a]},Va=/[\x00\x22\x26\x27\x3c\x3e]/g;
Sa[2]=function(a){return String(a).replace(Va,Ua)};Sa[3]=function(a){return String(a).replace(Va,Ua)};var Za=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,cb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},db=function(a){return cb[a]};Sa[7]=function(a){return String(a).replace(Za,db)};
Sa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Za,db)+"'"}};var jb=/['()]/g,lb=function(a){return"%"+a.charCodeAt(0).toString(16)};Sa[12]=function(a){var b=
encodeURIComponent(String(a));jb.lastIndex=0;return jb.test(b)?b.replace(jb,lb):b};var mb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,nb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ob=function(a){return nb[a]};var pb=
/^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;Sa[14]=function(a){var b=String(a);return pb.test(b)?b.replace(mb,ob):"#zSoyz"};Sa[16]=function(a){return a};var qb;
var rb=[],sb=[],tb=[],vb=[],wb=[],xb={},yb,zb,Ab,Bb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Cb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=xb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):qb(c,e,b)},Eb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Db(a[e],b,c));
return d},Fb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=xb[b];return c?c.priorityOverride||0:0},Db=function(a,b,c){if(ua(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Db(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=rb[f];if(!h||b.Lc(h))return;c[f]=!0;try{var k=Eb(h,b,c);k.vtp_gtmEventId=b.id;d=Cb(k,b);Ab&&(d=Ab.Mf(d,k))}catch(y){b.te&&b.te(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Db(a[l],b,c)]=Db(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=Db(a[n],b,c);zb&&(m=m||q===zb.ub);d.push(q)}return zb&&m?zb.Pf(d):d.join("");case "escape":d=Db(a[1],b,c);if(zb&&ua(a[1])&&"macro"===a[1][0]&&zb.mg(a))return zb.Jg(d);d=String(d);for(var u=2;u<a.length;u++)Sa[a[u]]&&(d=Sa[a[u]](d));return d;case "tag":var p=a[1];if(!vb[p])throw Error("Unable to resolve tag reference "+p+".");return d={fe:a[2],
index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Gb(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Gb=function(a,b,c){try{return yb(Eb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Ib=function(){var a=function(b){return{toString:function(){return b}}};return{qd:a("convert_case_to"),rd:a("convert_false_to"),sd:a("convert_null_to"),td:a("convert_true_to"),ud:a("convert_undefined_to"),rh:a("debug_mode_metadata"),ra:a("function"),Qe:a("instance_name"),Ue:a("live_only"),We:a("malware_disabled"),Xe:a("metadata"),sh:a("original_vendor_template_id"),af:a("once_per_event"),Dd:a("once_per_load"),Ld:a("setup_tags"),Nd:a("tag_id"),Od:a("teardown_tags")}}();var Jb=null,Mb=function(a){function b(q){for(var u=0;u<q.length;u++)d[q[u]]=!0}var c=[],d=[];Jb=Kb(a);for(var e=0;e<sb.length;e++){var f=sb[e],h=Lb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<vb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Lb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Jb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Jb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Kb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Gb(tb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var dc,ec=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Af&&(l["fix_"+m]=!0),l.he=l.he||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var p=k.indexOf("--\x3e");if(0<=p)return{content:k.substr(4,p),length:p+3}},endTag:function(){var p=k.match(d);if(p)return{tagName:p[1],length:p[0].length}},atomicTag:function(){var p=q.startTag();
if(p){var t=k.slice(p.length);if(t.match(new RegExp("</\\s*"+p.tagName+"\\s*>","i"))){var v=t.match(new RegExp("([\\s\\S]*?)</\\s*"+p.tagName+"\\s*>","i"));if(v)return{tagName:p.tagName,O:p.O,content:v[1],length:v[0].length+p.length}}}},startTag:function(){var p=k.match(c);if(p){var t={};p[2].replace(e,function(v,w,y,x,z){var C=y||x||z||f.test(w)&&w||null,A=document.createElement("div");A.innerHTML=C;t[w]=A.textContent||A.innerText||C});return{tagName:p[1],O:t,pb:!!p[3],length:p[0].length}}},chars:function(){var p=
k.indexOf("<");return{length:0<=p?p:k.length}}},u=function(){for(var p in n)if(n[p].test(k)){var t=q[p]();return t?(t.type=t.type||p,t.text=k.substr(0,t.length),k=k.slice(t.length),t):null}};l.he&&function(){var p=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,t=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.qe=function(){return this[this.length-1]};v.Nc=function(A){var E=this.qe();return E&&E.tagName&&E.tagName.toUpperCase()===A.toUpperCase()};v.Lf=
function(A){for(var E=0,J;J=this[E];E++)if(J.tagName===A)return!0;return!1};var w=function(A){A&&"startTag"===A.type&&(A.pb=p.test(A.tagName)||A.pb);return A},y=u,x=function(){k="</"+v.pop().tagName+">"+k},z={startTag:function(A){var E=A.tagName;"TR"===E.toUpperCase()&&v.Nc("TABLE")?(k="<TBODY>"+k,C()):l.Ah&&t.test(E)&&v.Lf(E)?v.Nc(E)?x():(k="</"+A.tagName+">"+k,C()):A.pb||v.push(A)},endTag:function(A){v.qe()?l.Yf&&!v.Nc(A.tagName)?x():v.pop():l.Yf&&(y(),C())}},C=function(){var A=k,E=w(y());k=A;if(E&&
z[E.type])z[E.type](E)};u=function(){C();return w(y())}}();return{append:function(p){k+=p},Rg:u,Gh:function(p){for(var t;(t=u())&&(!p[t.type]||!1!==p[t.type](t)););},clear:function(){var p=k;k="";return p},Hh:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Jh="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.Ih=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.M=b;a.P=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,q;for(q in m.O){var u=m.O[q];n+=
" "+q+'="'+(u?u.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.pb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.C=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.h=a.h||!b[h]&&h;dc=a})();(function(){function a(){}function b(q){return void 0!==q&&null!==q}function c(q,u,p){var t,v=q&&q.length||0;for(t=0;t<v;t++)u.call(p,q[t],t)}function d(q,u,p){for(var t in q)q.hasOwnProperty(t)&&u.call(p,t,q[t])}function e(q,
u){d(u,function(p,t){q[p]=t});return q}function f(q,u){q=q||{};d(u,function(p,t){b(q[p])||(q[p]=t)});return q}function h(q){try{return m.call(q)}catch(p){var u=[];c(q,function(t){u.push(t)});return u}}var k={rf:a,sf:a,tf:a,uf:a,Bf:a,Cf:function(q){return q},done:a,error:function(q){throw q;},Ug:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function q(p,t,v){var w="data-ps-"+t;if(2===arguments.length){var y=p.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?p.setAttribute(w,
v):p.removeAttribute(w)}function u(p,t){var v=p.ownerDocument;e(this,{root:p,options:t,qb:v.defaultView||v.parentWindow,Ha:v,Vb:dc("",{Af:!0}),zc:[p],Wc:"",Xc:v.createElement(p.nodeName),mb:[],ya:[]});q(this.Xc,"proxyof",0)}u.prototype.write=function(){[].push.apply(this.ya,arguments);for(var p;!this.Ib&&this.ya.length;)p=this.ya.shift(),"function"===typeof p?this.Hf(p):this.jd(p)};u.prototype.Hf=function(p){var t={type:"function",value:p.name||p.toString()};this.Tc(t);p.call(this.qb,this.Ha);this.ve(t)};
u.prototype.jd=function(p){this.Vb.append(p);for(var t,v=[],w,y;(t=this.Vb.Rg())&&!(w=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("script"):!1)&&!(y=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("style"):!1);)v.push(t);this.mh(v);w&&this.eg(t);y&&this.fg(t)};u.prototype.mh=function(p){var t=this.Ef(p);t.Zd&&(t.Jc=this.Wc+t.Zd,this.Wc+=t.Ng,this.Xc.innerHTML=t.Jc,this.jh())};u.prototype.Ef=function(p){var t=this.zc.length,v=[],w=[],y=[];c(p,function(x){v.push(x.text);if(x.O){if(!/^noscript$/i.test(x.tagName)){var z=
t++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==x.O.id&&"ps-style"!==x.O.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+z+(x.pb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{Kh:p,raw:v.join(""),Zd:w.join(""),Ng:y.join("")}};u.prototype.jh=function(){for(var p,t=[this.Xc];b(p=t.shift());){var v=1===p.nodeType;if(!v||!q(p,"proxyof")){v&&(this.zc[q(p,"id")]=p,q(p,"id",null));var w=p.parentNode&&q(p.parentNode,"proxyof");
w&&this.zc[w].appendChild(p)}t.unshift.apply(t,h(p.childNodes))}};u.prototype.eg=function(p){var t=this.Vb.clear();t&&this.ya.unshift(t);p.src=p.O.src||p.O.th;p.src&&this.mb.length?this.Ib=p:this.Tc(p);var v=this;this.lh(p,function(){v.ve(p)})};u.prototype.fg=function(p){var t=this.Vb.clear();t&&this.ya.unshift(t);p.type=p.O.type||p.O.vh||"text/css";this.nh(p);t&&this.write()};u.prototype.nh=function(p){var t=this.Gf(p);this.jg(t);p.content&&(t.styleSheet&&!t.sheet?t.styleSheet.cssText=p.content:
t.appendChild(this.Ha.createTextNode(p.content)))};u.prototype.Gf=function(p){var t=this.Ha.createElement(p.tagName);t.setAttribute("type",p.type);d(p.O,function(v,w){t.setAttribute(v,w)});return t};u.prototype.jg=function(p){this.jd('<span id="ps-style"/>');var t=this.Ha.getElementById("ps-style");t.parentNode.replaceChild(p,t)};u.prototype.Tc=function(p){p.Eg=this.ya;this.ya=[];this.mb.unshift(p)};u.prototype.ve=function(p){p!==this.mb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.mb.shift(),this.write.apply(this,p.Eg),!this.mb.length&&this.Ib&&(this.Tc(this.Ib),this.Ib=null))};u.prototype.lh=function(p,t){var v=this.Ff(p),w=this.$g(v),y=this.options.rf;p.src&&(v.src=p.src,this.Yg(v,w?y:function(){t();y()}));try{this.ig(v),p.src&&!w||t()}catch(x){this.options.error(x),t()}};u.prototype.Ff=function(p){var t=this.Ha.createElement(p.tagName);d(p.O,function(v,w){t.setAttribute(v,w)});p.content&&(t.text=p.content);return t};u.prototype.ig=function(p){this.jd('<span id="ps-script"/>');
var t=this.Ha.getElementById("ps-script");t.parentNode.replaceChild(p,t)};u.prototype.Yg=function(p,t){function v(){p=p.onload=p.onreadystatechange=p.onerror=null}var w=this.options.error;e(p,{onload:function(){v();t()},onreadystatechange:function(){/^(loaded|complete)$/.test(p.readyState)&&(v(),t())},onerror:function(){var y={message:"remote script failed "+p.src};v();w(y);t()}})};u.prototype.$g=function(p){return!/^script$/i.test(p.nodeName)||!!(this.options.Ug&&p.src&&p.hasAttribute("async"))};
return u}();l.postscribe=function(){function q(){var w=t.shift(),y;w&&(y=w[w.length-1],y.sf(),w.stream=u.apply(null,w),y.tf())}function u(w,y,x){function z(J){J=x.Cf(J);v.write(J);x.uf(J)}v=new n(w,x);v.id=p++;v.name=x.name||v.id;var C=w.ownerDocument,A={close:C.close,open:C.open,write:C.write,writeln:C.writeln};e(C,{close:a,open:a,write:function(){return z(h(arguments).join(""))},writeln:function(){return z(h(arguments).join("")+"\n")}});var E=v.qb.onerror||a;v.qb.onerror=function(J,M,V){x.error({Dh:J+
" - "+M+":"+V});E.apply(v.qb,arguments)};v.write(y,function(){e(C,A);v.qb.onerror=E;x.done();v=null;q()});return v}var p=0,t=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.Ch?w[0]:w;var z=[w,y,x];w.Ig={cancel:function(){z.stream?z.stream.abort():z[1]=a}};x.Bf(z);t.push(z);v||q();return w.Ig},{streams:{},Fh:t,wh:n})}();ec=l.postscribe}})();var D=window,F=document,fc=navigator,gc=F.currentScript&&F.currentScript.src,hc=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},ic=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},jc=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;ic(d,b);c&&(d.onerror=c);var e;if(null===ma)b:{var f=ja.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&la.test(k)){ma=k;break b}}ma=""}e=ma;e&&d.setAttribute("nonce",e);var l=F.getElementsByTagName("script")[0]||F.body||F.head;l.parentNode.insertBefore(d,l);return d},kc=function(){if(gc){var a=gc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},lc=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||
F.body||F.head;d.parentNode.insertBefore(c,d);ic(c,b);void 0!==a&&(c.src=a);return c},mc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},nc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},oc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){D.setTimeout(a,0)},qc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},rc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},sc=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},tc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},uc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var wc=function(a){return vc?F.querySelectorAll(a):null},xc=function(a,b){if(!vc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!F.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},yc=!1;if(F.querySelectorAll)try{var zc=F.querySelectorAll(":root");zc&&1==zc.length&&zc[0]==F.documentElement&&(yc=!0)}catch(a){}var vc=yc;var H={qa:"_ee",nc:"event_callback",tb:"event_timeout",D:"gtag.config",X:"allow_ad_personalization_signals",oc:"restricted_data_processing",Qa:"allow_google_signals",Y:"cookie_expires",sb:"cookie_update",Ra:"session_duration",ca:"user_properties"};
H.de=[H.X,H.Qa,H.sb];H.ke=[H.Y,H.tb,H.Ra];var Pc=/[A-Z]+/,Qc=/\s/,Rc=function(a){if(g(a)&&(a=Ea(a),!Qc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Pc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],o:d}}}}},Tc=function(a){for(var b={},c=0;c<a.length;++c){var d=Rc(a[c]);d&&(b[d.id]=d)}Sc(b);var e=[];za(b,function(f,h){e.push(h)});return e};
function Sc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.o[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Uc={},Vc=null,Wc=Math.random();Uc.s="GTM-HQ4K";Uc.yb="1t0";var Xc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Yc="www.googletagmanager.com/gtm.js";var Zc=Yc,$c=null,bd=null,cd=null,dd="//www.googletagmanager.com/a?id="+Uc.s+"&cv=1276",ed={},fd={},gd=function(){var a=Vc.sequence||0;Vc.sequence=a+1;return a};var hd={},I=function(a,b){hd[a]=hd[a]||[];hd[a][b]=!0},id=function(a){for(var b=[],c=hd[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var jd=function(){return"&tc="+vb.filter(function(a){return a}).length},md=function(){kd||(kd=D.setTimeout(ld,500))},ld=function(){kd&&(D.clearTimeout(kd),kd=void 0);void 0===nd||od[nd]&&!pd&&!qd||(rd[nd]||sd.og()||0>=td--?(I("GTM",1),rd[nd]=!0):(sd.Sg(),mc(ud()),od[nd]=!0,vd=wd=qd=pd=""))},ud=function(){var a=nd;if(void 0===a)return"";var b=id("GTM"),c=id("TAGGING");return[xd,od[a]?"":"&es=1",yd[a],b?"&u="+b:"",c?"&ut="+c:"",jd(),pd,qd,wd,vd,"&z=0"].join("")},zd=function(){return[dd,"&v=3&t=t","&pid="+
wa(),"&rv="+Uc.yb].join("")},Ad="0.005000">Math.random(),xd=zd(),Bd=function(){xd=zd()},od={},pd="",qd="",vd="",wd="",nd=void 0,yd={},rd={},kd=void 0,sd=function(a,b){var c=0,d=0;return{og:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},Sg:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),td=1E3,Cd=function(a,b){if(Ad&&!rd[a]&&nd!==a){ld();nd=a;vd=pd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";yd[a]="&e="+c+"&eid="+a;md()}},Dd=function(a,b,c){if(Ad&&!rd[a]&&
b){a!==nd&&(ld(),nd=a);var d,e=String(b[Ib.ra]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;pd=pd?pd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(xb[h]?"1":"2")+d;vd=vd?vd+"."+k:"&ti="+k;md();2022<=ud().length&&ld()}},Ed=function(a,b,c){if(Ad&&!rd[a]){a!==nd&&(ld(),nd=a);var d=c+b;qd=qd?qd+
"."+d:"&epr="+d;md();2022<=ud().length&&ld()}};var Fd={},Gd=new xa,Hd={},Id={},Ld={name:"dataLayer",set:function(a,b){B(La(a,b),Hd);Jd()},get:function(a){return Kd(a,2)},reset:function(){Gd=new xa;Hd={};Jd()}},Kd=function(a,b){if(2!=b){var c=Gd.get(a);if(Ad){var d=Md(a);c!==d&&I("GTM",5)}return c}return Md(a)},Md=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:Od(d)},Od=function(a){for(var b=Hd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Qd=function(a,b){Id.hasOwnProperty(a)||(Gd.set(a,b),B(La(a,b),Hd),Jd())},Jd=function(a){za(Id,function(b,c){Gd.set(b,c);B(La(b,void 0),Hd);B(La(b,c),Hd);a&&delete Id[b]})},Rd=function(a,b,c){Fd[a]=Fd[a]||{};var d=1!==c?Md(b):Gd.get(b);"array"===Pa(d)||"object"===Pa(d)?Fd[a][b]=B(d):Fd[a][b]=d},Sd=function(a,b){if(Fd[a])return Fd[a][b]},Td=function(a,b){Fd[a]&&delete Fd[a][b]};var Ud=function(){var a=!1;return a};var Q=function(a,b,c,d){return(2===Vd()||d||"http:"!=D.location.protocol?a:b)+c},Vd=function(){var a=kc(),b;if(1===a)a:{var c=Zc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=F.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var je=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),ke={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},le={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},me="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var oe=function(a){var b=Kd("gtm.whitelist");b&&I("GTM",9);var c=b&&Ka(Ca(b),ke),d=Kd("gtm.blacklist");d||(d=Kd("tagTypeBlacklist"))&&I("GTM",3);d?
I("GTM",8):d=[];ne()&&(d=Ca(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=r(Ca(d),"google")&&I("GTM",2);var e=d&&Ka(Ca(d),le),f={};return function(h){var k=h&&h[Ib.ra];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=fd[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>r(c,k))if(l&&0<l.length)for(var q=0;q<
l.length;q++){if(0>r(c,l[q])){I("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var p=0<=r(e,k);if(p)u=p;else{var t=ya(e,l||[]);t&&I("GTM",10);u=t}}var v=!m||u;v||!(0<=r(l,"sandboxedScripts"))||c&&-1!==r(c,"sandboxedScripts")||(v=ya(e,me));return f[k]=v}},ne=function(){return je.test(D.location&&D.location.hostname)};var pe={Mf:function(a,b){b[Ib.qd]&&"string"===typeof a&&(a=1==b[Ib.qd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Ib.sd)&&null===a&&(a=b[Ib.sd]);b.hasOwnProperty(Ib.ud)&&void 0===a&&(a=b[Ib.ud]);b.hasOwnProperty(Ib.td)&&!0===a&&(a=b[Ib.td]);b.hasOwnProperty(Ib.rd)&&!1===a&&(a=b[Ib.rd]);return a}};var qe={active:!0,isWhitelisted:function(){return!0}},re=function(a){var b=Vc.zones;!b&&a&&(b=Vc.zones=a());return b};var se=function(){};var te=!1,ue=0,ve=[];function we(a){if(!te){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){te=!0;for(var e=0;e<ve.length;e++)G(ve[e])}ve.push=function(){for(var f=0;f<arguments.length;f++)G(arguments[f]);return 0}}}function xe(){if(!te&&140>ue){ue++;try{F.documentElement.doScroll("left"),we()}catch(a){D.setTimeout(xe,50)}}}var ye=function(a){te?a():ve.push(a)};var ze={},Ae={},Be=function(a,b,c,d){if(!Ae[a]||Xc[b]||"__zone"===b)return-1;var e={};Ra(d)&&(e=B(d,e));e.id=c;e.status="timeout";return Ae[a].tags.push(e)-1},Ce=function(a,b,c,d){if(Ae[a]){var e=Ae[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function De(a){for(var b=ze[a]||[],c=0;c<b.length;c++)b[c]();ze[a]={push:function(d){d(Uc.s,Ae[a])}}}
var Ge=function(a,b,c){Ae[a]={tags:[]};qa(b)&&Ee(a,b);c&&D.setTimeout(function(){return De(a)},Number(c));return Fe(a)},Ee=function(a,b){ze[a]=ze[a]||[];ze[a].push(Ha(function(){return G(function(){b(Uc.s,Ae[a])})}))};function Fe(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ha(function(){b++;d&&b>=c&&De(a)})},yf:function(){d=!0;b>=c&&De(a)}}};var He=function(){function a(d){return!ra(d)||0>d?0:d}if(!Vc._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=ra(Ld.get("gtm.start"))?Ld.get("gtm.start"):0;Vc._li={cst:a(c-b),cbt:a(bd-b)}}};var Le={},Me=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Ne=!1;
var Oe=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||I("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}He();return D[b]},Pe=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Me();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Re=function(a){},Qe=function(){return D.GoogleAnalyticsObject||"ga"};var Te=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Ue=/:[0-9]+$/,Ve=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Ye=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=We(a.protocol)||We(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(Ue,"").toLowerCase());var f=b,h,k=We(a.protocol);f&&(f=String(f).toLowerCase());switch(f){case "url_no_fragment":h=Xe(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(Ue,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||I("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=r(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Ve(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},We=function(a){return a?a.replace(":","").toLowerCase():""},Xe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
Ze=function(a){var b=F.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||I("TAGGING",1),c="/"+c);var d=b.hostname.replace(Ue,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function df(a,b,c,d){var e=vb[a],f=ef(a,b,c,d);if(!f)return null;var h=Db(e[Ib.Ld],c,[]);if(h&&h.length){var k=h[0];f=df(k.index,{B:f,w:1===k.fe?b.terminate:f,terminate:b.terminate},c,d)}return f}
function ef(a,b,c,d){function e(){if(f[Ib.We])k();else{var w=Eb(f,c,[]),y=Be(c.id,String(f[Ib.ra]),Number(f[Ib.Nd]),w[Ib.Xe]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=Fa()-C;Dd(c.id,vb[a],"5");Ce(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=Fa()-C;Dd(c.id,vb[a],"6");Ce(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Dd(c.id,f,"1");var z=function(){var A=Fa()-C;Dd(c.id,f,"7");Ce(c.id,y,"exception",A);x||(x=!0,k())};var C=Fa();try{Cb(w,c)}catch(A){z(A)}}}var f=vb[a],h=b.B,k=b.w,l=b.terminate;if(c.Lc(f))return null;var m=Db(f[Ib.Od],c,[]);if(m&&m.length){var n=m[0],q=df(n.index,{B:h,w:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.fe?l:q}if(f[Ib.Dd]||f[Ib.af]){var u=f[Ib.Dd]?wb:c.ah,p=h,t=k;if(!u[a]){e=Ha(e);var v=ff(a,u,e);h=v.B;k=v.w}return function(){u[a](p,t)}}return e}
function ff(a,b,c){var d=[],e=[];b[a]=gf(d,e,c);return{B:function(){b[a]=hf;for(var f=0;f<d.length;f++)d[f]()},w:function(){b[a]=jf;for(var f=0;f<e.length;f++)e[f]()}}}function gf(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function hf(a){a()}function jf(a,b){b()};var mf=function(a,b){for(var c=[],d=0;d<vb.length;d++)if(a.kb[d]){var e=vb[d];var f=b.add();try{var h=df(d,{B:f,w:f,terminate:f},a,d);h?c.push({Ee:d,ze:Fb(e),Xf:h}):(kf(d,a),f())}catch(l){f()}}b.yf();c.sort(lf);for(var k=0;k<c.length;k++)c[k].Xf();return 0<c.length};function lf(a,b){var c,d=b.ze,e=a.ze;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Ee,k=b.Ee;f=h>k?1:h<k?-1:0}return f}
function kf(a,b){if(!Ad)return;var c=function(d){var e=b.Lc(vb[d])?"3":"4",f=Db(vb[d][Ib.Ld],b,[]);f&&f.length&&c(f[0].index);Dd(b.id,vb[d],e);var h=Db(vb[d][Ib.Od],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var nf=!1,of=function(a,b,c,d,e){if("gtm.js"==b){if(nf)return!1;nf=!0}Cd(a,b);var f=Ge(a,d,e);Rd(a,"event",1);Rd(a,"ecommerce",1);Rd(a,"gtm");var h={id:a,name:b,Lc:oe(c),kb:[],ah:[],te:function(){I("GTM",6)}};h.kb=Mb(h);var k=mf(h,f);"gtm.js"!==b&&"gtm.sync"!==b||Re(Uc.s);if(!k)return k;for(var l=0;l<h.kb.length;l++)if(h.kb[l]){var m=vb[l];if(m&&!Xc[String(m[Ib.ra])])return!0}return!1};var qf=/^https?:\/\/www\.googletagmanager\.com/;function rf(){var a;return a}function tf(a,b){}
function sf(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function uf(){var a=!1;return a};var vf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.B=function(){};this.w=function(){}},wf=function(a){var b=new vf;b.eventModel=a;return b},xf=function(a,b){a.targetConfig=b;return a},yf=function(a,b){a.containerConfig=b;return a},zf=function(a,b){a.h=b;return a},Af=function(a,b){a.globalConfig=b;return a},Bf=function(a,b){a.B=b;return a},Cf=function(a,b){a.w=b;return a};
vf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Df=function(a){function b(e){za(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];za(c,function(e){d.push(e)});return d};var Ef={},Ff=["G"];Ef.Fe="";var Gf=Ef.Fe.split(",");function Hf(){var a=Vc;return a.gcq=a.gcq||new If}
var Jf=function(a,b,c){Hf().register(a,b,c)},Kf=function(a,b,c,d){Hf().push("event",[b,a],c,d)},Lf=function(a,b){Hf().push("config",[a],b)},Mf={},Nf=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},Of=function(a,b,c,d,e){this.type=a;this.m=b;this.N=c||"";this.h=d;this.i=e},If=function(){this.i={};this.m={};this.h=[]},Pf=function(a,b){var c=Rc(b);return a.i[c.containerId]=a.i[c.containerId]||new Nf},Qf=function(a,b,c,d){if(d.N){var e=Pf(a,d.N),
f=e.m;if(f){var h=B(c),k=B(e.targetConfig[d.N]),l=B(e.containerConfig),m=B(e.i),n=B(a.m),q=Kd("gtm.uniqueEventId"),u=Rc(d.N).prefix,p=Cf(Bf(Af(zf(yf(xf(wf(h),k),l),m),n),function(){Ed(q,u,"2");}),function(){Ed(q,u,"3");});try{Ed(q,u,"1");f(d.N,b,d.m,p)}catch(t){
Ed(q,u,"4");}}}};
If.prototype.register=function(a,b,c){if(3!==Pf(this,a).status){Pf(this,a).m=b;Pf(this,a).status=3;c&&(Pf(this,a).i=c);var d=Rc(a),e=Mf[d.containerId];if(void 0!==e){var f=Vc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Vc[d.containerId]._spx&&(h=h.toLowerCase());var k=Kd("gtm.uniqueEventId"),l=h,m=Fa()-f;if(Ad&&!rd[k]){k!==nd&&(ld(),nd=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);wd=wd?wd+","+n:"&cl="+n}delete Mf[d.containerId]}this.flush()}};
If.prototype.push=function(a,b,c,d){var e=Math.floor(Fa()/1E3);if(c){var f=Rc(c),h;if(h=f){var k;if(k=1===Pf(this,c).status)a:{var l=f.prefix;k=!0}h=k}if(h&&(Pf(this,c).status=2,this.push("require",[],f.containerId),Mf[f.containerId]=Fa(),!Ud())){var m=encodeURIComponent(f.containerId),n=("http:"!=D.location.protocol?"https:":"http:")+
"//www.googletagmanager.com";jc(n+"/gtag/js?id="+m+"&l=dataLayer&cx=c")}}this.h.push(new Of(a,e,c,b,d));d||this.flush()};
If.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==Pf(this,c.N).status&&!a)return;break;case "set":za(c.h[0],function(l,m){B(La(l,m),b.m)});break;case "config":var d=c.h[0],e=!!d[H.Qb];delete d[H.Qb];var f=Pf(this,c.N),h=Rc(c.N),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.N]={});f.h&&e||Qf(this,H.D,d,c);f.h=!0;delete d[H.qa];k?B(d,f.containerConfig):B(d,f.targetConfig[c.N]);break;
case "event":Qf(this,c.h[1],c.h[0],c)}this.h.shift()}};var Rf=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Uf=function(a,b,c,d){var e=Sf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Tf(e,function(f){return f.Jb},b);if(1===e.length)return e[0].id;e=Tf(e,function(f){return f.lb},c);return e[0]?e[0].id:void 0}};
function Wf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Rf(b,e).indexOf(c)}
var Zf=function(a,b,c,d,e,f){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{f&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,u=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var t=h[p];if(null!=t)switch(p){case "secure":t&&(m+="; secure");break;case "domain":q=t;break;default:"path"==p&&(u=t),"expires"==p&&t instanceof Date&&(t=
t.toUTCString()),m+="; "+p+"="+t}}if("auto"===q){for(var v=Xf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!Yf(y,u)&&Wf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!Yf(q,u)&&Wf(m,a,l)}return k};function Tf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}
function Sf(a,b){for(var c=[],d=Rf(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Jb:1*k[0]||1,lb:1*k[1]||1}))}}return c}
var $f=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ag=/(^|\.)doubleclick\.net$/i,Yf=function(a,b){return ag.test(document.location.hostname)||"/"===b&&$f.test(a)},Xf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;ag.test(e)||$f.test(e)||a.push("none");return a};var bg="G".split(/,/),cg=!1;var dg=null,eg={},fg={},gg;function hg(a,b){var c={event:a};b&&(c.eventModel=B(b),b[H.nc]&&(c.eventCallback=b[H.nc]),b[H.tb]&&(c.eventTimeout=b[H.tb]));return c}
var ng={config:function(a){},
event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ra(a[2])&&void 0!=a[2])return;c=a[2]}var d=hg(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Ra(a[1])?b=B(a[1]):3==a.length&&g(a[1])&&(b={},Ra(a[2])||ua(a[2])?b[a[1]]=B(a[2]):b[a[1]]=a[2]);
if(b){b._clear=!0;return b}}},og={policy:!0};var pg=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},rg=function(a){var b=qg(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var sg=!1,tg=[];function ug(){if(!sg){sg=!0;for(var a=0;a<tg.length;a++)G(tg[a])}}var vg=function(a){sg?G(a):tg.push(a)};var Kg=function(a){if(Jg(a))return a;this.h=a};Kg.prototype.dg=function(){return this.h};var Jg=function(a){return!a||"object"!==Pa(a)||Ra(a)?!1:"getUntrustedUpdateValue"in a};Kg.prototype.getUntrustedUpdateValue=Kg.prototype.dg;var Lg=[],Mg=!1,Ng=function(a){return D["dataLayer"].push(a)},Og=function(a){var b=Vc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Pg(a){var b=a._clear;za(a,function(f,h){"_clear"!==f&&(b&&Qd(f,void 0),Qd(f,h))});$c||($c=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=gd(),a["gtm.uniqueEventId"]=d,Qd("gtm.uniqueEventId",d));cd=c;var e=
Qg(a);cd=null;switch(c){case "gtm.init":I("GTM",19),e&&I("GTM",20)}return e}function Qg(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Vc.zones;d=e?e.checkState(Uc.s,c):qe;return d.active?of(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Rg(){for(var a=!1;!Mg&&0<Lg.length;){Mg=!0;delete Hd.eventModel;Jd();var b=Lg.shift();if(null!=b){var c=Jg(b);if(c){var d=b;b=Jg(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Kd(h,1);if(ua(k)||Ra(k))k=B(k);Id[h]=k}}try{if(qa(b))try{b.call(Ld)}catch(v){}else if(ua(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),u=Kd(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,q)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&g(b[0])){var t=ng[b[0]];if(t&&(!c||!og[b[0]])){b=t(b);break a}}b=void 0}if(!b){Mg=!1;continue}}a=Pg(b)||a}}finally{c&&Jd(!0)}}Mg=!1}
return!a}function Sg(){var a=Rg();try{pg(D["dataLayer"],Uc.s)}catch(b){}return a}
var Ug=function(){var a=hc("dataLayer",[]),b=hc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};ye(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});vg(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Vc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Kg(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Lg.push.apply(Lg,d);if(300<
this.length)for(I("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return Rg()&&h};Lg.push.apply(Lg,a.slice(0));Tg()&&G(Sg)},Tg=function(){var a=!0;return a};var Vg={};Vg.ub=new String("undefined");
var Wg=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Vg.ub?b:a[d]);return c.join("")}};Wg.prototype.toString=function(){return this.h("undefined")};Wg.prototype.valueOf=Wg.prototype.toString;Vg.jf=Wg;Vg.xc={};Vg.Pf=function(a){return new Wg(a)};var Xg={};Vg.Tg=function(a,b){var c=gd();Xg[c]=[a,b];return c};Vg.be=function(a){var b=a?0:1;return function(c){var d=Xg[c];if(d&&"function"===typeof d[b])d[b]();Xg[c]=void 0}};Vg.mg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Vg.Jg=function(a){if(a===Vg.ub)return a;var b=gd();Vg.xc[b]=a;return'google_tag_manager["'+Uc.s+'"].macro('+b+")"};Vg.xg=function(a,b,c){a instanceof Vg.jf&&(a=a.h(Vg.Tg(b,c)),b=pa);return{Jc:a,B:b}};var Yg=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||qc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Zg=function(a){Vc.hasOwnProperty("autoEventsSettings")||(Vc.autoEventsSettings={});var b=Vc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},$g=function(a,b,c){Zg(a)[b]=c},ah=function(a,b,c,d){var e=Zg(a),f=Ga(e,b,d);e[b]=c(f)},bh=function(a,b,c){var d=Zg(a);return Ga(d,b,c)};var ch=function(){for(var a=fc.userAgent+(F.cookie||"")+(F.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},fh=function(a,b,c,d){var e=dh(b);return Uf(a,e,eh(c),d)},gh=function(a,b,c,d){var e=""+dh(c),f=eh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},dh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},eh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var hh=["1"],ih={},mh=function(a,b,c,d){var e=jh(a);ih[e]||kh(e,b,c)||(lh(e,ch(),b,c,d),kh(e,b,c))};function lh(a,b,c,d,e){var f=gh(b,"1",d,c);Zf(a,f,c,d,0==e?void 0:new Date(Fa()+1E3*(void 0==e?7776E3:e)))}function kh(a,b,c){var d=fh(a,b,c,hh);d&&(ih[a]=d);return d}function jh(a){return(a||"_gcl")+"_au"};var nh=function(){for(var a=[],b=F.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({dd:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].dd]||(f[a[h].dd]=[]),f[a[h].dd].push({timestamp:k[1],$f:k[2]}))}return f};function oh(){for(var a=ph,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function qh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var ph,rh;function sh(a){ph=ph||qh();rh=rh||oh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(ph[l],ph[m],ph[n],ph[q])}return b.join("")}
function th(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=rh[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}ph=ph||qh();rh=rh||oh();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var uh;function vh(a,b){if(!a||b===F.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var zh=function(){var a=wh,b=xh,c=yh(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){nc(F,"mousedown",d);nc(F,"keyup",d);nc(F,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Ah=function(a,b,c){for(var d=yh().decorators,e={},f=0;f<d.length;++f){var h=d[f];if((!c||h.forms)&&vh(h.domains,a)){var k=h.placement;void 0==k&&(k=h.fragment?2:1);k===b&&Ia(e,h.callback())}}return e},
yh=function(){var a=hc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Bh=/(.*?)\*(.*?)\*(.*)/,Ch=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Dh=/^(?:www\.|m\.|amp\.)+/,Eh=/([^?#]+)(\?[^#]*)?(#.*)?/,Gh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(sh(String(d))))}var e=b.join("*");return["1",Fh(e),e].join("*")},Fh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/
60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=uh)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}uh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^uh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Ih=function(){return function(a){var b=Ze(D.location.href),c=b.search.replace("?",""),d=Ve(c,"_gl",!0)||"";a.query=Hh(d)||{};var e=Ye(b,"fragment").match(/(.*?)(^|&)_gl=([^&]*)&?(.*)/);a.fragment=Hh(e&&e[3]||"")||{}}},Jh=function(){var a=
Ih(),b=yh();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ia(c,d.query),Ia(c,d.fragment));return c},Hh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Bh.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Fh(k,n)){l=!0;break a}l=!1}if(l){for(var q={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)q[u[p]]=th(u[p+1]);return q}}}}catch(t){}};
function Kh(a,b,c){function d(m){var n=m,q=/(.*?)(^|&)_gl=([^&]*)&?(.*)/.exec(n),u=n;if(q){var p=q[2],t=q[4];u=q[1];t&&(u=u+p+t)}m=u;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Eh.exec(b);if(!e)return"";var f=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+f+h+k}
function Lh(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Ah(b,1,c),e=Ah(b,2,c);if(Ja(d)){var f=Gh(d);if(c){if(a&&a.action){var h=(a.method||"").toLowerCase();if("get"===h){for(var k=a.childNodes||[],l=!1,m=0;m<k.length;m++){var n=k[m];if("_gl"===n.name){n.setAttribute("value",f);l=!0;break}}if(!l){var q=F.createElement("input");q.setAttribute("type","hidden");q.setAttribute("name","_gl");q.setAttribute("value",f);a.appendChild(q)}}else if("post"===h){var u=Kh(f,a.action);Te.test(u)&&(a.action=
u)}}}else Mh(f,a,!1)}if(!c&&Ja(e)){var p=Gh(e);Mh(p,a,!0)}}function Mh(a,b,c){if(b.href){var d=Kh(a,b.href,void 0===c?!1:c);Te.test(d)&&(b.href=d)}}
var wh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Lh(e,e.hostname)}}catch(h){}},xh=function(a){try{if(a.action){var b=Ye(Ze(a.action),"host");Lh(a,b)}}catch(c){}},Nh=function(a,b,c,d){zh();var e="fragment"===c?2:1,f={callback:a,domains:b,fragment:2===e,placement:e,forms:!!d};yh().decorators.push(f)},Oh=function(){var a=F.location.hostname,b=Ch.exec(F.referrer);
if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Dh,""),l=e.replace(Dh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},Ph=function(a,b){return!1===a?!1:a||b||Oh()};var Qh={};var Rh=/^\w+$/,Sh=/^[\w-]+$/,Th=/^~?[\w-]+$/,Uh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Vh(a){return a&&"string"==typeof a&&a.match(Rh)?a:"_gcl"}
var Xh=function(){var a=Ze(D.location.href),b=Ye(a,"query",!1,void 0,"gclid"),c=Ye(a,"query",!1,void 0,"gclsrc"),d=Ye(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ve(e,"gclid",void 0);c=c||Ve(e,"gclsrc",void 0)}return Wh(b,c,d)},Wh=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Sh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==
Qh.gtm_3pds?0:Qh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Zh=function(a){var b=Xh();Yh(b,a)};
function Yh(a,b,c){function d(q,u){var p=$h(q,e);p&&Zf(p,u,h,f,l,!0)}b=b||{};var e=Vh(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.Ka?7776E3:b.Ka;c=c||Fa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.Lh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var bi=function(a,b,c,d,e){for(var f=Jh(),h=Vh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Uh[l]){var m=$h(l,h),n=f[m];if(n){var q=Math.min(ai(n),Fa()),u;b:{for(var p=q,t=Rf(m,F.cookie),v=0;v<t.length;++v)if(ai(t[v])>p){u=!0;break b}u=!1}u||Zf(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Yh(Wh(f.gclid,f.gclsrc),w)},$h=function(a,b){var c=Uh[a];if(void 0!==c)return b+c},ai=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function ci(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var di=function(a,b,c,d,e){if(ua(b)){var f=Vh(e);Nh(function(){for(var h={},k=0;k<a.length;++k){var l=$h(a[k],f);if(l){var m=Rf(l,F.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},ei=function(a){return a.filter(function(b){return Th.test(b)})},fi=function(a,b){for(var c=Vh(b&&b.prefix),d={},e=0;e<a.length;e++)Uh[a[e]]&&(d[a[e]]=Uh[a[e]]);za(d,function(f,h){var k=Rf(c+h,F.cookie);if(k.length){var l=k[0],m=ai(l),n={};n[f]=[ci(l)];Yh(n,b,m)}})};var gi=/^\d+\.fls\.doubleclick\.net$/;function hi(a){var b=Ze(D.location.href),c=Ye(b,"host",!1);if(c&&c.match(gi)){var d=Ye(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function ii(a,b){if("aw"==a||"dc"==a){var c=hi("gcl"+a);if(c)return c.split(".")}var d=Vh(b);if("_gcl"==d){var e;e=Xh()[a]||[];if(0<e.length)return e}var f=$h(a,d),h;if(f){var k=[];if(F.cookie){var l=Rf(f,F.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=ci(l[m]);n&&-1===r(k,n)&&k.push(n)}h=ei(k)}else h=k}else h=k}else h=[];return h}
var ji=function(){var a=hi("gac");if(a)return decodeURIComponent(a);var b=nh(),c=[];za(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].$f);f=ei(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},ki=function(a,b,c,d,e){mh(b,c,d,e);var f=ih[jh(b)],h=Xh().dc||[],k=!1;if(f&&0<h.length){var l=Vc.joined_au=Vc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk",u=q=q+"?gclid="+h[n]+"&auiddc="+f;fc.sendBeacon&&fc.sendBeacon(u)||mc(u);k=l[m]=
!0}}null==a&&(a=k);if(a&&f){var p=jh(b),t=ih[p];t&&lh(p,t,c,d,e)}};var li;if(3===Uc.yb.length)li="g";else{var mi="G";li=mi}
var ni={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:li,OPT:"o"},oi=function(a){var b=Uc.s.split("-"),c=b[0].toUpperCase(),d=ni[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Uc.yb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Uc.yb+e};var ti=["input","select","textarea"],ui=["button","hidden","image","reset","submit"],vi=function(a){var b=a.tagName.toLowerCase();return!va(ti,function(c){return c===b})||"input"===b&&va(ui,function(c){return c===a.type.toLowerCase()})?!1:!0},wi=function(a){return a.form?a.form.tagName?a.form:F.getElementById(a.form):tc(a,["form"],100)},xi=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(vi(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var Ai=!!D.MutationObserver,Bi=void 0,Ci=function(a){if(!Bi){var b=function(){var c=F.body;if(c)if(Ai)(new MutationObserver(function(){for(var e=0;e<Bi.length;e++)G(Bi[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;nc(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<Bi.length;e++)G(Bi[e])}))})}};Bi=[];F.body?b():G(b)}Bi.push(a)};
var Ni=function(){var a=F.body,b=F.documentElement||a&&a.parentElement,c,d;if(F.compatMode&&"BackCompat"!==F.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};I("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Oi=function(a){var b=Ni(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,0)+
Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},Pi=function(a){if(F.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,null))}return!1};var Yi=D.clearTimeout,Zi=D.setTimeout,R=function(a,b,c){if(Ud()){b&&G(b)}else return jc(a,b,c)},$i=function(){return D.location.href},aj=function(a){return Ye(Ze(a),"fragment")},bj=function(a){return Xe(Ze(a))},U=function(a,b){return Kd(a,b||2)},cj=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Ng(a)):d=Ng(a);return d},dj=function(a,b){D[a]=b},X=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},ej=function(a,b,c){return Rf(a,b,void 0===c?!0:!!c)},fj=function(a,b){if(Ud()){b&&G(b)}else lc(a,b)},gj=function(a){return!!bh(a,"init",!1)},hj=function(a){$g(a,"init",!0)},ij=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Zc;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";R(Q("https://","http://",c))},jj=function(a,b){var c=a[b];return c};
var kj=Vg.xg;var lj;var Ij=new xa;function Jj(a,b){function c(h){var k=Ze(h),l=Ye(k,"protocol"),m=Ye(k,"host",!0),n=Ye(k,"port"),q=Ye(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Kj(a){return Lj(a)?1:0}
function Lj(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ua(c)){for(var d=0;d<c.length;d++)if(Kj({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=r(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,t=Ij.get(p);t||(t=new RegExp(c,u),Ij.set(p,t));q=t.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Jj(b,
c)}return!1};var Mj=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Nj={},Oj=encodeURI,Y=encodeURIComponent,Pj=mc;var Qj=function(a,b){if(!a)return!1;var c=Ye(Ze(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Rj=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Nj.ng=function(){var a=!1;return a};var dl=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||wa();return a.hid};var ol=window,pl=document,ql=function(a){var b=ol._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===ol["ga-disable-"+a])return!0;try{var c=ol.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Rf("AMP_TOKEN",pl.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return pl.getElementById("__gaOptOutExtension")?!0:!1};var tl=function(a){za(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.ca]||{};za(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var xl=function(a,b,c){Kf(b,c,a)},yl=function(a,b,c){Kf(b,c,a,!0)},Al=function(a,b){};
function zl(a,b){}var Z={a:{}};
Z.a.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.b="ctv";Z.__ctv.g=!0;Z.__ctv.priorityOverride=0})(function(){return"1276"})}();
Z.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],C=x.split(","),A=0;A<C.length;A++){var E=Number(C[A]);if(isNaN(E))return[];n.test(C[A])||z.push(E)}return z}function c(){var x=0,z=0;return function(){var C=Ni(),A=C.height;x=Math.max(v.scrollLeft+C.width,x);z=Math.max(v.scrollTop+A,z);return{Sf:x,Tf:z}}}function d(){p=X("self");
t=p.document;v=t.scrollingElement||t.body&&t.body.parentNode;y=c()}function e(x,z,C,A){var E=l(z),J={},M;for(M in E){J.za=M;if(E.hasOwnProperty(J.za)){var V=Number(J.za);x<V||(cj({event:"gtm.scrollDepth","gtm.scrollThreshold":V,"gtm.scrollUnits":C.toLowerCase(),"gtm.scrollDirection":A,"gtm.triggers":E[J.za].join(",")}),ah("sdl",z,function(W){return function(S){delete S[W.za];return S}}(J),{}))}J={za:J.za}}}function f(){var x=y(),z=x.Sf,C=x.Tf,A=z/v.scrollWidth*100,E=C/v.scrollHeight*100;e(z,"horiz.pix",
q.wb,u.wd);e(A,"horiz.pct",q.vb,u.wd);e(C,"vert.pix",q.wb,u.Sd);e(E,"vert.pct",q.vb,u.Sd);$g("sdl","pending",!1)}function h(){var x=250,z=!1;t.scrollingElement&&t.documentElement&&p.addEventListener&&(x=50,z=!0);var C=0,A=!1,E=function(){A?C=Zi(E,x):(C=0,f(),gj("sdl")&&!a()&&(oc(p,"scroll",J),oc(p,"resize",J),$g("sdl","init",!1)));A=!1},J=function(){z&&y();C?A=!0:(C=Zi(E,x),$g("sdl","pending",!0))};return J}function k(x,z,C){if(z){var A=b(String(x));ah("sdl",C,function(E){for(var J=0;J<A.length;J++){var M=
String(A[J]);E.hasOwnProperty(M)||(E[M]=[]);E[M].push(z)}return E},{})}}function l(x){return bh("sdl",x,{})}function m(x){G(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,C=x.vtp_horizontalThresholdsPixels,A=x.vtp_horizontalThresholdsPercent,E=x.vtp_verticalThresholdUnits,J=x.vtp_verticalThresholdsPixels,M=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case q.wb:k(C,z,"horiz.pix");break;case q.vb:k(A,z,"horiz.pct")}switch(E){case q.wb:k(J,z,"vert.pix");break;case q.vb:k(M,
z,"vert.pct")}gj("sdl")?bh("sdl","pending")||(w||(d(),w=!0),G(function(){return f()})):(d(),w=!0,v&&(hj("sdl"),$g("sdl","pending",!0),G(function(){f();if(a()){var V=h();nc(p,"scroll",V);nc(p,"resize",V)}else $g("sdl","init",!1)})))}var n=/^\s*$/,q={vb:"PERCENT",wb:"PIXELS"},u={Sd:"vertical",wd:"horizontal"},p,t,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.b="sdl";Z.__sdl.g=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):vg(function(){m(x)})})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure;He();R(b,function(){var d=X("google_trackConversion");if(qa(d)){var e={};"DATA_LAYER"==a.vtp_customParamsFormat?e=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(e=Rj(a.vtp_customParams,
"key","value"));var f={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(e.event=a.vtp_eventName),a.vtp_eventValue&&(f.value=a.vtp_eventValue),a.vtp_eventItems&&(f.items=a.vtp_eventItems));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:e,google_gtag_event_data:f,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:oi()};a.vtp_rdp&&(h.google_restricted_data_processing=!0);d(h)||c()}else c()},c)})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Sd(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=U("gtm.referrer",1)||F.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ye(Ze(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):bj(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Yg(c,"gtm.click");cj(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!gj("cl")){var c=X("document");nc(c,"click",a,!0);hj("cl")}G(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=X(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return ej(a.vtp_name,U("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return wa(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=U("gtm.url",1);c=c||$i();var d=b[a("vtp_component")];if(!d||"URL"==d)return bj(String(c));var e=Ze(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?ua(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var q=Ye(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=Ye(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=U(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;B(Rj(n.vtp_fieldsToSet,"fieldName","value"),f);B(Rj(n.vtp_contentGroup,"index","group"),h);B(Rj(n.vtp_dimension,"index","dimension"),k);B(Rj(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=B(n);d=B(d,q)}B(Rj(d.vtp_fieldsToSet,"fieldName","value"),f);B(Rj(d.vtp_contentGroup,
"index","group"),h);B(Rj(d.vtp_dimension,"index","dimension"),k);B(Rj(d.vtp_metric,"index","metric"),l);var u=Oe(d.vtp_functionName);if(qa(u)){var p="",t="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(t=d.vtp_trackerName,p=t+"."):(t="gtm"+gd(),p=t+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},y=function(O){var K=[].slice.call(arguments,0);K[0]=p+K[0];u.apply(window,K)},x=function(O,K){return void 0===K?K:O(K)},z=function(O,K){if(K)for(var sa in K)K.hasOwnProperty(sa)&&
y("set",O+sa,K[sa])},C=function(){},A=function(O,K,sa){var Hb=0;if(O)for(var Da in O)if(O.hasOwnProperty(Da)&&(sa&&v[Da]||!sa&&void 0===v[Da])){var $a=w[Da]?Ba(O[Da]):O[Da];"anonymizeIp"!=Da||$a||($a=void 0);K[Da]=$a;Hb++}return Hb},E={name:t};A(f,E,
!0);u("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",oi(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,K){void 0!==d[K]&&y("set",O,d[K])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var J={};A(f,J,!1)&&y("set",J);var M;d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=f&&f.hitCallback;qa(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),C());var V={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||
e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Aa,d.vtp_eventValue||e.value)};A(M,V,!1);y("send",V);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==
d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==
d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&
(y("require","ec","ec.js"),C());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var oa="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:oa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ka="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ka})}M?y("send","pageview",M):y("send","pageview");}if(!a){var ta=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ta="internal/"+ta);a=!0;var bb=Q("https:","http:","//www.google-analytics.com/"+ta,f&&f.forceSSL);
R(bb,function(){var O=Me();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();




Z.a.hjtc=["nonGoogleScripts"],function(){(function(a){Z.__hjtc=a;Z.__hjtc.b="hjtc";Z.__hjtc.g=!0;Z.__hjtc.priorityOverride=0})(function(a){var b=a.vtp_hotjar_site_id;dj("hj",function(){(window.hj.q=window.hj.q||[]).push(arguments)});dj("_hjSettings",{hjid:b,hjsv:5});R("//static.hotjar.com/c/hotjar-"+Y(b)+".js?sv=5",a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){G(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var f=null;b.vtp_enableCookieUpdateFeature&&(f=!0,void 0!==b.vtp_cookieUpdate&&(f=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;if(b.vtp_enableCrossDomainFeature&&(!b.vtp_enableCrossDomain||!1!==b.vtp_acceptIncoming)&&(b.vtp_enableCrossDomain||
Oh())){bi(a,h,k,l,void 0);}var m={prefix:e,path:c,domain:d,Ka:void 0};Zh(m);fi(["aw","dc"],m);ki(f,e,c,d);var n=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var q=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),u=b.vtp_urlPosition,p=!!b.vtp_formDecoration;di(a,q,u,p,n);}})}();


Z.a.aev=["google"],function(){function a(p,t){var v=Sd(p,"gtm");if(v)return v[t]}function b(p,t,v,w){w||(w="element");var y=p+"."+t,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(p,w);if(z&&(x=v(z),n[y]=x,q.push(y),35<q.length)){var C=q.shift();delete n[C]}}return x}function c(p,t,v){var w=a(p,u[t]);return void 0!==w?w:v}function d(p,t){if(!p)return!1;var v=e($i());ua(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<t.length;y++)if(t[y]instanceof RegExp){if(t[y].test(p))return!1}else{var x=
t[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!Qj(p,w)}function e(p){m.test(p)||(p="http://"+p);return Ye(Ze(p),"HOST",!0)}function f(p,t,v){switch(p){case "SUBMIT_TEXT":return b(t,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return qc(p,"value");case "button":return rc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var t=0,v=0;v<p.elements.length;v++)vi(p.elements[v])&&t++;return t}}function l(p,t,v){var w=a(p,"interactedFormField");return w&&qc(w,t)||v}var m=/^https?:\/\//i,n={},q=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var t=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||
v;case "TEXT":return b(t,w,rc)||v;case "URL":var x;a:{var z=String(a(t,"elementUrl")||v||""),C=Ze(z),A=String(p.vtp_component||"URL");switch(A){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,p.vtp_affiliatedDomains);break a;default:x=Ye(C,A,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(t,w,v);else{var J=p.vtp_attribute,M=a(t,"element");E=M&&qc(M,J)||v||""}return E;case "MD":var V=p.vtp_mdValue,W=b(t,"MD",Ji);return V&&W?Mi(W,V)||
v:W||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),t,v);default:return c(t,w,v)}})}();

Z.a.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:$i()}function b(f,h){nc(f,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:bj(l),J:aj(l)})})}function c(f,h){nc(f,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:bj(l),J:aj(l)})})}function d(f,h,k){var l=h.history,m=l[f];if(qa(m))try{l[f]=function(n,q,u){m.apply(l,[].slice.call(arguments,0));k({source:f,state:n,url:bj($i()),
J:aj($i())})}}catch(n){}}function e(){var f={source:null,state:X("history").state||null,url:bj($i()),J:aj($i())};return function(h){var k=f,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.J!=h.J){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":f.J,"gtm.newUrlFragment":h.J,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=f.url,m["gtm.newUrl"]=h.url;
f=h;cj(m)}}}(function(f){Z.__hl=f;Z.__hl.b="hl";Z.__hl.g=!0;Z.__hl.priorityOverride=0})(function(f){var h=X("self");if(!gj("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);hj("hl")}G(f.vtp_gtmOnSuccess)})}();
Z.a.crto=["nonGoogleScripts"],function(){var a,b=function(c){try{var d=X("criteo_q",[]),e={event:"viewHome"};switch(c.vtp_tagType){case "LISTING_TAG":e={event:"viewList",item:c.vtp_listingID};break;case "PRODUCT_TAG":e={event:"viewItem",item:c.vtp_productID};break;case "BASKET_TAG":e={event:"viewBasket",item:c.vtp_basketArray};break;case "TRANSACTION_TAG":e={event:"trackTransaction",id:c.vtp_TransactionID||"",item:c.vtp_TransactionArray}}d.push({event:"setAccount",account:c.vtp_accountId},{event:"setHashedEmail",
email:c.vtp_hashedEmail||""},{event:"setSiteType",type:c.vtp_siteType||"d"},e);a?c.vtp_gtmOnSuccess():(a=!0,R("//static.criteo.net/js/ld/ld.js",c.vtp_gtmOnSuccess,c.vtp_gtmOnFailure))}catch(f){G(c.vtp_gtmOnFailure)}};Z.__crto=b;Z.__crto.b="crto";Z.__crto.g=!0;Z.__crto.priorityOverride=0}();
Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=X("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(k){He();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:oi()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(v){return function(w,y,x){var z="DATA_LAYER"==v?U(x):k[y];z&&(l[w]=z)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}}));var q=function(v,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||
{})[v]=w},u=function(v){return function(w,y,x,z){var C="DATA_LAYER"==v?U(x):k[y];z(C)&&q(w,C)}},p=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=u(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=
v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var t=!0;t&&b.push(l);a||(a=!0,R(p,f(),e(p)))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();
Z.a.bzi=["nonGoogleScripts"],function(){(function(a){Z.__bzi=a;Z.__bzi.b="bzi";Z.__bzi.g=!0;Z.__bzi.priorityOverride=0})(function(a){try{D._bizo_data_partner_id=a.vtp_id,D._bizo_data_partner_title=a.vtp_title,D._bizo_data_partner_domain=a.vtp_domain,D._bizo_data_partner_company=a.vtp_company,D._bizo_data_partner_location=a.vtp_location,D._bizo_data_partner_employee_range=a.vtp_employeeRange,D._bizo_data_partner_sics=a.vtp_standardIndustrialClassification,D._bizo_data_partner_email=a.vtp_email,R(Q("https://sjs",
"http://js",".bizographics.com/insight.min.js"),a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)}catch(b){G(a.vtp_gtmOnFailure)}})}();
Z.a.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=X(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var f={},h=function(k,l){void 0!==c[k]&&(f[l]=c[k])};h("vtp_goalValue","gv");h("vtp_eventCategory","ec");h("vtp_eventAction","ea");h("vtp_eventLabel","el");h("vtp_eventValue","ev");e.push(f);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{R("//bat.bing.com/bat.js",
function(){var k=Mj(X("UET"),{ti:c.vtp_tagId,q:e});D[d]=k;k.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(k){G(c.vtp_gtmOnFailure)}};Z.__baut=b;Z.__baut.b="baut";Z.__baut.g=!0;Z.__baut.priorityOverride=0}();




Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){G(a.vtp_gtmOnFailure)})}();Z.a.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.b="hid";Z.__hid.g=!0;Z.__hid.priorityOverride=0})(function(){return Vg.ub})}();
Z.a.twitter_website_tag=["nonGoogleScripts"],function(){(function(a){Z.__twitter_website_tag=a;Z.__twitter_website_tag.b="twitter_website_tag";Z.__twitter_website_tag.g=!0;Z.__twitter_website_tag.priorityOverride=0})(function(a){(function(c,d){c.twq||(d=c.twq=function(){d.exe?d.exe.apply(d,arguments):d.queue.push(arguments)},d.version="1",d.queue=[],R("//static.ads-twitter.com/uwt.js"))})(window,void 0);window.twq("init",String(a.vtp_twitter_pixel_id));var b=Rj(a.vtp_event_parameters,"param_table_key_column",
"param_table_value_column");b&&void 0!==b.content_ids&&(b.content_ids=JSON.parse(b.content_ids.replace(/'/g,'"')));window.twq("track",String(a.vtp_event_type),b);G(a.vtp_gtmOnSuccess)})}();
Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=F.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,ic(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(u){G(h)}}}var b=function(d,e,f){ye(function(){var h,k=Vc;k.postscribe||(k.postscribe=ec);h=k.postscribe;var l={done:e},m=F.createElement("div");m.style.display="none";m.style.visibility="hidden";F.body.appendChild(m);try{h(m,d,l)}catch(n){G(f)}})};var c=function(d){if(F.body){var e=
d.vtp_gtmOnFailure,f=kj(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Jc,k=f.B;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(F.body,sc(h),k,e)()}else Zi(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();




Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.b="img";Z.__img.g=!0;Z.__img.priorityOverride=0})(function(a){var b=sc('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}Pj(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Z.a.lcl=[],function(){function a(){var e=X("document"),f=0,h=function(k){var l=k.target;if(l&&3!==k.which&&!(k.lg||k.timeStamp&&k.timeStamp===f)){f=k.timeStamp;l=tc(l,["a","area"],100);if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=bh("lcl",m?"nv.mwt":"mwt",0),q;q=m?bh("lcl","nv.ids",[]):bh("lcl","ids",[]);if(q.length){var u=Yg(l,"gtm.linkClick",q);if(b(k,l,e)&&!m&&n&&l.href){var p=String(jj(l,"rel")||""),t=!!va(p.split(" "),function(y){return"noreferrer"===y.toLowerCase()});
t&&I("GTM",36);var v=X((jj(l,"target")||"_self").substring(1)),w=!0;if(cj(u,Og(function(){var y;if(y=w&&v){var x;a:if(t&&d){var z;try{z=new MouseEvent(k.type)}catch(C){if(!e.createEvent){x=!1;break a}z=e.createEvent("MouseEvents");z.initEvent(k.type,!0,!0)}z.lg=!0;k.target.dispatchEvent(z);x=!0}else x=!1;y=!x}y&&(v.location.href=jj(l,"href"))}),n))w=!1;else return k.preventDefault&&k.preventDefault(),k.returnValue=!1}else cj(u,function(){},n||2E3);return!0}}};nc(e,"click",h,!1);nc(e,"auxclick",h,
!1)}function b(e,f,h){if(2===e.which||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)return!1;var k=jj(f,"href"),l=k.indexOf("#"),m=jj(f,"target");if(m&&"_self"!==m&&"_parent"!==m&&"_top"!==m||0===l)return!1;if(0<l){var n=bj(k),q=bj(h.location);return n!==q}return!0}function c(e){var f=void 0===e.vtp_waitForTags?!0:e.vtp_waitForTags,h=void 0===e.vtp_checkValidation?!0:e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(q){return Math.max(k,
q)};ah("lcl","mwt",m,0);h||ah("lcl","nv.mwt",m,0)}var n=function(q){q.push(l);return q};ah("lcl","ids",n,[]);h||ah("lcl","nv.ids",n,[]);gj("lcl")||(a(),hj("lcl"));G(e.vtp_gtmOnSuccess)}var d=!1;d=!0;Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=0;}();


var vm={};vm.macro=function(a){if(Vg.xc.hasOwnProperty(a))return Vg.xc[a]},vm.onHtmlSuccess=Vg.be(!0),vm.onHtmlFailure=Vg.be(!1);vm.dataLayer=Ld;vm.callback=function(a){ed.hasOwnProperty(a)&&qa(ed[a])&&ed[a]();delete ed[a]};function wm(){Vc[Uc.s]=vm;Ia(fd,Z.a);zb=zb||Vg;Ab=pe}
function xm(){Qh.gtm_3pds=!0;Vc=D.google_tag_manager=D.google_tag_manager||{};if(Vc[Uc.s]){var a=Vc.zones;a&&a.unregisterChild(Uc.s)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)rb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)vb.push(e[f]);for(var h=b.predicates||[],k=0;k<
h.length;k++)tb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},u=0;u<n.length;u++)q[n[u][0]]=Array.prototype.slice.call(n[u],1);sb.push(q)}xb=Z;yb=Kj;wm();Ug();te=!1;ue=0;if("interactive"==F.readyState&&!F.createEventObject||"complete"==F.readyState)we();else{nc(F,"DOMContentLoaded",we);nc(F,"readystatechange",we);if(F.createEventObject&&F.documentElement.doScroll){var p=!0;try{p=!D.frameElement}catch(y){}p&&xe()}nc(D,"load",we)}sg=!1;"complete"===F.readyState?ug():nc(D,
"load",ug);a:{if(!Ad)break a;D.setInterval(Bd,864E5);}
bd=(new Date).getTime();
}}xm();

})()
