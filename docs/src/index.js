import './content';
import './left-nav';
import './right-nav';

document.getElementById('nav-expand').addEventListener('mouseup', function toggleRightNav(e) {
    const rightNav = document.getElementById('right-nav-section');
    rightNav.classList.toggle('expanded');
});