import { OnModuleInit } from "@nestjs/common";
import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway({ cors: [] })
export class MyGateway implements OnModuleInit {
    @WebSocketServer() server: Server;
    onModuleInit() {
        this.server.on('connection', (socket) => {
            console.log(socket.id);
            console.log('Connected');
        })
        setInterval(() => {
            const randomNumber = Math.floor(Math.random() * 100);
            this.server.emit('randomData', { randomNumber });
        }, 1000);
    }

    // @SubscribeMessage('newMessage')
    // onNewMessage(@MessageBody() body: any) {
    //     // Log the message to the console
    //     console.log(`Received message from client: ${body}`);

    //     // Send a response message back to the client
    //     this.server.emit('onMessage', {
    //         msg: 'New Message',
    //         content: body
    //     });
    // }
}
