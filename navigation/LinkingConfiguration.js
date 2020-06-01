import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('justmysize://')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Profile: {
          path: 'user/:id',
          exact: true,
          screens: {
            ChangePassword: {
              path: 'changepassword',
              exact: true
            },
            ChangePlan: {
              path: 'changeplan',
              exact: true
            }
          }
        },
        Closet: {
          path: 'user/:id/closet',
          exact: true,
          screens: {
            AddItem: {
              path: 'newitem',
              exact: true
            },
            ScanBarcode: {
              path: 'scanitem',
              exact: true
            },
            UpdateItem: {
              path: 'update/:itemid',
              exxact: true
            }
          }
        },
        Search: 'search'
      },
    },
    Initial: {
      path: 'setup',
      screens: {
        Login: {
          path: 'login',
          exact: true
        },
        SignUp: {
          path: 'signup',
          exact: true,
          screens: {
            NameCloset: {
              path: 'closet',
              exact: true
            },
            AddFirstItem: {
              path: 'firstitem',
              exact: true
            },
            GettingStarted: {
              path: 'welcome',
              exact: true
            }
          }
        } 
      }
    },
  },
};
