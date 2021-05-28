# Block Counter

### Description

Number animation by user interaction. Columns with numbers which are start animation 
when user scrolls to block.

### Demo

[Counter Block](https://blocks.innocode.digital/counter-block/)

### Install

- Preferable way is to use [Composer](https://getcomposer.org/):

    ````
    composer require innocode-digital/wp-block-counter
    ````

- Alternate way is to clone this repo to `wp-content/plugins/`:

    ````
    cd wp-content/plugins/
    git clone git@github.com:innocode-digital/wp-block-counter.git
    ````

Activate **Block Counter** with [WP-CLI](https://make.wordpress.org/cli/handbook/)
`wp plugin activate wp-block-counter` or from **Plugins** page.

### Documentation

There are some hooks in [constants](./src/constants.js) which give a possibility to
customize behaviour a bit.

### Notes

[Counter-Up2](https://github.com/bfintal/Counter-Up2) library is using on frontend for
counting animation. To show and animate blocks on scroll
[Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
is used and if you need to support [older browsers](https://caniuse.com/?search=Intersection%20Observer)
then add [polyfill](https://www.npmjs.com/package/intersection-observer) additionally.
