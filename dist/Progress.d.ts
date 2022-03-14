/// <reference types="react" />
import type { PropEx } from '@cssfn/css-types';
import { StyleCollection } from '@cssfn/cssfn';
import { OrientationName, OrientationRuleOptions, OrientationVariant, ThemeName, BasicProps } from '@nodestrap/basic';
import { ListBasicStyle } from '@nodestrap/list';
export declare const defaultOrientationRuleOptions: OrientationRuleOptions;
export declare const usesThemeDefault: (themeName?: ThemeName | null) => import("@cssfn/cssfn").Rule;
export interface AltBackgVars {
    /**
     * functional alternate background color.
     */
    backgFn: any;
    /**
     * final alternate background color.
     */
    backgCol: any;
    /**
     * final alternate background layers.
     */
    backg: any;
}
/**
 * Uses alternate background layer(s).
 * @returns A `[Factory<Rule>, ReadonlyRefs, ReadonlyDecls]` represents alternate background layer(s) definitions.
 */
export declare const usesAltBackg: () => readonly [() => import("@cssfn/cssfn").Rule, import("@cssfn/css-var").ReadonlyRefs<AltBackgVars>, import("@cssfn/css-var").ReadonlyDecls<AltBackgVars>];
export interface ProgressBarVars {
    /**
     * ProgressBar's thumb ratio.
     */
    valueRatio: any;
}
/**
 * Uses ProgressBar variables.
 * @returns A `[Factory<Rule>, ReadonlyRefs, ReadonlyDecls]` represents ProgressBar variables definitions.
 */
export declare const usesProgressBarVars: () => readonly [() => import("@cssfn/cssfn").Rule, import("@cssfn/css-var").ReadonlyRefs<ProgressBarVars>, import("@cssfn/css-var").ReadonlyDecls<ProgressBarVars>];
export interface RunningVars {
    anim: any;
}
export declare const isRunning: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
export declare const notRunning: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
/**
 * Uses running states.
 * @returns A `[Factory<Rule>, ReadonlyRefs, ReadonlyDecls]` represents running state definitions.
 */
export declare const usesRunningState: () => readonly [() => import("@cssfn/cssfn").Rule, import("@cssfn/css-var").ReadonlyRefs<RunningVars>, import("@cssfn/css-var").ReadonlyDecls<RunningVars>];
export interface RunningState {
    running?: boolean;
}
export declare const useRunningState: (props: RunningState) => {
    class: string | null;
};
export declare type ProgressStyle = ListBasicStyle;
export interface ProgressVariant {
    progressStyle?: ProgressStyle;
}
export declare const useProgressVariant: (props: ProgressVariant) => {
    class: ListBasicStyle | null;
};
export declare type ProgressBarStyle = 'striped';
export interface ProgressBarVariant {
    progressBarStyle?: ProgressBarStyle;
}
export declare const useProgressBarVariant: (props: ProgressBarVariant) => {
    class: "striped" | null;
};
export declare const usesProgressLayout: (options?: OrientationRuleOptions | undefined) => import("@cssfn/cssfn").Rule;
export declare const usesProgressVariants: () => import("@cssfn/cssfn").Rule;
export declare const useProgressSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const usesProgressBarInheritMildVariant: () => import("@cssfn/cssfn").Rule;
export declare const usesProgressBarLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesProgressBarVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesProgressBarStates: () => import("@cssfn/cssfn").Rule;
export declare const useProgressBarSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{
    '@keyframes itemRunning': PropEx.Keyframes;
    '@keyframes itemRunningBlock': PropEx.Keyframes;
    itemAnimRunning: (string | PropEx.Keyframes)[][];
    itemAnimRunningBlock: (string | PropEx.Keyframes)[][];
    backgGrad: import("@cssfn/css-types").Cust.Ref;
    backgGradBlock: string[][];
    itemBackgStrippedImg: string;
    itemBackgStrippedSize: string;
    itemBackgStrippedSizeSm: string;
    itemBackgStrippedSizeLg: string;
    minInlineSize: string;
    minBlockSize: string;
    minInlineSizeBlock: string;
    minBlockSizeBlock: string;
    itemBoxSizing: string;
    itemMinInlineSize: string;
    itemMinBlockSize: import("@cssfn/css-types").Cust.Ref;
    itemMinBlockSizeSm: import("@cssfn/css-types").Cust.Ref;
    itemMinBlockSizeLg: import("@cssfn/css-types").Cust.Ref;
    itemMinBlockSizeBlock: string;
    itemMinInlineSizeBlock: import("@cssfn/css-types").Cust.Ref;
    itemMinInlineSizeBlockSm: import("@cssfn/css-types").Cust.Ref;
    itemMinInlineSizeBlockLg: import("@cssfn/css-types").Cust.Ref;
    itemPaddingInline: number;
    itemPaddingBlock: number;
}>, cssDecls: import("@cssfn/css-config").Decls<{
    '@keyframes itemRunning': PropEx.Keyframes;
    '@keyframes itemRunningBlock': PropEx.Keyframes;
    itemAnimRunning: (string | PropEx.Keyframes)[][];
    itemAnimRunningBlock: (string | PropEx.Keyframes)[][];
    backgGrad: import("@cssfn/css-types").Cust.Ref;
    backgGradBlock: string[][];
    itemBackgStrippedImg: string;
    itemBackgStrippedSize: string;
    itemBackgStrippedSizeSm: string;
    itemBackgStrippedSizeLg: string;
    minInlineSize: string;
    minBlockSize: string;
    minInlineSizeBlock: string;
    minBlockSizeBlock: string;
    itemBoxSizing: string;
    itemMinInlineSize: string;
    itemMinBlockSize: import("@cssfn/css-types").Cust.Ref;
    itemMinBlockSizeSm: import("@cssfn/css-types").Cust.Ref;
    itemMinBlockSizeLg: import("@cssfn/css-types").Cust.Ref;
    itemMinBlockSizeBlock: string;
    itemMinInlineSizeBlock: import("@cssfn/css-types").Cust.Ref;
    itemMinInlineSizeBlockSm: import("@cssfn/css-types").Cust.Ref;
    itemMinInlineSizeBlockLg: import("@cssfn/css-types").Cust.Ref;
    itemPaddingInline: number;
    itemPaddingBlock: number;
}>, cssVals: import("@cssfn/css-config").Vals<{
    '@keyframes itemRunning': PropEx.Keyframes;
    '@keyframes itemRunningBlock': PropEx.Keyframes;
    itemAnimRunning: (string | PropEx.Keyframes)[][];
    itemAnimRunningBlock: (string | PropEx.Keyframes)[][];
    backgGrad: import("@cssfn/css-types").Cust.Ref;
    backgGradBlock: string[][];
    itemBackgStrippedImg: string;
    itemBackgStrippedSize: string;
    itemBackgStrippedSizeSm: string;
    itemBackgStrippedSizeLg: string;
    minInlineSize: string;
    minBlockSize: string;
    minInlineSizeBlock: string;
    minBlockSizeBlock: string;
    itemBoxSizing: string;
    itemMinInlineSize: string;
    itemMinBlockSize: import("@cssfn/css-types").Cust.Ref;
    itemMinBlockSizeSm: import("@cssfn/css-types").Cust.Ref;
    itemMinBlockSizeLg: import("@cssfn/css-types").Cust.Ref;
    itemMinBlockSizeBlock: string;
    itemMinInlineSizeBlock: import("@cssfn/css-types").Cust.Ref;
    itemMinInlineSizeBlockSm: import("@cssfn/css-types").Cust.Ref;
    itemMinInlineSizeBlockLg: import("@cssfn/css-types").Cust.Ref;
    itemPaddingInline: number;
    itemPaddingBlock: number;
}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export interface ProgressProps<TElement extends HTMLElement = HTMLElement> extends BasicProps<TElement>, OrientationVariant, ProgressVariant {
}
export declare function Progress<TElement extends HTMLElement = HTMLElement>(props: ProgressProps<TElement>): JSX.Element;
export type { OrientationName, OrientationVariant };
export interface ProgressBarProps<TElement extends HTMLElement = HTMLElement> extends BasicProps<TElement>, RunningState, ProgressBarVariant {
    value?: string | number;
    min?: string | number;
    max?: string | number;
}
export declare function ProgressBar<TElement extends HTMLElement = HTMLElement>(props: ProgressBarProps<TElement>): JSX.Element;
