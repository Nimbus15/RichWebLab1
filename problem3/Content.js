//array of images
let catsImages = [
    "https://tse1.mm.bing.net/th?id=OIP.274l01-Gz32O9Myxtf_b-wHaIN&pid=Api&P=0",
    "https://e3.365dm.com/21/03/768x432/skynews-cats-missing-microchip_5315182.jpg?20210323142004",
    "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc3836660-7846-11eb-80c3-8cc375faed89.jpg?crop=5729%2C3222%2C187%2C805&resize=1200",
    "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/petting_pet_cat-1296x728-header.jpg?w=1155&h=1528",
    "https://tse1.mm.bing.net/th?id=OIP.sKmrqPBanMMYbI0saSPJ_wHaE4&pid=Api&P=0",
    "https://tse2.mm.bing.net/th?id=OIP.rqnf74z72xrbUAhVLPelsgHaEK&pid=Api&P=0",
    "https://tse4.mm.bing.net/th?id=OIP.7OznKDG9qyo1gAztHlURCAHaFj&pid=Api&P=0"
];

let coolLinks = [
    "https://wiki.wargaming.net/en/Ship:Ships_of_U.S.A.",
    "https://wiki.wargaming.net/en/Ship:Indianapolis",
    "https://wiki.wargaming.net/en/Ship:Alaska"
]

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * catsImages.length)
    imgs[i].src = catsImages[randomImg]
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Cats are awesome.";
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "This website is now about cats.";
}

// This will note of all the h2s in the page 
const h2 = document.getElementsByTagName("h2");
for (let i = 0; i < h2.length; i++){
    h2[i].innerText = "Cats and Warships have taken control of your page.";
}

// Changes the colour of the h2s to random colours
function randomColour() {
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
        console.log("random colour is " + colour)
    }
    return colour;
}

//Changes the colour of the h2s to random colours
for (let i = 0; i < h2.length; i++){
    h2[i].style.color = randomColour()
}


const h4 = document.getElementsByTagName("h4");
for (let i = 0; i < h4.length; i++){
    h4[i].innerText = "Rich Web is the best class ever.";
}

const links = document.getElementsByTagName("link");
for (let i = 0; i < links.length; i++){
    const randomLink = Math.floor(Math.random() * coolLinks.length)
    links[i].href = coolLinks[randomLink]
}



const article = document.getElementById("article");
for (let i = 0; i < article.length; i++){
    article[i].innerText = "The is an article id here!!!";
}


const scripts = document.scripts;
for (let i = 0; i < scripts.length; i++){
    scripts[i].innerText = "There is a scripts everywhere!!!!";
}

// const audio = document.createElement('audio');

// function playAudio() {
//     audio.play();
// }

// function pauseAudio() {
//     audio.pause();
// }
