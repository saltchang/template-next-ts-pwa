module.exports = {
  '**/*.+(js|ts|jsx|tsx|cjs)': ['eslint --fix', 'prettier --write', 'git add'],
  '**/*.+(json|css|scss|html|md|yml)': ['prettier --write', 'git add'],
};
