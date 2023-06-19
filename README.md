# Counter Block

### Description

Number animation by user interaction. Columns with numbers which are start animation 
when user scrolls to block.

### Demo

[Counter Block](https://blocks.wpd.digital/counter-block/)

### Install

- Preferable way is to use [Composer](https://getcomposer.org/):

    ````
    composer require wpd-digital/wp-block-counter
    ````

- Alternate way is to clone this repo to `wp-content/plugins/`:

    ````
    cd wp-content/plugins/
    git clone git@github.com:wpd-digital/wp-block-counter.git
    ````

Activate **Counter Block** with [WP-CLI](https://make.wordpress.org/cli/handbook/)
`wp plugin activate wp-block-counter` or from **Plugins** page.

### Documentation

Add icons with hook `wpd.block.icons` for global icons and `wpd.block-counter.icons`
for specific block set. **Example**:

```
wp.hooks.addFilter( 'wpd.block.icons', 'my-theme', () => [
	{
		value: 'smiley', // Required. If only a value is specified, Dashicons will be used.
	}, {
		value: 'counter', // Custom icon.
		icon: (
			<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
				<path d="M31.4 0H4.6C2 0 0 2 0 4.6V25.4C0 28 2 30 4.6 30H31.4C34 30 36 28 36 25.4V4.6C36 2 34 0 31.4 0ZM33 25.4C33 26.2 32.2 27 31.4 27H4.6C3.8 27 3 26.2 3 25.4V4.6C3 3.8 3.8 3 4.6 3H31.4C32.2 3 33 3.8 33 4.6V25.4Z" fill="black" />
				<path d="M4 33H32V36H4V33Z" fill="black" />
				<path d="M12.861 22.724C11.529 22.724 10.563 22.466 9.963 21.95C9.375 21.434 9.057 20.576 9.009 19.376C8.997 18.86 8.997 18.32 9.009 17.756H11.439V19.682C11.439 20.414 11.889 20.78 12.789 20.78C13.653 20.78 14.097 20.42 14.121 19.7C14.133 19.244 14.139 18.836 14.139 18.476C14.139 18.104 14.133 17.744 14.121 17.396C14.097 17.048 13.983 16.754 13.779 16.514C13.587 16.262 13.215 16.142 12.663 16.154L10.989 16.172L10.917 14.174L13.689 10.268H9.171V8.162H16.461L16.443 10.196L13.563 14.102C14.547 14.162 15.273 14.456 15.741 14.984C16.221 15.5 16.491 16.328 16.551 17.468C16.563 17.792 16.569 18.116 16.569 18.44C16.569 18.752 16.563 19.064 16.551 19.376C16.491 20.576 16.173 21.434 15.597 21.95C15.033 22.466 14.121 22.724 12.861 22.724Z" fill="black" />
				<path d="M23.4023 22.742C22.1303 22.742 21.2063 22.484 20.6303 21.968C20.0663 21.44 19.7843 20.582 19.7843 19.394C19.7843 19.226 19.7843 19.022 19.7843 18.782C19.7843 18.542 19.7903 18.314 19.8023 18.098H22.2143C22.2023 18.398 22.1903 18.686 22.1783 18.962C22.1783 19.226 22.1903 19.514 22.2143 19.826C22.2263 20.126 22.3163 20.36 22.4843 20.528C22.6643 20.696 22.9583 20.78 23.3663 20.78C24.1223 20.78 24.5123 20.45 24.5363 19.79C24.5603 19.31 24.5783 18.764 24.5903 18.152C24.6023 17.54 24.6143 16.886 24.6263 16.19H24.2303C24.0983 16.466 23.8643 16.7 23.5283 16.892C23.2043 17.072 22.8083 17.162 22.3403 17.162C21.8483 17.162 21.3863 17.06 20.9543 16.856C20.5343 16.652 20.1923 16.328 19.9283 15.884C19.6763 15.44 19.5443 14.858 19.5323 14.138C19.5323 13.442 19.5323 12.86 19.5323 12.392C19.5323 11.924 19.5383 11.576 19.5503 11.348C19.5983 10.148 19.9103 9.29 20.4863 8.774C21.0743 8.258 22.0103 8 23.2943 8C24.5903 8 25.5143 8.258 26.0663 8.774C26.6303 9.29 26.9243 10.148 26.9483 11.348C26.9723 12.452 26.9843 13.442 26.9843 14.318C26.9963 15.182 26.9963 16.016 26.9843 16.82C26.9843 17.624 26.9723 18.482 26.9483 19.394C26.9243 20.582 26.6243 21.44 26.0483 21.968C25.4843 22.484 24.6023 22.742 23.4023 22.742ZM23.2763 15.2C24.0803 15.2 24.5243 14.924 24.6083 14.372C24.5963 13.796 24.5843 13.214 24.5723 12.626C24.5603 12.038 24.5423 11.456 24.5183 10.88C24.5063 10.256 24.0923 9.944 23.2763 9.944C22.4123 9.944 21.9803 10.268 21.9803 10.916C21.9803 10.988 21.9803 11.168 21.9803 11.456C21.9803 11.744 21.9743 12.074 21.9623 12.446C21.9623 12.818 21.9623 13.172 21.9623 13.508C21.9623 13.832 21.9623 14.072 21.9623 14.228C21.9743 14.552 22.1003 14.798 22.3403 14.966C22.5923 15.122 22.9043 15.2 23.2763 15.2Z" fill="black" />
			</svg>
		),
	},
] );
```

There are more hooks in [constants](./src/constants/editor.js) which give a possibility to
customize behaviour a bit.

### Notes

[Counter-Up2](https://github.com/bfintal/Counter-Up2) library is using on frontend for
counting animation. To show and animate blocks on scroll
[Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
is used and if you need to support [older browsers](https://caniuse.com/?search=Intersection%20Observer)
then add [polyfill](https://www.npmjs.com/package/intersection-observer) additionally.
