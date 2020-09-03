import Component from './component-creators';

function getContentList(sectionId, mainHeaderId) {
    const sectionLinks = document.createElement('ul');
    sectionLinks.classList.add('px-2');
    const headers = document.querySelectorAll(`#${sectionId} > .section-header`);
    headers.forEach(header => {
        if (header.id == mainHeaderId) return;
        sectionLinks.appendChild(
            Component.navHeaderLink(header.textContent, header.id, {fontSize: '0.9rem'})
        );
    });
    return sectionLinks;
}

const rightNav = document.getElementById('right-nav');

rightNav.appendChild(Component.navHeaderLink('HTML default restyle', 'html-restyle', {fontSize: '1rem'}));
rightNav.appendChild(getContentList('html-restyle-content', 'html-restyle'));


rightNav.appendChild(Component.navHeaderLink('Grid Layout', 'grid-layout', {fontSize: '1rem'}));
rightNav.appendChild(getContentList('grid-layout-content', 'grid-layout'));

rightNav.appendChild(Component.navHeaderLink('Rows and Columns', 'row-columns', {fontSize: '1rem'}));
rightNav.appendChild(getContentList('row-col-content', 'row-columns'));

rightNav.appendChild(Component.navHeaderLink('Layout Utilities', 'layout-utilities', {fontSize: '1rem'}));
rightNav.appendChild(getContentList('layout-content', 'layout-utilities'));