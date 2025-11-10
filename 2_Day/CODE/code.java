class Solution {
    public boolean isPalindrome(String s) {
        int i = 0,
            j = s.length() - 1;

        while (i < j) {
            char left = s.charAt(i);
            char right = s.charAt(j);

            if (!Character.isLetterOrDigit(left)) {
                i = i + 1;
                continue;
            }

            if (!Character.isLetterOrDigit(right)) {
                j = j - 1;
                continue;
            }

            if (Character.toLowerCase(left) != Character.toLowerCase(right)) {
                return false;
            }

            i = i + 1;
            j = j - 1;
        }

        return true;
    }
}
