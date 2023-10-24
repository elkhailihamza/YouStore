let removeCard = document.getElementsByClassName('remove');
let cardParent = document.getElementsByClassName('removeParent');

let quantity = document.getElementsByClassName('quantity');
let plus = document.getElementsByClassName('plus');
let minus = document.getElementsByClassName('minus');

let listNumber = document.getElementById('list_number');
let subTotal = document.getElementById('total');
let total = 75;
let listNum = cardParent.length;

let price = [20.00, 25.00, 30.00];

listNumber.innerHTML = listNum;

for (let i = 0; i < cardParent.length; i++) {
    plus[i].addEventListener('click', function () {
        if (quantity[i].value < 99) {
            quantity[i].value++;

            total += price[i];
            subTotal.innerHTML = total;
        }
    })
    minus[i].addEventListener('click', function () {
        if (quantity[i].value > 1) {
            quantity[i].value--;

            total -= price[i];
            subTotal.innerHTML = total;
        }
    })
}

for (let i = 0; i < cardParent.length; i++) {
    removeCard[i].addEventListener('click', function () {
        cardParent[i].style.display = 'none';

        let temp = quantity[i].value;
        temp *= price[i];
        total -= temp;

        subTotal.innerHTML = total;
        listNum--;
        listNumber.innerHTML = listNum;

        removeCard[i].removeEventListener('click');
    })
}