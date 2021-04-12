const carList = [
    ["Ford", "Mustang"],
    ["Ford", "Bronco"],
    ["Ford", "Explorer"],
    ["Ford", "Focus"],
    ["Toyota", "Corrolla"],
    ["Toyota", "4 Runner"],
    ["Toyota", "Camry"],
    ["Toyota", "Avalon"],
    ["Toyota", "Prius"],
    ["Mini Cooper", "Countryman"],
    ["Mini Cooper", "4 Door Sport"],
    ["Mini Cooper", "Clubman"],
    ["Mini Cooper", "Convertible Coupe"],
    ["BMW", "M3"],
    ["BMW", "X5"],
    ["BMW", "Series 3"],
    ["BMW", "Series 7"],
    ["Hyundai", "Accent"],
    ["Hyundai", "Elantra"],
    ["Nissan", "Maxima"],
    ["Nissan", "Pathfinder"],
    ["Nissan", "Murano"],
    ["Nissan", "Murano"],
]

// generic function to get a unique array of values from an array given an index
function getUniqueList(data, index) {
    const uniqueList = new Set();

    data.forEach(item => {
        uniqueList.add(item[index]);
    })
    return [...uniqueList];
}

// function to populate an existing HTML select element given a unique array of values
function makeDropDown(data, element) {
    const selectElement = document.getElementById(element);

    selectElement.innerHTML = "";

    data.forEach(item => {
        const option = document.createElement('option');
        option.innerText = item;
        selectElement.appendChild(option);
    })
}

// function that runs once when the DOM is loaded
function contentLoaded() {
    const uniqueList = getUniqueList(carList, 0);
    makeDropDown(uniqueList, 'vehicleMake');
    populateVehicleModels();
}

// function that gets called when the first dropdown is changed.
// It will populate the second, cascading dropdown.
function populateVehicleModels() {
    const vehicleMake = document.getElementById('vehicleMake').value;

    const filteredArray = carList.filter(item => {
        return item[0] === vehicleMake;
    })

    const uniqueList = getUniqueList(filteredArray, 1);

    makeDropDown(uniqueList, 'vehicleModel');
}

document.addEventListener('DOMContentLoaded', contentLoaded);
document.getElementById('vehicleMake').addEventListener('change', populateVehicleModels);