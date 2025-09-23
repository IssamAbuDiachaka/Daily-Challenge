# String Mirror

Given two strings, determine if the second string is a **mirror** of the first.  

A string is considered a mirror if it contains the same letters in reverse order.  

- Treat uppercase and lowercase letters as **distinct**.  
- Ignore all **non-alphabetical** characters.  

---

## Examples

1. `isMirror("helloworld", "helloworld")` → **false**  
2. `isMirror("Hello World", "dlroW olleH")` → **true**  
3. `isMirror("RaceCar", "raCecaR")` → **true**  
4. `isMirror("RaceCar", "RaceCar")` → **false**  
5. `isMirror("Mirror", "rorrim")` → **false**  
6. `isMirror("Hello World", "dlroW-olleH")` → **true**  
7. `isMirror("Hello World", "!dlroW !olleH")` → **true**  
