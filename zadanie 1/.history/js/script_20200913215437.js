$(document).ready(function () {

    $('#get-data').click(function () {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function (data) {
                console.log(data);
                let pImie = $('<p></p>').text(`Imię : ${data.imie}`);
                console.log(pImie);
                let pNazwisko = $('<p></p>').text(`Nazwisko : ${data.nazwisko}`);
                let pZawod = $('<p></p>').text(`Zawód : ${data.zawod}`);
                let pFirma = $('<p></p>').text(`Firma : ${data.firma}`);
                let hr = $('<hr/>')

                $('#dane-programsity').append(pImie);
                $('#dane-programsity').append(pNazwisko);
                // $('body').append(pTitle);
                // $('body').append(pBody);
                // $('body').append(hr);
                // console.log(pId);
                // console.log(pUserId);
                // console.log(pTitle);
                // console.log(pBody);
            })
            .fail(function (error) {
                console.error(error);
            })

    });
});