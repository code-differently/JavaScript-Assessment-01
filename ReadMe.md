# Problem 01

### Problem Statement

You're creating a function for a software application, and this function revolves around the number `50`. Your task is to create a function named `halfWay`. The function takes an integer value `m` and returns the absolute difference between `m` and `50`. However, there's a twist: if `m` is greater than `50`, the function should return half the absolute difference.

Your `halfWay` function should accept a single parameter:
1. `m`: an integer value.

The function should return the absolute difference between `m` and `50` if `m` is less than or equal to `50`. If `m` is greater than `50`, it should return half the absolute difference.

Here are some examples:

- `halfWay(48)` should return `2` because 48 is less than 50, and the difference between 48 and 50 is 2.

{Try It!}(node .guides/halfWay/try-it-01.js)

- `halfWay(25)` should return `25` because 25 is less than 50, and the difference between 25 and 50 is 25.

{Try It!}(node .guides/halfWay/try-it-02.js)

- `halfWay(50)` should return `0` because 50 equals 50, so there is no difference.

{Try It!}(node .guides/halfWay/try-it-03.js)

- `halfWay(52)` should return `1` because 52 is more than 50, so we return half the absolute difference, which is 1 (since the difference between 52 and 50 is 2).

{Try It!}(node .guides/halfWay/try-it-04.js)

### Solution

node .guides/secure/halfWayTest.js

---

### Test Cases

1. **Test Case 1:** 
   - **Input:** `halfWay(45)`
   - **Expected Output:** `5`
   - **Explanation:** Since 45 is less than 50, the difference is 5.


2. **Test Case 2:**
   - **Input:** `halfWay(60)`
   - **Expected Output:** `5`
   - **Explanation:** The difference between 60 and 50 is 10. Since 60 is greater than 50, we return half the difference, which is 5.


3. **Test Case 3:**
   - **Input:** `halfWay(30)`
   - **Expected Output:** `20`
   - **Explanation:** Since 30 is less than 50, the difference is 20.


4. **Test Case 4:**
   - **Input:** `halfWay(70)`
   - **Expected Output:** `10`
   - **Explanation:** The difference between 70 and 50 is 20. Since 70 is greater than 50, we return half the difference, which is 10.


5. **Test Case 5:**
   - **Input:** `halfWay(40)`
   - **Expected Output:** `10`
   - **Explanation:** Since 40 is less than 50, the difference is 10.


# Problem 02

### Problem Statement

You're crafting a function for a new puzzle game, and this function is central to the game's mechanics. The function is named `distanceAdjust`. The function will take two integer values, `m` and `factor`.

Your `distanceAdjust` function should accept two parameters:
1. `m`: an integer value which is the target.
2. `factor`: an integer value which will be the adjustment factor.

The function should work as follows:

- If `m` is less than `50`, return the absolute difference between `m` and `50`.
- If `m` equals `50`, return `0`.
- If `m` is greater than `50`, then:
  - If `factor` is even, return half the absolute difference between `m` and `50`.
  - If `factor` is odd, return double the absolute difference between `m` and `50`.

---

**Understanding the Concept of Even or Odd:**

You know how every whole number is either "even" or "odd", right? Think about numbers like 2, 4, 6, and 8; they are all even. Numbers like 1, 3, 5, and 7 are odd. There's a neat trick in math (and programming!) that helps us figure out if a number is even or odd.

The trick is using something called the "remainder" when you divide by 2. If a number is divided by 2 and there's no remainder (meaning it divides perfectly), then it's an even number. If there's a remainder (specifically a remainder of 1), then it's an odd number.

In programming, we use a special symbol `%` to find out the remainder. This is called the "modulus" operator. 

**Let's Code:**

Here's a simple way to check if a number is even in JavaScript:

```javascript
const isEvenv= (number)=> {
  if (number % 2 === 0) {
    return true;  // The number is even
  } else {
    return false; // The number is odd
  }
}

// Let's try it out!
console.log(isEven(4));  // This will say "true" because 4 is even
console.log(isEven(7));  // This will say "false" because 7 is odd
```

In this code, the `isEven` function tells us if a number is even (`true`) or odd (`false`). The `%` symbol checks the remainder. So, `number % 2` is asking, "What's left over when you divide `number` by 2?"

---

Here are some examples:

- `distanceAdjust(48, 3)` should return `2` because 48 is less than 50, and the difference between 48 and 50 is 2.

{Try It!}(node .guides/distanceAdjust/try-it-01.js)

- `distanceAdjust(25, 7)` should return `25` as 25 is less than 50, and the difference between 25 and 50 is 25.

{Try It!}(node .guides/distanceAdjust/try-it-02.js)

- `distanceAdjust(50, 4)` should return `0` because 50 equals 50.

{Try It!}(node .guides/distanceAdjust/try-it-03.js)

- `distanceAdjust(52, 2)` should return `1` because 52 is more than 50, and the adjustment factor is even, so we return half the absolute difference.

{Try It!}(node .guides/distanceAdjust/try-it-04.js)

- `distanceAdjust(52, 3)` should return `4` because 52 is more than 50, and the adjustment factor is odd, so we return double the absolute difference.

{Try It!}(node .guides/distanceAdjust/try-it-05.js)

### Solution

{Check It!|assessment}
node .guides/secure/distanceAdjustTest.js


### Test Cases

1. **Test Case 1:** 
   - **Input:** `distanceAdjust(45, 6)`
   - **Expected Output:** `5`
   - **Explanation:** Since 45 is less than 50, the difference is 5. The factor is ignored in this case.

2. **Test Case 2:**
   - **Input:** `distanceAdjust(50, 9)`
   - **Expected Output:** `0`
   - **Explanation:** 50 equals 50, so the output is 0. The factor is ignored in this scenario.

3. **Test Case 3:**
   - **Input:** `distanceAdjust(55, 4)`
   - **Expected Output:** `2.5`
   - **Explanation:** The difference between 55 and 50 is 5. Since the factor is even, we return half the difference, which is 2.5.


4. **Test Case 4:**
   - **Input:** `distanceAdjust(60, 5)`
   - **Expected Output:** `20`
   - **Explanation:** The difference between 60 and 50 is 10. Since the factor is odd, we return double the difference, which is 20.


5. **Test Case 5:**
   - **Input:** `distanceAdjust(70, 8)`
   - **Expected Output:** `10`
   - **Explanation:** The difference between 70 and 50 is 20. Since the factor is even, we return half the difference, which is 10.

# Problem 03

### Problem Statement

You're a cat owner, and your feline friend, Whiskers, has an odd habit. Whiskers tends to scratch furniture if left alone during certain hours. You want to create a function named `catScratch` to determine if Whiskers is likely to scratch your furniture based on the current hour.

The `catScratch` function should accept two parameters:

1. `alone`: a boolean value indicating if Whiskers is left alone. `true` means Whiskers is alone, `false` means someone is home.
2. `hour`: an integer value representing the current hour in a 24-hour format (0 to 23).

Your furniture is at risk if Whiskers is alone and the hour is between 10 to 15 (10 AM to 3 PM). The function should return `true` if your furniture is at risk and `false` otherwise.

Here are some examples:

- `catScratch(true, 11)` should return `true` because Whiskers is alone and it's between 10 AM to 3 PM.

{Try It!}(node .guides/catScratch/try-it-01.js)

- `catScratch(true, 9)` should return `false` because Whiskers is alone but it's before 10 AM.

{Try It!}(node .guides/catScratch/try-it-02.js)

- `catScratch(false, 12)` should return `false` because Whiskers is not alone, even though it's between 10 AM to 3 PM.

{Try It!}(node .guides/catScratch/try-it-03.js)

---

### Solution

{Check It!|assessment}
node .guides/secure/catScratchTest.js


### Test Cases

1. **Test Case 1:** 
   - **Input:** `catScratch(true, 10)`
   - **Expected Output:** `true`
   - **Explanation:** Whiskers is alone and it's exactly 10 AM, the start of the risky period.


2. **Test Case 2:**
   - **Input:** `catScratch(true, 15)`
   - **Expected Output:** `true`
   - **Explanation:** Whiskers is alone and it's 3 PM, the end of the risky period.


3. **Test Case 3:**
   - **Input:** `catScratch(false, 14)`
   - **Expected Output:** `false`
   - **Explanation:** Even though it's 2 PM (within the risky period), Whiskers isn't alone, so there's no risk.


4. **Test Case 4:**
   - **Input:** `catScratch(true, 16)`
   - **Expected Output:** `false`
   - **Explanation:** Whiskers is alone, but it's after 3 PM, so the furniture is safe.

5. **Test Case 5:**
   - **Input:** `catScratch(false, 9)`
   - **Expected Output:** `false`
   - **Explanation:** It's before the risky period and Whiskers isn't alone.

# Problem 04

## Problem Statement

You're organizing a science exhibition and you want a device to work only when the voltage is exactly `5V` or when the combined voltage of two cells is `5V`. Your task is to design a function named `validVoltage`. This function should take two float values `v1` and `v2`, representing the voltages of two cells. It should return `true` if either of the voltages is `5V` or if their combined voltage is `5V`.

The `validVoltage` function should accept two parameters:

1. `v1`: a float value representing the voltage of the first cell.
2. `v2`: a float value representing the voltage of the second cell.

The function should return `true` if either `v1` or `v2` equals `5V` or if the sum of `v1` and `v2` equals `5V`. Otherwise, it should return `false`.

Here are some examples:

- `validVoltage(2.5, 5)` should return `true` because one of the voltages (5) is exactly `5V`.

{Try It!}(node .guides/validVoltage/try-it-01.js)

- `validVoltage(3.5, 3.5)` should return `false` because neither of the voltages is `5V`, and their combined voltage is not `5V`.

{Try It!}(node .guides/validVoltage/try-it-02.js)

- `validVoltage(2.5, 2.5)` should return `true` because the combined voltage of the two cells is `5V`.

{Try It!}(node .guides/validVoltage/try-it-03.js)

---

### Solution

{Check It!|assessment}(code-output-compare-986870329)
node .guides/secure/validVoltageTest.js

### Test Cases

1. **Test Case 1:** 
   - **Input:** `validVoltage(4.0, 1.0)`
   - **Expected Output:** `true`
   - **Explanation:** The sum of the voltages is `5V`.


2. **Test Case 2:**
   - **Input:** `validVoltage(5.0, 0.0)`
   - **Expected Output:** `true`
   - **Explanation:** One of the voltages is exactly `5V`.


3. **Test Case 3:**
   - **Input:** `validVoltage(2.0, 3.0)`
   - **Expected Output:** `false`
   - **Explanation:** The sum of the voltages is `5V`.


4. **Test Case 4:**
   - **Input:** `validVoltage(0.0, 5.0)`
   - **Expected Output:** `true`
   - **Explanation:** One of the voltages is exactly `5V`.


5. **Test Case 5:**
   - **Input:** `validVoltage(2.7, 2.4)`
   - **Expected Output:** `false`
   - **Explanation:** The combined voltage is not `5V`, and neither of the individual voltages is `5V`.

# Problem 05

## Problem Statement

You're helping elementary school students understand even and odd numbers with a game. Your task is to create a function named `evenOddGame`. The function should take two integer parameters, `x` and `y`, and a boolean `even`.

The `evenOddGame` function should work as follows:

1. It should return `true` if one of `x` and `y` is even and the other is odd.
2. However, if the third parameter `even` is `true`, the function should return `true` only if both `x` and `y` are even.

Here are some examples:

- `evenOddGame(2, 3, false)` should return `true` because one number is even and the other is odd, and `even` is `false`.

{Try It!}(node .guides/evenOddGame/try-it-01.js)

- `evenOddGame(4, 6, true)` should return `true` because both numbers are even and `even` is `true`.

{Try It!}(node .guides/evenOddGame/try-it-02.js)

- `evenOddGame(4, 5, true)` should return `false` because only one number is even, but `even` is `true`, indicating that we want both numbers to be even.

{Try It!}(node .guides/evenOddGame/try-it-03.js)

---

### Solution

{Check It!|assessment}
node .guides/secure/evenOddGameTest.js

### Test Cases

1. **Test Case 1:** 
   - **Input:** `evenOddGame(3, 3, false)`
   - **Expected Output:** `false`
   - **Explanation:** Both numbers are odd, so we don't have one even and one odd number.

2. **Test Case 2:**
   - **Input:** `evenOddGame(2, 2, true)`
   - **Expected Output:** `true`
   - **Explanation:** Both numbers are even and the `even` parameter is `true`.

3. **Test Case 3:**
   - **Input:** `evenOddGame(1, 4, false)`
   - **Expected Output:** `true`
   - **Explanation:** One number is even and the other is odd, and `even` is `false`.

4. **Test Case 4:**
   - **Input:** `evenOddGame(6, 8, false)`
   - **Expected Output:** `false`
   - **Explanation:** Both numbers are even, but the `even` parameter is `false`.


5. **Test Case 5:**
   - **Input:** `evenOddGame(7, 9, true)`
   - **Expected Output:** `false`
   - **Explanation:** Both numbers are odd, so neither condition for returning `true` is met.




