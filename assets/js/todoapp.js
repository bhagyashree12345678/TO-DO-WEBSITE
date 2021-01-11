$("ul").on("click","li",function(){
    $(this).toggleClass("selected");
})

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    event.stopPropagation();
})

$("input[type=text]").on("keypress",function(event){
    if(event.which===13)
    {
        var txt=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+txt+"</li>");
    }
})