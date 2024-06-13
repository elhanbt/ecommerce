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

var drop = document.getElementById('dropdownwrapper');
    var dropdown1 = document.getElementById('drop1');
    var dropdown2 = document.getElementById('drop2');

function dropdown(box){
    drop.style.display = 'block';

    if(box === '2'){
        dropdown2 .style.display = "flex";
        dropdown1.style.display = "none";
     }
    
    else if(box === '1'){
        dropdown1.style.display = "block";
        dropdown2.style.display = "none";      
    }
   
    
}

drop.addEventListener('click', function(event){
    if(!dropdown2.contains(event.target)){
        drop.style.display = 'none';
    }
});
    
