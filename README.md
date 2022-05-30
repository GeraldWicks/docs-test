# Steps to add husky

npm i husky -D --save

npx husky-init

npm set-script prepare "husky install"

<!-- npx typedoc src/* --out docs -->

npx husky add .husky/pre-commit "git add docs"
npx husky add .husky/pre-commit "git commit -m 'docs: update by husky' --no-verify"
git add .husky/pre-commit

For more information checkout https://github.com/GeraldWicks/docs-test.git
