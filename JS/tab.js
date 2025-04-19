// 1. 버튼 0 누르면
// - 모든 버튼에 붙은 orange 클래스명 제거
// - 버튼 0에 orange 클래스명 추가
// - 모든 div 에 붙은 show 클래스명 제거
// - div - 에 show 클래스명 추가

var tabBtn = $('.tab-button');
var tabContetn = $('.tab-content');
var tabCount = tabBtn.length;

for (let i = 0; i <= tabCount; i++){
    tabBtn.eq(i).on('click', function(){
    tabBtn.removeClass('orange');
    tabBtn.eq(i).addClass('orange');
    tabContetn.removeClass('show');
    tabContetn.eq(i).addClass('show');
     });
}


