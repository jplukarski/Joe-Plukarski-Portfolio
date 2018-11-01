$(document).ready(function () {

    // Navbar appears and disapears based on where user is in the window
    // __________________________________________________________________
    $('.top-container')
        .visibility({
            once: false,
            onBottomPassed: function () {
                $('.fixed.menu').transition('fade in');
            },
            onBottomPassedReverse: function () {
                $('.fixed.menu').transition('fade out');
            }
        });
    // __________________________________________________________________

    // Clicking the button in the Home section scrolls down to the about me section
    // __________________________________________________________________
    $(".introButton").click(function () {
        $('html,body').animate({
            scrollTop: $("#scrollTarget").offset().top
        }, 900);
    });
    $(".introButton").hover(function () {
        console.log("We out here")
        $("#buttonIcon").attr("class", "angle double down icon")
    },
        function () {
            $("#buttonIcon").attr("class", "angle double right icon")
        }
    )
    // __________________________________________________________________

    // Navbar Tabs highlight/unhighlight when you click them. The page also will move to the section you clicked
    // ______________________________________________________________________________________________________
    $(".navItem").click(function () {
        for (i = 0; i < this.parentElement.childElementCount; i++) {
            $(this.parentElement.children[i]).attr("class", "item navItem")
        };
        $(this).attr("class", "item active navItem")

        switch (this.id) {
            case "aboutTab":
                $('html,body').animate({ scrollTop: $("#aboutHeader").offset().top - 50 }, 500);
                break;
            case "portfolioTab":
                $('html,body').animate({ scrollTop: $("#portfolioHeader").offset().top - 50 }, 500);
                break;
            case "contactTab":
                $('html,body').animate({ scrollTop: $("#contactHeader").offset().top - 50 }, 500);
                break;
            case "homeTab":
                $('html,body').animate({ scrollTop: $(".top-container").offset().top }, 500);
                break;
        }
    })
    // ______________________________________________________________________________________________________

    // Project Image will blur and reveal "See more" button on hover. Clicking that "see more" button reveals a modal with more information on the project
    // __________________________________________________________________    
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
    })
    // __________________________________________________________________

    // Scrolling through the different sections will update the navbar
    // __________________________________________________________________
    $(window).on('scroll', function () {
        $('.target').each(function () {

            console.log("Window: " + $(window).scrollTop())
            console.log("This: " + $(this).position().top)

            if ($(window).scrollTop() >= $(this).position().top) {


                // var id = $(this).attr('id');
                // $('#nav nav a').removeClass('active');
                // $('#nav nav a[href=#' + id + ']').addClass('active');
            }
        });
    });
    // __________________________________________________________________


})