# PasswordManagerWeb
This is a web client app for the Password Manager project written in Angular.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Demo
The project is hosted using **Firebase Hosting** on this [URL](https://password-manager-74fdc.web.app)

## Getting Started
1. Download and Install [Node.js](https://nodejs.org/en/download/)
      * Linux (Ubuntu based distros)
      ```console
        sudo apt-get install curl
        curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
        sudo apt-get install nodejs
      ```
2. Clone the [Github Repo](https://github.com/faizan-glitch/password-manager-web.git)
  ```properties
  git clone https://github.com/faizan-glitch/password-manager-web.git
  ```
3. Go into the local copy of the repo.
### Installing Dependencies
Type the following command in the terminal
 ```properties
 npm install
 ```
### Setting the Environment variables
1. Go to **src** folder. Create a folder named **environments**. 
2. Inside the **environments** folder, add the **environment.prod.ts** and the **environment.ts** files.
3. If you don't have these files, create them and add the following code.
  * **environment.prod.ts**
    ```typescript
    export const environment = {
      production: true,
      firebase: {
        apiKey: "Your API-key",
        authDomain: "Your Auth-Domain",
        databaseURL: "Your Database-URL",
        projectId: "Your Project-ID",
        storageBucket: "Your Storage-Bucket",
        messagingSenderId: "Your Messaging-ID",
        appId: "Your App-ID"
      }
    };
    ```
  * **environment.ts**
  ```typescript
    export const environment = {
      production: false,
      firebase: {
        apiKey: "Your API-key",
        authDomain: "Your Auth-Domain",
        databaseURL: "Your Database-URL",
        projectId: "Your Project-ID",
        storageBucket: "Your Storage-Bucket",
        messagingSenderId: "Your Messaging-ID",
        appId: "Your App-ID"
      }
    };
  ```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

