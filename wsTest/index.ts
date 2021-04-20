import { Server } from 'ws';
import { URL } from 'url';

const wss = new Server({ port: 8080 });

wss.on('connection', function connection(ws, req) {
  let urlObj = new URL(req.url!, 'ws://localhost:8080');
  console.log(urlObj);

  let game = urlObj.pathname.replace(/\/+$/, '');
  let priority = urlObj.searchParams;
  console.log('Game: ', game, 'Priority: ', priority.get('priority'));

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});
