
const getData = () => {
    console.log('getData()');
}

const scrollToEndOfPage = () => {

let d = document.documentElement;
let scrollHeight = d.scrollHeight;
let scrollTop = d.scrollTop;
let clientHeight = d.clientHeight;

console.log(`scrollHeight: ${scrollHeight}`);
console.log(`scrollTop: ${scrolltop}`);
console.log(`clientHeight: ${clientHeight}`);

    console.log('scrollToEndOfPage');
    getData();

}
window.addEventListener('scroll', scrollToEndOfPage);