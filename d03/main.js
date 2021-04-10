const carList = [
    {year: 2020, make: 'Ford', model: 'F-150'},
    {year: 2020, make: 'Ford', model: 'F-250'},
    {year: 2020, make: 'Ford', model: 'F-350'},
    {year: 2020, make: 'Ford', model: 'F-450'},
    {year: 2020, make: 'Ford', model: 'Explorer'},
    {year: 2021, make: 'Ford', model: 'F-150'},
    {year: 2021, make: 'Ford', model: 'F-250'},
    {year: 2021, make: 'Ford', model: 'F-350'},
    {year: 2021, make: 'Ford', model: 'F-450'},
    {year: 2021, make: 'Ford', model: 'Explorer'},
    {year: 2019, make: 'Ford', model: 'F-150'},
    {year: 2019, make: 'Ford', model: 'F-250'},
    {year: 2019, make: 'Ford', model: 'F-350'},
    {year: 2019, make: 'Ford', model: 'F-450'},
    {year: 2019, make: 'Ford', model: 'Explorer'},
    {year: 2018, make: 'Ford', model: 'F-150'},
    {year: 2018, make: 'Ford', model: 'F-250'},
    {year: 2018, make: 'Ford', model: 'F-350'},
    {year: 2018, make: 'Ford', model: 'F-450'},
    {year: 2018, make: 'Ford', model: 'Explorer'},
    {year: 2017, make: 'Ford', model: 'F-150'},
    {year: 2017, make: 'Ford', model: 'F-250'},
    {year: 2017, make: 'Ford', model: 'F-350'},
    {year: 2017, make: 'Ford', model: 'F-450'},
    {year: 2017, make: 'Ford', model: 'Explorer'},
    {year: 2016, make: 'Ford', model: 'F-150'},
    {year: 2016, make: 'Ford', model: 'F-250'},
    {year: 2016, make: 'Ford', model: 'F-350'},
    {year: 2016, make: 'Ford', model: 'F-450'},
    {year: 2016, make: 'Ford', model: 'Explorer'},
    {year: 2020, make: 'Honda', model: 'Accord'},
    {year: 2020, make: 'Honda', model: 'Civic'},
    {year: 2020, make: 'Honda', model: 'CRV'},
    {year: 2020, make: 'Honda', model: 'Odysee'},
    {year: 2020, make: 'Honda', model: 'Passport'},
    {year: 2021, make: 'Honda', model: 'Accord'},
    {year: 2021, make: 'Honda', model: 'Civic'},
    {year: 2021, make: 'Honda', model: 'CRV'},
    {year: 2021, make: 'Honda', model: 'Odysee'},
    {year: 2021, make: 'Honda', model: 'Passport'},
    {year: 2019, make: 'Honda', model: 'Accord'},
    {year: 2019, make: 'Honda', model: 'Civic'},
    {year: 2019, make: 'Honda', model: 'CRV'},
    {year: 2019, make: 'Honda', model: 'Odysee'},
    {year: 2019, make: 'Honda', model: 'Passport'},
    {year: 2018, make: 'Honda', model: 'Accord'},
    {year: 2018, make: 'Honda', model: 'Civic'},
    {year: 2018, make: 'Honda', model: 'Passport'},
    {year: 2018, make: 'Honda', model: 'Odysee'},
    {year: 2018, make: 'Honda', model: 'Passport'},
    {year: 2017, make: 'Honda', model: 'Accord'},
    {year: 2017, make: 'Honda', model: 'Civic'},
    {year: 2017, make: 'Honda', model: 'CRV'},
    {year: 2017, make: 'Honda', model: 'Odysee'},
    {year: 2017, make: 'Honda', model: 'Passport'},
    {year: 2016, make: 'Honda', model: 'Accord'},
    {year: 2016, make: 'Honda', model: 'Civic'},
    {year: 2016, make: 'Honda', model: 'CRV'},
    {year: 2016, make: 'Honda', model: 'Odysee'},
    {year: 2016, make: 'Honda', model: 'Passport'},
    {year: 2020, make: 'Toyota', model: 'Camry'},
    {year: 2020, make: 'Toyota', model: 'Corolla'},
    {year: 2020, make: 'Toyota', model: '4Runner'},
    {year: 2020, make: 'Toyota', model: 'Avalon'},
    {year: 2020, make: 'Toyota', model: 'Supra'},
    {year: 2021, make: 'Toyota', model: 'Camry'},
    {year: 2021, make: 'Toyota', model: 'Corolla'},
    {year: 2021, make: 'Toyota', model: '4Runner'},
    {year: 2021, make: 'Toyota', model: 'Avalon'},
    {year: 2021, make: 'Toyota', model: 'Supra'},
    {year: 2019, make: 'Toyota', model: 'Camry'},
    {year: 2019, make: 'Toyota', model: 'Corolla'},
    {year: 2019, make: 'Toyota', model: '4Runner'},
    {year: 2019, make: 'Toyota', model: 'Avalon'},
    {year: 2019, make: 'Toyota', model: 'Supra'},
    {year: 2018, make: 'Toyota', model: 'Camry'},
    {year: 2018, make: 'Toyota', model: 'Corolla'},
    {year: 2018, make: 'Toyota', model: '4Runner'},
    {year: 2018, make: 'Toyota', model: 'Avalon'},
    {year: 2018, make: 'Toyota', model: 'Supra'},
    {year: 2017, make: 'Toyota', model: 'Camry'},
    {year: 2017, make: 'Toyota', model: 'Corolla'},
    {year: 2017, make: 'Toyota', model: '4Runner'},
    {year: 2017, make: 'Toyota', model: 'Avalon'},
    {year: 2017, make: 'Toyota', model: 'Supra'},
    {year: 2016, make: 'Toyota', model: 'Camry'},
    {year: 2016, make: 'Toyota', model: 'Corolla'},
    {year: 2016, make: 'Toyota', model: '4Runner'},
    {year: 2016, make: 'Toyota', model: 'Avalon'},
    {year: 2016, make: 'Toyota', model: 'Supra'},
    {year: 2020, make: 'Hyundai', model: 'Venue'},
    {year: 2020, make: 'Hyundai', model: 'Kona'},
    {year: 2020, make: 'Hyundai', model: 'Tucson'},
    {year: 2020, make: 'Hyundai', model: 'Palisade'},
    {year: 2020, make: 'Hyundai', model: 'Accent'},
    {year: 2021, make: 'Hyundai', model: 'Venue'},
    {year: 2021, make: 'Hyundai', model: 'Kona'},
    {year: 2021, make: 'Hyundai', model: 'Tucson'},
    {year: 2021, make: 'Hyundai', model: 'Palisade'},
    {year: 2021, make: 'Hyundai', model: 'Accent'},
    {year: 2019, make: 'Hyundai', model: 'Venue'},
    {year: 2019, make: 'Hyundai', model: 'Kona'},
    {year: 2019, make: 'Hyundai', model: 'Tucson'},
    {year: 2019, make: 'Hyundai', model: 'Palisade'},
    {year: 2019, make: 'Hyundai', model: 'Accent'},
    {year: 2018, make: 'Hyundai', model: 'Venue'},
    {year: 2018, make: 'Hyundai', model: 'Kona'},
    {year: 2018, make: 'Hyundai', model: 'Tucson'},
    {year: 2018, make: 'Hyundai', model: 'Palisade'},
    {year: 2018, make: 'Hyundai', model: 'Accent'},
    {year: 2017, make: 'Hyundai', model: 'Venue'},
    {year: 2017, make: 'Hyundai', model: 'Kona'},
    {year: 2017, make: 'Hyundai', model: 'Tucson'},
    {year: 2017, make: 'Hyundai', model: 'Palisade'},
    {year: 2017, make: 'Hyundai', model: 'Accent'},
    {year: 2016, make: 'Hyundai', model: 'Venue'},
    {year: 2016, make: 'Hyundai', model: 'Kona'},
    {year: 2016, make: 'Hyundai', model: 'Tucson'},
    {year: 2016, make: 'Hyundai', model: 'Palisade'},
    {year: 2016, make: 'Hyundai', model: 'Accent'},
    {year: 2020, make: 'BMW', model: 'X5'},
    {year: 2020, make: 'BMW', model: 'X2'},
    {year: 2020, make: 'BMW', model: 'X6'},
    {year: 2020, make: 'BMW', model: 'X7'},
    {year: 2020, make: 'BMW', model: 'Z4'},
    {year: 2021, make: 'BMW', model: 'X5'},
    {year: 2021, make: 'BMW', model: 'X2'},
    {year: 2021, make: 'BMW', model: 'X6'},
    {year: 2021, make: 'BMW', model: 'X7'},
    {year: 2021, make: 'BMW', model: 'Z5'},
    {year: 2019, make: 'BMW', model: 'X5'},
    {year: 2019, make: 'BMW', model: 'X2'},
    {year: 2019, make: 'BMW', model: 'X6'},
    {year: 2019, make: 'BMW', model: 'X7'},
    {year: 2019, make: 'BMW', model: 'Z3'},
    {year: 2018, make: 'BMW', model: 'X5'},
    {year: 2018, make: 'BMW', model: 'X2'},
    {year: 2018, make: 'BMW', model: 'X6'},
    {year: 2018, make: 'BMW', model: 'X7'},
    {year: 2018, make: 'BMW', model: 'Z2'},
    {year: 2017, make: 'BMW', model: 'X5'},
    {year: 2017, make: 'BMW', model: 'X2'},
    {year: 2017, make: 'BMW', model: 'X6'},
    {year: 2017, make: 'BMW', model: 'X7'},
    {year: 2017, make: 'BMW', model: 'Z1'},
    {year: 2016, make: 'BMW', model: 'X5'},
    {year: 2016, make: 'BMW', model: 'X2'},
    {year: 2016, make: 'BMW', model: 'X6'},
    {year: 2016, make: 'BMW', model: 'X7'},
    {year: 2016, make: 'BMW', model: 'Z'},
    {year: 1962, make: 'Alfa Romeo', model: 'Sprint Speciale'},
    {year: 1967, make: 'Chevy', model: 'Camaro'},
    {year: 1925, make: 'Packard', model: 'Phaeton Convertible'},
]

// function to get a unique list of values from an array
function getUniqueList(data, filterValue) {
    uniqueList = new Set();
    data.forEach(item => {
        uniqueList.add(item[filterValue]);
    })
    return uniqueList;
}

// function to populate a dropdown element
function populateDropDown(valueList, element) {
    selectElement = document.getElementById(element)

    valueList.forEach(item => {
        // create a new select option for each value in the list
        // set the value of that new select option
        // append the option to its parent element, the select
        option = document.createElement('option');
        option.textContent = item;
        selectElement.appendChild(option);
    })
}

// First dropdown, vehicle years
function populateFirstDropDown() {
    const ddlYears = getUniqueList(carList, 'make');

    populateDropDown(ddlYears, 'vehicleMake');
}

// Second dropdown, vehicle makes
function populateSecondDropDown() {
    document.getElementById('vehicleModel').innerHTML = "";

    const selectedMake = document.getElementById('vehicleMake').value;

    const filteredModelsByMake = carList.filter(item => {
        return item.make === selectedMake;
    })

    const ddlModels = getUniqueList(filteredModelsByMake, 'model')
    populateDropDown(ddlModels, 'vehicleModel');
}

// Call this function when the DOM Content renders to initialize the dropdowns
function setInitialDropDowns() {
    populateFirstDropDown();
    populateSecondDropDown();
}

document.addEventListener('DOMContentLoaded', setInitialDropDowns);

document.getElementById('vehicleMake').addEventListener('change', populateSecondDropDown);