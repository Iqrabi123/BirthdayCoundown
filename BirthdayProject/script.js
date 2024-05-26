const birthdaydate = "20 October 2024";
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function birthdaycountdown() {
  const bdate = new Date(birthdaydate);
  const todaysdate = new Date();
  //   console.log(todaysdate);
  const tseconds = (bdate - todaysdate) / 1000;
  const tdays = Math.floor(tseconds / 3600 / 24);
  const thours = Math.floor(todaysdate / 3600) % 24;
  const tmin = Math.floor(tseconds / 60) % 60;
  const tsec = Math.floor(tseconds) % 60;
  days.innerHTML = tdays;
  hours.innerHTML = thours;
  minutes.innerHTML = tmin;
  seconds.innerHTML = tsec;
}
birthdaycountdown();
setInterval(birthdaycountdown, 1000);
function celebration() {
  const balloon = document.createElement("div");
  const balloon1 = document.createElement("div");
  const heart = document.createElement("div");
  balloon.classList.add("balloon");
  balloon1.classList.add("balloon1");
  heart.classList.add("heart");
  balloon.style.left = Math.random() * 100;
  balloon.style.animationDuration = Math.random() * 2 + 3;
  /*yaha balloon lagega*/ balloon.innerText = "🎈";
  document.body.appendChild(balloon);
  balloon1.style.left = Math.random() * 100;
  balloon1.style.animationDuration = Math.random() * 2 + 3;
  /*yaha bhi balloon lagega*/ balloon1.innerText = "🎈";
  document.body.appendChild(balloon1);
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3;
  /*yaha heart lagega*/ heart.innerText = "❤️";
  document.body.appendChild(heart);
  setTimeout(() => {
    balloon.remove();
  }, 5000);
  setTimeout(() => {
    balloon1.remove();
  }, 5000);
  setTimeout(() => {
    heart.remove();
  }, 2000);
}
setInterval(celebration, 300);
