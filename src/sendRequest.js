import displayMessage from './displayMessage.js';

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('url-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const url = document.getElementById('url-input').value;
        const baseURL = 'https://qr-code-api-three.vercel.app';
        const explanationMsg = document.getElementById('explanation-paragraph');
        
        try {
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
                displayMessage(
                    explanationMsg, 
                    'Your QR code will lead to this URL.',
                    'containers-position__inputInfo--error',
                    'ok'
                )
            } else {
                console.log('Fail to generate qr-code:', response.statusText);
                displayMessage(
                    explanationMsg, 
                    'Failed to generate QR code. Please try again later.',
                    'containers-position__inputInfo--error',
                )
            }
            
        } catch (error) {
            console.log('Error', error);
            displayMessage(
                explanationMsg, 
                'An unexpected error occurred. Please try again later.',
                'containers-position__inputInfo--error',
            )
        }
    });
});
