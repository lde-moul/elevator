'use strict';

import AdminPage from './AdminPage';
import ElevatorPage from './ElevatorPage';

import React, { useState } from 'react';

interface AppProps {
};

export default ({}: AppProps) => {
  const [admin, setAdmin] = useState(false);

  const handleAdminToggle = () =>
    setAdmin(!admin);

  const Page = admin ? AdminPage : ElevatorPage;

  return (
    <div>
      <button type="button" onClick={handleAdminToggle}>
        Show {admin ? 'user' : 'administrator'} section
      </button>

      <Page />
    </div>
  );
};
