const calculateButton = document.getElementById("calculate");

      function convertedPound() {
        const kgInput = document.getElementById("kilogram").value;
        console.log(kgInput);
        const pound = kgInput * 2.20462;
        document.getElementById("pound").innerText = pound.toFixed(2);
        console.log(pound);
      }

      calculateButton.addEventListener("click", convertedPound);