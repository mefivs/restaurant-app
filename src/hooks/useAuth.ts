import {useContext} from 'react';
import {AuthContext} from '../providers/AuthContext';


export function useAuth(){
    const auth = useContext(AuthContext);

    return auth;
}