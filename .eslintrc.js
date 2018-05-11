module.exports = {
  "extends": ["airbnb-base", "plugin:react/recommended"],
  "env": {
    "browser": true,
    "jest": true,
  },
  plugins: ["react"],
  "rules": {
    "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? 'unix' : 'windows'],
  },
};
