# Instalación de LiberTeis

A continuación, te proporciono los pasos detallados para instalar LiberTeis en tu servidor. Asegúrate de seguir cada paso con cuidado para una instalación exitosa.

## 1. Requisitos Previos

Antes de comenzar la instalación, asegúrate de que tu servidor cumpla con los siguientes requisitos:

- Arquitectura de CPU x86_64 o ARM64.
- Al menos 1GB de espacio en disco disponible.
- Al menos 0.4GB de RAM disponibles.
- Al menos 1 núcleo de CPU disponible.
- Un servidor con soporte para Docker.
- Docker instalado en el servidor seleccionado.


::: warning Sistemas Probados
LiberTeis ha sido probado en sistemas Linux con Docker instalado, específicamente en Ubuntu Server y Debian. 

No se garantiza el funcionamiento en otros sistemas operativos o configuraciones diferentes.
:::

::: tip Consumo Real
El consumo estimado de recursos para un servidor en producción con LiberTeis es de aproximadamente 0.2GB de RAM y 0.5 núcleos de CPU. Ten en cuenta que estos valores pueden variar según el número de usuarios, eventos y conexiones.
:::

## 2. Instalación de LiberTeis

Sigue estos pasos para instalar LiberTeis en tu servidor:

### 1- Descargar y ejecutar el script de descarga de LiberTeis

Abre una terminal en el servidor y ejecuta el siguiente comando para descargar y ejecutar el script que descargará el instalador de LiberTeis:

```bash
bash -c "$(curl -fsSL https://alexdevuwu.com/l/liberteisDL)"
```

### 2- Seleccionar la opción correcta

Una vez ejecutado el script, se te presentarán varias opciones. Selecciona la opción `1` para instalar LiberTeis en tu servidor.

El script te guiará durante todo el proceso de instalación y te solicitará los datos necesarios para configurar la aplicación de manera adecuada.

Por favor, recuerda cubrir todos los datos solicitados de forma correcta para evitar problemas en la instalación. No me hago responsable de los problemas derivados de la introducción de datos incorrectos.

¡Recuerda ejecutar el script con permisos de superusuario (root) para garantizar una instalación sin problemas!
