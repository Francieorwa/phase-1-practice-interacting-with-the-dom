function set(){
const si =document.getElementById('counter');
const c=parseInt(si.innerText);si.innerText=c+1
console.log('counter')
}

let like_object = {};

let timer = null;

function startTimer(){
    timer = setInterval(set,1000);
}

function pauseTimer(){
    timer = clearInterval(timer);
}

startTimer();

minus.addEventListener('click',function(){
    const si=document.getElementById('counter');
    const c=parseInt(si.innerText);si.innerText=c-1
})


plus.addEventListener('click',function(){
    const si=document.getElementById('counter');
    const c=parseInt(si.innerText);si.innerText=c+1

})

heart.addEventListener('click',function(){
    const counter=document.getElementById('counter').innerText;
   
    if(counter in like_object){
        like_object[counter] += 1;
    } else {
        like_object[counter] = 1;
    }

    const likes = document.querySelector('.likes');
    likes.innerHTML = "";
    for( const key in like_object){
        let newLi=document.createElement("li");
        newLi.innerText=`${key} has been liked ${like_object[key]} times`;
        likes.appendChild(newLi);
    }
})
pause.addEventListener('click',function(){
    const pause=document.getElementById('pause');
    if(timer){
        pause.innerText = "resume";
        pauseTimer();
    } else{
        pause.innerText = "pause";
        startTimer();
    }  
})
 const form=document.querySelector("#comment-form")
 const commentInput=document.querySelector("#comment-input")
 const comments=document.querySelector(".comments")
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(commentInput.value){
let comment=commentInput.value;
let newLi=document.createElement("li");
newLi.innerText=comment;
comments.appendChild(newLi);
commentInput.value ='';
    }

})