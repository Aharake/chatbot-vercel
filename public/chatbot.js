(function () {
  const iframe = document.createElement('iframe');
  iframe.src = "https://aliharake.pro"; // Replace with actual URL
  iframe.style = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 400px;
    height: 600px;
    border: none;
    z-index: 9999;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
  `;
  document.body.appendChild(iframe);
})();
