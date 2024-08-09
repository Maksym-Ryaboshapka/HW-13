const account = {
  name: "User",
  balance: 1500,
  transactionHistory: [
    {
      place: "АТБ",
      sum: 540,
      date: "09.08.24",
    },
    {
      place: "Епіцентр",
      sum: 1200,
      date: "06.08.24",
    },
    {
      place: "Розетка",
      sum: 300,
      date: "05.08.24",
    },
    {
      place: "Поповнення",
      sum: 120,
      date: "03.08.24",
    },
    {
      place: "Сільпо",
      sum: 60,
      date: "31.07.24",
    },
  ],

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

  showTransactionHistory() {
    const places = [];
    const sums = [];
    const dates = [];

    for (const item of this.transactionHistory) {
      for (const key in item) {
        if (key === "place") {
          places.push(item[key]);
        } else if (key === "sum") {
          sums.push(item[key]);
        } else {
          dates.push(item[key]);
        }
      }
    }

    const message = alert(`${places[0]} >> ${sums[0]}грн ${dates[0]}\n${places[1]} >> ${sums[1]}грн ${dates[1]}\n${places[2]} >> ${sums[2]}грн ${dates[2]}\n${places[3]} >> ${sums[3]}грн ${dates[3]}\n${places[4]} >> ${sums[4]}грн ${dates[4]}`);

    return message;
  },

  chooseOperation() {
    let choice;

    do {
      choice = prompt(
        `Оберіть операцию яку хочете виконати\nВведіть "поповнити" щоб поповнити рахунок\nВведіть "зняти" щоб зняти гроші з рахунку\nВведіть "історія транзакцій" щоб подивитьсь історію транзакцій\nНа вашому рахунку ${this.balance}грн`
      ).toLowerCase();

      if (choice === "поповнити") {
        break;
      } else if (choice === "зняти") {
        break;
      } else if (choice === "історія транзакцій") {
        break
      } else {
        alert("Ви обрали невірну операцію");
      }
    } while (choice !== "поповнити" || choice !== "зняти", choice !== "історія транзакцій");

    return choice;
  },
};

const operation = account.chooseOperation();

if (operation === "поповнити") {
  account.deposit();
} else if (operation === "зняти") {
  account.withdraw();
} else if (operation === "історія транзакцій") {
  account.showTransactionHistory();
}
