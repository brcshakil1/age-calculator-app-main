let inputYear = document.getElementById('year');
let inputMonth = document.getElementById('month');
let inputDay = document.getElementById('day');
const submitBtn = document.querySelector('.calculate-btn');
const titles = document.querySelectorAll('.red-title');

const errorYear = document.querySelector('.error-year');
const errorMonth = document.querySelector('.error-month');
const errorDay = document.querySelector('.error-day');

const resultYear = document.querySelector('.result-year');
const resultMonth = document.querySelector('.result-month');
const resultDay = document.querySelector('.result-day');


const dayErrMsg = 'Must be a valid day';
const monthErrMsg = 'Must be a valid month';
const yearErrMsg = 'Must be in the past';
let emptyErrMsg = 'This is field is required';

submitBtn.addEventListener('click', getAge) 

function getAge() {
    const getYears = inputYear.value;
    const getMonths = inputMonth.value ;
    const getDays = inputDay.value;
    let birth = new Date(getYears, getMonths - 1, getDays).getTime();

    let date = new Date();
    let today = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
        ).getTime();
    
    const diff = today - birth;

    const age = diff / (1000* 60* 60* 24* 365);

    calcAge(age, getYears);
    checkDays(getDays);
    checkMonths(getMonths);
    checkYears(getYears);
}

function calcAge(age, yr) {
    const years = Math.floor(age);
    const remainingYears = age - years; 

    const diffMonth = remainingYears * 12;
    const months = Math.floor(diffMonth);
    const remainingMonths = diffMonth - months;
    
    const days = Math.floor(remainingMonths * 30);

    if(yr <= new Date().getFullYear()) {
        resultYear.innerText = years;
        resultMonth.innerText = months;
        resultDay.innerText = days;
    }

}

function checkDays(days) {
    if(days == '') {
        errorDay.innerText = emptyErrMsg;
        titles[0].style.color = 'hsl(0, 100%, 67%)';
        return false
    }
    
    else if( days < 1 || days > 31) {
        errorDay.innerText = dayErrMsg; 
        titles[0].style.color = 'hsl(0, 100%, 67%)';
        resultYear.innerText = '--';
        resultMonth.innerText = '--';
        resultDay.innerText = '--';
        return false
    }
    
    else {
        errorDay.innerText = '';
        titles[0].style.color = '';
        return true
    }
}

function checkMonths(months) {
    if(months == '') {
        errorMonth.textContent = emptyErrMsg;
        titles[1].style.color = 'hsl(0, 100%, 67%)';
        return false
    }
    
    if( months < 1 || months > 12) {
        errorMonth.innerText = monthErrMsg; 
        titles[1].style.color = 'hsl(0, 100%, 67%)';
        resultYear.innerText = '--';
        resultMonth.innerText = '--';
        resultDay.innerText = '--';;
        return false
    }
    
    else {
        errorMonth.innerText = '';
        titles[1].style.color = '';
        return true
    }
}

function checkYears(years) {
    if(years == '') {
        errorYear.textContent = emptyErrMsg
        titles[2].style.color = 'hsl(0, 100%, 67%)';
        return false;
    }

    if(years > new Date().getFullYear()) {
        errorYear.textContent = yearErrMsg;
        titles[2].style.color = 'hsl(0, 100%, 67%)';
        resultYear.innerText = '--';
        resultMonth.innerText = '--';
        resultDay.innerText = '--';
        return false;
    }

    else {
        errorYear.textContent = '';
        titles[2].style.color = '';
        return true;
    }
}