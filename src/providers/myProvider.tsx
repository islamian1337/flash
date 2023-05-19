import React, {useState} from 'react';

import createCtx from '../utils/createCtx';

interface User {
  email: String;
  password: String;
  plan: String;
  customFields: {
    userName: String;
    avatar: String;
  };
}

interface Context {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const [useCtx, Provider] = createCtx<Context>();

interface Props {
  children?: React.ReactElement;
}

function StateProvider({children}: Props): React.ReactElement {
  const [user, setUser] = useState<User>({
    email: '...',
    password: '...',
    plan: '...',
    customFields: {
      userName: '...',
      avatar: '...',
    },
  });

  return (
    <Provider
      value={{
        user,
        setUser,
      }}>
      {children}
    </Provider>
  );
}

export {useCtx as useStateContext, StateProvider};
