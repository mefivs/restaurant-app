import { CustomInput } from '../../components/CustomInput';
import './Login.scss';
export function Login() {
    return (
        <div className="loginContainer">
            <main>
                <legend>Placeholder app</legend>
                <CustomInput label='Username' id='user'/>
                <CustomInput label='Password' id='pass'/>
            </main>
        </div>
    )
}