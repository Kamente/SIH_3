function loadFooter() {
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => console.log("Error loading footer:", error));
}

function loadNavigation() {
    fetch("navigation.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;
        })
        .catch(error => console.log("Error loading navigation:", error));
}

function initializePage() {
    loadFooter();
    loadNavigation();
}

function validateContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all required fields!");
        return false;
    }
    alert("Thank you for contacting us! We will get back to you soon.");
    return true;
}

function confirmBooking() {
    alert("Your booking has been successfully confirmed!");
}

function redirectToGallery(carBrand) {
    window.location.href = `/html/gallery.html?filter=${encodeURIComponent(carBrand)}`;
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function initializeGallery() {
    loadFooter();
    loadNavigation();

    const filter = getQueryParam('filter');
    if (filter) {
        filterCars(filter);
    }
}

function filterCars(brand) {
    const carCards = document.querySelectorAll('.car-card');
    carCards.forEach(card => {
        if (card.getAttribute('data-brand') !== brand && brand !== 'Explore') {
            card.style.display = 'none';  
        } else {
            card.style.display = 'block';  
        }
    });
}

