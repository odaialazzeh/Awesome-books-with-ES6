import { DateTime } from '../node_modules/luxon/src/luxon.js';

const time = document.getElementById('time');
time.innerHTML = DateTime.now();

export default time.innerHTML;