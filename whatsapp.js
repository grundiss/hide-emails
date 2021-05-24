(function(){
    function hideElements() {
        const paneSide = document.getElementById('pane-side');
    
        if(paneSide) {
            paneSide.style.display = 'none';
        }
    }
    
    new MutationObserver(hideElements).observe(
        document.documentElement,
        {childList: true, subtree: true},
    )
})()