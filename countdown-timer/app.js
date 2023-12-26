const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format h4")

let futureDate = new Date(2024, 0, 1, 12, 0, 0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const mintues = futureDate.getMinutes()
const date = futureDate.getDate()
const month = months[futureDate.getMonth()]
const day = weekdays[futureDate.getDay()]

giveaway.textContent =  `giveaway ends on ${day}. ${date} ${month} ${year} ${hours}:${mintues}${futureDate.getSeconds()}am`

// future time in ms

const futureTime = futureDate.getTime()

function getRemainingTime() {
  const today = new Date().getTime()
  const t = futureDate - today

  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000

  let days = Math.floor(t/oneDay)
  let hours = Math.floor((t % oneDay)/oneHour)
  let mintues = Math.floor((t % oneHour)/oneMinute)
  let seconds = Math.floor((t % oneMinute)/1000)

  const values = [days, hours, mintues, seconds]

  function format(item){
     if(item < 10) {
      return item = `0${item}`
     }
     return item
  }

  items.forEach(function(item, index){
    item.innerHTML =  format(values[index])
  })

  if(t < 0 ) {
    clearInterval(countDown)
    deadline.innerHTML = `<h4 class="expired">Sorry this giveaway has expired</h4>`
  }
}

let countDown = setInterval(getRemainingTime, 1000);

getRemainingTime()