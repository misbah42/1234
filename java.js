

function showPetQuestions() {
            document.getElementById('petQuestions').style.display = 'block';
        }

        function hidePetQuestions() {
            document.getElementById('petQuestions').style.display = 'none';
        }
       
        function submitForm() {
            var petOption = document.querySelector('input[name="petOption"]:checked').value;
            var petType = document.getElementById('petType').value;
            var petColor = document.getElementById('petColor').value;
            var vaccinated = document.getElementById('vaccinated').value;
 alert('Pet Option: ' + petOption +
                  '\nPet Type: ' + petType +
                  '\nPet Color: ' + petColor +
                  '\nVaccinated: ' + vaccinated);
        }
        function showcarQuestions() {
            document.getElementById('carQuestions').style.display = 'block';
        }

        function hidecarQuestions() {
            document.getElementById('carQuestions').style.display = 'none';
        }

        
    document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementById("State").value;

    if (name === "" || email === "" || state === "") {
      showSnackbar("Please fill all the fields");
    } else {
      showSnackbar("Form submitted successfully");
    }
  });

  function showSnackbar(message) {
    let snackbar = document.getElementById("snackbar");
    snackbar.textContent = message;
    snackbar.classList.add("show");

    setTimeout(function () {
      snackbar.classList.remove("show");
    }, 3000);
  }


  function myFunction() {

    alert("Thank you!" <Br>"form successfully submitted");
  }



