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
                    "//// Code output",
                    "Infinity"
                ]
            }
        ],
        //c
        "curly braces":[
            {
                "word": "parenthesis",
                "meaning": ""
            }
        ],
        //d
        //e
        "emphasis":[
            {
                "word": "emphasis",
                "meaning": ""
            }
        ],
        //f
        //g
        //h
        //i
        //j
        //k
        //l
        //m
        //n
        //0
        //p
        "parenthesis":[
            {
                "word": "parenthesis",
                "meaning": ""
            }
        ]
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