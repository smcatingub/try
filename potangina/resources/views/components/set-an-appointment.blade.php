<button 
    {{ $attributes->merge([
        'type' => $attributes->get('href') ? 'button' : 'submit', 
        'onclick' => $attributes->get('href') ? "window.location.href='{$attributes->get('href')}'" : '',
        'class' => 'inline-block self-start justify-center items-center px-6 py-4 bg-prims-azure-500 border border-transparent rounded-lg font-bold text-md text-prims-yellow tracking-normal hover:text-white focus:bg-prims-azure-700 active:bg-prims-azure-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 transition ease-in-out duration-150'
    ]) }}
>
    {{ $slot }}
</button>