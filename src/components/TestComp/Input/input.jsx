import React from 'react';
import '../Input/input.scss';
//import classes from './input.css';


    const Input = props => {
        const inputType = props.type || 'text'
        //const cls = [classes.Input]
        const htmlFor = `${inputType}-${Math.random()}`

    
        return (
            <div className="input-field">

                <input 
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.label}
                />
    
                <span>{props.errorMessage}</span>
            </div>
        )
    }

    export default Input








/* 
function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

state = {
    formControls: {
        email: {
            value: '',
            type: 'email',
            label: 'Email',
            errorMessage: 'Введите корректный email',
            valid: false,
            touched: false,
            validation: {
                reqired: true,
                email: true
            }
        },
        password: {
            value: '',
            type: 'password',
            label: 'Пароль',
            errorMessage: 'Введите корректный пароль',
            valid: false,
            touched: false,
            validation: {
                reqired: true,
                minLength: 6
            }
        }
    }
}

onChangeHandler = (event, controlName) => {
    console.log(`${controlName}: `, event.target.value)
}

renderInputs() {
    return Object.keys(this.state.formControls).map ((controlName, index) => {
        const control = this.state.formControls[controlName]
        return (
            <Input 
                key={controlName + index}
                type={control.type}
                value={control.vulue}
                valid={control.valid}
                touched={control.touched}
                label={control.label}
                shouldValidate={!!control.validation}
                errorMessage={control.errorMessage}
                onChange={event => this.onChangeHandler(event, controlName)}
            />
        )
    })
}
*/
