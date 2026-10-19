submitButton = document.querySelector('#submit');

let form = document.querySelector('form');

let projecteurB = ""
let projecteurRadio = document.getElementsByName('projecteur');
for (let optionP of projecteurRadio) {
  optionP.addEventListener("change", (e) => {
    console.log(e.target.value);
    projecteurB = e.target.value;
  });
}


let priseB = ""
let priseRadio = document.getElementsByName('prise');
for (let optionR of priseRadio) {
  optionR.addEventListener("change", (e) => {
    console.log(e.target.value);
    priseB = e.target.value;
  });
}

form.addEventListener('submit', async(e) => {
    e.preventDefault()

    let nomInput = document.querySelector('#nomFiliere').value;
    let codeInput = document.querySelector('#codeFiliere').value;
    let effectifInput = document.querySelector('#effectifFiliere').value;
    let responsableInput = document.querySelector('#responsableFiliere').value;
    let descriptionInput = document.querySelector('#descriptionArea').value;



    // let data = {
    //     nom: nomInput,
    //     code: codeInput,
    //     effectif: effectifInput,
    //     responsable: responsableInput,
    //     description: descriptionInput,
    //     besoinProjecteur: projecteurB,
    //     besoinPrise: priseB
    // };

    // let response = await axios.post('http://localhost:3000/filiere', data);
    // console.log(response.data);

    

    form.reset();


})
