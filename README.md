rndrawer-implemented-rnrouter
--

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



***Note:*** 
The files have only React-Native code. So there is no Android or iOS folder. But it should be run by using the following instructions.

For iOS; 
* Create a new project by using the command of `react-native init myDrawerExample` on the console. 
* Copy `index.ios.js` file and `src` folder into the `myDrawerExample` project which is newly created.
* Find the line below in the `index.ios.js`; <br>
  `AppRegistry.registerComponent('reactNativeRouterFluxSample', () => Example);` <br>
  and replace with the below line; <br>
  `AppRegistry.registerComponent('myDrawerExample', () => Example);`
* Run the command of `npm i react-native-button --save && npm i react-native-drawer --save && npm i react-native-router-flux --save` on the console in the project directory. <br>
  If `redux` will be used, the command of `npm i redux --save && npm i react-redux --save` should be run too.
* Finally, [official site](https://facebook.github.io/react-native/docs/getting-started.html#quick-start) says that; "Open ios/myDrawerExample.xcodeproj and hit run in Xcode".

For Android;
* Create a new project by using the command of `react-native init myDrawerExample` on the console. 
* Copy `index.Android.js` file and `src` folder into the `myDrawerExample` project which is newly created.
* Find the line below in the `index.Android.js`; <br>
  `AppRegistry.registerComponent('reactNativeRouterFluxSample', () => Example);` <br>
  and replace with the below line; <br>
  `AppRegistry.registerComponent('myDrawerExample', () => Example);`
* Run the command below; <br>
  `npm i react-native-button --save && npm i react-native-drawer --save && npm i react-native-router-flux --save` <br> 
  on the console in the project directory. <br>
  If `redux` will be used, the command of `npm i redux --save && npm i react-redux --save` should be run too.
* Finally, run the command of `react-native run-android` on the console when in the project directory. If a Windows pc is used, then run the command of `react-native start` too.
