var image = document.getElementById('image');

image.onmouseover = function() {blurEffect()};

function blurEffect() {
    var scrolled = 0;
    image.addEventListener('wheel', scrollDirection);
    image.addEventListener('wheel', preventScroll);

    function preventScroll(e){
        e.preventDefault();
        e.stopPropagation();
    }

    function scrollDirection(event) {
        var delta;
        if (event.wheelDelta){
            delta = event.wheelDelta;
        }else{
            delta = -1 *event.deltaY;
        }
        if (delta < 0){
            scrolled = scrolled += 4;
            scrolled = Math.min(scrolled, 100)
        }else if (delta > 0){
            scrolled = scrolled -= 4;
            scrolled = Math.max(0, scrolled)
        }

        image.style.filter = "blur(" + (scrolled) + "px)";
        document.getElementById("blur-level").innerHTML = scrolled + "px";

        if (scrolled < 100 && scrolled > 0) {
            image.addEventListener('wheel', preventScroll);
            console.log(scrolled);

        } else if (scrolled >= 100) {
            image.removeEventListener('wheel', preventScroll);
            scrolled == 100;
        }
    }
}

blurEffect();