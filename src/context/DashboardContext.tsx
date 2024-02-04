import { PropsWithChildren, createContext, useState } from 'react';
import { DashboardStatus } from '../type/dashboard';

type DashboardContextT = {
  status: DashboardStatus;
  setStatus: React.Dispatch<React.SetStateAction<DashboardStatus>>;
};

const DashboardContext = createContext<DashboardContextT>(undefined!);

export const DashboardProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<DashboardStatus>(DashboardStatus.HOME);

  return (
    <DashboardContext.Provider value={{ status, setStatus }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
