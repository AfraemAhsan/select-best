// // function addtoCart(element) {
// //   const selectedNames = element.parentNode.children[1].children[0].innerText;
// //   const selection = document.getElementById("selection");

// //   const li = document.createElement("li");

// //   li.innerText = selectedNames;
// //   li.style.color = "white";

// //   selection.appendChild(li);
// //}

// const playerArray = [];
// function listNames(matchPlayer) {
//   console.log(playerArray);
// }
// function addtoCart(element) {
//   const selectedNames = element.parentNode.children[1].children[0].innerText;

//   const playerList = {
//     playerName: selectedNames,
//   };
//   playerArray.push(playerList);
//   listNames(playerArray);
// }
const playerCardBtn = document.querySelectorAll(".playerCardButton");
const selectePlayers = document.getElementById("selected-Players");
const playerCalculation = document.getElementById("player-Calculaiton");
const playerExpenses = document.getElementById("player-Expenses");

for (const cardbutton of playerCardBtn) {
  cardbutton.addEventListener("click", function (event) {
    event.target.setAttribute("disabled", "");
    event.target.style.backgroundColor = "white";
    event.target.style.color = "gray";
    const cartTitleNames =
      event.target.parentNode.children[1].children[0].innerText;

    const selectedPlayer = selectePlayers.childElementCount;
    console.log(selectedPlayer);
    if (selectedPlayer < 5) {
      selectePlayers.innerHTML += `<li class="selectedPlayer"> ${
        selectedPlayer + 1 + "."
      } ${cartTitleNames}</li>`;
    } else {
      alert("you  can choose only five players");
      return false;
    }
  });
}

playerCalculation.addEventListener("click", function (event) {
  const playerValue = document.getElementById("perPlayerValue").value;
  const valueInt = parseInt(playerValue);
  const totalPlayer = document.querySelectorAll(".selectedPlayer").length;

  if (totalPlayer === 0) {
    alert("select at least one player");
  } else if (Number.isNaN(valueInt)) {
    alert("please enter only number");
  } else {
    const playerExpensive = totalPlayer * valueInt;
    playerExpenses.innerText = playerExpensive;
  }
});

function calculateTotal(params) {
  const managerInput = document.getElementById("managerInput").value;
  const intValue = parseInt(managerInput);
  const coachInput = document.getElementById("coachInput").value;
  const intValueCoach = parseInt(coachInput);
  if (Number.isNaN(intValue) || Number.isNaN(intValueCoach)) {
    alert("give  valid number only");
  } else {
    const temporaryExpense = playerExpenses.innerText;
    const finalExpense = parseInt(temporaryExpense) + intValue + intValueCoach;
    document.getElementById("total-Expense").innerText = finalExpense;
  }
}
