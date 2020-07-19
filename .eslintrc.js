/*
 * @Description: 
 * @Author: yilingsj（315800015@qq.com）
 * @Date: 2020-07-19 13:02:15
 * @LastEditors: yilingsj（315800015@qq.com）
 * @LastEditTime: 2020-07-19 15:15:58
 * @FilePath: \vue-cli3-github\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'space-before-function-paren': 0, // 括号前0空格
  }
}
