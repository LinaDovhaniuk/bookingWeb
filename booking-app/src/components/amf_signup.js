import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: 'eu-central-1',
        userPoolId: 'eu-central-1_sXobUjqVh',
        clientId: '5vpqdi2hlkvqjsjqd3gsama9c8',
        userPoolWebClientId: '5vpqdi2hlkvqjsjqd3gsama9c8',
        redirectUrl: 'http://localhost:3000',

    }
});

// You can get the current config object
const currentConfig = Auth.configure();
var username="testUsername";
var password = "testPassword";

Auth.signUp({
    username,
    password,
    attributes: {
    },
})
    .then(data => console.log(data))
    .catch(err => console.log(err));

const user = await Auth.signIn(username, password);
