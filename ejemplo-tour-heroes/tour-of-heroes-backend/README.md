# Demo backend node, express, mongo Tour of Heroes

## 1.Instalar las dependencias
```npm i express mongoose nodemon dotenv```

## 2. Crear en Mongo la BD y configurar conexión

- Registrarse en Mongo, crear una BD, obtener la cadena de conexión y modificar el fichero de entorno .env https://www.mongodb.com/es
- Por defecto se deja una conexión de BD abierta para pruebas.
- Por faclidad, desargar Compass o trabajar en la nube <https://www.mongodb.com/try/download/compass>


## 3. Ejecutar
```npm start```

## 4. Probar
Descagar postman <https://www.postman.com/> y probar los servicios GET (sin y con parámetro), POST, PUT y DELETE (los tres servicios con parámetro):

| URL      | Método | Descripción |
| ----------- | ----------- | ----------- |
| <http://localhost:3000/api/heores>      | GET       | Retorna un JSON con todos los héroes       |
| <http://localhost:3000/api/heores/ID>   | GET        | Busca y retorna un JSON con el héroe que coincide con el ID       |
| <http://localhost:3000/api/heores>   | POST        | Inserta un nuevo héroe       |
| <http://localhost:3000/api/heores/ID>   | PUT        | Modifica el héroe que coincide con el ID        |
| <http://localhost:3000/api/heores/ID>   | DELETE        | Elimina el héroe que coincide con el ID        |

## 5. Estudiar el código fuente y comparar con Typescript
- Estudie el código y compare con Typescript.
- Modifique el código, agregue nuevos atributos al héroe y pruebe los servicios (en ese caso ajuste en el frontend simétricamente).
- Investigue cómo implementar un proyecto similar en Typescript.

## Referencias
Este proyecto es una adaptación de este tutorial.
<https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/>
