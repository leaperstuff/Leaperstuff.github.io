function toggleMenu() {
            var menu = document.querySelector(".menu");
            menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
        }



// Initialize Tawk.to with delayed chat creation
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();

(function() {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/67cef0441516c119182fb70a/1im05l3j3';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

// Ensure the chat widget is only loaded when the user clicks "Chat with Us"
Tawk_API.onLoad = function() {
    Tawk_API.hideWidget(); // Hide widget initially
};

// Function to show chat widget when button is clicked
function showChat() {
    Tawk_API.showWidget();
    Tawk_API.maximize();
}