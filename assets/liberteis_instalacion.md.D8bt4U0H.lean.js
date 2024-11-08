import{_ as a,c as i,a2 as s,o as r}from"./chunks/framework.DPuwY6B9.js";const b=JSON.parse('{"title":"Instalación de LiberTeis","description":"","frontmatter":{},"headers":[],"relativePath":"liberteis/instalacion.md","filePath":"liberteis/instalacion.md"}'),o={name:"liberteis/instalacion.md"};function t(n,e,c,l,d,p){return r(),i("div",null,e[0]||(e[0]=[s('<h1 id="instalacion-de-liberteis" tabindex="-1">Instalación de LiberTeis <a class="header-anchor" href="#instalacion-de-liberteis" aria-label="Permalink to &quot;Instalación de LiberTeis&quot;">​</a></h1><p>A continuación, te proporciono los pasos detallados para instalar LiberTeis en tu servidor. Asegúrate de seguir cada paso con cuidado para una instalación exitosa.</p><h2 id="_1-requisitos-previos" tabindex="-1">1. Requisitos Previos <a class="header-anchor" href="#_1-requisitos-previos" aria-label="Permalink to &quot;1. Requisitos Previos&quot;">​</a></h2><p>Antes de comenzar la instalación, asegúrate de que tu servidor cumpla con los siguientes requisitos:</p><ul><li>Arquitectura de CPU x86_64 o ARM64.</li><li>Al menos 1GB de espacio en disco disponible.</li><li>Al menos 0.4GB de RAM disponibles.</li><li>Al menos 1 núcleo de CPU disponible.</li><li>Un servidor con soporte para Docker.</li><li>Docker instalado en el servidor seleccionado.</li></ul><div class="warning custom-block"><p class="custom-block-title">Sistemas Probados</p><p>LiberTeis ha sido probado en sistemas Linux con Docker instalado, específicamente en Ubuntu Server y Debian.</p><p>No se garantiza el funcionamiento en otros sistemas operativos o configuraciones diferentes.</p></div><div class="tip custom-block"><p class="custom-block-title">Consumo Real</p><p>El consumo estimado de recursos para un servidor en producción con LiberTeis es de aproximadamente 0.2GB de RAM y 0.5 núcleos de CPU. Ten en cuenta que estos valores pueden variar según el número de usuarios, eventos y conexiones.</p></div><h2 id="_2-instalacion-de-liberteis" tabindex="-1">2. Instalación de LiberTeis <a class="header-anchor" href="#_2-instalacion-de-liberteis" aria-label="Permalink to &quot;2. Instalación de LiberTeis&quot;">​</a></h2><p>Sigue estos pasos para instalar LiberTeis en tu servidor:</p><h3 id="_1-descargar-y-ejecutar-el-script-de-descarga-de-liberteis" tabindex="-1">1- Descargar y ejecutar el script de descarga de LiberTeis <a class="header-anchor" href="#_1-descargar-y-ejecutar-el-script-de-descarga-de-liberteis" aria-label="Permalink to &quot;1- Descargar y ejecutar el script de descarga de LiberTeis&quot;">​</a></h3><p>Abre una terminal en el servidor y ejecuta el siguiente comando para descargar y ejecutar el script que descargará el instalador de LiberTeis:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://alexdevuwu.com/l/liberteisDL)&quot;</span></span></code></pre></div><h3 id="_2-seleccionar-la-opcion-correcta" tabindex="-1">2- Seleccionar la opción correcta <a class="header-anchor" href="#_2-seleccionar-la-opcion-correcta" aria-label="Permalink to &quot;2- Seleccionar la opción correcta&quot;">​</a></h3><p>Una vez ejecutado el script, se te presentarán varias opciones. Selecciona la opción <code>1</code> para instalar LiberTeis en tu servidor.</p><p>El script te guiará durante todo el proceso de instalación y te solicitará los datos necesarios para configurar la aplicación de manera adecuada.</p><p>Por favor, recuerda cubrir todos los datos solicitados de forma correcta para evitar problemas en la instalación. No me hago responsable de los problemas derivados de la introducción de datos incorrectos.</p><p>¡Recuerda ejecutar el script con permisos de superusuario (root) para garantizar una instalación sin problemas!</p>',17)]))}const h=a(o,[["render",t]]);export{b as __pageData,h as default};