// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCBPQsgFMNj9JRGM1u9JInc9qdtolGwfh8",
    authDomain: "cop4331c.firebaseapp.com",
    databaseURL: "https://cop4331c.firebaseio.com",
    projectId: "cop4331c",
    storageBucket: "cop4331c.appspot.com",
    messagingSenderId: "200522304857"
  },
  mapbox: {
    // accessToken: 'pk.eyJ1IjoiY3N0ZXZlbjE1IiwiYSI6ImNqZW01enFuejBndnIyeHFtMjE2eGJjdWUifQ.ijNpFhnB7y8tdIRqT4fWYw'
    accessToken: 'pk.eyJ1Ijoibm90YWthbmUiLCJhIjoiY2plNHdqeXphMnBjbzJ4bW9kNDJxZHk2eSJ9.pViraf7NrFYgzmnqTd_vgQ'
  }
};
