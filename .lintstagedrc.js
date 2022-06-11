module.exports = {
  '**/*.+(js|ts|jsx|tsx|cjs)': ['eslint --fix', 'prettier --write'],
  '**/*.+(json|css|scss|html|md|yml)': ['prettier --write'],
};
