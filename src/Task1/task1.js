function forLoop() {
    var answer = '';
//cycle will return "#\n##\n###\n####\n#####\n######\n#######\n" string
    for (var string = '#'; string.length < 8; string += '#') {
        answer += (string + '\n');
    }

    return answer;
}
