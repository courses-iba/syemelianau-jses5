/* car and cat */
verify(/ca[rt]/,
    ['my car', 'bad cats'],
    ['camper', 'high art']);

/* pop and prop */
verify(/pr?op/,
    ['pop culture', 'mad props'],
    ['plop']);

/* ferret, ferry, and ferrari */
verify(/ferr(et|y|ari)/,
    ['ferret', 'ferry', 'ferrari'],
    ['ferrum', 'transfer A']);

/* Any word ending in ious */
verify(/ious\b/,
    ['how delicious', 'spacious room'],
    ['ruinous', 'consciousness']);

/* A whitespace character followed by a dot, comma, colon, or semicolon */
verify(/\s[.,:;]/,
    ['bad punctuation .'],
    ['escape the dot']);

/* A word longer than six letters */
verify(/\b\w{7,}\b/,
    ['hottentottententen'],
    ['no', 'hotten totten tenten']);

/* A word without the letter e */
verify(/\b[^e\s]+\b/,
    ['red platypus', 'wobbling nest'],
    ['earth bed', 'learning ape']);


function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source === '...') {
        return false;
    }
    yes.forEach(function (s) {
        if (!regexp.test(s)) {
            console.log('Failure to match "' + s + '"');
            return false;
        }
    });
    no.forEach(function (s) {
        if (regexp.test(s)) {
            console.log('Unexpected match for "' + s + '"');
            return false;
        }
    });
}
