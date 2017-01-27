function effacer(char, string) {
    var pattern = new RegExp(char, 'g');
    console.log(string.replace(pattern, ''));
}

effacer('a', 'toto');
effacer('o', 'toto');