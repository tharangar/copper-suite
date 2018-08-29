import * as socketIo from 'socket.io-client';


export function Agent_connector(msg : any):any{
    
    let socket = socketIo.connect('http://localhost:3002');
    
    socket.on("connect", function(data :any) {
        socket.emit("join", msg);
      });
    return null;
}