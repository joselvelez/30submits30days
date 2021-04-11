let valuesArray = [
    {name: 'bob', age: 21, sex: 'male'},
    {name: 'bill', age: 34, sex: 'male'},
    {name: 'beth', age: 18, sex: 'female'},
    {name: 'mary', age: 41, sex: 'female'},
  ]
  
  // generic function to get the index of an object within
  // an array given an array, object property and object property
  function getIndexOfObject(objArray, objProperty, objValue) {
    const index = objArray.findIndex( obj => {
      return obj[objProperty] === objValue;
    })
    return index;
  }
  
document.getElementById('bob').addEventListener('click', () => {
  pElement = document.getElementById('personDetails');

  personObject = valuesArray[getIndexOfObject(valuesArray, 'name', 'bob')];

  pElement.innerText = `You have selected ${personObject.name}, who is a ${personObject.sex} that is ${personObject.age} years old.`;
})

document.getElementById('bill').addEventListener('click', () => {
  pElement = document.getElementById('personDetails');

  personObject = valuesArray[getIndexOfObject(valuesArray, 'name', 'bill')];

  pElement.innerText = `You have selected ${personObject.name}, who is a ${personObject.sex} that is ${personObject.age} years old.`;
})

document.getElementById('beth').addEventListener('click', () => {
  pElement = document.getElementById('personDetails');

  personObject = valuesArray[getIndexOfObject(valuesArray, 'name', 'beth')];

  pElement.innerText = `You have selected ${personObject.name}, who is a ${personObject.sex} that is ${personObject.age} years old.`;
})

document.getElementById('mary').addEventListener('click', () => {
  pElement = document.getElementById('personDetails');

  personObject = valuesArray[getIndexOfObject(valuesArray, 'name', 'mary')];

  pElement.innerText = `You have selected ${personObject.name}, who is a ${personObject.sex} that is ${personObject.age} years old.`;
})