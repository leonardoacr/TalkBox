import { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { connected, disconnected } from '@/store/connectivitySlice';

const useConnectSocketIO = (uri: string) => {
    const dispatch = useDispatch();
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io(uri);

        newSocket.on('connect', () => {
            console.log('Socket.IO connected');
            dispatch(connected());
        });

        newSocket.on('disconnect', () => {
            console.log('Socket.IO disconnected');
            dispatch(disconnected());
        });

        newSocket.on('chat', (data: any) => {
            dispatch(connected());
            const messageReceived = parseInt(data.messageReceived);
            console.log('ta chegando algo? ', messageReceived);
            // setData(randomNumber);
        });

        setSocket(newSocket);

        return () => {
            newSocket.close();
        };
    }, [uri, dispatch]);

    return socket;
};

export default useConnectSocketIO;
