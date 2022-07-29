const url = 'https://api.github.com/userXXXs?per_page=5';

const fetchPromise = fetch(url);

fetchPromise
    .then(resp => resp.json())
    .then(val => console.log('val', val))
    .catch(err => console.warn('err', err))