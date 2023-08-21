import { ralewayBold, ralewayMedium, ralewaySemiBold } from "@/Assets/Fonts"

export type IdefaultTheme = typeof defaultTheme

export const defaultTheme = {
  colors: {
    white: '#fff',
    black: '#000',
    hover: '#6C9C50',
    foreground: '#F5F5F5',
    highlight: '#54793E'
  },
  fonts: {
    raleway: {
      fontFamily: `${ralewayBold.style.fontFamily}`,
      semiBold: `${ralewaySemiBold.style.fontWeight}`,
      bold: `${ralewayBold.style.fontWeight}`,
      medium: `${ralewayMedium.style.fontWeight}`
    }
  },
  'green-300': '#00B37E',
  'green-500': '#00875F',
  'green-700': '#015F43',

  'red-300': '#F75A68',
  'red-500': '#AB222E',
  'red-700': '#7A1921',
}