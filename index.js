/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(record) {
    return {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arr) {
    return arr.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(datestamp) {
    let [date, time] = datestamp.split(' ');
    
    this.timeInEvents.push({
        type: "TimeIn",
        date, 
        hour: parseInt(time)
    })

    return this;
}

function createTimeOutEvent(datestamp) {
    let [date, time] = datestamp.split(' ');

    this.timeOutEvents.push({
        type: "TimeOut",
        date, 
        hour: parseInt(time)
    })

    return this;
}

function hoursWorkedOnDate(date) {
    let endEvent = this.timeOutEvents.find(obj => obj.date === date);
    let startEvent = this.timeInEvents.find(obj => obj.date === date);

    return (endEvent.hour - startEvent.hour) / 100;
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

let allWagesFor = function () {
    let allDates = this.timeInEvents.map(e => e.date);

    let payable = allDates.reduce(function (total, date) {
        return total + wagesEarnedOnDate.call(this, date)
    }.bind(this), 0);

    return payable;
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}

function calculatePayroll(arr) {
    return arr.reduce(function(total, employee) {
        return total + allWagesFor.call(employee);
    }, 0);
}