function searchAndReplace() {
    const names = Array.from(document.querySelectorAll('.persons-person__name, .person-card__title'));

    for(const node of names) {
        const firstLetter = (node.textContent || 'Х')[0];
        node.textContent = firstLetter + '***** *********';
    }
}

new MutationObserver(searchAndReplace).observe(
    document.documentElement,
    {childList: true, subtree: true},
)