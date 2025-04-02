/* document.getElementById('redBtn').onclick = function() {
    document.body.style.backgroundColor = 'red';
    console.log('red button clicked');
    alert('Red button clicked!');
};

document.getElementById('greenBtn').onclick = function() {
    document.body.style.backgroundColor = 'green';
    console.log('green button clicked');
    alert('Green button clicked!');
};

document.getElementById('blueBtn').onclick = function() {
    document.body.style.backgroundColor = 'blue';
    console.log('blue button clicked');
    alert('Blue button clicked!');
};

document.getElementById('yellowBtn').onclick = function() {
    document.body.style.backgroundColor = 'yellow';
    console.log('yellow button clicked');
    alert('Yellow button clicked!');
}; */

const colors = ['red', 'green', 'blue', 'yellow'];

colors.forEach(color => {
    document.getElementById(`${color}Btn`).onclick = function() {
        document.body.style.backgroundColor = color;
        console.log(`${color} button clicked`);
        alert(`${color.charAt(0).toUpperCase() + color.slice(1)} button clicked!`);
    };
});
