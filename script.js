// ---------- BANCO DE PALABRAS POR DIFICULTAD ----------
// Cada palabra tiene su emoji (usado como imagen en ambos modos de juego).
// "soloEscribir" marca las sílabas: no tienen una imagen distinguible,
// así que el modo "Elegí la imagen" las excluye automáticamente.
const PALABRAS_FACIL = [
  { palabra: "MA", emoji: "🗣️", soloEscribir: true },
  { palabra: "PA", emoji: "🗣️", soloEscribir: true },
  { palabra: "LA", emoji: "🗣️", soloEscribir: true },
  { palabra: "SO", emoji: "🗣️", soloEscribir: true },
  { palabra: "LU", emoji: "🗣️", soloEscribir: true },
  { palabra: "TE", emoji: "🗣️", soloEscribir: true },

  { palabra: "SOL", emoji: "☀️" },
  { palabra: "OSO", emoji: "🐻" },
  { palabra: "OJO", emoji: "👁️" },
  { palabra: "PAN", emoji: "🍞" },
  { palabra: "PEZ", emoji: "🐟" },
  { palabra: "UVA", emoji: "🍇" },
  { palabra: "PIE", emoji: "🦶" },
  { palabra: "MAR", emoji: "🌊" },
  { palabra: "SAL", emoji: "🧂" },
  { palabra: "REY", emoji: "👑" },
  { palabra: "AVE", emoji: "🐦" },

  { palabra: "LUNA", emoji: "🌙" },
  { palabra: "GATO", emoji: "🐱" },
  { palabra: "PATO", emoji: "🦆" },
  { palabra: "CASA", emoji: "🏠" },
  { palabra: "FLOR", emoji: "🌸" },
  { palabra: "NUBE", emoji: "☁️" },
  { palabra: "RANA", emoji: "🐸" },
  { palabra: "ROSA", emoji: "🌹" },
  { palabra: "VACA", emoji: "🐮" },
  { palabra: "LOBO", emoji: "🐺" },
  { palabra: "PUMA", emoji: "🐆" },
  { palabra: "TREN", emoji: "🚂" },
  { palabra: "FOCA", emoji: "🦭" },
  { palabra: "LORO", emoji: "🦜" },
  { palabra: "CAMA", emoji: "🛏️" },

  { palabra: "LUZ", emoji: "💡" },
  { palabra: "PAZ", emoji: "🕊️" },
  { palabra: "MONO", emoji: "🐒" },
  { palabra: "TAZA", emoji: "☕" },
  { palabra: "DADO", emoji: "🎲" },
  { palabra: "COCO", emoji: "🥥" },
  { palabra: "PERA", emoji: "🍐" },
  { palabra: "TORO", emoji: "🐂" },
  { palabra: "ROPA", emoji: "👕" },
  { palabra: "BOTA", emoji: "👢" },
  { palabra: "HADA", emoji: "🧚" },
  { palabra: "OLLA", emoji: "🍲" },
  { palabra: "RAMA", emoji: "🌿" },
  { palabra: "ROJO", emoji: "🔴" },
  { palabra: "AZUL", emoji: "🔵" },
];

const PALABRAS_MEDIO = [
  { palabra: "ABEJA", emoji: "🐝" },
  { palabra: "PERRO", emoji: "🐶" },
  { palabra: "ARBOL", emoji: "🌳" },
  { palabra: "RATON", emoji: "🐭" },
  { palabra: "TIGRE", emoji: "🐯" },
  { palabra: "CIELO", emoji: "🌤️" },
  { palabra: "NIEVE", emoji: "❄️" },
  { palabra: "OVEJA", emoji: "🐑" },
  { palabra: "CERDO", emoji: "🐷" },
  { palabra: "SILLA", emoji: "🪑" },
  { palabra: "LIBRO", emoji: "📖" },
  { palabra: "GORRA", emoji: "🧢" },
  { palabra: "PLAYA", emoji: "🏖️" },
  { palabra: "NARIZ", emoji: "👃" },
  { palabra: "POLLO", emoji: "🐥" },
  { palabra: "LLAVE", emoji: "🔑" },
  { palabra: "LIMON", emoji: "🍋" },
  { palabra: "MAMA", emoji: "👩" },
  { palabra: "PAPA", emoji: "👨" },
  { palabra: "LAPIZ", emoji: "✏️" },
  { palabra: "RELOJ", emoji: "⌚" },
  { palabra: "CABRA", emoji: "🐐" },
  { palabra: "PLATO", emoji: "🍽️" },
  { palabra: "VERDE", emoji: "🟢" },
  { palabra: "AVION", emoji: "✈️" },
  { palabra: "JAMON", emoji: "🍖" },
  { palabra: "BOTON", emoji: "🔘" },
  { palabra: "TAMBOR", emoji: "🥁" },
  { palabra: "CAMISA", emoji: "👔" },
  { palabra: "ZAPATO", emoji: "👟" },
  { palabra: "CONEJO", emoji: "🐰" },
  { palabra: "PAYASO", emoji: "🤡" },
  { palabra: "COMETA", emoji: "🪁" },
  { palabra: "CAMION", emoji: "🚛" },
  { palabra: "ESTUFA", emoji: "🔥" },
  { palabra: "TIJERA", emoji: "✂️" },
  { palabra: "PELOTA", emoji: "⚽" },
  { palabra: "GLOBO", emoji: "🎈" },
  { palabra: "PIANO", emoji: "🎹" },
  { palabra: "TORTA", emoji: "🎂" },
  { palabra: "FIESTA", emoji: "🎉" },
  { palabra: "ESCOBA", emoji: "🧹" },
  { palabra: "MEDIAS", emoji: "🧦" },
  { palabra: "BARCO", emoji: "⛵" },
  { palabra: "COHETE", emoji: "🚀" },
  { palabra: "PULPO", emoji: "🐙" },
  { palabra: "JIRAFA", emoji: "🦒" },
  { palabra: "DELFIN", emoji: "🐬" },
  { palabra: "ERIZO", emoji: "🦔" },
];

const PALABRAS_DIFICIL = [
  { palabra: "ESTRELLA", emoji: "⭐" },
  { palabra: "TORTUGA", emoji: "🐢" },
  { palabra: "PANTERA", emoji: "🐆" },
  { palabra: "ELEFANTE", emoji: "🐘" },
  { palabra: "MARIPOSA", emoji: "🦋" },
  { palabra: "CANGREJO", emoji: "🦀" },
  { palabra: "CASTILLO", emoji: "🏰" },
  { palabra: "PARAGUAS", emoji: "☂️" },
  { palabra: "CALABAZA", emoji: "🎃" },
  { palabra: "CHOCOLATE", emoji: "🍫" },
  { palabra: "BICICLETA", emoji: "🚲" },
  { palabra: "COCODRILO", emoji: "🐊" },
  { palabra: "CABALLO", emoji: "🐴" },
  { palabra: "GALLINA", emoji: "🐔" },
  { palabra: "VENTANA", emoji: "🪟" },
  { palabra: "CAMPANA", emoji: "🔔" },
  { palabra: "MOCHILA", emoji: "🎒" },
  { palabra: "CUCHARA", emoji: "🥄" },
  { palabra: "MANZANA", emoji: "🍎" },
  { palabra: "NARANJA", emoji: "🍊" },
  { palabra: "CEBOLLA", emoji: "🧅" },
  { palabra: "CANGURO", emoji: "🦘" },
  { palabra: "ZANAHORIA", emoji: "🥕" },
  { palabra: "SANDIA", emoji: "🍉" },
  { palabra: "ALMOHADA", emoji: "🛏️" },
  { palabra: "DINOSAURIO", emoji: "🦖" },
  { palabra: "MURCIELAGO", emoji: "🦇" },
  { palabra: "PINGUINO", emoji: "🐧" },
  { palabra: "HORMIGA", emoji: "🐜" },
  { palabra: "RINOCERONTE", emoji: "🦏" },
  { palabra: "HIPOPOTAMO", emoji: "🦛" },
  { palabra: "GIRASOL", emoji: "🌻" },
  { palabra: "ARDILLA", emoji: "🐿️" },
  { palabra: "LAGARTIJA", emoji: "🦎" },
  { palabra: "ESCORPION", emoji: "🦂" },
  { palabra: "CARACOL", emoji: "🐌" },
  { palabra: "BALLENA", emoji: "🐋" },
  { palabra: "TIBURON", emoji: "🦈" },
  { palabra: "LANGOSTA", emoji: "🦞" },
  { palabra: "CALAMAR", emoji: "🦑" },
  { palabra: "FLAMENCO", emoji: "🦩" },
  { palabra: "PELUCHE", emoji: "🧸" },
  { palabra: "CUADERNO", emoji: "📓" },
  { palabra: "SEMAFORO", emoji: "🚦" },
  { palabra: "HELICOPTERO", emoji: "🚁" },
  { palabra: "AEROPUERTO", emoji: "✈️" },
];

const TIERS = { facil: PALABRAS_FACIL, medio: PALABRAS_MEDIO, dificil: PALABRAS_DIFICIL };
const DISTRACTORES_POR_DIFICULTAD = { facil: 1, medio: 2, dificil: 3 };
const ETIQUETAS_DIFICULTAD = { facil: "🌱 FACIL", medio: "🌟 MEDIO", dificil: "🔥 DIFICIL" };

const CLAVE_NOMBRE = "juego-lectoescritura-nombre";
const ELOGIOS = ["¡MUY BIEN!", "¡GENIAL!", "¡EXCELENTE!", "¡LO LOGRASTE!", "¡BARBARO!", "¡PERFECTO!"];
const POOL_DISTRACTORAS = "BCDFGHJKLMNPQRSTVXYZ".split("");
const INTENTOS_POR_RONDA = 3;

// ---------- ESTADO ----------
let dificultadActual = "facil";
let RONDAS = [];
let PALABRAS_IMAGEN = [];
let nombreJugador = "";
let rondaActual = 0;
let indiceLetra = 0;
let intentosRestantes = INTENTOS_POR_RONDA;
let rondaImagenActual = 0;
let vozEspanol = null;

// ---------- ELEMENTOS ----------
const pantallaInicio = document.getElementById("pantalla-inicio");
const pantallaDificultad = document.getElementById("pantalla-dificultad");
const pantallaMenu = document.getElementById("pantalla-menu");
const pantallaJuego = document.getElementById("pantalla-juego");
const pantallaImagenes = document.getElementById("pantalla-imagenes");
const pantallaFinal = document.getElementById("pantalla-final");
const zonaNombre = document.getElementById("zona-nombre");
const inputNombre = document.getElementById("input-nombre");
const saludoNombre = document.getElementById("saludo-nombre");
const btnCambiarNombre = document.getElementById("btn-cambiar-nombre");
const btnJugar = document.getElementById("btn-jugar");
const btnDifFacil = document.getElementById("btn-dif-facil");
const btnDifMedio = document.getElementById("btn-dif-medio");
const btnDifDificil = document.getElementById("btn-dif-dificil");
const btnVolverInicio = document.getElementById("btn-volver-inicio");
const btnCambiarDificultad = document.getElementById("btn-cambiar-dificultad");
const badgeDificultadEl = document.getElementById("badge-dificultad");
const btnModoEscribir = document.getElementById("btn-modo-escribir");
const btnModoImagen = document.getElementById("btn-modo-imagen");
const btnHomeJuego = document.getElementById("btn-home-juego");
const btnHomeImagen = document.getElementById("btn-home-imagen");
const btnJugarDeNuevo = document.getElementById("btn-jugar-de-nuevo");
const btnEscuchar = document.getElementById("btn-escuchar");
const btnEscucharImg = document.getElementById("btn-escuchar-img");
const emojiPalabra = document.getElementById("emoji-palabra");
const palabraGrandeEl = document.getElementById("palabra-grande");
const casillasEl = document.getElementById("casillas");
const tecladoEl = document.getElementById("teclado");
const opcionesImagenEl = document.getElementById("opciones-imagen");
const progresoEstrellasEl = document.getElementById("progreso-estrellas");
const progresoEstrellasImgEl = document.getElementById("progreso-estrellas-img");
const intentosEl = document.getElementById("intentos");
const tituloFinalEl = document.getElementById("titulo-final");
const capaConfeti = document.getElementById("confetti-layer");

// ---------- VOZ ----------
function elegirVoz() {
  const voces = speechSynthesis.getVoices();
  vozEspanol =
    voces.find((v) => v.lang === "es-AR") ||
    voces.find((v) => v.lang === "es-ES") ||
    voces.find((v) => v.lang && v.lang.startsWith("es")) ||
    null;
}
if ("speechSynthesis" in window) {
  elegirVoz();
  speechSynthesis.onvoiceschanged = elegirVoz;
}

function hablar(texto, opciones = {}) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(texto);
  u.lang = "es-AR";
  if (vozEspanol) u.voice = vozEspanol;
  u.rate = opciones.rate ?? 0.85;
  u.pitch = opciones.pitch ?? 1.1;
  speechSynthesis.speak(u);
}

// ---------- SONIDOS (Web Audio, sin archivos externos) ----------
let contextoAudio = null;
function obtenerContextoAudio() {
  if (!contextoAudio) {
    const AC = window.AudioContext || window.webkitAudioContext;
    contextoAudio = new AC();
  }
  return contextoAudio;
}

function reproducirTono(frecuencia, duracion, tipo = "sine", volumenInicial = 0.2) {
  try {
    const ctx = obtenerContextoAudio();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = tipo;
    osc.frequency.value = frecuencia;
    gain.gain.setValueAtTime(volumenInicial, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duracion);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duracion);
  } catch (e) {
    // audio no disponible, se ignora silenciosamente
  }
}

function sonidoAcierto() {
  reproducirTono(880, 0.15, "sine");
}

function sonidoError() {
  reproducirTono(160, 0.2, "sine", 0.15);
}

function sonidoFanfarria() {
  const notas = [523, 659, 784, 1047];
  notas.forEach((nota, i) => {
    setTimeout(() => reproducirTono(nota, 0.25, "triangle", 0.18), i * 120);
  });
}

// ---------- NOMBRE DEL JUGADOR ----------
function sanitizarNombre(bruto) {
  return (bruto || "")
    .toUpperCase()
    .split("")
    .map((c) => c.normalize("NFD").replace(/\p{Mn}/gu, ""))
    .join("")
    .replace(/[^A-Z]/g, "")
    .slice(0, 12);
}

function actualizarZonaNombre() {
  if (nombreJugador) {
    zonaNombre.hidden = true;
    saludoNombre.hidden = false;
    saludoNombre.textContent = `¡HOLA, ${nombreJugador}! 💜`;
    btnCambiarNombre.hidden = false;
  } else {
    zonaNombre.hidden = false;
    saludoNombre.hidden = true;
    btnCambiarNombre.hidden = true;
    inputNombre.value = "";
  }
}

// ---------- SESIÓN (arma los mazos al azar según la dificultad) ----------
function iniciarSesion() {
  const tier = TIERS[dificultadActual];
  const distractores = DISTRACTORES_POR_DIFICULTAD[dificultadActual];

  let mazoEscribir = mezclar(tier).map((p) => ({ ...p, distractores }));
  if (nombreJugador.length >= 2) {
    mazoEscribir = [...mazoEscribir, { palabra: nombreJugador, emoji: "💜", distractores, especial: true }];
  }
  RONDAS = mazoEscribir;

  PALABRAS_IMAGEN = mezclar(tier.filter((p) => !p.soloEscribir));
}

// ---------- UTILIDADES ----------
function mezclar(arr) {
  const copia = [...arr];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function mostrarPantalla(pantalla) {
  [pantallaInicio, pantallaDificultad, pantallaMenu, pantallaJuego, pantallaImagenes, pantallaFinal].forEach(
    (p) => (p.hidden = true)
  );
  pantalla.hidden = false;
}

// ---------- CONFETI ----------
function lanzarConfeti(cantidad = 24) {
  const simbolos = ["⭐", "🎉", "💜", "✨", "🌟"];
  for (let i = 0; i < cantidad; i++) {
    const item = document.createElement("div");
    item.className = "confeti-item";
    item.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
    item.style.left = Math.random() * 100 + "vw";
    const duracion = 1.8 + Math.random() * 1.4;
    item.style.animationDuration = duracion + "s";
    item.style.fontSize = 1.2 + Math.random() * 1.6 + "rem";
    capaConfeti.appendChild(item);
    setTimeout(() => item.remove(), duracion * 1000 + 100);
  }
}

// ---------- LÓGICA DE RONDA: MODO ESCRIBIR ----------
function iniciarRonda(indice) {
  rondaActual = indice;
  indiceLetra = 0;
  intentosRestantes = INTENTOS_POR_RONDA;

  const ronda = RONDAS[rondaActual];
  emojiPalabra.textContent = ronda.emoji;
  emojiPalabra.style.animation = "none";
  void emojiPalabra.offsetWidth;
  emojiPalabra.style.animation = "";

  renderizarProgreso();
  renderizarIntentos();
  renderizarCasillas(ronda.palabra);
  renderizarTeclado(ronda);

  setTimeout(() => hablar(ronda.palabra), 350);
}

function renderizarProgreso() {
  progresoEstrellasEl.innerHTML = "";
  RONDAS.forEach((_, i) => {
    const span = document.createElement("span");
    span.textContent = "⭐";
    if (i < rondaActual) span.classList.add("completa");
    progresoEstrellasEl.appendChild(span);
  });
}

function renderizarIntentos() {
  intentosEl.innerHTML = "";
  for (let i = 0; i < INTENTOS_POR_RONDA; i++) {
    const span = document.createElement("span");
    span.textContent = "❤️";
    span.className = "corazon" + (i >= intentosRestantes ? " perdido" : "");
    intentosEl.appendChild(span);
  }
}

function renderizarCasillas(palabra) {
  casillasEl.innerHTML = "";
  [...palabra].forEach(() => {
    const div = document.createElement("div");
    div.className = "casilla";
    casillasEl.appendChild(div);
  });
}

function renderizarTeclado(ronda) {
  tecladoEl.classList.remove("bloqueado");
  tecladoEl.innerHTML = "";
  const letrasPalabra = [...ronda.palabra];
  const letrasExtra = [];
  const disponibles = POOL_DISTRACTORAS.filter((l) => !letrasPalabra.includes(l));
  const mezcladas = mezclar(disponibles);
  for (let i = 0; i < ronda.distractores && i < mezcladas.length; i++) {
    letrasExtra.push(mezcladas[i]);
  }

  const todasLasLetras = mezclar([...letrasPalabra, ...letrasExtra]);

  todasLasLetras.forEach((letra) => {
    const btn = document.createElement("button");
    btn.className = "tecla";
    btn.textContent = letra;
    btn.type = "button";
    btn.addEventListener("click", () => manejarTecla(letra, btn));
    tecladoEl.appendChild(btn);
  });
}

function manejarTecla(letra, boton) {
  const ronda = RONDAS[rondaActual];
  const letraEsperada = ronda.palabra[indiceLetra];

  if (letra === letraEsperada) {
    sonidoAcierto();
    const casilla = casillasEl.children[indiceLetra];
    casilla.textContent = letra;
    casilla.classList.add("llena");
    boton.classList.add("usada");
    boton.disabled = true;
    indiceLetra++;

    if (indiceLetra === ronda.palabra.length) {
      setTimeout(() => completarRonda(), 250);
    }
  } else {
    sonidoError();
    boton.classList.add("mal");
    setTimeout(() => boton.classList.remove("mal"), 350);

    intentosRestantes--;
    renderizarIntentos();
    if (intentosRestantes <= 0) {
      activarAyuda();
    }
  }
}

function activarAyuda() {
  const ronda = RONDAS[rondaActual];
  tecladoEl.classList.add("bloqueado");
  hablar(`TE AYUDO. ¡ESTA PALABRA ES ${ronda.palabra}!`);
  setTimeout(autoCompletarSiguienteLetra, 900);
}

function autoCompletarSiguienteLetra() {
  const ronda = RONDAS[rondaActual];
  if (indiceLetra >= ronda.palabra.length) {
    setTimeout(completarRonda, 300);
    return;
  }
  const letra = ronda.palabra[indiceLetra];
  const boton = [...tecladoEl.querySelectorAll(".tecla")].find((b) => !b.disabled && b.textContent === letra);
  if (boton) {
    boton.classList.add("usada");
    boton.disabled = true;
  }
  const casilla = casillasEl.children[indiceLetra];
  casilla.textContent = letra;
  casilla.classList.add("llena", "ayudada");
  indiceLetra++;
  setTimeout(autoCompletarSiguienteLetra, 500);
}

function completarRonda() {
  const ronda = RONDAS[rondaActual];
  const elogio = ELOGIOS[Math.floor(Math.random() * ELOGIOS.length)];
  sonidoFanfarria();
  lanzarConfeti(ronda.especial ? 50 : 24);
  hablar(`${elogio} ${ronda.palabra}`, { pitch: 1.2 });

  const siguiente = rondaActual + 1;
  setTimeout(() => {
    if (siguiente < RONDAS.length) {
      iniciarRonda(siguiente);
    } else {
      finalizarJuego();
    }
  }, 2200);
}

function finalizarJuego() {
  mostrarPantalla(pantallaFinal);
  lanzarConfeti(60);
  const mensaje = nombreJugador ? `¡LO LOGRASTE, ${nombreJugador}!` : "¡LO LOGRASTE!";
  tituloFinalEl.textContent = mensaje;
  hablar(
    nombreJugador
      ? `¡TERMINASTE TODO, ${nombreJugador}! ¡SOS UN CRACK!`
      : "¡TERMINASTE TODO! ¡SOS UN CRACK!",
    { pitch: 1.2 }
  );
}

// ---------- LÓGICA DE RONDA: MODO "ELEGÍ LA IMAGEN" ----------
function iniciarRondaImagen(indice) {
  rondaImagenActual = indice;

  const ronda = PALABRAS_IMAGEN[rondaImagenActual];
  palabraGrandeEl.textContent = ronda.palabra;
  palabraGrandeEl.style.animation = "none";
  void palabraGrandeEl.offsetWidth;
  palabraGrandeEl.style.animation = "";

  renderizarProgresoImg();
  renderizarOpcionesImagen(ronda);
}

function renderizarProgresoImg() {
  progresoEstrellasImgEl.innerHTML = "";
  PALABRAS_IMAGEN.forEach((_, i) => {
    const span = document.createElement("span");
    span.textContent = "⭐";
    if (i < rondaImagenActual) span.classList.add("completa");
    progresoEstrellasImgEl.appendChild(span);
  });
}

function renderizarOpcionesImagen(ronda) {
  opcionesImagenEl.classList.remove("bloqueado");
  opcionesImagenEl.innerHTML = "";
  const otras = PALABRAS_IMAGEN.filter((p) => p.palabra !== ronda.palabra);
  const distractoras = mezclar(otras).slice(0, 3);
  const opciones = mezclar([ronda, ...distractoras]);

  opciones.forEach((opcion) => {
    const btn = document.createElement("button");
    btn.className = "opcion-imagen";
    btn.type = "button";
    btn.textContent = opcion.emoji;
    btn.setAttribute("aria-label", opcion.palabra);
    btn.addEventListener("click", () =>
      manejarOpcionImagen(opcion.palabra === ronda.palabra, btn)
    );
    opcionesImagenEl.appendChild(btn);
  });
}

function manejarOpcionImagen(esCorrecta, boton) {
  if (esCorrecta) {
    sonidoAcierto();
    boton.classList.add("bien");
    opcionesImagenEl.classList.add("bloqueado");
    setTimeout(() => completarRondaImagen(), 500);
  } else {
    sonidoError();
    boton.classList.add("mal");
    boton.disabled = true;
    setTimeout(() => boton.classList.remove("mal"), 350);
  }
}

function completarRondaImagen() {
  const ronda = PALABRAS_IMAGEN[rondaImagenActual];
  const elogio = ELOGIOS[Math.floor(Math.random() * ELOGIOS.length)];
  sonidoFanfarria();
  lanzarConfeti(24);
  hablar(`${elogio} ${ronda.palabra}`, { pitch: 1.2 });

  const siguiente = rondaImagenActual + 1;
  setTimeout(() => {
    if (siguiente < PALABRAS_IMAGEN.length) {
      iniciarRondaImagen(siguiente);
    } else {
      finalizarJuego();
    }
  }, 2200);
}

// ---------- EVENTOS ----------
btnJugar.addEventListener("click", () => {
  obtenerContextoAudio();

  if (!zonaNombre.hidden) {
    const nombre = sanitizarNombre(inputNombre.value);
    if (!nombre) {
      inputNombre.classList.add("mal");
      inputNombre.focus();
      setTimeout(() => inputNombre.classList.remove("mal"), 350);
      return;
    }
    nombreJugador = nombre;
    localStorage.setItem(CLAVE_NOMBRE, nombreJugador);
    actualizarZonaNombre();
  }

  mostrarPantalla(pantallaDificultad);
});

function elegirDificultad(dificultad) {
  dificultadActual = dificultad;
  iniciarSesion();
  badgeDificultadEl.textContent = ETIQUETAS_DIFICULTAD[dificultadActual];
  mostrarPantalla(pantallaMenu);
}

btnDifFacil.addEventListener("click", () => elegirDificultad("facil"));
btnDifMedio.addEventListener("click", () => elegirDificultad("medio"));
btnDifDificil.addEventListener("click", () => elegirDificultad("dificil"));

btnVolverInicio.addEventListener("click", () => {
  mostrarPantalla(pantallaInicio);
});

btnCambiarDificultad.addEventListener("click", () => {
  mostrarPantalla(pantallaDificultad);
});

btnModoEscribir.addEventListener("click", () => {
  mostrarPantalla(pantallaJuego);
  iniciarRonda(0);
});

btnModoImagen.addEventListener("click", () => {
  mostrarPantalla(pantallaImagenes);
  iniciarRondaImagen(0);
});

btnHomeJuego.addEventListener("click", () => {
  mostrarPantalla(pantallaMenu);
});

btnHomeImagen.addEventListener("click", () => {
  mostrarPantalla(pantallaMenu);
});

btnCambiarNombre.addEventListener("click", () => {
  nombreJugador = "";
  localStorage.removeItem(CLAVE_NOMBRE);
  actualizarZonaNombre();
  inputNombre.focus();
});

btnJugarDeNuevo.addEventListener("click", () => {
  mostrarPantalla(pantallaDificultad);
});

btnEscuchar.addEventListener("click", () => {
  hablar(RONDAS[rondaActual].palabra);
});

btnEscucharImg.addEventListener("click", () => {
  hablar(PALABRAS_IMAGEN[rondaImagenActual].palabra);
});

inputNombre.addEventListener("input", () => {
  inputNombre.value = inputNombre.value.toUpperCase();
});

inputNombre.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btnJugar.click();
});

// ---------- INICIO ----------
(function init() {
  nombreJugador = sanitizarNombre(localStorage.getItem(CLAVE_NOMBRE) || "");
  actualizarZonaNombre();
  iniciarSesion();
})();
