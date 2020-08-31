import Component from './component-creators';

const rightNav = document.getElementById('right-nav');
rightNav.appendChild(Component.navHeaderLink('HTML default restyle', 'html-restyle', {fontSize: '1rem'}));

const htmlRestyleSectionLinks = document.createElement('ul');
htmlRestyleSectionLinks.classList.add('px-2');
const htmlRestyleHeaders = document.querySelectorAll('#html-restyle-content > .section-header');
htmlRestyleHeaders.forEach(header => {
    if (header.id == 'html-restyle') return;
    htmlRestyleSectionLinks.appendChild(
        Component.navHeaderLink(header.textContent, header.id, {fontSize: '0.9rem'})
    );
});
rightNav.appendChild(htmlRestyleSectionLinks);