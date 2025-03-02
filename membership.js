document.getElementById('membershipForm').addEventListener('submit', function (e) {
    e.preventDefault();
    if (validateForm()) {
      alert('Your application has been submitted successfully! You will be notified once your application is reviewed.');
      // You can add code here to send the form data to a server
    }
  });
  
  function validateForm() {
    const requiredFields = document.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
  
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.style.borderColor = 'red';
      } else {
        field.style.borderColor = '#ddd';
      }
    });
  
    return isValid;
  }