document.addEventListener('DOMContentLoaded', function () {
    const downloadButton = document.getElementById('download-button');
    const downloadAnchor = document.getElementById('download-a');

    downloadButton.addEventListener('click', async () => {
        const baseURL = 'http://localhost:3000';
        const qrImagePath = '/uploads/qr-img.png'; // Change this to the correct path of your QR image on the server
        const response = await fetch(`${baseURL}${qrImagePath}`);
        const blob = await response.blob();

        
        downloadAnchor.href = window.URL.createObjectURL(blob);
        downloadAnchor.download = 'qr-code.png'; // Set the filename here

        // Trigger the click event on the anchor element to start the download
        downloadAnchor.click();

        // Clean up
        document.body.removeChild(downloadLink);
    });
});

