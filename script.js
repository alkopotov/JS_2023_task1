let arrayRandom = [];
for (let i = 1; i <=30; i++) {
  arrayRandom.push(getNumber(0, 99))
}
const setRow = function (array) {
  let row = '<tr>'
  for (i in array) {
    if (array[i] >= 50) {
      cl = 'orange';
    } else cl = 'black'
    row += `<td class="${cl}">${array[i]}</td>`
  }
  row += '</tr>';
  return row;
}

const setTable = function(array, row = 5, col = 6) {
  let str = '';
  for (j = 0; j < row; j++) {
    str += setRow(array.slice(j * col, (j + 1) * col))
  }
  // str += setRow(array.slice(0, 6))
  // str += setRow(array.slice(6, 12))
  // str += setRow(array.slice(12, 18))
  // str += setRow(array.slice(18, 24))
  // str += setRow(array.slice(24, 30))
  return str
}

table = document.firstElementChild.lastElementChild.firstElementChild.nextElementSibling;

// console.log(setRow([1, 4]))

table.innerHTML = setTable(arrayRandom);
// console.log(table.innerText)
// currentArr = table.innerText.split()
// console.log(currentArr);
// console.log(currentArr.length)

// let d = new RegExp('td')
// return table.innerHTML.match(d).length
const addElement = function() {
  a = getNumber(0, 99)
  if (a >= 50) {
    cl = "orange"
  } else cl = "black"
  if (arrayRandom.length % 6 == 0) {
    table.firstElementChild.innerHTML += `<tr><td class="${cl}">${a}</td></tr>`
  }  else {
    table.firstElementChild.lastElementChild.innerHTML += `<td class="${cl}">${a}</td>`
  }
  arrayRandom.push(a)
}