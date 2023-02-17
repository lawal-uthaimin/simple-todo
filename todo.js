const addFom = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')
const vieo = document.querySelector('.as')
const template = todo =>{
  const html = `

    <li class="list-group-item d-flex justify-content-between" style=" border-radius: 2.99rem;">
      <span class="span-a" style=" border-radius: 2.99rem; font-weight: bolder;">${todo}</span>  
      <i class="far fa-trash-alt delete"></i>   
    </li>

  `;

  list.innerHTML += html; 
  localStorage.setItem('todos', todo)

    if(localStorage.getItem('todos')){
      
    }
}
addFom.addEventListener('submit', e => {
  e.preventDefault();
 
  const todo = addFom.add.value.trim();

  if(todo.length){
    template(todo);
    addFom.reset();
  }
    
});


list.addEventListener('click', e =>{
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove()
  }
});

const filtertodos = (term) => {
  Array.from(list.children)
  .filter((todo) => !todo.textContent.includes(term))
  .forEach((todo) => todo.classList.add('filtered'));
    
  Array.from(list.children)
  .filter((todo) => todo.textContent.includes(term))
  .forEach((todo) => todo.classList.remove('filtered'))
};


search.addEventListener('keyup', () =>{
  const term = search.value.trim();
  filtertodos(term);
})
