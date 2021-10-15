var conten1 = document.getElementById('content1');  
var conten2 = document.getElementById('content2');  
var conten3 = document.getElementById('content3');  
 
function tab1(){  
     conten1.style.transform='translateX(0px)';  
     conten2.style.transform='translateX(100%)';  
     conten3.style.transform='translateX(100%)';  
}  
 
function tab2(){  
     conten2.style.transform='translateX(0px)';  
     conten1.style.transform='translateX(-100%)';  
     conten3.style.transform='translateX(100%)';  
}  

function tab3(){  
     conten3.style.transform='translateX(0px)';  
     conten2.style.transform='translateX(-100%)';  
     conten1.style.transform='translateX(-100%)';  
}

// For toggle button;
function toggleClass(){
     const body = document.querySelector('body');
     body.classList.toggle('light');
     body.style.transition = `0.3s linear`;
}

// for time;
const deg = 6; 
// 360 / (12 * 5);

const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');


setInterval(() => {
    
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    let msec = day.getMilliseconds();   
    
    
    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    
})

// for Digital
function clock(){
     var hours = document.getElementById('hour');
     var minute = document.getElementById('minutes');
     var seconds = document.getElementById('seconds');
     var ampm = document.getElementById('ampm');

     var h = new Date().getHours();
     var m = new Date().getMinutes();
     var s = new Date().getSeconds();
     var am = "AM";
     if(h >12){
         h = h - 12;
         var am = "PM";
     }

     h = (h < 10) ? "0" + h : h
     m = (m < 10) ? "0" + m : m
     s = (s < 10) ? "0" + s : s


     hours.innerHTML = h;
     minutes.innerHTML = m;
     seconds.innerHTML = s;
     ampm.innerHTML = am;

}
 var interval = setInterval(clock, 1000);

(function() {
 
    var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ],
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
       function getTime() {
      
            var date = new Date(),
      second  = date.getSeconds() ,
      minute  = date.getMinutes() ,
      hour    = date.getHours() ,
      time = date.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true }),
       day =  date.getDay() ,
      month = date.getMonth() ,
      date = date.getDate() +' . '+ months[month],
          
            ds = second * -6,
            dm = minute * -6,
            dh = hour * -30;
      
            $('.second').css('transform', 'rotate(' + ds + 'deg)');
      $('.minute').css('transform', 'rotate(' + dm + 'deg)');
      $('.hour').css('transform', 'rotate(' + dh + 'deg)');
      
      $('.time').text(time);
      $('.day').text(days[day]);
      $('.date').text( date )
       }
    
     function dailer( selector , size){
       for(var s = 0; s < 60 ; s++){
        $(selector).append('<span style="transform: rotate('+ 6 * s +'deg) translateX('+ size +'px)">'+s+'</span>')
      }
    }  
     dailer( '.second' , 195);
     dailer( '.minute' , 145);
     dailer( '.dail' , 230);
    
    for(var s = 1; s < 13 ; s++){
      $('.hour').append('<span style="transform: rotate('+ 30 * s +'deg) translateX(100px)">'+s+'</span>')
    }
    
    
    setInterval(getTime, 1000);
    getTime();
    
} ());