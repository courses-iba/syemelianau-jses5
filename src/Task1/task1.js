function forLoop() {
    var answer = '';
    // loop, that create '#\n##\n###\n####\n#####\n######\n#######\n'
    for (var string = '#'; string.length < 8; string += '#') {
        answer += (string + '\n');
    }
    return answer;
}
