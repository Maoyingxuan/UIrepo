import { generateColorTokens } from '../alias/highContrastColor';
import { colorPaletteTokens, colorStatusTokens } from '../alias/highContrastColorPalette';
import { curves } from '../global/curves';
import { durations } from '../global/durations';
import { borderRadius, fontFamilies, fontSizes, fontWeights,lineHeights, strokeWidths } from '../global/index';
import { horizontalSpacings, verticalSpacings } from '../global/spacings';
import type { Theme } from '../types';

import { createShadowTokens } from './shadows';

export const createHighContrastTheme = (): Theme => {
  const colorTokens = generateColorTokens();

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
