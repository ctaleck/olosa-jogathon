// Possible values
var sandbox = 'https://www.sandbox.paypal.com/cgi-bin/webscr';
var prod = 'https://www.paypal.com/cgi-bin/webscr';
var emailSchool = 'treasurer@olosa.org';
var emailChurch = 'ourladyofsorrows@sspx.org';
var emailSandbox = 'chris-facilitator@taleck.com';
var href = [
    'https://www.paypal.com/verified/pal=', emailChurch
].join('');

// Calculated cart item with current year
var year = new Date().getFullYear().toString();
var item = year + '+Jog-A-Thon';
// URL config object
var urls = {
    paypalBase: prod,
    paypalEmail: emailSchool,
    paypalItem: item,
    paypalEmailVerifyHref: null
};
