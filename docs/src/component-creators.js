let Component = (function() {
    function navHeaderLink(text, id, {textColorClass, fontWeightClass, fontSize}) {
        const headerListItem = document.createElement('li');
        headerListItem.style.listStyle = 'none';
    
        const headerLink = document.createElement('a');
        headerLink.href = `#${id}`;
    
        const header = document.createElement('h5');
        header.textContent = text;
        header.style.fontSize = fontSize || '1rem';
        if (textColorClass) header.classList.add(textColorClass);
        if (fontWeightClass) header.classList.add(fontWeightClass);
    
        headerLink.appendChild(header);
        headerListItem.appendChild(headerLink);
        return headerListItem;
    }

    function getStyledParagraph(textGroup) {
        const para = document.createElement('p');
        for (const text of textGroup) {
            let textElement;
            if (text.startsWith('.')) {                    
                textElement = document.createElement('span');
                textElement.textContent = `${text} `;
                textElement.classList.add('text-red');
            } else {
                textElement = document.createTextNode(`${text} `);
            }
            para.appendChild(textElement);
        }
        return para;
    }

    function createUnorderedList(listTextGroups) {
        const uList = document.createElement('ul');
        for (const textGroup of listTextGroups) {
            const listItem = document.createElement('li');
            for (const text of textGroup) {
                const span = document.createElement('span');
                span.textContent = `${text} `;
                if (text.startsWith('.')) {                    
                    span.classList.add('text-red');
                }
                listItem.appendChild(span);
            }
            uList.appendChild(listItem);
        }
        return uList;
    }
    
    function greenSpan(text, classlist) {
        const span = document.createElement('span');
        span.textContent = text;
        span.classList.add(...classlist);
        span.classList.add('text-green');
        return span;
    }

    function getRow(rowProps) {
        const row = document.createElement('div');
        row.classList.add('row', 'my-2');
        if (rowProps.classList) row.classList.add(...rowProps.classList);
        for (const child of rowProps.cols) {
            const col = document.createElement('div');
            if (!child.text) {
                col.textContent = child.classList.map(name => `.${name}`).join(' ');
            } else {
                col.textContent = child.text;
            }
            if (child.classList) col.classList.add(...child.classList);
            col.classList.add('py-3', 'bg-col');
            row.appendChild(col);
        }
        return row;
    }

    function getContainerWithRows(rows, classList = []) {
        const container = document.createElement('div');
        container.classList.add('container');
        if (classList.length > 0) container.classList.add(...classList);
        for (const row of rows) {
            container.appendChild(getRow(row));
        }
        return container;
    }

    return {
        navHeaderLink, createUnorderedList, greenSpan,
        getRow, getStyledParagraph, getContainerWithRows
    };
})();

export default Component;