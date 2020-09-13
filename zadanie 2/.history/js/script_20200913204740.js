console.log("Warsztat – Pobierz dane po kliknięciu przycisku")

let btnGetData = document.getElementById("get-data");
console.log(btnGetData);


const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
    .then(response => response.json())
        .then((data) => {

            let pId = document.createElement('p');
            let pUserId = document.createElement('p');
            let pTitle = document.createElement('p');
            let pBody = document.createElement('p');

            pId.innerText = data.id;


            console.log(pId);
            console.log(pUserId);
            console.log(pTitle);
            console.log(pBody);

        });
};



btnGetData.addEventListener('click', getData);

