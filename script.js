const tabsData = {
    Patio: {
        amenitie: [
            { name: "Mandir", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/mandir.png" },
            { name: "Kids' Play Area", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/playtime.png" },
            { name: "Jogging Track", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/jogging.png" },
            { name: "Yoga Deck", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/buddhist-yoga-pose.png" },
            { name: "Natural Water Body", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/pond.png" },
            { name: "Elevated Walking Area", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/walking-man.png" },
            { name: "Adda Zone", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/target.png" },
            { name: "Fishing Deck", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/fishing.png" }
        ],

    },
    Azura: {
        amenitie: [
            { name: "Swimming Pool & Kids Pool", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/swimming-pool1.png" },
            { name: "AC Community Hall with Party Lawn", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/hall1.png" },
            { name: "Indoor Games Room", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/console.png" },
            { name: "Badminton Court", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/tennis-racket.png" },
            { name: "Theatre Room", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/audience.png" },
            { name: "Landscaped Deck Zone with Cabana", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/beach-cabana.png" },
            { name: "Yoga & Zumba Room", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/buddhist-yoga-pose.png" },
            { name: "Library & Cards Room", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/open-book.png" }
        ]
    },
    Panorama: {
        amenitie: [
            { name: "Skydeck - 320ft above the ground level", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/twin-towers.png" },
            { name: "Barbeque Zone", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/barbeque.png" }, // Fixed incorrect extension
            { name: "Outdoor Gym", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/dumbbell.png" },
            { name: "Telescope Deck", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/telescope.png" },
            { name: "Elders' Adda Zone", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/couple.png" },
            { name: "Star Gazing Area", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/moon-gazing.png" },
            { name: "Open Lounge", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/lounge.png" },
            { name: "Foot Reflexology Walk", image: "https://cellesta.in/wp-content/themes/cellesta-theme/img/reflexology.png" }
        ]
    }
}


// console.log(tabsData);

function loadAmenities(tabId, data) {
    const container = document.getElementById(tabId + "Amenities");
    container.innerHTML = "";
    
    let rows = "<table class='table table-bordered text-center'><tbody>";
    
    for (let i = 0; i < 2; i++) {
        rows += "<tr>";
        for (let j = 0; j < 4; j++) {
            let amenity = data.amenitie[i * 4 + j];
            if (amenity) {
                rows += `
                    <td>
                        <img src="${amenity.image}" alt="${amenity.name}" class="amenity-img">
                        <p class="amenity-text">${amenity.name}</p>
                    </td>
                `;
            } else {
                rows += `<td></td>`; 
            }
        }
        rows += "</tr>";
    }

    rows += "</tbody></table>";
    container.innerHTML = rows;
}


document.addEventListener("DOMContentLoaded", () => {
    loadAmenities("patio", tabsData.Patio);
    loadAmenities("azura", tabsData.Azura);
    loadAmenities("panorama", tabsData.Panorama);
});
