module.exports = {
    singleQuote: true,
    semi: true,
    printWidth: 150,
    tabWidth: 4,
    "overrides": [
        {
          "files": ["*.hbs", "*.handlebars"],
          "options": {
            "parser": "html"
          }
        }
    ]
};
