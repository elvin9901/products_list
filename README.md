# Product List App

This project is card list of the products provided by [fakestoreapi.com/products](https://fakestoreapi.com/products).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Github Secrets configuration
For the automatic deploiment 3 variables needs to be defined in the project secrets:
* PERSONAL_ACCESS_TOKEN : 
Create an access token by navigating to your github `Settings/Developer settings / Personal access tokens`. Click on `Generate new token` Button. Check repo in the `Select scopes` and give the token a name, the n click on the `Generate token` button. Copy the token.
From the repository page, go to  `Settings/Secrets` then click `New repository secret`. Fill the input box with PERSONAL_ACCESS_TOKEN as Name and the generated token as Value.
* EMAIL : your email used for github as Value.
* USERNAME : your Github username as Value.

### homepage
To deploy in Github pages make sure to add the attribute `homepage` in package.json . The value sould be "https://<github_user_name>.github.io/<repo_name>".
replace `github_user_name` and `repo_name` with the appropriate value.

### Deployment | Github Actions
This application is hosted by Github Pages. You can try it from [here](https://elvin9901.github.io/products_list).

The deploiment can be done manually through the command `npm run deploy`. However it have been fully automated through Github actions in the event of `push`.

The configuration of the workflow can be found under the directory `.github\workflows\node.js.yml`.
The needed packages are installed automatically, the repository owner is is deduced from the previously configured repository secrets, then the command `npm run deploy`.