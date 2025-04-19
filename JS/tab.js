// 1. 버튼 0누르면 클래스 orange 추가 (기존 orange 는 제거) 

$('.tab-button').eq(0).on('click', function(){
    for (i = 0; i <= $('.tab-button').length; i++)
    {
        $('.tab-button').eq(i).removeCalss('orange');
    }
    $('.tab-button').eq(0).addClass('orange');
});