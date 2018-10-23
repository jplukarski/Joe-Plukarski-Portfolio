// Start code to stick navbar when its scrolled to the top by either scrolling or clicking the button, and make the intial window that color fade thing
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
    $(".introButton").click(function () {
        $('html,body').animate({
            scrollTop: $("#myHeader").offset().top
        }, 900);
    });

})

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
// End page intoduction code


// Start code to update tab highlightin navbar on click
$(document).ready(function () {
    $(".navItem").click(function () {
        for (i = 0; i < this.parentElement.childElementCount; i++) {
            $(this.parentElement.children[i]).attr("class", "item navItem")
        };
        $(this).attr("class", "item active navItem")
    })
})
// Start code to update tab highlightin navbar on click



$(document).ready(function () {
    $('.special.cards .image').dimmer({
        on: 'hover'
    });

    $('.skillProgress').progress();


    $('.projectImage .image').dimmer({
        on: 'hover'
    });

    $(".portfolioButton").click(function () {
        console.log(this.id)

        switch (this.id) {
            case "virtualHostel":
                $('#virtualHostelModel')
                    .modal('setting', 'transition', "vertical flip")
                    .modal('show');
                break;
            case "campaignQuery":
                $('#campaignQueryModel')
                    .modal('setting', 'transition', "vertical flip")
                    .modal('show');
                break;
            case "nprScraper":
                $('#nprScraperModel')
                    .modal('setting', 'transition', "vertical flip")
                    .modal('show');
                break;
            case "dessertGif":
                $('#dessertGifModel')
                    .modal('setting', 'transition', "vertical flip")
                    .modal('show');
                break;
            case "friendFinder":
                $('#friendFinderModel')
                    .modal('setting', 'transition', "vertical flip")
                    .modal('show');
                break;
            case "rateIt":
                $('#rateItModel')
                    .modal('setting', 'transition', "vertical flip")
                    .modal('show');
                break;

        }

        // if (this.id === "virtualHostel") {
        // } 

    })

});