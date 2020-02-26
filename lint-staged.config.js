module.exports = {
    'src/**/*.{ts?(x),js?(x)}': ['eslint --fix', 'jest --bail --findRelatedTests'],
    'src/**/*.*': function rebuildDist() {
        return ['echo "Rebuilding dist"', 'rm -r dist', 'yarn build', 'git add dist'];
    },
};
