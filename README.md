This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

- Note:
  I have implement the login authantication with the help of supabase realtime services. User will add the post one by one after login.
  With the help of supabase magiclink user will able to login into the application.

  Use below command to login into the application with the help of magic link.
  adb shell am start -W -a android.intent.action.VIEW -d "http://localhost:3000/#access_token=weyJhbGciOiJIUzI1NiIsImtpZCI6InpVbEJrTklnTXJFMTZMMjIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3ZuZXhxaXp5c2hjdXpiZGdtb2J0LnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI3NzI2NmJjNi05YzBiLTRkMDctYmY4NS03ZGE1YTM3ODc0YjQiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzM2MzIxNjQ1LCJpYXQiOjE3MzYzMTgwNDUsImVtYWlsIjoiYmhiaXJsYUBiZXN0cGVlcnMuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoib3RwIiwidGltZXN0YW1wIjoxNzM2MzE4MDQ1fV0sInNlc3Npb25faWQiOiJiMDYyMGJjMC05ODc1LTQ3NTQtYjlhMi05MzBiNDc5NzY4NWEiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.elmDLLwr09YtKF2YuV4SeFkQvlEtB-V3JcRPwCJ94Z&expires_at=1736321645&expires_in=3600&refresh_token=Kh8dWSgfciQNMG6OE0svdQ&token_type=bearer&type=magiclink" com.postfeed

  You need to add new access token and refresh_token into the above url.

  If you want to setup supabase follow the following steps.

  1. Open supabase website : https://supabase.com/
  2. Click on the SignIn button and navigate to the SignUp create an account.
  3. After creating the account successfully verify your account with email address and Login in the supabase website.
  4. When succesfully login create a project on the supabase.
  5. Add email and password to authantication option on the dashboard screen.
  6. After that create a posts table from the SQL Editor.
  7. Add Two policy for SELECT and INSERT the rows into the table.
  8. Enable the permission of realtime database on.

  Thankyou
