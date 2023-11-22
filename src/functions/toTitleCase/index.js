const toTitleCase = (text) => {
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
}

export default toTitleCase