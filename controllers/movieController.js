import Movie from "../models/Movie.js";

export const createMovie = async (req, res) => {
  try {
    const { title, yearOfRelease, producerId, actorIds } = req.body;
    const movie = new Movie({
      title,
      yearOfRelease,
      producer: producerId,
      actors: actorIds,
    });
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find().populate("producer").populate("actors");
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const { title, yearOfRelease, producerId, actorIds } = req.body;
    const movie = await Movie.findByIdAndUpdate(
      req.params.id,
      { title, yearOfRelease, producer: producerId, actors: actorIds },
      { new: true }
    );
    res.json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: "Movie deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// export const searchOMDb = async (req, res) => {
//   const { title } = req.query;
//   const apiKey = process.env.OMDB_API_KEY;

//   try {
//     const response = await axios.get(`http://www.omdbapi.com/`, {
//       params: { apikey: apiKey, t: title },
//     });
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch movie data" });
//   }
// };
