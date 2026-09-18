

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("enterNumber")
let meterFeet = document.getElementById("meterFeet")
let litersGallons = document.getElementById("litersGallons")
let kilogramsPounds = document.getElementById("kilogramsPounds")

const meterToFeet =  3.28084
const literToGallon =  0.264172
const kiloToPound =  2.20462

convertBtn.addEventListener("click", function() {
    let baseValue = Number(inputEl.value)
    meterFeet.innerHTML = `<p id="meterFeet"> ${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue/meterToFeet).toFixed(3)} meters </p>` 
    
    litersGallons.innerHTML = `<p id="litersGallons"> ${baseValue} Liters = ${(baseValue * literToGallon).toFixed(3)} Gallons | ${baseValue}  = ${(baseValue/literToGallon).toFixed(3)} liters </p>`
    
    kilogramsPounds.innerHTML = `<p id="kilogramsPounds"> ${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue/kiloToPound).toFixed(3)} kilos </p>`
})