// Get the location parameter from the URL
const params = new URLSearchParams(window.location.search);
const selectedLocation = params.get('location'); // Corrected variable name for clarity

// Location-specific historical figures data with image URLs
const figuresData = {
  "Philadelphia, USA": [
    { 
      name: "George Washington", 
      description: "First President of the United States.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/640px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg" // Add actual image URLs
    },
    {
        name: "Benjamin Franklin",
        description: "Founding Father, inventor, and key figure in American Enlightenment.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg/640px-Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg"
    },
    {
        name: "Thomas Jefferson",
        description: "Author of the Declaration of Independence and third U.S. President.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29.jpg/640px-Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29.jpg"
    },
    {
        name: "John Adams",
        description: "Founding Father, first Vice President, and second U.S. President.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Gilbert_Stuart%2C_John_Adams%2C_c._1800-1815%2C_NGA_42933.jpg/640px-Gilbert_Stuart%2C_John_Adams%2C_c._1800-1815%2C_NGA_42933.jpg"
    }  
  ],
  "Paris, France": [
    { 
        name: "Voltaire",
        description: "Philosopher and writer, key figure of the Enlightenment.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Nicolas_de_Largilli%C3%A8re_-_Portrait_de_Voltaire_%281694-1778%29_en_1718_-_P208_-_Mus%C3%A9e_Carnavalet_-_2.jpg/640px-Nicolas_de_Largilli%C3%A8re_-_Portrait_de_Voltaire_%281694-1778%29_en_1718_-_P208_-_Mus%C3%A9e_Carnavalet_-_2.jpg"
    },
    {
        name: "Jean-Jacques Rousseau",
        description: "Philosopher, his work influenced the French Revolution.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Jean-Jacques_Rousseau_%28painted_portrait%29.jpg/640px-Jean-Jacques_Rousseau_%28painted_portrait%29.jpg"
    },
    {
        name: "Marie Antoinette",
        description: "Queen of France, symbol of the monarchy before the French Revolution.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Louise_Elisabeth_Vig%C3%A9e-Lebrun_-_Marie-Antoinette_dit_%C2%AB_%C3%A0_la_Rose_%C2%BB_-_Google_Art_Project.jpg/640px-Louise_Elisabeth_Vig%C3%A9e-Lebrun_-_Marie-Antoinette_dit_%C2%AB_%C3%A0_la_Rose_%C2%BB_-_Google_Art_Project.jpg"
    },
    {
        name: "Denis Diderot",
        description: "Founding Father, first Vice President, and second U.S. President.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Denis_Diderot_by_Louis-Michel_van_Loo.jpg/640px-Denis_Diderot_by_Louis-Michel_van_Loo.jpg"
    }  
  ],
  "Vienna, Austria": [
    { 
        name: "Wolfgang Amadeus Mozart",
        description: "Legendary composer who revolutionized Western classical music.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Wolfgang-amadeus-mozart_1.jpg/640px-Wolfgang-amadeus-mozart_1.jpg"
    },
    {
        name: "Joseph II",
        description: "Holy Roman Emperor, known for his enlightened reforms.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/02021_0022_%283%29_Joseph_II._%28HRR%29%2C_Muzeum_%C5%9Al%C4%85ska_Cieszy%C5%84skiego.jpg/640px-02021_0022_%283%29_Joseph_II._%28HRR%29%2C_Muzeum_%C5%9Al%C4%85ska_Cieszy%C5%84skiego.jpg"
    },
    {
        name: "Maria Theresa",
        description: "Empress of Austria and mother of many European monarchs, reformist ruler.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Maria_Theresa_of_Austria_In_widow_costume%2C_drawing.png/640px-Maria_Theresa_of_Austria_In_widow_costume%2C_drawing.png"
    },
    {
        name: "Leopold II",
        description: "Holy Roman Emperor and ruler of Austria, known for his policies in Italy and Central Europe.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Denis_Diderot_by_Louis-Michel_van_Loo.jpg/640px-Denis_Diderot_by_Louis-Michel_van_Loo.jpg"
    }  
  ],
  
};

// DOM elements for location name and historical figures list
const locationName = document.getElementById('location-name');
const figuresList = document.getElementById('figures-list');

// Display the data for the selected location
if (figuresData[selectedLocation]) {
  // Show the location name
  locationName.innerHTML = `<h2>Historical Figures in ${selectedLocation}</h2>`;
  
  // Populate the historical figures with images
  figuresList.innerHTML = figuresData[selectedLocation]
    .map(figure => `
      <div class="figure">
        <h3>${figure.name}</h3>
        <img src="${figure.image}" alt="${figure.name}" style="width: 150px; height: auto;"/>
        <p>${figure.description}</p>
      </div>
    `).join('');
} else {
  // Fallback for unsupported locations
  locationName.innerHTML = `<h2>No data available for this location</h2>`;
}

// Go back to the main map page
function goBack() {
  window.location.href = 'index.html'; // Replace with your actual main page
}
