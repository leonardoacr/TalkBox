// import io from "socket.io-client";

// export const connectSocketIO = (id: string) => {
//     const socket = io("http://localhost:8000");
//     socket.on("connect", () => {
//         console.log("Socket.IO connected");
//         setConnectivityStatus("STABLE");
//     });
//     socket.on("randomData", (data: any) => {
//         const randomNumber = parseInt(data.randomNumber);
//         setData(randomNumber);
//     });
//     return () => {
//         socket.close();
//     };
// }