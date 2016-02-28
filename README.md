rndrawer-implemented-rnrouter
--

***Note:*** 
The files have only React-Native code. Actually I don't have an iOS to test out it. But it should be run by using the following instructions.

So, to run the code; 
* First `react-native init myDrawerExample` command should be run on the console. 
* Secondly `index.ios.js` file and `src` folder are copied into the new `myDrawerExample` project. And `AppRegistry.registerComponent('reactNativeRouterFluxSample', () => Example);` line of `index.ios.js` file should be changed as `AppRegistry.registerComponent('myDrawerExample', () => Example);`
* Then run the command of `npm i react-native-button --save && npm i react-native-drawer --save && npm i react-native-router-flux --save`. If `redux` will be used, the command of `npm i redux --save && npm i react-redux --save` should be run too.
* Finally, [official site](https://facebook.github.io/react-native/docs/getting-started.html#quick-start) says that; "Open ios/myDrawerExample.xcodeproj and hit run in Xcode".


----

An example for [react-native-drawer](https://github.com/root-two/react-native-drawer) and [react-native-router-flux](https://github.com/aksonov/react-native-router-flux). The example has been developed by using react-native-drawer and react-native-router-flux directions.

With this scaffolding you can create side menu (drawer) and navigate between your screens (pages) easily.

For the sake of example the screens below have been created;
* Login
* Register
* Home
* Screen 1
* Screen 2

The scenarios of the example;
* The user opens the app
* The user logins or registers
* The user navigates the screens by using drawer menu
* The user logs out

![launch](https://raw.githubusercontent.com/efkan/rndrawer-implemented-rnrouter/master/intro.gif)
