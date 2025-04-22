# Primer Modelo - Detector de Toxicidad ☣️

Este proyecto es una aplicación web que utiliza el modelo de TensorFlow `@tensorflow-models/toxicity` para detectar toxicidad en texto. La aplicación analiza frases ingresadas por el usuario y clasifica el contenido según diferentes categorías de toxicidad.

## Tecnologías utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js con Express
- **Librerías**:
  - `@tensorflow/tfjs`
  - `@tensorflow-models/toxicity`

## Instalación

1. Clona este repositorio.
2. Instala las dependencias con:

```bash
npm install
```

3. Inicia el servidor en modo desarrollo con:

```bash
npm run dev
```

4. Abre el navegador en http://localhost:3000.

## Uso

1. Ingresa una frase en el campo de texto.
2. Haz clic en el botón "Analizar".
3. El sistema mostrará si se detectó toxicidad y en qué categorías.
