let index = 0;
let slides = document.getElementsByClassName("banner");

function showslide(i){
    for(let s of slides){
        s.style.display = "none";
    }
    slides[i].style.display = "block";
}

function changeSlide(step){
    index += step;

    if(index >= slides.length){
        index = 0;
    }

    if(index < 0){
        index = slides.length - 1;
    }

    showslide(index);
}

// show first slide initially
showslide(index);

// auto change every 3 seconds
setInterval(function(){
    changeSlide(1);
}, 3000);




function showMessage(event) {
    event.preventDefault(); // prevent page reload
    alert("Submitted Successfully!");
}
