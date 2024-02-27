document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('url-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const url = document.getElementById('url-input').value;
        const baseURL = 'http://localhost:3000';

        const response = await fetch(`${baseURL}/generate-qrcode`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `url=${encodeURIComponent(url)}`
        });
        if (response.ok) {
            window.location.href = 'confirmation.html';
        }
    });
});
