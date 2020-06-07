import React from 'react'
import './Form.css'

const Field = ({ label = "", name = "", value = "", onChange ,type="" }) => {
    return (
        <div className="field">
            <label htmlFOR={name}>{label}</label>
            <input type={type} name={name} value={value} onChange={onChange} />
        </div>
    );
};

const Form = ({ formState, onChange, onSubmit }) => {

    return (
        <div className="formdiv">
            <h1>Movie form</h1>
            <form className="form" onSubmit={onSubmit}>
                <fieldset>
                    <Field
                        name="username"
                        type="text"
                        label="Movie name"
                        value={formState.username}
                        onChange={onChange}
                    />
                    <Field
                        name="ratings"
                        type="number"
                        label="Ratings"
                        value={formState.ratings}
                        onChange={onChange}

                    />
                    <Field
                        name="duration"
                        type="number"
                        label="Duraton"
                        value={formState.duration}
                        onChange={onChange}

                    />
                </fieldset>
                <button disabled={!formState.username || !formState.ratings || !formState.duration} >{formState.mode ==="submit" ? "submit":"save" }</button>
            </form>
        </div>
    );
};

export default Form;
