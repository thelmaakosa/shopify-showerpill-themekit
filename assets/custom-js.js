// Read More button on PDP
$(".product-single__description.rte").append('<p class="pdp_more initial">Show More</p>');

if ($(".product-single__description.rte ul").length>0)
{
    $(".product-single__description.rte .pdp_more").css("display", "block");
    $(".product-single__description.rte ul").css("display", "none");
}
else{
    $(".product-single__description.rte .pdp_more").css("display", "none");
}

$(".product-single__description.rte .pdp_more").click(function(){
    if ($(this).hasClass("initial")){
        $(this).text("Show Less");
        $(this).removeClass("initial");
        $(this).addClass("active");
        $(".product-single__description.rte ul").css("display", "block");
    }
    else{
        $(this).text("Show More");
        $(this).removeClass("active");
        $(this).addClass("initial");
        $(".product-single__description.rte ul").css("display", "none");

    }
});

// Product increasement on PDP (wholesale)

$("div[product-handle='the-body-wipe-wholesale'] input#Quantity-product-template").attr("min", "4").attr("step", "4").val("4");

$("div[product-handle='the-face-wipe-wholesale'] input#Quantity-product-template").attr("min", "4").attr("step", "4").val("4");

$("div[product-handle='the-hand-sanitizer-wholesale'] input#Quantity-product-template").attr("min", "12").attr("step", "12").val("12");
