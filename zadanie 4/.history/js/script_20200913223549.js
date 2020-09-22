
const getData = () => {
    console.log('getData()');
}

const scrollToEndOfPage = () => {

let d = document.documentElement;
let scrollHeight = d.scrollHeight;

console.log(scrollHeight);

    console.log('scrollToEndOfPage');
    getData();

}
window.addEventListener('scroll', scrollToEndOfPage);