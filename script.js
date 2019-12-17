$(document).ready(() => {

    $("#takeQuizBtn").on('click', function(){
        $(".quizSection").show();
        $("#question1").show();
        $(window).scrollTop($("#question1").offset().top);
    });

    $("[name='question1']").on('click', function(){
        $("#question2").show();
        $(window).scrollTop($("#question2").offset().top);
    });

    $("[name='question2']").on('click', function(){
        $("#question3").show();
        $(window).scrollTop($("#question3").offset().top);
    });

    $("[name='question3']").on('click', function(){
        $("#question4").show();
        $(window).scrollTop($("#question4").offset().top);
    });

    $("[name='question4']").on('click', function(){
        $("#question5").show();
        $(window).scrollTop($("#question5").offset().top);
    });

    $("[name='question5']").on('click', function(){
        $("#checkResults").show();
        $(window).scrollTop($("#question4").offset().top);
    });

    $("#quizBoxForm").submit(function(e){
        e.preventDefault();
        const $this = $(this);
        let genreAnswers = {
            dramaG: 0,
            actionG: 0,
            fictionG: 0,
            commedyG: 0
        }

        $this.find("input[type='radio']:checked").each(function() {
            const $checkedInput = $(this)
            if ($checkedInput.val() === "dramaGenre") {
                genreAnswers.dramaG++;
            } else if ($checkedInput.val() === "actionGenre") {
                genreAnswers.actionG++;
            } else if ($checkedInput.val() === "fictionGenre") {
                genreAnswers.fictionG++;
            } else  
                genreAnswers.commedyG++;  
        });

        let finalResultKey = Object.keys(genreAnswers).reduce((a, b) => genreAnswers[a] > genreAnswers[b] ? a : b);
        $(".finalResults").show();
        $("#" + finalResultKey).show();
        $(window).scrollTop($(".finalResults").offset().top);
        $("#retake-quiz").show();

    });

  
});
