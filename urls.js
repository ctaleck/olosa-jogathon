var sandbox = 'https://www.sandbox.paypal.com/cgi-bin/webscr';
var prod = 'https://www.paypal.com/cgi-bin/webscr';
var item = 'OLOS+Academy+2018+Jog-a-thon';
var emailSchool = 'treasurer@olosa.org';
var email = 'ourladyofsorrows@sspx.org';
var emailSandbox = 'chris-facilitator@taleck.com';
var href = [
    'https://www.paypal.com/verified/pal=', email
].join('');

var urls = {
    paypalBase: prod,
    paypalEmail: email,
    paypalItem: item,
    paypalEmailVerifyHref: null // href
};
