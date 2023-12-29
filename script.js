window.addEventListener('load', () =>{

    const buttons = document.querySelectorAll('button');
    buttons.forEach(buttonEl =>{
        buttonEl.addEventListener('click', function(){
            const isCurrentClosed = !this.classList.contains('opened');

            buttons.forEach(el=> el.classList.remove('opened'));

            if(isCurrentClosed){
                this.classList.add('opened');
            }
        })
    })
})