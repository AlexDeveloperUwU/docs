# Actualización de LiberTeis

A continuación, te proporciono los pasos detallados para actualizar LiberTeis en tu servidor. Asegúrate de seguir cada paso con cuidado para una actualización exitosa.

## 1. Requisitos Previos

Antes de comenzar la actualización, asegúrate de que tu servidor cumpla con los siguientes requisitos:

- Al menos 1GB de espacio en disco disponible.
- Al menos 0.4GB de RAM disponibles.
- Al menos 1 núcleo de CPU disponible.

::: tip Consumo Real
El consumo estimado de recursos para un servidor en producción con LiberTeis es de aproximadamente 0.2GB de RAM y 0.5 núcleos de CPU. Ten en cuenta que estos valores pueden variar según el número de usuarios, eventos y conexiones.
:::

## 2. Actualización de LiberTeis

Sigue estos pasos para actualizar LiberTeis en tu servidor:

### Paso 1: Descargar el Script de Actualización

Abre una terminal y ejecuta el siguiente comando para descargar el script de actualización de LiberTeis:

```bash
sudo curl -o manager.sh https://raw.githubusercontent.com/AlexDeveloperUwU/liberteis/main/scripts/manager.sh
```

### Paso 2: Dar Permisos de Ejecución al Script

Una vez descargado el script, otórgale permisos de ejecución con el siguiente comando:

```bash
sudo chmod +x manager.sh
```

### Paso 3: Ejecutar el Script de Actualización

Finalmente, ejecuta el script de actualización con el siguiente comando:

```bash
sudo ./manager.sh
```

El script te guiará durante todo el proceso de actualización y te solicitará los datos necesarios para configurar la aplicación de manera adecuada.

¡Recuerda ejecutar el script con permisos de superusuario (root) para garantizar una actualización sin problemas!