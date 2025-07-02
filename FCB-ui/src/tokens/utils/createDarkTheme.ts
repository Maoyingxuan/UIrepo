import { generateColorTokens } from '../alias/darkColor';
import { colorPaletteTokens, colorStatusTokens } from '../alias/darkColorPalette';
import { curves } from '../global/curves';
import { durations } from '../global/durations';
import { borderRadius, fontFamilies, fontSizes, fontWeights,lineHeights, strokeWidths } from '../global/index';
import { horizontalSpacings, verticalSpacings } from '../global/spacings';
import type { BrandVariants, Theme } from '../types';

import { createShadowTokens } from './shadows';

export const createDarkTheme: (brand: BrandVariants) => Theme = brand => {
  const colorTokens = generateColorTokens(brand);

  return {
    ...borderRadius,
    ...fontSizes,
    ...lineHeights,
    ...fontFamilies,
    ...fontWeights,
    ...strokeWidths,
    ...horizontalSpacings,
    ...verticalSpacings,
    ...durations,
    ...curves,

    ...colorTokens,
    ...colorPaletteTokens,
    ...colorStatusTokens,

    ...createShadowTokens(colorTokens.colorNeutralShadowAmbient, colorTokens.colorNeutralShadowKey),
    ...createShadowTokens(colorTokens.colorBrandShadowAmbient, colorTokens.colorBrandShadowKey, 'Brand'),
  };
};
