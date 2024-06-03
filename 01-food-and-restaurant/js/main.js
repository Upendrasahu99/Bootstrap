//active navabar
  let nav = document.querySelector(".navigation-wrap");
  window.onscroll = function(){
    
    if(document.documentElement.scrollTop > 20){
      nav.classList.add('scroll-on');
    }else{
      nav.classList.remove('scroll-on')
    }
  }

//nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(e){
  e.addEventListener('click', function(){
    navCollapse.classList.remove('show');// show ti boostrap class when we click on navbar button
  })
})

//counter design
document.addEventListener("DOMContentLoaded", () =>{
  function counter(id, start, end, duration){
    let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    // step = Math.abs(Math.floor(duration / range)), //below one also work same
    step = Math.floor(duration / range), //How much milisecond it will take to update the for every number number
    timer = setInterval( () => {
      current += increment;
      obj.textContent= current;
      if( current == end){
        clearInterval(timer);
      }
    }, step);
  }


  counter("count1", 0, 1287, 3000);
  counter("count2", 100, 5786, 3000);
  counter("count3", 0, 1440, 3000);
  counter("count4", 0, 7110, 3000);
});