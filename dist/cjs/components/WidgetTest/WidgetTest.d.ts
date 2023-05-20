import React, { CSSProperties } from "react";
export interface Props {
    deckId: string;
    shareToken: string;
    iframeStyle: CSSProperties;
    appearance?: {
        accentColor?: string;
        backgroundColor?: string;
        fontColor?: string;
        backgroundElementColor?: string;
        themeCodeMode?: string;
    };
}
declare function WidgetTest({ deckId, shareToken, appearance }: Props): React.JSX.Element;
export default WidgetTest;
