# Firebase Moralis Auth Demo

This project contains a simple demo of Moralis Auth integrated with Firebase Auth.

Required Firebase services:

- [Hosting](https://firebase.google.com/docs/hosting)
- [Authentication](https://firebase.google.com/docs/auth)
- [Cloud Functions](https://firebase.google.com/docs/functions) (only in the "Pay as you go" billing plan).

## 🚀 How to Start

1. Clone this repo.
2. [Install Firebase CLI](https://firebase.google.com/docs/cli) globally: `npm install -g firebase-tools`
3. Login to your account: `firebase login`
4. Get list of your projects: `firebase projects:list`. If this list is empty you should add a new project. You can do it by the Firebase Console.
5. Set your project ID: `firebase use <PROJECT_ID>`
6. Copy `functions/.env.example` to `functions/.env` and set your Moralis API key in the file.
7. Generate a certificate for [Service Account](https://firebase.google.com/support/guides/service-accounts) and copy it to `functions/src/serviceAccountCert.json`.

### 🔌 Run Locally

1. [Install Java](https://www.oracle.com/java/technologies/javase/jdk18-archive-downloads.html) on your computer. Functions Emulator requires Java.
2. Run emulators: `firebase emulators:start`
3. Open `http://localhost:5555/` in your browser.

### 🔥 Deploy to Production

1. Activate Authorization.
2. Deploy: `firebase deploy`