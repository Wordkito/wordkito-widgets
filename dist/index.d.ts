import React, { CSSProperties } from 'react';
import { TestResult } from 'shared-types-wordkito';

interface Props {
    deckId: string;
    delayTime?: number;
    onFinished?: ({ result }: {
        result: TestResult;
    }) => void;
    iframeStyle?: CSSProperties;
    appearance?: {
        backgroundColor?: string;
        accentColor?: string;
        accentContrastColor?: string;
        backgroundContrastColor?: string;
        backgroundContrastColorHover?: string;
        themeCodeMode?: "dark" | "light";
    };
}
declare const WidgetTest: ({ deckId, delayTime, appearance, iframeStyle, onFinished }: Props) => React.JSX.Element;

export { WidgetTest };
