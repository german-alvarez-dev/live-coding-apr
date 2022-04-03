<img src="https://miro.medium.com/max/3150/1*NFwzjjur2atssvIlGia0AQ.jpeg" width="200" style="float:right">

# Products API | Live coding April 2022 @ Ironhack Madrid

Pequeña API REST de productos desarollada por [Germán Álvarez](https://www.linkedin.com/in/german-alvarez-dev/) en [Ironhack Madrid](https://www.ironhack.com/es/desarrollo-web/madrid) (abril 2022)

## Contenido del Live Coding

Nuestro pequeño viaje digital estuvo compuesto por tres pasos:

1. Desarrollo de una API REST de productos a través de [NodeJS](https://nodejs.org/es/) y [ExpressJS](https://expressjs.com/es/). Puedes encontrar los códigos desarrollados en este mismo repositorio. Si no conoces GIT, te dejo en las instrucciones infreriores cómo descargártelo.

2. Paso a producción o _deploy_ de la API desarrollada en [Heroku](https://heroku.com), aprovechando su funcionalidad para realizar un _deploy_ a partir de este mismo repositorio. El enlace sobre el que subimos nuestro desarrollo [puedes accederlo aquí](https://live-coding-apr.herokuapp.com/), y los tres _endpoints_ que desarrollamos fueron los siguientes:
    - `/api/allProducts`: muestra todos los productos ([ejemplo](https://live-coding-apr.herokuapp.com/api/allProducts))
    - `/api/category/nombreCategoría`: muestra los productos que hagan match entre su propiedad `category` y la categoría indicada en la URL ([ejemplo](https://live-coding-apr.herokuapp.com/api/category/furniture))
    - `/api/brand/nombreMarca`: muestra los productos que hagan match entre su propiedad `brand` y el fabricante  indicado en la URL ([ejemplo](https://live-coding-apr.herokuapp.com/api/brand/Apple))

3. Desarrollo de un cliente con HTML, CSS y JS a través del que consumir la API, listando aquí el JSON de productos restornado por la misma y permitiendo aplicar filtros por marca y categoría. Disponible [en este enlace](https://github.com/german-alvarez-dev/live-coding-apr-client).

## Descarga de archivos

Descárgate los archivos de la API haciendo click en el botón verde de la esquina superior izquierda (`Code`) y seleccionando `Download zip`

## ¿Dudas? ¿Ideas? 

Si puedo ayudarte con algo contáctame en [Linkedin](https://www.linkedin.com/in/german-alvarez-dev/), así como si tienes alguna idea inspiradora para desarrollar en cualquiera de los eventos mensuales gratuitos que impartimos en el campus. 

¡Nos vemos pronto!
