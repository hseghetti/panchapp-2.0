// LIBS
import { refs } from 'lib/firebase-app';

export default {

    update(app, config, callback) {
        refs[app].push(config, callback);
    },

    delete(app, key) {
        refs[app].child(key).remove();
    }
};
