(function(){
    const firstName = (function*(){
        while(true) {
            yield 'Пузислав';
            yield 'Шерстихвост';
            yield 'Кусемир';
            yield 'Цапохват';
            yield 'Мясополк';
            yield 'Мышебор';
        }
    })();
    
    const lastName = (function*(){
        while(true) {
            yield 'Мурлыкин';
            yield 'Замяуцких';
            yield 'Рыбоедов';
            yield 'Тыгыдыкский';
            yield 'Сметанкин';
            yield 'Вертихвостов';
            yield 'Укусьев';
        }
    })();

    function hideNames() {
        const names = document.querySelectorAll([
            '.People__cellName--1GBtG',
            '.Session-Participants__table--2pJLk tr td:nth-child(2)',
        ].join(','));
    
        for(const node of names) {
            node.dataset.fakeName =
                node.dataset.fakeName || `${firstName.next().value} ${lastName.next().value}`;
            node.textContent = node.dataset.fakeName;
        }
    }
    
    new MutationObserver(hideNames).observe(
        document.documentElement,
        {childList: true, subtree: true},
    )
})()