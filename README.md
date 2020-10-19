# jablotron-puppeteer
Automate the use of Jablotron Alarm with Puppeteer for use with Alexa, Google Home, etc.

## Install the dependencies

```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
npm run dev
```

### Start the app for production

```bash
npm run deploy
```

### Lint code with eslint 

```bash
npm run test
```

## How to use

Send an HTTP Post request with this json body

```json
{
    "email":"your email",
    "password":"your password",
    "code":"your code",
    "zone":["1","2"] // array with your alarm zone
}
```
