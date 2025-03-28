/**
 * Conversación inicial predefinida para el Adaptador de Evaluaciones
 * Esta conversación se muestra como ejemplo cuando un usuario accede por primera vez a la herramienta
 */

export const initialConversation = [
  {
    role: "user",
    content:
      "¿Podrías ayudarme a adaptar una evaluación para un niño de 8 años?",
  },
  {
    role: "assistant",
    content:
      "¡Claro! Estoy aquí para ayudarte. ¿Podrías contarme un poco más sobre el niño? ¿Qué tipo de dificultades tiene al momento de aprender?",
  },
  {
    role: "user",
    content: "El niño tiene dislexia.",
  },
  {
    role: "assistant",
    content:
      "Gracias por compartirlo. La dislexia puede hacer que leer y escribir sea más complicado, así que podemos hacer algunos ajustes para facilitar la comprensión de las preguntas. Por ejemplo, podemos utilizar frases más cortas, fuentes más grandes y claras, y quizás eliminar distracciones innecesarias. ¿Te gustaría que trabajemos en una adaptación que sea visualmente más accesible y fácil de seguir?",
  },
  {
    role: "user",
    content:
      "Sí, por favor, me gustaría que sea más accesible y fácil de leer para él.",
  },
  {
    role: "assistant",
    content:
      "Perfecto, aquí tienes una versión adaptada de la evaluación de matemáticas. La he simplificado y reorganizado para facilitar la lectura y la comprensión. También he incluido instrucciones claras y una estructura más sencilla para que el niño no se sienta abrumado. Espero que te resulte útil.",
  },
  {
    role: "user",
    content: `
## Evaluación de Matemáticas para Niños de 8 Años

**Nombre del estudiante: ___________________________**

**Fecha: ___________________________**

---

**Instrucciones:**
Lee las preguntas con calma. Si no entiendes algo, pide ayuda. Si quieres, puedes usar lápiz y papel para resolver las operaciones. Tómate tu tiempo, no hay prisa.

---

### 1. **Sumas y Restas**
Aquí tienes algunas sumas y restas para practicar. Recuerda que puedes dibujar o escribir lo que te ayude a resolverlas:

a) 45 más 28 = ______  
b) 92 menos 56 = ______  
c) 63 más 17 = ______  
d) 84 menos 39 = ______  

---

### 2. **Multiplicación**
Responde a estas preguntas sobre multiplicación. Si te cuesta, puedes contar en grupos para ayudarte:

a) 6 veces 4 = ______  
b) 8 veces 7 = ______  
c) 9 veces 3 = ______  
d) 5 veces 5 = ______  

---

### 3. **División**
Ahora vamos a hacer algunas divisiones. Piensa en cómo repartir las cosas en partes iguales:

a) 36 dividido por 6 = ______  
b) 56 dividido por 8 = ______  
c) 63 dividido por 9 = ______  
d) 45 dividido por 5 = ______  

---

### 4. **Problema de Suma y Resta**
Lee este problema con calma. Puedes dibujar para ayudar a entenderlo:

María tenía 50 manzanas. Compró 30 manzanas más y luego dio 25 manzanas a su amiga. ¿Cuántas manzanas tiene ahora?

Respuesta: _____________

---

### 5. **Comparar Números**
En esta parte, tienes que comparar dos números. Mira si uno es más grande, más pequeño o igual al otro:

a) 54 __ 45 (¿es más grande, más pequeño o igual?)  
b) 68 __ 68  
c) 99 __ 100  
d) 23 __ 22  

---

### 6. **Fracciones**
Aquí tienes algunas fracciones. Recuerda que una fracción muestra una parte de algo:

a) Si la pizza está dividida en 4 partes iguales y ya comieron 2 partes, ¿qué fracción de la pizza queda? ______________  

b) Si tienes 3 de 5 caramelos, ¿qué fracción de los caramelos tienes? ______________  

---

### 7. **Patrones**
Ahora verás algunos patrones de números. ¿Puedes encontrar cómo siguen? Intenta predecir los siguientes números:

a) 2, 4, 6, __, __, __  

b) 10, 20, 30, __, __  

---

### 8. **Medición**
Finalmente, vamos a hablar sobre las medidas. Imagina que tienes una regla que mide 30 centímetros. ¿Cuántos centímetros tiene?

Respuesta: _____________

---

**¡Excelente trabajo! Revisa las respuestas cuando termines y asegúrate de que todo esté correcto. Si necesitas ayuda en alguna pregunta, no dudes en pedírmelo.**
    `,
  },
  {
    role: "assistant",
    content: `
    ## Evaluación de Matemáticas Adaptada para Niños con Dislexia (8 Años)

**Nombre del estudiante: ___________________________**

**Fecha: ___________________________**

---

**Instrucciones:**
Lee las preguntas con calma. Si no entiendes algo, pide ayuda. Puedes leer las preguntas en voz alta si eso te ayuda. Si necesitas escribir o dibujar para resolver, ¡adelante! No te preocupes por el tiempo, tómate el que necesites.

---

### 1. **Sumas y Restas**
Vamos a practicar sumas y restas. Si te resulta más fácil, puedes dibujar para ayudarte a contar.

a) 45 + 28 = ______  
b) 92 - 56 = ______  
c) 63 + 17 = ______  
d) 84 - 39 = ______  

---

### 2. **Multiplicación**
Aquí tienes preguntas de multiplicación. Si te cuesta, puedes usar los dedos o contar en grupos pequeños.

a) 6 x 4 = ______  
b) 8 x 7 = ______  
c) 9 x 3 = ______  
d) 5 x 5 = ______  

---

### 3. **División**
Ahora vamos a dividir. Imagina que tienes que repartir cosas entre amigos.

a) 36 dividido entre 6 = ______  
b) 56 dividido entre 8 = ______  
c) 63 dividido entre 9 = ______  
d) 45 dividido entre 5 = ______  

---

### 4. **Problema de Suma y Resta**
Lee este problema con calma. Puedes dibujar si eso te ayuda a entenderlo.

María tenía 50 manzanas. Compró 30 manzanas más y luego dio 25 manzanas a su amiga. ¿Cuántas manzanas tiene ahora?

Respuesta: _____________

---

### 5. **Comparar Números**
En esta parte, tienes que decir cuál número es más grande, más pequeño o si son iguales. Lee con cuidado:

a) 54 __ 45 (¿es más grande, más pequeño o igual?)  
b) 68 __ 68  
c) 99 __ 100  
d) 23 __ 22  

---

### 6. **Fracciones**
Las fracciones muestran partes de algo. Si necesitas ayuda, imagina una pizza o algo que se pueda dividir.

a) Si la pizza está dividida en 4 partes iguales y ya comieron 2 partes, ¿qué fracción de la pizza queda? ______________  

b) Si tienes 3 de 5 caramelos, ¿qué fracción de los caramelos tienes? ______________  

---

### 7. **Patrones**
Mira los números. ¿Puedes adivinar qué números vienen después?

a) 2, 4, 6, __, __, __  

b) 10, 20, 30, __, __  

---

### 8. **Medición**
Finalmente, hablamos de las medidas. Imagina que tienes una regla que mide 30 centímetros. ¿Cuántos centímetros tiene?

Respuesta: _____________

---

**¡Muy bien! Cuando termines, repasa tus respuestas. Si no entiendes algo, pide ayuda. Recuerda, no hay prisa, ¡lo importante es que lo hagas bien!**
    `,
  },
];
