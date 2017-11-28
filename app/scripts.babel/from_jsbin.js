let interval;

const timer = document.querySelector('.js-timer');
const message = document.querySelector('.js-message');
const fullDuration = 12;
const restDuration = 20;

//function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

//https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds

const formatTime = (s) =>{return(s-(s%=60))/60+(9<s?':':':0')+s};

const clearText = (el) =>{
  el.textContent = '';
}

const populateText = (el, msg) => {
  el.textContent = msg;
}


// populate timer
timer.textContent = formatTime(fullDuration);

const countdownRest = (dur) => {
  let interval = setInterval(() =>{
    dur--;
    console.log(formatTime(dur));
    if(dur === 0){
      clearInterval(interval);
      console.log('done');
      countdownFull(fullDuration);
    }
  },1000)
};


const countdownFull = (fullDur) => {
  let fullInterval = setInterval(() => {
    clearText(message);
    fullDur--;
    timer.textContent = formatTime(fullDur);
    if(fullDur === 0){
      clearInterval(fullInterval);
      message.textContent = 'Take a break!';
      countdownRest(restDuration);
    }
  }, 1000)
}


countdownFull(fullDuration);