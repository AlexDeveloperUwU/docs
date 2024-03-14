# La ruleta de Python

## Introducción
La ruleta de Python, a grandes rasgos, es un juego single player en el cual el jugador (tú o una persona del chat de Twitch, véase [modos de juego](#modos-de-juego)) estará tirando de una ruleta, comprando letras (vocales o consonantes), y cuando sea el momento, resolviendo el panel. El objetivo del juego es acumular la mayor cantidad de dinero posible.

## Modos de juego
<h3 style="color:#00cbcc">Modo juego local</h3>

En este modo, el jugador que ejecuta el programa será el que juega, es decir, en el ordenador donde se ejecuta. El jugador podrá comprar letras, girar la ruleta, y resolver el panel.

Si quedan consonantes, entonces el jugador tirará de la ruleta. Luego, dependiendo del panel que haya salido el jugador podrá o comprar una vocal o una consonante. Luego, al jugador se le da la opción de comprar vocal. Por último, se le permite resolver si lo desea.

Cuando ya no queden más consonantes, para añadirle más dificultad, el usuario ya no podrá comprar más vocales, y tendrá que resolver el panel con las letras que haya comprado anteriormente.

<h3 style="color:#00cbcc">Modo chat de Twitch</h3>

En este modo, se ejecutará un bot de Twitch que debe ser definido antes de ejecutar el programa en el .env. El bot lo que hará será recibir los distintos mensajes del chat de Twitch y ejecutar el juego. El jugador podrá comprar letras, girar la ruleta, y resolver el panel.

Si quedan consonantes, entonces el jugador tirará de la ruleta. Luego, dependiendo del panel que haya salido el jugador podrá o comprar una vocal o una consonante. Luego, al jugador se le da la opción de comprar vocal. Por último, se le permite resolver si lo desea.

Cuando ya no queden más consonantes, para añadirle más dificultad, el usuario ya no podrá comprar más vocales, y tendrá que resolver el panel con las letras que haya comprado anteriormente.

## Características a destacar
- El juego se ejecuta en la terminal, pero todo tiene colores o estilos de letra gracias a una clase del proyecto donde se almacenan todos.
- El juego tiene un sistema de puntuación que se va acumulando a medida que el jugador acierta letras o resuelve el panel.
- El juego tiene un leaderboard, donde para cada panel guardará al jugador que haya tenido mayor puntuación.
- Si el jugador no introduce ningún nombre y pulsa enter, dejando así el campo vacío, se le asignará el nombre de usuario del equipo donde se ejecuta.
- Si el jugador hace control + c, el juego automáticamente guardará los datos si el jugador ha obtenido una puntuación mayor que la que ya estaba guardada en el leaderboard.
- Se integra un modo de juego para el chat de Twitch, donde el bot se conectará al chat de Twitch y el jugador podrá interactuar con el bot para jugar.
- Antes de ejecutar el juego, comprueba que los ficheros JSON son correctos, si no es así entonces los borra y descarga de GitHub los ficheros correctos.

## Listado de ficheros
``` markdown
📁 Proyecto
   ├── .env (contiene las credenciales de Twitch)
   ├── leaderboard.json (contiene el leaderboard)
   ├── gajos_ruleta.json (contiene los gajos de la ruleta)
   ├── paneles.json (contiene los paneles)
   ├── main.py (contiene el programa principal)
   ├── Colores.py (contiene los colores y estilos de letra)
   ├── Juego.py (contiene el controlador del juego)
   ├── Jugador.py (contiene la clase Jugador)
   ├── Leaderboard.py (contiene la clase Leaderboard)
   ├── Panel.py (contiene la clase Panel)
   ├── Vista.py (contiene la clase Vista)
   ├── Ruleta.py (contiene la clase Ruleta)
   ├── Twitch.py (contiende el bot de Twitch)
   └── reset_util.py (utilidad para resetear el leaderboard)
```