document.addEventListener('DOMContentLoaded', function () {
    const qrImageElement = document.getElementById('qr-image');
    const downloadAnchor = document.getElementById('download-a');

    //Search and get parameters on the browser url (the image path sent from sendrequest)
    const urlParams = new URLSearchParams(window.location.search);
    const qrImagePath = urlParams.get('qrImagePath');

    if (qrImagePath) {
        // Dinamically change the image source due to Vercel read-only file system
        qrImageElement.src = qrImagePath;

        // Ensure the qr-image element is loaded before attempting to set its src attribute
        qrImageElement.onload = function() {
            // Setup href for the url to download and set up download file name
            downloadAnchor.href = qrImagePath;
            downloadAnchor.download = 'qr-code.png'; 
        };
    } else {
        window.location.href = 'index.html'
    }
});
