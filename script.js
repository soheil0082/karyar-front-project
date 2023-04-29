function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function stickyHeader() {
    var header = document.querySelector(".navbar");
    var threshold = document.querySelector("#slider-header-text");
    var headContainer = document.querySelector("#my-head-container");

    var windowHeight = window.innerHeight;
    var elementTop = header.getBoundingClientRect().bottom;
    var threshold_number = 1200;

    if(!isInViewport(threshold)) {
        header.classList.add("nav-fixed");
        headContainer.classList.add("head-container")
    }else {
        header.classList.remove("nav-fixed");
        headContainer.classList.remove("head-container");
    }
}

window.addEventListener("scroll", stickyHeader);