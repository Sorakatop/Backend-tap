# Challenge Backend Tap

_Challengue realizado para TAP, backend en nodeJs, Sequelize y Php_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._



### Pre-requisitos 📋

_Install dependencies_

```
npm i
```

### Instalación 🔧

_una vez que termina las dependencias, ejecutar el comando_

```
npm start
```

_Server is running on port 3000_

```
Server running 🐯
```

_Podemos realizar las siguientes consultas_
```
Get games    => Trae toda la Data
Get game     => Trae la data que especifiquemos /:id
Delete Game  => Borra una data que le digamos mediante el parametro /:id
Post games   => Crea un juego nuevo. Si no ponemos datos esta como default juego Created
Post states  => Podemos crear estados por si queremos realizar mas estados
PUT game     => Nos permite modificar un juego,
              🎃 Necesitamos inservar los valores por 1-"WON" o 2-"LOST"🎃
```
## Ejecutando las pruebas ⚙️

_Api Consultas_
##🧰 Herramientas
* [Thunder Client](https://www.npmjs.com/package/express)  - Plugin VSC
* [PostMan](https://www.postman.com/)  - Postman ApiPlatform


_Data_
```
Variantes"state_id"
null=1
1:created
2:won
3:lost
-----------------------
{
    "state_id":1,
    "cells_id":null
}
-----------------------
```

_Testing con_
```
npx jest
```
## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Express](https://www.npmjs.com/package/express)  - Framework web backend
* [Sequelize](https://sequelize.org/) - Manejador de conecciones
* [Jest](https://www.npmjs.com/package/jest) - Paquete de testeo
#
---
⌨️ con ❤️ por [Gonzalo](https://github.com/Sorakatop/) 🌠
