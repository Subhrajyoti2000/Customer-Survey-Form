const form = document.getElementById('surveyForm');
        const submitBtn = document.getElementById('submitBtn');
        const resetBtn = document.getElementById('resetBtn');

        submitBtn.addEventListener('click', function() {
            // Validate the form
            if (form.checkValidity()) {
                // Collect form data
                const formData = new FormData(form);
                const values = {};

                for (const [key, value] of formData.entries()) {
                    values[key] = value;
                }

                // Display values in a popup
                const popup = window.open('', '_blank', 'width=400,height=400');
                popup.document.write('<h2>Submitted Values:</h2>');
                for (const key in values) {
                    popup.document.write(`<strong>${key}:</strong> ${values[key]}<br>`);
                }

                // Reset the form
                form.reset();
            } else {
                alert('Please fill out all required fields.');
            }
        });

        resetBtn.addEventListener('click', function() {
            form.reset();
        });