![Bootcamp Header](/images/bootcamp_header.png)

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

![CSS syntax](/images/cssrule.png)

**Multiple properties**

```
body {
  color: #414141;               /* Dark gray */
  background-color: #EEEEEE;    /* Light gray */
}
```

**Multiple elements**

```
body {
  color: #414141;               /* Dark gray */
  background-color: #EEEEEE;    /* Light gray */
}

h1 {
  font-size: 36px;
}

```

**Selecting multiple elements**

```
h1, h2, h3, h4, h5, h6 {
  font-family: "Helvetica", "Arial", sans-serif;
}
```

**List styles**

```
ul {
  list-style-type: circle;
}

ol {
  list-style-type: lower-roman;
}
```

**Text styles**

- Underlines
- Text Alignment
- Font Weight
- Font Style


**The cascade**

- The browser’s default stylesheet
- User-agent’s stylesheets
- External stylesheets
- Page-specific styles
- Inline styles




**LINKING A CSS STYLESHEET**

```
<head>
    <link rel='stylesheet' href=main.css'/>
</head>
```

**Multiple stylesheets**

```
<head>
  <link rel='stylesheet' href='styles.css'/>
  <link rel='stylesheet' href='product.css'/>
</head>
```

**BLOCK ELEMENTS AND INLINE ELEMENTS**

Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is block or inline.

A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

An inline element does not start on a new line and only takes up as much width as necessary.

**OTROS**

- content
- padding 
- border
- margin

**GENERIC BOXES**

`<div> </div>`

**RESETING STYLES**

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

**CSS SELECTORS**

**CSS Specificity**

**CSS COMMENTS**
```
/*This is a CSS comment*/
```

**MEASUREMENT UNITS**

px
em



### First week. Day 5. ready

- [CSS selector game](http://flukeout.github.io/)  
- [CSS layout documentation](http://learnlayout.com/)

