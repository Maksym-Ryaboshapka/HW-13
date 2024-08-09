// Task 1 from 11

const bankAccount = {
  ownerName: "Maksym",
  accountNumber: 1,
  balance: 580,

  deposit() {
    let quantityOfMoney;

    do {
      quantityOfMoney = Number(prompt("Введіть на скільки поповнити рахунок"));

      if (isNaN(quantityOfMoney)) {
        alert("Ви введли не число!");
      } else if (quantityOfMoney <= 0) {
        alert("Ви не можете поповнити рахунок на число менше або рівне нулю!");
      } else {
        this.balance += quantityOfMoney;

        alert(
          `Рахунок успішно попвнено на ${quantityOfMoney}грн, тепер у вас на рахунку ${this.balance}грн`
        );
      }
    } while (quantityOfMoney <= 0 || isNaN(quantityOfMoney));

    return this.balance;
  },

  withdraw() {
    let quantityOfMoney;

    do {
      quantityOfMoney = Number(prompt("Введіть скільки грошей потрібно зняти"));

      if (isNaN(quantityOfMoney)) {
        alert("Ви введли не число!");
      } else if (quantityOfMoney <= 0) {
        alert("Ви не можете зняти кількість грошей яка менша або рівна нулю!");
      } else if (quantityOfMoney > this.balance) {
        alert("Ви не можете зняти більше грошей ніж на вашому рахунку!");
      } else {
        this.balance -= quantityOfMoney;

        alert(
          `З вашого рахунку знято ${quantityOfMoney}грн, тепер у вас на рахунку ${this.balance}грн`
        );
      }
    } while (
      quantityOfMoney <= 0 ||
      isNaN(quantityOfMoney) ||
      quantityOfMoney > this.balance
    );

    return this.balance;
  },

  chooseOperation() {
    let choice;

    do {
      choice = prompt(
        `Оберіть операцию яку хочете виконати\nВведіть "поповнити" щоб поповнити рахунок\nВведіть "зняти" щоб зняти гроші з рахунку\nНа вашому рахунку ${this.balance}грн`
      ).toLowerCase();

      if (choice === "поповнити") {
        break;
      } else if (choice === "зняти") {
        break;
      } else {
        alert("Ви обрали невірну операцію");
      }
    } while (choice !== "поповнити" || choice !== "зняти");

    return choice;
  },
};

const { ownerName, accountNumber, balance } = bankAccount;

const operation = bankAccount.chooseOperation();

if (operation === "поповнити") {
  bankAccount.deposit();
} else {
  bankAccount.withdraw();
}

// Task 2 from 11

let temperature;

do {
  temperature = prompt("Введіть температуру");

  if (temperature !== null) {
    temperature = Number(temperature);

    if (isNaN(temperature)) {
      alert("Ви ввели не число!");
    }
  } else {
    alert("Ви ввели не число!");
  }
} while (isNaN(temperature) || temperature === null);

console.log(temperature);

const weather = {
  temperature,
  humidity: 45,
  windSpeed: 7,

  checkTemperature() {
    let isTemperatureNegative;

    if (this.temperature >= 0) {
      isTemperatureNegative = false;
    } else {
      isTemperatureNegative = true;
    }

    return isTemperatureNegative;
  },

  showMessage(callback) {
    let message;

    if (callback === true) {
      message = "Температура нижче 0";
    } else {
      message = "Температура вище або рівна 0";
    }

    return alert(message);
  },
};

const {temperature: weatherTemperature, humidity, windSpeed} = weather;

weather.showMessage(weather.checkTemperature());

// Task 3 from 11

const user1 = {
  name: "Test",
  email: "test@gmail.com",
  password: "qwerty123",

  login(email, password) {
    let message;

    if (email !== this.email || password !== this.password) {
      message = "Пошта або пароль не вірні! Спробуйте ще раз";
    } else {
      message = "Ви успішно увійшли в аккаунт";
    }

    return alert(message);
  },
};

const {name, email: userEmail, password: userPassword} = user1;

const email = prompt("Введіть пошту від аккаунта");
const password = prompt("Введіть пароль від аккаунта");

user.login(email, password);

// Task 4 from 11

const movie = {
  title: "Name of movie",
  director: "Vasya",
  year: 2005,
  rating: 8,

  checkRating() {
    let message;

    if (this.rating <= 8) {
      message = "Рейтинг фільму менший або рівний 8";
    } else {
      message = "Рейтинг фільму більший за 8";
    }

    return alert(message);
  }
};

const {title, director, year, rating} = movie;

movie.checkRating();

// Task 1 from 12

const user2 = {
  hobby: "football",
  premium: false,
};

const {hobby, premium} = user2;

user2.mood = "happy";
hobby = "skydiving";
premium = false;

const userKeys = Object.keys(user2);

for (const key of userKeys) {
	console.log(`${key}: ${user2[key]}`);
}

// Task 2 from 12

const countProps = (obj) => {
	const objEntries = Object.entries(obj);

  return objEntries.length;
};

const testObj = {
  x: 1,
  y: 2,
  z: 3,
};

const {x, y, z} = testObj;

console.log(countProps(testObj));

// Task 3 from 12

const findBestEmployee = (employees) => {
  const employeeTasks = Object.values(employees);
  const maxTasks = Math.max(...employeeTasks);
  const employeesEntries = Object.entries(employees);

  let message;

  for (const employee of employeesEntries) {
    if (employee[1] === maxTasks) {
      message = `${employee[0]}: ${employee[1]}`;
    }
  }

  return message;
};

const employees = {
  john: 16,
  bob: 11,
  mark: 15,
};

const {john: john1, bob: bob1, mark: mark1} = employees;

console.log(findBestEmployee(employees));

// Task 4 from 12

const countTotalSalary = (employees) => {
  const employeesValues = Object.values(employees);
  let totalSalary = 0;

  for (const employee of employeesValues) {
    totalSalary += employee;
  }

  return totalSalary;
};

const employeesSalary = {
  john: 13000,
  bob: 10000,
  mark: 11500,
};

const {john: john2, bob: bob2, mark: makr2} = employeesSalary

console.log(countTotalSalary(employeesSalary));

// Task 5 from 12

const getAllPropValues = (arr, prop) => {
  const arrOfAllPropValues = [];

  for (const item of arr) {
    arrOfAllPropValues.push(item[prop]);
  }

  return arrOfAllPropValues;
};

const arrOfObj = [
  {
    x: 1,
    y: 2,
    z: 3,
  },
  {
    x: 8,
    y: 7,
    z: 6,
  },
  {
    x: 5,
    y: 9,
    z: 1,
  },
];

const [
  {x: x1, y: y1, z: z1},
  {x: x2, y: y2, z: z2},
  {x: x3, y: y3, z: z3},
] = arrOfObj

console.log(getAllPropValues(arrOfObj, "y"));

// Task 6 of 12

const calculateTotalPrice = (allProdcuts, productName) => {
  let totalProductPrice; 
 
  for (const item of allProdcuts) {
    if (item["name"] === productName) {
      totalProductPrice = item["price"] * item["kilograms"];
    }
  }

  return totalProductPrice;
};

const products = [
  {
    name: "груша",
    price: 60,
    kilograms: 4,
  },
  {
    name: "огірок",
    price: 45,
    kilograms: 2,
  },
  {
    name: "кавун",
    price: 80,
    kilograms: 1.5,
  },
];

const [
  {name: name1, price: price1, kilograms: kilograms1},
  {name: name2, price: price2, kilograms: kilograms2},
  {name: name3, price: price3, kilograms: kilograms3},
] = products

console.log(calculateTotalPrice(products, "груша"));
