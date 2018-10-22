window.onscroll = function () { myFunction() };
function myFunction() {
    var mn = $('.myNavbar'),
        core = $('.wrapper').eq(0),
        mns = 'fixed',
        bit, hdr;

    $(window).resize(function () {

        bit = mn.outerHeight();
        hdr = $('.top-container').outerHeight();
    })
        .resize().scroll(function () {

            if ($(this).scrollTop() > hdr) {
                mn.addClass(mns);
                core.css('margin-top', bit);
            } else {
                mn.removeClass(mns);
                core.attr('style', '');
            }
        })
        .on('load', function () {

            $(this).scroll();
        });
}

document.addEventListener('DOMContentLoaded', function () {

    var mn = $('.myNavbar'),
        core = $('.band').eq(0),
        fix = core.attr('style') || '',
        mns = 'page-head-scrolled',
        bit, hdr;

    $(window).resize(function () {

        bit = mn.outerHeight();
        hdr = $('.top-container').outerHeight();
    })
        .resize().scroll(function () {

            if ($(this).scrollTop() > hdr) {
                mn.addClass(mns);
                core.css('margin-top', bit);
            } else {
                mn.removeClass(mns);
                core.attr('style', fix);
            }
        })
        .on('load', function () {

            $(this).scroll();
        });
});

$(document).ready(function () {
    $(".introButton").hover(function () {
        console.log("We out here")
        $("#buttonIcon").attr("class", "angle double down icon")
    },
        function () {
            $("#buttonIcon").attr("class", "angle double right icon")
        }
    )
})

$(document).ready(function () {
    $(".introButton").click(function () {
        $('html,body').animate({
            scrollTop: $("#myHeader").offset().top
        }, 900);
    });

})



$(document).ready(function () {
    $(".navItem").click(function () {
        for (i = 0; i < this.parentElement.childElementCount; i++) {
            $(this.parentElement.children[i]).attr("class", "item navItem")
        };
        $(this).attr("class", "item active navItem")
    })
})



$(document).ready(function () {
    $('.special.cards .image').dimmer({
        on: 'hover'
    });
    $('.skillProgress').progress();

});