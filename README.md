# Scan Page

## This Project was bootstrapped using [CRA](https://github.com/facebook/create-react-app).

In general this is a simple SPA projects, which serves the scan page which resembles the provided screenshot.
It has 2 routes:

- homepage - which serves scan page
- catch routes (404) - for all other pages just because I do not like broken experience.

You can find that styles are `MUI (Material UI)` based with theme adjusted for palette from screenshot.
I used your new logo and favicon to add those extra touches.

I used [TypeScript](https://www.typescriptlang.org/) in the project for types safety.

I decided to omit global state management at this case, since at the moment we need just to fetch initial data and work with it inside our FE which consists of 2 components.
So for fetching data - I have created hook `useScanResult`.
In the future this can be improved even further to use React Context if at some point we will create more components or sub-pages that will need that data.

Since we do not have endpoint to use, I mocked request using old-but-gold Promise which you can find in `requests` folder for now it serves mocked data from fixtures.

You will find data models in `models` folder.

When you search in project you will find 2 ignore statements:

1. for console log in catch - I did not implement sophisticated error management, in real project that would be probably a call to some monitoring service like DataDog.
2. for `getItem` in `Tree.tsx` - for some reason MUI has types issue and this method is not recognised in types, while it is still present. I had to ignore that error.

I believe this work still can use some improvements, however, we all start somewhere. :)

I'd like to present you with my list of top-improvements:

1. Responsiveness of layout
2. Unit tests
3. Substitute mocked request with a real one
4. Improve error handling, create error boundary
5. I might go for using storybook for components

I have checked a11y using:

- keyboard
- wave plugin for chrome

## Prerequisites

1. `node` version: >=20
2. preinstalled `yarn`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
