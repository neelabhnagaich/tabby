chrome.topSites.get(data => {
  console.log(data)
})

const dateEl = document.getElementById('date')


function displayDate() {
  const currentDate = new Date();
  const time = currentDate.toLocaleTimeString();
  dateEl.textContent = time;
}

// setInterval(displayDate(), 1000)
