console.log("Warsztat – Pobierz dane po kliknięciu przycisku")

let btnGetData = document.getElementById("get-data");
console.log(btnGetData);


const  getData = () => {
console.log('dziala');
};

btnGetData.addEventListener('click', getData)

