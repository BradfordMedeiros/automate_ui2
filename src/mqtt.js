
import mqtt from 'mqtt';

const HOST = 'http://localhost:4000';
const client = mqtt.connect(HOST);
window.c = client;

