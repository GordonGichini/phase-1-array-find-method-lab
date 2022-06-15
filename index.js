// code your solution here
function findMatching(source, sought){
    return source.filter(
        (possibleMatch) => possibleMatch.toLowerCase() ===sought.toLowerCase

    );
    }
    function fuzzyMatch(source, testString){
        return source.filter(
            (possibleMatch) =>
            posssibleMatch.toLowerCase().indexof(testString.toLowerCase()) === 0
        );
    }
    function matchName(source, soughtName) {
        return source.filter((record) => record.name ===soughtName);
    }