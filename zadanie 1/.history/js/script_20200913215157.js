$(document).ready(function () {

    $('#get-data').click(function () {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function (data) {
                console.log(data);
                let pImie = $('<p></p>').text(`Post ID : ${data.imie}`);
                let pNazwisko = $('<p></p>').text(`Post User ID : ${data.nazwisko}`);
                let pZawod = $('<p></p>').text(`Post Title : ${data.zawod}`);
                let pFirma = $('<p></p>').text(`Post User ID : ${data.firma}`);
                let hr = $('<hr/>')

                $('#userData').append(pId);
                $('#userData').append(pUserId);
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