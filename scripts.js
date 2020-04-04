'use strict';

function $(selector, base = null) {
    base = (base === null) ? document : base;
    return base.querySelector(selector);
}

function $$(selector, base = null) {
    base = (base === null) ? document : base;
    return Array.from(base.querySelectorAll(selector));
}

function videoOnClick() {
    let video = $('#index-main-video');
    let videoText = $('#index-main-video-text');

    const PROMPT = "<h3>PAUSED</h3>";
    if (video.paused) {
        video.play();
        videoText.innerHTML = videoText.innerHTML.substring(PROMPT.length);
    } else {
        video.pause();
        videoText.innerHTML = PROMPT + videoText.innerHTML;
    }
}

function redirectToTestPage() {
    document.title = "Redirecting...";
    document.body.innerHTML = "<main><h5>This page does not exist yet.</h5>You will be send back to where you came from in 5 seconds.<br><br>Or, go to <a class='link', href='-test.html'>test page</a>.</main>";
    setTimeout(() => {window.history.back();}, 1000);
}

window.onload = function(){
    // for project.html img-lst's // img-lst1
    const children = $('#img-lst1').children;
    let curInd = 0;

    function setTimer(){
        return setInterval(function(){
            if (curInd == 0){
                children[children.length-1].classList.remove('zoomIn');
            }else{
                children[curInd-1].classList.remove('zoomIn');
            }
            children[curInd].classList.add('zoomIn');
            if (++curInd == children.length) curInd = 0;
        },2000);
    }
    let timer = setTimer();

    children.onmouseenter = function(){
        timer = setTimer();
    };
    for (let j = 0; j<children.length ;j++){
        children[j].onmouseout = function(){
            timer = setTimer();
        };

        children[j].onmouseover = function(){
            clearInterval(timer);
            for (let k = 0; k<children.length ;k++){
                if (k==j) children[k].classList.add('zoomIn');
                else children[k].classList.remove('zoomIn');
            }
            curInd = j; // start from where we left
        };
    }
}

