![Bootcamp Header](/images/bootcamp_header.png)

---

![Tuesday](/images/tuesday.png)


#### Topics

CSS floats
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


![Wednesday](/images/wednesday.png)
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

![Thursday](/images/thursday.png)
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
    
#![Friday](/images/friday.png)

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
  
![Saturday](/images/saturday.png)

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
  