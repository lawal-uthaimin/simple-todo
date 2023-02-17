const minr = document.querySelector('.add');

 
minr.addEventListener('submit', e => {
    e.preventDefault();

    const todo = minr.add.value;
    console.log(todo); 
});