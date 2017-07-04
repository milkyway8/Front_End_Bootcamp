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
- Play with Webtask `wt edit`

### First Week. Day 2.

#### Topics

1. Markdown sintaxis
2. Git Bash basic commands
3. Create remote repository

#### 1. MARKDOWN SINTAXIS
---
Markdown  is a lightweight markup langugage with plain text formatting syntax, intended to be easy to read and easy to write.
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

### First week. Day 4.

### First week. Day 5.

CSS game on:  
CSS layout documentation on: 





    

