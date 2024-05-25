# rustPlusPlus Credentials Web Application

Application to access FCM Credentials used for the NodeJS Discord Bot [**rustPlusPlus**](https://github.com/alexemanuelol/rustPlusPlus).

![rustplusplus web image](/public/images/fcmCredentials/after_click_install_extension.png)

## How to use

For detailed instructions on how to use the rustPlusPlus Credentials Web Application, please refer to the documentation available at [**Documents Page**](https://rustplusplus-credentials.netlify.app/documents).

By following these steps and referring to the provided documentation, you can easily set up, build, and use the rustPlusPlus Credentials Web Application for your NodeJS Discord Bot.

## Overview

The rustPlusPlus Credentials Web Application is designed to generate and manage FCM (Firebase Cloud Messaging) credentials required for the NodeJS Discord Bot rustPlusPlus. This application provides a streamlined way to obtain and use these credentials without the need for complex configurations or manual steps.

## Why Credentials are Needed

The rustPlusPlus Discord Bot leverages the Rust+ companion app's functionality, which requires authentication through FCM credentials. These credentials allow the bot to receive push notifications and interact with the Rust+ API on behalf of the user. Without these credentials, the bot would be unable to perform tasks such as sending alerts, fetching server information, or executing commands within the Rust game.

## Credential Expiry Period

![rustplusplus web image](/public/images/fcmCredentials/rustplusplus_display_page.png)
According to the [**Rust Pairing Flow**](https://github.com/liamcottle/rustplus.js/blob/master/docs/PairingFlow.md), the Rust Companion API returns a refreshed Steam Auth Token which expires after 2 weeks. This is the primary reason for the 2-week expiry period of the credentials.

# **How-to build for development**

## Download and Install Dependencies

    $ npm install

## Build the Project

    $ npm run build

## Start the Project

    $ npm run start

## Contributors

- UI Design : Provided by **KanghoYoo**@github
- Sidebar Content Idea : Provided by **esk147**@github
