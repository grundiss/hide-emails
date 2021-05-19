function searchAndReplace() {
    const all = Array.from(document.querySelectorAll('*'))
        .filter(
            node => 
                node.children.length === 0 &&
                ![
                    'style', 'script', 'title', 'noscript'
                ].includes(node.tagName.toLowerCase()) &&
                node.textContent.length > 0
            );

    for(const node of all) {
        let update = node.textContent;

        const emailMatches = /(^|\s)(?<Email>[^@\s]+@[^@\s]+)(\s|$)/gi.exec(node.textContent);
        const phoneMatches = /(^|\s)(?<Phone>(8|\+7)\s?\(?\d\d\d\)?\s?\d\d\d\-?\d\d\-?\d\d)(\s|$)/.exec(node.textContent);

        if(emailMatches) {
            update = update.replace(emailMatches.groups.Email, '*********@*****.com');
        }
        if(phoneMatches) {
            update = update.replace(phoneMatches.groups.Phone, '+7 (***) ***-**-**');
        }

        node.textContent = update;
    }
}

new MutationObserver(searchAndReplace).observe(
    document.documentElement,
    {childList: true, subtree: true},
)