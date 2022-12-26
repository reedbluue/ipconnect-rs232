import socketio from 'socket.io-client';

const socket = socketio('ws://localhost:3001');

socket.on('connect', () => console.log('Conectado'));
socket.on('disconnect', () => console.log('Desconectado'));
socket.on('reconnect_attempt', () => console.log('Tentando reconectar'));
socket.on('reconnect', () => console.log('Reconectado'));

export default socket;