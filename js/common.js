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
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
//textContent 요소의 글자내용을 얻어오거나 지정할수있음