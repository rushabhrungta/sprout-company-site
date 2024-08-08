const wuCardData = [
  {
    title: "Agile",
    description: "We operate based on agile methodologies. This enables us to deliver development processes that are smooth and efficient. Our approach emphasizes transparency, open communication, and collaboration, all aimed at creating top-notch products that meet your specific requirements.",
    imageUrl: "./assets/images/why-icons/1.webp"
  },
  {
    title: "Modern Tech Stack",
    description: "We specialize in modern tech stack solutions, focusing on Python and Javascript. Our teams stay updated on industry standards and have extensive experience with JS & Python frameworks. We deploy NoSql DBs and use a serverless microservices architecture to create scalable, responsive, enterprise-grade solutions.",
    imageUrl: "./assets/images/why-icons/2.webp"
  },
  {
    title: "Experienced designer",
    description: "Sprout's designers collaborate closely with the development team to craft user interfaces that are both visually stunning and functional. Our approach centers on the user, ensuring that the design of your product aligns seamlessly with your business objectives, brand identity, and target audience.",
    imageUrl: "./assets/images/why-icons/3.webp"
  },
  {
    title: "Complex Approach",
    description: "We bring together skilled experts in development, design, QA, and project management to guide you through every stage of product creation. We collaborate closely with you to create a product that meets your specific needs and goals.",
    imageUrl: "./assets/images/why-icons/4.webp"
  },
  {
    title: "Project Kickoff",
    description: "Our two decade plus of experience within the core team, allows us to start and build projects fast. We follow a streamlined development process that ensures that we create new products and integrate seamlessly into your existing business processes.",
    imageUrl: "./assets/images/why-icons/5.webp"
  },
  {
    title: "Optimized Processes",
    description: "We make sure to create good products while also saving time and money. We use the latest tools and keep track of the time we spend working. You only pay for the time we actually spend working on your project.",
    imageUrl: "./assets/images/why-icons/6.webp"
  },
  {
    title: "Innovation consulting",
    description: "As a core principle of our business we make it a point to proactively consult our clients on their technology and innovation projects, to ensure that the right and the most cost effective product or solution is delivered to the client.",
    imageUrl: "./assets/images/why-icons/7.webp"
  }
];
const whyUsRender = `
  <div class="strip-div background-white">
        <div class="strip-div-display background-white">
            <div class="why-us-header">
                <h1>Why<br>US?</h1>
                <h5>Sprout is a company that specializes in product development, offering in-house services and products. Our core team possesses over 21 years of experience in creating digital products from the ground up and reviving existing ones. We have successfully delivered projects for over 3 years in India,GCC and Australia.</h5>
            </div>
            <div class="why-us-content">
                <div class="why-us-content-sub grid-2" id="why-us-cards-container">  
            </div>
            <div class="why-us-content-sub wucs-background"></div>
            </div>
        </div>
    </div>`
// Function to render cards
function renderCardsWu() {
  // Loop through the data and create HTML for each card
  wuCardData.forEach(card => {
    const whyUsCardHtml = `
        <div class="card-1">
                    <img src="${card.imageUrl}" alt="${card.title}">
                    <h3>${card.title}</h3>
                    <p>${card.description}</p>
                </div>
      `;

    // Append the card HTML to the container
    $('#why-us-cards-container').append(whyUsCardHtml);
  });
}




