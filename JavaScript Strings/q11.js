function replaceAll(str, oldWord, newWord) {
    let regex = new RegExp(oldWord, "g");
    return str.replace(regex, newWord);
}

console.log(replaceAll("the cat sat on the mat", "the", "a"));