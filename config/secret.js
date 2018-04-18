module.exports = {
    "port" : 4040,
    "db": "mongodb://localhost:27017/e-learning",


    facebook:{
        clientId: "1748124525246670",
        clientSecret: "bc43b530f9704bea2a17cce7b0d82e98",
        profile: ["emails","displayName"],
        callbackUrl: "http://localhost:4040/auth/facebook/"
    },
    "key" : "jiit-learning"
};