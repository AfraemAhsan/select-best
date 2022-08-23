// // const buttonName = document.getElementById("addto-list");

// // this.addEventListener("click", function () {
// //   const playerName = document.getElementById("player-name");
// //   const playerInfo = playerName.innerText;
// //   console.log(playerInfo);
// //   const selecTion = document.getElementById("selection");
// //   const ol = document.createElement("ol");
// //   const olshow = selecTion.appendChild(ol);
// //   ol.style.color = "white";
// //   const li = document.createElement("li");
// //   const liShow = ol.appendChild(li);
// //   li.style.color = "white";
// //   liShow.innerText = playerInfo;
// //   buttonName.setAttribute("disabled", "");
// //   buttonName.style.backgroundColor = "gray";
// // });

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
