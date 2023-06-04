import React, { CSSProperties, useCallback, useEffect } from "react";
import { TestResult } from "shared-types-wordkito";

export interface Props {
    deckId: string;
    delayTime?: number;
    onFinished?:({ result }: {result:TestResult}) => void
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
  
const  WidgetTest = ({ deckId, delayTime, appearance, iframeStyle, onFinished}: Props) =>{
  const url = new URL(`https://test.wordkito.com/decks/${deckId}/widgets/test`);
  if (appearance?.accentColor) {
    url.searchParams.append("accentColor", appearance.accentColor);
  }

  if (appearance?.accentContrastColor) {
    url.searchParams.append(
      "accentContrastColor",
      appearance.accentContrastColor
    );
  }
  if (appearance?.backgroundColor) {
    url.searchParams.append("backgroundColor", appearance.backgroundColor);
  }

  if (appearance?.backgroundContrastColor) {
    url.searchParams.append(
      "backgroundContrastColor",
      appearance.backgroundContrastColor
    );
  }

  if (delayTime) {
    url.searchParams.append("delayTime", delayTime.toString());
  }

  if (appearance?.themeCodeMode) {
    url.searchParams.append("themeCodeMode", appearance.themeCodeMode);
  }

  const fullUrl = url.origin + url.pathname + url.search;
  
    const onMessage = useCallback(({ data, origin }: any) => {
        const origins = ["https://test.wordkito.com", "https://wordkito.com"];
  
        if (data.type === "result" && origins.includes(origin) && onFinished) {
          onFinished({ result: data.result });

        }
      },[onFinished]);

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
        src={fullUrl}
      ></iframe>
    );
  }
  

  export default WidgetTest;