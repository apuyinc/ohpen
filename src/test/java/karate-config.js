function fn() {    
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    baseUrl : 'https://api.github.com/',
    usersUrl : 'users',
    userUrl : 'user', 
    reposUrl : 'repos', 
    signupCheckUrl : 'signup_check',
    clientId : '3c7b949c34d9e927992b',
    clientSecret : '87fb9dd597dfbd2416aa57e73f9f4d61090084a6',
    securityToken : 'f4955b23ad877bd7d266601b295909910db7a1f8'
  };
  
  if (env == 'dev') {
    baseUrl = 'https://api.github.com/'
  } else if (env == 'qa') {
    baseUrl = 'https://github.com/'
  }
  karate.configure('connectTimeout', 5000);
  karate.configure('readTimeout', 5000);
  return config;
}