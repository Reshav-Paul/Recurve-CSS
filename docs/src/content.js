function getHeading(id, text) {
    const heading = document.createElement('h3');
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

// Grid Layout
let gridLayoutHeading = getHeading('grid-layout', 'Grid Layout');
let containerSubheading = getSubheading('container', 'Containers');
content.appendChild(gridLayoutHeading);