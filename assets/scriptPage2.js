function calculateTotalPrice(quantity = 2, price = 15000000) {
  // quantity - количество единиц товара
  // price - цена за единицу товара
  quantity = prompt("Какое количество единиц товара?"); //prompt возвращает строку
  price = prompt("Какая цена за единицу товара?");
  quantity = Number(quantity);
  // console.log(` ${quantity} - это ` + typeof quantity);
  price = Number(price);
  // console.log(` ${price} - это ` + typeof price);
  let totalCost = quantity * price;
  totalCost = totalCost.toLocaleString("ru-RU");
  // let totalCost = Number(quantity) * Number(price);
  console.log(`Стоимость покупки: ${totalCost} рублей`);
  alert(`Стоимость покупки: ${totalCost} рублей`);
}
