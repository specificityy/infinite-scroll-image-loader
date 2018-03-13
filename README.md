# Policy Expert - Home Code Assessment

We value the ability to model problems in software, so our first assessment will be around that subject. The exercise is to model and code a simple supermarket pricing solution. It is inspired on Pragmatic Dave’s Supermarket Kata - http://codekata.com/kata/kata01-supermarket-pricing/.

You are to deliver code that prices a supermarket shopping basket. Some items available are based on price per item, some items are based on weight. There are also group discounts to be aware of:

- Three cans of beans for the price of two.
- Two cans of Coke, for £1.

Use the following example of a receipt to know what data needs to be captured.

```
Beans                0.50
Beans                0.50
Beans                0.50
Coke                 0.70
Coke                 0.70
Oranges
0.200 kg @  £1.99/kg 0.40
-----
Sub-total            3.30

Savings
Beans 3 for 2       -0.50
Coke 2 for £1       -0.40
-----
Total savings       -0.90
-------------------------
Total to Pay         2.40
```

**Using ReactJS, implement a simple front-end that allows a user to add/remove items into a basket and have the basket total automatically updated based on item price and applicable discounts**

**Keep it simple and to the point**

**What we want to see is the quality of your code, how you write your tests and what is your approach to resolving a problem**

1. We use functional ES6 and that is our preferred coding style, but we do appreciate good OO code too.
2. Feel free to use ``lodash-fp`` or ``ramda`` if that makes your code more readable.
3. Use ``bootstrap`` or any other tool or framework of your choice for styling, no need to reinvent the wheel.
4. We use RxJS, so there are bonus points if used.
5. Show us how you write **clean** code.

Please use TDD or BDD. It is very important to write *tests* that help us understand your design; what you think are the important business rules that are to be protected when changes come later.

## How to proceed
1. Create a github account if you don't already have one. (it’s free)
2. Create a new project with ``README.md`` explaining what the project is doing, and how to build and run it.
3. Use your preferred build tool and testing framework.
4. Add ``iperezqm`` and ``dominicfarr`` and as a contributors.
5. Commit often, so we can see how you grow your code.
6. When you are finished create a pull request and assign it to ``iperezqm`` and ``dominicfarr`` for us to start the code review process.

This does not need to be perfect, but functional.

We don’t put any time frame on the completion, but the sooner you complete the test, the sooner we can move forward in the hiring process, and, we hope, sooner we can make an offer to you.

If you have any questions at all please contact [iperez@policyexpert.co.uk](mailto:iperez@policyexpert.co.uk) and [dfarr@policyexpert.co.uk](mailto:dfarr@policyexpert.co.uk) and we will be happy to help.

Enjoy!
