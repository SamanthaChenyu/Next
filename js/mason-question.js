var question = [
{
    "question":"一、1987年美國發生股災，史稱「黑色星期一」，造成之後的金融危機，請問，今年是黑色星期一幾週年？",
    "option":["A：30週年","B：40週年","C：50週年"," "," "],
    "correct":["A：30週年"],
    "description":"2017年適逢「黑色星期一」30週年，歷史會重演嗎？<br>目前全球幾乎牛氣沖天，投資人該如何看待？",
},
{
    "question":"二、美國總統川普已宣布提名鮑爾（Jerome Powell）為美聯準會（Fed）主席，結束葉倫穩定調控的時代。適逢金融海嘯10年，這麼多年來美國持續不斷的量化寬鬆政策，為美國經濟注入了數兆美元。量化寬鬆（QE）政策是什麼呢？",
    "option":["A：央行使用的貨幣政策，目的是讓經濟復甦","B：印鈔票，救經濟","C：當年美國聯準會前主席柏南克購買長期債券，提升美國長債價格並壓低利率，使民眾降低房貸利率來支撐房市景氣，即為2008年後所謂的寬鬆政策。","D：以上皆是"," "],
    "correct":["A：央行使用的貨幣政策，目的是讓經濟復甦"],
    "description":"答案是 A：央行使用的貨幣政策，目的是讓經濟復甦",
},
{
    "question":"三、全球經濟「黑天鵝」紛飛，「黑天鵝效應」是指什麼意思？",
    "option":["A：不可預測的事情","B：基因突變的代表","C：與眾不同的人事物"," "," "],
    "correct":["A：不可預測的事情"],
    "description":"答案是 A：不可預測的事情",
},
{
    "question":"四、網路與行動科技正在徹底改變個人消費與理財習慣、投資決策，美盛全球投資調查顯示，由千禧世代領軍的線上投資運用越來越普遍。你認為那個國家的民眾使用線上理財的比例最高",
    "option":["A：台灣","B：墨西哥","C：日本","D：法國","E：英國"],
    "correct":["A：台灣"],
    "description":"答案是 A：台灣",
},
{
    "question":"五、科技快速進步、人群互動型態也快速改變，世代金錢觀念差異愈來愈明顯。若以投資信心來看，你認為那個年齡層世代最有投資信心？",
	"option":["A：千禧世代 (18-35歲)","B：X世代 (36-52歲)","C：嬰兒潮世代 (53-71歲)"," "," "],
	"correct":["A：千禧世代 (18-35歲)"],
	"description":"答案是 A：千禧世代<br>美盛全球投資調查顯示，儘管千禧世代在成長期間經歷了多年來最嚴重的金融風暴之一，卻意外發現他們竟然是最樂觀的族群！此外，2018年投資表現預期，年輕投資者對此最具信心，淨樂觀情緒42%，高於X世代投資者的17%及嬰兒潮投資者的7%。",
},
{
	"question":"六、科技始終來自於人性？還是人性會僵化於科技？二者如何平衡在這時代變成議題，金融投資業務趨向自動化，但很多人也相信專業的理財專家協助同樣很重要。你認為全球調查中那個年齡層世代最相信科技與人性會取得專業的平衡？",
	"option":["A：千禧世代 (18-35歲)","B：X世代 (36-52歲)","C：嬰兒潮世代 (53-71歲)"," "," "],
	"correct":["A：千禧世代 (18-35歲)"],
	"description":"答案是 A：還是千禧世代喔！",
}
]

$(document).ready(function() {


function quiz () {
    var i = 0;
    var correctCount = 0;
    var que = 0;
    var str = '';

    for (i = 0; i < question.length; i++) {
        str += "<div><div id='q"+i+"' class='slide'><div class='imgContent zoomIn animated'></div><div class='quiz-text'>" + question[i]["question"] + "</div>";
        str += "<ul class='selection'><li class='choice'>" + question[i]["option"][0] + "</li><li class='choice'>" + question[i]["option"][1] + "</li><li class='choice'>" + question[i]["option"][2] + "</li><li class='choice'>" + question[i]["option"][3] + "</li><li class='choice'>" + question[i]["option"][4] + "</li></div></div>";
        str += "<div id='a" + i + "' class='slide'><div class='answer'><div id='answerImg"+ i +"' class='imgIconA'></div><div><p id='answer" + i + "'></p></div></div>";
        str += "<div class='answer-detail'><div class='detail' id='detail" + i + "'>我要看解答小教室</div></div>"
        str += "<div class='next'><div class='detail' id='next" + i + "'href='javascript:void(0)'>挑戰下一題</dvi></div></div></div>";
        document.getElementById('quiz').innerHTML = str;
    }

    $("#result").hide();
    choiceScore();

    $("#q1, #q2, #q3, #q4, #q5, #q6").hide();
    $("#a0, #a1, #a2, #a3, #a4, #a5, #a6").hide();



// Ansroom

    $("#detail0").click(function() {
        $("#careful0").fadeIn();
    });
    $("#detail1").click(function() {
        $("#careful1").fadeIn();
    });
    $("#detail2").click(function() {
        $("#careful2").fadeIn();
    });
    $("#detail3").click(function() {
        $("#careful3").fadeIn();
    });
    $("#detail4").click(function() {
        $("#careful4").fadeIn();
    });
    $("#detail5").click(function() {
        $("#careful5").fadeIn();
    });

    $(".close").click(function() {
         $(".Introduction").fadeOut();
    });

    function choiceScore() {

        $(".choice").bind("click", function () {
            var answer = $(this).text();
            checkanswer(que, answer);
        });

    }

    function checkanswer(i, a) {
        $("#q" + i).hide();
        $("#a" + i).show();
        que = que + 1;
        if (a == question[i]['correct']) {
            correctCount = correctCount + 1;
            $("#answerImg"+i).append("<img src='images/mason/correct.svg' />");
            $("#answer"+i).append(question[i]["description"]);
            $(".q" + i + " li.choice").unbind("click");
            $("#next" + i).on("click", function () {
                $("#a" + i).hide();
                $("#q" + que).show();
            });
        } else {
            $("#answerImg" + i).append("<img src='images/mason/incorrect.svg' />");
            $("#answer" + i).append(question[i]["description"]);
            $(".q" + i + " li.choice").unbind("click");
            $("#next" + i).on("click", function () {
                $("#a" + i).hide();
                $("#q" + que).show();
            });
        }
     
       console.log(correctCount);
       
    };

    $("#next5").text("看結果");

    var element0 = $("#next5").eq(0);
    $(element0).addClass("gtmEvent").attr('gtm-name','page6-result');
    console.log($(element0).html());

    $("#next5").on("click", function () {
        final();
                    $("#share").on("click", function(e) {
                        e.preventDefault(),
                        FB.ui({
                            method: "share",
                            action_type: "og.shares",
                            display: "popup",
                            href: 'http://topic.cw.com.tw/next/mason.html',
                            action_properties: JSON.stringify({
                                object: {
                                    "og:url": "http://topic.cw.com.tw/next/mason.html",
                                    "og:title": "2018機會或挑戰測驗，你答對了" + correctCount + "題！",
                                    "og:description": "要幫自己荷包滿滿，就要懂得用理財工具幫你工作，創造「有感」投資，快來看看美盛全球投資能為你做什麼吧！",
                                    "og:image": "http://topic.cw.com.tw/next/images/mason/quiz-share.jpg"
                                }
                            })
                        })
                    })
    });


    function reset() {
        $("#result").hide();
        que = 0;
        correctCount = 0;
        $("#quiz div").remove();
        $("#result div").remove();
        $("#result p").remove();
    }

    function final() {
        $("#quiz").slideUp();
        $("#result").show();
        finalresult(correctCount);
    }   

    function finalresult(k) {     
        $("#result").append("<div class='resultDescription'>你答對了" + correctCount + "/6題<br>要幫自己荷包滿滿，就要懂得用理財工具幫你工作，<br>創造「有感」投資，<br>快來看看美盛全球投資能為你做什麼吧！</div><div class='result-include'><div class='result-left'><a href='http://www.leggmason.tw/zh/index.aspx' target='_blank'>「有感」投資是什麼？立即了解</a></div><div class='result-right'><p class='again' id='again'>再玩一次</p><p class='share' id='share'>分享給朋友</p></div></div><p class='Remarks'>備註：研究方法<br>美盛全球投資調查訪問了15,300名投資人，範圍遍及歐洲、亞太、拉丁美洲和美國共17個國家，並確保樣本足以代表各國人口。研究採用線上計量方法，擷取可代表各國情況的樣本。</p>");
        $("#again").click(function(){
            reset();
            quiz();
            $("#quiz").show();
        });    
    }
}
    $('#start').click(function() {
        $('#q0').show();
        $('.regret').hide();
        $('#start').hide();
        $('.ab-center').hide();
        quiz();
    });
});


