export function createImage(src,alt){
    const image = document.createElement('img');
    image.src = src; 
    image.alt = alt;

    return image;
}

export function createParagraph(text){
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph
}

export function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}