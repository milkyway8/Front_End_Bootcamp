![Bootcamp Header](/images/bootcamp_header.png)

---

![Tuesday](/images/tuesday.png)


## TOPICS
**1. Envirorment set up**

    a. Install Git
    b. SSH key configuration
    c. Install a text editor
    d. Install Node.js

**2. Getting started with Webtask.io**

    a. Getting use to Webtask
    b. Exercise #1

---    
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

---
#### 2. GETTING STARTED WITH WEBTASK.IO
___

**a. Getting use to Webtask:** Webtask.io is a service by Auth0 that allows you to build applications without thinking about infrastructure (run pieces of code through HTTP calls). 
Each deployed code will run under a sandbox with some limitations such as limited processor time, limited amount of libraries per task, and limited storage. However, these limitations  serve to present an enviornment where you can expose your applications through HTTP, in easy and scalable way, without the server administrations or enviorment configurations issues. Webtask offers also many different features like token data to control access, secret data, and metadata. To know more about how Webtask work, see [its documentation](https://webtask.io/docs/how). To use Webtask we need to:

- Create a Wentask account
- Install the Webtask command line application `npm install wt-cli`
- Initialize sesion `wt init your_email@something.com`
- Play with Webtask `wt -h` to see the commands available

**b. Exercise #1**

Create a miniservice in webtask.
___

![Wednesday](/images/wednesday.png)

## TOPICS

**1. Markdown sintaxis**
    
    a. Definition
    b. Basic commands
     
**2. Remote repository**  
___
#### 1. MARKDOWN SINTAXIS
---
**a. Definition**

Markdown  s a lightweight markup language with plain text formatting syntax. It is designed so that it can be converted to HTML and many other formats using a tool by the same name.[8] Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor. Go ahead an learn about [Markdown syntax](https://sourceforge.net/p/s-notes/wiki/markdown_syntax/).

**b. Basic commands**

**COMMAND**           |  **PERFORMED ACTION**                        |  | **COMMAND**          |**PERFORMED ACTION**
:---------------------|:---------------------------------------------|--|----------------------|-------------------------------
**`ls`**              |  _list current dir contest_                  |  |**`rm -rf d`**        |  _remove directory dir force_
**`ls l`**            |  _list current dir contest long format_      |  |**`rm fl`**           |  _remove fl_
**`ls -a`**           |  _list current dir contest including hidden_ |  |**`rm -f fl`**        |  _remove file force_
**`cd`**              |  _change to home dir_                        |  |**`cp d1 d2`**        |  _copy dir1 to dir2_   
**`cd d`**            |  _change to directory dir_                   |  |**`cp fl1 fl2`**      |  _copy fl1 to fl2_   
**`pwd`**             |  _show current dir_                          |  |**`mv fl1 fl2`**      |  _rename or move fl1 to fl2_
**`cd -`**            |  _change to previous working dir_            |  |**`more fl`**         |  _output file fl_ 
**`mkdir d`**         |  _make directory dir_                        |  |**`ctrl + u`**        |  _erase line_
**`touch fl`**        |  _make or update a file fl_                  |  |**`up`**              |  _move to previous command_
**`rm -r d`**         |  _remove directory dir_                      |  |**`down`**            |  _move to next command_

---
#### 3. REMOTE REPOSITORY
___

- git add file
- git commit -m "commit name"
- git log 
- git remote add origin url
- git push u- origin master
- git pull origin master

___

![Thursday](/images/thursday.png)

## TOPICS

**1. Basic HTML**

    a. Webpage structure
    b. Metadata configuration
    c. Webpage contest
___
**1. BASIC HTML**
___

**1.1. WEBPAGE STRUCTURE**

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

---
**1.2. METADATA CONFIGURATION**

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

___
**1.3. WEBPAGE CONTEST**

    a. HTML elements
        - headings
        - paragraphs
        - lists
        - emphasis elements
        - empty elements
        - links
        - images
        
    b. HTML attributes
    c. HMTL entities
___

**a. HTML ELEMENTS**

- **Headings**
```
<body>
    <h> Heading goes here </h>
</body>
```

- **Paragraphs**

```
<body>
    <p> Paragraph goes here </p>
</body>
```

- **Lists**

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

- **Emphasis elements**

```
<body>
    <!--Bold-->
    <strong> Here goes the element </strong>
    <!--Italic-->
    <em> Here goes the element </em>
</body>
```

- **Empty elements**

An **empty element** can not have any child nodes, using a closing tag on an empty element is invalid. To identify empty element types review [MDN Empty element glosary](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element)

- **Links**

```
<body>
    
    <!--Absolute links-->
    <!--Relative links-->
    <!--Root relative links-->
</body>
```

- **Images**

```

```

**b. HTML ATTRIBUTES**

**c. HTML ENTITIES**
___

![Friday](/images/friday.png)

___
## TOPICS

**1. Basic CSS**

    a. CSS concepts
    b. CSS syntax
    c. CSS selectors
    d. CSS specificity
___
**1. BASIC CSS**
___

**a. CSS concepts**

**A CSS rule-set** consists of a selector and a declaration block, the selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a **CSS property name and a value**, separated by a colon. A CSS declaration always ends with a semicolon, and declaration blocks are surrounded by curly braces. 

![CSS syntax](/images/cssrule.png)


**Every HTML element** has a default display value depending on what type of element it is. The default display value for most elements is **block or inline**. **A block-level element** always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can). **An inline element** does not start on a new line and only takes up as much width as necessary.

**b. CSS syntax**

    - CSS stylesheet
    - CSS styles
    - CSS specific properties 

**CSS stylesheet**

```
<style>
body{
color: #FF0000;
}
<style>
```

**CSS styles**  

- linking CSS stylesheet
- setting properties
- selecting elements
- units of measurement
- list styles
- text styles
- box behavior
- resetting styles

**CSS specific properties**

- padding
- margin
- border

**c. CSS selectors**

**d. CSS Specificity**

___

![Saturday](/images/saturday.png)

## TOPICS

- [CSS selector game](http://flukeout.github.io/)  
- [CSS layout documentation](http://learnlayout.com/)

