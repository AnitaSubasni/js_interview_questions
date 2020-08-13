
let i = 0;
let fetcResults = function() {
    console.log("getting results.. " + i++);
}

const getMeDeboucedResponses = function(fn, delay) {
    let timer;
    return function(...args) {
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

const optimizedFetch = getMeDeboucedResponses(fetcResults, 300);