`use strict`;

const startDateElement = document.getElementById('startDate')
const endDateElement = document.getElementById('endDate')

startDateElement.addEventListener("change", (event) => {
  const value = event.target.value;

  if (value) {
    endDateElement.removeAttribute("disabled");
  }
});

function updateEndDateMin() {
  // Get the value of the startDate input field
  const startDateValue = document.getElementById('startDate').value;
  
  // Set the min attribute of the endDate input field to startDateValue
  document.getElementById('endDate').min = startDateValue;
  
  // Enable the endDate input field
  document.getElementById('endDate').disabled = false;
}




const weekBtn = document.getElementById('weekBtn');
const monthBtn = document.getElementById('monthBtn');
const yearBtn = document.getElementById('yearBtn');

  weekBtn.addEventListener('click', selectWeekPreset);
  monthBtn.addEventListener('click', selectMonthPreset);
  yearBtn.addEventListener('click', selectYearPreset);

  function selectWeekPreset(event) {
    event.preventDefault();
    const today = new Date();
    const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    setDates(startDate, today);
  }

  function selectMonthPreset(event) {
    event.preventDefault();
    const today = new Date();
    const startDate = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate() + 1);
    setDates(startDate, today);
  }

  function selectYearPreset(event) {
    event.preventDefault();
    const today = new Date();
    const startDate = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate() + 1);
    setDates(startDate, today);
  }

  function setDates(startDate, endDate) {
    // Set the value and min attributes of the startDate input field
    document.getElementById('startDate').value = formatDate(startDate);
    document.getElementById('startDate').min = formatDate(startDate);

    // Set the value and max attributes of the endDate input field
    document.getElementById('endDate').value = formatDate(endDate);
    document.getElementById('endDate').max = formatDate(endDate);

    // Enable the endDate input field
    document.getElementById('endDate').disabled = false;
  }

  function formatDate(date) {
    // Format the date as YYYY-MM-DD
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }



// get the start date and end date elements

// get the calculate button element
const calculateButton = document.getElementById("data-calculate");

// get the result element
const resultElement = document.querySelector(".results-time-range .result-number");

// get the count in format element
const countInFormatElement = document.getElementById("countInFormat");

// add a click event listener to the calculate button
calculateButton.addEventListener("click", () => {
  // get the start date and end date values
  const startDate = new Date(startDateElement.value);
  const endDate = new Date(endDateElement.value);

  // calculate the time difference in milliseconds
  const timeDiff = Math.abs(endDate - startDate);

  // calculate the number of days/hours/minutes/seconds based on the selected count in option
  const countInElement = document.querySelector('input[name="count-in"]:checked');
  let countIn;
  if (countInElement.id === "days") {
    countIn = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    countInFormatElement.textContent = "days";
  } else if (countInElement.id === "hours") {
    countIn = Math.ceil(timeDiff / (1000 * 60 * 60));
    countInFormatElement.textContent = "hours";
  } else if (countInElement.id === "minutes") {
    countIn = Math.ceil(timeDiff / (1000 * 60));
    countInFormatElement.textContent = "minutes";
  } else if (countInElement.id === "seconds") {
    countIn = Math.ceil(timeDiff / 1000);
    countInFormatElement.textContent = "seconds";
  }

  // calculate the number of working days/weekends based on the selected type of days option
  const typeOfDaysElement = document.querySelector('input[name="type-of-days"]:checked');
  let totalDays;
  if (typeOfDaysElement.id === "all") {
    totalDays = countIn;
  } else if (typeOfDaysElement.id === "workDays") {
    const startDateCopy = new Date(startDate);
    let workDays = 0;
    while (startDateCopy <= endDate) {
      const dayOfWeek = startDateCopy.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        workDays++;
      }
      startDateCopy.setDate(startDateCopy.getDate() + 1);
    }
    totalDays = workDays;
  } else if (typeOfDaysElement.id === "weekends") {
    const startDateCopy = new Date(startDate);
    let weekends = 0;
    while (startDateCopy <= endDate) {
      const dayOfWeek = startDateCopy.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        weekends++;
      }
      startDateCopy.setDate(startDateCopy.getDate() + 1);
    }
    totalDays = weekends;
  }

  // display the result
  resultElement.textContent = totalDays;
});



document.getElementById("data-calculate").addEventListener("click", function() {
  document.getElementById("modal").classList.remove("popup__container");
  document.getElementById("overlay").removeAttribute("id");
  document.getElementById("modal").innerHTML = ""; // remove all items inside popup
});




const calculateBtn = document.getElementById('data-calculate');
const startDateText = document.getElementById('resultStartDate');
const endDateText = document.getElementById('resultEndDate');
const startDateInput = document.getElementById('startDate');
const endDateInput = document.getElementById('endDate');

calculateBtn.addEventListener('click', () => {
  const startDateValue = startDateInput.value;
  const endDateValue = endDateInput.value;
  if (startDateValue && endDateValue) {
    startDateText.textContent = startDateValue;
    endDateText.textContent = endDateValue;
  }
});



// Get the radio buttons and the result <div> element
const allRadio = document.getElementById("all");
const workDaysRadio = document.getElementById("workDays");
const weekendsRadio = document.getElementById("weekends");
const typeDaysResult = document.getElementById("typeDaysResult");

// Add event listeners to the radio buttons
allRadio.addEventListener("click", updateTypeDaysResult);
workDaysRadio.addEventListener("click", updateTypeDaysResult);
weekendsRadio.addEventListener("click", updateTypeDaysResult);

// Define the event listener function
function updateTypeDaysResult() {
  if (allRadio.checked) {
    typeDaysResult.textContent = "(All Days)";
  } else if (workDaysRadio.checked) {
    typeDaysResult.textContent = "(Work Days Only)";
  } else if (weekendsRadio.checked) {
    typeDaysResult.textContent = "(Weekends Only)";
  }
}





/* Recalculate Button -> active
const recalculateButton = document.getElementById('dataRecalculate');
const modalElement = document.getElementById('modal');
const overlayElement = document.getElementById('overlay');

function showOverlayAndModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
} */



/* Whis doesn't work
const recalculateButton = document.getElementById('dataRecalculate');
const modalElement = document.getElementById('modal');
const overlayElement = document.getElementById('overlay');

function showOverlayAndModal() {
  modalElement.classList.add('active');
  overlayElement.classList.add('active');
}

recalculateButton.addEventListener('click', () => {
  showOverlayAndModal();
});*/