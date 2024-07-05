## How to run in your local machine

1. Clone the repository
2. Make sure you have `Node.js 18.17` installed
3. Make sure you have `yarn` installed
4. Duplicate `.env.example` file into `.env` and make changes accordingly
5. Run `yarn` or `yarn install` in project directory to install all the dependencies
6. Run `yarn husky`
7. Run `yarn dev` to start the website in your local machine with development mode or run `yarn build` then `yarn start` to start the website in your local machine with production mode

### Note:

There are git hooks installed that will run `prettier --check` and `next lint` to check your code before comitting.

If your code does not pass the prettier check run `yarn prettier:format` to fix it.

If your code does not pass the ESlint check(`next lint`), read the errors carefully and fix the code
(_this is going to be a real pain_)

It will also run `next build` before pushing. **If your has any error, It will not pass `next build` therefore your code will not be pushed.**
