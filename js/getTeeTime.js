const today = new Date();
const dayOfWeek = today.getDay();
const targetDate = today.getDate() + 9;
let isDateAvailable = false;
console.log("day of the week")
console.log(dayOfWeek)

const selectTeeTime = () => {
  const teeTimes = document.querySelectorAll('.start');
  if (!!teeTimes && teeTimes.length > 0) {
    for (var i = 0; i < teeTimes.length; i++) {
      let teeTime = teeTimes[i].innerText;
      let teeTimeHour = parseInt(teeTime[0]);
      console.log(teeTime);
      if ((teeTimeHour > 7 && teeTime.includes("am")) ||(teeTimeHour < 5 && teeTime.includes("pm"))) {
        teeTimes[i + 5].click();
        i += teeTimes.length;
      }
    }
  } else {
    setTimeout(selectCurrentDate, 300);
  }
}

const selectCurrentDate = () => {
  let datePicker = document.querySelector('.datepicker');
  if (!!datePicker) {
    let days = document.querySelectorAll('.day:not(.disabled)');
    if (!!days && days.length > 0) {
      days.forEach(day => {
        if (day.innerText == targetDate) {
          day.click();
          window.testValue = day;
        }
      });
      isDateAvailable = true;
      setTimeout(selectTeeTime, 500);
    } else {
      setTimeout(selectCurrentDate, 500);
    }
  } else {
    setTimeout(selectCurrentDate, 500);
  }
};

const searchForPublicTimeBtn = () => {
  const publicTimeBtn = document.querySelector('.btn.btn-primary');
  if (!!publicTimeBtn && publicTimeBtn.innerText === 'Los Verdes Public Times') {
    publicTimeBtn.click();
    setTimeout(selectCurrentDate, 500);
  } else {
    location.reload();
  }
};

document.addEventListener("DOMContentLoaded", searchForPublicTimeBtn);
