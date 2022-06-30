import { asyncScheduler } from 'rxjs';

// setTimeout(() => { }, 2000);
// setInterval(() => { }, 2000);

// const saludar1 = () => console.log('Hola mundo');
const saludar2 = (data: { n: string, a: string }) => console.log(`Hola ${data.n} ${data.a}`);

// asyncScheduler.schedule(saludar1, 2000);
// asyncScheduler.schedule(saludar2, 2000, { n: 'Edison', a: 'Jiménez' });

const subs = asyncScheduler.schedule(function (state) {
    console.log('state', state);
    this.schedule(state + 1, 1000);
}, 3000, 0);

// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);