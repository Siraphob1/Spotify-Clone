import { PropsWithChildren, createContext, useState } from 'react';

type UserContextT = {
  refreshToken: string;
  setRefreshToken: React.Dispatch<React.SetStateAction<string>>;
};

const UserContext = createContext<UserContextT>(undefined!);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [refreshToken, setRefreshToken] = useState<string>('');

  return (
    <UserContext.Provider value={{ refreshToken, setRefreshToken }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
