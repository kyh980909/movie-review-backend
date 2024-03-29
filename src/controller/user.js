import User from '../model/user';
import bcrypt from 'bcrypt-nodejs';

export const Login = async (req, res) => {
  const { id, pw } = req.body;

  let result = {
    success: null,
    error: null
  };

  try {
    const checkId = await User.findOne({ id: id });
    // id check
    if (checkId) {
      //pw check
      if (bcrypt.compareSync(pw, checkId['pw'])) {
        result = {
          success: true,
          error: null
        };
      } else {
        result = {
          success: false,
          error: '비밀번호가 맞지 않습니다.'
        };
      }
    } else {
      result = {
        success: false,
        error: '아이디가 없습니다. 회원가입을 진행해주세요.'
      };
    }
  } catch (err) {
    result = {
      success: false,
      error: err
    };
  }
  res.json(result);
};

export const Register = async (req, res) => {
  const { id, pw } = req.body;
  let result = {
    success: null,
    error: null
  };

  const duplicateCheck = await User.find({ id });
  if (duplicateCheck.length !== 0) {
    result = {
      success: false,
      error: '존재하는 아이디입니다.'
    };
  } else {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hashPw = bcrypt.hashSync(pw, salt, null); // 해싱 암호화 추가
      await User({ id, pw: hashPw }).save();
      result = {
        success: true,
        error: null
      };
    } catch (err) {
      console.log(err);
      result = {
        success: false,
        error: err
      };
    }
  }

  res.json(result);
};
