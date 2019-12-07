// import Comment from '../model/comment';
import Movie from '../model/movie';

export const WriteComment = async (req, res) => {
  const { index, writer, comment } = req.body;
  let result = {
    success: null,
    error: null
  };
  try {
    await Movie.findOneAndUpdate(
      { _id: index },
      { $push: { comments: { writer: writer, comment: comment } } }
    ).sort({ _id: -1 });
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

export const CommentList = async (req, res) => {
  const index = req.params.id;
  let result = {
    success: null,
    error: null
  };

  try {
    const comments = await Movie.find({ _id: index }, { _id: 0, comments: 1 });
    result = {
      success: true,
      error: null,
      result: comments
    };
  } catch (err) {
    result = {
      success: false,
      error: err
    };
  }
  res.json(result);
};
