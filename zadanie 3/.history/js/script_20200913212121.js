$(document).ready(function () {

    $('#get-data').click(function () {

        $.get('https://kademia108.pl/api/ajax/get-post.php')
            .done(function (data) {
                console.log(data);
                console.log(data.id);
                console.log(data.email);
            })
            .fail(function (error) {
                console.error(error);
            })
    });
});