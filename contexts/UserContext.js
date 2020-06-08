import * as React from 'react';

const inititalState = {
  newUser: false
}

export const UserContext = React.createContext(inititalState);

export const UserConsumer = UserContext.Consumer;

export const UserProvider = UserContext.Provider;

// export const UserProvider = (Component) => {
//   const [newUser, setNewUser] = React.useState(false);

//   const toggleNewUser = () => {
//     newUser ? setNewUser(false) : setNewUser(true);
//   };

//   return (
//     <UserContext.Provider value={toggleNewUser}>
//       {/* What goes here? {this.props.children} for a class component? */}
//       {<Component />}
//     </UserContext.Provider>
//   );
// };

export const withFirebaseHOC = Component => props => (
  <UserConsumer>
    {state => <Component {...props} newUser={state} />}
  </UserConsumer>
);