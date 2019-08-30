function videoOnClick() {
    let video = document.querySelector('#index-main-video');
    let videoText = document.querySelector('#index-main-video-text');

    const PROMPT = "<h3>PAUSED</h3>";
    if (video.paused) {
        video.play();
        videoText.innerHTML = videoText.innerHTML.substring(PROMPT.length);
    } else {
        video.pause();
        videoText.innerHTML = PROMPT + videoText.innerHTML;
    }
}