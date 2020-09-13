$(document).ready(function () {

    $('#get-data').click(function () {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function (data) {
                console.log(data);
                let pId = $('<p></p>').text(`Post ID : ${data.id}`);
                let pUserId = $('<p></p>').text(`Post User ID : ${data.userId}`);
                let pTitle = $('<p></p>').text(`Post Title : ${data.title}`);
                let pBody = $('<p></p>').text(`Post User ID : ${data.body}`);
                let hr = $('<hr/>')

                $('#userData').append(pId);
                $('#userData').append(pUserId);
                // $('body').append(pTitle);
                // $('body').append(pBody);
                // $('body').append(hr);
                console.log(pId);
                console.log(pUserId);
                console.log(pTitle);
                console.log(pBody);
            })
            .fail(function (error) {
                console.error(error);
            })

    });
});