const journeyHtml =`<div class="strip-div background-white journey  mg-b-2vh-d">
        <div class="strip-div-display">
            <div class="journey-head strip-div-sub-title">
                <h1>Journey So Far</h1>
                <h4>Some of our key milestones, that we have reached achieved in our terms of business.</h4>
            </div>
            <div class="journey-content" id="journeyId">
            </div>
        </div>
    </div>`

    const journeyData = [{
        cardText: '2021 Year Of Inception',
        cardImage: './assets/images/journey-icons/1.webp'
    },{
        cardText: '10+ active clients',
        cardImage: './assets/images/journey-icons/2.webp'
    },{
        cardText: '500,000+ Unique User',
        cardImage: './assets/images/journey-icons/3.webp'
    },{
        cardText: '3 Locations India, UAE & Aus',
        cardImage: './assets/images/journey-icons/4.webp'
    }];

    function displayJourneyCards(){
        journeyData.forEach((card)=>{
            const journeyCards = `
            <div class="card-3">
                    <img src="${card.cardImage}">
                    <p>${card.cardText}</p>
                </div> `
            $('#journeyId').append(journeyCards);    
        })
        
    }