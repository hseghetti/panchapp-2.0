// VENDOR LIBS
import firebase from 'firebase';

// SETTINGS
import settings from 'lib/config/settings';

export default {
    initializeApp(appName) {
        firebase.initializeApp({
            apiKey: settings[appName].apiKey,
            authDomain: settings[appName].authDomain,
            databaseURL: settings[appName].databaseURL,
            storageBucket: settings[appName].storageBucket
        });
    }
};
