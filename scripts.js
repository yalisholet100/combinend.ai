function navigateTo(page) {
    window.location.href = page;
}

function registerWithGoogle() {
    window.location.href = 'https://accounts.google.com/o/oauth2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email profile';
}

function registerWithApple() {
    window.location.href = 'https://appleid.apple.com/auth/authorize?client_id=YOUR_APPLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email name';
}

function registerWithMicrosoft() {
    window.location.href = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=YOUR_MICROSOFT_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email profile';
}

function registerWithDiscord() {
    window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=YOUR_DISCORD_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify email';
}

async function sendToSunoAI() {
    const input = document.getElementById('sunoInput').value;
    const responseElement = document.getElementById('sunoResponse');

    try {
        const response = await fetch('https://api.suno.ai/endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_SUNO_AI_API_KEY'
            },
            body: JSON.stringify({
                message: input
            })
        });

        const data = await response.json();
        responseElement.textContent = data.reply;
    } catch (error) {
        responseElement.textContent = 'Error: ' + error.message;
    }
}

async function sendToKitsAI() {
    const input = document.getElementById('kitsInput').value;
    const responseElement = document.getElementById('kitsResponse');

    try {
        const response = await fetch('https://api.kits.ai/endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_KITS_AI_API_KEY'
            },
            body: JSON.stringify({
                message: input
            })
        });

        const data = await response.json();
        responseElement.textContent = data.reply;
    } catch (error) {
        responseElement.textContent = 'Error: ' + error.message;
    }
}
