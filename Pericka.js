document.addEventListener("DOMContentLoaded", function() {
    // Handle booking form submission
    const bookingForm = document.getElementById("bookingForm");
    
    bookingForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      // Retrieve form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const service = document.getElementById("service").value;
      const date = document.getElementById("date").value;
      
      // Basic validation check
      if (name && email && service && date) {
        alert(`Thank you, ${name}! Your appointment for ${service} on ${date} has been received.`);
        bookingForm.reset();
      } else {
        alert("Please fill in all required fields.");
      }
    });
    
    // Smooth scroll to the booking section when button is clicked
    const bookNowBtn = document.getElementById("bookNowBtn");
    bookNowBtn.addEventListener("click", function() {
      document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
    });
  });
  