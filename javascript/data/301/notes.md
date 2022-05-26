# Javascript Data 301
## Understandin immutability comes down to understanding how data is stored in memory.


**Definition of Immutability**
Primitive data types. These data types are immutable. Immutability means that whenever a variable is declared, it lives at a unique address in memory. If it is later re-initialized(e.g. re-assigned), it will live at a new, unique address. If a variable is initialized by reference instead of by value, its unique address points to the referred address.

**List of primitive data types**
* strings
* booleans
* numbers
* null
* undefined

** //bold **
**Examples**
```
let age = 32; // initializes by value, gets a unique address in memory
let marysAge =32 // initializes by reference, it gets a unique address, but this doesn't hold a value, it simply points to memory location
age = 33 // with reinitialization the new value is stored at a new address
```

**Definition of Mutability**
Collections of primitive data types are mutable. Which means that when they are modified or updated, the data is not stored at a new address, but remains at the original address when the vairable was first declared.

**List of collections**
* arrays
* objects

collections are referring to the same address.
when you reininitialize you get a new memory address. Does not refer to the old address anymore. 
