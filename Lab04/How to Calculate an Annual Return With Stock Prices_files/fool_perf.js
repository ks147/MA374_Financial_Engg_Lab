window.fool = window.fool || {};

window.fool.shimConsoleMethods = function () {
    var method;
    var noop = function () {
    };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
};
window.fool.insertScript = function (id, src, async) {
    if (document.getElementById(id)) return;

    var fjs = document.getElementsByTagName('script')[0];

    var js = document.createElement('script');
    js.id = id;
    js.src = src;
    js.type = 'text/javascript';
    if (async) js.async = true;

    fjs.parentNode.insertBefore(js, fjs);
};
window.fool.settings = {
    isEnabled: function (feature) {
        if (!window.settings) {
            console.log('Fool settings not loaded');
            return;
        }

        if (typeof (window.settings[feature]) === 'undefined') {
            console.log('feature %s not defined', feature);

            return;
        }
        return window.settings[feature];
    }
};
window.fool.ui = {
    init: function () {
        fontAwesomeTags = document.querySelectorAll("i.far, i.fas, i.fal")
        for(var tagIndex in fontAwesomeTags){
            const fontAwesomeItalicsTag = fontAwesomeTags[tagIndex]
            if(typeof(fontAwesomeItalicsTag) === "object"){
                const iconName = fontAwesomeItalicsTag.classList[1].substr(3)
                const svgns = "http://www.w3.org/2000/svg";
                const xlinkns = "http://www.w3.org/1999/xlink";
                const fontAwesomeSVGTag = document.createElementNS(svgns, 'svg')
                fontAwesomeSVGTag.setAttribute('viewBox', "0 0 512 512")
                fontAwesomeSVGTag.classList.add("fa-svg-icon")
                fontAwesomeSVGTag.setAttribute("height", "12")
                fontAwesomeSVGTag.setAttribute("width", "12")
                const use = document.createElementNS(svgns, 'use')
                if(fontAwesomeItalicsTag.classList.contains("fas")){
                    use.setAttributeNS(xlinkns, "href", "#" + iconName +"-solid");
                }else if(fontAwesomeItalicsTag.classList.contains("fal")){
                    use.setAttributeNS(xlinkns, "href", "#" + iconName +"-light");
                }else{
                    use.setAttributeNS(xlinkns, "href", "#" + iconName);
                }
                fontAwesomeSVGTag.appendChild(use)

                const tagId = fontAwesomeItalicsTag.getAttribute('id')
                if(tagId){
                   fontAwesomeSVGTag.setAttribute("id", tagId)
                }

                fontAwesomeItalicsTag.parentNode.replaceChild(fontAwesomeSVGTag, fontAwesomeItalicsTag)
            }
        }

        this.applyFooterCopyrightText();
        this.buildDisclosure();
    },

    onFirstScroll: function (f) {
        var handler = function () {
            f();
            window.removeEventListener("scroll", handler);
        };
        window.addEventListener('scroll', handler);
    },

    /**
     * DO NOT DELETE THIS, IT LEGALLY MUST BE HERE
     * @returns {boolean}
     */
    skipToContent: function () {
        var skipToElement = document.querySelectorAll(".main-skip-to");
        if (skipToElement.length && skipToElement[0]) {
            if (typeof skipToElement[0].getAttribute("tabindex") === "undefined") {
                skipToElement[0].setAttribute("tabindex", "-1");
            }
            skipToElement[0].firstElementChild().focus();
            return false;
        }
        return true;
    },

    /**
     * @description Dynamically generates copyright text based on current year.
     */
    applyFooterCopyrightText: function () {
        let currentYear = new Date().getFullYear();
        let copyrightText = `&copy; 1995 - ${currentYear} The Motley Fool. All rights reserved.</br>`;
        let copyrightId = 'footer-copyright-text';
        let copyrightElem = document.getElementById(copyrightId);
        if (!copyrightElem) {
            console.error (`applyFooterCopyrightText() FAILED, ${copyrightId} not found`);
        } else {
            copyrightElem.innerHTML = copyrightText;
        }
    },

    /**
     * @description Dynamically generates disclosure text based on data-content
     * from django template: {% render_the_disclosure object.disclosure True %}
     */
    buildDisclosure: function () {
        disclosure = document.querySelector(".article-disclosure");
        if( disclosure && disclosure.dataset ){
            disclosure.innerHTML = disclosure.dataset.content;
        }
    },

    endlessScroll: {
        init: function () {
            // exposing this on window, as included scripts expect
            window.postEndlessScrollArticleAdded = this.postEndlessScrollArticleAdded;
        },

        postEndlessScrollArticleAdded: function () {
            var scrollingAdUnits = window.scrollingAdUnits || [];

            fool.ads.refresh(scrollingAdUnits);

            window.scrollingAdUnits = [];
        }
    },

    ImageFallback: function (selector, postLoadingSelector) {
        // TODO this seems does not works before, as `error` event was already triggered at that time
        // TODO so we need instead iterate over images and check if they was loaded successfully and
        // TODO update them if there was some error:
        // TODO img.naturalWidth === 0
        // TODO !img.complete
        var setListeners = function (selector) {
            jQuery(selector).on('error', function (ev) {
                var el = ev.target;
                el.src = jQuery(el).data('placeholderImgSrc');
            });
        };
        var replaceImages = function (selector) {

            // ajax calls to url from data-img-src, and caches the image. if it doesn't 404 it switches it out.

            jQuery(selector).each(function (idx, el) {
                $.ajax({
                    url :  jQuery(el).data('img-src'),
                    cache: true,
                    processData : false,
                    success: function(){
                        jQuery(el).parent().find("h5").hide()
                        jQuery(el).attr("src", jQuery(el).data('img-src'));
                    },
                    error: function(){
                        jQuery(el).hide()
                        // image not found
                    }
                });
            });
        };

        console.log('ImageFallback -- starting up...');
        if (selector === undefined) {
            selector = 'img[data-placeholder-img-src]';
        }
        setListeners(selector);
        if (postLoadingSelector === undefined) {
            postLoadingSelector = 'img[data-img-src]';
        }
        replaceImages(postLoadingSelector);
    }
};
window.fool.analytics = {

    krux: {

        init: function () {
            if (!fool.settings.isEnabled('kruxOn')) return;

            console.log('initializing Krux control tag');

            if (!window.Krux) {
                window.Krux = function () {
                    window.Krux.q.push(arguments);
                }
                window.Krux.q = [];
            }
        },

        load: function () {
            if (!fool.settings.isEnabled('kruxOn')) return;

            fool.insertScript('krux', (location.protocol === 'https:' ? 'https:' : 'http:') + '//cdn.krxd.net/controltag/ral3af1zw.js', true);

            function retrieve(n) {
                var k = 'kxfool_' + n;

                var ls = (function () {
                    try {
                        return window.localStorage;
                    } catch (e) {
                        return null;
                    }
                })();

                if (ls) return ls[k] || "";

                if (navigator.cookieEnabled) {
                    var m = document.cookie.match(k + '=([^;]*)');

                    return (m && unescape(m[1])) || "";
                }

                return '';
            }

            window.Krux.user = retrieve('user');
            window.Krux.segments = retrieve('segs') ? retrieve('segs').split(',') : [];
        }

    }

};

fool.shimConsoleMethods();

fool.analytics.krux.init();
fool.analytics.krux.load();

fool.ui.endlessScroll.init();

document.addEventListener("DOMContentLoaded", function() {
    fool.ui.init();

    if (typeof(window.InfotronQueue) !== "undefined"){
        window.InfotronQueue.EndOfPage('articlePageView');
    }
});

document.addEventListener("jQuery Loaded", fool.ui.ImageFallback);
