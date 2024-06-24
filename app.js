slideRight();
slideDown();
assignDate();
assignWeekday();
animateText();
popup();
clearJoin();


function slideRight(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show');
      }else{
        entry.target.classList.remove('show');
      }
    });
  });
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
}

function slideDown(){
  const observers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show-up');
      }else{
        entry.target.classList.remove('show-up');
      }
    });
  });
  const hiddenElementss = document.querySelectorAll('.hidden-up');
  hiddenElementss.forEach((el) => observers.observe(el));
}

//Date

function assignDate(){
  Date.prototype.addDays = function(days){
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }
  
  let date = new Date();
  let currentMonth = date.toLocaleString('en-US', {month: 'long'});
  let currentDay = date.getDate();
  let nD = date.addDays(1);
  let nextDay = nD.getDate();
  let d3 = date.addDays(2);
  let dayThree = d3.getDate();
  let d4 = date.addDays(3);
  let dayFour = d4.getDate();
  let d5 = date.addDays(4);
  let dayFive = d5.getDate();

  let currentMonth2 = nD.toLocaleString('en-US', {month: 'long'});
  let currentMonth3 = d3.toLocaleString('en-US', {month: 'long'});
  let currentMonth4 = d4.toLocaleString('en-US', {month: 'long'});
  let currentMonth5 = d5.toLocaleString('en-US', {month: 'long'});
  
  document.getElementById('js-month').innerHTML = currentMonth;
  document.getElementById('js-month2').innerHTML = currentMonth2;
  document.getElementById('js-month3').innerHTML = currentMonth3;
  document.getElementById('js-month4').innerHTML = currentMonth4;
  document.getElementById('js-month5').innerHTML = currentMonth5;
 


  document.getElementById('js-day').innerHTML = currentDay;
  document.getElementById('js-day2').innerHTML = nextDay;
  document.getElementById('js-day3').innerHTML = dayThree;
  document.getElementById('js-day4').innerHTML = dayFour;
  document.getElementById('js-day5').innerHTML = dayFive;
  
}

function assignWeekday(){
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  Date.prototype.addDays = function(days){
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }

  const date = new Date();
  let day1 = weekday[date.getDay()];

  let d2 = date.addDays(1);
  let day2 = weekday[d2.getDay()];

  let d3 = date.addDays(2);
  let day3 = weekday[d3.getDay()];

  let d4 = date.addDays(3);
  let day4 = weekday[d4.getDay()];

  let d5 = date.addDays(4);
  let day5 = weekday[d5.getDay()];

  document.getElementById('js-weekday').innerHTML = day1;
  document.getElementById('js-weekday2').innerHTML = day2;
  document.getElementById('js-weekday3').innerHTML = day3;
  document.getElementById('js-weekday4').innerHTML = day4;
  document.getElementById('js-weekday5').innerHTML = day5;
}

function animateText(){
  let text = document.getElementById('text');
  let shadow = '';
    for(let i = 0; i < 15; i++){
      shadow += (shadow? ',':'') + -i * 1 + 'px 0 #0078CC';
    }
  text.style.textShadow = shadow;
}

function popup(){
  const openBtn = document.getElementById("modal-btn");
  const closeBtn = document.querySelector('.modal-close-button');
  const overlay = document.querySelector('.modal-overlay');
  const modal = document.querySelector('.modal');
  
 
  if(openBtn.classList !== 'active'){
    openModal();
    closeModal();
  }
  
  function openModal(){
    openBtn.addEventListener('click', function(){
      modal.classList.add('active');
      overlay.classList.add('active');
    })
  }
  
  function closeModal(){
    closeBtn.addEventListener('click', function(){
      modal.classList.remove('active');
      overlay.classList.remove('active');
    })
  }
}

function clearJoin(){
  let clearSearch = document.querySelector('.clear-search');
  let inputs = document.querySelectorAll('input');
  
  clearSearch.addEventListener('click', () => {
     inputs.forEach(input => input.value = '');
  });
}


