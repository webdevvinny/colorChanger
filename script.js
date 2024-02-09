window.onload = function () {
  let colors = [
    "red",
    "pink",
    "blue",
    "aqua",
    "green",
    "yellow",
    "purple",
    "magenta",
    "indigo",
    "tomato",
    "white",
    "maroon",
    "palegreen",
  ];

  callRandomNumber();

  function callRandomNumber() {
    setInterval(() => {
      let randomNumber = Math.floor(Math.random() * colors.length);
      document.getElementById("test").textContent = colors[randomNumber];
      document.getElementById("test").style.backgroundColor =
        colors[randomNumber];
      document.getElementById("test").style.padding = "30px";
      document.getElementById("test").style.textAlign = "center";
      document.getElementById("test").style.textTransform = "uppercase";
      document.getElementById("test").style.fontWeight = "900";
      document.getElementById("test").style.fontSize = "30px";
      document.getElementById("test").style.color = "gold";
    }, 3000);
  }

  document.getElementById("test").style.backgroundColor = `

`;

  randomColorGenerator();

  function randomColorGenerator() {
    setInterval(() => {
      let colorRedRandomNumber = Math.floor(Math.random() * 255);
      let colorGreenRandomNumber = Math.floor(Math.random() * 255);
      let colorBlueRandomNumber = Math.floor(Math.random() * 255);

      document.getElementById("randomColor").style.backgroundColor = `
    rgb(
        ${colorRedRandomNumber.toString()},
        ${colorGreenRandomNumber.toString()},
        ${colorBlueRandomNumber.toString()}
    )
`;
      document.getElementById("randomColor").style.color = "red";
      document.getElementById(
        "randomColor"
      ).textContent = `The RGB for this color is rgb(${colorRedRandomNumber}, ${colorGreenRandomNumber},${colorBlueRandomNumber})`;
      document.getElementById("randomColor").style.padding = "30px";
      document.getElementById("randomColor").style.textAlign = "center";
      document.getElementById("randomColor").style.fontSize = "30px";
      document.getElementById("randomColor").style.fontWeight = "900";
    }, 3000);
  }

  document.getElementById("resultButton").onclick = function () {
    colorPreview();
  };

  document.getElementById("color").addEventListener("keyup", () => {
    if (event.key === "Enter") {
      colorPreview();
    }
  });

  function colorPreview() {
    let inputColor = document.getElementById("color").value.trim();

    if (inputColor == "" || inputColor == " ") {
      document.getElementById("colorResult").textContent = "Enter color";
    } else {
      document.getElementById("colorResult").style.backgroundColor = inputColor;
      document.getElementById("colorResult").style.width = "100%";
      document.getElementById("colorResult").style.height = "200px";
      document.getElementById("colorResult").textContent = inputColor;
      document.getElementById("colorResult").style.textAlign = "center";
      document.getElementById("colorResult").style.fontSize = "50px";
      document.getElementById("colorResult").style.fontWeight = "900";
      document.getElementById("colorResult").style.textTransform = "uppercase";
      document.getElementById("colorResult").style.color =
        colors[Math.floor(Math.random() * colors.length)];
      document.getElementById("colorResult").style.padding = "70px";
    }
    document.getElementById("color").value = "";
  }
};
