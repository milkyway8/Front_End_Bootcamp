![alt text]()


## *FRONT END BOOTCAMP NOTEBOOK*
### First week. Day 1. ready

#### Topics
**1. Envirorment set up**

    a. Install Git
    b. SSH key configuration
    c. Install a text editor
    d. Install Node.js

**2. Getting started with Webtask.io**

    a. Getting use to Webtask
    b. Exercise #1
    
#### 1. ENVIORMENT SET UP
___

**a. Install Git:** in order to register the changes made to our files we use Git. Git is a free and open source version control system that provides a Bash emulator use to run command lines. To install Git for Windows go [here](https://git-scm.com/).

**b. Configure SSH key:** to communicate a local to a remote repository we need a SSH key first. A SSH key is compound by a public key and a private key. The first one goes to gitHub, while the second one refers to the machine. These are the steps needed to fully configure a SSH key.

- execute the bash command `ssh-keygen`
- create a gitHub account
- execute the bash command `cat ~/ .ssh/id_rsa.pub`
- enter a key label and the public key into your gitHub SSH keys

**c. Install a text editor:** due to the fact that we would need to write code at some point, is useful to employ a text editor instead of an IDE. There are a huge variety of text editors who offer and excihibit different characteristics some of them are: atom, sublime, brackets. We particularly use brackets.

**d. Install Node.js:** Node.js is a JavaScript runtime build on Chrome's V8 engine.It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world. We install the Windows 6.11.0 version.

#### 2. GETTING STARTED WITH WEBTASK.IO
___

**a. Getting use to Webtask:** Webtask.io is a service by Auth0 that allows you to build applications without thinking about infrastructure (run pieces of code through HTTP calls). 
Each deployed code will run under a sandbox with some limitations such as limited processor time, limited amount of libraries per task, and limited storage. However, these limitations  serve to present an enviornment where you can expose your applications through HTTP, in easy and scalable way, without the server administrations or enviorment configurations issues. Webtask offers also many different features like token data to control access, secret data, and metadata. To know more about how Webtask work, see [its documentation](https://webtask.io/docs/how). To use Webtask we need to:

- Create a Wentask account
- Install the Webtask command line application `npm install wt-cli`
- Initialize sesion `wt init your_email@something.com`
- Play with Webtask `wt -h` to see the commands available
___

**b. Exercise #1**

Create a miniservice in webtask.

### First Week. Day 2. ready

#### Topics

**1. Markdown sintaxis**  
**2. Git Bash basic commands**  
**3. Create remote repository**  

#### 1. MARKDOWN SINTAXIS
---
Markdown  is a lightweight markup langugage with plain text formatting syntax, intended to be easy to read and easy to write.
(https://confluence.atlassian.com/bitbucketserver/markdown-syntax-guide-776639995.html#Markdownsyntaxguide-Inlinecodecharacters)
(https://sourceforge.net/p/s-notes/wiki/markdown_syntax/)
___
#### 2. BASH BASIC COMMANDS

**COMMAND**           |  **PERFORMED ACTION**
:---------------------|:----------------------
**`ls`**              |  _list current dir contest_
**`ls l`**            |  _list current dir contest long format_
**`ls -a`**           |  _list current dir contest including hidden_
**`cd`**              |  _change to home dir_  
**`cd d`**            |  _change to directory dir_
**`pwd`**             |  _show current dir_
**`cd -`**            |  _change to previous working dir_
**`mkdir d`**         |  _make directory dir_
**`touch fl`**        |  _make or update a file fl_
**`rm -r d`**         |  _remove directory dir_
**`rm -rf d`**        |  _remove directory dir force_
**`rm fl`**           |  _remove fl_
**`rm -f fl`**        |  _remove file force_
**`cp d1 d2`**        |  _copy dir1 to dir2_
**`cp fl1 fl2`**      |  _copy fl1 to fl2_
**`mv fl1 fl2`**      |  _rename or move fl1 to fl2_
**`more fl`**         |  _output file fl_ 
**`ctrl + u`**        |  _erase line_
**`up`**              |  _move to previous command_
**`down`**            |  _move to next command_

---
#### 3. REMOTE REPOSITORY

- git add file
- git commit -m "commit name"
- git log 

- git remote add origin url
- git push u- origin master
- git pull origin master


### First week. Day 3. almost ready.

#### Topics

- Basic html


**BASIC HTML WEBPAGE STRUCTURE**

```
<!DOCTYPE html>
<html>
    <head>
        <!--Metadata goes here-->
        <!--Referes to all configuration commands-->
    <head>
    <body>
        <!--Contest goes here-->
    </body>
</html>
```

**METADATA CONFIGURATION**

```  
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Guillermo Rodas | Curriculum Vitae</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <!-- Place favicon.ico in the root directory -->

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main.css">
</head>
```  

**WEBPAGE CONTEST**

**Comments**

```     
`<!--This is a comment-->`
```

**Headings**

```
<body>
    <h> Heading goes here </h>
</body>
```

**Paragraphs**

```
<body>
    <p> Paragraph goes here </p>
</body>
```

**Lists**

```
<body>
    <!--Unordered list-->
    <ul>
        <li> List element here </li>
        <li> List element here </li>
    </ul>
    <!--Ordered list-->
    <ol>
        <li> List element here </li>
        <li> List element here </li>
    </ol>
</body>
```

**Emphasis elements**

```
<body>
    <!--Bold-->
    <strong> Here goes the element </strong>
    <!--Italic-->
    <em> Here goes the element </em>
</body>
```

**Empty elements**

An **empty element** can not have any child nodes, using a closing tag on an empty element is invalid. To identify empty element types review [MDN Empty element glosary](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element)

**Links**

```
<body>
    
    <!--Absolute links-->
    <!--Relative links-->
    <!--Root relative links-->
</body>
```

**Images**

```

```

**HTML attributes**

**HTML entities**


### First week. Day 4
___
#### Topics

- Basic CSS
___

**CSS STYLESHEET**

```
<style>
<body{
color: #FF0000;
}
<style>
```

**CSS SYNTAX**  

**A CSS rule-set** consists of a selector and a declaration block, the selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a **CSS property name and a value**, separated by a colon. A CSS declaration always ends with a semicolon, and declaration blocks are surrounded by curly braces.

![CSS syntax](/images/cssrule.png =200x100)


### First week. Day 5. ready

- [CSS selector game](http://flukeout.github.io/)  
- [CSS layout documentation](http://learnlayout.com/)

### Second week. Day 6. ready

Topics

Javascript basic introduction


Una variable es una caja que tiene un nombre empleada para almacenar algun tipo de dato. En javascript hay varios tipos de datos nativos, como numeros, strings, booleano. Javascript no es un lenguaje fuertemente tipado.

Un algoritmo es una receta para realizar determinada tarea.
Una funcion es una maquina que recibe una entrada y arroja una salida.

`type of var` gives the var type  
`var suma = 2 + 5` make operations within the declaration  
`var a` undefined variable  
`var lista = []` define an array  
define an object
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

**RANDOM CONCEPTS**

1. About Scrum
2. [Flexbox froggy](http://flexboxfroggy.com/) CSS game related to floats


### Second week. Day 7. Almost Done
___

#### Topics

- Javascript in depth
- Random Concepts

---

**JAVASCRIPT IN DETH:** the current class session is related to the explanation of different kind of structures and statements allowed in javascript to perform a particular task, in some cases there are code examples attach to them. This information is based on [**_Kyle Simpson's book series You Dont Know JS_**](https://github.com/getify/You-Dont-Know-JS).


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
- _Scope_Objeto window
- _Objects_
- _Closure_
- _setTimeOut function_


**Codes**

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

Exercise

```
function imprimirBalance(balance){  
// Imprimir balance 
} 
function retirarDinero(dinero){
// Solo puede retirar dinero si es menor que el balance 
} 
function transferir(balance, balance2){
// transferir balance a otro balance2 
}
function imprimirBalance2 (balance2){
// Imprimir el balance2 
}
function retirarTodoMiDinero(){
// Retirar de 100 en 100
}
```

**RAMDON CONCEPTS**

- _Speudocode_
- _API's_
- _Programming languages clasification: compiled or interpreted_
- _Reverse polish notation_
- _Numeral system (duodecimal)_
- _Javascript in HTML_: javscript se incluye en html con un tag que se llama script y se pasa al    src, incluirlo  antes del   cuerpo. minuto 1:45. audio. Document object model: modificar          estilos desde javasrcipt.
- _EMAscript browser supported versions_

### Second Week. Day 8. ready.
---
**Topics**

**1. Bootcamp classes review**  
**2. Last class review**  
**3. Javascripting**  
___
    
**1. Bootcamp classes review** 

We accessed teacher's trello account and saw the bootcamp schedule.

**2. Last class review**

We took a look to closures and the setTimeOut function, and saw some code.

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
    
#### Second Week.Day 4. almost ready

### Topics

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


 **7. Rewrite you HTML CV code into a Semantic HTML code**
  
### Second Week.Day 5.

# FOMRS

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
  
### Third Week. Day 1.
___
**Topics**

**1. JSON**  
**2. DOM**
___

**1. JSON: ** JSON is a syntax for serializing objects, arrays, numbers, strings, booleans, and null. It is based upon JavaScript syntax but is distinct from it: some JavaScript is not JSON, and some JSON is not JavaScript. In JSON properties must be strings. To validate JSON code we use a validator.

**Exercise 9**

Create a JSON structure and with a list of “humans” where a human has a name, age, a list of pets (‘cat’, ‘dog’, fish’), if the human has friends or not, and a list of friends.

Notes  
At least 5 humans  
At least 1 human should have friends.

**Clone teacher's repository**  
On ../bootcamp folder, clone https://github.com/glrodasz/frontend-bootcamp.git name_folder, outside the repository.


**2. DOM (Document Object Model): ** The Document Object Model (DOM) connects web pages to scripts or programming languages. Usually that means JavaScript, but modelling HTML, SVG, or XML documents as objects is not part of the JavaScript language. The DOM model represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects.

- Node interfaces
- Methods
- Node properties


node interfaces

partes del arbol

Document
Element
Text
Comment
DocumentFragment

Document has methods

document.createElement()

document.createTextNode()

document.createElement('div')

Node properties

firstChild 
reference to the first child node of an element
lastChild 
reference to the last child node of an element
childNodes 
holds a list of the children of an element
parentNode 
reference to the parent of an node
nextSibling 
reference to the next sibling in sequence
previousSibling 
reference to the previous sibling in sequence


childs are array-like document.ChildNotes[1].ChildNotes
spaces are taken as text


Node methods 51.08 segundos

Node list 1:03

Retrieving Elements

Selecc an element on CSS we use # 

trygit..practice git commands







  

  
