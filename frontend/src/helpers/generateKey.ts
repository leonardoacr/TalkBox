export const generateKey = (): string => {
    const lettersAndDigits = "abcdefghijklmnopqrstuvwxyz";
    let key = "";
    for (let i = 0; i < 3; i++) {
        key += lettersAndDigits.charAt(Math.floor(Math.random() * lettersAndDigits.length));
    }
    key += "-";
    for (let i = 0; i < 4; i++) {
        key += lettersAndDigits.charAt(Math.floor(Math.random() * lettersAndDigits.length));
    }
    return key;
};
