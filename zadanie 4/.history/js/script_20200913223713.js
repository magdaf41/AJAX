
const getData = () => {
    console.log('getData()');
}

const scrollToEndOfPage = () => {

let d = document.documentElement;
let scrollHeight = d.scrollHeight;
let scrollTop = d.scrollTop;
let clientHeight = d.clientHeight;

console.log(scrollHeight);

    console.log('scrollToEndOfPage');
    getData();

}
window.addEventListener('scroll', scrollToEndOfPage);