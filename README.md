## Set up
* make sure you're running on `node v12.18.4`, `npm 4.16.4`
  * `start` and `build` script validates these versions before going in
* `npm i`
* local dev setup: `npm run start`
* `npm run lint` for lint + fix (see configuration in .eslintrc.json)
  * if using vscode, use eslint extension (Baeumer) for real time linting
  * code goes through linter before `start` and `build` as well
## Deployment
* building: `npm run build`