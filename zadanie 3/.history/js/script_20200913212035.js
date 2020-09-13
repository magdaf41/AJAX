$(document).ready(function () {

    $('#get-data').click(function () {

        $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {
                console.log(data);
                console.log(data.name);
                console.log(data.email);
            })
    });
});