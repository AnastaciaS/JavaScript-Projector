`use strict`;

const startDateElement = document.getElementById('startDate')
const endDateElement = document.getElementById('endDate')

startDateElement.addEventListener('change', (event) => {
    const value = event.target.value;

    if (value) {
        endDateElement.removeAttribute('disabled');
    }
});

function updateEndDateMin() {
    const startDateValue = document.getElementById('startDate').value;
    document.getElementById('endDate').min = startDateValue;
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

const calculateButton = document.getElementById('data-calculate');
const resultElement = document.querySelector('.results-time-range .result-number');
const countInFormatElement = document.getElementById('countInFormat');

calculateButton.addEventListener('click', () => {
    const startDate = new Date(startDateElement.value);
    const endDate = new Date(endDateElement.value);
    const timeDiff = Math.abs(endDate - startDate);

    // calculate the number of days/hours/minutes/seconds based on the selected count in option
    const countInElement = document.querySelector('input[name="count-in"]:checked');
    let countIn;

    switch (countInElement.id) {
        case 'days':
            countIn = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            countInFormatElement.textContent = 'days';
            break;
        case 'hours':
            countIn = Math.ceil(timeDiff / (1000 * 60 * 60));
            countInFormatElement.textContent = 'hours';
            break;
        case 'minutes':
            countIn = Math.ceil(timeDiff / (1000 * 60));
            countInFormatElement.textContent = 'minutes';
            break;
        case 'seconds':
            countIn = Math.ceil(timeDiff / 1000);
            countInFormatElement.textContent = 'seconds';
            break;
        default:
            break;
    }
    

    // calculate the number of working days/weekends based on the selected type of days option

    const typeOfDaysElement = document.querySelector('input[name="type-of-days"]:checked');
    let totalDays;

    if (typeOfDaysElement.id === 'all') {
        totalDays = countIn;
    } else if (typeOfDaysElement.id === 'workDays') {
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
    } else if (typeOfDaysElement.id === 'weekends') {
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


const allRadio = document.getElementById('all');
const workDaysRadio = document.getElementById('workDays');
const weekendsRadio = document.getElementById('weekends');
const typeDaysResult = document.getElementById('typeDaysResult');

allRadio.addEventListener('click', updateTypeDaysResult);
workDaysRadio.addEventListener('click', updateTypeDaysResult);
weekendsRadio.addEventListener('click', updateTypeDaysResult);

function updateTypeDaysResult() {

    if (allRadio.checked) {
        typeDaysResult.textContent = '(All Days)';
    } else if (workDaysRadio.checked) {
        typeDaysResult.textContent = '(Work Days Only)';
    } else if (weekendsRadio.checked) {
        typeDaysResult.textContent = '(Weekends Only)';
    }
}



//Disable button

const typeOfDaysRadioButtons = document.getElementsByName("type-of-days");

// Disable the Calculate button initially
calculateButton.disabled = true;

// Add an event listener to the form that checks whether the required fields have been filled out
const form = document.querySelector(".popup__form");
form.addEventListener("input", function () {
    // Check if the Start Date and End Date fields have values
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;
    const typeOfDaysSelected = [...typeOfDaysRadioButtons].some(button => button.checked);

    // Enable the Calculate button if the required fields have values, otherwise disable it
    if (startDate && endDate && typeOfDaysSelected) {
        calculateButton.disabled = false;
    } else {
        calculateButton.disabled = true;
    }
});





//LocalStorage
function displayResultsTable() {
    const resultsTableBody = document.getElementById('resultsTableBody');
    resultsTableBody.innerHTML = ''; // Clear the table body before populating with new results

    const results = getResultsFromLocalStorage();

    console.log('Results:', results); // Debugging statement

    for (let i = results.length - 1; i >= 0; i--) {
        const result = results[i];
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${result.startDate}</td>
      <td>${result.endDate}</td>
      <td>${result.typeOfDays}</td>
      <td>${result.result}</td>
      <td>${result.calculationTime}</td>
    `;
        resultsTableBody.appendChild(row);
    }
}

function getResultsFromLocalStorage() {
    const resultsJSON = localStorage.getItem('results');
    const results = resultsJSON ? JSON.parse(resultsJSON) : [];

    console.log('Retrieved Results:', results); // Debugging statement

    return results;
}

function saveResultToLocalStorage(result) {
    const results = getResultsFromLocalStorage();
    results.push(result);

    if (results.length > 10) {
        results.shift(); // Remove the oldest result if there are more than 10 results
    }

    console.log('Updated Results:', results); // Debugging statement

    localStorage.setItem('results', JSON.stringify(results));
}

calculateButton.addEventListener('click', () => {
    // ...

    const typeOfDaysElement = document.querySelector('input[name="type-of-days"]:checked');

    // Save the result and calculation time to localStorage
    const result = {
        startDate: startDateElement.value,
        endDate: endDateElement.value,
        typeOfDays: typeOfDaysElement.value,
        result: resultElement.innerText,
        calculationTime: new Date().toLocaleString()
    };
    saveResultToLocalStorage(result);

    // Update the results table
    displayResultsTable();
});
