# Spam Detector

Given a phone number in the format `"+A (BBB) CCC-DDDD"`, where each letter represents a digit:

- **A**: Country code (can be any number of digits).
- **BBB**: Area code (always three digits).
- **CCC** and **DDDD**: Local number (always three and four digits, respectively).

We need to determine if it's a spam number based on these rules:

1. The country code is greater than 2 digits long **or** doesn't begin with a zero (`0`).
2. The area code is greater than `900` or less than `200`.
3. The sum of the first three digits of the local number (`CCC`) appears within the last four digits (`DDDD`).
4. The number has the same digit four or more times in a row (ignoring formatting characters).

---

## Tests

1. `isSpam("+0 (200) 234-0182")` → **false**
2. `isSpam("+091 (555) 309-1922")` → **true**
3. `isSpam("+1 (555) 435-4792")` → **true**
4. `isSpam("+0 (955) 234-4364")` → **true**
5. `isSpam("+0 (155) 131-6943")` → **true**
6. `isSpam("+0 (555) 135-0192")` → **true**
7. `isSpam("+0 (555) 564-1987")` → **true**
8. `isSpam("+00 (555) 234-0182")` → **false**
