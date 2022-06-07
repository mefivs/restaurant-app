import { User, EyeClosed, Eye, Lock } from 'phosphor-react';
import { useState } from 'react';
import './CustomInput.scss';

interface CustomInputProps {
    id?: string;
    label?: string;
}

export function CustomInput({ label, id }: CustomInputProps) {

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
                <input type="text" id={id} />

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