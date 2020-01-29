function fixedText() {
    var text = "'I'm the cook,' he said, 'it's my job.'";
    /* replaces all the dialogue quotes with double quotes,
     * while keeping the single quotes used in contractions */
    return text.replace(/(^)'|(\W)'|([\w\W])'\W/g, '$1$2$3"');
}
