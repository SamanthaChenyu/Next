window.onload = function none () {
    var windows = $(window).width();
    if ( windows < 415 ) {
      $(".items2__item img").attr('src','images/mb-right.png');
      $(".bg1").css('background-image','url(images/20171117change.jpg)');
    }
}

$(function() {
  $(".mouse").click(function(){
    $("html,body").animate({scrollTop:$('.part2').offset().top}, 900);
    return false;
  });
});
$(function() {
  $(".connet1").click(function(){
    $("html,body").animate({scrollTop:$('.part2').offset().top}, 900);
    return false;
  });
});
$(function() {
  $(".connet2").click(function(){
    $("html,body").animate({scrollTop:$('.part3').offset().top}, 900);
    return false;
  });
});
$(function() {
  $(".connet3").click(function(){
    $("html,body").animate({scrollTop:$('.part4').offset().top}, 900);
    return false;
  });
});
$(function() {
  $(".connet4").click(function(){
    $("html,body").animate({scrollTop:$('.part5').offset().top}, 900);
    return false;
  });
});

$(function() {
  $(".connet5").click(function(){
    $("html,body").animate({scrollTop:$('.part6').offset().top}, 900);
    return false;
  });
});
$(function() {
  $(".connet6").click(function(){
    $("html,body").animate({scrollTop:$('.part7').offset().top}, 900);
    return false;
  });
});
$(function() {
  $(".connet7").click(function(){
    $("html,body").animate({scrollTop:$('.part9').offset().top}, 900);
    return false;
  });
});

$(function() {
    $(window).load(function() {
        $(".loading").fadeOut();
    });
});

$(document).ready(function(){
  $('.menu ul li').click(function(){
    $('.menu-checkbox').click();
  });
  add();
  MBadd();
  $(".jcarousel-wrapper")
  .mouseenter(function() {
   $(".jcarousel-control-prev").css({"opacity":"1"});
   $(".jcarousel-control-next").css({"opacity":"1"});
  })
  .mouseleave(function() {
   $(".jcarousel-control-next").css({"opacity":"0"});
    $(".jcarousel-control-prev").css({"opacity":"0"});
  });

  // $(".Image")
  // .mouseover(function() {
  //   $("figcaption").css("bottom",'40px');
  // })
  // .mouseout(function() {
  //   $("figcaption").css("bottom",'20px');
  // }); 
  // var $window = $(window);
  // function checkWidth() {
  //         var windowsize = $window.width();
  //   if (windowsize > 768) {
  //     location.reload();
  //   }      
  // }
  // var resizeId;
  // $(window).resize(function() {
  //   clearTimeout(resizeId);
  //   resizeId = setTimeout(checkWidth, 0); 
  // });

});



  function add () {
      var i = 0;
      var str = "";
    for (i = 0; i < article.length; i++) {
        str += "<li><a class='Image' href='" + article[i].relink + "' " + "target='_blank'>";
        str += "<img src='" + article[i].img + "' " + "width='100%'>";
        str += "<figcaption>" + article[i].figcaption + "<small>閱讀更多</small></figcaption></a></li>";
    }
    document.getElementById('article').innerHTML = str;
  }

  function MBadd () {
    var i = 0;
    var str = '';
    for (i = 0; i < article.length; i++) {
        str += "<div id='a" + i + "' class='ann'>";
        str += "<li><a class='Image' href='" + article[i].relink + "' " + "target='_blank'>";
        str += "<p style='background-image: url(" + article[i].img + ")'>" + article[i].figcaption + "</p></a></il></div>";
    }
            document.getElementById('ann_box').innerHTML = str;
  }

var toIndex = 0,
  fromIndex = 0,
  items = $('.slider-container div'),
  items2 = $('.slider-container2 div'),
  itemAmt = items.length - 1;

function toNext() {

  var item = items.eq(toIndex);
  item.css({
    'transition': 'transform 1s ease',
    'transform': 'translateY(0%)',
    'z-index': '1'
  });

  var item2 = items2.eq(toIndex);
  item2.css({
    'transition': 'transform 1s ease',
    'transform': 'translateY(0%)',
    'z-index': '1'
  });

  if (toIndex == 0) {
    fromIndex = itemAmt;
  } else {
    fromIndex = toIndex - 1;
  }

  var fromItem = items.eq(fromIndex);
  fromItem.css({
    'transition': 'transform 1s ease',
    'transform': 'translateY(100%)',
    'z-index': '-1'
  });

  var fromItem2 = items2.eq(fromIndex);
  fromItem2.css({
    'transition': 'transform 1s ease',
    'transform': 'translateY(-150%)',
    'z-index': '-1'
  });

}

function toPrev() {
  if (toIndex == itemAmt) {
    fromIndex = 0;
  } else {
    fromIndex = toIndex + 1;
  }

  var fromItem = items.eq(fromIndex);
  fromItem.css({
    'transition': 'transform 1s ease',
    'transform': 'translateY(100%)',
    'z-index': '-1'
  });

  var fromItem2 = items2.eq(fromIndex);
  fromItem2.css({
    'transition': 'transform 1s ease',
    'transform': 'translateY(-150%)',
    'z-index': '-1'
  });

  var item = items.eq(toIndex);
  item.css({
    'transition': 'transform 1s ease',
    'transform': 'translateY(0%)',
    'z-index': '1'
  });

  var item2 = items2.eq(toIndex);
  item2.css({
    'transition': 'transform 1s ease',
    'transform': 'translateY(0%)',
    'z-index': '1'
  });  
}

var autoSlide = setInterval(function() {
  toIndex += 1;
  if (toIndex > itemAmt) {
    toIndex = 0;
  }
  toNext();
}, 3000);

function nextClick() {
  clearInterval(autoSlide);
  toIndex += 1;
  if (toIndex > itemAmt) {
    toIndex = 0;
  }
  toNext();
}

function prevClick() {
  clearInterval(autoSlide);
  toIndex -= 1;
  if (toIndex < 0) {
    toIndex = itemAmt;
  }
  toPrev();
}

$('.next').click(nextClick);

$('.prev').click(prevClick);

$('.slider-container div').on('swiperight', nextClick);
$('.slider-container div').on('swipeleft', prevClick);

$(".bg1").click(function() {
  window.open("https://topic.cw.com.tw/next/article3.html");
})
