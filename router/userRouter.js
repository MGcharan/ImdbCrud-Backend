const express = require("express");
const Model = require("../models/userModel");
const router = express.Router();

router.post("/movies", async (req, res) => {
  const data = new Model({
    imdbID: req.body.imdbID,
    title: req.body.title,
    year: req.body.year,
    runtime: req.body.runtime,
    director: req.body.director,
    genre: req.body.genre,
    writer: req.body.writer,
    plot: req.body.plot,
    images: req.body.images,
    actors: req.body.actors,
    imdbRating: req.body.imdbRating,
    imdbID: req.body.imdbID,
  });

  try {
    const dataToSave = await data.save();
    res.status(201).json(dataToSave);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/get/movies", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/get/movies/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/movies/:id", async (req, res) => {
  try {
    const result = await Model.findByIdAndUpdate(req.params.id, req.body, 
        {
      new: true,
     });
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.delete("/movies/:id", async (req, res) => {
  try {
    const result = await Model.findByIdAndDelete(req.params.id)
    res.send("Data Deleted Sucessfully");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});






module.exports = router;
