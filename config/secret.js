module.exports = {
    "port" : 4040,
    "db": "mongodb://localhost:27017/e-learning",


    facebook:{
        //clientID: "1748124525246670",
          clientID : "802284326610555",
        //clientSecret: "bc43b530f9704bea2a17cce7b0d82e98",
          clientSecret: "1ff9f21cf0b7a985b8d7525ab7ff4111",
        profile: ["emails","displayName"],
        callbackURL: "http://localhost:4040/auth/facebook/callback"
    },
    "key" : "jiit-learning"
};