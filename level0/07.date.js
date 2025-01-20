let myDate = new Date()
console.log(myDate.toString()); //returns real-time data along with day-date-time-gmt
console.log(myDate.toLocaleTimeString()); //returns data with only time
console.log(myDate.toLocaleString()); //returns data with both date and time
console.log(myDate.toLocaleDateString()); //returns only date
console.log(myDate.toJSON()); //messy appearance with date,time and gmt
console.log(myDate.toISOString()); //same as JSON
console.log(myDate.toDateString()); //returns day(in words) & date 

console.log(typeof myDate); //object type

let myCretedDate = new Date(2025, 1, 3)
console.log(myCretedDate.toDateString()); //returns value as (day) feb 03 2025

// let myCretedDate = new Date("2-3-2190")
console.log(myCretedDate.toLocaleString()); //returns value as 2/3/2190 12:00:00 AM 

let myTime = Date.now()
console.log(myTime); //returns time as miliseconds in unorganized way
console.log(myCretedDate.getTime()); //returns time from defined date-month-year

console.log(Math.floor(Date.now()/1000)); //returns time in seconds

let newDate = new Date()
console.log(newDate); //returns real time value of date,time and gmt
console.log(newDate.getMonth() + 1); //returns the month in number format and +1 here, used for user readability
console.log(newDate.getDate()); //returns only date

// `$(newDate.getDay()) and the time`

newDate.toLocaleString('default', {
    weekday: "long"
})