let quantity = prompt("Какое количество единиц товара?");
let price = prompt("Какая цена за единицу товара?");

function calculateTotalPrice(quantity = 2, price = 15000000) {
  // quantity - количество единиц товара
  // price - цена за единицу товара
  //   let quantity = prompt("Какое количество единиц товара?"); //prompt возвращает строку
  //   let price = prompt("Какая цена за единицу товара?");
  quantity = Number(quantity);
  price = Number(price);
  let totalСost = quantity * price;
  totalСost = totalCost.toLocaleString("ru-RU");
  //   totalСost = Number(quantity) * Number(price);
  console.log(`Стоимость покупки: ${totalCost} рублей"`);
  alert(`Стоимость покупки: ${totalCost} рублей"`);
}
