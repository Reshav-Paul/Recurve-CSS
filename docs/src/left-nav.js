import Component from './component-creators';

const leftNav = document.getElementById('left-nav');
leftNav.appendChild(Component.navHeaderLink('HTML default restyle', 'html-restyle',
    {textColorClass: 'text-white', fontWeightClass: 'fw-bold'}
));
leftNav.appendChild(Component.navHeaderLink('Grid Layout', 'grid-layout',
    {textColorClass: 'text-white', fontWeightClass: 'fw-bold'}
));
leftNav.appendChild(Component.navHeaderLink('Rows and Columns', 'row-columns',
    {textColorClass: 'text-white', fontWeightClass: 'fw-bold'}
));
leftNav.appendChild(Component.navHeaderLink('Layout Utilities', 'layout-utilities',
    {textColorClass: 'text-white', fontWeightClass: 'fw-bold'}
));
leftNav.appendChild(Component.navHeaderLink('Font Utilities', 'font-classes',
    {textColorClass: 'text-white', fontWeightClass: 'fw-bold'}
));