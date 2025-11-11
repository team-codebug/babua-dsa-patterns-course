/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;

    function isAlphaNumeric(ch) {
        const code = ch.charCodeAt(0);
        // 0–9: 48–57, A–Z: 65–90, a–z: 97–122
        return (
            (code >= 48 && code <= 57) ||
            (code >= 65 && code <= 90) ||
            (code >= 97 && code <= 122)
        );
    }

    while (i < j) {
        let left = s[i];
        let right = s[j];

        if (!isAlphaNumeric(left)) {
            i++;
            continue;
        }

        if (!isAlphaNumeric(right)) {
            j--;
            continue;
        }

        if (left.toLowerCase() !== right.toLowerCase()) {
            return false;
        }

        i++;
        j--;
    }

    return true;
};
