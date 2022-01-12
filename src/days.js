(function weekMaker(){
  const weekDays = document.querySelectorAll('.day');
  let days = new Array(7)
  days[0] = "Monday",
  days[1] = "Tuesday",
  days[2] = "Wednesday",
  days[3] = "Thursday",
  days[4] = "Friday",
  days[5] = "Saturday",
  days[6] = "Sunday"
  
  let date = new Date();
  let today = date.getDay();
  console.log(today);
  weekDays[0].textContent = days[today];
  
  function testWeek(input){
    if (input==0){
      weekDays[1].textContent = days[1];
      weekDays[2].textContent = days[2];
      weekDays[3].textContent = days[3];
      weekDays[4].textContent = days[4];
    } else if (input===1){
      weekDays[1].textContent = days[2];
      weekDays[2].textContent = days[3];
      weekDays[3].textContent = days[4];
      weekDays[4].textContent = days[5];
    } else if (input===2){
      weekDays[1].textContent = days[3];
      weekDays[2].textContent = days[4];
      weekDays[3].textContent = days[5];
      weekDays[4].textContent = days[6];
    } else if (input===3){
      weekDays[1].textContent = days[4];
      weekDays[2].textContent = days[5];
      weekDays[3].textContent = days[6];
      weekDays[4].textContent = days[0];
    } else if (input===4){
      weekDays[1].textContent = days[5];
      weekDays[2].textContent = days[6];
      weekDays[3].textContent = days[0];
      weekDays[4].textContent = days[1];
    } else if (input===5){
      weekDays[1].textContent = days[6];
      weekDays[2].textContent = days[0];
      weekDays[3].textContent = days[1];
      weekDays[4].textContent = days[2];
    } else if (input===6){
      weekDays[1].textContent = days[0];
      weekDays[2].textContent = days[1];
      weekDays[3].textContent = days[2];
      weekDays[4].textContent = days[3];
    }
  }
  testWeek(today);
})();