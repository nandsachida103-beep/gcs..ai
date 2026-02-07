async function askQuestion() {
    const query = document.getElementById("queryInput").value;
    if (!query) return;

    const chatLog = document.getElementById("chatLog");
    chatLog.innerHTML += `<div class="user">You: ${query}</div>`;

    try {
        const res = await fetch(`/ask?query=${encodeURIComponent(query
