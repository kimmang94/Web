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

$('#login').on('click',function(){
    $('.black-bg').addClass('show-modal')
})

// 모달창 닫기
$('.black-bg').on('click', function(e){
    if(e.target == document.querySelector('.black-bg'))
    {
        $('.black-bg').removeClass('show-modal');
    }

})


// 로그인 버튼
$('form').on('submit', function(e){
    if (document.getElementById('email').value == ''){
      alert('아이디를 입력해 주세요');  
      e.preventDefault(); // 폼 전송 막기
    } else if (document.getElementById('pass').value == '')
    {
      alert('비밀번호를 입력해 주세요');
      e.preventDefault();
    } else if (document.getElementById('pass').value.length < 6)
    {
      alert('7자리 이상으로 해주세요');
      e.preventDefault();
    }
  })