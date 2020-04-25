'use strict';

function $(selector, base = null) {
    base = (base === null) ? document : base;
    return base.querySelector(selector);
}

function $$(selector, base = null) {
    base = (base === null) ? document : base;
    return Array.from(base.querySelectorAll(selector));
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
