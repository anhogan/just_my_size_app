import * as React from 'react';

export const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

// Does this have to be a class component? Rendering as a function returns a blank screen
// Not sure what to substitute for this.props.children for a function?
// Currently, this renders a can't find variable: toggleNewUser error on SignUp Screen ... probably for all but that one was up before I changed it
const initialState = {
  newUser: false
};

export class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  };

  toggleNewUser = () => {
    this.state.newUser ? this.setState({ newUser: false }) : this.setState({ newUser: true })
  };

  // const [newUser, setNewUser] = React.useState(false);

  // const toggleNewUser = () => {
  //   newUser ? setNewUser(false) : setNewUser(true);
  // };

  render() {
    return (
      <UserContext.Provider value={{ toggleNewUser: toggleNewUser }}>
        {/* What goes here? {this.props.children} for a class component? */}
        {this.props.children}
      </UserContext.Provider>
    )
  }
}