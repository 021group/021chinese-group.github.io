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
    setTimeout(() => { window.history.back(); }, 1000);
}
