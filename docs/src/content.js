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
    subheading.classList.add('section-header');
    subheading.id = id;
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
const gridLayoutSection = document.createElement('section');
gridLayoutSection.id = 'grid-layout-content';

const gridLayoutHeading = getHeading('grid-layout', 'Grid Layout');
gridLayoutSection.appendChild(gridLayoutHeading);

const containerSubheading = getSubheading('container', 'Containers');
const description = 'Containers are the building blocks of the grid layout. They contain the rows that construct the grid. They also contain your content so that you can apply the required margin, padding and alignment.';
const containerDesc = getParagraph(description, ['text-grey', 'h5']);
gridLayoutSection.appendChild(containerSubheading);
gridLayoutSection.appendChild(containerDesc);

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
gridLayoutSection.appendChild(containerFeatures);
content.appendChild(gridLayoutSection);

const rowColSection = document.createElement('section');
rowColSection.id = 'row-col-content';

rowColSection.appendChild(getHeading('row-columns', 'Rows and Columns'));
const rowColDesc = getParagraph(
    'Rows are contained within containers. Each row can display 12 columns by default. The number of columns can be changed by using the sass variable ',
    ['h5', 'text-grey']
);
rowColDesc.appendChild(Component.greenSpan('$grid-columns', ['h5']));
rowColSection.appendChild(rowColDesc);

rowColSection.appendChild(getSubheading('equal-col', 'Equal width columns'));
rowColSection.appendChild(Component.getStyledParagraph(['Using the class', '.col', 'creates equal width columns']));
rowColSection.appendChild(Component.getContainerWithRows(
    [
        { cols: [{ classList: ['col'] }, { classList: ['col'] }, { classList: ['col'] }] },
        { cols: [{ classList: ['col'] }, { classList: ['col'] }] }
    ]
));

rowColSection.appendChild(getSubheading('col-width', 'Setting column widths'));
rowColSection.appendChild(Component.getStyledParagraph(
    [
        'Classes',
        '.col-[size]',
        'can be used to create columns of specific sizes based on the maximum number of columns in the grid system '
    ]
));
rowColSection.appendChild(Component.getContainerWithRows(
    [
        { cols: [{ classList: ['col'] }, { classList: ['col-6'] }, { classList: ['col'] }] },
        { cols: [{ classList: ['col-4'] }, { classList: ['col-5'] }, { classList: ['col'] }] },
        { cols: [{ classList: ['col-8'] }, { classList: ['col-4'] }] },
        { cols: [{ classList: ['col-2'] }, { classList: ['col-6'] }, { classList: ['col-2'] }] }
    ]
));

rowColSection.appendChild(getSubheading('res-col', 'Responsive columns'));
rowColSection.appendChild(Component.getStyledParagraph(
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
rowColSection.appendChild(Component.getContainerWithRows(
    [
        { cols: [{ classList: ['col'] }, { classList: ['col-4', 'col-md-6'] }] },
        { cols: [{ classList: ['col-4', 'col-md-6'] }, { classList: ['col-4', 'col-md-6'] }, { classList: ['col-4', 'col-md-6'] }] },
        { cols: [{ classList: ['col-md-6'] }, { classList: ['col-md-6'] }] },
        {
            cols: [
                { classList: ['col-8', 'col-lg-6', 'col-md-4', 'col-sm-3', 'col-xs-12'] },
                { classList: ['col-4', 'col-lg-6', 'col-md-8', 'col-sm-9', 'col-xs-12'] }
            ]
        },
        { cols: [{ classList: ['col-6'] }, { classList: ['col-6', 'col-md-8'] }] },
    ]
));

rowColSection.appendChild(getSubheading('auto-col', 'Responsive auto width columns'));
rowColSection.appendChild(Component.getStyledParagraph(
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
rowColSection.appendChild(Component.getContainerWithRows(
    [
        { cols: [{ classList: ['col-2', 'col-lg-3'] }, { classList: ['col-6', 'col-lg-auto'] }, { classList: ['col-auto'] }] },
        { cols: [{ classList: ['col-6', 'col-md-auto'] }, { classList: ['col-6'] }] }
    ]
));

rowColSection.appendChild(getSubheading('row-column', 'Row-Columns'));
rowColSection.appendChild(Component.getStyledParagraph(
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
            cols: [{ classList: ['col'] }, { classList: ['col'] }, { classList: ['col'] }, { classList: ['col'] }]
        },
    ]
);
rowColSection.appendChild(rowCol);
content.appendChild(rowColSection);

const layoutSection = document.createElement('section');
layoutSection.id = 'layout-content';

layoutSection.appendChild(getHeading('layout-utilities', 'Layout Utilities'));
layoutSection.appendChild(getParagraph(
    `Recurve provides utility classes to arrange your columns however you want and create flexible and responsive layouts.
    These include classes to handle alignment, offset, gutters and ordering.`,
    ['h5', 'text-grey']
));

layoutSection.appendChild(getHeading('alignment', 'Alignment'));
layoutSection.appendChild(Component.createUnorderedList([
    ['.jc-*', 'is used for horizontal alignment in rows and specifies values for justify-content'],
    ['.ai-*', 'is used for vertical alignment in rows and specifies values for align-items ']
]));

layoutSection.appendChild(getSubheading('ver-alignment', 'Vertical Alignment'));
layoutSection.appendChild(Component.getStyledParagraph([
    'The three most used vertical alignment can be achieved using',
    '.ai-start,', '.ai-center', 'and', '.ai-end.',
    'You can also use the responsive variants',
    '.ai-[breakpoint]-[alignment],',
    'to change the alignment in response to changes in the viewport size.',
    'Other kinds of alignment classes include',
    '.ai-baseline', 'and', '.ai-stretch',
]));
let verticalAlignments = ['ai-start', 'ai-center', 'ai-end'];
for (const alignment of verticalAlignments) {
    const text = 'One of three columns';
    let alignmentContainer = Component.getContainerWithRows([
        {
            classList: [alignment, 'hmin-100', 'hmax-100'],
            cols: [{ classList: ['col'], text: text }, { classList: ['col'], text: text }, { classList: ['col'], text: text }]
        }
    ]);
    alignmentContainer.style.height = '8rem';
    alignmentContainer.classList.add('bg-light');
    layoutSection.appendChild(alignmentContainer);
}
layoutSection.appendChild(document.createElement('br'));

layoutSection.appendChild(getSubheading('hor-alignment', 'Horizontal Alignment'));
layoutSection.appendChild(Component.getStyledParagraph([
    'Six kinds of horizontal alignment using', '.jc-start,', '.jc-end,',
    '.jc-center,', '.jc-evenly,', '.jc-between', 'and', '.jc-around.',
    'You can also use the responsive variants',
    '.jc-[breakpoint]-[alignment],',
    'to change the alignment in response to changes in the viewport size.',
]));
let horizontalAlignments = ['jc-start', 'jc-end', 'jc-center', 'jc-evenly', 'jc-between', 'jc-around'];
for (const alignment of horizontalAlignments) {
    const text = 'One of two columns';
    let alignmentContainer = Component.getContainerWithRows([
        {
            classList: [alignment],
            cols: [{ classList: ['col-3'], text: text }, { classList: ['col-3'], text: text }]
        }
    ]);
    alignmentContainer.classList.add('bg-light');
    layoutSection.appendChild(alignmentContainer);
}

layoutSection.appendChild(getSubheading('no-gutters', 'No Gutters'));
layoutSection.appendChild(Component.getStyledParagraph([
    'The gutters between columns can be removed with', '.no-gutter', 'or', '.g-0',
    'classes. This removes the horizontal negative margins from', '.row',
    'and the horizontal padding from all its immediate children columns.',
    'The', '.g-0', 'class is one of the many', '.g-*', 'classes you can use to change gutter widths.',
    'Responsive variants of these classes,', '.g-[breakpoint]-*', 'are also available but the',
    '.no-gutter', 'does not have responsive variants.'
]));
layoutSection.appendChild(Component.getContainerWithRows(
    [{
        classList: ['g-0'],
        cols: [{ classList: ['col-8', 'col-md-6'] }, { classList: ['col-4', 'col-md-6'] }]
    }]
));
layoutSection.appendChild(Component.getStyledParagraph([
    'If you want an edge-to-edge design consider dropping the', '.container',
    'parent div like so,'
]));
layoutSection.appendChild(Component.getRow(
    {
        classList: ['g-0'],
        cols: [{ classList: ['col-8', 'col-md-6'] }, { classList: ['col-4', 'col-md-6'] }]
    }
));

layoutSection.appendChild(getSubheading('gutters', 'Variable Gutter Widths'));
layoutSection.appendChild(Component.getStyledParagraph([
    'The gutter width between columns can be changed with', '.g-*', 'and', '.g-[breakpoint]-*',
    'classes. You have the option of varying from', '.g-1', 'to', '.g-6', ', you can also use the',
    '.gx-*', 'or', '.gy-*', 'variants for controlling gutter sizes along the horizontal and vertical directions.',
    'These classes also have their responsive variants', '.gx-[breakpoint]-*', 'and', '.gy-[breakpoint]-*.',
    'Use proper padding classes', '.px-*', 'to offset horizontal gutters from the start and end of the rows. For example, pair',
    '.gx-5', 'on the row with', '.px-4', 'on the parent container to maintain offsets at the start and end of the row.'
]));
layoutSection.appendChild(Component.getContainerWithRows([
    {
        classList: ['gx-3'],
        cols: [
            { text: 'Column with gutter .gx-3', classList: ['col'] },
            { text: 'Column with gutter .gx-3', classList: ['col'] },
            { text: 'Column with gutter .gx-3', classList: ['col'] }
        ]
    }
], ['px-2']));

layoutSection.appendChild(Component.getContainerWithRows([
    {
        classList: ['gx-4'],
        cols: [
            { text: 'Column with gutter .gx-4', classList: ['col'] },
            { text: 'Column with gutter .gx-4', classList: ['col'] },
            { text: 'Column with gutter .gx-4', classList: ['col'] }
        ]
    }
]));

layoutSection.appendChild(Component.getContainerWithRows([
    {
        classList: ['gx-5'],
        cols: [
            { text: 'Column with gutter .gx-5', classList: ['col'] },
            { text: 'Column with gutter .gx-5', classList: ['col'] },
            { text: 'Column with gutter .gx-5', classList: ['col'] }
        ]
    }
], ['px-4']));

layoutSection.appendChild(getSubheading('ordering', 'Ordering Columns'));
layoutSection.appendChild(Component.getStyledParagraph([
    'The columns in a row can be ordered with ', '.order-[number]',
    ' or with the responsive variants', '.order-[breakpoint]-[number]',
    ' which order the elements at the specified breakpoints and downwards.'
]));
layoutSection.appendChild(Component.getContainerWithRows(
    [{
        cols: [
            { text: 'First in DOM with order of 3', classList: ['col', 'order-3'] },
            { text: 'Second in DOM with order of 1', classList: ['col', 'order-1'] },
            { text: 'Third in DOM with order of 2', classList: ['col', 'order-2'] }
        ]
    },
    {
        cols: [
            { text: 'First in DOM with order of 2 from md-breakpoint', classList: ['col', 'order-md-2'] },
            { text: 'Second in DOM with default order 0', classList: ['col'] },
            { text: 'Third in DOM with order of 1 from md-breakpoint', classList: ['col', 'order-md-1'] }
        ]
    }]
));

layoutSection.appendChild(getSubheading('offset', 'Offseting Columns'));
layoutSection.appendChild(Component.getStyledParagraph([
    'Columns can be moved to the right by using the offset classes', '.offset-*',
    'and their responsive variants', '.offset-[breakpoint]-*', 'to change the offset at a certain breakpoint'
]));
layoutSection.appendChild(Component.getContainerWithRows(
    [
        { cols: [{ classList: ['col-3', 'offset-3'] }, { classList: ['col-3', 'offset-3'] }] },
        {
            cols: [
                { classList: ['col-4', 'col-sm-6', 'offset-2', 'offset-md-1', 'offset-sm-0'] },
                { classList: ['col-4', 'col-sm-6', 'offset-2', 'offset-md-1', 'offset-sm-0'] }
            ]
        },
    ]
));
content.appendChild(layoutSection);