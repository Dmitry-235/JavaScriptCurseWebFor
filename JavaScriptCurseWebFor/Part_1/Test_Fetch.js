
document.querySelector('#load').addEventListener('click', load);

async function load() {
    let url = 'https://jsonplaceholder.typicode.com/users';

    let response = await fetch(url);
    let data = await response.json();

    let html = data.map(function(item) {
        return '<li>' + item.id + ' ' + item.name + ' (' + item.email + ')</li>'
    });
    document.querySelector('#list').insertAdjacentHTML('afterbegin', html.join(' '));
}

/// Old option
/*
function load() {
    let url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            let ul = document.querySelector('#list');
            let count = 0;
            let html = data.map(function(item) {
                //console.log(item.name)
                return '<li>' + item.id + ' ' + item.name + ' (' + item.email + ')</li>'
            });
            ul.insertAdjacentHTML('afterbegin', html.join(' '));
        })
}

 */