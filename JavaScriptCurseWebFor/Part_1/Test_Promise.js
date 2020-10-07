
let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Сервер: запрашиваю список пользователей в БД');
        console.log('...');
        resolve();
    }, 1000)
});

let userBD = promise.then(function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let users = [
                {uid: 'id1', name: 'Max'},
                {uid: 'id2', name: 'Elena'}
            ];
            console.log('БД: формируют список пользователей', users);
            console.log('...');
            resolve(users);
        }, 500)
    })
});

let dataServer = userBD.then(function(usersDB) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Сервер: трансформируют данные для клиента', usersDB);
            console.log('...');
            let users = usersDB.map(function(user) {
                return {
                    id: user.uid,
                    firstName: user.name,
                    timestamp: Date.now()
                }
            });
            resolve(users);
        }, 500)
    })
});

dataServer.then(function(users) {
    setTimeout(function() {
        console.log('Клиент: получил данные и отображаю их', users);
    }, 1000)
})
.catch(function(error) {
    console.log(error);
})
// .finally(function() {
//     console.log('Finally');
// });





