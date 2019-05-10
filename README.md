# PolicyExpert React Coding Assessment

## The task

Extend this app using redux-observable, so it retrieves the content from [this API](https://jsonplaceholder.typicode.com/photos) and then displays it.

For each entry we want to display:

- The title of the album. It should open it on a new tab when clicked
- A thumbnail for the album, BUT, instead of the thumbnail url we receive from the above call, display [a random cat from placekitten](https://placekitten.com/)

We don't want to fetch the kitten images at once, they have to be retrieved as the page is scrolled down, [like this](https://infinite-scroll.com/demo/masonry/).

## The rules

1. Your solution needs to be submitted as a git repo.
1. Commit early, commit often.
   Please understand that this is our only way of getting an idea of how your development process works.
   Your commits will give us an idea of how you approach *TDD*, how you write your tests, how you make them pass, how you refactor.
   Don't be ashamed of committing broken code, just commit every significant step in getting to your solution.
1. Be as functional as you can. Feel free to use [lodash-fp](https://github.com/lodash/lodash/wiki/FP-Guide) or [ramda](https://ramdajs.com/). We use the former, but choice is yours.
1. Your solution *must* be reasonably covered by tests.
1. You can replace this README.md file and document any aspect of your solution as you see fit.
1. Make it as beautiful as you want, but you we don't want you to spend too much time styling.

## Other stuff

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
