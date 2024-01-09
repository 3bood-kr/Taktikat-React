import React from 'react'

export default function FormInput() {
    return (
        <div>
            <label>
                { label }
            </label>
            <input name={name} type={type} />
        </div>
    )
}
