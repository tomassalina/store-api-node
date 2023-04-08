const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/');

const router = express.Router();

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      console.log(user);

      const payload = {
        sub: user.dataValues.id,
        role: user.dataValues.role,
      };
      const token = jwt.sign(payload, config.apiSecret);

      res.json({ user, token });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
