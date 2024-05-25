module.exports = {
  disableEmoji: true,
  rules: {
    "type-enum": [
      2,
      "always",
      [
        'test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf', 'wip'
      ]
    ],
    "type-case": [
      2,
      "always",
      "lower-case"
    ],
    "type-empty": [
      2,
      "never"
    ],
    "type-max-length": [
      2,
      "always",
      60
    ],
    "scope-case": [
      2,
      "always",
      "lower-case"
    ],
    "subject-case": [
      2,
      "always",
      "lower-case"
    ],
    "subject-empty": [
      2,
      "never"
    ],
    "subject-max-length": [
      2,
      "always",
      60
    ],
  },
};
