let yourMoney;
let grn = " Грн";
function dayMoney() {

	while (isNaN(yourMoney) || yourMoney == "" || yourMoney == null ) {
		yourMoney = prompt("Введите Ваш бюджет (Грн) :", "2000");
	}
}

dayMoney();

let dayBudget;

function calcBudget() {


	dayBudget = alert('Ежедневный бюджет : ' + Math.round(yourMoney / 30) + grn);
	calcdayBudget = Math.round(yourMoney / 30);

}

calcBudget();

let yourTilteShop = prompt("Введите название Вашего магазина :", "Фенечная Лавка Бо");
let price;

let mainList = {
	Money: yourMoney + grn,
	title: yourTilteShop,
	Goods: [],
	employers: [],
	open: true,
	budget: calcdayBudget + grn,
	discount: false,
}



if (mainList.discount == false) {
	price = '100' + grn;
} else {
	price = yourMoney / 100 *80;
}

function Goods () {

	for (let i = 0; i < 3; i++) {
		let a = prompt("Какой тип товаров Вы будуте продавать?");

		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
			mainList.Goods[i] = a;
			console.log('Прекрасный выбор!');
		} else {
			i--;
		}
	}
}

Goods () ;

function employers () {
	for (let i = 0; i < 4; i++) {
		let name = prompt("Введите Имя Сотрудника");

		if ((typeof(name)) === 'string' && (typeof(name)) != null && name != '' && name.length < 50 ) {
			mainList.employers[i] = name;
			console.log('Все отлично, сотрудники будут с минуты на минуту !');
		} else {
			i--;
		}
	}
}

employers () ;

/* Второй способ вывода вопроса

let i = 0;

while (i<3) {
	
	let a = prompt("Какой тип товаров Вы будуте продавать?");
	mainList.Goods[i] = a;
	i++;
}


*/




/* Третий способ вывода вопроса 

let i = 0;

do {
	let a = prompt("Какой тип товаров Вы будуте продавать?");
	mainList.Goods[i] = a;	
	i++;
}

while (i<3);

*/

console.log(mainList);

