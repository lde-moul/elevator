'use strict';

import useSocket from '../socket';
import { getFloorName } from '../../shared/Util';

import React, { useEffect, useState } from 'react';

export default () => {
  const [ history, setHistory ] = useState([]);
  const socket = useSocket();

  useEffect(() => {
    socket.emit('request_history');

    socket.on('history', setHistory);

    return () => {
      socket.off('history');
    };
  }, []);

  const entries = history.map(entry =>
    <div>
      Elevator {entry.elevatorID} has been requested to go to floor {getFloorName(entry.floor)}
    </div>
  );

  return (
    <div>
      {entries}
    </div>
  );
}
