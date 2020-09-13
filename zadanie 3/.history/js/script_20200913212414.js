$(document).ready(function () {

    $('#get-data').click(function () {

        $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {

                let pId = $('<p></p>').text(`Post ID : ${data.id}`);
                console.log(pId);
            })
            .fail(function (error) {
                console.error(error);
            })
    });
});