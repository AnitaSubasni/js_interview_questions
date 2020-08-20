let i = 1;
function fetchResults() {
    console.log("fetching results.... " + i++)
}

function optimizedFetchResults(fn, delay) {
    let isTimeDelayHonored = true;
    return function (...args) {
        console.count("resized");
        var context = this;
        if (isTimeDelayHonored) {
            fn.apply(context, args);
            isTimeDelayHonored = false;
        }
        setTimeout(() => {
            isTimeDelayHonored = true;
        }, delay);
    }
}

throttledFetch = optimizedFetchResults(fetchResults, 3000);

window.addEventListener('resize', throttledFetch)


// ========] 300ms fn [=======
// ======] 300ms fn [======] 300ms fn [======