import Component from './component-creators';

const leftNav = document.getElementById('left-nav');
leftNav.appendChild(Component.navHeaderLink('HTML default restyle', 'html-restyle',
    {textColorClass: 'text-red', fontWeightClass: 'fw-bold'}
));
leftNav.appendChild(Component.navHeaderLink('Grid Layout', 'grid-layout',
    {textColorClass: 'text-red', fontWeightClass: 'fw-bold'}
));
leftNav.appendChild(Component.navHeaderLink('Rows and Columns', 'row-columns',
    {textColorClass: 'text-red', fontWeightClass: 'fw-bold'}
));
leftNav.appendChild(Component.navHeaderLink('Layout Utilities', 'layout-utilities',
    {textColorClass: 'text-red', fontWeightClass: 'fw-bold'}
));