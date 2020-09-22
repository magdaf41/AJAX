let endOfThePage = 0;

let preloading = false;

const showPreloader = () => {
    let preloader = document.getElementById('preloader')
    console.log('showPreloader()');
    preloader.style.display = 'block';
}

const hidePreloader = () => {
    let preloader = document.getElementById('preloader')
    console.log('hidePreloader()');
    preloader.style.display = 'none';
}


const getData = () => {
    console.log('getData()');

    if(!preloading){
    preloading = true;

    fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then(res => res.json())
        .then(data => {

            let body = document.body;
            let hr = document.createElement('hr');
            body.appendChild(hr);

            for(let user of data){
                let pId = document.createElement('p');
                let pName = document.createElement('p');
                let pWebsite = document.createElement('p');

                pId.innerText = `User ID: ${user.id}`;
                pName.innerText = `Name: ${user.name}`;
                pWebsite.innerHTML = `User URL: ${user.website}<br />------------`;

                body.appendChild(pId);
                body.appendChild(pName);
                body.appendChild(pWebsite);

            }
            hidePreloader();

            console.log(data);

        })
        .catch(error => {
            console.error(error);
        });
}
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

        showPreloader();
        getData();

    }

    // console.log('scrollToEndOfPage');


}
window.addEventListener('scroll', scrollToEndOfPage);