# Setup Guide

## 1. Clone the Repository
```sh
git clone https://github.com/your-repo/date-to-day-app.git
cd date-to-day-app
```

---

## 2. Setting Up the Backend (Express.js)
### Install Dependencies
```sh
cd backend
npm install
```

### Run the Server
```sh
npm start
```
- The API will be available at `http://localhost:5000`

---

## 3. Setting Up the React Native App
### Install Dependencies
```sh
cd ../mobile
npm install
```

### Run the App (Using Expo)
```sh
npx expo start
```
- If you're using React Native CLI, use:
```sh
npx react-native run-android   # For Android
npx react-native run-ios       # For iOS
```

---

## 4. Testing the API
- Use Postman or `cURL` to test the API by sending a `POST` request to:
  ```
  http://localhost:5000/get-day
  ```
- Example request:
  ```json
  {
    "date": "2025-02-15"
  }
  ```

---

## 5. Deployment
- **Backend**: Deploy on Render, Vercel, or AWS.
- **Mobile App**: Build an APK using:
  ```sh
  npx expo build:android
  ```

---

## 6. Troubleshooting
### Common Issues
| Issue | Solution |
|-------|----------|
| `EADDRINUSE: port 5000` | Change the port in `server.js` |
| `Network Request Failed` | Ensure the backend URL is correct in the React Native app |