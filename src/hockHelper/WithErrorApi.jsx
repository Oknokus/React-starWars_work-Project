import { useState } from "react";

import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const WithErrorApi = View => {
    return function WithError(props) {
        const [errorApi, setErrorApi] = useState(false);
        return (
            <>
            {errorApi ?
            <ErrorMessage /> : (
            <View
            setErrorApi={ setErrorApi }
            {...props}
            />)
            }
            </>
        ) 
    }
}
export default WithErrorApi;    