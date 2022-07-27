let current = 0;

function derotate(e){
    e.classList.remove("rotate");
}

function hide(e){
    e.classList.add("hidden");
}

function smaller(e){
    e.classList.remove("bigger");
}


document.querySelector('.q1').onclick = function(){
    document.querySelectorAll('.que img').forEach(derotate);
    document.querySelectorAll('.other').forEach(hide);
    document.querySelectorAll('.txt').forEach(smaller);
    if(current != 1){
        
        document.querySelector('.photo_1').classList.add("rotate");
        document.querySelector('.t1').classList.remove("hidden");
        document.querySelector('.text_q1').classList.add("bigger");
        current=1;
    }
    else{
        current=0
    }
}

document.querySelector('.q2').onclick = function(){
    document.querySelectorAll('.que img').forEach(derotate);
    document.querySelectorAll('.other').forEach(hide);
    document.querySelectorAll('.txt').forEach(smaller);
    if(current != 2){
        
        document.querySelector('.photo_2').classList.add("rotate");
        document.querySelector('.t2').classList.remove("hidden");
        document.querySelector('.text_q2').classList.add("bigger");
        current=2;
    }
    else{
        current=0
    }
}



document.querySelector('.q3').onclick = function(){
    document.querySelectorAll('.que img').forEach(derotate);
    document.querySelectorAll('.other').forEach(hide);
    document.querySelectorAll('.txt').forEach(smaller);
    if(current != 3){
        
        document.querySelector('.photo_3').classList.add("rotate");
        document.querySelector('.t3').classList.remove("hidden");
        document.querySelector('.text_q3').classList.add("bigger");
        current=3;
    }
    else{
        current=0
    }
}



document.querySelector('.q4').onclick = function(){
    document.querySelectorAll('.que img').forEach(derotate);
    document.querySelectorAll('.other').forEach(hide);
    document.querySelectorAll('.txt').forEach(smaller);
    if(current != 4){
        document.querySelector('.photo_4').classList.add("rotate");
        document.querySelector('.t4').classList.remove("hidden");
        document.querySelector('.text_q4').classList.add("bigger");
        current=4;
    }
    else{
        current=0
    }
}


document.querySelector('.q5').onclick = function(){
    document.querySelectorAll('.que img').forEach(derotate);
    document.querySelectorAll('.other').forEach(hide);
    document.querySelectorAll('.txt').forEach(smaller);
    if(current != 5){
        
        document.querySelector('.photo_5').classList.add("rotate");
        document.querySelector('.t5').classList.remove("hidden");
        document.querySelector('.text_q5').classList.add("bigger");
        current=5;
    }
    else{
        current=0
    }
}