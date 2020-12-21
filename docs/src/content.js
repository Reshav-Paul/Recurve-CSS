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
    These include classes to handle margin, padding, alignment, offset, gutters, ordering and more.`,
    ['h5', 'text-grey']
));

layoutSection.appendChild(getSubheading('margin', 'Margin'));
layoutSection.appendChild(Component.getStyledParagraph([
    `Margin classes can be used to apply margins according to values in $gutters based on $spacer.
    Margins can be applied along all directions, x-axis, y-axis or even along a specific direction.
    Negative margins are also supported. All margin classes have responsive variants to change margin
    according to screen sizes.`
]));
layoutSection.appendChild(Component.createUnorderedList([
    ['.m-*', 'and ', '.m-[breakpoint]-*', 'applies margin along all directions'],
    ['.mx-*', 'and ', '.mx-[breakpoint]-*', 'applies left and right margins'],
    ['.my-*', 'and ', '.my-[breakpoint]-*', 'applies top and bottom margins'],
    ['.ml-*', 'and ', '.ml-[breakpoint]-*', 'applies left margin'],
    ['.mr-*', 'and ', '.mr-[breakpoint]-*', 'applies right margin'],
    ['.mt-*', 'and ', '.mt-[breakpoint]-*', 'applies top margin'],
    ['.mb-*', 'and ', '.mb-[breakpoint]-*', 'applies bottom margin'],
]));
layoutSection.appendChild(Component.getStyledParagraph([
    `.m-n*`, 'applies negative margin along all directions. ', 'Similarly, ',
    '.mx-n*', '.my-n*', ' applies negative margin along x and y directions.',
    '.ml-n*', '.mr-n*', '.mt-n*', '.mb-n*', ' can be used for applying negative margin along any specific direction.',
    'Zero margin and auto margin can be applied across all the above classes like ', '.m-auto', ' or ', '.m-0', ', etc.'
]));

layoutSection.appendChild(getSubheading('padding', 'Padding'));
layoutSection.appendChild(Component.getStyledParagraph([
    `Padding classes can be used to apply padding according to values in $gutters based on $spacer.
    Padding can be applied along all directions, x-axis, y-axis or even along a specific direction.
    All padding classes have responsive variants to change padding according to screen sizes.`
]));
layoutSection.appendChild(Component.createUnorderedList([
    ['.p-*', 'and ', '.p-[breakpoint]-*', 'applies padding along all directions'],
    ['.px-*', 'and ', '.px-[breakpoint]-*', 'applies left and right padding'],
    ['.py-*', 'and ', '.py-[breakpoint]-*', 'applies top and bottom padding'],
    ['.pl-*', 'and ', '.pl-[breakpoint]-*', 'applies left padding'],
    ['.pr-*', 'and ', '.pr-[breakpoint]-*', 'applies right padding'],
    ['.pt-*', 'and ', '.pt-[breakpoint]-*', 'applies top padding'],
    ['.pb-*', 'and ', '.pb-[breakpoint]-*', 'applies bottom padding'],
]));

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

layoutSection.appendChild(getSubheading('display', 'Display Types'));
layoutSection.appendChild(Component.getStyledParagraph([
    'Various display types can be applied using the classes', '.d-*', 'and their responsive variants',
    '.d-[breakpoint]-*', 'to change display types of elements responsively.'
]));
layoutSection.appendChild(Component.createUnorderedList([
    ['.d-block', 'and ', '.d-[breakpoint]-block', ' for display type block'],
    ['.d-inline', 'and ', '.d-[breakpoint]-inline', ' for display type inline'],
    ['.d-none', 'and ', '.d-[breakpoint]-none', ' for display type none'],
    ['.d-inline-block', 'and ', '.d-[breakpoint]-inline-block', ' for display type inline-block'],
    ['.d-flex', 'and ', '.d-[breakpoint]-flex', ' for display type flex'],
    ['.d-inline-flex', 'and ', '.d-[breakpoint]-inline-flex', ' for display type inline-flex'],
    ['.d-table', 'and ', '.d-[breakpoint]-table', ' for display type table'],
    ['.d-trow', 'and ', '.d-[breakpoint]-trow', ' for display type table-row'],
    ['.d-tcell', 'and ', '.d-[breakpoint]-tcell', ' for display type table-cell'],
]));

layoutSection.appendChild(getSubheading('flex-utilities', 'Flex Utilities'));
layoutSection.appendChild(Component.getStyledParagraph([
    'Various flex directions can be applied using the classes', '.flex-*', 'and their responsive variants',
    '.flex-[breakpoint]-*', 'to change the flex directions responsively. A few other flex utility classes are',
    '.flex-grow-0', ', ', '.flex-grow-1', ' and ', '.flex-fill'
]));
layoutSection.appendChild(Component.createUnorderedList([
    ['.flex-row', 'and ', '.flex-[breakpoint]-row', ' for flex-direction row'],
    ['.flex-col', 'and ', '.flex-[breakpoint]-col', ' for flex-direction column'],
    ['.flex-row-rev', 'and ', '.flex-[breakpoint]-row-rev', ' for flex-direction row-reverse'],
    ['.flex-col-rev', 'and ', '.flex-[breakpoint]-col-rev', ' for flex-direction column-reverse'],
    ['.flex-fill', 'and ', '.flex-[breakpoint]-fill', ' for flex-grow 1, flex-shrink 1, and flex-basis auto'],
    ['.flex-grow-0', 'and ', '.flex-[breakpoint]-grow-0', ' for flex-grow 0'],
    ['.flex-grow-1', 'and ', '.flex-[breakpoint]-grow-1', ' for flex-grow 1'],
]));

layoutSection.appendChild(getSubheading('height-width', 'Height and Width'));
layoutSection.appendChild(Component.getStyledParagraph([
    'Use classes ', '.h-20, .h-40, .h-60, .h-80, .h-100',
    'to make elements take the corressponding x% height of its parent. For Example, ', '.h-40',
    ' will make the element take 40% of its parent\'s height. Similar classes are available for width like',
    '.w-[x]', ' . A few other classes for height and width are -'
]));
layoutSection.appendChild(Component.createUnorderedList([
    ['.wmin-100', 'for setting the min-width to 100%'],
    ['.wmax-100', 'for setting the max-width to 100%'],
    ['.vw-100', 'for setting the width to 100vw'],
    ['.hmin-100', 'for setting the min-height to 100%'],
    ['.hmax-100', 'for setting the max-height to 100%'],
    ['.vh-100', 'for setting the height to 100vh'],
]));

layoutSection.appendChild(getSubheading('position', 'Position'));
layoutSection.appendChild(Component.getStyledParagraph([
    'Classes are available for setting the position type and top, bottom, left, and right values.',
    'Use the classes, ', '.pos-rel, .pos-abs, .pos-fixed, .pos-sticky, .pos-static',
    'to set the position types. Use the classes ', '.pos-[direction]', ' and ', '.pos-[direction]-[direction]',
    'to position the elements accordingly. For example, ', '.pos-top', 'and ', '.pos-bottom-left', ', etc.'
]));

layoutSection.appendChild(getSubheading('hover', 'Hover'));
layoutSection.appendChild(Component.getStyledParagraph(['Common style changes on hover can be applied using the following classes -']));
layoutSection.appendChild(Component.createUnorderedList([
    [
        'Scale down elements on hover using', '.hover-scale-n*', 'where', '.hover-scale-n6', 'scales down elements to 70% and',
        '.hover-scale-n1', 'scales down to 95%. Each level changes the negative scaling by 5%.'
    ],
    [
        'Scale up elements on hover using', '.hover-scale-*', 'where', '.hover-scale-1', 'scales up elements to 105% and',
        '.hover-scale-6', 'scales up to 130%. Each level changes the up-scaling by 5%.', '.hover-scale-0',
        'keeps the element in its original size.'
    ],
]));

layoutSection.appendChild(getSubheading('overflow', 'Overflow'));
layoutSection.appendChild(Component.getStyledParagraph([
    'The overflow behaviour of html elements can be changed using the classes', '.overflow-[type]',
    'and their directional variants', '.overflow-[direction]-[type].',
    'For example, to make the overflowing content hidden use', '.overflow-hidden',
    ' or to make overflow along the y-axis scrollable use ', '.overflow-y-scroll .'
]));

layoutSection.appendChild(getSubheading('bg-border', 'Colors and Borders'));
layoutSection.appendChild(Component.getStyledParagraph([
    'Only three classes are provided for changing background colours leaving you to handle colours however you want.',
    'The three classes available are, ', '.bg-black, .bg-grey', 'and', '.bg-white',
    ' .Borders can be created and customised using the following classes.'
]));
layoutSection.appendChild(Component.createUnorderedList([
    [
        'Use the', '.border', 'class to apply the default border on all four sides.',
        'You can also use their variants to apply border along specific directions like',
        '.border-top, .border-bottom, .border-left, .border-right',
        ' .If you want to remove borders instead use the class', '.border-0',
        'to remove borders along all sides or the ', '.border-[direction]-0',
        'variants to remove border along a specific direction.'
    ],
    [
        'Three classes are available to change the border colours which are',
        '.border-white, .border-grey, .border-dark-grey', 'and', '.border-black'
    ],
    [
        'Border radius can be made circular using', '.border-circular', 'or remove border radius compeletely using',
        '.border-r0', ' . The border radius can be changed using a range of classes from', '.border-r1',
        'which sets the border radius to 0.2rem, to ', '.border-r5', 'which sets the border radius to 0.8rem.',
    ],
    [
        'The class', '.rounded',
        'can be used to set the border radius to 0.25rem. Borders can be made rounded along a specific direction using the classes',
        '.rounded-top', 'for rounding the top left and top right corners, ', '.rounded-bottom',
        'for rounded bottom left and bottom right corners, and', '.rounded-left', 'and', '.rounded-right',
        'for rounded borders along the left and right corners.'
    ],
    [
        "Border width can also be changed using a range of classes from ", '.border-w2',
        'which changes the border width to 2px, to', '.border-w5', ' which sets the border width to 5px.'
    ]
]));

layoutSection.appendChild(getSubheading('misc', 'Misc'));
layoutSection.appendChild(Component.getStyledParagraph([
    'Toggle the visibility property with', '.invisible', ' and ', '.visible', ' classes. Use ',
    '.translatex-center', ' to center an element by translating it alomg the x-axis. Use', '.clear-fix',
    'to clear floats. You can use floats on elements using the classes ', '.float-left, .float-right', 'and',
    '.float-none', ' . Use ', '.pe-none', 'and', '.pe-auto', 'to set pointer events to none and auto respectively.',
    'Use ', '.cursor-pointer', 'to set the cursor property to pointer.'
]));

content.appendChild(layoutSection);

const fontSection = document.createElement('section');
fontSection.id = 'font-classes';

fontSection.appendChild(getHeading('font-utilities', 'Font Utilities'));
fontSection.appendChild(Component.getStyledParagraph([
    'Recurve provides some classes for styling your fonts. These include heading classes, ',
    '.h1, .h2, .h3, .h4, .h5, .h6',
    ' for changing the font style to match the heading font sizes. In addition to these the following classes are available - '
]));

fontSection.appendChild(Component.createUnorderedList([
    [
        'Font Weight - ', '.fw-bold, .fw-bolder and .fw-normal',
        ' can be used to set the font weights accordingly. For finer control over font weight, classes',
        '.fw-100, .fw-200', ' ... to', '.fw-900', 'can be used.'
    ],
    [
        'Text Transform - Use ', '.text-upper, .text-lower, .text.cap, .text-transform-none', 'for handling common text transforms.'
    ],
    [
        'Text Align - Classes for changing text alignments include, ',
        '.text-center, .text-start, .text-end, .text-left, .text-right, .text-justify', 'to change the text alignment accorfingly.'
    ],
    [
        'Text Decoration - Different text decorations are supported through the classes, ',
        '.text-underline, .text-decoration-none', '(for removing any text decoration),',
        '.text-line-through, .text-wavy, .text-dashed, .text-dotted, .text-double-line, .text-overline,',
        'for using the corresspoding text decoration.'
    ],
    [
        'Text Overflow - Use', '.text-overflow-clip, .text-overflow-ellipsis', ' to change text overflow behaviour.'
    ],
    [
        'Colors - Only three classes are available leaving you to handle colours however you want. These are, ',
        '.text-black, .text-white, .text-grey'
    ],
    [
        'Font Styles - Font styles can be set to normal or italics using', '.font-normal', ' and ', '.font-italic.'
    ]
]));
content.appendChild(fontSection);