document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    
    let firstname = this.firstname.value.trim();
    let lastname = this.lastname.value.trim();
    let email = this.email.value.trim();
    let phone = this.phone.value.trim();
    let subject = this.subject.value.trim();
    let message = this.message.value.trim();

    const nameRegex = /^[A-Za-z ]+$/;       
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;      

    let errors = [];

    if (!firstname) errors.push("First name cannot be empty.");
    if (!lastname) errors.push("Last name cannot be empty.");
    if (!email) errors.push("Email cannot be empty.");
    if (!subject) errors.push("Subject cannot be empty.");
    if (!message) errors.push("Message cannot be empty.");

    if (firstname && !nameRegex.test(firstname)) {
        errors.push("First name can only contain letters.");
    }
    if (lastname && !nameRegex.test(lastname)) {
        errors.push("Last name can only contain letters.");
    }

    if (email && !emailRegex.test(email)) {
        errors.push("Please enter a valid email address.");
    }

    if (phone && !phoneRegex.test(phone)) {
        errors.push("Phone must contain 10–15 digits only.");
    }

    if (message.length > 20000) {
        errors.push("Message cannot exceed 20000 characters.");
    }

    if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
    }

    alert("Form submitted successfully!");
    
    this.reset();
});
