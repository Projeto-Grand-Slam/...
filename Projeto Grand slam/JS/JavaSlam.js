

function toggleSubmenu(event) {
    event.preventDefault();
    const submenu = event.target.closest('.has-submenu').querySelector('.submenu');

    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }
}