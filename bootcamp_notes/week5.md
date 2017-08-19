![monday](/images/monday.png)

## TOPICS

**1. Async paradignm**

    - Callback
    - Promises: algo que espera una ejecucion una de dos opciones.
    - version issues
    - protocol http, https, http/2 (peticiones: get,post, put, delete) & (status: 200 (ok), 404 (not found), 500 (server), 400)
    - request 
    - XML is like a json with issues (awful)
    - AJAX jQuery develop to replace XML
    - fetch
    
Example 1.

```
console.log('hola');
setTimeOut(() => {
    console.log('bye');
},2000);

console.log('hola mundo de nuevo');
```

```
function saidBye(callback) {
    console.log('bye');
    callback();
}

console.log('hi');

function callback () {
    console.log('hi again');
}

saidBye(callback);
```

```
function sumar (a, callback){
    var b = 5;
    callback(b);
}

var a = 1;
function callback(b) {
    console.log(a + b);
}

sumar(1, callback);
```

map imitation

```
var x = [1,2,3];

vay y = x.map(function (elemento) {
    console.log('elemento: ', elemento);
    return elemento * elemento;
})

console.log(y);
```

```
var x = [1,2,3];

vay y = x.map(function (elemento) {
    console.log('elemento: ', elemento);
    return elemento * elemento;
})

console.log(y);
```

```
var x = ['sergio','myleydi','luisa'];

function mayusculas(elemento) {
    console.log('elemento: ', elemento);
    return elemento.toUpperCase();
}

var y = x.map(mayusculas);

console.log(y);
```

map por debajo

```
function myMap (arr, callback) {
    const _arr = [];
    for (let i = 0; i < arr.length; i++) {
        const respuesta = callback(arr[i]);
        _arr.push(respuesta);
    }
    return _arr;
}

function pow(val) {
    return value * value;
}

const arr = [1,2,3,4,5];
const powArr = myMap(arr, pow);
console.log(powArr);
```

Promises

```
console.log('hi');
var p = new Promise(function (resolve,reject)
setTimeout(function() {
    console.log('bye');
    resolve();
},1000)
});

p.then(function() {
    console.log('hi again');
    return 'mensaje';
})
.then(function (mensaje) {
    console.log(mensaje);
    return mensaje + 'agrega mas texto';
})
```

Comunicacion cliente servidor  

request, lo que se manda

- url
- headers - headers object 
- mode -cors, same-origin
- redirect
- cache - cache mode

Response, lo que retorna

- url
- headers
- type -cors
- status code
- ok
- data

Exercise fetch to get api info

```
const url = 'url api'
const list = document.getElementById('list');

function createItem(movie) {
    const el = document.createElement('h2');
    el.innerHTML = movie.title + "";
    return el;
    
}

fetch(url)
    .then (function(response) {
        json.results.forEach(fuction (el){
            console.log(el.title);
            
        })
        return reponse.json();
    })
    .then(function(json) {
        console.log(json.results[0]);
    })
```


HTML

```
<section class = 'container'>
    <ul class = 'list'>
        <li class = 'item' id = 'list'>
            <h2>title1</h2>
            <img src = ""/>
        </li>
        <li class = 'item'>
            <h2>title2</h2>
            <img src = ""/>
        </li>
        <li class = 'item'>
            <h2>title3</h2>
            <img src = ""/>
        </li>
    </ul>
</section>
```

CSS

```
body {
    background: white;
    font-family: sans-serif;
}

.container {
    background: papayawhip;
    border
}
```

___

![tuesday](/images/tuesday.png)

## TOPICS

**1. Browser storage: ways to store data in broswer from client side**
    
    - a. local storage
    - b. session storage: just store data while the window is open
    - c. cookies
    - d. indexedDB
    - e. WebSQL
    
**2. Browser developer tools**


**a. local storage**

chrome developer console

```
localStorage
localStorage.setItem('key', value)
localStorage.getItem(value)
```

JSON api: parse & stringify, parse convert data type and stringify convert to string.

```
lista = ['sara','mileidy','estefany']
localStorage.setItem('array', lista)
localStorage.getItem('array')

Stores as string, so we need to use json api method stringify.

listaAsString = JSON.stringify(lista)
```

```
array = [['a','b'],['c','d']]
arrayBI = JSON.stringify(array)
localStorage.setItem('array', array)
x = localStorage.getItem('array')           //'[['a','b'],['c','d']]'
JSON.parse(x)                               //[['a','b'],['c','d']]
```

Command to clear local storage

```
localStorage.clear()
```

**sucket io**


**b. session storage**

```
sessionStorage.setItem
sessionStorage.getItem
```

**c. cookies**

a cookie is a string


**2. Browser developer tools

https://www.codeschool.com/courses/discover-devtools

- elements
- responsive design
- console. (console.log(), console.error(),console.info(),console.warning())
- SEO. search engine optimization.
- page speed. https://developers.google.com/speed/pagespeed/insights/
- DOM
- sources
- debugger
- cdn
- service workers: load offline applications.
- performance: analyze the page speed.
- memory
- application
- security
- audits

concept: progressive enhacement. to make a basic load without js

crear dominios gratis

- lets script 
- ssl for free 
___

![thursday](/images/thursday.png)

## TOPICS

**1. create and publish a npm library** 

![create a module](https://docs.npmjs.com/getting-started/creating-node-modules)
![publish a npm library](https://docs.npmjs.com/getting-started/publishing-npm-packages)

**2. Transformaciones, transiciones, keyframes, gradientes**

Transformaciones

**codepen.io**
![shapes with css](https://css-tricks.com/examples/ShapesOfCSS/)

    - scale
    - skew
    - rotate
    
Transicion
    
    - transition
    - ease-in-out

Keyframes

    - @keyframes (0% to 100%, from to)
    - steps
    - gradient
    
**3. Javascript design patterns**

**4. Form input types**

    - Events with checkbox
    - Carousell
    - CSS preprocessor. Styles

```
.input ~ .label { 
    color: red;
}
instead of ~ you can use +
```


![form input types](https://www.w3schools.com/html/html_form_input_types.asp)

___

![friday](/images/friday.png)

## TOPICS

*1. 3D animations**

    - perspective
    - preserve 3D
    - look for a book related to css animation
    

