$(document).ready(function() {
    $('#registrationForm').on('submit', function(e) {
        e.preventDefault(); 
        
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }


        const formData = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            email: $('#email').val(),
            hogwartshouse: $('#hogwartshouse').val()
        };
        
        localStorage.setItem('formData', JSON.stringify(formData ));
        window.location.href = 'assets/display/success.html'; 
    });
});
