

### 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
- `getElementById` → returns a single element with the specified id.  
- `getElementsByClassName` → returns multiple elements with the same class.  
- `querySelector` → returns the first element matching a CSS selector.  
- `querySelectorAll` → returns all elements matching a CSS selector.  


### 2. How to create and insert a new element into the DOM
Use `document.createElement` to create a new element and `appendChild` or `append` to insert it into the DOM.  


### 3. What is Event Bubbling and how does it work
Event bubbling means an event first occurs on the target element and then moves up to its parent elements step by step.  



### 4. What is Event Delegation in JavaScript? Why is it useful
Event delegation means attaching an event listener to a parent element to handle events on its child elements.  



### 5. Difference between preventDefault() and stopPropagation()
- `preventDefault()` → relosved the relode issue
- `stopPropagation()` → stops the event from bubbling up to parent elements.  
