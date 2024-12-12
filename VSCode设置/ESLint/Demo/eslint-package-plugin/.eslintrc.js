module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  "ignorePatterns": [".eslintrc.js"],  // 忽略eslintrc.js文件的检测
  'rules': {
    'indent': ['error', 5],  // 缩进为5个空格
    'quotes': ['error', 'single'],
    'semi': ['error', 'always']
  }
};
 