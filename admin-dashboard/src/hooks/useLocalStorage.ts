import { useState } from "react"

const useLocalStorage = <T>(keyName: string, defaultValue: T | (() => T)) => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const value = window.localStorage.getItem(keyName);
            if (value && value != null) {
                return JSON.parse(value);
            } else {
                window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (err: unknown) {
            return defaultValue;
        }
    })

    const setValue = (newValue: T) => {
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch (err: unknown) {
            window.alert(typeof err + `: ${err}`);
        }
        setStoredValue(newValue);
    }

    return [storedValue, setValue];
}