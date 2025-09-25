# Problem: Second Largest

Given an array, return the **second largest distinct number**.

---

## Examples

- `secondLargest([1, 2, 3, 4])` → `3`  
- `secondLargest([20, 139, 94, 67, 31])` → `94`  
- `secondLargest([2, 3, 4, 6, 6])` → `4`  
- `secondLargest([10, -17, 55.5, 44, 91, 0])` → `55.5`  
- `secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0])` → `0`  

---

## Notes
- The second largest **distinct** value means duplicates of the maximum don’t count.  
  Example: `[2, 3, 4, 6, 6]` → maximum is `6`, but the second largest is `4`.  
- Works with integers, floats, and negative numbers.  
- Input always contains at least two distinct values.
