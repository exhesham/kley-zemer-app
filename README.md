# Run App

run the next commands
```
npm start -- --reset-cache
npm start-android
```

# Create new build

* change the version at: `C:\projects\kleyzemerstoreapp\README.md\build.gradle`
```
versionCode 3
versionName "1.2"
```
* from the home directory, run the command: `cd android && ./gradlew assembleRelease`
* remove the app from the phone
* tun the next command to install the created release in order to validate it ` cd .. && react-native run-android --variant=release`

