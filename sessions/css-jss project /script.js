const newNotifications = document.querySelector(".newNotifications");
const iconInfo = document.querySelector("#iconInfo");
const infoCards = document.querySelector("#infoCards");


iconInfo.addEventListener("click", function(){
    if (newNotifications.style.display === "block") {
        newNotifications.style.display = "none";  
    } else {
        newNotifications.style.display = "block"; 
    }

}); 


const notifications = [
    "You have a new message from John.",
    "Your order has been shipped and is on its way.",
    "A friend just liked your post.",
    "You have a new follower on Instagram.",
    "Your subscription will expire in 3 days."
];
for (let i = 0; i < notifications.length; i++) {

   newNotifications.innerHTML += `<div>${notifications[i]}</div>`;
}


const listingCards = [
    {
        id:1,
        name: "Cozy 5 Stars Apartment",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elitorem ipsum dolor sit, amet consectetur adipisici",
        price: 889,
        currency: "$",
        figure: "assets/icons/cards/location.svg",
        location: {
            city: 'Barcelona',
            country :'Spain',
        }
},
{
    id:1,
    name: "Cozy 5 Stars Apartment",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elitorem ipsum dolor sit, amet consectetur adipisici",
    price: 889,
    currency: "$",
    figure: "assets/icons/cards/location.svg",
    location: {
        city: 'Barcelona',
        country :'Spain',
    }
},
{
    id:1,
    name: "Cozy 5 Stars Apartment",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elitorem ipsum dolor sit, amet consectetur adipisici",
    price: 889,
    currency: "$",
    figure: "assets/icons/cards/location.svg",
    location: {
        city: 'Barcelona',
        country :'Spain',
    }
}];


for (let i = 0; i < listingCards.length; i++) {
    infoCards.innerHTML += `<div>
    <h3>${listingCards[i].name}</h3>
    <p class="Graytxt padding20">
    ${listingCards[i].description}
    </p>
</div>
<hr>
<div class="dFlex space-between">
    <h4>${listingCards[i].price}/night</h4>
    <div class="dFlex">
        <figure><img src="${listingCards[i].figure}" alt="location"></figure>
        <p class="Graytxt ">${listingCards[i].location.city}</p>
    </div>
</div>`;
};