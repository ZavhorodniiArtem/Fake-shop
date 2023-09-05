import {useSelector} from "react-redux";
import {RootState} from "../store";

export const useAuth = () => {
    const {email, id, token} = useSelector((state: RootState) => state.user)

    return {
        isAuth: !!email,
        email,
        token,
        id
    }

}