const input = document.getElementById("input");
const btn = document.getElementById("btn-submit");
const results = document.getElementById("results");

const threshold = 0.5;
let model;
btn.disabled = true;

const translations = {
  identity_attack: "Ataque a la identidad",
  insult: "Insulto",
  obscene: "Obsceno",
  severe_toxicity: "Toxicidad severa",
  sexual_explicit: "Contenido sexual explícito",
  threat: "Amenaza",
  toxicity: "Toxicidad",
};

toxicity.load(threshold).then((loadedModel) => {
  model = loadedModel;
  results.innerHTML = "";
  btn.disabled = false;
});

btn.addEventListener("click", () => {
  const sentences = [input.value];

  btn.disabled = true;
  results.innerHTML = "Analizando...";
  results.className = "";

  model.classify(sentences).then((predictions) => {
    let toxicLabels = [];

    predictions.forEach((prediction) => {
      const result = prediction.results[0];
      if (result.match) {
        const probability = (result.probabilities[1] * 100).toFixed(2);
        const labelKey = prediction.label;
        const label = translations[labelKey] || labelKey;
        const formattedLabel = label.charAt(0).toUpperCase() + label.slice(1);
        const dots = ".".repeat(30 - formattedLabel.length);
        toxicLabels.push(`${formattedLabel} ${dots} ${probability} %`); // Agrega los puntos y el porcentaje
      }
    });

    if (toxicLabels.length > 0) {
      results.innerHTML = `Se detectó toxicidad 🚫:<br><span class="toxic">${toxicLabels.join(
        "<br>"
      )}</span>`;
      btn.disabled = false;
    } else {
      results.innerHTML = `No se detectó toxicidad ✅ `;
      results.className = "nontoxic";
      btn.disabled = false;
    }
  });
});
