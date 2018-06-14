    // 右侧菜单栏
    function menu(width,bgclass){
        var menu = $('.rigth-menu')[0];
        $(menu).css('width',width);
        $(menu).css('transition','1s');
    }
    var close = $('.close')[0];
    var headerBtn = $('.header-click');
    var houseClose = $('.house-close');
    var one = $('.One')[0]; //现住房主体
    var Two = $('.Two')[0]; //新房主体
    var hosueOne = $('.house-One')[0]; //现住房详情
    var houseTwo = $('.house-Two')[0]; //新房详情
    var houseoff = $('.house-off'); //后退按钮
    // 去除背景
    function bgtoclass(){
        var bg = $('#bg')[0];
        $(bg).removeClass('bg');
    }
    // 添加背景
    function bgaddcls(){
        var bg = $('#bg')[0];
        $(bg).addClass('bg');
    }
    // 右侧菜单栏点击事件
    $(headerBtn).on('click',()=>{
        menu('50%');
        bgaddcls();
    });
    // 右侧菜单栏关闭事件
    $(close).on('click',()=>{
        menu('0%');
        bgtoclass();
    });
    // 现住房点击事件
    $(one).on('click',function(){
        $(hosueOne).toggleClass().addClass('house-One');
        bgaddcls();
    });
    
    $(".house-img .house-img-center").on('click','div:not(p)',(e)=>{
        $(e.target).parent().find(".check").toggleClass('out')
        if($(".house-img").find(".check:not('.out')").length>0){
            $(".house-img").next().find(".btn").attr('disabled',false);
        }else{
            $(".house-img").next().find(".btn").attr('disabled',true);
        }
        var p = $(e.target).parent().next().children()[0];
        if(p.innerHTML == '水泥沙浆墙'){
            $('.newhouse-center').removeClass('out');
            $('.house-Two').addClass('out');
            $('.list').removeClass('out')
            var imgArr =[];
            var html = "<span style='margin-left: 40px;font-size: 1.7em;color: red'>已选：</span>";
            $(".house-img").find(".check:not('.out')").each(function () {
                imgArr.push($(e.target).parent().next().find("p").html());
                // $(this).toggleClass('out');
            })
            $(".title-bg").html(html+imgArr[0]);
        }else if(p.innerHTML == '老粉抹灰墙'){
            $('.newhouse-center').removeClass('out');
            $('.list').removeClass('out');
            $('.house-Two').addClass('out');
            var imgArr =[];
            var html = "<span style='margin-left: 40px;font-size: 1.7em;color: red'>已选：</span>";
            $(".house-img").find(".check:not('.out')").each(function () {
                imgArr.push($(e.target).parent().next().find("p").html());
                // $(this).toggleClass('out');
            })
            $(".title-bg").html(html+imgArr[0]);
        }
        
    });
    // 现住房主体下一步按钮
    $(".house-img").next().find(".btn").click((e)=>{
        var imgArr =[];
        var html = "<span style='margin-left: 40px;font-size: 1.7em;color: red'>已选：</span>"
        $(".house-img").find(".check:not('.out')").each(function () {
            imgArr.push($(this).parent().next().find("p").html());
            // $(this).toggleClass('out');
        })
        for(var i=0;i<imgArr.length;i++){
            if(i > 0){
                html += "<i>/</i>"
            }
            html += "<span>"+ imgArr[i] +"</span>"
        }
        $(".title-bg").html(html);
        $(".house-One").addClass('out');
        $(".renovation-center").show();
        if(imgArr.length == 9){
            $('.ten1').removeClass('out');
        }else if(imgArr.toString().indexOf('霉变') > -1){
            $('.ten1').removeClass('out');
        }else if(imgArr.toString().indexOf('粉化') > -1){
            $('.ten1').removeClass('out');
        }else if(imgArr.toString().indexOf('污垢') > -1 && imgArr.length == 7){
            $('.nine').removeClass('out');
        }else if(imgArr.toString().indexOf('污垢') > -1){
            $('.eight').removeClass('out');
        }else if(imgArr.toString().indexOf('龟裂') > -1){
            $('.six').removeClass('out');
        }else if(imgArr.toString().indexOf('陈旧改色') > -1){
            $('.three').removeClass('out');
        }else if(imgArr.length >=1 ){
            $('.nine').removeClass('out');
        }
        // console.log(imgArr.toString().indexOf('粉化'));
    })
    // 新房选择
    

    // 返回按钮
    $(houseoff).on('click',function(e){
        var newhouse = $(e.target).parent()[0].className;
        if(newhouse == 'newhouse-center'){
            $('.newhouse-center').addClass('out');
            $('.house-Two').removeClass('out');
            $('.house-Two img.check').addClass('out');
        }else{
            $(".renovation-center").hide();
            $(".house-One").toggleClass().addClass('house-One');
            $('.renovation-title>ul').removeClass('out').addClass('out');
        }
        
    })
    // 新房点击事件
    $(Two).on('click',function(){
        $(houseTwo).toggleClass().addClass('house-Two');
        bgaddcls();
    })
    $(houseClose).on('click',function(){
        $(this).parent().addClass('out');
        $(".house-img").find(".check:not('.out')").each(function () {
            $(this).toggleClass('out');
        })
        bgtoclass();
        $(hosueOne).addClass('out');
        $(houseTwo).addClass('out');
        $('.list1').removeClass('out').addClass('out');
        $('.list').removeClass('out').addClass('out');
    });

    /* 下一步内容 */
    $(".renovation-center").addClass('out');
    $('.newhouse-center').addClass('out');
    $(".renovation-center").on('click',".glyphicon-remove",()=>{
        $(".renovation-center").hide();
    })
    $('.btn-jump').click(function(){
        window.location.href='reservation.html';
    });
