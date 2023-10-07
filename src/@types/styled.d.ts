import { IdefaultTheme } from "@/styles/themes/default";
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme extends IdefaultTheme { }
}