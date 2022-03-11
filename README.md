# Walmart challenge backend

Esta es mi solución del backend para el desafío de la api que retorna productos desde una base de datos en MongoDB.

# Ejecución

Para la ejecución se debe tener instalado en el computador de pruebas el entorno de desarrollo Docker y ejecutar el siguiente comando.

``` docker-compose build ```

Para inicialmente construir el contenedor.

Luego se ejecuta

``` docker-compose up ```

Esto va a iniciar el contenedor en el puerto 8888, para comprobar que esta funcionando correctamente se puede hacer a través del navegador en la direccion ` localhost:8888/ping` o en Postman.

# Resultados

La api que retorna productos se encuentra en 

``` localhost:8888/search-product?{searchValue}```

* Reemplazar {searchValue} por el valor de búsqueda.

# Pruebas

Para ejecutar las pruebas, se debe ejecutar:

```
npm run test
```

# Opcional

Para ejecutar el frontend, se debe levantar el servicio, clonar el repositorio y ejecutar de la siguiente forma:

```
docker-compose up -d
cd ..
git clone https://github.com/RaimundoVU/walmarttech-frontend.git
cd walmarttech-frontend
npm start
```