let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navBar.classList.remove('active');
}
let navBar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');  
}

function toggleNavbar() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}


window.onscroll=()=>{
   navBar.classList.remove('active');
   searchForm.classList.remove('active');

}
