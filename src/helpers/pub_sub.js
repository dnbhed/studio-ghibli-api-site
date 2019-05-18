const PubSub = {
    publish: function (channel, payload) {
        console.log(`publishing on channel ${channel} with payload ${payload}`);

        const event = new CustomEvent(channel, {
            detail: payload
        });
        document.dispatchEvent(event);
    },

    subscribe: function (channel, callback) {
        console.log(`subscibing on channel ${channel}`);

        document.addEventListener(channel, callback);
    }
};

module.exports = PubSub;