import Movie from '../model/movie';

export const WriteReview = async (req, res) => {
  const { writer, title, date, ticket, score, review } = req.body;
  let result = {
    success: null,
    error: null
  };

  try {
    await Movie({ writer, title, date, ticket, score, review }).save();
    result = {
      success: true,
      error: null
    };
  } catch (err) {
    result = {
      success: false,
      error: err
    };
  }
  res.json(result);
};

export const ReviewList = async (req, res) => {
  let result = {
    success: null,
    error: null
  };

  try {
    const list = await Movie.find({}).sort({ _id: -1 });
    result = {
      success: true,
      error: null,
      result: list
    };
  } catch (err) {
    result = {
      success: false,
      error: err
    };
  }
  res.json(result);
};

export const MyMovieList = async (req, res) => {
  const writer = req.params.writer;
  let result = {
    success: null,
    error: null
  };

  try {
    const list = await Movie.find({ writer: writer }, { ticket: 1 });
    result = {
      success: true,
      error: null,
      result: list
    };
  } catch (err) {
    result = {
      success: false,
      error: err
    };
  }
  res.json(result);
};
