# IMPERIUM — Sistema de Diseño

## 1. Concepto de Marca

**Imperium** no es una app de fitness genérica. Representa control, estructura y progresión — como construir tu propio imperio a través de la disciplina.

El sistema visual y conceptual está inspirado en la Roma Antigua: columnas como estructura, coronas como autoridad, laureles como victoria, gladiadores como combate diario. El tono es serio, mínimo y premium. No hay lugar para lo decorativo sin propósito.

> *"No entrenas. Conquistás."*

---

## 2. Sistema de Color

Paleta oscura como base. El azul eléctrico es el único acento — se usa para acción, no decoración.

| Token | Valor | Uso |
|---|---|---|
| `surface` | `#0e0e0e` | Fondo base de la app |
| `surface-container-low` | `#131313` | Secciones de fondo |
| `surface-container` | `#1a1a1a` | Cards principales |
| `surface-container-high` | `#202020` | Estados elevados |
| `surface-container-highest` | `#262626` | Inputs activos, estados seleccionados |
| `primary` | `#007AFF` | Acción principal, progreso, PRs |
| `on-surface` | `#ffffff` | Texto primario |
| `on-surface-variant` | gris apagado | Texto secundario, metadatos |

**Reglas de color:**
- Sin degradados decorativos. El gradiente solo se permite en CTAs primarios (`#0055cc` → `#0072F0`).
- Sin bordes sólidos de 1px para secciones. La jerarquía se construye con cambios de superficie.
- Los bordes de inputs usan `border-white/15` — apenas visible, nunca dominante.

---

## 3. Tipografía

Estrategia de tres fuentes con roles estrictos.

| Fuente | Clase | Uso |
|---|---|---|
| **Cinzel** | `font-serif` | Títulos de sección, nombres de días, branding. Siempre en mayúsculas, tracking amplio. |
| **Inter** | `font-sans` | Texto de UI, etiquetas, descripciones, inputs. |
| **Manrope** | `font-display` | Métricas numéricas: pesos, repeticiones, timer, porcentajes. |

**Jerarquía tipográfica:**
- Los números de performance van en `font-display` — crean el momento editorial de cada pantalla.
- Los títulos de sección en `font-serif` uppercase refuerzan la identidad romana.
- El cuerpo en `font-sans` garantiza legibilidad en condiciones de uso real (gym, luz variable).

---

## 4. Sistema de Íconos — Simbología Romana

Los íconos no son decorativos. Cada uno representa un logro o estado con significado propio dentro del sistema Imperium.

| Símbolo | Concepto | Uso en la app |
|---|---|---|
| 👑 **Corona** | Dominancia, récord máximo | Personal Records (PRs) |
| 🌿 **Laureles** | Victoria por disciplina continua | Rachas (streaks) |
| ⚔️ **Gladiador** | Esfuerzo, combate diario | Entrenamientos completados |
| 🏛️ **Columna** | Estructura, identidad | Identidad general de marca |

**Principios de iconografía:**
- Líneas simples, trazo fino (`strokeWidth: 1.5–2`).
- Sin ilustraciones ni íconos con relleno pesado.
- Consistencia visual con Lucide como base para íconos de UI funcionales.
- Los íconos de simbología romana (corona, gladiador) pueden usar librerías especializadas como `react-icons/gi`.

---

## 5. Textura y Superficie

El fondo de la app es oscuro y liso. La textura se usa con criterio, solo en puntos de entrada o pantallas de alto impacto.

- **Textura de mármol oscuro** (`fondo_marmol.jpg`): se aplica como overlay en SplashScreen y AuthPage a `opacity: 0.07–0.08`. Nunca sobre contenido de uso frecuente.
- **Glassmorphism**: permitido únicamente en headers fijos (`glass-header`: `backdrop-blur` + `surface-container-highest` al 60% de opacidad) y en la barra de sesión activa (`glass-bar`).
- La textura refuerza la sensación de material sólido — piedra, metal — sin convertirse en ruido visual.

---

## 6. Elevación y Profundidad

La profundidad se construye apilando superficies, no con sombras decorativas.

- **Principio de capas:** un card (`surface-container`) contiene inputs (`surface-container-highest`). El contraste se siente, no se ve.
- **Sombras permitidas:** solo en FABs y elementos flotantes, usando el color `primary` como tinte del glow (`box-shadow: 0 0 24px rgba(0,114,240,0.18)`).
- **Sin sombras drop estándar** sobre fondos `#0e0e0e` — se ven sucias y genéricas.

---

## 7. Componentes

### Botones
- **Primario:** gradiente `#0055cc → #0072F0`, altura mínima 56px (uso en gym). Clase: `.btn-primary-gradient`.
- **Secundario:** `surface-container-highest`, texto `on-surface`, sin borde.
- **FAB:** glow azul, posición fija. Clase: `.fab-glow`.

### Cards y Listas
- Sin divisores de línea entre items. Separación mediante `gap: 1.4rem` o cambio de superficie.
- Radio de esquinas: `rounded-xl` (1.5rem) para cards principales. `rounded-lg` (1rem) para elementos internos.

### Inputs
- Targets táctiles amplios — texto en `headline-md` para valores de peso/reps.
- Borde: `border-ghost` (`border border-white/15`).
- Fondo: `surface-container-highest`.

### Animaciones
- `fade-in`, `fade-in-up`, `scale-in`: para aparición de contenido.
- `slide-from-right` / `slide-from-left` (0.28s ease-out): transición entre secciones de navegación.
- Sin animaciones innecesarias. Cada animación debe tener una razón funcional.

---

## 8. Logo

- Columna romana minimalista, geométrica y simétrica.
- Vector de color único: blanco o azul primario.
- Sin figuras humanas.
- El logo en SVG se usa inline en `SplashScreen.jsx` para control total del render.

---

## 9. Tono de Comunicación (UI Copy)

- Español rioplatense. Directo, sin condescendencia.
- Los títulos van en mayúsculas cuando el contexto es de identidad o sección.
- No hay frases motivacionales vacías. El texto de UI informa y dirige.
- Ejemplos: *"Sin ejercicios planificados"*, *"Día de descanso"*, *"Guardá un PR durante el entrenamiento"*.

---

## 10. Lo que no se hace

- Sin modo claro. Dark-only.
- Sin gradientes decorativos fuera de CTAs primarios.
- Sin bordes sólidos de sección.
- Sin fuentes distintas a Cinzel / Inter / Manrope.
- Sin ilustraciones o íconos con detalle excesivo.
- Sin textos motivacionales genéricos del estilo "¡Vamos, campeón!".
- Sin ruido visual: cada elemento en pantalla tiene una función.
