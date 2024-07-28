document.getElementById('introBtn').addEventListener('click', function() {
    var clickSound = document.getElementById('clickSound');
    clickSound.play();

    var intro = document.querySelector('.intro');
    var container = document.querySelector('.container');
    
    intro.classList.add('hidden');
    container.classList.remove('hidden');

    container.style.opacity = 0;
    container.style.transform = 'scale(0.8)';

    setTimeout(function() {
        container.style.opacity = 1;
        container.style.transform = 'scale(1)';
    }, 100);
});

document.getElementById('requestTimeBtn').addEventListener('click', function() {
    document.getElementById('response').classList.remove('hidden');
});

document.getElementById('submitBtn').addEventListener('click', function() {
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    if (date && time) {
        document.getElementById('response').classList.add('hidden');
        document.getElementById('confirmation').classList.remove('hidden');
    } else {
        alert('Please select a date and time.');
    }
});
