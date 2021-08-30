const title = () => {
    // const div = document.createElement('div');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Title';
    titleInput.setAttribute('type', 'text');
    // div.append(titleLabel, titleInput);
    // return { titleLabel, titleInput };
}

export { title };