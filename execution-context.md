#What is Execution Context?

Execution Context is the wrapper around your existing code; which contains code that you have not written; but is generated by the JS Engine whenever your code is executed.

It comprises of the following -

1.Global Object
1.'this'
1.Outer environment
1.Your code

Logically, set of active execution contexts forms a stack. The bottom of this stack is always a global context, the top — a current (active) execution context. The stack is modified (pushed/popped) during the entering and exiting various kinds of EC.