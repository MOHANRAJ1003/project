const touristPlaces = [
    // Hotels
    { name: "The Leela Palace", type: "hotel", url: "hotel.html" },
    { name: "Taj Coromandel", type: "hotel", url: "hotel.html" },
    { name: "Radisson Blu Resort Temple Bay", type: "hotel", url: "hotel.html" },
    { name: "Vivanta", type: "hotel", url: "hotel.html" },
    { name: "ITC Grand Chola", type: "hotel", url: "hotel.html" },

    // Malls
    { name: "Vishal de Mall", type: "mall", url: "shoppingmall.html" },
    { name: "Express Avenue Mall", type: "mall", url: "shoppingmall.html" },
    { name: "Fun City Mall", type: "mall", url: "shoppingmall.html" },
    { name: "Nexus Vijaya Mall", type: "mall", url: "shoppingmall.html" },
    { name: "Marina Mall", type: "mall", url: "shoppingmall.html" },
    { name: "Phoenix Market City", type: "mall", url: "shoppingmall.html" },
    { name: "Mall", type: "mall", url: "shoppingmall.html" },
    { name: "Shopping Mall", type: "mall", url: "shoppingmall.html" },

    // Water Parks
    { name: "Wonderla Amusement Park", type: "waterpark", url: "waterpark.html" },
    { name: "Aqua Kingdom", type: "waterpark", url: "waterpark.html" },
    { name: "Kovai Kondattam", type: "waterpark", url: "waterpark.html" },
    { name: "Queens Land", type: "waterpark", url: "waterpark.html" },
    { name: "VGP Universal Kingdom", type: "waterpark", url: "waterpark.html" },
    { name: "Kishkinta Theme Park", type: "waterpark", url: "waterpark.html" },
    { name: "Black Thunder", type: "waterpark", url: "waterpark.html" },
    { name: "Water Park", type: "waterpark", url: "waterpark.html" },

    // Religious Places
    { name: "Nagore Dargah", type: "religious", url: "religiousplace.html" },
    { name: "Vellore Golden Temple", type: "religious", url: "religiousplace.html" },
    { name: "Kapaleeshwarar Temple", type: "religious", url: "religiousplace.html" },
    { name: "Velankanni Church", type: "religious", url: "religiousplace.html" },
    { name: "Ramanathaswamy Temple", type: "religious", url: "religiousplace.html" },
    { name: "Brihadeeswarar Temple", type: "religious", url: "religiousplace.html" },
    { name: "Meenakshi Amman Temple", type: "religious", url: "religiousplace.html" },
    { name: "Temple", type: "religious", url: "religiousplace.html" },
    { name: "Religious", type: "religious", url: "religiousplace.html" },

    // Additional Entries
    { name: "Hotel", type: "hotel", url: "hotel.html" },
    { name: "Mall", type: "mall", url: "shoppingmall.html" },
    { name: "Shopping Mall", type: "mall", url: "shoppingmall.html" },
    { name: "Water Park", type: "waterpark", url: "waterpark.html" },
];

function searchTouristPlace(query) {
    query = query.toLowerCase();
    
    // Find all matching results
    const results = touristPlaces.filter(item => item.name.toLowerCase().includes(query));
    
    if (results.length === 1) {
        // If exactly one result, redirect to that URL
        window.location.href = results[0].url;
    } else if (results.length > 1) {
        // If multiple results, redirect based on specific logic
        const uniqueTypes = new Set(results.map(item => item.type));
        
        if (uniqueTypes.size === 1) {
            // If all results are of the same type, redirect to the corresponding page
            window.location.href = results[0].url;
        } else {
            console.log("Multiple matches found:", results.map(item => item.name));
            // Optionally display the results in a dropdown or alert
        }
    } else {
        console.log("No matching place found.");
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {  // Check if Enter key is pressed
        event.preventDefault();  // Prevent form from submitting the default way
        handleSubmit();  // Trigger the submit action
    }
}

function handleSubmit() {
    const query = document.getElementById('search-input').value;
    searchTouristPlace(query);
}

// Attach the keypress event listener to the form's input field
document.getElementById('search-input').addEventListener('keypress', handleKeyPress);

// Attach the form submit event listener (if you have a form element)
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the default way
    handleSubmit();  // Trigger the search function
});
