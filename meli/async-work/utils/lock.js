const locks = {};

function acquire(key, callback) {
    if (!locks[key]) {
        locks[key] = true;
        try {
            callback();
        } finally {
            locks[key] = false;
        }
    } else {
        throw new Error('Resource locked, tente novamente');
    }
}

module.exports = { acquire };
