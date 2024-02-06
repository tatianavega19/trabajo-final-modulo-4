# EXPLICACION DE LA APLICACION:

Esta es una aplicación que te permite explorar y gestionar información de personajes de anime y manga mediante el uso de una API dedicada. La aplicación ofrece diversas funciones, incluyendo la búsqueda integral, obtención de URLs e imágenes, y gestión de listas de personajes.

## INFORMACION SOBRE LOS METODOS:

A continuación, se detalla cómo y para qué se utilizan cada una de las funciones del programa:

- **Funcion y utilidad de los metodos**
   1. `npm run start getAllData`: Devuelve toda la información completa de la API.
   2. `npm run start getUrlById <ID>`: Retorna un string con el URL del personaje correspondiente al ID pasado por parámetro.
   3. `npm run start getNicknamesById <ID>`: Retorna un string con los apodos separados por comas del personaje correspondiente al ID pasado por parámetro.
   4. `npm run start getUrlImages <ID> <FORMATO>`: Función que toma dos parámetros (ID y formato de imagen) y retorna un objeto con la URL de la imagen según el formato especificado (jpg, webp).
   5. `npm run start getOrdererList`: Retorna un array con la lista de personajes ordenados de menor a mayor según el ID.

## USO EN CONSOLA:
A continuación, se detalla cómo serían las funciones ingresadas correctamente en la terminal:

   1. Obtener toda la información:`npm run start getAllData`.
   2. Obtener el URL por ID:`npm run start getUrlById 417`.
   3. Obtener nicknames por ID:`npm run start getNicknamesById 35252 ` .
   4. Obtener URL de imagen por ID y formato:`npm run start getUrlImages 80 "jpg" ` o `npm run start getUrlImages 80 "webp" `.
   5. Obtener lista ordenada por ID:`npm run start getOrdererList`.