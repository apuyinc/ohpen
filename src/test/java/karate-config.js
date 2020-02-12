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
    securityToken : '16cddf687f149ed6459b4e3df76da02efed1e546'
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