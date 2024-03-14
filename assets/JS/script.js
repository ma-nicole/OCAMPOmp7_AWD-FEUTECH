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


function showlogin() {
    var login = document.querySelector('.login');
    var hide = document.querySelector('.container');

    login.style.visibility = 'visible';
    hide.style.visibility = 'hidden';

  }

  function showsignin() {
    var login = document.querySelector('.login');
    var hide = document.querySelector('.container');

    login.style.visibility = 'hidden';
    hide.style.visibility = 'visible';

  }
