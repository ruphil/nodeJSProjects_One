import { Server } from 'ws';
import { URL } from 'url';

const wss = new Server({ port: 8080 });
const gamerooms = [
  {
    gameroomid: 'sdf-asfsd-34jf',
    game: 'angryballs',
    players: ['ws1', 'ws2', 'ws34', 'ws156']
  }, {

  }
];

wss.on('connection', function connection(ws, req) {
  let urlObj = new URL(req.url!, 'ws://localhost:8080');
  // console.log(urlObj);

  let game = urlObj.pathname.replace(/\//g, '');
  let priority = urlObj.searchParams;
  console.log('Game: ', game, 'Priority: ', priority.get('priority'), 'Users Count: ', wss.clients.size);
});
