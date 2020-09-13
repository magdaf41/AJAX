$(document).ready(function () {

    $('#get-data').click(function () {

        $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {

                let pId = $('<p></p>').text(`Post ID : ${data.id}`);
                let pUserId = $('<p></p>').text(`Post User ID : ${data.userId}`);
                let pTitle = $('<p></p>').text(`Post Title : ${data.title}`);
                let pBody = $('<p></p>').text(`Post User ID : ${data.body}`);

                $('body').append(pId);
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