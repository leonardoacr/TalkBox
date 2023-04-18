import { useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { connected, disconnected } from '@/store/connectivitySlice';

const useConnectSocketIO = (uri: string) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const socket: Socket = io(uri);

        socket.on('connect', () => {
            console.log('Socket.IO connected');
            dispatch(connected());
        });

        socket.on('disconnect', () => {
            console.log('Socket.IO disconnected');
            dispatch(disconnected());
        });

        socket.on('randomData', (data: any) => {
            const randomNumber = parseInt(data.randomNumber);
            console.log('ta chegando algo? ', randomNumber)
            // setData(randomNumber);
        });

        return () => {
            socket.close();
        };
    }, [uri, dispatch]);
};

export default useConnectSocketIO;
