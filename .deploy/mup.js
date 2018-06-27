module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '165.227.112.13',
      username: 'root',
      pem: './deploy_key'
      // or neither for authenticate from ssh-agent
    }
  },

  app: {
    // TODO: change app name and path
    name: 'zanmi',
    path: '../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'https://osomchile.com',
      MONGO_URL: 'mongodb://mongodb:27017/meteor_zamni',
      MONGO_OPLOG_URL: 'mongodb://mongodb:27017/local',
      PORT: 2018
    },

    docker: {
      // change to 'abernix/meteord:base' if your app is using Meteor 1.4 - 1.5 
      image: 'zodern/meteor:root',
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  },
  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps

  proxy: {
    domains: 'osomchile.com,www.osomchile.com',

    ssl: {
      // Enable Let's Encrypt
      letsEncryptEmail: 'gabriel@garox.org'
    }
    
  }

  // proxy: {
  //   domains: 'mywebsite.com,www.mywebsite.com',

  //   ssl: {
  //     // Enable Let's Encrypt
  //     letsEncryptEmail: 'email@domain.com'
  //   }
  // }
};
