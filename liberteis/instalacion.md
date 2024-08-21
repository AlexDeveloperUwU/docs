# Instalación de LiberTeis

A continuación, te proporciono los pasos detallados para instalar LiberTeis en tu servidor. Asegúrate de seguir cada paso con cuidado para una instalación exitosa.

## 1. Requisitos Previos

Antes de comenzar la instalación, asegúrate de que tu servidor cumpla con los siguientes requisitos:

- Un servidor con soporte para Docker.
- Docker instalado en el servidor seleccionado.
- Al menos 1GB de espacio en disco disponible.
- Al menos 0.4GB de RAM disponibles.
- Al menos 1 núcleo de CPU disponible.

::: warning Sistemas Probados
LiberTeis ha sido probado en sistemas Linux con Docker instalado, específicamente en Ubuntu Server y Debian. Se desaconseja ejecutarlo en Windows sin Docker, utilizando Node.js v18 de forma nativa.
:::

::: tip Consumo Real
El consumo estimado de recursos para un servidor en producción con LiberTeis es de aproximadamente 0.2GB de RAM y 0.5 núcleos de CPU. Ten en cuenta que estos valores pueden variar según el número de usuarios, eventos y conexiones.
:::

## 2. Instalación de LiberTeis

Sigue estos pasos para instalar LiberTeis en tu servidor:

### Paso 1: Descargar y Ejecutar el Script de descarga de LiberTeis

Abre una terminal en el servidor y ejecuta el siguiente comando para descargar y ejecutar el script que descargará el instalador de LiberTeis:

```bash
curl -L https://alexdevuwu.com/l/liberteisDL | sudo bash
```

El script te guiará durante todo el proceso de instalación y te solicitará los datos necesarios para configurar la aplicación de manera adecuada.

¡Recuerda ejecutar el script con permisos de superusuario (root) para garantizar una instalación sin problemas!
