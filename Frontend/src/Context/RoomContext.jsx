import React, { createContext, useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { useLocation, useNavigation, useParams, useRoutes } from 'react-router-dom';

const defaultState = {
  rooms: [],
  detailRoom: null,
  getDetailRoom: (id) => {}
};

const RoomContext = createContext(defaultState);

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [detailRoom, setDetailRoom] = useState(null);

  useEffect(() => {
    getRooms();
  }, []);

  const getRooms = () => {
    Axios.get('http://localhost:2323/api/rooms')
      .then(response => {
        setRooms(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const getDetailRoom = (roomId) => {
    Axios.get(`http://localhost:2323/api/rooms/${roomId}`)
      .then(response => {
        setDetailRoom(response.data);
      })
      .catch(error => {
        console.error('Error fetching detail room data:', error);
      });
  };

  return (
    <RoomContext.Provider value={{ rooms, detailRoom, getDetailRoom }}>
      {children}
    </RoomContext.Provider>
  );
};

export const useRooms = () => {
  return useContext(RoomContext);
};

export default RoomProvider;
