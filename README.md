<!-- No.1 Question & Answer -->

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans :  getElementById  =>  It selects an unique element with the specific (id) will be used.

getElementsByClassName  => It selects all matching elements with the specific (class-name) will be used. It returns HTML collections. (Each element is found by using loop).

querySelector  => It selects only the first element with the specific (id, class, tag etc.) will be used by CSS selector.

querySelectorAll  => It selects all matching elements with the specific (id, class, tag etc.) will be used by CSS selector. It returns Node-list. (Each element is found by using loop).


<!-- No.2 Question & Answer -->

2. How do you create and insert a new element into the DOM?

Ans :  The total process is happened by 3 steps. All Steps :-

Step-1 : createElement() => Create the specific element.
Step-2 : innerText/innerHTML => create the content of that element.
Step-3 : appendChild() => insert the element.


<!-- No.3 Question & Answer -->

3. What is Event Bubbling? And how does it work?

Ans :  When an (Event) will happened on a child-element, it gradually rising-up to the parent -> grandparent -> body -> document. This process is called Event Bubbling. 

It works like :-

let, a (Button) is in a (Div).

1st -> the event will run on (Button),
2nd -> the event will run on (Div),
3rd -> the event will run on (Body),
4th -> the event will run on (Document).


<!-- No.4 Question & Answer -->

4. What is Event Delegation in JavaScript? Why is it useful?

Ans : Instead of giving separate (Event) to each child, control the children by giving a single (Event) to the parent. It's called Event Delegation.

Usefulness of Event Delegation :-

* Code minimization.
* Good performance.
* Dynamic element handling. etc.


<!-- No.5 Question & Answer -->

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans : preventDefault() => It prevents the default working of browser. Like:-

* During (Form-submission), browser is reloaded by default. (It prevent this problem).
* When (Click) on any link, go to another page. (It prevents this).

stopPropagation() => It stops (Event-bubbling) process. That means, (Event) will not go to the parent, the (Event) will only work on the specific element where the (Event) will be added.
