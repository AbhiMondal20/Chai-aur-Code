function CustomRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.textContent = reactElement.props.children; // Set text content
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank', // Use '_blank' for opening in a new tab
        children: 'Click Me to Visit Google', // Use 'children' for child elements
    },
};

const root = document.getElementById('root'); // Correct the typo

CustomRender(reactElement, root);
