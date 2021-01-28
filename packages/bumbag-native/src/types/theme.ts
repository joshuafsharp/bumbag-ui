import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { InterpolationWithTheme } from '@emotion/core';
import { ThemeConfig as CoreThemeConfig } from 'bumbag/types';
import { ParsedIcons, ParseIconsOpts } from 'bumbag/utils/parseIcons';

import { BoxProps } from '../Box';
import { IconProps } from '../Icon';
import { ImageProps } from '../Image';
import { TextProps } from '../Text';

export type Stylesheet = InterpolationWithTheme<any>;
export type ThemeAttribute<R> = R | ((props: { theme: ThemeConfig }) => R);
export type Variant<ThemeConfig> = { [key: string]: ThemeConfig };

export type AltitudesThemeConfig = {
  [key: string]: ThemeAttribute<Stylesheet>;
};
type BreakpointsThemeConfig = {
  height: {
    [key: string]: ThemeAttribute<number>;
  };
  width: {
    [key: string]: ThemeAttribute<number>;
  };
};

export type BoxThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Safe?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<BoxProps>;
  variants?: Variant<BoxThemeConfig>;
  modes?: Variant<BoxThemeConfig>;
};

export type FlexThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<BoxProps>;
  variants?: Variant<BoxThemeConfig>;
  modes?: Variant<BoxThemeConfig>;
};

export type IconThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  iconSets?: Array<{
    icons: IconDefinition[];
    prefix?: ParseIconsOpts['prefix'];
    type: ParseIconsOpts['type'];
  }>;
  icons?: ParsedIcons;
  iconNames?: {
    info?: string;
    warning?: string;
    success?: string;
    danger?: string;
    [key: string]: string;
  };
  defaultProps?: Partial<IconProps>;
  variants?: Variant<IconThemeConfig>;
  modes?: Variant<IconThemeConfig>;
};

export type ImageThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<ImageProps>;
  variants?: Variant<ImageThemeConfig>;
  modes?: Variant<ImageThemeConfig>;
};

export type TextThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<TextProps>;
  variants?: Variant<TextThemeConfig>;
  modes?: Variant<TextThemeConfig>;
};

export type ThemeConfig = {
  altitudes?: AltitudesThemeConfig;
  borders?: CoreThemeConfig['borders'];
  borderRadii?: CoreThemeConfig['borderRadii'];
  breakpoints?: BreakpointsThemeConfig;
  fonts?: CoreThemeConfig['fonts'];
  fontSizes?: CoreThemeConfig['fontSizes'];
  fontWeights?: CoreThemeConfig['fontWeights'];
  icons?: CoreThemeConfig['icons'];
  lineHeights?: CoreThemeConfig['lineHeights'];
  letterSpacings?: CoreThemeConfig['letterSpacings'];
  spacing?: CoreThemeConfig['spacing'];
  palette?: CoreThemeConfig['palette'];

  Box?: BoxThemeConfig;
  Icon?: IconThemeConfig;
  Flex?: FlexThemeConfig;
  Image?: ImageThemeConfig;
  Text?: TextThemeConfig;
};