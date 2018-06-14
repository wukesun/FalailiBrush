function menu(width,bgclass){
    var menu = $('.rigth-menu')[0];
    $(menu).css('width',width);
    $(menu).css('transition','1s');
}
var close = $('.close')[0];
var headerBtn = $('.header-click')[0];
$(headerBtn).on('click',()=>{
    menu('50%');
    var bg = $('#bg')[0];
    $(bg).addClass('bg');
});
$(close).on('click',()=>{
    menu('0%');
    var bg = $('#bg')[0];
    $(bg).toggleClass();
});