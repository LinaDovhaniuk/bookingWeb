import { Auth } from 'aws-amplify';

var username="testUsername";
var password = "testPassword";


const user = Auth.signIn(username, password);
