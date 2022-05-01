const Users = require("../models/userModel");

const userCtrl = {
  rigister: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const user = await Users.findOne({ email });
      if (user)
        return res.status(400).json({ msg: "The email is already exists." });
      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password must be at least 6 charecters or more." });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = userCtrl;
