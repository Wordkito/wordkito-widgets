import React from 'react';

interface Props {
    deckId: string;
    shareToken: string;
    appearance?: {
        accentColor?: string;
        backgroundColor?: string;
        fontColor?: string;
        backgroundElementColor?: string;
        themeCodeMode?: string;
    };
}
declare function WidgetTest({ deckId, shareToken, appearance }: Props): React.JSX.Element;

export { WidgetTest };
