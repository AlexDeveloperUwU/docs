# Instalación de LiberTeis

Estos son los pasos que deberás seguir para poder instalar LiberTeis en un servidor, ya sea de forma privada o pública.

## 1- Requisitos previos

- Un servidor con soporte para Docker
- Docker instalado en el servidor que hayas seleccionado
- Al menos 1GB de espacio en disco
- Al menos 0.4GB de RAM disponibles
- Al menos 1 núcleo de CPU disponible

<br>

::: warning Sistemas probados
LiberTeis ha sido probado en sistemas Linux con Docker instalado, concretamente se ha probado en Ubuntu Server y Debian.<br>
LiberTeis también se probó en Windows **SIN** Docker, es decir, ejecutándolo de forma nativa con Node.js v18, pero esto no se recomienda.
:::

::: tip Consumo real
El consumo de un servidor puesto en producción con LiberTeis es de aproximadamente 0.2GB de RAM y 0.5 núcleos de CPU.<br>
Ten en cuenta que esto podría variar dependiendo del número de usuarios, eventos, conexiones, etc.
:::
