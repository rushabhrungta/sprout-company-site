const useCaseHomeDiv = `<div class="strip-div">
        <div class="strip-div-display use-cases-home grid-2">
            <div class="use-cases-home-sub ubhs-content">
                <h1>Some Of Our<br>cases</h1>
                <h4>we have worked on some amazing projects and products here are just a few of the examples of our work
                </h4>
            </div>
            <div class="use-cases-home-sub ubhs-tabs">
                <div class="ubhs-tabs-buttons" id="ubhs-tabs-buttons"></div>
                <div class="card-2" id="card-2-data-update">
                    <img src="./assets/images/diahc-t.jpg" alt="">
                    <div class="card-2-content">
                        <div class="card-2-tags">
                            <h6>Digital Transformation Product Design Product Development</h6>
                        </div>
                        <div class="card-2-title">
                            <h3>DIAHC</h3>
                        </div>
                        <div class="card-2-description">
                            <h5>Team sprout is helping DIAHC to move into the digital age by completely redesigning
                                their business processes that allow them to seamlessly run activities via web and app
                                mediums.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`





const tabButtons = [{
    tabName: 'diahc_tab',
    tabDisplay: 'DIAHC'
},
{
    tabName: 'gulf_news_tab',
    tabDisplay: 'Gulf News'
},
{
    tabName: 'flowgiga_tab',
    tabDisplay: 'Flowgiga'
}];

const tabCards = [{
    tcTitle: 'DIAHC',
    tcDescription: 'Team sprout is helping DIAHC to move into the digital age by completely redesigning their business processes that allow them to seamlessly run activities via web and app mediums.',
    tcName: 'diahc_tab',
    tcImage: '././assets/images/diahc-t.jpg',
    tcChips: 'Digital Transformation Product Design Product Development'
},
{
    tcTitle: 'Gulf News',
    tcDescription: '"Web 3 Decoded," a pioneering event by Gulf News in the field of blockchain and Web 3 technologies, faced several critical challenges in its digital strategy. Firstly, there is a need to create an engaging and user-friendly event landing page that effectively communicates event details, encourages participation, and aligns with modern design and responsiveness standards. Secondly, the event organizers aim to harness cutting-edge Web 3 technology to implement a secure, transparent, and scalable ticketing system, ensuring a seamless experience for event attendees while embracing blockchain innovation. This projects primary objective was to overcome these challenges and successfully launch a compelling event landing page and a robust Web 3-powered ticketing system, enhancing user engagement and satisfaction, and ultimately driving the success of "Web 3 Decoded" in the digital era.',
    tcName: 'gulf_news_tab',
    tcImage: '././assets/images/gulf-t.jpg',
    tcChips: 'Product Design Product Development UI/UX Design'
},
{
    tcTitle: 'Saas Based Cross-Platform VOD Solution',
    tcDescription: 'In the height of the global pandemic recently suffered, the content and entertainment industry suffered the most, with creators of all levels not being able to release their content to the world in a priminum manner added with the natural challenge of digital content management.',
    tcName: 'flowgiga_tab',
    tcImage: '././assets/images/flowgiga.jpg',
    tcChips: 'Product Design, Product Development, UI/UX Design'
}
]

function renderTabs() {
    const $container = $('#ubhs-tabs-buttons');

    // Clear any existing buttons to avoid duplicates
    $container.empty();
    tabButtons.forEach((tab) => {
        const $button = $('<button>')
            .addClass('button-17')
            .addClass('button-17-margin-4px') 
            .addClass('tab-select')
            .attr('id', tab.tabName)  // Set the ID of the button
            .text(tab.tabDisplay);
        $container.append($button);
    });

};

function displaySelectedTab(tcName) {
    const $container = $('#card-2-data-update');
    

    $container.empty();
    const tabObject = tabCards.find(tab => tab.tcName === tcName);
    const card2Data = `
   <img src="${tabObject.tcImage}" alt="${tabObject.tcName}">
                    <div class="card-2-content">
                        <div class="card-2-tags"><h6>${tabObject.tcChips}</h6></div>
                        <div class="card-2-title"><h3>${tabObject.tcTitle}</h3></div>
                        <div class="card-2-description"><h5>${tabObject.tcDescription}</h5></div>
                    </div>`

    $container.html(card2Data);

}

// $('.tab-select').click(function () {
//     displaySelectedTab(this.id);
//    });