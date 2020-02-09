window.fool = window.fool || {};

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

window.fool.ads = {
    /**
     * NOTE: pitch engine setup is done previously inline right after body tag
     */
    init: function () {
        window.PitchEngine = this.infotronStubMaker([
            'initialize',
            'get',
            'pitcherDone',
            'placeInPage',
            'pitcherError',
            'RegisterQueue',
            'UnRegisterQueue'
        ]);

        window.PitcherAds = this.infotronStubMaker([
            'get',
            'OnDomReady',
            'PlaceAdInPage',
            'makeDFPAd',
            'RegisterQueue',
            'UnRegisterQueue'
        ]);

        var moatTimeout = 1000;
        var timeoutId;
        var adRequestMade = false;

        function requestAds(context) {
            // We were losing the right this, pass it in from the callers
            if (adRequestMade) {
                return;
            }
            adRequestMade = true;
            context.initPrebid();
            context.initGpt();
        }

        // All this is to make moat work, theoretically
        if (window.location.pathname.indexOf('/retirement/') > -1) {
            window['moatYieldReady'] = function() {
                clearTimeout(timeoutId);
                window.moatPrebidApi.setMoatTargetingForAllSlots();
                requestAds(this);
            }.bind(this);

            // After 1 second of waiting, immediately request ads
            function onTimeout() {
                window['moatYieldReady'] = false;
                requestAds(this);
            }
            timeoutId = setTimeout(function(){onTimeout()}.bind(this), moatTimeout);
        } else {
            this.initPrebid();
            this.initGpt();
        }

        var isLive = window.location.host.split('.').length === 3; // length = 4 for mockup, staging, test, dev/localhost
        window.PitchEngine.load((isLive ? '//m.foolcdn.com' : '//staging.m.foolcdn.com') + '/static/infotron/js/infotron-async.min.js');
    },

    initGpt: function () {
        console.log('initializing Google Publisher Tags');

        googletag.cmd.push(function () {
            googletag.setAdIframeTitle("Advertisement");
        });

        googletag.cmd.push(function () {
            var Krux = window.Krux;
            if (typeof (Krux) !== "undefined") {
                console.log('fool_perf | Krux.segments ' + Krux.segments);
                console.log('fool_perf | Krux.user ' + Krux.user);
                googletag.pubads().setTargeting("ksg", Krux.segments);
                googletag.pubads().setTargeting("kuid", Krux.user);
            }

            googletag.pubads().enableSingleRequest();
            googletag.pubads().disableInitialLoad();
            googletag.enableServices();
            googletag.pubads().addEventListener('slotOnload', function (e) {
                var slot = e.slot;
                var path = slot.getAdUnitPath();
                var n = path.search(/sticky|header_mobtab/);
                if (n > 0) {
                    var leaderboard = $('.sticky-header-ads-container');
                    // adjust side/location of header ad
                    if (leaderboard.length > 0 && leaderboard.css('position') === 'fixed') {
                        var ADwrapper = $('#sticky-wrapper');
                        if (leaderboard.outerHeight() >= 140) {
                            ADwrapper.height(leaderboard.outerHeight());
                        }
                        setTimeout(function () {
                            leaderboard.css('position', 'static');
                        }, 3000);
                    }
                }
            });
        });
    },

    infotronStubMaker: function (methods) {
        var stubQueue = [];
        stubQueue.invoked = false;
        stubQueue.methods = methods;

        var addToMethodQueue = function (method) {
            var func = function () {
                var args = Array.prototype.slice.call(arguments, 0);
                var newArgs = [method].concat(args);
                stubQueue.push(newArgs);
            };
            func.stub = true;
            return func;
        };

        var generateMethods = function () {
            for (var i = 0; i < stubQueue.methods.length; i++) {
                var key = stubQueue.methods[i];
                stubQueue[key] = addToMethodQueue(key);
            }
        };

        var loadTracker = function (scriptUrl) {
            if (stubQueue.invoked) {
                if (window.console && console.error)
                    console.error('Queue snippet included twice.');

                return;
            }

            fool.insertScript('tracker', scriptUrl, true);

            stubQueue.invoked = true;
        };

        generateMethods();

        stubQueue.load = loadTracker;

        return stubQueue;
    },

    /*
    start: function() {
        window.PitcherAds.OnDomReady();

        window.addata = $($("div .dfp-ad")).data().adparams;
// from article... addata = $($("div .promobox-content")).data().params;

        // make sure fires on document ready
        window.PitchEngine.initialize({
            placement : 'article_pitch',
            tickers : addata.tickers,
            containsPitchBase : false,
            pitchId : addata.pitchId,
            skin : 'EcappedNonBuyerTemplateTest',
            pitchContainer : 'pitch',
            responsive : 'True',
            tstrId : addata.tstrId,
            primary_tickers : addata.primary_tickers,
            primary_tickers_companies : addata.primary_tickers_companies,
        });

        if (typeof (window.infotronQueue) !== "undefined") {
            window.infotronQueue.Register('InfotronFeederPitch');
        }

        window.PitchEngine.initialize({
            site : 'fool',
            placement : 'feederfish',
            pitchContainer : 'InfotronFeederPitch'
            });

        if (typeof(window.InfotronQueue) !== "undefined")
            window.InfotronQueue.EndOfPage('articlePageView');
    },
     */

    refresh: function (adSlots) {
        if (adSlots) {
            var targetingIds = [];

            for (var i in adSlots) targetingIds.push(adSlots[i].code);

            var newAdSlots = [];
            var prebidArr = [];

            Object.keys(window.slots).forEach(function (key) {
                if (targetingIds.indexOf(key) > -1) {
                    newAdSlots.push(window.slots[key]);
                    prebidArr.push(key);
                }
            });
            // Refresh all ads on ajaxed article which will cause of updating correlator value
            if (!window.prebidFool) {
                googletag.cmd.push(function () {
                    googletag.pubads().refresh(newAdSlots);
                });
            } else {
                pbjs.que.push(function () {
                    pbjs.requestBids({
                        timeout: window.prebidFool.timeout,
                        adUnitCodes: prebidArr,
                        bidsBackHandler: function () {
                            pbjs.setTargetingForGPTAsync(prebidArr);
                            googletag.pubads().refresh(newAdSlots);
                        }
                    });
                });
            }
        } else {
            //refresh slots only if prebid is not active
            if (!window.prebidFool) {
                googletag.cmd.push(function () {
                    googletag.pubads().refresh();
                });
            }
        }
    },
    initPrebid: function () {
        if (!window.prebidFool) {
            return;
        }
        console.log('setting up prebid timeout ' + window.prebidFool.timeout);
        this.setPrebidTimeout();
        var that = this;
        pbjs.que.push(function () {
            pbjs.addAdUnits(window.adUnits);
            pbjs.requestBids({
                bidsBackHandler: function () {
                    if (pbjs.adserverRequestSent) return;
                    pbjs.adserverRequestSent = true;
                    googletag.cmd.push(function () {
                        console.log('sending DFP request');
                        pbjs.que.push(function () {
                            pbjs.setTargetingForGPTAsync();
                            googletag.pubads().refresh();
                        });
                    });
                }
            });
        });
    },
    setPrebidTimeout: function () {
        var timeout = this.getPrebidTimeout();
        var that = this;
        window.setTimeout(function () {
            if (pbjs.adserverRequestSent) return;
            pbjs.adserverRequestSent = true;
            googletag.cmd.push(function () {
                console.log('sending DFP request timeout');
                pbjs.que.push(function () {
                    pbjs.setTargetingForGPTAsync();
                    googletag.pubads().refresh();
                });
            });
        }, timeout);
    },
    getPrebidTimeout: function () {
        // Using custom function instead of Number.isInteger in order to keep IE11 compatibility
        function isInteger(num) {
            return (num ^ 0) === num;
        }

        if (typeof prebidFool.timeout != 'undefined' && isInteger(prebidFool.timeout)) {
            return prebidFool.timeout;
        }
        // by default timeout will be 2 sec
        return 2000;
    }
};

fool.ads.init();
fool.ads.refresh();

$(function () {
    PitcherAds.OnDomReady();
    (function () {
        if ($($("div .promobox-content")).length !== 0) {
            addata = $($("div .promobox-content")).data().params;
            PitchEngine.initialize({
                placement: 'article_pitch',
                tickers: addata.tickers,
                containsPitchBase: false,
                pitchId: addata.pitchId,
                skin: 'EcappedNonBuyerTemplateTest',
                pitchContainer: 'pitch',
                responsive: 'True',
                tstrId: addata.tstrId,
                primary_tickers: addata.primary_tickers,
                primary_tickers_companies: addata.primary_tickers_companies,
            });
        }
    })();
});
