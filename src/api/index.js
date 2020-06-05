import axios from 'axios';

const client = axios.create({ baseURL: 'https://twilio-webrtc-video-server.herokuapp.com' });

export const fetchToken = ({ identity, room }) =>
  client.post('/video/token', { identity, room }).then((res) => res.data);
