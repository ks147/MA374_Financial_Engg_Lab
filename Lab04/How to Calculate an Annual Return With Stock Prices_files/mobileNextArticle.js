var nextArticleLink = $('#next-article');
var readMore = $(".read-more-link");

if(!readMore[0] && !window.paginator_next_uri){
  nextArticleLink.css('display', 'none');
}
else if(readMore[0]){
  nextArticleLink.attr('href', $(".read-more-link")[0].href);
}
if(window.paginator_next_uri){
  nextArticleLink.attr('href',window.paginator_next_uri);
}
