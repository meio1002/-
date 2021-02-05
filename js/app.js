function hamburger() {
    const navList = document.getElementById('nav-list');
    const button = document.getElementById('nav-toggle');
    const aicon1 = document.getElementById('aicon1');
    const aicon2 = document.getElementById('aicon2');
    

    button.addEventListener('click',function(){
        navList.classList.toggle('fade-out');
        aicon1.classList.toggle('open');
        aicon2.classList.toggle('open');
    });
    // タイマーでどうにかしようとして失敗した痕跡
    /*button.addEventListener('click',function(){
        setTimeout(navList.classList.toggle('open'),1000)
    });*/
}

hamburger();
