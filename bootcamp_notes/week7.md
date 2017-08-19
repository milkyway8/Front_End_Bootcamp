# MARTES

**1. ui components**

    - semantic ui
    - ant
    
**2. react router**

    - react library for page routing 
    - (https://reacttraining.com/react-routetr/web/example/basic) (https://reacttraining.com/react-router/) (https://reacttraining.com/)
    - server side rendering
    - single page application for web applications
    - gatsbyjs, wintersmith static website generators
    
**3. node js**

    - backend: base de datos, seguridad. Interacción con el servidor.
    - frontend interacción con el browser.
    - isomorpihc applications
    - node & express to made web applications.
    - levantar servidor de node. (documentation). express. motor de templates (generador de plantillas)
    - ver sem
    - httppie & httpcurl
    - progressive web apps
    - http status code
    - pug (template system)

**express app**

**4. nodeschool**

    - npm i -g learnyounode
    - codigo asyncrono
    - javascript functional
    
# MIERCOLES

**1. nodeschool**

    - node
    - express (npm install -g expressworkshop)

# VIERNES

**1. NEXT.JS**

    - like a create react app but less flexible
    - easy config migration
    - isomorphic
    - can load css directly, have to use a cdn
    - has his own pages enrouter
    
    - scripts. dev, build, start.
    - create pages
    - create index.js inside pages
    - error managment 
    - just render or includes methods
    - use a page router instead of a link. react has his own router.
    - server side rendering
    - to use a method it must be inside a class cause functions inside a class are methods.
    - next initial pros run on server
    - gitignore .next folder
    
        
**How to use it**

a. create an empty folder
b. `npm install next react react-dom --save`
c. create folders require

**2. NOW**

    - now zeit
    - next.js is ready to production
    - see project ready to production



**3. CLOUDUP**

    - AUTOMATIC
    
**4. METEOR**

**5. WEBPACK**

    - tree shaking
    - hot module replacement
    - coding splitting
    
**6. NODE MODULES**

    - dont upload to remote repository
    - use git .gitignore --> node modules, gitignore.io
    - remove it. delete node modules

    - dont include 
    
# SABADO

**1. template engine systems views & express**

    - pub
    - handlebars
    - ejs
    - mustache
    
**2. react**

    - react does not requiere a template engine system cuase it has just a single js file
    
**3. made a next application**

    a. make a folder name next-example
    b. open folder in text editor
    c. initialize package.json with the command `npm init -y`
    d. create a gitignore file, and ignore node modules `node_modules/`
    e. install and store dependencies `npm install react react-dom`
    f. add next.js scripts
        ```
        "scripts": {
            "dev": "next",
            "build": "next build",
            "start": "next start"
        },
    g. create pages folder and file index.js with context.
    ```
    export default () => {
        <div>Welcome to the jungle<div>
    }
    ```
    h. run app in developer mode `npm run dev`
    
## Ejercicio
1. Consumir el endpoint de productos `http://10.116.122.33:3001/products` y hacer render de esos productos.