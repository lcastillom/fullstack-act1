# Proyecto Full Stack

Este proyecto es una aplicación full stack que incluye un frontend en React, dos APIs en Node.js y una base de datos MySQL. La aplicación se ejecuta en contenedores Docker utilizando Docker Compose.

## Estructura del Proyecto

- `front-end`: Contiene el código del frontend en React.
- `api-clientes`: Contiene el código de la API de clientes en Node.js.
- `api-hoteles`: Contiene el código de la API de hoteles en Node.js.
- `docker-compose.yaml`: Archivo de configuración para Docker Compose.

## Requisitos

- Docker
- Docker Compose

## Configuración

### Variables de Entorno

Asegúrate de configurar las siguientes variables de entorno en un archivo `.env` en la raíz del proyecto:

#### API clientes

```env
MONGODB_URI=mongodb://localhost:27017/misvacaciones
PORT=3001
IS_HTTPS=false
ORIGINS=http://localhost:3000,http://localhost:3001
URL=localhost
```

#### API hoteles

```env
PORT=3002
IS_HTTPS=false
ORIGINS=http://localhost:3000,http://localhost:3002
URL=localhost
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=123456
DB_NAME=hoteles
```

#### Front-end

```env
REACT_APP_API_CLIENTES_URL=http://localhost:3001/api
REACT_APP_API_HOTELES_URL=http://localhost:3002/api
```