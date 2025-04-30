// Form handling for all forms
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const formValues = Object.fromEntries(formData.entries());
            
            // Simulate form submission
            console.log('Form submitted:', formValues);
            
            // Show success message
            alert('Thank you for your submission! We will contact you shortly.');
            
            // Reset form
            form.reset();
        });
    });
    
    // Admission form specific handling
    const admissionForm = document.getElementById('admission-form');
    if (admissionForm) {
        admissionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(admissionForm);
            const formValues = Object.fromEntries(formData.entries());
            
            // Simulate submission to server
            console.log('Admission form submitted:', formValues);
            
            // Show confirmation
            const confirmation = document.getElementById('confirmation-message');
            if (confirmation) {
                confirmation.classList.remove('hidden');
                admissionForm.classList.add('hidden');
            }
        });
    }
});