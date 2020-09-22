
const getData = () => {
    console.log('getData()');
}

const scrollToEndOfPage = () => {

let d = document.documentElement;
let scrollHeight = d.scrollHeight;
let scrollTop = d.scrollTop;
let clientHeight = d.clientHeight;
let sumScrollTopClientHeight = scrollTop + clientHeight;


console.log(`scrollHeight: ${scrollHeight}`);
console.log(`scrollTop: ${scrollTop}`);
console.log(`clientHeight: ${clientHeight}`);
console.log('======================')
console.log(sumScrollTopClientHeight);

    console.log('scrollToEndOfPage');
    getData();

}
window.addEventListener('scroll', scrollToEndOfPage);