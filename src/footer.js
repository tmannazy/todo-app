const footer = () => {
    const footer = document.createElement('footer');
    const p = document.createElement('p');

    p.textContent = 'Strengthened by GRIT'
    footer.appendChild(p);
    return footer;
}

export { footer };