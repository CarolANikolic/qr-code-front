const displayMessage = (
    element, 
    message, 
    styleClass,
    keyword) => {
    
    if (keyword === 'ok') {
        element.textContent = message;
        element.classList.remove(styleClass);   
    } else {
        element.textContent = message;
        element.classList.add(styleClass);
    }
}

export default displayMessage