import Component from './component-creators';

function getHeading(id, text) {
    const heading = document.createElement('h3');
    heading.classList.add('section-header');
    if (id.length > 0) {
        heading.id = id;
    }    
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
const gridLayoutHeading = getHeading('grid-layout', 'Grid Layout');
content.appendChild(gridLayoutHeading);

const containerSubheading = getSubheading('container', 'Containers');
const description = 'Containers are the building blocks of the grid layout. They contain the rows that construct the grid. They also contain your content so that you can apply the required margin, padding and alignment.';
const containerDesc = getParagraph(description, ['text-grey', 'h5']);
content.appendChild(containerSubheading);
content.appendChild(containerDesc);

const containerFeatures = Component.createUnorderedList(
    [
        [
            'The class ',
            '.container ',
            'is responsive across all viewports and sets a max-width at each breakpoint'
        ],
        [
            'The class ',
            '.container-fluid ',
            'is always 100% wide with respect to its parent'
        ],
        [
            '.container-[breakpoint] ',
            'are 100% wide upto the specified breakpoint'
        ]
    ]
);
content.appendChild(containerFeatures);
content.appendChild(getHeading('row-columns', 'Rows and Columns'));
const rowColDesc = getParagraph(
    'Rows are contained within containers. Each row can display 12 columns by default. The number of columns can be changed by using the sass variable ',
    ['h5', 'text-grey']
);
rowColDesc.appendChild(Component.greenSpan('$grid-columns', ['h5']));
content.appendChild(rowColDesc);

content.appendChild(getSubheading('', 'Equal width columns'));
content.appendChild(Component.getStyledParagraph([ 'Using the class', '.col', 'creates equal width columns' ]));
content.appendChild(Component.getContainerWithRows(
    [
        { cols: [{classList: ['col']}, {classList: ['col']}, {classList: ['col']}] },
        { cols: [{classList: ['col']}, {classList: ['col']}] }
    ]    
));

content.appendChild(getSubheading('', 'Setting column widths'));
content.appendChild(Component.getStyledParagraph(
    [
        'Classes',
        '.col-[size]',
        'can be used to create columns of specific sizes based on the maximum number of columns in the grid system '
    ]
));
content.appendChild(Component.getContainerWithRows(
    [
        { cols: [{classList: ['col']}, {classList: ['col-6']}, {classList: ['col']}] },
        { cols: [{classList: ['col-4']}, {classList: ['col-5']}, {classList: ['col']}] },
        { cols: [{classList: ['col-8']}, {classList: ['col-4']}] },
        { cols: [{classList: ['col-2']}, {classList: ['col-6']}, {classList: ['col-2']}] }
    ]    
));

content.appendChild(getSubheading('', 'Responsive columns'));
content.appendChild(Component.getStyledParagraph(
    [
        'Classes',
        '.col-[breakpoint]-[size]',
        'can be used to change the column width at each breakpoint. Since recurve has a desktop-first design approach, the default',
        '.col-[responsive]-[size]',
        'classes specify the size of the column for the specified breakpoint and downwardsResponsive columns can be mixed with',
        '.col',
        'columns and auto-width columns to achieve the required design.'
    ]
));
content.appendChild(Component.getContainerWithRows(
    [
        { cols: [{classList: ['col']}, {classList: ['col-4', 'col-md-6']}] },
        { cols: [{classList: ['col-4', 'col-md-6']}, {classList: ['col-4', 'col-md-6']}, {classList: ['col-4', 'col-md-6']}] },
        { cols: [{classList: ['col-md-6']}, {classList: ['col-md-6']}] },
        {
            cols: [
                {classList: ['col-8', 'col-lg-6', 'col-md-4', 'col-sm-3', 'col-xs-12']},
                {classList: ['col-4', 'col-lg-6', 'col-md-8', 'col-sm-9', 'col-xs-12']}
            ]
        },
        { cols: [{classList: ['col-6']}, {classList: ['col-6', 'col-md-8']}] },        
    ]    
));

content.appendChild(getSubheading('', 'Responsive auto width columns'));
content.appendChild(Component.getStyledParagraph(
    [
        '.col-auto',
        'and',
        '.col-[breakpoint]-[auto]',
        'classes can be used to create auto-width columns which have the width property set to auto',
        '.col-[breakpoint]-[auto]',
        'makes the width auto for screens of that size and smaller, while',
        '.col-auto',
        'is the default and applies for all screens.'
    ]
));
content.appendChild(Component.getContainerWithRows(
    [
        { cols: [{classList: ['col-2', 'col-lg-3']}, {classList: ['col-6', 'col-lg-auto']}, {classList: ['col-auto']}] },
        { cols: [{classList: ['col-6', 'col-md-auto']}, {classList: ['col-6']}] }
    ]    
));

content.appendChild(getSubheading('', 'Row Columns'));
content.appendChild(Component.getStyledParagraph(
    [
        'Using the classes',
        '.row-col-*',
        'and their responsive variants',
        '.col-row-[breakpoint]-*',
        ' you can quickly set the number of columns as a shortcut directly along with the row instead of specifying the sizes on each column.'
    ]
));
const rowCol = Component.getContainerWithRows(
    [
        {
            classList: ['row-cols-3'],
            cols: [{classList: ['col']}, {classList: ['col']}, {classList: ['col']}, {classList: ['col']}]
        },
    ],
);
content.appendChild(rowCol);