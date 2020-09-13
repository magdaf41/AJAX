console.log("Warsztat – Pobierz dane po kliknięciu przycisku")

let btnGetData = document.getElementById("get-data");
console.log(btnGetData);


const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
    .then(response => response.json())
        .then((data) => {

            console.log(data.userId);
            console.log(data.id);
            console.log(data.title);
            console.log(data.body);

        });
};



btnGetData.addEventListener('click', getData);

