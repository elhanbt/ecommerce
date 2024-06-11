//alert(document.getElementsByClassName('like_icon').length);

const like = document.querySelectorAll('.like_icon');

like.forEach(element => {
    element.addEventListener('click',()=> {
       if(element.getAttribute('src')==='Assets/like_icon.svg'){
        element.setAttribute('src','Assets/like_icon_active.svg');
       }
       else{
        element.setAttribute('src','Assets/like_icon.svg');
       }
    });
});


function dropdown(){
    var drop = document.getElementById('dropdownwrapper');
    drop.style.display = 'block';

    drop.addEventListener("click", ()=>{
        drop.style.display = 'none';
    });
}