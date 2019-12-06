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
    const list = await Movie.find({});
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
