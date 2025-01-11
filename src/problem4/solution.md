### 1
```
function sum_to_n(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
```
Complexity: O(n) - The loop runs n times

### 2
```
function sum_to_n(n: number): number {
    return (n * (n + 1)) / 2;
}
```
Complexity: O(1) - The formula calculates the result in constant time.

### 3
```
function sum_to_n(n: number): number {
    if (n <= 1) {
        return n;
    }
    return n + sum_to_n(n - 1);
}
```
Complexity: O(n) - The function is called n times.
