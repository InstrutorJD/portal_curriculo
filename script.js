const fields = ['n', 'c', 'e', 'h', 's', 'f', 'p', 'i'];

fields.forEach(id => {
    document.getElementById(id).addEventListener('input', (e) => {
        document.getElementById(`out-${id}`).innerText = e.target.value;
    });
});