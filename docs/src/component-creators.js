let Component = (function() {
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
    
    return {navHeaderLink};
})();

export default Component;