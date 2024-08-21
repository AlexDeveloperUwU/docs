# Actualización de LiberTeis

A continuación, te proporciono los pasos detallados para actualizar LiberTeis en tu servidor. Asegúrate de seguir cada paso con cuidado para una actualización exitosa.

## 1. Requisitos Previos

Antes de comenzar la actualización, asegúrate de que tu servidor cumpla con los siguientes requisitos que se especificaron a la hora de realizar la instalación de LiberTeis:

- Arquitectura de CPU x86_64 o ARM64.
- Al menos 1GB de espacio en disco disponible.
- Al menos 0.4GB de RAM disponibles.
- Al menos 1 núcleo de CPU disponible.
- Un servidor con soporte para Docker.
- Docker instalado en el servidor seleccionado.

::: tip Consumo Real
El consumo estimado de recursos para un servidor en producción con LiberTeis es de aproximadamente 0.2GB de RAM y 0.5 núcleos de CPU. Ten en cuenta que estos valores pueden variar según el número de usuarios, eventos y conexiones.
:::

## 2. Actualización de LiberTeis

Sigue estos pasos para actualizar LiberTeis en tu servidor:

### 1- Descargar y ejecutar el script de actualización de LiberTeis

Abre una terminal en el servidor y ejecuta el siguiente comando para descargar y ejecutar el script que descargará el actualizador de LiberTeis:

```bash
curl -L https://alexdevuwu.com/l/liberteisDL | sudo bash
```

### 2- Seleccionar la opción correcta

Una vez ejecutado el script, se te presentarán varias opciones. Selecciona la opción `2` para actualizar LiberTeis en tu servidor.

El script te guiará durante todo el proceso de actualización. Se utilizarán los datos de configuración existentes para actualizar la aplicación de manera adecuada.

¡Recuerda ejecutar el script con permisos de superusuario (root) para garantizar una actualización sin problemas!
