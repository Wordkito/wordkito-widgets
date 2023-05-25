import React, { CSSProperties } from 'react';
import { TestResult } from 'shared-types-wordkito';

interface Props {
    deckId: string;
    shareToken?: string;
    onFinished?: (result: TestResult) => void;
    iframeStyle?: CSSProperties;
    appearance?: {
        accentColor?: string;
        backgroundColor?: string;
        fontColor?: string;
        backgroundElementColor?: string;
        themeCodeMode?: string;
    };
}
declare function WidgetTest({ deckId, shareToken, appearance, iframeStyle, onFinished }: Props): React.JSX.Element;

export { WidgetTest };
