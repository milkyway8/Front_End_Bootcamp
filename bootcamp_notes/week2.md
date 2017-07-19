![Bootcamp Header](/images/bootcamp_header.png)

---

![Tuesday](/images/tuesday.png)


#### Topics

**1. CSS selector**  
**2. Javascript basic introduction**

___
**1. CSS floats**

    a. Definition
    b. Code explanation
___


**a. Definition**

Float is a property use in elements to help us define page layout with both, vertical and horizontal flow. It is particurlay use when an image needs to be surrounded by text. 

**b. Code explanation**

_**STEP 1. HTML**_

```
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <title>Floats</title>
    <link rel='stylesheet' href='floats.css'/>
  </head>
  <body>
      <div class = 'page'>Page
          <div class='menu'>Menu</div>
          <div class='sidebar'>Sidebar</div>
          <div class='content'>Contet</div>
          <div class='footer'>Footer</div>  
      </div>
    </div>
  </body>
</html>
```

**_STEP 1. CSS_**

```
/*Resetting styles*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.menu {
  height: 100px;
  background-color: #B2D6FF;    
}

.sidebar {
  height: 300px;
  background-color: #F09A9D;    
}

.content {
  height: 500px;
  background-color: #F5CF8E;    
}

.footer {
  height: 200px;
  background-color: #D6E9FE;    
}
```
___
_**STEP 2.**_

**Shrink an element's width**
```
.sidebar {
  width: 200px;                 /*added*/
  height: 300px;
  background-color: #F09A9D;
}
```
___
_**STEP 3.**_

**Floating an element  
tip:** a floating element has no size.

```
.sidebar {
  float: left;                  /*added*/
  width: 200px;
  height: 300px;
  background-color: #F09A9D;
}
```
___
_**STEP 4.**_

**Parent size  
tip:** div children take parent's size if not specified

```                             /*added*/
.page {
  width: 900px;
  margin: 0 auto;               /*to center parent*/
}
```
___
_**STEP 5.**_

**Floating multiple elements  
tip:** footer goes up, beacause sidebar and content are floating and have no size. Additionaly we give content a width.

```
.content {
  float: left;                  /*added*/
  width: 650px;                 /*added*/
  height: 500px;
  background-color: #F5CF8E;    
}
```
___
_**STEP 6.**_

**After a float  
tip:** page is after sidebar and content because they are floating
```
.page {
  width: 900px;
  margin: 0 auto;
  border: 1px solid tomato;  /*added*/
}
```
___
_**STEP 7.**_

**Clearing floats**

```
.footer {
  clear: both;            /*added*/
  height: 200px;
  background-color: #D6E9FE;
}
```
___
_**STEP 8.**_

**Header and Footer take the whole horizontal size because they are not delimited any more from page (parent). While page keeps after the floating elements, sidebar and content.  
tip:** floatings respect content thats why we can see parent's name, called Page.

```
<body>
  <div class='menu'>Menu</div>

  <div class='page'>
    <div class='sidebar'>Sidebar</div>
    <div class='content'>Content</div>
  </div>

  <div class='footer'>Footer</div>
</body>
```
___
_**STEP 9.**_

**Hiding overflow "gives floating elements a size"**

```
.page {
  width: 900px;
  margin: 0 auto;
  overflow: hidden;             /*added*/
  background-color: #EAEDF0;    /*added*/
}
```
___
_**STEP 10.**_

**Full bleeded layout**

```
<body>
  <div class='menu'>Menu</div>

  <div class='container'>                 /*added*/
    <div class='page'>
      <div class='sidebar'>Sidebar</div>
      <div class='content'>Content</div>
    </div>
  </div>                                  

  <div class='footer'>Footer</div>
</body>
```
___
_**STEP 11.**_

**Full bleeded layout**

```
.page {
  width: 900px;
  margin: 0 auto;
}

.container {
  overflow: hidden;
  background-color: #EAEDF0;
}
```
___
**_STEP 12. HTML_**

Floats for equal width column

```
<div class='footer'>
  <div class='column'></div>
  <div class='column'></div>
  <div class='column'></div>
</div>
```

**_STEP 12. CSS_**

```
.column {
  float: left;
  width: 31%;
  margin: 20px 1.15%;
  height: 160px;
  background-color: #B2D6FF;    
}
```
___
**_STEP 13. HTML_**

**Floats for grids**

```
<div class='footer'>
  <div class='column'></div>
  <div class='column'></div>
  <div class='column'></div>
  <div class='column'></div>
  <div class='column'></div>
  <div class='column'></div>
</div>
```

**_STEP 13. CSS_**

```
.footer {
  overflow: hidden;
  background-color: #D6E9FE;
}
```
___
_**STEP 14. HTML**_

**Floats for content**

```
<div class='content'>
  <img src='https://unsplash.it/300' class='article-image'/>
  <p>lorem120</p>
</div>
```

_**STEP 14. CSS**_

```
.content {
  padding: 20px;       /* Add this */
}

.article-image {
  float: left;
  width: 300px;
  margin-right: 20px;
  margin-bottom: 20px;
}

p {
  margin-bottom: 20px;
}
```
___
_**STEP 15. HTML**_

**Hiding overflow for content**



```
<div class='column'>
  <div class='avatar'></div>
  <h3 class='username'>Jhon Doe</h3>
  <p class='comment'>lorem25</p>
</div>
```

_**STEP 15. CSS**_

```
avatar {
  float: left;
  width: 60px;
  height: 60px;
  margin: 25px;
  border-radius: 40px;
  background-color: #D6E9FE;
}

.username {
  margin-top: 30px;
}

.comment {
  margin: 10px;
  overflow: hidden;
}

```
___

**2. Javascript basic introduction**

    a. Codes
    b. Random
___

**a. CODES**

```
var human = {
    eyes: "blue",
    skin: "white",
    age: 20,
    isOlder:false,
    city: Medellin,
    country:Colombia,
}
```

`human.eyes or human["eyes"]`

```
var context{
    .query{
        name = 'David'
        pet = 'Dog'
    }
}
```

Definir una funcion
```
function suma(x + y){
    return x + y;
}
```
`suma();`  
`var miSuma = suma(5, 2);`  
`var Suma = suma();`

```
var humano = {
    nombre: 'Guillermo'
    caminar: function(){
        consolo.log('Caminando...');
    },
    sumar: function(x,y){
        return x + y;
    }
}
```
`humano.sumar(3,6)`  
`humano.caminar()`

**b. RANDOM CONCEPTS**

**1. About Scrum**  
**2. [Flexbox froggy](http://flexboxfroggy.com/) CSS game related to floats**

---


![Wednesday](/images/wednesday.png)


#### TOPICS

**1. Javascript in depth**  
    
    a. Concepts
    b. Codes
    c. Bank account exercise
    
**2. Random Concepts**

---

**1. JAVASCRIPT IN DETH**

**a. Concepts**

The current class session is related to the explanation of different kind of structures and statements allowed in javascript to perform a particular task, in some cases there are code examples attach to them. This information is based on [**_Kyle Simpson's book series You Dont Know JS_**](https://github.com/getify/You-Dont-Know-JS).


- _Variable declaration_
- _Console.log()_
- _Prompt_
- _Operators_
- _String literal_
- _Thruty and falsy values_
- _Logical operators_
- _Values and types_
- _Comments_
- _Blocks_
- _Statements_
- _Cycles_
- _Scope_
- _Objects_
- _Closure_
- _setTimeOut function_


**b. Codes**

>functions and if statement

```
This function returns an age clasification.

function calcularEdad(age){
if(age<18){
    console.log("is underage");
}else if(age>=18 && age<60){
    console.log("is overage");
}else(age>=60){
    console.log("is odler");
}
}
```
>while and do while cycles

```
while(sillasSinOrganizar){
    console.log('Hay que organizar las sillas');
    sillasSinOrganizar = sillasSinOrganizar - 1;
}
```
  
```
do{
    console.log('Hay que organizar las sillas');
    sillasSinOrganizar = sillasSinOrganizar - 1;
}while(sillasSinOrganizar)
```
>Scopes

```
var a = "Hola"
function despedir(){
    var a = "Adios"
}
despedir()-->"Hola"
```
>Closures

```
fuction agregar10(){
return function agregar(y){
    return y + 10;
}
}   

var m = agregar10();
```


```
function sumaParcial(x){
return function suma(y){
    return x + y;
}
}

var n = sumaParcial(20);
var m = sumaParcial(10);
 
n(5); --> 25
m(5); --> 
```
>setTimeOut function

`setTimeOut(function,valor en milisegundos)`
```
for(var i = 0; i < 10; i++) {
setTimeout(function(x) { return function() { console.log(x); }; }(i), 1000);
}
```

**c. Exercise**

Bank account exercise
___

**2. RANDOM CONCEPTS**

- _Speudocode_
- _API's_
- _Programming languages clasification: compiled or interpreted_
- _Reverse polish notation_
- _Numeral system (duodecimal)_
- _Javascript in HTML_: javscript se incluye en html con un tag que se llama script y se pasa al    src, incluirlo  antes del   cuerpo. minuto 1:45. audio. Document object model: modificar          estilos desde javasrcipt.
- _EMAscript browser supported versions_

___

![Thursday](/images/thursday.png)


## TOPICS

**1. Bootcamp classes review**  
**2. Last class review**  
**3. Javascripting**  
___
    
**1. Bootcamp classes review** 

We accessed teacher's trello account and saw the bootcamp schedule.

**2. Last class review**

We took a look to closures and the setTimeOut function, and saw some code.

**CODE**

Assign a function to a variable

```
var myFunction = function myFunction(){
console.log();
}
```

Inmedialy invoked fuction expression
```    
(function myFunction(name){
console.log('This is my fuction' + name)
}('Guillermo'));
```

Four parameter closure
```    
fucntion makeAdder(x,n){
function add(y,m){
return x + y + m + n;
return add;
}
}
```

The meaning of this
```
var House = {
door: 0,
openDoor: function() {
console.log('this in openDoor', )
var that = this;
this.door = 1;

function openAgain() {
console.log('this en openAgain',this)
this.door += 1;
that.door += 1; 
}
openAgain();
}
};
```

```
function foo() {
console.log(this.bar );
}

var bar = "global";

var obj1 = {
bar: "obj1";
foo: foo;
};

var obj2 = {
bar: "obj2";
};
```

Callback

```
var saludar = function(nombre){
consolo.log("Hola",nombre);
}
```

```
function llamarCallback(cb){
var nombres = ['Guillo','Luisa','Jorge'];
for(var i=0;i<nombres.length;i++){
cb(nombres[i]);
}
}
llamarCallback(saludar);
llamarCallback(console.log);
```

**3. Javascripting**

Javascripting is a library we install with the bash command `npm install -g javascripting`, and it contains a workshop dedicated to teach javascript through different games. To see more workshops go to [nodeschool](https://nodeschool.io/).

---

#![Friday](/images/friday.png)

### TOPICS

**1. Finish the javacripting challenge**  
**2. Semantic HTML**

    - The document outline
    - Article
    - Section
    - Nav element
    - Headers
    - Footers
    - Asides
    - Divs for layout
    - Dates and times
    - Address
    - Figures and captions  

**3. Exercise 7**

Rewrite you HTML CV code into a Semantic HTML code**
 ___
 
  
![Saturday](/images/saturday.png)

## TOPICS

**1. Forms**
___

**1. Forms**

- DAY 4. html syntax review.
- HTML Forms
- Always use classes to made html standard coding.
- display: flex; is a different form to organize instead of folats and in line blocks.

-A formulary is made with the tag form. miute 13:30
<form action='' method='get' class='speaker-form'>
</form>
Idempotencia
Input needs labels
Ids are uniques
mobile first: is a technique where you design for mobile plataform first.
play flex box froggy

(https://github.com/glrodasz/frontend-bootcamp/tree/master/lessons/html/forms)

- regular expressions.
- placeholder. is a help for the user.
- label form let me select box content while hitting the name.
- fieldset does not support flex.
- to reset a border give it none parameter.
- browser properties.
- text areas: is not an empty element. It does not support value attribute.
- regex patrons html
- checkbox
- codrops. is a page that show us how to do some elements.
- a/b testing. booking use a/b testing.
- submit you can do it as inputs or buttons.
- security goes in backend
- buttons

- html to semantic
- html contact formulary
- url webtask en el form action, get the query parameters, context.data. query
- look for webtask query parameters

---

![Bootcamp Header](/images/bootcamp_header.png)