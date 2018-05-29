1)setImmediate vs setTimeout
- setImmediate will push the callback function to check phase queue which will be executed after IO events
- setTimeout will push the callback function to timer phase queue which will be executed before IO events


2)process.nextTick vs setImmediate
- process.nextTick will register the function in the nextTickQueue which will take the priority to run before any other callback in the eventloop 
- while setImmediate will register the callback function to check phase queue which will be executed after IO events.


3) NodeJS Modules and Global Objects
- fs
- http
- http2
- https
- net
- os
- path
- process
- console
- domain
- dns
- URL