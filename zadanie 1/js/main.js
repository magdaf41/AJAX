console.log('Odbieranie i wysyłanie danych');


let user = {
    "name": "Hans",
    "job": "programmer"
}

fetch('https://reqres.in/api/users', {
    headers: {
        'Content-type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(user),
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch((error) => {
        console.log(error)
    });


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
