const bcrypt = require('bcrypt');

const verifyPassword = async (password, hash) => {
  const isMatch = await bcrypt.compare(password, hash);
  console.log(isMatch);
};

verifyPassword(
  'Salina.Tomas.com',
  '$2b$10$mL0Kyg8fgXo/NB3mQ.9pvu8PtGVrwgdMfjQgWrXRSjc8aOQcXsytq'
);
