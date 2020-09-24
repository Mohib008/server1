/*const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I have been succeded!");
    }, 1000);
});

myPromise.then(value => console.log(value));*/

const myPromise = new Promise((resolve, reject) => {
    if(false) {
        setTimeout(() => {
            resolve("I have been Succeded");
        }, 1000);
    } else {
        reject("I have failed");
    }
});

myPromise
    .then(value => console.log(value))
    .catch(rejectValue => console.log(rejectValue));


