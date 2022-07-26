const searchEl =document.querySelector('.search');
const searchInputEl =searchEl.querySelector('input')
searchEl.addEventListener('click',function(){
  //로직입력
  searchInputEl.focus();

})

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
  //html속성을 지정
})
searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
  //html속성을 지정
})

const badgeEL = document.querySelector('header .badges');
const toTopEl=document.querySelector('#to-top');

window.addEventListener('scroll',_.throttle(function(){
  console.log(window.scrollY)
  if(window.scrollY>500){
    //배지숨기기
    // badgeEL.style.display='none'
    // gsap.to(애니메이션처리할 요소 , 지속시간, 옵션)
    gsap.to(badgeEL, .6, {
      opacity:0,
      //0으로 .6초동안 진행
      display: 'none'
      // 자바스크립트에서 문자데이터는는 반드시 ''안에 작성
    });
    gsap.to(toTopEl,.2,{
      x: 0
    });
  }else{
    //배지 보이기
    // badgeEL.style.display='block'
    gsap.to(badgeEL, .6, {
      opacity:1,
      //0으로 .6초동안 진행
      display: 'block'
    });
    gsap.to(toTopEl,.2,{
      x: 100
    });
  }
},300))
//window 는 하나의 탭/화면자체
//함수 방지용도 
// _.throttle(함수,시간ms)

toTopEl.addEventListener('click',function(){
  gsap.to(window, .7,{
    scrollTo:0
  });
})


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
//fadeEl 은 fadeEls의 요소중하나 순차적으로들어감
//index 는 반복되고있는 횟수
  gsap.to(fadeEl,1,{
    delay: (index+1)*0.7,//0.7s 만큼 순차적으로
    opacity:1
  });
});
//인수만큼 forEach 의 함수실행

  // new Swiper(css 선택자,옵션 객체데이터형식{});
 new Swiper('.notice-line .swiper-container',{
  direction:'vertical',
  autoplay:true,
  loop:true
 });
 new Swiper('.promotion .swiper-container',{
  // direction:'horizontal'-->기본값 명시안해도됨
  slidesPerView : 3,//한번에 보여줄 슬라이드 개수
  spaceBetween:10,//슬라이드 사이 여백
  centeredSlides: true,//1번 슬라이드가 가운데 보이기
  loop:true,
  // autoplay: {
  //   delay:5000
  // }//슬라이드 변경시 적용될 속성
  pagination:{
    el:'.promotion .swiper-pagination',//페이지번호 요소 선택자
    clickable:true// 사용자의 페이지 번호 요소 제어
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
 })
 new Swiper('.awards .swiper-container', {
  direction:'horizontal',
  autoplay:true,
  loop:true,
  spaceBetween:30,
  slidesPerView: 5,
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
 })


 const promotionEl = document.querySelector('.promotion');
 const promotiontoggleBtn = document.querySelector('.toggle-promotion')
 let isHidePromotion = false;
 promotiontoggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion// !false --> true 로바뀜
  if(isHidePromotion){
    //숨김 처리
    promotionEl.classList.add('hide');
  }else{
    //보임 처리
    promotionEl.classList.remove('hide');
  }
 });
 function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

 function floatingObject(selector , delay, size){
  //gsap.to(요소,시간,옵션);
  gsap.to(selector, //선택자
    random(1.5,2.5),//애니메이션 동작 시간
    {//옵션
    y: size,
    repeat: -1,
    yoyo: true,//위아래반복
    ease:  Power1.easeInOut,
    delay: random(0,1.5)

  });
 }
 floatingObject('.floating1', 1 , 15);
 floatingObject('.floating2', .5 , 15);
 floatingObject('.floating3', 1.5 , 20);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement:spyEl,// 보여짐 여부를 감시할 요소를 지정
      triggerHook:.8,//요소 특정 viewport 위치

    })
    .setClassToggle(spyEl,'show')//토글할요소,토글할클래스
    .addTo(new ScrollMagic.Controller());
  // Scene은 특정요소 감시
})

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
//textContent 요소의 글자내용을 얻어오거나 지정할수있음