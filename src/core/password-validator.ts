const MINIMUM_LENGTH = 6;
const regExp_numbers = /\d/;
const regExp_capitalLetters = /[A-Z]/;



export function isStrongEnough(password: string) {
    return hasMinimumLength(password) && containNumbers(password) && containCapitalLetter(password);
}

function hasMinimumLength(password: string) {
    return password.length >= MINIMUM_LENGTH;
}

function containNumbers(password: string) {
    return regExp_numbers.test(password);
}

function containCapitalLetter(password: string) {
    return regExp_capitalLetters.test(password);
}