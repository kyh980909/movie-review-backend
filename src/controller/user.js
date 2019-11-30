import User from '../model/user';

export const getJoin = (req, res) => res.render('join');
export const Register = async (req, res) => {
  console.log(req.body);
  const { id, pw } = req.body;

  let result = {
    ok: null,
    error: null
  };

  try {
    const user = await User.create({
      id,
      pw
    });

    await User.register(id, pw);

    result = {
      ok: true,
      error: null
    };
  } catch (err) {
    console.error(err);
    result = {
      ok: false,
      error: err
    };
  }

  res.json(result);
};

export const Login = async (req, res) => {};
