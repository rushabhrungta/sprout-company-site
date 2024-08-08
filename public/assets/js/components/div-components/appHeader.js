var appHeader = `
<header>
<div class="strip-div background-white">
        <div class="app-header strip-div-display background-white">
           <a href="./index.html"><img src="./assets/images/logo-dark.svg" alt="sprout-logo"></a> 
             <div class="nav-menu">
    <nav id="nav">
        <ul>
            <li><a href="./about.html">About</a></li>
            <li><a href="./contact.html">Contact</a></li>
            <li><a href="https://web-id-cdn.b-cdn.net/sprout-business-deck-final.pdf" target="_blank">Services</a></li>
        </ul>
        <button class="close-button-nav-menu" id="close-button"><i class="fa-solid fa-x"></i></button>
    </nav>
    <div class="menu-toggle" id="menu-toggle">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
    <div class="overlay" id="overlay"></div>
</div>
        </div>
       
       
</div>
</header>
`
$('#appHeader').html(appHeader);

    $('#menu-toggle').click(function () {
        $('#nav').toggleClass('active');
        $('#overlay').toggleClass('active');
        $('.close-button-nav-menu').toggle(); // Toggle close button visibility
    });
    
    $('.close-button-nav-menu').click(function () {
        $('#nav').removeClass('active');
        $('#overlay').removeClass('active');
        $(this).hide(); // Hide the close button
    });
    
    $('#overlay').click(function () {
        $('#nav').removeClass('active');
        $('#overlay').removeClass('active');
        $('.close-button-nav-menu').hide(); // Hide the close button
    });


