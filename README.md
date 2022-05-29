# planit-web-tests

## Building
1. Use node version >= `v14.15.4`. If `nvm` installed, execute `nvm use` to activate node version set in `.nvmrc`
 
2. Use either `yarn install` or `npm` to install `node_modules`

## Testing
Use the following commands to run the tests:
    - `yarn run script-open` to run the test headed.
    - `yarn run script-run` to run all tests in the chrome browser.

**Please note** The above run commands can be run using `yarn` as well.

## Test Structure
1. These tests are written using Cypress as a testing tool with Mocha framework.

2. `videos` folder is generated when tests are run headless.
 
3. `screenshots` folder is generated when tests are run headless and when only tests fail.
 
4. `report` folder is generated when tests are run headless and then the `Html` report is generated inside the `report` folder. 