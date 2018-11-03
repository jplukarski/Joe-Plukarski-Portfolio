$(document).ready(function () {

    // Navbar appears and disapears based on where user is in the window
    // __________________________________________________________________
    $('#top-container')
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
            scrollTop: $("#scrollTarget").offset().top - 10
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



    // Navbar Tabs highlight/unhighlight when you click and
    // ______________________________________________________________________________________________________
    $(".navItem").click(function () {
        for (i = 0; i < this.parentElement.childElementCount; i++) {
            $(this.parentElement.children[i]).attr("class", "item navItem")
        };
        $(this).attr("class", "item active navItem")

        // Old code that scrolled page to the section before hrefs were added
        // switch (this.id) {
        //     case "aboutTab":
        //         $('html,body').animate({ scrollTop: $("#aboutHeader").offset().top - 50 }, 500);
        //         break;
        //     case "portfolioTab":
        //         $('html,body').animate({ scrollTop: $("#portfolioHeader").offset().top - 50 }, 500);
        //         break;
        //     case "contactTab":
        //         $('html,body').animate({ scrollTop: $("#contactHeader").offset().top - 50 }, 500);
        //         break;
        //     case "homeTab":
        //         $('html,body').animate({ scrollTop: $(".top-container").offset().top }, 500);
        //         break;
        // }

    })
    // Cache selectors
    var lastId,
        topMenu = $("#myHeader"),
        topMenuHeight = topMenu.outerHeight() + 10,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function () {

        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            var currentSection = menuItems.filter("[href='#" + id + "']")
            console.log(currentSection)
            currentSection.parent().children().removeClass("active")
            currentSection.addClass("active");
        }
    });


    // ______________________________________________________________________________________________________

})