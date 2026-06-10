// $('.gnb > li').mouseover(function(){
//     $(this).find('.lnb').css({width:'600px', height:'100px', padding:'60px 100px'})
//     $(this).find('.lnb li').css({opacity:1})
// })

// $('.gnb > li').mouseout(function(){
//     $('.lnb').css({width: '', height: '', padding: ''})
//     $(this).find('.lnb li').css({opacity:''})
// })
const winUrl = window.location.pathname  //     /sub01_05.html


$('#header_area').load('include/header.html header', function(){
    $('header .lnb a').each(function(){
        let lnbHref = $(this).attr('href');

        if(winUrl.indexOf(lnbHref) >= 0){
            $(this).parent().addClass('on');

            let lnbHtml = $(this).parents('.lnb').html(); $('#section_box_sub .snb').html(lnbHtml);

            let lnbEn = $(this).parent().attr('data-en');
            $('#section_box_sub h2').text(lnbEn)
        }
    })

    if(winUrl.indexOf('login.html') >= 0){
        $('#section_box_sub h2').text('LOGIN');
    }
    if(winUrl.indexOf('join.html') >= 0){
        $('#section_box_sub h2').text('MEMBER JOIN');
    }
    

    let loginHtml = $('.topset .login_box').html()
    $('.topset_mobile .login_box').html(loginHtml);


    let navHtml = $('.topset nav').html()
    $('.topset_mobile nav').html(navHtml);

    // html에서 모바일 만들 때 여러번 안쓰고 html에서 쓴 걸로 불러오는 방법
    // .html(navHtml) 대신 자식으로 넣는 명령어 append를 써도 됨
    // 위 애들을 먼저 쓰고 아래 슬라이드 어쩌고 애들을 써야됨. 슬라이드 어쩌고 먼저 쓰면 작동 안함



    $('.topset_mobile .gnb > li').click(function(){
        $('.lnb').slideUp();
        $(this).find('.lnb').stop().slideToggle();

    });


    $('header .hamburger').click(function(){
        $('.topset_mobile').fadeToggle();
        $(this).toggleClass('on')
        $('.topset_monav').toggleClass('on');
    })

    // -> 클릭한 li에 들어있는 .lnb를 찾아서 .slidedown()

    // show()->나타남
    // hide()->사라짐
    // toggle()->한번 클릭하면 나타나고 또 클릭하면 사라짐
    // slideDown()->슬라이드 형식으로 내려감
    // slideUp->슬라이드 형식으로 올라감
    // slideToggle->슬라이드 형식으로 나타났다 사라졌다 함
    // fadeIn
    // fadeOut
    // fadeToggle




    $('.search_open').click(function(){
        $('.search_wrap').fadeIn(300);
    });


});



$('.search_close').click(function(){
    $('.search_wrap').fadeOut(300);
});

$('.word li').click(function(){
    let wordVal = $(this).text();
    $('.search_inner input').val(wordVal+' ').focus().trigger('keyup');
});

$('.search_inner input').keyup(function(){
    let inputText = $(this).val()

    console.log(inputText.length)

    if(inputText.length > 0){
        $('.material-symbols-outlined').addClass('on');
    } else{
        $('.material-symbols-outlined').removeClass('on');
    }
});

// input에서 글자를 칠 때 input의 값을 구하고 -> 대상.val()
// 만약 값의 길이가 0보다 큰 경우 -> 대상.length()
// .material-symbols-outlined .on 클래스를 추가해라 -> 대상.addClass('on')
// 아닌 경우는 .on 클래스를 제거해라 -> 대상.removeClass('on')
// 값 구하기 = 대상.val()
// 길이 = 대상.length()
// 클래스 추가 = 대상.addClass()
// 제거 = 대상.removeClass()


// // .search_inner 안에 있는 input에 키를 입력할 때마다 실행
// $('.search_inner input').keyup(function(){

//     // 현재 input에 입력된 값을 가져와서 inputVal 변수에 저장
//     let inputVal = $(this).val();

//     // 만약 입력된 글자 수가 0보다 크다면
//     if(inputVal.length > 0){

//         // .material-symbols-outlined 에 on 클래스 추가
//         $('.material-symbols-outlined').addClass('on');

//     } else {

//         // 입력된 글자가 없으면 on 클래스 제거
//         $('.material-symbols-outlined').removeClass('on');
//     }
// });






$('.smallimg li').mouseenter(function(){
    clearInterval(part1Rollong);

    let liIndex = $(this).index();
    liNum = liIndex;
    // 마우스를 올린 li의 숫자를 구해서 liNum에 넣음

    $(this).addClass('on').siblings().removeClass('on');

    let enText = $(this).find('.en').text();
    $('.bigimg .en').text(enText);
        let koText = $(this).find('.ko').text();
    $('.bigimg .ko').text(koText);
    let imgSrc = $(this).find('img').attr('src');
    $('.bigimg img').attr('src', imgSrc);
});

// 위에서 siblings(같은 부모를 가진 형제 요소들)를 쓰는 이유
// : 마우스를 올린 요소에만 on 클래스를 붙이고 나머지는 제거하기 위해
// sibling가 없으면 마우스를 올렸을 때 나타난 효과가 마우스를 옮겨도 계속 남아있음, siblings를 넣어주면 마우스를 옮기면 그 부분은 효과가 사라짐

// 속성의 값을 구하는 것: attr




$('.smallimg li').mouseleave(function(){
    part1Rollong = setInterval(autoRolling, 2000);
})
// 마우스를 옮기면 다시 autoRolling이 2초마다 실행

$('.smallimg li').eq(0).addClass('on');
// ->처음 보이는 모습

let part1Rollong = setInterval(autoRolling, 2000);
let liNum = 0;
function autoRolling(){
    liNum++;
    if(liNum >= 4){
        liNum = 0;
    }
    $('.smallimg li').eq(liNum).addClass('on').siblings().removeClass('on');

     let enText = $('.smallimg li').eq(liNum).find('.en').text();
    $('.bigimg .en').text(enText);
        let koText = $('.smallimg li').eq(liNum).find('.ko').text();
    $('.bigimg .ko').text(koText);
    let imgSrc = $('.smallimg li').eq(liNum).find('img').attr('src');
    $('.bigimg img').attr('src', imgSrc);


}

// setInterval: 반복함수
// clearInterval:반복함수를 멈추는 함수
// setInterval(함수, 시간)으로 씀
// clearInterval(변수?)
// 예) let merong = setInterval(함수, 2000) <-2000 = 2초
// clearInterval(merong)

// 함수:function 같은거... fungtion은 익명함수임(이름이 없는 함수)->이름 지을 수 있음 function autoRolling(){처럼 쓰면 function의 이름이 autoRolling이 됨
// 예) let part1Rollong = setInterval(autoRolling(){}, 2000)
// function autoRolling(){
//     새로 할 일
// }
// 처럼 쓰면 됨

// $('.smallimg li').eq(0)=>li 중 첫번째를 의미
// $('.smallimg li').eq(1)=>li 중 두번째를 의미
// liNum++
// =>liNum+1을 의미함




let mainLength = $('.main').length;

$(window).scroll(function(){
    let scrT = $(window).scrollTop();
    let winH = $(window).height();

    if(mainLength > 0){
        if(scrT >= winH/2){
        $('.part1line').addClass('merong');
        } else{
        $('.part1line').removeClass('merong');
        }

        // $('.floating_menu').css({top:'calc(50% + '+scrT+'px)'})
        $('.floating_menu').css({top: `calc(50% + ${scrT}px)` })
        // $('floating_menu').css({right:scrT})
        // $('floating_menu li').css({margintBottom:srcT})


        let part1Top = $('#section1').offset().top;
        let part2Top = $('#section2').offset().top;
        let part3Top = $('#section3').offset().top;
        if(scrT > part1Top - winH/3){
        $('.floating_menu li').eq(0).addClass('on').siblings().removeClass('on')
        }
        if(scrT > part2Top - winH/3){
        $('.floating_menu li').eq(1).addClass('on').siblings().removeClass('on')
        }
        if(scrT > part3Top - winH/3){
        $('.floating_menu li').eq(2).addClass('on').siblings().removeClass('on')
        }
    }

});

/* $('floating_menu a').eq(0).click(function(){
    let part1Top = $('#section1').offset().top;
    $('html, body').animate({scrollTop:part1Top})
})
$('floating_menu a').eq(1).click(function(){
    let part1Top = $('#section2').offset().top;
    $('html, body').animate({scrollTop:part1Top})
})
$('floating_menu a').eq(2).click(function(){
    let part1Top = $('#section3').offset().top;
    $('html, body').animate({scrollTop:part1Top})
}) */

$('.floating_menu a').click(function(){
    let aHref = $(this).attr('href')
    let partTop = $(aHref).offset().top;
    $('html, body').animate({scrollTop:partTop})
    $('.floating_menu li').removeClass('on');
    $(this).parents('li').addClass('on')
    /* parent는 부모 parents는 조상 */
});

// 구구단
/* for(let i=2; i<10; i++){

    for(let j=1; j<10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
} */


// alert($('#section1').offset().top)


// 윈도우(한화면)에서 스크롤 할 때마다 실행되는 것
// $(window).scrollTop(); => 윈도우의 스크롤 위치값을 구하는 식
// 화면 크기에 따라 스크롤 했을 때의 수치(위에서 500으로 쓴 것)가 다름
// 큰 화면이든 작은 화면이든 항상 일정한 값에서 효과를 주고싶다면 화면의 일정 높이값으로 쓰면 됨
//     let winH = $(window).height();  ->윈도우의 높이
//      if(scrT >= winH/2){            ->윈도우 높이의 절반일 때
//   else{
//         $('.part1line').removeClassClass('merong');
//     }를 써주면 스크롤을 올렸다내렸다 해도 항상 500일 때 다시 효과가 보임