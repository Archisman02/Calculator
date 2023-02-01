const keyboardBtn = document.querySelectorAll(".keyboard-btn");

let num1,
  num2,
  res,
  operand,
  num3,
  num4 = 0;

for (let i = 0; i < keyboardBtn.length; i++) {
  keyboardBtn[i].addEventListener("click", function () {
    // console.log(keyboardBtn[i].value);

    if (
      keyboardBtn[i].value !== "DEL" &&
      keyboardBtn[i].value !== "+" &&
      keyboardBtn[i].value !== "-" &&
      keyboardBtn[i].value !== "*" &&
      keyboardBtn[i].value !== "/" &&
      keyboardBtn[i].value !== "RESET" &&
      keyboardBtn[i].value !== "="
    ) {
      document.querySelector(".screen").textContent += keyboardBtn[i].value;
      document.querySelector(".screen").classList.add("text-color-white");
      document.querySelector(".screen").style.fontSize = "2rem";
    } else if (
      keyboardBtn[i].value == "+" ||
      keyboardBtn[i].value == "-" ||
      keyboardBtn[i].value == "*" ||
      keyboardBtn[i].value == "/"
    ) {
      num1 = document.querySelector(".screen").textContent;
      num3 = parseFloat(num1);
      console.log(typeof num3);
      console.log(num3);
      document.querySelector(".screen").textContent += " ";
      document.querySelector(".screen").textContent += keyboardBtn[i].value;
      document.querySelector(".screen").textContent += " ";
    } else if (keyboardBtn[i].value == "=") {
      num2 = document.querySelector(".screen").textContent;
      const ar1 = num2.split(" ");
      num2 = ar1[2];
      operand = ar1[1];
      num4 = parseFloat(num2);
      console.log(num4);
      //   console.log(operand);
      console.log(typeof num4);
      //   console.log(num3 + num4);
      switch (operand) {
        case "+":
          res = num3 + num4;
          break;
        case "-":
          res = num1 - num2;
          break;
        case "*":
          res = num1 * num2;
          break;
        case "/":
          res = num1 / num2;
          break;
        default:
          document.querySelector(".screen").textContent = "";
      }
      //   console.log(num3 + num4);
      num3 = res;
      num4 = 0;
      document.querySelector(".screen").textContent = "";
      document.querySelector(".screen").textContent = res;
    } else if (keyboardBtn[i].value == "DEL") {
      let newText = document.querySelector(".screen").textContent.slice(0, -1);
      document.querySelector(".screen").textContent = newText;
    } else {
      num1 = 0;
      num2 = 0;
      document.querySelector(".screen").textContent = "";
    }
  });
}

// Change Theme
const themeChanger = document.querySelectorAll(".button-1");

for (let i = 0; i < themeChanger.length; i++) {
  themeChanger[i].addEventListener("click", function () {
    // console.log(themeChanger[i].textContent);
    if (themeChanger[i].textContent == "1") {
      document.querySelector(".theme-changer-controller").style.justifyContent =
        "flex-start";
      document.querySelector(
        ".theme-changer-controller"
      ).style.backgroundColor = "hsl(223, 31%, 20%)";
      document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
      document.querySelector(".keypad-container-1").style.backgroundColor =
        "hsl(223, 31%, 20%)";
      document.querySelector(".screen").style.backgroundColor =
        "hsl(224, 36%, 15%)";
      document.querySelector(".theme-changer-button").style.backgroundColor =
        "hsl(6, 63%, 50%)";
      const keys = document.querySelectorAll(".keyboard-btn");
      for (let i = 0; i < keys.length; i++) {
        if (i == 3 || i == 16) {
          keys[i].style.backgroundColor = "hsl(225, 21%, 49%)";
          keys[i].style.boxShadow = "0 4px 0px hsl(224, 28%, 35%)";
          keys[i].style.color = "hsl(0, 0%, 100%)";
        } else if (i == 17) {
          keys[i].style.backgroundColor = "hsl(6, 63%, 50%)";
          keys[i].style.boxShadow = "0 4px 0px hsl(6, 70%, 34%)";
          keys[i].style.color = "hsl(0, 0%, 100%)";
        } else {
          keys[i].style.backgroundColor = "hsl(30, 25%, 89%)";
          keys[i].style.boxShadow = "0 4px 0px hsl(28, 16%, 65%)";
          keys[i].style.color = "hsl(224, 36%, 15%)";
        }
      }
      const themeChanger = document.querySelectorAll(".button-1");
      for (let i = 0; i < themeChanger.length; i++) {
        themeChanger[i].classList.remove("text-color-brown");
        themeChanger[i].classList.remove("text-color-yellow");
        themeChanger[i].classList.add("text-color-white");
      }

      document.querySelector(".calc").classList.remove("text-color-brown");
      document.querySelector(".calc").classList.remove("text-color-yellow");
      document.querySelector(".calc").classList.add("text-color-white");

      document
        .querySelector(".theme-text")
        .classList.remove("text-color-brown");
      document
        .querySelector(".theme-text")
        .classList.remove("text-color-remove");
      document.querySelector(".theme-text").classList.add("text-color-white");

      document.querySelector(".screen").classList.remove("text-color-brown");
      document.querySelector(".screen").classList.remove("text-color-yellow");
      document.querySelector(".screen").classList.add("text-color-white");
    } else if (themeChanger[i].textContent == "2") {
      document.querySelector(".theme-changer-controller").style.justifyContent =
        "center";
      document.querySelector(
        ".theme-changer-controller"
      ).style.backgroundColor = "hsl(0, 5%, 81%)";
      document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
      document.querySelector(".keypad-container-1").style.backgroundColor =
        "hsl(0, 5%, 81%)";
      document.querySelector(".screen").style.backgroundColor =
        "hsl(0, 0%, 93%)";
      document.querySelector(".theme-changer-button").style.backgroundColor =
        "hsl(25, 98%, 40%)";
      const keys = document.querySelectorAll(".keyboard-btn");
      for (let i = 0; i < keys.length; i++) {
        if (i == 3 || i == 16) {
          keys[i].style.backgroundColor = "hsl(185, 42%, 37%)";
          keys[i].style.boxShadow = "0 4px 0px hsl(185, 58%, 25%)";
          keys[i].style.color = "hsl(0, 0%, 100%)";
        } else if (i == 17) {
          keys[i].style.backgroundColor = "hsl(25, 98%, 40%)";
          keys[i].style.boxShadow = "0 4px 0px hsl(25, 99%, 27%)";
          keys[i].style.color = "hsl(0, 0%, 100%)";
        } else {
          keys[i].style.backgroundColor = "hsl(45, 7%, 89%)";
          keys[i].style.boxShadow = "0 4px 0px hsl(35, 11%, 61%)";
          keys[i].style.color = "hsl(60, 10%, 19%)";
        }
      }
      const themeChanger = document.querySelectorAll(".button-1");
      for (let i = 0; i < themeChanger.length; i++) {
        themeChanger[i].classList.remove("text-color-white");
        themeChanger[i].classList.remove("text-color-yellow");
        themeChanger[i].classList.add("text-color-brown");
      }

      document.querySelector(".calc").classList.remove("text-color-white");
      document.querySelector(".calc").classList.remove("text-color-yellow");
      document.querySelector(".calc").classList.add("text-color-brown");

      document
        .querySelector(".theme-text")
        .classList.remove("text-color-white");
      document
        .querySelector(".theme-text")
        .classList.remove("text-color-yellow");
      document.querySelector(".theme-text").classList.add("text-color-brown");

      document.querySelector(".screen").classList.remove("text-color-white");
      document.querySelector(".screen").classList.remove("text-color-yellow");
      document.querySelector(".screen").classList.add("text-color-brown");
    } else {
      document.querySelector(".theme-changer-controller").style.justifyContent =
        "flex-end";
      document.querySelector(
        ".theme-changer-controller"
      ).style.backgroundColor = "hsl(268, 71%, 12%)";
      document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
      document.querySelector(".keypad-container-1").style.backgroundColor =
        "hsl(268, 71%, 12%)";
      document.querySelector(".screen").style.backgroundColor =
        "hsl(268, 71%, 12%)";
      document.querySelector(".theme-changer-button").style.backgroundColor =
        "hsl(176, 100%, 44%)";
      const keys = document.querySelectorAll(".keyboard-btn");
      for (let i = 0; i < keys.length; i++) {
        if (i == 3 || i == 16) {
          keys[i].style.backgroundColor = "hsl(281, 89%, 26%)";
          keys[i].style.boxShadow = "0 4px 0px hsl(285, 91%, 52%)";
          keys[i].style.color = "hsl(0, 0%, 100%)";
        } else if (i == 17) {
          keys[i].style.backgroundColor = "hsl(176, 100%, 44%)";
          keys[i].style.boxShadow = "0 4px 0px hsl(177, 92%, 70%";
          keys[i].style.color = "hsl(198, 20%, 13%)";
        } else {
          keys[i].style.backgroundColor = "hsl(268, 47%, 21%)";
          keys[i].style.boxShadow = "0 4px 0px hsl(290, 70%, 36%)";
          keys[i].style.color = "hsl(52, 100%, 62%)";
        }
      }
      const themeChanger = document.querySelectorAll(".button-1");
      for (let i = 0; i < themeChanger.length; i++) {
        themeChanger[i].classList.remove("text-color-white");
        themeChanger[i].classList.remove("text-color-brown");
        themeChanger[i].classList.add("text-color-yellow");
      }

      document.querySelector(".calc").classList.remove("text-color-white");
      document.querySelector(".calc").classList.remove("text-color-brown");
      document.querySelector(".calc").classList.add("text-color-yellow");

      document
        .querySelector(".theme-text")
        .classList.remove("text-color-white");
      document
        .querySelector(".theme-text")
        .classList.remove("text-color-brown");
      document.querySelector(".theme-text").classList.add("text-color-yellow");

      document.querySelector(".screen").classList.remove("text-color-white");
      document.querySelector(".screen").classList.remove("text-color-brown");
      document.querySelector(".screen").classList.add("text-color-yellow");
    }
  });
}
