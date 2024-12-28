import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                nunito: ['Nunito', 'sans-serif'],
            },
            colors: {
                'prims-yellow': {
                    1: '#F4BF4F',
                    2: '#ECBA51',
                    3: '#E7B54D',
                    4: '#E1AD40',
                },
                'prims-azure': {
                    100: '#A1C2D9',  // Lighter shade
                    200: '#6F9FBB',  // Lighter
                    300: '#4A8AA3',  // Medium light
                    400: '#2C7491',  // Base color
                    500: '#183A66',  // Base color (your original)
                    600: '#132C53',  // Darker shade
                    700: '#0E1F40',  // Darker
                    800: '#091535',  // Even darker
                    900: '#050F2A',  // Darkest
                },
            }
        },
    },

    plugins: [forms, typography],
};
