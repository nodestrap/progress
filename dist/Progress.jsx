// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
import { 
// compositions:
composition, mainComposition, imports, 
// layouts:
layout, vars, children, 
// rules:
variants, states, rule, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssVar, } from '@cssfn/css-var'; // Declares & retrieves *css variables* (css custom properties).
import { createCssConfig, 
// utilities:
usesGeneralProps, usesPrefixedProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap utilities:
import colors from '@nodestrap/colors'; // configurable colors & theming defs
import spacers from '@nodestrap/spacers'; // configurable spaces defs
import { 
// utilities:
isTypeOf, parseNumber, } from '@nodestrap/utilities';
// nodestrap components:
import { 
// react components:
Element, } from '@nodestrap/element';
import { 
// hooks:
usesSizeVariant, defaultInlineOrientationRuleOptions, normalizeOrientationRule, usesOrientationRule, useOrientationVariant, notOutlined, notMild, usesMildVariant, mildOf, usesBackg, usesBorderStroke, usesBorderRadius, 
// styles:
usesBasicLayout, usesBasicVariants, 
// configs:
cssProps as bcssProps, cssDecls as bcssDecls, cssVals as bcssVals, Basic, } from '@nodestrap/basic';
import { 
// styles:
listItemElm, usesListLayout, usesListBasicVariants, } from '@nodestrap/list';
// hooks:
// layouts:
export const defaultOrientationRuleOptions = defaultInlineOrientationRuleOptions;
const [altBackgRefs, altBackgDecls] = createCssVar();
/**
 * Uses alternate background layer(s).
 * @returns A `[Factory<StyleCollection>, ReadonlyRefs, ReadonlyDecls]` represents alternate background layer(s) definitions.
 */
export const usesAltBackg = () => {
    // dependencies:
    const [, mildRefs] = usesMildVariant();
    return [
        () => composition([
            vars({
                [altBackgDecls.backgFn]: mildRefs.backgFn,
                [altBackgDecls.backgCol]: 'transparent',
                [altBackgDecls.backg]: [
                    // layering: backg1 | backg2 | backg3 ...
                    // bottom layer:
                    altBackgRefs.backgCol,
                ],
            }),
            variants([
                notOutlined([
                    vars({
                        [altBackgDecls.backgCol]: colors.backg,
                    }),
                    variants([
                        notMild([
                            vars({
                                [altBackgDecls.backgCol]: altBackgRefs.backgFn,
                            }),
                        ]),
                    ]),
                ]),
            ]),
        ]),
        altBackgRefs,
        altBackgDecls,
    ];
};
const [progressBarVarRefs, progressBarVarDecls] = createCssVar();
/**
 * Uses ProgressBar variables.
 * @returns A `[Factory<StyleCollection>, ReadonlyRefs, ReadonlyDecls]` represents ProgressBar variables definitions.
 */
export const usesProgressBarVars = () => {
    return [
        () => composition([]),
        progressBarVarRefs,
        progressBarVarDecls,
    ];
};
const [runningRefs, runningDecls] = createCssVar();
// {
//     const [, , , propsManager] = usesAnim();
//     propsManager.registerAnim(runningRefs.anim);
// }
const selectorIsRunning = '.running';
const selectorNotRunning = ':not(.running)';
export const isRunning = (styles) => rule(selectorIsRunning, styles);
export const notRunning = (styles) => rule(selectorNotRunning, styles);
/**
 * Uses running states.
 * @returns A `[Factory<StyleCollection>, ReadonlyRefs, ReadonlyDecls]` represents running state definitions.
 */
export const usesRunningState = () => {
    return [
        () => composition([
            states([
                notRunning([
                    vars({
                        [runningDecls.anim]: 'initial',
                    }),
                ]),
                isRunning([
                    vars({
                        [runningDecls.anim]: cssProps.itemAnimRunning,
                    }),
                ]),
            ]),
        ]),
        runningRefs,
        runningDecls,
    ];
};
export const useProgressVariant = (props) => {
    return {
        class: props.progressStyle ? props.progressStyle : null,
    };
};
export const useProgressBarVariant = (props) => {
    return {
        class: props.progressBarStyle ? ((Array.isArray(props.progressBarStyle) ? props.progressBarStyle : [props.progressBarStyle]).filter((style) => !!style).join(' ') || null) : null,
    };
};
// styles:
export const usesProgressLayout = (options) => {
    // options:
    options = normalizeOrientationRule(options, defaultOrientationRuleOptions);
    const [orientationBlockSelector, orientationInlineSelector] = usesOrientationRule(options);
    // dependencies:
    // colors:
    const [altBackg, altBackgRefs] = usesAltBackg();
    return composition([
        imports([
            // colors:
            altBackg(),
            // layouts:
            usesListLayout(options),
        ]),
        layout({
            // layouts:
            justifyContent: 'start',
            // backgrounds:
            backg: altBackgRefs.backg,
            // customize:
            ...usesGeneralProps(cssProps), // apply general cssProps
        }),
        variants([
            /* the orientation variants are part of the layout, because without these variants the layout is broken */
            rule(orientationBlockSelector, [
                layout({
                    // layouts:
                    display: 'inline-flex',
                    // overwrites propName = propName{Block}:
                    ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, 'block')),
                }),
            ]),
            rule(orientationInlineSelector, [
                layout({
                    // layouts:
                    display: 'flex',
                    // overwrites propName = propName{Inline}:
                    ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, 'inline')),
                }),
            ]),
        ]),
    ]);
};
export const usesProgressVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => composition([
        layout({
            // overwrites propName = propName{SizeName}:
            ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
        }),
    ]));
    return composition([
        imports([
            // variants:
            usesBasicVariants(),
            usesListBasicVariants(),
            // layouts:
            sizes(),
        ]),
    ]);
};
export const useProgressSheet = createUseSheet(() => [
    mainComposition([
        imports([
            // layouts:
            usesProgressLayout(),
            // variants:
            usesProgressVariants(),
        ]),
    ]),
]);
export const usesProgressBarInheritMildVariant = () => {
    return composition([
        variants([
            rule('.mild>&', [
                imports([
                    mildOf(true),
                ]),
            ]),
        ]),
    ]);
};
export const usesProgressBarLayout = () => {
    // dependencies:
    // borders:
    const [, , borderStrokeDecls] = usesBorderStroke();
    const [, , borderRadiusDecls] = usesBorderRadius();
    // range vars:
    const [progressBarVars, progressBarVarRefs] = usesProgressBarVars();
    return composition([
        layout({
            // sizes:
            flex: [[progressBarVarRefs.valueRatio, progressBarVarRefs.valueRatio, 0]],
            overflow: 'hidden',
            // children:
            ...children(listItemElm, [
                imports([
                    // layouts:
                    usesBasicLayout(),
                    // progressBar vars:
                    progressBarVars(),
                ]),
                layout({
                    // layouts:
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // borders:
                    [borderStrokeDecls.borderWidth]: '0px',
                    // remove rounded corners on top:
                    [borderRadiusDecls.borderStartStartRadius]: '0px',
                    [borderRadiusDecls.borderStartEndRadius]: '0px',
                    // remove rounded corners on bottom:
                    [borderRadiusDecls.borderEndStartRadius]: '0px',
                    [borderRadiusDecls.borderEndEndRadius]: '0px',
                    // sizes:
                    flex: [[1, 1, 'auto']],
                    // customize:
                    ...usesGeneralProps(usesPrefixedProps(cssProps, 'item')), // apply general cssProps starting with item***
                }),
                vars({
                    [bcssDecls.backgGrad]: cssProps.backgGrad,
                }),
            ]),
        }),
    ]);
};
export const usesProgressBarVariants = () => {
    // dependencies:
    // colors:
    const [, backgRefs] = usesBackg();
    // animations:
    const [running, runningRefs] = usesRunningState();
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => composition([
        layout({
            // overwrites propName = propName{SizeName}:
            ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
        }),
    ]));
    return composition([
        layout({
            // children:
            ...children(listItemElm, [
                imports([
                    // variants:
                    usesBasicVariants(),
                    usesProgressBarInheritMildVariant(),
                    // layouts:
                    sizes(),
                ]),
            ]),
        }),
        variants([
            rule('.striped', [
                imports([
                    // states:
                    running(),
                ]),
                layout({
                    // children:
                    ...children(listItemElm, [
                        layout({
                            // backgrounds:
                            backg: [
                                // top layer:
                                `${cssProps.itemBackgOverlayImg} left/${cssProps.itemBackgOverlaySize} ${cssProps.itemBackgOverlaySize}`,
                                // bottom layer:
                                backgRefs.backg,
                            ],
                            // animations:
                            anim: runningRefs.anim,
                        }),
                    ]),
                }),
            ]),
        ]),
    ]);
};
export const useProgressBarSheet = createUseSheet(() => [
    mainComposition([
        variants([
            rule('&&', [
                imports([
                    // layouts:
                    usesProgressBarLayout(),
                    // variants:
                    usesProgressBarVariants(),
                ]),
            ]),
        ]),
    ]),
]);
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    //#region keyframes
    const keyframesItemRunning = {
        from: {
            backgroundPositionX: ['1rem', 0],
        },
        to: {
            backgroundPositionX: [0, 0],
        },
    };
    const keyframesItemRunningBlock = {
        from: {
            backgroundPositionY: ['1rem', 0],
        },
        to: {
            backgroundPositionY: [0, 0],
        },
    };
    //#endregion keyframes
    return {
        //#region animations
        '@keyframes itemRunning': keyframesItemRunning,
        '@keyframes itemRunningBlock': keyframesItemRunningBlock,
        itemAnimRunning: [['1000ms', 'linear', 'both', 'infinite', keyframesItemRunning]],
        itemAnimRunningBlock: [['1000ms', 'linear', 'both', 'infinite', keyframesItemRunningBlock]],
        //#endregion animations
        // backgrounds:
        backgGrad: bcssProps.backgGrad,
        backgGradBlock: (() => {
            const value = [[...bcssVals.backgGrad[0]]];
            value[0][0] = value[0][0].replace('180deg', '270deg');
            return value;
        })(),
        itemBackgOverlayImg: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)',
        itemBackgOverlaySize: '1rem',
        itemBackgOverlaySizeSm: '0.25rem',
        itemBackgOverlaySizeLg: '3rem',
        // sizes:
        minInlineSize: 'unset',
        minBlockSize: 'auto',
        minInlineSizeBlock: 'auto',
        minBlockSizeBlock: '10rem',
        itemBoxSizing: 'border-box',
        itemMinInlineSize: 'unset',
        itemMinBlockSize: spacers.md,
        itemMinBlockSizeSm: spacers.xs,
        itemMinBlockSizeLg: spacers.xl,
        itemMinBlockSizeBlock: 'unset',
        itemMinInlineSizeBlock: spacers.md,
        itemMinInlineSizeBlockSm: spacers.xs,
        itemMinInlineSizeBlockLg: spacers.xl,
        // spacings:
        itemPaddingInline: 0,
        itemPaddingBlock: 0,
    };
}, { prefix: 'prgs' });
// utilities:
const calculateValues = (props) => {
    // fn props:
    const valueFn = parseNumber(props.value) ?? 0;
    const minFn = parseNumber(props.min) ?? 0;
    const maxFn = parseNumber(props.max) ?? 100;
    const negativeFn = (maxFn < minFn);
    const valueRatio = (valueFn - minFn) / (maxFn - minFn);
    return {
        valueFn,
        minFn,
        maxFn,
        negativeFn,
        valueRatio,
    };
};
export function Progress(props) {
    // styles:
    const sheet = useProgressSheet();
    const barSheet = useProgressBarSheet();
    // rest props:
    const { 
    // children:
    children,
    /*...restProps*/  } = props;
    // variants:
    const orientationVariant = useOrientationVariant(props);
    const orientationVertical = (orientationVariant.class === 'block');
    const progressVariant = useProgressVariant(props);
    // progressBar vars:
    const [, , progressBarVarDecls] = usesProgressBarVars();
    // jsx fn props:
    const remainingValueRatio = 1 - Math.min((React.Children.toArray(children).map((child) => {
        // <ProgressBar> component:
        if (isTypeOf(child, ProgressBar)) {
            // fn props:
            const { valueRatio } = calculateValues(child.props);
            return valueRatio;
        } // if
        // other component:
        return 0;
    })
        .reduce((accum, valueRatio) => accum + valueRatio) // sum
    ), 1);
    const restProgressBar = (<Element 
    // semantics:
    aria-hidden={true} // just a dummy element, no meaningful content here
     
    // classes:
    mainClass={barSheet.main} 
    // styles:
    style={{ ...(props.style ?? {}),
            // values:
            [progressBarVarDecls.valueRatio]: remainingValueRatio,
        }}></Element>);
    // jsx:
    return (<Basic 
    // other props:
    {...props} 
    // semantics:
    semanticTag={props.semanticTag ?? [null]} semanticRole={props.semanticRole ?? 'group'} aria-orientation={props['aria-orientation'] ?? (orientationVertical ? 'vertical' : 'horizontal')} 
    // classes:
    mainClass={props.mainClass ?? sheet.main} variantClasses={[...(props.variantClasses ?? []),
            orientationVariant.class,
            progressVariant.class,
        ]}>
            {orientationVertical ? restProgressBar : null}
            {orientationVertical ? React.Children.toArray(children).slice().reverse() : children}
            {orientationVertical ? null : restProgressBar}
        </Basic>);
}
export function ProgressBar(props) {
    // styles:
    const sheet = useProgressBarSheet();
    // variants:
    const progressBarVariant = useProgressBarVariant(props);
    // fn props:
    const { valueFn, minFn, maxFn, negativeFn, valueRatio, } = calculateValues(props);
    // progressBar vars:
    const [, , progressBarVarDecls] = usesProgressBarVars();
    // jsx:
    return (<Element 
    // semantics:
    semanticTag={props.semanticTag ?? [null]} semanticRole={props.semanticRole ?? 'progressbar'} aria-valuenow={props['aria-valuenow'] ?? valueFn} aria-valuemin={props['aria-valuemin'] ?? (negativeFn ? maxFn : minFn)} aria-valuemax={props['aria-valuemax'] ?? (negativeFn ? minFn : maxFn)} 
    // classes:
    mainClass={props.mainClass ?? sheet.main} 
    // styles:
    style={{ ...(props.style ?? {}),
            // values:
            [progressBarVarDecls.valueRatio]: valueRatio,
        }} variantClasses={[...(props.variantClasses ?? []),
            progressBarVariant.class,
        ]}>
            <Basic 
    // other props:
    {...props} 
    // variants:
    mild={props.mild ?? false}/>
        </Element>);
}
