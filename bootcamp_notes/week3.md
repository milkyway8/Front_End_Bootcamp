![Bootcamp Header](/images/bootcamp_header.png)

---

![Monday](/images/monday.png)

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
___

![Tuesday](/iamges/tuesday.pgn)

## TOPICS

**1. Training**

    a. DOM
    b. git
    c. flexbox
___
We saw classes schedule in trello, and talk about it.
Doubt. hwo to open a file from bash. cat fielname. start namefile
vainilla

**1. TRAINING**
___
 try git hub.io

___

![Wednesday](/images/wednesday.png)

## TOPICS

**1. gitHub branching**
    
    a. git Flow
    b. git Commands

**2. CSS flexbox**


___

**a. git Flow**

A branch is a division from master repository created to allow people to work on the current project without doing it from master. It means no project session ever tested before is located in master. Commonly, a branch called developer is created to store all changes made to that particular project session and then is merge to the master. Thats why a github structure is refered to a tree, where master represents the root with branches attach to it. Next image represent a git workflow.

![git workflow](/images/gitflow-orig-diagram.png)  


**b. git Commands**

- ways to see log
git log oneline
git log decorate
git log graph 

git checkout branch. goes to branch
git checkout -b branch. creates the branh and goes new branch.
git commit -ma tracked file stagging and git commit, same as gcam.

git revert. is a inverse commit.

git branch -r
git fetch 
g merge master
git pull origin
git branch -D branch1 branch2



**2. CSS flexbox**

    a. Therminology



**a. Therminology**

flex container and flex items
main axis and cross axis
main start and main end
cross start and cross end

alternative to floatings and inline blocks

- flex diplay
flex and inline flex
display: flex
display: inline-flex

- flex direction
i use to change flex item direction
flex direction: colum;

- flex wrap
default(nowrap)
flex wrap: wrap  hace salto de linea

- justify content: funciona en el main
properties
    - flex start(default)
    - flex end
    - flex-between
    - flex-around
    
justify content: center;
justify content: space-between;

- align items: funciona en el cross

- align content

- order

flexcontainer .flex-items.nt-child{
order: 1;
flex-grow: 2;
}

- flex_grow
- flex.(flex-grow,flex-trim,flex-basis)

-aling self es en cross


**3. carussel html and css**






