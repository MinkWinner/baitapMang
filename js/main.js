var array = [];

function themso(arr, getId, pushId) {
  var arrVal = Number(document.getElementById(getId).value);
  arr.push(arrVal);
  document.getElementById(pushId).innerHTML = hienthi(arr);
}

document.getElementById("pushMain").onclick = function () {
  themso(array, "inputMain", "txtArray");
};

function hienthi(arr) {
  var str = "";
  for (var i = 0; i < arr.length; i++) {
    if (i == 0) str = arr[i];
    else str += "," + arr[i];
  }
  return str;
}

function tinhSumPos() {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) sum += array[i];
  }
  document.getElementById("txt1").innerHTML = `Tổng số là: ${sum}`;
}

function countSumPos() {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) count++;
  }
  document.getElementById("txt2").innerHTML = `Số dương: ${count}`;
}

function min() {
  var min = "";
  for (var i = 0; i < array.length; i++) {
    if (min == "") min = array[i];
    min = Math.min(min, array[i]);
  }
  document.getElementById("txt3").innerHTML = `Số nhỏ nhất: ${min}`;
}

function minPos() {
  var tempArr = [];
  var size = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      tempArr[size] = array[i];
      size++;
    }
  }
  var min = tempArr[0];
  for (var i = 1; i < tempArr.length; i++) {
    min = Math.min(min, tempArr[i]);
  }
  document.getElementById("txt4").innerHTML = `Số dương nhỏ nhất: ${min}`;
}

function lastOdd() {
  var lastodd = 0;
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 == 0) {
      lastodd = array[i];
      break;
    }
  }
  document.getElementById("txt5").innerHTML = `Số chẵn cuối cùng: ${lastodd}`;
}

function swap() {
  var n1 = document.querySelector("#swapInput1").value;
  var n2 = document.querySelector("#swapInput2").value;
  var temp = 0;
  temp = array[n1];
  array[n1] = array[n2];
  array[n2] = temp;

  document.getElementById("txt6").innerHTML = `Mãng sau khi đổi: ${hienthi(
    array
  )}`;
}

function ascending() {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  document.getElementById("txt7").innerHTML = `Mãng sau khi đổi: ${hienthi(
    array
  )}`;
}

function isPrimeNum(x) {
  for (var i = x - 1; i > 1; i--) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
}

function findFirstPrimeNum() {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      if (isPrimeNum(array[i])) {
        document.getElementById("txt8").innerHTML = array[i];
        return;
      }
    }
  }
  document.getElementById("txt8").innerHTML =
    "Không tìm thấy số nguyên tố trong mãng";
}

var newArr = [];
document.getElementById("pushNewArr").onclick = function () {
  themso(newArr, "NewArrayInput", "txtnewArr");
};

function countInt() {
  var count = 0;
  for (var i = 0; i < newArr.length; i++) {
    if (Number.isInteger(newArr[i])) count++;
  }
  document.getElementById("txt9").innerHTML = `Số nguyên: ${count}`;
}

function compare() {
  var pos = 0;
  var neg = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) pos++;
    else if (array[i] < 0) neg++;
  }
  var comp = document.getElementById("txt10");
  if (pos > neg) comp.innerHTML = "Số dương > Số âm";
  else if (pos < neg) comp.innerHTML = "Số âm > Số dương";
  else comp.innerHTML = "Số dương = Số âm";
}

document.getElementById("btn1").onclick = tinhSumPos;
document.getElementById("btn2").onclick = countSumPos;
document.getElementById("btn3").onclick = min;
document.getElementById("btn4").onclick = minPos;
document.getElementById("btn5").onclick = lastOdd;
document.getElementById("btn6").onclick = swap;
document.getElementById("btn7").onclick = ascending;
document.getElementById("btn8").onclick = findFirstPrimeNum;
document.getElementById("btn9").onclick = countInt;
document.getElementById("btn10").onclick = compare;
