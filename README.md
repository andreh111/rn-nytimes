# ny-times react native app

## Android Screenshots

![pic 1 android](https://github.com/andreh111/rn-nytimes/blob/master/demos/android/Screenshot_1641309756.png?raw=true)

![pic 2 android](https://github.com/andreh111/rn-nytimes/blob/master/demos/android/Screenshot_1641309772.png?raw=true)

![pic 3 android](https://github.com/andreh111/rn-nytimes/blob/master/demos/android/Screenshot_1641309918.png?raw=true)

## IOS Screenshots

<div style="display:flex;flex-direction:row">
    <img style="width:100px;height:300px;" src="https://github.com/andreh111/rn-nytimes/blob/master/demos/ios/Simulator%20Screen%20Shot%20-%20iPhone%2013%20-%202022-01-04%20at%2016.22.43.png?raw=true"/>
    <img style="width:100px;height:300px;" src="https://github.com/andreh111/rn-nytimes/blob/master/demos/ios/Simulator%20Screen%20Shot%20-%20iPhone%2013%20-%202022-01-04%20at%2016.22.47.png?raw=true"/>
    <img style="width:100px;height:300px;" src="https://github.com/andreh111/rn-nytimes/blob/master/demos/ios/Simulator%20Screen%20Shot%20-%20iPhone%2013%20-%202022-01-04%20at%2016.25.01.png?raw=true"/>
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

Run the following commands: 


For testing on iOS
Build the iOS app using:

`detox build -c ios.sim.release`

Start the test using:

`detox test -c ios.sim.release`