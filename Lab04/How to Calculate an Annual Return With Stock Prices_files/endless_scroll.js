var paginator_prev_url = '';
var paginator_current_uri = '';
var paginator_next_uri = '';
var article_is_loading = 0;
var article_location_uri = '';
var article_count_id = 1;
// article meta data object
var article_meta_data = {};
var article_is_scrollable;

if ('scrollRestoration' in history) {
    // disables scroll Restoration in chrome, to help with SEO work for pagination
  history.scrollRestoration = 'manual';
}

var initPaginator = function() {
    //check if paginator exists
    if( $('#pagination').length > 0 ) {
        window.article_is_scrollable = 1;
        var pages = $('#pagination > ul > li > ul > li > a');
        var paginator = [];
        for (var i = 0; i < pages.length; i++) {
            var id = pages[i].id;
            var href = pages[i].getAttribute('href', 2);
            paginator.push({
                id: id,
                href: href,
            });
        }
        window.paginator = paginator;
        window.article_count_id = 1;
        //by default we are starting from first item in paginator
        window.paginator_current_uri = paginator[0].href ? paginator[0].href : document.location.pathname;
        //assign URI to the first article
        $('.endless-body .full_article:first').attr('data-href', window.paginator_current_uri);
        // assign Twitter title to the first article
        $('.endless-body .full_article:first').attr('data-twitter-title', $('#share-box #twitter_title').text());
        // get next URI
        getNextURI();
    } else {
        window.article_is_scrollable = 0;
    }
}

var trackArticle = function(page) {
    if( typeof window.Infotrack != 'undefined') {
        if (page != 1) {
            Infotrack.track('Load-Article', {
                category: 'Article-Page',
                label: 'article-' + page,
            });
        }
        $('#article-' + page + ' #pitch').waypoint(function(direction) {
            Infotrack.track('Read-Article', {
                category: 'Article-Page',
                label: 'article-' + page,
            });
            this.destroy();
        },
        {
            offset: 'bottom-in-view'
        });
    }
}

var infinite_article_loader = function(state) {
    if( state === 'show' ) {
        window.article_is_loading = 1;
        return;
    }
    window.article_is_loading = 0;
}

var loadMore = function () {
    //avoid twice loading
    if (window.article_is_loading) {
        return;
    }
    // show loader
    infinite_article_loader('show');
    var ajax_url_scroll_article = '/investing-news/content_by_path' + window.paginator_next_uri;
    if( $('#pagination').length > 0 ) {
      var show_incontent_ads_scroll = $('#pagination').attr('data-show-incontent-ads');
      ajax_url_scroll_article += '?show_in_content_ads=' + show_incontent_ads_scroll;
    };
    // load article
    $.ajax({
        url: ajax_url_scroll_article,
        type: 'GET',
        success: function (data) {
            // render new article
            window.article_count_id = window.article_count_id + 1;
            showArticle(data);
            // set article meta data
            article_meta_data['article-' + window.article_count_id] = {
                'url': 'https://www.fool.com' + window.paginator_current_uri,
                'article_headline': data.headline,
                'article_author': data.author,
                'article_publish_date': data.publish_date,
                'article_publish_time': data.publish_time,
                'article_bureau': data.bureau,
                'article_tickers': data.tickers,
                'article_tags': data.content_tags,
                'article_type': data.article_type,
                'STORY_UID': data.STORY_UID
            };
            if (typeof window.Infotrack != 'undefined') {
                Infotrack.page("usmf", article_meta_data['article-' + window.article_count_id]);
            }

            //set last pitch id
            var last_pitch = $('.endless-body .full_article:last #pitch');
            last_pitch = last_pitch.attr("id", "article-" + window.article_count_id + "-pitch");
            //fullfill pitch with content
            PitchEngine.initialize({
                placement: 'article_pitch',
                tickers: data.tickers,
                containsPitchBase: false,
                pitchId: data.pitchId,
                skin: 'EcappedNonBuyerTemplateTest',
                pitchContainer: 'article-' + window.article_count_id + '-pitch',
                responsive: 'True',
                primary_tickers: data.primary_ticker_symbols,
                primary_tickers_companies: data.primary_ticker_companies,
            });

            if (typeof(Krux) !== "undefined") {
                Krux('ns:fool', 'page:load', function (err) {
                }, {pageView: true});
            }

            return;
        },
        error: function (data) {
            infinite_article_loader('hide');
            throw new Error('error of loading new article');
        }
    });
}

var showArticle = function(data) {
    // change URI of current article
    window.paginator_current_uri = window.paginator_next_uri;
    // and URI for next article
    var next_article = getNextURI();
    window.paginator_next_uri = next_article;
    // append new article
    $('.endless-body').append(data.html);
    $('.endless-body .full_article:last').attr('data-href', window.paginator_current_uri);
    $('.endless-body .full_article:last').attr('data-twitter-title', data.twitter_title);
    $(".endless-body .full_article:last" ).attr('id','article-' + window.article_count_id);
    // hide loader
    infinite_article_loader('hide');
    // track article
    trackArticle(window.article_count_id);
    // show ads for article
    if(window.postEndlessScrollArticleAdded){
        window.postEndlessScrollArticleAdded();
    }

    // compare height of document of user window
    //compareHeight();
    return;
}

var getNextURI = function() {
    var paginator = window.paginator;
    for (var i = 0; i < paginator.length; i++) {
        var item = paginator[i];
        if( window.paginator_current_uri == item.href  ) {
            var a = i + 1;
            if ( typeof paginator[a] != 'undefined' ) {
                window.paginator_next_uri = paginator[a].href;
            } else {
                window.paginator_next_uri = '';
            }
            return window.paginator_next_uri;
        }
    }
}

var getVisibleArticle = function() {
    // this function is supposed to give an URI of top visible article
    var uri;
    $('.full_article').each(function() {
        if ($(window).scrollTop() > $(this).position().top) {
            uri = $(this).attr('data-href');
        }
        if( typeof uri === 'undefined' || uri === null ) {
            uri = window.paginator[0].href;
        }

    });
    if( uri === window.article_location_uri ) {
        return;
    }
    window.article_location_uri = uri;
    return changeURI(uri);
}

var changeURI = function(uri) {
    var title = $('div[data-href="' + uri + '"] .article-header header h1').text();
    if( typeof title != 'undefined' || title ) {
        document.title = title;
    }
    history.replaceState(null, null, uri);

    // Change social share links
    $('#share-box .item').each(function() {
        var share_platform = $(this).attr('id');
        var share_full_url = 'https://www.fool.com' + uri;
        var share_title = encodeURIComponent(title);
        var twitter_title = encodeURIComponent($('div[data-href="' + uri + '"]').attr('data-twitter-title'));

        if (share_platform === 'share-facebook') {
            $(this).attr('href', 'https://facebook.com/sharer/sharer.php?u=' + share_full_url);
        }
        else if (share_platform === 'share-twitter') {
            $(this).attr('href', 'https://twitter.com/intent/tweet/?text=' + twitter_title + '&url=' + share_full_url);
        }
        else if (share_platform === 'share-linkedin') {
            $(this).attr('href', 'https://www.linkedin.com/shareArticle?mini=true&url=' + share_full_url
                + '&title=' + share_title + '&summary=' + share_title + '&source=' + share_full_url);
        }
        else if (share_platform === 'share-email') {
            $(this).attr('href', 'mailto:?subject=' + share_title + '&body=' + share_full_url);
        }
    });
    return;
}

var compareHeight = function () {
    // get 85% of doc height
    var docHeight = $(document).height() - ( $(document).height() * 0.15 );
    // if 85% threshold is reached, start loading new article
    if ( $(window).height() >= docHeight ) {
        loadMore();
    }
    return;
}

$( document ).ready(function() {
    //initialize paginator
    initPaginator();
    trackArticle(window.article_count_id);
    //to do, play situation when window height more than document height...
    // supposed scenario is getNextURI ans start loading a new article, than compare heights again...
    //compareHeight();
    // add listener on scroll
    $( window ).on('scroll', throttle(function() {
        if( window.article_is_loading ) {
            return;
        }
        //handle case if article non scrollable
        if ( !window.article_is_scrollable ) {
            return;
        }
        // check if article is visible and adjust URI accordingly
        getVisibleArticle();

        // if user is coming to the bottom of the page, start loading new article
        var startingPoint = $(document).height() - $('.article-disclosure:last').offset().top + 200;
        // Fallback to scrollTop so it should work on IE 11 too.
        var scroll_y = window.scrollY || document.documentElement.scrollTop;
        if( scroll_y >= ( $(document).height() - $(window).height() )- startingPoint ) {
            // get url of next article which is supposed to be loaded
            if( window.paginator_next_uri === '' || typeof window.paginator_next_uri != 'undefined' ) {
                // hide loader
                if( getNextURI() === '' ) {
                    infinite_article_loader('hide');
                    return;
                }
            }
            //load the next article
            loadMore();
        }
    }, 200));
});



//todo something with that...
//Aggregate Pagination and scroll

//Determine page
aggregate_current_list = $(".article-listing .list-content:last" ).attr('id');
wagtail_aggregator_current_list = $(".wagtail-aggregator-article-listing .list-content:last" ).attr('id');
quote_aggregator_current_list = $(".quote-page-article-listing .list-content:last" ).attr('id');
podcast_agg_current_list = $(".recent-episodes .list-content:last" ).attr('id');
slideshow_index_current_list = $(".slideshow-index-listing .list-content:last" ).attr('id');
var class_name, page_type;

if(typeof aggregate_current_list != "undefined"){
  aggregate_current_list = aggregate_current_list.split('-');
  aggregate_current_page = aggregate_current_list[1];
  aggregate_first_page_number = $(".article-listing .list-content:first" ).attr('id').split('-');
  class_name = '.top-stories';
  page_type = 'articles';
  aggPageAddPageNumberInURLOnScroll(aggregate_current_page);
  triggerNextPageOnScroll(parseInt(aggregate_first_page_number[1]));
  loadMoreButton();
}

if(typeof wagtail_aggregator_current_list != "undefined"){
  wagtail_aggregator_current_list = wagtail_aggregator_current_list.split('-');
  wagtail_aggregator_current_page = wagtail_aggregator_current_list[1];
  wagtail_aggregate_first_page_number = $(".wagtail-aggregator-article-listing .list-content:first" ).attr('id').split('-');
  class_name = '.wagtail-aggregator-list-content';
  page_type = 'wagtail_aggregator';
  aggPageAddPageNumberInURLOnScroll(wagtail_aggregator_current_page);
  triggerNextPageOnScroll(parseInt(wagtail_aggregate_first_page_number[1]));
  loadMoreButton();
}

if(typeof quote_aggregator_current_list != "undefined"){
  class_name = '.quote-page-article-listing';
  page_type = 'quote_articles_aggregator';
  loadMoreButton();
}

if(typeof podcast_agg_current_list != "undefined"){
  podcast_agg_current_list = podcast_agg_current_list.split('-');
  podcast_agg_current_page = podcast_agg_current_list[1];
  podcast_agg_first_page_number = $(".recent-episodes .list-content:first" ).attr('id').split('-');
  class_name = '.episode-listing';
  page_type = 'podcasts';
  triggerNextPageOnScroll(parseInt(podcast_agg_first_page_number[1]));
  loadMoreButton();
}

if(typeof slideshow_index_current_list != "undefined"){
  slideshow_index_current_list = slideshow_index_current_list.split('-');
  slideshow_index_current_page = slideshow_index_current_list[1];
  slideshow_first_page_number = $(".slideshow-index-listing .list-content:first" ).attr('id').split('-');
  class_name = '.slideshow-index-list-content';
  page_type = 'slideshow_index';
  triggerNextPageOnScroll(parseInt(slideshow_first_page_number[1]));
  loadMoreButton();
}

//get trigger to get next page
function addNextPageItems(page){
  next_page_id = parseInt(page) + 1;

  var addMoreArticles = $(class_name+' #page-'+page).waypoint(function(direction) {
      this.destroy();
      getItemList(next_page_id);
  },
  {
      offset: '20%'
  });

}

//get next page
function getItemList(next_page_id, layout) {
  if (typeof next_page_id != "undefined") {

    if (page_type === 'articles') {
      var data = {page: next_page_id};
      if (typeof layout != "undefined") {
        data.layout = layout
      }

      // for author pages only
      var author_id = $('.author-block').data('author-id');
      if (author_id) {
        data.author_id = author_id
      }

      $.ajax({
        url: '/investing-news/articles_by_page/',
        type: "GET",
        success: function (data) {
          $('.article-listing .top-stories').append(data.html);
          $(".article-listing .top-stories .list-content:last").attr("id", "page-" + next_page_id);
          // Activate lazy loading on newly added articles
          observer.observe();
        },
        data: data,
        error: function (xhr, errmsg, err) {
        }
      });
    }

    if (page_type === 'wagtail_aggregator') {
      var data = {page: next_page_id};
      var wagagg_load_more_spinner = $('#wagagg-load-more-spinner');
      var load_more_btn = $('#load-more');

      // Show spinner
      wagagg_load_more_spinner.css('display', 'inline-block');
      // Disable Load more button
      load_more_btn.prop('disabled', true);

      $.ajax({
        url: $('#wagtail_aggregator_article_listing').attr('data-url'),
        type: "GET",
        data: data,
        success: function (data) {
          $('.wagtail-aggregator-article-listing .wagtail-aggregator-list-content').append(data.html);
          $(".wagtail-aggregator-article-listing .wagtail-aggregator-list-content .list-content:last")
              .attr("id", "page-" + next_page_id);

          wagagg_load_more_spinner.css('display', 'none');

          // enable Load more button
          load_more_btn.prop('disabled', false);
          // Activate lazy loading on newly added articles
          observer.observe();
        },
        error: function (xhr, errmsg, err) {
          wagagg_load_more_spinner.css('display', 'none');
          // enable Load more button
          load_more_btn.prop('disabled', false);
        }
      });
    }

    if (page_type === 'quote_articles_aggregator') {
      tabType = layout.data("type");
      next_page_id = parseInt($("#quote_page_" + tabType +"_listing .quote-page-list-content .list-content:last").attr('id').split("-")[1]) + 1;
      var data = {page: next_page_id};
      var quote_articles_spinner = $("#quote_page_" + tabType + "_listing .quote-articles-spinner");
      var load_more_btn = $("#quote_page_" + tabType + "_listing .load-more");

      // Show spinner
      quote_articles_spinner.css('display', 'inline-block');
      // Disable Load more button
      load_more_btn.prop('disabled', true);



      $.ajax({
        url: $('#quote_page_'+ tabType +'_listing').attr('data-url'),
        type: "GET",
        data: data,
        success: function (data) {
          $('#quote_page_' + tabType +'_listing .quote-page-list-content').append(data.html);
          $("#quote_page_" + tabType +"_listing .quote-page-list-content .list-content:last")
              .attr("id", "page-" + next_page_id);

          quote_articles_spinner.css('display', 'none');

          // enable Load more button
          load_more_btn.prop('disabled', false);
          // Hide load more button if there are no articles
          if (data.hide_load_more_btn) {
            load_more_btn.hide();
          }
          // Activate lazy loading on newly added articles
          observer.observe();
        },
        error: function (xhr, errmsg, err) {
          quote_articles_spinner.css('display', 'none');
          // enable Load more button
          load_more_btn.prop('disabled', false);
        }
      });
    }

    if (page_type === 'podcasts') {
      show_slug = document.location.pathname.split("/");
      $.ajax({
        url: "/podcasts/podcasts_by_page/?show_slug=" + show_slug[2].replace(/\/$/, '')
            + "&page=" + next_page_id,
        type: "GET",
        success: function (data) {
          $('.recent-episodes .episode-listing').append(data.html);
          $(".recent-episodes .episode-listing .list-content:last").attr("id", "page-" + next_page_id);

          //for audio tracking
          $('#page-' + next_page_id + ' audio').each(function () {
            if (typeof audio_flgs[$(this).attr("id")] == "undefined") {
              audio_flgs[$(this).attr("id")] = {
                'flg_25': 0,
                'flg_50': 0,
                'flg_75': 0,
              };
            }
          });
        },
        error: function (xhr, errmsg, err) {
        },
      });
    }

    if (page_type === 'slideshow_index') {
      var data = {page: next_page_id};
      var slideshow_load_more_spinner = $('#slideshow-load-more-spinner');
      var load_more_btn = $('#load-more');
      if (typeof layout != "undefined") {
        data.layout = layout
      }

      // Show spinner
      slideshow_load_more_spinner.css('display', 'inline-block');
      // Disable Load more button
      load_more_btn.prop('disabled', true);


      $.ajax({
        url: '/slideshow/slideshows_by_page/',
        type: "GET",
        success: function (data) {
          $('.slideshow-index-listing .slideshow-index-list-content').append(data.html);
          $(".slideshow-index-listing .slideshow-index-list-content .list-content:last")
              .attr("id", "page-" + next_page_id);
          // Hide the load more button if all the slideshows are loaded on page
          var total_slideshows_count = $('#load-more').attr('data-total-slideshows');
          var total_loaded_slideshows_articles = $('.slideshow-index-page .slideshow-list-article').length;
          if (total_loaded_slideshows_articles == total_slideshows_count) {
            load_more_btn.hide();
          };

          slideshow_load_more_spinner.css('display', 'none');

          // enable Load more button
          load_more_btn.prop('disabled', false);
          // Activate lazy loading on newly added articles
          observer.observe();
        },
        data: data,
        error: function (xhr, errmsg, err) {
          slideshow_load_more_spinner.css('display', 'none');
          // enable Load more button
          load_more_btn.prop('disabled', false);
        }
      });
    }

  }
}

function loadMoreButton(){
    $('body').on('click', '#load-more', function() {
        var $this = $(this)
        var layout = $(this).data('layout');
        agg_current_list = $(class_name+" .list-content:last" ).attr('id').split('-');
        agg_current_page = agg_current_list[1];
        var nextPage = parseInt(agg_current_page)+1
        if(page_type === 'quote_articles_aggregator'){
            layout = $this
        }
        if ( typeof layout !== 'undefined'){
            getItemList(nextPage, layout);
        }
        else {
            getItemList(nextPage);
        }
    });
}

function triggerNextPageOnScroll(first_page_number){
  //only on page=1 in pagination
  if( first_page_number == 1){
    addNextPageItems(1);
  }
}

// throttle function pulled from lodash.
function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

function aggPageAddPageNumberInURLOnScroll(agg_curr_page) {
  if(agg_curr_page > 1){
    window.scroll(0, $("#page-" + agg_curr_page).offset().top - 200);
  }
    $( window ).on('scroll', throttle(function(){
        var elements = Array.prototype.slice.call(document.getElementsByClassName("list-content"))
                            .map(function(element){

                                return {
                                    "id": element.id,
                                    "top":  $(element).offset().top
                                }
                            });
        for (var i = elements.length - 1; i >= 0 ; i--){
            if(elements[i].top < $(document).scrollTop() && elements[i].id !== "page-" ){
                window.history.pushState(window.location.href, elements[i].id,"?" + elements[i].id.replace("-","="));
                $('link[rel=canonical]').attr('href', window.location.href)
                break;
            }
        }
    },200))
};
