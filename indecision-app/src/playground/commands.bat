## start
cd react-course-projects\indecision-app

# Babel translation
babel src\playground\es6-arrow-functions-2.js --out-file=public\scripts\app.js --presets=env,react --watch
babel src\app.js --out-file=public\scripts\app.js --presets=env,react --watch

# Run local server
live-server public

# Yarn commands
yarn run build
yarn run serve

# add a Yarn dependency with specific version
yarn add webpack@3.1.0