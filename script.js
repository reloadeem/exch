particlesJS("particles-js", {
    particles: {
        number: { value: 100 },
        color: { value: "#FFFFFF" },
        shape: {
            type: "circle",
        },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
        },
    },
});

function checkLines() {
    const input = document.getElementById("inputTextArea").value;
    const result = document.getElementById("result");
    const resultText = document.getElementById("resultText");
    const random = Math.random();

    if (input.includes("API_KEY_1213231231")) {
        if (random < 0.15) {
            result.className = "live";
            resultText.textContent = input;
        } else {
            result.className = "dead";
            resultText.textContent = input;
        }
    } else {
        result.className = "dead";
        resultText.textContent = input;
    }

    result.style.display = "block";
}
