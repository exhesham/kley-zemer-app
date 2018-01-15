# Run App

run the next commands
```
npm start -- --reset-cache
npm start-android
```

# Create new build

* change the version at: `C:\projects\kleyzemerstoreapp\android\app\build.gradle`
```
versionCode 3
versionName "1.2"
```
* from the home directory, run the command:
 `cd android && ./gradlew assembleRelease && cd ..`
* remove the app from the phone
* tun the next command to install the created release in order to validate it ` react-native run-android --variant=release`


# Vector Icons Ref
`https://oblador.github.io/react-native-vector-icons/`
