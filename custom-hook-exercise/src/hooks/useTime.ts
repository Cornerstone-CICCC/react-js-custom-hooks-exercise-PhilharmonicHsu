import { useEffect, useState } from "react";

const DAY = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

export default function useTime<T extends number | string>(type: 'day' | 'hour'): T | undefined {
    const [result, setResult] = useState<T>()

    useEffect(() => {
        const today = new Date();

        switch (type) {
            case 'day': 
                setResult(DAY[today.getDay()] as T);
            break;
            case 'hour':
                setResult(today.getHours() as T);
            break;
        }
    }, [type])

    return result
}