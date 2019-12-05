import Movie from '../model/movie';

export const WriteReview = async (req, res) => {
  const { writer, review, image, star } = req.body;
  let result = {
    success: null,
    error: null
  };

  try {
    await Movie({ writer, review, image, star }).save();
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
