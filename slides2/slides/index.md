- title : Angular1 vs React vs Angular2
- description : Comparison of JavaScript frameworks
- author : Roberto Aranda
- theme : night
- transition : default

***
- data-background : images/Dotnet16-9.png
- data-background-repeat : no-repeat
- data-background-transition: none
- data-background-position: 50% 50%

***

## Migrando de Angular 1 a React y a Angular 2!?

[@glomenar](https://twitter.com/glomenar)

![Logo](images/ngvsreact.png)

***

## <span class="mj-color">Roberto Aranda</span> 
- *Lead Developer* en *Sequel Business Solutions*
    - SQL
    - Backend
    - Front end apasionado
- 10+ años desarrollando software

![Rob](images/rob.jpeg)

[@glomenar](https://twitter.com/glomenar)

[ese.rober@gmail.com](mailto:ese.rober@gmail.com)

***
- data-transition: none 

<section data-markdown>
    <script type="text/template">
# Agenda
- Angular 1     <!-- .element: class="fragment" data-fragment-index="1" -->
- React         <!-- .element: class="fragment" data-fragment-index="2" -->
- Angular 2     <!-- .element: class="fragment" data-fragment-index="3" -->
    </script>
</section>

***
- data-background : images/cross.png
- data-background-repeat : no-repeat
- data-background-size: 250px
- data-background-position: 50% 50%
- data-background-transition: none
- data-transition: none 

# Agenda

- Angular 1 
- React     
- Angular 2 


***
- data-transition: none

Una historia

***
2014

***
# Hypotheke

***
### Hypotheke?

<img src="images/hypo.png" width="600" />

[link](https://hypotheke.herokuapp.com/)

***
# AngularJS 1

- Superheroic JavaScript MVVM Framework
- Creado por *Google* es uno de los frameworks de JavaScript más usados
- Tiene todo lo necesario para crear una *Single Page Application*
- Usa un *event loop* conocido como *$digest loop* para aplicar cambios

***
# Show me the Code

***
2016

***
# React

- A JavaScript library for building user interfaces
- Creado por *Facebook* es una apuesta segura estos días
- Declarativo y basado en Componentes
- Usa el concepto de *Virtual DOM* para minimizar el *rendering*

***
# Implicaciones
<section data-markdown>
    <script type="text/template">
- Creas elementos HTML en tus ficheros JavaScript  <!-- .element: class="fragment"-->
- Inventan un nuevo lenguaje para aliviar el paso anterior denominado JSX <!-- .element: class="fragment"-->
- JSX es simplemente insertar HTML en el fichero JavaScript <!-- .element: class="fragment"-->
- Hay que compilar JSX como un paso previo <!-- .element: class="fragment"-->
- No se llama compilar, se llama transpilar <!-- .element: class="fragment"-->
- Se usa Babel que realiza la compilación <!-- .element: class="fragment"-->
- Para usar el navegador, necesitas dos librerias: React y ReactDOM <!-- .element: class="fragment"-->
- Los componentes de React se pueden crear como clases ES6 extendiendo React.Component <!-- .element: class="fragment"-->
- No se llama ES6, se llama ES2015 <!-- .element: class="fragment"-->
    </script>
</section>

***

# Javascript Fatigue

Saul: “How’s it going?”

Me: “Fatigued.”

Saul: “Family?”

Me: “No, Javascript.”

***

## create-react-app

Paquete NodeJs para crear aplicaciones con React, 
incluye el *transpilador*, *bundler*, *hot-realoading*, *server*, etc. con

*Zero Configuration*

***

## Vamos a verlo

***

2016... y pico

***

# AngularJS 2

- One framework
- Creado por *Google* no es una evolución de Angular 1 sino una re-escritura desde cero
- También está basado en Componentes pero contiene mucho más que *UI*
- Mejora notablemente el rendimiento gracias a una nueva estrategia de detección de cambios
- Usa una librería externa llamada *ZoneJs* para notificar los cambios

***

## Vamos al turrón

***

# Conclusiones

- Hay una clara tendencia al diseño orientado a Componentes, no solo en React y Angular 2 sino en otros frameworks

- El *Front End Development* ha cambiado y cambia a gran velocidad como se puede ver comparando Angular 1 y 2

- A pesar de las diferencias se identifican patrones comunes. Los frameworks
son herramientas pero los buenos principios los pones tu: *Single Responsibility y Separation of Concerns*

- React es solo una librería de UI mientras que Angular es un framework completo.
Esto implica la necesidad de tomar más decisiones en desarrollo y más diferencias 
entre aplicaciones.

- React facilita la Composición de una manera natural y simple, 
Angular 2 parece más *verbose*

*** 

> No hay ni habrá un *Framework que los gobierne a todos*

***

# ¿Preguntas?

***
- data-background : images/Dotnet16-9.png
- data-background-repeat : no-repeat
- data-background-transition: none
- data-background-position: 50% 50%
