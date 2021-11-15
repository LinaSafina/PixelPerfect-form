let num1 = prompt("Введите первое число").trim();
if (!num1) {
  console.log("Первое число не указано");
} else if (isNaN(num1)) {
  console.log("Некорректный ввод чисел");
} else {
  const sign = prompt("Введите знак операции").trim();
  if (!sign) {
    console.log("Не введён знак");
  } else if (sign !== "+" && sign !== "-" && sign !== "/" && sign !== "*") {
    console.log("Программа не поддерживает такую операцию");
  } else {
    let num2 = prompt("Введите второе число").trim();
    if (!num2) {
      console.log("Второе число не указано");
    } else if (isNaN(num2)) {
      console.log("Некорректный ввод чисел");
    } else {
      num1 = +num1;
      num2 = +num2;
      switch (sign) {
        case "+":
          console.log(num1 + num2);
          break;
        case "-":
          console.log(num1 - num2);
          break;
        case "/":
          console.log(num1 / num2);
          break;
        case "*":
          console.log(num1 * num2);
          break;
      }
    }
  }
}
