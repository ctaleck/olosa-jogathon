var sandbox = 'https://www.sandbox.paypal.com/cgi-bin/webscr';
var prod = 'https://www.paypal.com/cgi-bin/webscr';
var item = 'OLOS+Academy+2018+Jog-a-thon';
var email = 'treasure@olosa.org';
var href = [
    'https://www.paypal.com/verified/pal=', email
].join('');

var urls = {
    paypalBase: sandbox,
    paypalEmail: email,
    paypalItem: item,
    paypalEmailVerifyHref: null // href
};