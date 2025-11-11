class Solution:
    def isPalindrome(self, s: str) -> bool:
        i, j = 0, len(s) - 1

        def is_alphanumeric(ch):
            code = ord(ch)
            # 0–9: 48–57, A–Z: 65–90, a–z: 97–122
            return (48 <= code <= 57) or (65 <= code <= 90) or (97 <= code <= 122)

        while i < j:
            left, right = s[i], s[j]

            if not is_alphanumeric(left):
                i += 1
                continue

            if not is_alphanumeric(right):
                j -= 1
                continue

            if left.lower() != right.lower():
                return False

            i += 1
            j -= 1

        return True
