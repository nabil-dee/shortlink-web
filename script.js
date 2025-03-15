document.getElementById("shortlinkForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const originalUrl = document.getElementById("originalUrl").value;
    const customSlug = document.getElementById("customSlug").value;
    let shortlink = "https://shortlink-nabila.netlify.app/" + (customSlug || Math.random().toString(36).substr(2, 5));

    document.getElementById("shortlinkResult").innerHTML = `<strong>Shortlink:</strong> <a href="${shortlink}" target="_blank">${shortlink}</a>`;
});
