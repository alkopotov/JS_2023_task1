let arrayRandom = [];
for (let i = 1; i <=30; i++) {
  arrayRandom.push(getNumber(0, 99))
}
const setRow = function (array) {
  let row = ''
  for (i in array) {
    if (array[i] >= 50) {
      cl = 'orange';
    } else cl = 'black'
    row += `<td class=${cl}> ${array[i]}</td>`
  }
  row = '<tr>' + row + '</tr>'
  return row;
}

const setTable = function(array) {
  let str = '';
  // for (i = 1; i <= 6; i ++) {
  //   a = (i - 1) * 6
  //   b = i * 6 
  //   str += setRow(array.slice(a, b))
  // }
  str += setRow(array.slice(0, 6))
  str += setRow(array.slice(6, 12))
  str += setRow(array.slice(12, 18))
  str += setRow(array.slice(18, 24))
  str += setRow(array.slice(24, 30))
  return str
}



table = document.firstElementChild.lastElementChild.firstElementChild.nextElementSibling;

// console.log(setRow([1, 4]))

table.innerHTML = setTable(arrayRandom);
console.log(table.innerText)
currentArr = table.innerText.split()
console.log(currentArr);
console.log(currentArr.length)

let d = new RegExp('td')
return table.innerHTML.match(d).length



