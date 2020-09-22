let endOfThePage = 0;


const getData = () => {
    console.log('getData()');

    fetch('https://akademia108.pl/api/ajax/get-users.php')
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}

const scrollToEndOfPage = () => {

    let d = document.documentElement;
    let scrollHeight = d.scrollHeight;
    let scrollTop = d.scrollTop;
    let clientHeight = d.clientHeight;
    let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);


    console.log(`scrollHeight: ${scrollHeight}`);
    console.log(`sumScrollTopClientHeight: ${sumScrollTopClientHeight}`);
    console.log(`scrollTop: ${scrollTop}`);
    console.log(`clientHeight: ${clientHeight}`);

    console.log('======================')

    if (sumScrollTopClientHeight >= scrollHeight) {

        endOfThePage += 1;
        console.log(`Scrolled to the end of page: ${endOfThePage}`);

        getData();
    }

    // console.log('scrollToEndOfPage');


}
window.addEventListener('scroll', scrollToEndOfPage);