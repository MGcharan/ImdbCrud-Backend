const mongoose=require("mongoose");

const dataSchema=new mongoose.Schema({
    imdbID: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    runtime: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    writer: {
        type: String,
        required: true,
    },
    plot: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    actors: {
        type: [String],
        required: true,
    },
    imdbRating: {
        type: Number,
        required: true,
    },
});

module.exports=mongoose.model("movie",dataSchema);