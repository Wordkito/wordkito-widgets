import { useEffect, useState } from "react";

const useWidgetTest = () => {
    const [result, setResult] = useState();

    const onMessage = ({ data, origin }: any) => {
        const origins = ["https://test.wordkito.com", "https://wordkito.com"];

        if (data.type === "result" && origins.includes(origin)) {
        setResult(data.result);
        }
    };

    useEffect(() => {
        window.addEventListener("message", onMessage);

        return () => {
        window.removeEventListener("message", onMessage);
        };
    }, []);

return { result };
};

export default useWidgetTest;