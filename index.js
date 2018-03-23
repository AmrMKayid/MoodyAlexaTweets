var Twit = require('twit');

var T = new Twit({
    consumer_key:         'hLL6HwxD0uu97an6fg4MHQluT'
  , consumer_secret:      'ssGFw32EEWM13X0vVSeW2iiHX00SJ3VxtIdOfhIUsgjm3fxGyC'
  , access_token:         '3358905196-gSbcONPqwB7T2gFlwfD7UE6KsOWaYjpUL4QihOc'
  , access_token_secret:  'agH20qDFpEDMOT8VyBLTnOwvJl4DOaSOxp7raQ0Gyizsl'
})

var options = { screen_name: 'amrmkayid',
                count: 3 };

T.get('statuses/user_timeline', options , function(err, data) {
  for (var i = 0; i < data.length ; i++) {
    console.log(data[i].text);
  }
})

