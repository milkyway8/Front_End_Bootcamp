![Bootcamp Header](/images/bootcamp_header.png)

---

![Monday](/images/monday.png)


## TOPICS

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

**3. Play CSS flexbox game**

**4. CSS Corussel**

___

**1. gitHub Branching**
___

**a. git Flow**

A branch is a division from master repository created to allow people to work on the current project without doing it from master. It means no project session ever tested before is located in master. Commonly, a branch called developer is created to store all changes made to that particular project session and then is merge to the master. Thats why a github structure is refered to a tree, where master represents the root with branches attach to it. Next image represent a git workflow.
___
![git workflow](/images/gitflow-orig-diagram.png)  
___

**b. git Commands**

| COMMAND                       | ACTION PERFORMED
|:------------------------------|:------------------------------------------
|git log oneline                |
|git log decorate               |
|git log graph                  |
|git checkout branch            |. goes to branch
|git checkout -b branch         | . creates the branh and goes new branch.
|git commit -ma tracked         | file stagging and git commit, same as gcam.
|git revert.                    |  is a inverse commit.
|git branch -r                  |     
|git fetch                      |
|g merge master                 |
|git pull origin                |
|git branch -D branch1 branch2  |

___
**2. CSS flexbox**

    a. Concepts
    b. Properties for the parent
    c. Properties for the children
    d. Flexbox example
___

**a. Concepts**

![Flexbox schema](/images/flexbox.png)

**A flexbox or flexible box** is a new layout form in CSS3. Use of flexbox ensures that elements behave predictably when the page layout must accommodate different screen sizes and different display devices. For many applications, the flexible box model provides an improvement over the block model in that it does not use floats, nor do the flex container's margins collapse with the margins of its contents.

**Flexbox** consists of **flex containers** (parent) and **flex items** (children). A flex container is declared by setting the display property of an element to either flex (rendered as a block) or inline-flex (rendered as inline). Inside a flex container there is one or more flex items. Flex items are positioned inside a flex container along a flex line. By default there is only one flex line per flex container.

**b. Properties for the parent**

- **display:** defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children. Propertie values available: flex and inline-flex.

- **flex direction:** establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns. Property value available: row (default), row-reverse, column, column-reverse.

- **flex wrap:** by default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property. Property values available: nowrap (default), wrap, wrap-reverse.

- **flex flow:** This is a shorthand flex-direction and flex-wrap properties, which together define the flex container's main and cross axes. Default is row nowrap. 

- **justify content:** This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line. Propertie values available: flex start(default), flex end, flex center, space between, and space around.

- **align items:** This defines the default behaviour for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis). Propertie values available: stretch (default), flex start, flex end, flex center, and baseline.

- **align content:** This aligns a flex container's lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis. Note: this property has no effect when there is only one line of flex items. Propertie values available: stretch (default), flex start, flex end, center, space between, and space around.


**c. Properties for the children**

- **order:** By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container.

- **flex grow:** This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up. If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least). Navigate numbers are invalid.
 
- **flex shrink:** This defines the ability for a flex item to shrink if necessary. Navigate numbers are invalid.

- **flex basis:** This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means "look at my width or height property" (which was temporarily done by the main-size keyword until deprecated). The content keyword means "size it based on the item's content" - this keyword isn't well supported yet, so it's hard to test and harder to know what its brethren max-content, min-content, and fit-content do. If set to 0, the extra space around content isn't factored in. If set to auto, the extra space is distributed based on its flex-grow value.

- **flex:** This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. It is recommended that you use this shorthand property rather than set the individual properties. The short hand sets the other values intelligently. 

- **align self:** It is recommended that you use this shorthand property rather than set the individual properties. The short hand sets the other values intelligently. Note that float, clear and vertical-align have no effect on a flex item. 

**d. flexbox example**

![Flexbox HTML](/docs/css/flexbox/flexbox.html)
![Flexbox CSS](/docs/css/flexbox/flexbox.css)

___
**3. Play CSS flexbox game**
___

![CSS flexbox froggy](http://flexboxfroggy.com/)

___
**4. CSS Corussel**

![Corussel HTML](/docs/css/flexbox/carousel.html)
![Corussel CSS](/docs/css/flexbox/carousel.css)
___

![Thursday](/images/thursday.pgn)

## TOPICS

**1. Layout techniques review**

    a. floats
    b. inline-blocks
    c. flexbox
    d. css tricks

**2. CSS carousell**
___

resetting carousell
box shadow
colors
install font on server
    
**a. floats**

floats does not have size, thats why we use clear: floats and override: hidden.

**b. inline-blocks**

Inline elements that has block element properties. display: inline-block.
center block margin 0 auto.
center inline. You have to have a block container and then text aling-center.
vertical-align top.

**c. flexbox**

fontawesome.io/icon


![Friday](/images/friday.png)

## TOPICS

**1. general talk**

kenwheeler.github.io/slick/

huge everbody scrolls
ux (user experience). cart sorting, focus group.
ui (user interface)

**2. Advanced position**

    a. positioned elements
    
**a. positioned elements**

    - static (Not positioned)
    - relative
    - absolute
    - fixed

__scheme.html example__

commet. 
descendent selector. class .class ..
child selector div > span. hijo directo

to have a position the element must have a position value: relative, absolute, or fixed.
if an element is not position the next position to the body.
positioning modifies layouts.
relative positioning
absolute positioning
fixed positioning

floats move with scroll

**b. positioned elements for menus**

    - submenus

**2. 

**Libreria para animaciones**

green sock
velocity
animate.css
motion js
motion graphics ..motion ui

3. realative abslute menus
z index: it has to have position
speudo-selector
transition

**4. responsive design**

css media queries

mobile styles 
portrait and devices

Mobile fisrt development. Always think on mobile first.

dan abramov.redux.arquitectur para manejo del estado para js.

responsive images

- device dimensions
- image dimensions
- device screen resolution

retina screens
use svg images. width 100%
responsive png, gif, jpg
retina optimization image

enable responsive size

![saturday](/images/saturday.png)

## TOPICS

yeoma.io: template generator. Use gulp and grunt gestores de tareas. para ir a produccion hay que minificar codigo y otras tareas. 

modelo vista controlador. todo mvc. todo list.
crud. create read update delete.

controlador: logica de negocio. comprobar, validar, permisos, tareas. funcion create.
el servicio se comunica con los controladores.
model: logica de creacion.
view: 

local storage. 

**1. Bootstrap framework**

**2. install yeoman**

Discovering generatos. isntalar plantillas de stacks de elementos de front end. instalar template.
jhipster plantilla de yeoman que utiliza srping mvc y angular.
spring mvc es un framework de aplicaicones web para java.

npm install -g yo
npm instal -g generator-webapp
npm install -g yo generator-webapp. puedo instalar multiples paquetes con espacios.
npm install -g gulp-cli bower

npm bower. administrador de paquetes.

**3. crear una carpeta llamada bootstrap**


yo webapp
bootstrap
bootstrap 3
bdd

**concentremonos en la carpeta app**

gulp server. localhost:9001.

no borrar comentarios porque cargan otras cosas

 <!-- build:css styles/vendor.css -->
    <!-- bower:css -->
    <!-- endbower -->
    <!-- endbuild -->
    
imprime cuando usamos un navegador viejo

class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.

vendor js.1:12 minutos.

borrar div content
borrar todos los estilos de /styles/main.scss

light reload gulpfile.js --> wathc

**4. bootstrap**

To learn bootstrap go to its documentation.

tiene un sistema de grillas. El objetivo es definir columnas para acceder el contenido. sistema de 12 columnas para bootstrap.

En bootstrap 3. podemos especificar el numero de columnas segun la tecnologia. modile or desktop.

Para empezar sistema de grillas es necesario un contenedor, que puede ser container y container-fluid. 

offsetting columns

**Ejercicio photo grupo** 





