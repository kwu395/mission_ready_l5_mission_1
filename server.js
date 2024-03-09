const fs = require("fs/promises");
const express = require('express');
const cors = require("cors");
const CarValue = require('./api');

const app = express();

app.use(express.json());

app.post("/api/carmodel", (req, res) => {
    // GET model and year from POST request
    const model = req.body.model; 
    const year = req.body.year;
    // Return error message if model or year is undefined
    if (!model || !year) {
        return res.sendStatus(400).json({ error: "Model and year are requried."});
    }
    try {
        // Calculate car value
        const carValue = CarValue(model, year);
        // Send 201 status and car value in JSON format
        if (carValue != "there is an error") {
            return res.status(201).json({ car_value: carValue });
        } else {
            return res.status(400).json({ error: carValue });
        }
    } catch (error) {
        // Catch errors
        console.error("Error calculating car value:", error);
        // Send 500 status with error message
        return res.status(500).json({ error: "error" });
    }
});


app.listen(4000, () => console.log("API Server is running..."));