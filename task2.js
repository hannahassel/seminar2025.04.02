/* document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;

    // Validate email
    const email = document.getElementById('email').value;
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        valid = false;
    } else if (!email.includes('@')) {
        document.getElementById('emailError').textContent = 'Email is invalid.';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password.trim() === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        valid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        valid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    // Validate username
    const username = document.getElementById('username').value;
    if (username.trim() === '') {
        document.getElementById('usernameError').textContent = 'Username is required.';
        valid = false;
    } else if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters.';
        valid = false;
    } else {
        document.getElementById('usernameError').textContent = '';
    }

    // Validate age
    const age = document.getElementById('age').value;
    if (age.trim() === '') {
        document.getElementById('ageError').textContent = 'Age is required.';
        valid = false;
    } else if (isNaN(age) || age < 18) {
        document.getElementById('ageError').textContent = 'You must be at least 18 years old.';
        valid = false;
    } else {
        document.getElementById('ageError').textContent = '';
    }

    // Final Submission Check
    if (valid) {
        alert('Form submitted successfully!');
    }
}); */

document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let valid = true;

    // Validation rules
    const fields = [
        { id: 'email', errorId: 'emailError', rules: [
            { check: val => val.trim() === '', message: 'Email is required.' },
            { check: val => !val.includes('@'), message: 'Email is invalid.' }
        ]},
        { id: 'password', errorId: 'passwordError', rules: [
            { check: val => val.trim() === '', message: 'Password is required.' },
            { check: val => val.length < 6, message: 'Password must be at least 6 characters.' }
        ]},
        { id: 'username', errorId: 'usernameError', rules: [
            { check: val => val.trim() === '', message: 'Username is required.' },
            { check: val => val.length < 3, message: 'Username must be at least 3 characters.' }
        ]},
        { id: 'age', errorId: 'ageError', rules: [
            { check: val => val.trim() === '', message: 'Age is required.' },
            { check: val => isNaN(val) || val < 18, message: 'You must be at least 18 years old.' }
        ]}
    ];

    // Validate fields dynamically
    fields.forEach(field => {
        const inputValue = document.getElementById(field.id).value;
        const errorElement = document.getElementById(field.errorId);
        
        const error = field.rules.find(rule => rule.check(inputValue));
        if (error) {
            errorElement.textContent = error.message;
            valid = false;
        } else {
            errorElement.textContent = '';
        }
    });

    // Final Submission Check
    if (valid) {
        alert('Form submitted successfully!');
    }
});

