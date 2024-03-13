// This function takes the model and year of the car and returns the car value.
function CarValue(model, year) {
    // Initialize Car_value
    let Car_value = 0;
    const upperModel = model.toUpperCase();

    if (year <= 0 || typeof model !== 'string') { // First checks if year is negative or model isn't type string 
        return "there is an error"; 
    }
    else if (!isNaN(model)) { // If model is a string of numbers, return just the year as Car_value
        return year;
    }
    else { 
        for (let i = 0; i < upperModel.length; i++) {
            const letter = upperModel[i];
            Car_value += letter.charCodeAt(0) - 64; // Converts letter to number
        }
        return Car_value * 100 + year; // Returns Car_value
    }
}

module.exports = CarValue;
