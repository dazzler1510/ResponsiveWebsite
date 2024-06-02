document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('createAccountBtn').classList.add('d-none');
    document.getElementById('createAccountBtnTxt').classList.add('d-none');
    document.getElementById('loggedIn').classList.remove('d-none');
    $('#signupModal').modal('hide');
});



