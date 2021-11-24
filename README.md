# &lt;Progress&gt;&lt;Progress&gt;
A custom progress bar featuring support for stacked bars, animated backgrounds, text labels, and horizontal/vertical orientation.

## Preview

```jsx
<Progress theme='primary' size='lg' gradient={true} outlined={true} >
    <ProgressBar min={0} max={100} value={30} progressBarStyle={['striped', 'running']} />
</Progress>
```
Rendered to:
```html
<div class="c1 thPrimary szLg gradient outlined">
    // ...
</div>
```

## Features
* Includes all features in [`<Basic />`](https://www.npmjs.com/package/@nodestrap/basic).
* `stripped` variant. Visualized in alternating background.
* `running` variant. Visualized in animating background.
* `horizontal`/`vertical` orientation.
* Customizable via [`@cssfn/css-config`](https://www.npmjs.com/package/@cssfn/css-config).

## Installation

Using npm:
```
npm i @nodestrap/progress
```

## Support Us

If you feel our lib is useful for your projects,  
please make a donation to avoid our project from extinction.

We always maintain our projects as long as we're still alive.

[[Make a donation](https://ko-fi.com/heymarco)]
