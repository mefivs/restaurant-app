import { CustomInput } from '../../components/CustomInput';
import { useAuth } from '../../hooks/useAuth';
import './Login.scss';
export function Login() {

    const { placeholder } = useAuth();

    return (

        <div className="loginContainer">
            <main>
                <legend>{placeholder} app</legend>
                <CustomInput label='Username' id='user' type='text' />
                <CustomInput label='Password' id='pass' type='password' />
            </main>
        </div>
    )
}