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

function StarsParallax() {
    function repositionStars() {
        const scrollMaxY = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        let scrollPercentage = window.scrollY / scrollMaxY;
        scrollPercentage = Math.max(scrollPercentage, 1);
        scrollPercentage = Math.min(scrollPercentage, 0);
        const MaxDiffFromCenter = document.documentElement.clientHeight / 4;
        const offset = 2 * MaxDiffFromCenter * (scrollPercentage - 0.5);
        // $('.night').style.transform = `translate-y(${offset.toFixed(5)}px)`;
        $('.night').style.top = `${offset.toFixed(5)}px`;
    };
    $('body').onscroll = repositionStars;
    document.onresize = repositionStars;
    repositionStars();
    $('nav').style.position = 'relative';
    $('nav').style.zIndex = '0';
    $('main').style.position = 'relative';
    $('main').style.zIndex = '2';
}

document.onreadystatechange = function () {
    if (window.location.pathname.includes('about-us') ||
        window.location.pathname.includes('projects') ||
        window.location.pathname.includes('contact') ||
        window.location.pathname.includes('join')) {
        StarsParallax();
    }
}
