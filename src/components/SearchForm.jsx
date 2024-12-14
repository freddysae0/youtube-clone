import { useState } from "react"


export default function SearchForm({ inputText, onNewInputText }) {
    const [_inputText, setInputText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent the default form submission
        onNewInputText(_inputText);  // Call the passed function with the usernameInput
    };
    return (
        <form onSubmit={handleSubmit}>
            <input value={_inputText} onChange={(e) => setInputText(e.target.value)} type="text" ></input>

            <button type='submit'>Fetch</button>

        </form>
    )
}