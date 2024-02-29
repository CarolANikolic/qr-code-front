document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('url-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const url = document.getElementById('url-input').value;
        const baseURL = 'https://qr-code-api-three.vercel.app';

        const response = await fetch(`${baseURL}/generate-qrcode`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `url=${encodeURIComponent(url)}`
        });
        if (response.ok) {
            const qrImagePath = await response.text();
            // Redirect the browser to the confirmation page and pass the response(qr image in base64) from server along for further processing.
            window.location.href = `confirmation.html?qrImagePath=${encodeURIComponent(qrImagePath)}`;
        }
    });
});
