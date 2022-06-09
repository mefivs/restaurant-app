import { User, EyeClosed, Eye, Lock } from 'phosphor-react';
import { HTMLInputTypeAttribute, useState } from 'react';
import './CustomInput.scss';

interface CustomInputProps {
    id?: string;
    label?: string;
    type: HTMLInputTypeAttribute | undefined;
}

export function CustomInput({ label, id, type }: CustomInputProps) {

    const [passVisible, setPassVisible] = useState(false);

    return (
        <div className="customInputContainer">
            <label htmlFor={id}>{label}</label>
            <div className='customInput'>
                <span className='leftIcon'>
                    {id === 'user' ?
                        <User weight='bold' />
                        :
                        id === 'pass' &&
                        <Lock weight='bold' />
                    }
                </span>
                {type === 'password' ?
                    <input type={passVisible ? 'text' : 'password'} id={id} />
                    :
                    <input type={type} id={id} />
                }

                <span className='rightIcon' onClick={() => setPassVisible(!passVisible)}>
                    {id === 'pass' ?

                        passVisible ?
                            <Eye />
                            :
                            <EyeClosed weight='bold' />
                        :
                        ''
                    }
                </span>
            </div>
        </div>
    )
}