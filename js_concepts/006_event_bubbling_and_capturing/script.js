document.querySelector("#parent")
    .addEventListener('click', (e) => {
        console.log('Parent clicked');
    }, false); // enableCapturing

document.querySelector("#child")
    .addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Child clicked');
    }, true);

document.querySelector("#grandchild")
    .addEventListener('click', (e) => {
        console.log('Grandchild clicked');
    }, false);