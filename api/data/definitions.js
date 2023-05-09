const definition = [
    {
        //a
        "algorithm":[
            {
                "word": "algorithm",
                "meaning": " A set of instructions for solving a specific problem or achieving a specific task.",
                "example": [
                    "function selectionSort(arr) {",
                        "const n = arr.length;",
                        "for (let i = 0; i < n; i++) {",
                            "let minIndex = i;",
                            "for (let j = i + 1; j < n; j++) {",
                                "if (arr[j] < arr[minIndex]) {",
                                    "minIndex = j;",
                                "}",
                            "}",
                            "[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];",
                        "}",
                        "return arr;",
                    "}"                
                ]
            }
        ],
        "array":[
            {
                "word": "array",
                "meaning": "A data structure that stores a fixed-size sequential collection of elements of the same type. ",
                "example": [
                    "const numbers = [1, 2, 3, 4, 5];",
                    "console.log(numbers)",
                    "//// Code output",
                    "12345",
                    "OR",
                    "console.log(numbers[1] + ' is my favorite number')",
                    "//// Code output",
                    "2 is my favorite number"
                ]
            }
        ],
        "ASCII": [
            {
                "word": "ASCII(American Standard Code for Information Interchange)",
                "meaning": " A character encoding standard for electronic communication.",
                "example": [
                    "const text = 'Hello, world!';",
                    "const asciiCode = [];",
                    "for (let i = 0; i < text.length; i++) {",
                    "asciiCode.push(text.charCodeAt(i));",
                    "}",
                    "console.log(asciiCode);",
                    "//// Code output",
                    "Array(13)"
                ]
            }
        ],
        "api": [
            {
                "word": "Api",
                "meaning": "API (Application Programming Interface): A set of protocols and tools for building software applications.",
                "example": [
                    "fetch('https://api.example.com/data')",
                    ".then(response => response.json())",
                    ".then(data => console.log(data))",
                    ".catch(error => console.error(error));",
                    "//// Code output",
                    "{page: 1, per_page: 6, total: 12, total_pages: 2, data: Array(6), …}"
                ]
            }
        ],

        //b
        "boolean": [
            {
                "word": "Boolean",
                "meaning": " A data type that can have one of two possible values, usually denoted as true or false. ",
                "example": [
                    "var isSunny = true;",
                    "let hasCar = false;",
                    "const isRaining = true;",
                    "console.log(isSunny)",
                    "console.log(hasCar)",
                    "console.log(isRaining)",
                    "//// Code output",
                    "true",
                    "false",
                    "true",
                ]
            }
        ],
        "bug": [
            {
                "word": "Bug",
                "meaning": "An error or flaw in a computer program that causes it to behave unexpectedly or crash. ",
                "example": [
                    "const x = 10;",
                    "const y = 0;",
                    "const z = x / y;",
                    "console.log(z)",
                    "//// Code output",
                    "Infinity"
                ]
            }
        ],
        "class constructor": [
            {
                "word": "Class Constructor",
                "meaning": "A blueprint for creating objects in object-oriented programming.",
                "example": [
                    "class Person {",
                    "constructor(name, age) {",
                    "this.name = name;",
                    "this.age = age;",
                    "}",
                    "greet() {",
                    "console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);",
                    "}",
                    "}",
                    "const john = new Person('John', 30);",
                    "john.greet();",
                    "//// Code output",
                    "Hello, my name is John and I am 30 years old.",
                ]
            }
        ],
        //c
        //d
        //e
        "error_handling":[
            {
                "word": "error handling",
                "meaning": "The process of anticipating, detecting, and resolving errors in a program.",
                "example": [
                    "// Example of error handling with try...catch block",
                    "try {",
                    "const result = 10 / 0;",
                    "console.log(result);",
                    "} catch (error) {",
                    "console.error(error);",
                    "// Output: Infinity",
                   " }",
                ]
            }
        ],
        "Event":[
            {
                "word": "Event",
                "meaning": "An action or occurrence that happens in the browser, such as a user clicking a button or a page finishing loading.",
                "example":[
                    "// Example of adding an event listener to a button",
                    "const button = document.querySelector('button');",
                    "button.addEventListener('click', function() {",
                    "console.log('Button clicked!');",
                    "});",
                ]
            }
        ],
        //f
        "Function":[
            {
                "word": "Function",
                "meaning": "A block of code that performs a specific task and can be called by other parts of the code.",
                "example":[
                    "// Example of a function that adds two numbers",
                    "function addNumbers(num1, num2) {",
                        "return num1 + num2;",
                    "}",
                    "const result = addNumbers(5, 10);",
                    "console.log(result);",
                    " // Output: 15"
                ]
            }
        ],
        //g
        "Guard-Clause":[
            {
                "word": "Guard Clause",
                "meaning": "A conditional statement that is used to handle edge cases and prevent the code from executing unnecessarily.",
                "meaning2": " is a technique used to reduce nested conditional statements by adding early returns or throwing errors to handle edge cases before the main logic of the function.",
                "example":[
                    "// Example of a guard clause",
                    "function calculatePrice(quantity, price) {",
                        "if (quantity <= 0) {",
                        "return 0;",
                        "}",
                    
                        "if (price <= 0) {",
                        "console.log('Invalid price.');",
                        "return;",
                        "}",
                    
                        "return quantity * price;",
                    "}",
                    
                    "console.log(calculatePrice(3, 10)); // Output: 30",
                    "console.log(calculatePrice(-1, 10)); // Output: 0",
                    "console.log(calculatePrice(3, -1)); // Output: Invalid price.",
                ]
            }
        ],
        "Getter/Setter":[
            {
                "word": "Getter/Setter",
                "meaning": " Special methods that allow you to define and retrieve object properties in a controlled way.",
                "meaning2": "is that they are a way to define computed properties in an object in JavaScript.",
                "example":[
                    "// Example of using getters and setters to define computed properties",
                    "const person = {",
                        "firstName: 'John',",
                        "lastName: 'Doe',",
                        "get fullName() {",
                        "return `${this.firstName} ${this.lastName}`;",
                        "},",
                        "set fullName(value) {",
                        "const parts = value.split(' ');",
                        "this.firstName = parts[0];",
                        "this.lastName = parts[1];",
                        "},",
                    "};",
                    
                    "console.log(person.fullName); // Output: John Doe",
                    
                    "person.fullName = 'Jane Smith';",
                    "console.log(person.firstName); // Output: Jane",
                    "console.log(person.lastName); // Output: Smith",
                ]
            }
        ],
        //h
        "Higher-Order-Component":[
            {
                "word": "Higher-Order Component (HOC)",
                "meaning": " A function that takes a component as an argument and returns a new component with enhanced functionality.",
                "example":[
                    "// Example of a higher-order component",
                    "function withLogging(Component) {",
                        "return class extends React.Component {",
                        "componentDidMount() {",
                            "console.log(`Component ${Component.name} mounted.`);",
                        "}",
                    
                        "render() {",
                            "return <Component {...this.props} />;",
                        "}",
                        "};",
                    "}",
                    
                    "class MyComponent extends React.Component {",
                        "render() {",
                        "return <div>Hello, World!</div>;",
                       " }",
                    "}",
                    
                    "const MyLoggedComponent = withLogging(MyComponent);",
                ]
            }
        ],
        //i
        //j
        //k
        //l
        //m
        //n
        //0
        //p
        //q
        //r
        //r
        //s
        //t
        //w
        //x
        //y
        //z



    }
]
module.exports = definition;