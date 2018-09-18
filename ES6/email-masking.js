let testmail = 'chan@testmail.com'

function maskEmail(email) {
    // get index of email
    let at_index = email.indexOf('@');

    // replace the substring starting from 0 to index of @
    // with repeated '*' by index of @
    let mail = email.replace(email.substr(0, at_index), '*'.repeat(at_index));
    return mail;
}

let myMail = maskEmail(testmail);
console.log(myMail);
