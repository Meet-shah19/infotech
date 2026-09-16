function getUserCallback(id, callback) {
    setTimeout(() => {
        callback(null, { id: id, name: "User" + id });
    }, 500);
}

function getUserPromise(id) {
    return new Promise((resolve, reject) => {
        getUserCallback(id, (error, user) => {
            if (error) {
                reject(error);
            } else {
                resolve(user);
            }
        });
    });
}

getUserPromise(1)
    .then(user => {
        console.log(user);
    })
    .catch(error => {
        console.log(error);
    });