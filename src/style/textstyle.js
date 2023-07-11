import { fontScale, scale } from "react-native-utils-scale"
import { COLORS } from "../constants/colors"
import { APP_FONTS } from "../assets/fonts"

export const COLOR_OLIVE = {
    color: COLORS.BLACK_OLIVE
}

export const COLOR_WHITE = {
    color: COLORS.WHITE
}

export const COLOR_BLACK = {
    color: COLORS.BLACK
}

export const font_default = {
    fontFamily: APP_FONTS.MEDIUM,
    fontSize: fontScale(16),
}

export const font_medium = {
    fontFamily: APP_FONTS.SEMI_BOLD,
    fontSize: scale(16)
}



