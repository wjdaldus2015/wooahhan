
  const header = document.querySelector('header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', function () {
      let currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
          // 스크롤을 내릴 때 헤더를 숨기기.
          header.style.transform = 'translateY(-100%)';
      } else {
          // 스크롤을 올릴 때 헤더를 다시 나타나게 하기.
          header.style.transform = 'translateY(0)';
      }

      lastScrollY = currentScrollY;
  });




//header nav sub menu
$(document).ready(function() {


  $('.tab-item').hover(function(e) {
    e.preventDefault();
  
    if ($(this).find('.sub').length) {
      $('#header').addClass('hover');
      $(this).find('.sub').addClass('show');
    }
  }, function() {
    $('#header').removeClass('hover')
    $(this).find('.sub').removeClass('show');
  
    $('#header .sub .sub-item a').removeClass('on')
    $('#header .sub .sub-item:first-child a').addClass('on')
  });
  
  
  $('#header .sub .sub-item:first-child a').addClass('on')
  
  
  $('#header .sub a').hover(function(){
    $('#header .sub .sub-item a').removeClass('on')
    $(this).addClass('on')
  })

//sc-visual swiper
const mainSlide = new Swiper('.visual-slide',{
  loop:true,
 
  pagination:{
      el:".pagination",
      
  }
})

//card slide
const cardSlide = new Swiper('.sc-story .card-slide',{
  speed:2000,
  loop:true,
  autoplay:{
      delay:0,
  },
  slidesPerView:'auto',
})

$('.sc-story .card-slide').hover(function(){
  cardSlide.autoplay.stop()
},function(){
  cardSlide.autoplay.start()
})

//sc-vision video

$('.btn-control').click(function(){

  if ($(this).hasClass('on')) {
    $('#myVideo').get(0).currentTime=0;
    $('#myVideo').get(0).play();
    
  } else {
    $('#myVideo').get(0).pause();
  }

  $(this).toggleClass('on');
})

//sc-font

fontcloneList = $ ('.sc-font .font-list').clone();
$('.font-content').append(fontcloneList)

//footer .site-group
$('#footer .site-area .link-site').click(function(){
  $('#footer .site-area .site-list').toggleClass('on')
  
})
//side-nav
$('.btn-menu').click(function(){
  $('.side-nav').addClass('on')

})
$('.btn-close').click(function(){
  $('.side-nav').removeClass('on')
  $('html').removeClass('hidden');
})

$('.menu-item .title').click(function(e){
  e.preventDefault();


  const children = $(this).children('.title svg')


  if($(this).hasClass('on')){
      $(this).removeClass('on').siblings('.sub').slideUp();
      
  }else{
      $('.title').removeClass('on').siblings('.sub').slideUp();
      $(this).addClass('on').siblings('.sub').slideDown();
     
  }
  children.toggleClass('on');

})


























})
