import React, { useState } from 'react'

const initialFormValues = {
    name: '',
    email: '',
    role: '',
}

export default function Form() {
    const [formValues, setFormValues] = useState(initialFormValues)

    return (
        <form>
            <div>
                <label>
                    <input type='text'></input>
                </label>
                <label>
                    <input type='text'></input>
                </label>
                <label>
                    <input type='text'></input>
                </label>
            </div>
        </form>
    )
}
