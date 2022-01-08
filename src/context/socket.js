import io from "socket.io-client";
import { createContext } from "react";
import SocketContext from "./socket-context";

const SOCKET_URL = process.env.REACT_APP_SERVER_URL;

const socket = io.connect(SOCKET_URL);

const SocketProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
