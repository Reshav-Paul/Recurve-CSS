// left nav

function navHeaderLink(text, id, {textColorClass, fontWeightClass, fontSize}) {
    const headerListItem = document.createElement('li');
    headerListItem.style.listStyle = 'none';

    const headerLink = document.createElement('a');
    headerLink.href = `#${id}`;

    const header = document.createElement('h5');
    header.textContent = text;
    header.style.fontSize = fontSize || '1.1rem';
    textColorClass && header.classList.add(textColorClass);
    fontWeightClass && header.classList.add(fontWeightClass);

    headerLink.appendChild(header);
    headerListItem.appendChild(headerLink);
    return headerListItem;
}

const leftNav = document.getElementById('left-nav');
leftNav.appendChild(navHeaderLink('HTML default restyle', 'html-restyle',
    {textColorClass: 'text-red', fontWeightClass: 'fw-bold'}
));
leftNav.appendChild(navHeaderLink('Grid Layout', '',
    {textColorClass: 'text-red', fontWeightClass: 'fw-bold'}
));

// content

function getHeading(id, text) {
    const heading = document.createElement('h2');
    heading.classList.add('section-header');
    heading.id = id;
    heading.textContent = text;
    return heading;
}

function getSubheading(id, text) {
    const subheading = document.createElement('h4');
    subheading.id = id;
    subheading.classList.add('fw-bold');
    subheading.textContent = text;
    return subheading;
}

function getParagraph(text, classnames = []) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    classnames.forEach(name => paragraph.classList.add(name));
    return paragraph;
}

const content = document.getElementById('content');


// right nav
const rightNav = document.getElementById('right-nav');
rightNav.appendChild(navHeaderLink('HTML default restyle', 'html-restyle', {fontSize: '1rem'}));

const htmlRestyleSectionLinks = document.createElement('ul');
htmlRestyleSectionLinks.classList.add('px-2');
const htmlRestyleHeaders = document.querySelectorAll('#html-restyle-content > .section-header');
htmlRestyleHeaders.forEach(header => {
    if (header.id == 'html-restyle') return;
    htmlRestyleSectionLinks.appendChild(
        navHeaderLink(header.textContent, header.id, {fontSize: '0.9rem'})
    );
});
rightNav.appendChild(htmlRestyleSectionLinks);
