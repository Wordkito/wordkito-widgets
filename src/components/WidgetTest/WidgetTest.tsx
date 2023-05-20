import React from "react";

export interface Props {
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
  
function WidgetTest({ deckId, shareToken, appearance }: Props) {
    const accentColorQueryParam = appearance?.accentColor
      ? `&accentColor=${appearance.accentColor}`
      : "";
  
    const backGroundColorQueryParam = appearance?.backgroundColor
      ? `&backgroundColor=${appearance.backgroundColor}`
      : "";
  
    const fontColorQueryParam = appearance?.fontColor
      ? `&fontColor=${appearance.fontColor}`
      : "";
  
    const backgroundElementColorQueryParam = appearance?.backgroundElementColor
      ? `&backgroundElementColor=${appearance.backgroundElementColor}`
      : "";
  
    const themeCodeModeQueryParam = appearance?.themeCodeMode
      ? `&themeCodeMode=${appearance.themeCodeMode}`
      : "";
  
    const url = `https://test.wordkito.com/decks/${deckId}/widgets/test?shareToken=${shareToken}${accentColorQueryParam}${backGroundColorQueryParam}${fontColorQueryParam}${backgroundElementColorQueryParam}${themeCodeModeQueryParam}`;
  
    return (
      <iframe
        title="wordkito-widget-test"
        style={{
          border: "none",
          width: "100%",
          height: "500px"
        }}
        src={url}
      ></iframe>
    );
  }
  

  export default WidgetTest;