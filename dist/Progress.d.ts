/// <reference types="react" />
import type { SingleOrArray } from '@cssfn/types';
import type { PropEx } from '@cssfn/css-types';
import { StyleCollection } from '@cssfn/cssfn';
import { OrientationName, OrientationRuleOptions, OrientationVariant, BasicProps } from '@nodestrap/basic';
import { ListBasicStyle } from '@nodestrap/list';
export declare const defaultOrientationRuleOptions: OrientationRuleOptions;
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
 * @returns A `[Factory<StyleCollection>, ReadonlyRefs, ReadonlyDecls]` represents alternate background layer(s) definitions.
 */
export declare const usesAltBackg: () => readonly [() => StyleCollection, import("@cssfn/css-var").ReadonlyRefs<AltBackgVars>, import("@cssfn/css-var").ReadonlyDecls<AltBackgVars>];
export interface ProgressBarVars {
    /**
     * ProgressBar's thumb ratio.
     */
    valueRatio: any;
}
/**
 * Uses ProgressBar variables.
 * @returns A `[Factory<StyleCollection>, ReadonlyRefs, ReadonlyDecls]` represents ProgressBar variables definitions.
 */
export declare const usesProgressBarVars: () => readonly [() => StyleCollection, import("@cssfn/css-var").ReadonlyRefs<ProgressBarVars>, import("@cssfn/css-var").ReadonlyDecls<ProgressBarVars>];
export interface RunningVars {
    anim: any;
}
export declare const isRunning: (styles: StyleCollection) => import("@cssfn/cssfn").RuleEntry;
export declare const notRunning: (styles: StyleCollection) => import("@cssfn/cssfn").RuleEntry;
/**
 * Uses running states.
 * @returns A `[Factory<StyleCollection>, ReadonlyRefs, ReadonlyDecls]` represents running state definitions.
 */
export declare const usesRunningState: () => readonly [() => StyleCollection, import("@cssfn/css-var").ReadonlyRefs<RunningVars>, import("@cssfn/css-var").ReadonlyDecls<RunningVars>];
export declare type ProgressStyle = ListBasicStyle;
export interface ProgressVariant {
    progressStyle?: ProgressStyle;
}
export declare const useProgressVariant: (props: ProgressVariant) => {
    class: ListBasicStyle | null;
};
export declare type ProgressBarStyle = 'striped' | 'running';
export interface ProgressBarVariant {
    progressBarStyle?: SingleOrArray<ProgressBarStyle>;
}
export declare const useProgressBarVariant: (props: ProgressBarVariant) => {
    class: string | null;
};
export declare const usesProgressLayout: (options?: OrientationRuleOptions | undefined) => StyleCollection;
export declare const usesProgressVariants: () => StyleCollection;
export declare const useProgressSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const usesProgressBarInheritMildVariant: () => StyleCollection;
export declare const usesProgressBarLayout: () => StyleCollection;
export declare const usesProgressBarVariants: () => StyleCollection;
export declare const useProgressBarSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{
    '@keyframes itemRunning': PropEx.Keyframes;
    '@keyframes itemRunningBlock': PropEx.Keyframes;
    itemAnimRunning: (string | PropEx.Keyframes)[][];
    itemAnimRunningBlock: (string | PropEx.Keyframes)[][];
    backgGrad: import("@cssfn/css-types").Cust.Ref;
    backgGradBlock: string[][];
    itemBackgOverlayImg: string;
    itemBackgOverlaySize: string;
    itemBackgOverlaySizeSm: string;
    itemBackgOverlaySizeLg: string;
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
    itemBackgOverlayImg: string;
    itemBackgOverlaySize: string;
    itemBackgOverlaySizeSm: string;
    itemBackgOverlaySizeLg: string;
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
    itemBackgOverlayImg: string;
    itemBackgOverlaySize: string;
    itemBackgOverlaySizeSm: string;
    itemBackgOverlaySizeLg: string;
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
export interface ProgressBarProps<TElement extends HTMLElement = HTMLElement> extends BasicProps<TElement>, ProgressBarVariant {
    value?: string | number;
    min?: string | number;
    max?: string | number;
}
export declare function ProgressBar<TElement extends HTMLElement = HTMLElement>(props: ProgressBarProps<TElement>): JSX.Element;
