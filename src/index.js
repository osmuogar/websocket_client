const io = require('socket.io-client');
const socket = io('ws://localhost:9000');

socket.on('connect', () => {
    // Sends a simple message
    socket.send('Hello World!');

    // Each 3 seconds, send a data event
    setInterval(() => {
        socket.emit('data', Math.random() * 100);
    }, 3000);


});

// handle the event sent with socket.send()
socket.on('message', data => {
    console.log(data);
});

// handle the event sent with socket.emit()
socket.on('lowvalue', (elem1) => {
    console.log('Confirmed low value: '+elem1);
});