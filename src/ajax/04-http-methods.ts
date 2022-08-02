import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';
const headers = { 'mi-token': 'ABC123' };
const body = { id: 1, name: 'Edison', lastName: 'Jimenez' };

// ajax.get(url, headers).subscribe(val => console.log('GET:', val));
// ajax.post(url, { id: 1, name: 'Edison', lastName: 'Jimenez' }, headers).subscribe(val => console.log('POST:', val));
// ajax.put(url, { id: 1, name: 'Edison', lastName: 'Jimenez' }, headers).subscribe(val => console.log('PUT:', val));
// ajax.delete(url, headers).subscribe(val => console.log('DELETE:', val));

ajax({
    url,
    body,
    headers,
    method: 'POST'
}).subscribe(console.log);

