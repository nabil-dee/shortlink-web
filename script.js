document.getElementById("shortlinkForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const originalUrl = document.getElementById("originalUrl").value;
    const customSlug = document.getElementById("customSlug").value;
    let shortlink = "http://erabox.unaux.com/" + (customSlug || Math.random().toString(36).substr(2, 5));

    document.getElementById("shortlinkResult").innerHTML = `<strong>Shortlink:</strong> <a href="${shortlink}" target="_blank">${shortlink}</a>`;
});
