
const getData = () => {
    console.log('getData()');
}

const scrollToEndOfPage = () => {

    console.log('scrollToEndOfPage');
    getData();

}
window.addEventListener('scroll', scrollToEndOfPage);