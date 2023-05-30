import { useState } from "react";


// custom hook for html input element
const useInput = (initValue: string) => {
    const [inputValue, setInputValue] = useState(initValue);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    }

    const inputProps = {
        value: inputValue,
        onChange: handleChange
    }

    return inputProps;
}



export default useInput;