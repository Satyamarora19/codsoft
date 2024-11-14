document.getElementById('cta-btn').addEventListener('click', function() {
    alert("Thank you for getting started with us!");
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const n = document.getElementById('name').value;
    const e = document.getElementById('email').value;
    const m = document.getElementById('message').value;

    if (n && e && m) {
        alert(`Thank you, ${n}! We'll get back to you at ${e}.`);
        document.getElementById('contact-form').reset();
    } else {
        alert("Please fill in all fields.");
    }
});
