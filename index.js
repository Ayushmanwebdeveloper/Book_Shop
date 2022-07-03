const Header = document.createElement("div");
Header.className = "header";
let body = document.querySelector("body");
body.appendChild(Header);
let h1 = document.createElement("h1");
h1.innerHTML = "Welcome To The Book Store";
h1.className = "h1";
Header.appendChild(h1);
let div1 = document.createElement("div");
div1.className = "div1";
body.appendChild(div1);
let button1 = document.createElement("button");
button1.innerHTML = `<i class="fa-solid fa-arrow-down fa-xl"></i>`;
button1.className = "button1";
div1.appendChild(button1);
let buttoncart = document.createElement("button");
buttoncart.innerHTML = `<i class="fa-solid fa-shopping-cart fa-xl"></i>`;
buttoncart.className = "buttoncart";
buttoncart.id="cartbutton";
body.appendChild(buttoncart);
let heading1 = document.createElement("h1");
heading1.innerHTML = "Book Catalog";
heading1.className = "h1";
heading1.id = "heading1";
body.appendChild(heading1);
let div2 = document.createElement("div");
div2.className = "div2";
body.appendChild(div2);
let arr=[{
    "author": "Douglas Crockford",
    "imageLink": "add image to your project,put link to it there",
    "title": "JavaScript: The Good Parts: The Good Parts",
    "price": 30,
    "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
},
    {
        "author": "David Herman",
        "imageLink": "add image to your project,put link to it there",
        "title": "Effective JavaScript: 68 Specific Ways to..",
        "price": 22,
        "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
    },
    {
        "author": "David Flanagan",
        "imageLink": "add image to your project,put link to it there",
        "title": "JavaScript: The Definitive Guide",
        "price": 40,
        "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
    },
    {
        "author": " Eric Elliott",
        "imageLink": "add image to your project,put link to it there",
        "title": "Programming JavaScript Applications",
        "price": 19,
        "description": "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows."
    },
    {
        "author": "Addy Osmani",
        "imageLink": "add image to your project,put link to it there",
        "title": "Learning JavaScript Design Patterns",
        "price": 32,
        "description": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
    },
    {
        "author": "Boris Cherny",
        "imageLink": "add image to your project,put link to it there",
        "title": "Programming TypeScript",
        "price": 28,
        "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
    },
    {
        "author": "Alex Banks, Eve Porcello",
        "imageLink": "add image to your project,put link to it there",
        "title": "Learning React, 2nd Edition",
        "price": 25,
        "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
    },
    {
        "author": "Bradley Meck Alex Young and Mike Cantelon",
        "imageLink": "add image to your project,put link to it there",
        "title": "Node.js in Action",
        "price": 38,
        "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
    },
    {
        "author": "Kyle Simpson",
        "imageLink": "add image to your project,put link to it there",
        "title": "You Don't Know JS Yet: Get Started",
        "price": 26,
        "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
    },
    {
        "author": "John Resig and Bear Bibeault",
        "imageLink": "add image to your project,put link to it there",
        "title": "Secrets of the JavaScript Ninja",
        "price": 33,
        "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
    }
];
arr.forEach(e => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="./img/image-1.jpg" class="card__image" alt="">
      <div class="card__info">
        <h4 class="card__title">${e.title}</h4>
        <p class="card__text">${e.author}</p>
        <p class="card__price">Price:${'$'+e.price}</p>
        <button class="card__btn add-to-cart" data-id="6">Add to Cart</button>
      </div>`
    div2.appendChild(card);
console.log(e.price);
});