import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import auth from 'feathers-authentication-client';
import socketio from 'feathers-socketio/client';
import io from 'socket.io-client';

const app = feathers();

const socket = io();

app.configure(socketio(socket));
app.configure(hooks());
app.configure(auth({
	storage: window.localStorage
}));

export default app;
