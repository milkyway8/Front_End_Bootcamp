![alt text][id]

[id]: https://www.google.com/search?q=grayscale&client=firefox-b-ab&biw=1366&bih=659&tbm=isch&source=lnt&tbs=isz:ex,iszw:1366,iszh:768#q=header&tbs=iszw:1366,iszh:768,isz:l&tbm=isch&imgrc=hpwSyLSfAYsgQM:

## *FRONT END BOOTCAMP NOTEBOOK*
### First week. Day 1. 

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

### First Week. Day 2.

#### Topics

1. Markdown sintaxis
2. Git Bash basic commands
3. Create remote repository

#### 1. MARKDOWN SINTAXIS
---
Markdown  is a lightweight markup langugage with plain text formatting syntax, intended to be easy to read and easy to write.
(https://confluence.atlassian.com/bitbucketserver/markdown-syntax-guide-776639995.html#Markdownsyntaxguide-Inlinecodecharacters)
___
#### 2. BASH BASIC COMMANDS

**`ls`**
list current directory contest  
**`ls l`** 
list current directory contest long format   
**`ls -a`**
list current directory contest including hidden  
**`cd`**
change to home directory  
**`cd dir`**
change to directory dir  
**`pwd`**
show current directory  
**`mkdir dir`**
make directory dir  
**`rm -r dir`**
remove directory dir  
**`rm -rf dir`**
remove directory dir force  
**`cp dir1 dir2`**
copy dir1 to dir2  
**`cd -`**
change to previous working directory  
**`rm file`**
remove file  
**`rm -f file`**
remove file force  
**`cp file1 file2`**
copy file1 t file2  
**`mv file1 file 2`**
rename or move file1 to file2  
**`touch file`**
create or update file  
**`more file`**
output file file  
**`ctrl + u`**
erase line  
**`up`**
move to previous command  
**`down`**
move to next command

---
#### 3. REMOTE REPOSITORY

### First week. Day 3.

Basic HTML

Webpage structure 
```
<!DOCTYPE html>
<html>
    <head>
        <!--Metadata goes here-->
    </head>
    <body>
        <!--Contet goes here-->
    </body>
</html>
```
    
Comments on HTML  
`<!--This is a comment-->`







### First week. Day 4

Basic CSS


### First week. Day 5.

CSS game on: (http://flukeout.github.io/)  
CSS layout documentation on: (http://learnlayout.com/)

### Second week. Day 6.

Topics


### 1. Scrum methodology
- Proyecto final (hacer un peach): puede ser una landing page
- Concepto MVP (minimum viable product) ---> landing page
    
### 2. CCS Floats
- flexbox froggy (preview javascrit)

### 3. Javascript

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



    











    

