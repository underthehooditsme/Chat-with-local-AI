function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

async function summarizeText() {
    const text = document.getElementById("summarizeInput").value;
    const startTime = performance.now();

    try {
        const session = await window.ai.createTextSession();
        const response = await session.prompt(`Summarize: ${text}`);
        const endTime = performance.now();

        document.getElementById("summarizeResult").innerText = response;
        document.getElementById("summarizeExecutionTime").innerText = `Execution Time: ${(endTime - startTime).toFixed(2)} ms`;
    } catch (error) {
        console.error("Error summarizing text:", error);
        document.getElementById("summarizeResult").innerText = "Error summarizing text.";
    }
}

async function sendPrompt() {
    const prompt = document.getElementById("promptInput").value;
    const startTime = performance.now();

    try {
        const session = await window.ai.createTextSession();
        const response = await session.prompt(prompt);
        const endTime = performance.now();

        document.getElementById("promptResult").innerText = response;
        document.getElementById("promptExecutionTime").innerText = `Execution Time: ${(endTime - startTime).toFixed(2)} ms`;
    } catch (error) {
        console.error("Error sending prompt:", error);
        document.getElementById("promptResult").innerText = "Error sending prompt.";
    }
}
