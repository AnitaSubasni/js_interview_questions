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

/*
Redux is an independednt libraray
Redux is used for storage ??
Redux is a good way to manage application data
Not directly mutating the state but making a copy of it and then changing it - return the new state
Redux provides us with watcher to which component will suscribe and the moment any change happens it gets transmitted to all the subscrbers
*/

let obj = {
    name: "Vinod"
};

obj.name = "Vinod Rawat"; // not advisable to manage the state

let obj2 = { // correct way
    ...obj,
    name: "Vinod Rawat"
};

return obj2;