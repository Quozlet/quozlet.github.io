module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
            content: ['./*.html', './*.css']
        }),
        require('cssnano')({ preset: 'default' })
    ]
};