// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//return first two drivers

const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2)
}
//return kast two drivers
const returnLastTwoDrivers = function (drivers){
    return drivers.slice(2,4)
}
// selecting drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//create fare multiplier
const createFareMultiplier = function (){
    return function fareMultiplier(fare) {
        return Math.pow(fare, 2)
    }
}
const fareQuintupler = function (){
    return fareMultiplier()
}
fareQuintupler(createFareMultiplier)


//create fare doubler
function fareDoubler (fare) {
    return (fare * 2)
}
fareDoubler()

//fare trippler
function fareTripler (fare) {
    return fare*3
}
//selecting different drivers

function selectDifferentDrivers (drivers, funtion1){
    return funtion1(drivers)
}

