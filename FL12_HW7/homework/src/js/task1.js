'use strict';
const USERMAIL = 'user@gmail.com';
const ADMINMAIL = 'admin@gmail.com';
const MINEMAILLENGTH = 5;
const MINPASSLENGHT = 6;
let userPass = 'UserPass';
let adminPass = 'AdminPass';

let userEmail = prompt('Please enter your email', '');
if (userEmail === '' || userEmail === null) {
    alert('Canceled');
} else if (userEmail.length < MINEMAILLENGTH) {
    alert('I don\'t know any emails having name length less than 5 symbols.');
} else if (userEmail !== USERMAIL && userEmail !== ADMINMAIL) {
    alert('I don\'t know you');
} else {
    let password = prompt('Please enter your password', '');
    if (password === '' || password === null) {
        alert('Canceled');
    } else if (userEmail === USERMAIL && password !== userPass
        || userEmail === ADMINMAIL && password !== adminPass) {
        alert('Wrong password');
    } else {
        if (!confirm('Do you want to change your password?')) {
            alert('You have failed the change.');
        } else {
            let tempPass = prompt('Please enter your old password', '');
            let newPass, newPassConf;
            if (tempPass === '' || tempPass === null) {
                alert('Canceled');
            } else if (tempPass !== userPass && tempPass !== adminPass) {
                alert('Wrong password');
            } else if (userEmail === USERMAIL && tempPass === userPass) {
                newPass = prompt('Please enter a new password', '');
                if (newPass === '' || newPass === null) {
                    alert('Canceled');
                } else if (newPass.length < MINPASSLENGHT) {
                    alert('It\'s too short password. Sorry.');
                } else {
                    newPassConf = prompt('Please enter the new password again', '');
                    if (newPassConf !== newPass) {
                        alert('You wrote the wrong password.');
                    } else {
                        userPass = newPass;
                        alert('You have successfully changed your password');
                    }
                }
            } else if (userEmail === ADMINMAIL && tempPass === adminPass) {
                newPass = prompt('Please enter a new password', '');
                if (newPass === '' || newPass === null) {
                    alert('Canceled');
                } else if (newPass.length < MINPASSLENGHT) {
                    alert('It\'s too short password. Sorry.');
                } else {
                    newPassConf = prompt('Please enter the new password again', '');
                    if (newPassConf !== newPass) {
                        alert('You wrote the wrong password.');
                    } else {
                        adminPass = newPass;
                        alert('You have successfully changed your password');
                    }
                }
            }
        }
    }
}