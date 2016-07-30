**Deprecated** - This repo uses obsolete versions of `react-native-router-flux` and `react-native-drawer`.<br>
**Recommendation** - Try the newest versions of `react-native-router-flux` and `react-native-drawer`. They are not nightmares. Believe it! **You can!** <br><br>
Pull requests to upgrade this sample are welcomed.

rndrawer-implemented-rnrouter
--

An example for [react-native-drawer](https://github.com/root-two/react-native-drawer) and [react-native-router-flux](https://github.com/aksonov/react-native-router-flux). The example has been developed by using react-native-drawer 1.X and react-native-router-flux 2.X. The new versions of the libraries are not stable yet (2016-04-24). You might try to contribute them! Both of them welcome the new PR.

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

*The example has been shaped like an* ***Android*** *app. Actually, it is an* ***cross-platform*** *app and you could give shape like an* ***IOS*** *app.*

![launch](https://raw.githubusercontent.com/efkan/rndrawer-implemented-rnrouter/master/presentation.gif)


Installation
-------------

**iOS**

1. Run the command of `react-native init reactNativeRouterFluxSample & cd reactNativeRouterFluxSample`
2. Then `npm i --save react-native-drawer@1.16.7 & npm i --save react-native-router-flux@2.2.7 & npm i --save react-native-button@1.4.2`
3. Then copy `src` folder and `index.ios.js` file of rndrawer-implemented-rnrouter into the new initiated project.
4. Finally, [official site](https://facebook.github.io/react-native/docs/getting-started.html#quick-start) says that; "Open ios/reactNativeRouterFluxSample.xcodeproj and hit run in Xcode".


**Android**

1. Run the command of `react-native init reactNativeRouterFluxSample & cd reactNativeRouterFluxSample`
2. Then `npm i --save react-native-drawer@1.16.7 & npm i --save react-native-router-flux@2.2.7 & npm i --save react-native-button@1.4.2`
3. Then copy `src` folder and `index.android.js` file of rndrawer-implemented-rnrouter into the new initiated project.
4. Finally, run the command of `react-native run-android & react-native start` and then click to the Reload button on the red screen.
