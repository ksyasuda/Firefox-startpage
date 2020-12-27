---
title: "Sudacode Startpage"
date: "Mon Oct 19 15:42:34 2020"
---

# Sudacode Startpage

![image of startpage](https://imagizer.imageshack.com/img924/9029/4Y9NV5.png)

This startpage was heavily inspired by [this page](https://github.com/dbuxy218/Prismatic-Night "dbuxy's startpage") that I found while browsing the [startpages subreddit](https://www.reddit.com/r/startpages/ "Startpages Reddit").

One of the major differences betwen the two starpages is that my version was written from the ground-up in React.js, while the page by `dbuxy218` is written in Vanilla HTML/css/JavaScript.

There are two other features that are completed at the moment. First is that I am making use of the [hidden ESPN API endpoints](https://gist.github.com/akeaswaran/b48b02f1c94f873c6655e7129910fc3b "hidden ESPN API GitHub gist") to query for scores and udpates from my favorite sports teams.

The next feature that I included is the current temperature, high/low, descriptin, and wind speed provided by [OpenWeatherMap](https://openweathermap.org/ "OpenWeatherMap homepage")

In the future, I plan to include more scores for golf, basketball, and possibly others. I would also like to get it to query the latest news stories and display that somewhere on the screen.

---

## Setting as Firefox Home Page

First download the soruce code to your machine with

```sh
git clone https://github.com/ksyasuda/Firefox-startpage.git
```

After you have the source code downloaded go into the downloaded folder with `cd firefox-startpage`

Once inside the `Firefox-startpage` project folder do the following:

1. run `yarn install` to download the dependencies
2. run `yarn build` to run webpack and generate the `build` folder
3. In the home section of the Firefox preferences, it should say Homepage and New Windows. In the drop-down beside that, select Custom URLs
4. Set the custom url to `~/path_to_firefox-startpage/build/index.html`

Then when you go to the Firefox Home page you should see the Sudacode Startpage instead.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
