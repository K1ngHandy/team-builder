import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name
                    <input type='text' onChange={onChange} name='name'></input>
                </label>
                <label>Email
                    <input type='email' onChange={onChange} name='email'></input>
                </label>
                <label>Role
                    <select onChange={onChange} name='role' value={values.role}>
                        <option value=''>-- Select Role --</option>
                        <option value='student'>Student</option>
                        <option value='instructor'>Instructor</option>
                        <option value='alumni'>Alumni</option>
                    </select>
                </label>

                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}
