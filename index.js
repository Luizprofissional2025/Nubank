document.getElementById('btn-verso').addEventListener('click', function () {
    const campo1 = document.getElementById('cartao');
    const campo2 = document.getElementById('verso-cartao');
    if (campo1.style.display !== 'none') {
        campo1.style.display = 'none';
        campo2.style.display = 'block';
        campo2.style.transition = 'all ease 0.5s';
    } else {
        campo1.style.display = 'block';
        campo1.style.transition = 'all ease 0.5s';
        campo2.style.display = 'none';
    }
});