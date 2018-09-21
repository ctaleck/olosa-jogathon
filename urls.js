var sandbox = 'https://www.sandbox.paypal.com/cgi-bin/webscr';
var prod = 'https://www.paypal.com/cgi-bin/webscr';
var item = 'OLOS+Academy+2018+Jog-a-thon';
var email = 'treasurer@olosa.org';
var emailSandbox = 'chris-facilitator@taleck.com';
var href = [
    'https://www.paypal.com/verified/pal=', email
].join('');

var urls = {
    paypalBase: sandbox,
    paypalEmail: emailSandbox,
    paypalItem: item,
    paypalEmailVerifyHref: null // href
};
