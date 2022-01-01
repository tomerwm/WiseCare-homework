import io from "socket.io-client";
import { createContext } from "react";

const SOCKET_URL = process.env.REACT_APP_SERVER_URL;

const socket = io.connect(SOCKET_URL);

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
