const { shell } = require('electron');

export function openLink(url) {
    shell.openExternal(url);
}

export function limitChars(value, number = 30) {

    if(value.length > number) {
        return value.substring(0, number) + '...';
    }

    return value;
}