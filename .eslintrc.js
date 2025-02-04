module.exports = {
  // Geçmişte kullanılan seçenekler kaldırıldı:
  // useEslintrc: true,
  // extensions: [".js", ".ts", ".tsx"],
  
  // Diğer ayarlarınız burada olacak:
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  // ...
}; 