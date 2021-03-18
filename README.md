# Just My Size
The perfect fit every time

[![Maintainability](https://api.codeclimate.com/v1/badges/0d01cd5210ccdabcb057/maintainability)](https://codeclimate.com/github/anhogan/just_my_size_app/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/0d01cd5210ccdabcb057/test_coverage)](https://codeclimate.com/github/anhogan/just_my_size_app/test_coverage)

## Google Chrome Extension
The Google Chrome extension can be added to your browser using this link: https://chrome.google.com/webstore/detail/just-my-size/ombggmodmhplhgdjkcgieelflokgnbfp

The repository for the developer version and source code can be found here: https://github.com/anhogan/just-my-size

The two apps are independent of one another - due to how Expo and Firebase interact, there is not a built in way to set up user authentication through a Google account. Expo works off the Firebase JS SDK which requires an http, or https, address to authenticate with Google. A refactor into React Native, or into Swift and Katlin, may be necessary to integrate the extension with the app.

## Expo App
---
App designed to expand on the functionality of the integration and provide users with more options from a mobile device. Offering quick and convenient access to sizing information when shopping on a mobile device or in person.

Built with React Native via Expo

Design Files: https://whimsical.com/7THNtddra7DnXcGqWDZKt5

## Status
The app is currently in development mode and not live in either the App Store or Google Play Store. Closet Screen CRUD, Closet Screen UI, and adding security to the Firebase Realtime Database are the remaining functionality issues until first version is released.

## Known Issues
All known issues, or currently in progress features, can be found under the issues tab.

### Work on this Repo
Prior to working on this repo, your local environment must be setup for React Native development. You will need the following programs:
- Watchman
- xCode
- Android Studio
- Java Development Kit

This article from Expo outlines the steps needed: https://docs.expo.io/get-started/installation/

Clone the repository and run `yarn install`

Start the app by running one of the following *Expo commands:

`yarn start` - starts the Expo Metro Bundler

`yarn web` - starts the Expo Metro Bundler and launches the web version on localhost

`yarn ios` - starts the Expo Metro Bundler and launches the xCode iOS simulator

`yarn android` - starts the Expo Metro Bundler and loads the app on an Android Studio simulator (must have the simulator running before using this command or an APK not found error will appear in the Metro Bundler)

*NOTE: If you don't have Expo cli installed on your computer, you can do that following instructions here: https://docs.expo.io/workflow/expo-cli/

---
## Feedback
Questions, comments, or concerns can be submitted as an issue on this repository. As an open-source project, all developers are encouraged to work on active issues or implement new features by pushing to a separate feature branch. All commits to master must be approved by the Just My Size creators.