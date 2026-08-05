const loginBtn = document.querySelector(".login-btn");
const loginScreen = document.getElementById("loginScreen");
const dashboardScreen = document.getElementById("dashboardScreen");
const inputData = document.querySelectorAll(".pin-box input");
let balance = 50000;
const balanceDisplay = document.getElementById("balance-number");
const checkBalance = document.getElementById("check-balance-btn");
const withDraw = document.getElementById("withdraw-btn");
const recentTransactions = document.getElementById("recent-transaction");
const deposit = document.getElementById("deposit-btn");
let correctPin = "1234";
const changePin = document.getElementById("change-pin-btn");
const exit = document.getElementById("exit-btn");
const logout = document.querySelector(".log-out-btn");
const miniStatment = document.getElementById("statement-btn");
let transactions = [];
for (let i = 0; i < inputData.length - 1; i++) {
  inputData[i].addEventListener("input", () => {
    if (inputData[i].value !== "") {
      inputData[i + 1].focus();
    }
  });
}

const login = () => {
  let pin = "";
  let inputValues = [];
  for (let i = 0; i < inputData.length; i++) {
    inputValues.push(inputData[i].value);
  }
  pin = inputValues.join("");

  if (pin === correctPin) {
    loginScreen.style.display = "none";
    dashboardScreen.style.display = "block";

    balanceDisplay.textContent = balance.toLocaleString();
  } else {
    alert("wrong pin");
    inputData.forEach((input) => {
      input.value = "";
    });
    inputData[0].focus();
  }
};
loginBtn.addEventListener("click", login);
checkBalance.addEventListener("click", () => {
  alert("your balance is   " + balance.toLocaleString());
});
withDraw.addEventListener("click", () => {
  let amount = prompt("Enter the Amount");
  if (amount === null) {
    return;
  }
  if (Number(amount) > 0 && Number(amount) <= balance) {
    balance = balance - Number(amount);
    balanceDisplay.textContent = balance.toLocaleString();
    let now = new Date();
    let day = String(now.getDate()).padStart(2, "0");
    let month = String(now.getMonth() + 1).padStart(2, "0");
    let year = now.getFullYear();
    let hour = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let ampm = hour < 12 ? "AM" : "PM";
    let displayTime = hour % 12;
    if (displayTime === 0) {
      displayTime = 12;
    } else if (displayTime > 12) {
      displayTime = displayTime - 12;
    }
    let dateString = `${day}-${month}-${year} ${displayTime}:${minutes} ${ampm}`;
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
  <td>${dateString} </td>
  <td>Withdraw</td>
  <td><span class="negative">-${Number(amount).toLocaleString()} </span></td>
  <td>${balance.toLocaleString()}</td>
  <td><span class="status-success">Success</span></td>
  `;
    recentTransactions.prepend(newRow);
    let transactionObj = {
      date: dateString,
      type: "Withdraw",
      amount: amount,
      balance: balance,
      status: "Success",
    };
    transactions.push(transactionObj);
  } else {
    alert("insufficient amount");
  }
});

deposit.addEventListener("click", () => {
  let depositAmount = prompt("Enter deposit amount:");
  if (depositAmount === null) {
    return;
  }
  if (Number(depositAmount) > 0) {
    balance = balance + Number(depositAmount);
    balanceDisplay.textContent = balance.toLocaleString();

    let now = new Date();
    let day = String(now.getDate()).padStart(2, "0");
    let month = String(now.getMonth() + 1).padStart(2, "0");
    let year = now.getFullYear();
    let hour = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let ampm = hour < 12 ? "AM" : "PM";
    let displayTime = hour % 12;
    if (displayTime === 0) {
      displayTime = 12;
    } else if (displayTime > 12) {
      displayTime = displayTime - 12;
    }
    let dateString = `${day}-${month}-${year} ${displayTime}:${minutes} ${ampm}`;
    let depositNewRow = document.createElement("tr");
    depositNewRow.innerHTML = `
  <td>${dateString} </td>
  <td>Deposit</td>
  <td><span class="positive">+${Number(depositAmount).toLocaleString()} </span></td>
  <td>${balance.toLocaleString()}</td>
  <td><span class="status-success">Success</span></td>
  `;
    recentTransactions.prepend(depositNewRow);
    let transactionObjDeposit = {
      date: dateString,
      type: "Deposit",
      amount: depositAmount,
      balance: balance,
      status: "Success",
    };
    transactions.push(transactionObjDeposit);
  } else {
    alert("invalid amount");
  }
});

changePin.addEventListener("click", () => {
  let oldPin = prompt("Enter your current Pin");
  if (oldPin === null) {
    return;
  }
  if (oldPin === correctPin) {
    let newPin = prompt("Enter New Pin");
    if (newPin === null) {
      return;
    }
    let confirmNewPin = prompt("Confirm Pin");
    if (confirmNewPin === null) {
      return;
    }
    if (newPin === confirmNewPin) {
      correctPin = newPin;
      alert("PIN changed successfully");
    } else {
      alert("Pin not matched");
    }
  } else {
    alert("wrong Pin");
  }
});
function returnToLogin() {
  loginScreen.style.display = "flex";
  dashboardScreen.style.display = "none";

  inputData.forEach((input) => {
    input.value = "";
  });
  inputData[0].focus();
}

exit.addEventListener("click", () => {
  if (confirm("Are you sure you want to exit?")) {
    returnToLogin();
  }
});
logout.addEventListener("click", returnToLogin);
miniStatment.addEventListener("click", () => {
  let message = "Recent Transactions:\n\n";
  for (let i = 0; i < transactions.length; i++) {
    message +=
      transactions[i].type +
      ": " +
      transactions[i].amount +
      " - " +
      transactions[i].date +
      " - " +
      transactions[i].status +
      "\n";
  }
  alert(message);
});
