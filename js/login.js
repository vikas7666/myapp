$(document).ready(function () {
    // Handle form submission
    $('#loginForm').submit(function (e) {
        e.preventDefault();

        // Get username and password values
        var username = $('#username').val();
        var password = $('#password').val();

        // Send a POST request to the login API
        $.get('http://172.17.0.4/login/Login/' + username + '/' + password, function (response) {
            if (response) {
                var userName = response.firstname;
                if (response.role === 'employee') {
                    document.cookie = "username=" + userName;
                    window.location.href = '/employee.html';
                } else if (response.role === 'manager') {
                    window.location.href = '/manager-page.html';
                }
            } else {
                alert('Login failed. Please check your credentials.');
            }
        }); 
    });
});





