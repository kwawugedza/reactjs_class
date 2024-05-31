import { useState } from 'react';

import { DashboardContext } from './Contxt';
import Dashboard from './Dash';

export default function useContt() {
  const [user] = useState({
    isSubscribed: true,
    name: 'You',
  });

  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}
