# ny-times react native app
This app displays articles from NY Times News Api and it is written in Typescript.

## Android Screenshots
<div style="display:flex;flex-direction:row">
    <img style="width:200px;height:400px;margin:10" src="https://github.com/andreh111/rn-nytimes/blob/master/demos/android/Screenshot_1641309756.png?raw=true"/>
    <img style="width:200px;height:400px;margin:10" src="https://github.com/andreh111/rn-nytimes/blob/master/demos/android/Screenshot_1641309772.png?raw=true"/>
    <img style="width:200px;height:400px;margin:10" src="https://github.com/andreh111/rn-nytimes/blob/master/demos/android/Screenshot_1641309918.png?raw=true"/>
</div>

## IOS Screenshots

<div style="display:flex;flex-direction:row">
    <img style="width:200px;height:400px;margin:10" src="https://github.com/andreh111/rn-nytimes/blob/master/demos/ios/Simulator%20Screen%20Shot%20-%20iPhone%2013%20-%202022-01-04%20at%2016.22.43.png?raw=true"/>
    <img style="width:200px;height:400px;margin:10" src="https://github.com/andreh111/rn-nytimes/blob/master/demos/ios/Simulator%20Screen%20Shot%20-%20iPhone%2013%20-%202022-01-04%20at%2016.22.47.png?raw=true"/>
    <img style="width:200px;height:400px;margin:10" src="https://github.com/andreh111/rn-nytimes/blob/master/demos/ios/Simulator%20Screen%20Shot%20-%20iPhone%2013%20-%202022-01-04%20at%2016.25.01.png?raw=true"/>
</div>





## Install Dependencies and run the application

1 - Clone the repository : `git clone https://github.com/andreh111/rn-nytimes.git`

2 - Go to the project folder and run : `npm install`

3 - Go to the ios folder and run: `pod install`

4 - To Run the application on IOS run: `npx react-native run-ios`
  - To Run the application on Android run: `npx react-native run-android`


## To run unit tests

Run following command:

`npm run test`


## To Run E2E Testing

Need first to install Detox globally
`npm install -g detox-cli`

Run the following commands: 


For testing on iOS
Build the iOS app using:

`detox build -c ios.sim.release`

Start the test using:

`detox test -c ios.sim.release`


## 3rd Party Libraries used

`use-debounce`: A library used that is a custom hook used to debounce value when searching an article. Link: https://github.com/xnimorz/use-debounce

`axios`: To make http calls

`react-native-vector-icons`: used to display icons.

`react-navigation/native`: used for app navigation purposes.
