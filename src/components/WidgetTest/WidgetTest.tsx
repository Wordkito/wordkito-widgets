import React, { CSSProperties, useCallback, useEffect, useState } from "react";
import { TestResult } from "shared-types-wordkito";

export interface Props {
    deckId: string;
    shareToken?: string;
    onFinished?:({result}:{result:TestResult}) => void
    iframeStyle?: CSSProperties;
    appearance?: {
      accentColor?: string;
      backgroundColor?: string;
      fontColor?: string;
      backgroundElementColor?: string;
      themeCodeMode?: string;
    };
  }
  
function WidgetTest({ deckId, shareToken, appearance, iframeStyle, onFinished}: Props) {
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
  
    const onMessage = useCallback(
      ({ data, origin }: any) => {
        const origins = ["https://test.wordkito.com", "https://wordkito.com"];
  
        if (data.type === "result" && origins.includes(origin)) {
          if (onFinished) {
            onFinished({ result: data.result });
          }
        }
      },
      [onFinished]
    );

    useEffect(() => {
        window.addEventListener("message", onMessage);

        return () => {
        window.removeEventListener("message", onMessage);
        };
    }, [onMessage]);

    
    return (
      <iframe
        title="wordkito-widget-test"
        style={{
          border: "none",
          width: "100%",
          height: "500px",
          ...iframeStyle
        }}
        src={url}
      ></iframe>
    );
  }
  

  export default WidgetTest;