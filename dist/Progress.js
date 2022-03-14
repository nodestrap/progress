// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
import { 
// compositions:
mainComposition, 
// styles:
style, vars, imports, 
// rules:
rule, variants, states, 
//combinators:
children, } from '@cssfn/cssfn'; // cssfn core
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
usesSizeVariant, defaultInlineOrientationRuleOptions, normalizeOrientationRule, usesOrientationRule, useOrientationVariant, usesThemeDefault as basicUsesThemeDefault, notOutlined, notMild, usesMildVariant, mildOf, usesBackg, usesBorderStroke, usesBorderRadius, 
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
// colors:
// change default parameter from `null` to 'primary':
export const usesThemeDefault = (themeName = 'primary') => basicUsesThemeDefault(themeName);
const [altBackgRefs, altBackgDecls] = createCssVar();
/**
 * Uses alternate background layer(s).
 * @returns A `[Factory<Rule>, ReadonlyRefs, ReadonlyDecls]` represents alternate background layer(s) definitions.
 */
export const usesAltBackg = () => {
    // dependencies:
    const [, mildRefs] = usesMildVariant();
    return [
        () => style({
            ...vars({
                [altBackgDecls.backgFn]: mildRefs.backgFn,
                [altBackgDecls.backgCol]: 'transparent',
                [altBackgDecls.backg]: [
                    // layering: backg1 | backg2 | backg3 ...
                    // bottom layer:
                    altBackgRefs.backgCol,
                ],
            }),
            ...variants([
                notOutlined({
                    ...vars({
                        [altBackgDecls.backgCol]: colors.backg,
                    }),
                    ...variants([
                        notMild({
                            ...vars({
                                [altBackgDecls.backgCol]: altBackgRefs.backgFn,
                            }),
                        }),
                    ]),
                }),
            ]),
        }),
        altBackgRefs,
        altBackgDecls,
    ];
};
const [progressBarVarRefs, progressBarVarDecls] = createCssVar({ minify: false }); // do not minify to make sure `style={{ --valueRatio: ... }}` is the same between in server (without `useProgressBarSheet` rendered) & client (with `useProgressBarSheet` rendered)
/**
 * Uses ProgressBar variables.
 * @returns A `[Factory<Rule>, ReadonlyRefs, ReadonlyDecls]` represents ProgressBar variables definitions.
 */
export const usesProgressBarVars = () => {
    return [
        () => style({
        // no style yet
        }),
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
 * @returns A `[Factory<Rule>, ReadonlyRefs, ReadonlyDecls]` represents running state definitions.
 */
export const usesRunningState = () => {
    return [
        () => style({
            ...states([
                notRunning({
                    ...vars({
                        [runningDecls.anim]: 'initial',
                    }),
                }),
                isRunning({
                    ...vars({
                        [runningDecls.anim]: cssProps.itemAnimRunning,
                    }),
                }),
            ]),
        }),
        runningRefs,
        runningDecls,
    ];
};
export const useRunningState = (props) => {
    return {
        class: (props.running ?? false) ? 'running' : null,
    };
};
export const useProgressVariant = (props) => {
    return {
        class: props.progressStyle ? props.progressStyle : null,
    };
};
export const useProgressBarVariant = (props) => {
    return {
        class: props.progressBarStyle ? props.progressBarStyle : null,
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
    return style({
        ...imports([
            // colors:
            usesThemeDefault(),
            altBackg(),
            // layouts:
            usesListLayout(options),
        ]),
        ...style({
            // layouts:
            ...rule(orientationBlockSelector, {
                display: 'inline-flex', // use inline flexbox, so it takes the width & height as needed
            }),
            ...rule(orientationInlineSelector, {
                display: 'flex', // use block flexbox, so it takes the entire parent's width
            }),
            justifyContent: 'start',
            // backgrounds:
            backg: altBackgRefs.backg,
            // customize:
            ...usesGeneralProps(cssProps),
            ...rule(orientationBlockSelector, {
                // overwrites propName = propName{Block}:
                ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, 'block')),
            }),
            ...rule(orientationInlineSelector, {
                // overwrites propName = propName{Inline}:
                ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, 'inline')),
            }),
        }),
    });
};
export const usesProgressVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => style({
        // overwrites propName = propName{SizeName}:
        ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
    }));
    return style({
        ...imports([
            // variants:
            usesBasicVariants(),
            usesListBasicVariants(),
            // layouts:
            sizes(),
        ]),
    });
};
export const useProgressSheet = createUseSheet(() => [
    mainComposition(imports([
        // layouts:
        usesProgressLayout(),
        // variants:
        usesProgressVariants(),
    ])),
], /*sheetId :*/ 'vcm24axqvn'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
export const usesProgressBarInheritMildVariant = () => {
    return style({
        ...variants([
            rule('.mild>&', {
                ...imports([
                    mildOf(true),
                ]),
            }),
        ]),
    });
};
export const usesProgressBarLayout = () => {
    // dependencies:
    // borders:
    const [, , borderStrokeDecls] = usesBorderStroke();
    const [, , borderRadiusDecls] = usesBorderRadius();
    // range vars:
    const [progressBarVars, progressBarVarRefs] = usesProgressBarVars();
    return style({
        // sizes:
        flex: [[progressBarVarRefs.valueRatio, progressBarVarRefs.valueRatio, 0]],
        overflow: 'hidden',
        // children:
        ...children(listItemElm, {
            ...imports([
                // layouts:
                usesBasicLayout(),
                // progressBar vars:
                progressBarVars(),
            ]),
            ...style({
                // layouts:
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'nowrap',
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
            ...vars({
                [bcssDecls.backgGrad]: cssProps.backgGrad,
            }),
        }),
    });
};
export const usesProgressBarVariants = () => {
    // dependencies:
    // colors:
    const [, backgRefs] = usesBackg();
    return style({
        // children:
        ...children(listItemElm, {
            ...imports([
                // variants:
                usesProgressBarInheritMildVariant(),
            ]),
        }),
        ...variants([
            rule('.striped', {
                // children:
                ...children(listItemElm, {
                    // backgrounds:
                    backg: [
                        // top layer:
                        `${cssProps.itemBackgStripedImg} left/${cssProps.itemBackgStripedSize} ${cssProps.itemBackgStripedSize}`,
                        // bottom layer:
                        backgRefs.backg,
                    ],
                }),
            }),
        ]),
    });
};
export const usesProgressBarStates = () => {
    // dependencies:
    // states:
    const [running, runningRefs] = usesRunningState();
    return style({
        ...imports([
            // states:
            running(),
        ]),
        // children:
        ...children(listItemElm, {
            // animations:
            anim: runningRefs.anim,
        }),
    });
};
export const useProgressBarSheet = createUseSheet(() => [
    mainComposition(rule('&&', {
        ...imports([
            // layouts:
            usesProgressBarLayout(),
            // variants:
            usesProgressBarVariants(),
            // states:
            usesProgressBarStates(),
        ]),
    })),
], /*sheetId :*/ 'ymt3ybn64g'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
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
        itemBackgStripedImg: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)',
        itemBackgStripedSize: '1rem',
        itemBackgStripedSizeSm: '0.25rem',
        itemBackgStripedSizeLg: '3rem',
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
    const restProgressBar = (React.createElement(Element
    // semantics:
    , { "aria-hidden": true, 
        // classes:
        mainClass: barSheet.main, 
        // styles:
        style: { ...(props.style ?? {}),
            // values:
            [progressBarVarDecls.valueRatio]: remainingValueRatio,
        } }));
    // jsx:
    return (React.createElement(Basic, { ...props, 
        // semantics:
        semanticTag: props.semanticTag ?? [null], semanticRole: props.semanticRole ?? 'group', "aria-orientation": props['aria-orientation'] ?? (orientationVertical ? 'vertical' : 'horizontal'), 
        // classes:
        mainClass: props.mainClass ?? sheet.main, variantClasses: [...(props.variantClasses ?? []),
            orientationVariant.class,
            progressVariant.class,
        ] },
        orientationVertical ? restProgressBar : null,
        orientationVertical ? React.Children.toArray(children).slice().reverse() : children,
        orientationVertical ? null : restProgressBar));
}
export function ProgressBar(props) {
    // styles:
    const sheet = useProgressBarSheet();
    // variants:
    const progressBarVariant = useProgressBarVariant(props);
    // states:
    const runningState = useRunningState(props);
    // fn props:
    const { valueFn, minFn, maxFn, negativeFn, valueRatio, } = calculateValues(props);
    // progressBar vars:
    const [, , progressBarVarDecls] = usesProgressBarVars();
    // jsx:
    return (React.createElement(Element
    // semantics:
    , { 
        // semantics:
        semanticTag: props.semanticTag ?? [null], semanticRole: props.semanticRole ?? 'progressbar', "aria-valuenow": props['aria-valuenow'] ?? valueFn, "aria-valuemin": props['aria-valuemin'] ?? (negativeFn ? maxFn : minFn), "aria-valuemax": props['aria-valuemax'] ?? (negativeFn ? minFn : maxFn), 
        // classes:
        mainClass: props.mainClass ?? sheet.main, variantClasses: [...(props.variantClasses ?? []),
            progressBarVariant.class,
        ], stateClasses: [...(props.stateClasses ?? []),
            runningState.class,
        ], 
        // styles:
        style: { ...(props.style ?? {}),
            // values:
            [progressBarVarDecls.valueRatio]: valueRatio,
        } },
        React.createElement(Basic, { ...props, 
            // variants:
            mild: props.mild ?? false })));
}
