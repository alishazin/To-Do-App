function insertItem(textfield) {
    const value = filterValue(textfield.value);
    if (value.trim() !== '') {
        addListItem(value);
    }
    textfield.value = '';
}

function filterValue(value) {
    let tempValue = value.replace(/</g, '#');
    return tempValue.replace(/>/g, '#');
}

function addListItem(value) {
    const parent = document.getElementById('inner-layer');
    const newItem = document.createElement('div');
    const newItemSpan = document.createElement('span');
    const newItemDiv = document.createElement('div');
    const newItemDivIcon = document.createElement('i');

    newItem.className = 'items';
    newItemSpan.innerHTML = value;
    newItemDivIcon.className = 'bi bi-x';

    newItemDivIcon.onclick = () => {
        closeItem(parent, newItem, newItemSpan, newItemDiv, newItemDivIcon);
    }

    newItem.appendChild(newItemSpan);
    newItemDiv.appendChild(newItemDivIcon);
    newItem.appendChild(newItemDiv);
    parent.appendChild(newItem);
}

function closeItem(parent, newItem, newItemSpan, newItemDiv, newItemDivIcon) {
    let durationAnimation = 0.6; // in seconds
    newItemDiv.removeChild(newItemDivIcon);
    newItemSpan.style.overflow = 'hidden';
    newItemSpan.style.whiteSpace = 'nowrap';

    newItem.style.animationName = 'itemShrink'; 
    newItem.style.animationDuration = `${(durationAnimation)}s`; 
    newItem.style.animationIterationCount = '1'; 
    newItem.style.animationTimingFunction = 'linear'; 

    setTimeout(() => {
        parent.removeChild(newItem);
    }, durationAnimation * 1000);
}