import * as React from 'react';

export const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

export function UserProvider() {
  const [newUser, setNewUser] = React.useState(false);

  const toggleNewUser = () => {
    newUser ? setNewUser(false) : setNewUser(true);
  };

  return (
    <UserContext.Provider value={{ toggleNewUser: toggleNewUser }}>
    </UserContext.Provider>
  )
}