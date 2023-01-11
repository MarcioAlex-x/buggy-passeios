function menuShow(){
    let menuMobo = document.getElementById('MenuIcon')
    if (menuMobo.classList.contains('open')){
        menuMobo.classList.remove('open')
    }else{
        menuMobo.classList.add('open')
    }
}