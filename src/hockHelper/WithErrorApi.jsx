import { useState } from "react";

const withErrorApi = View => {
    return props => {
        const [errorApi, setErrorApi] = useState(false);
        return (
            <>
            {errorApi ?
            <h1>ERROR!!!</h1> : (
            <View
            setErrorApi={setErrorApi}
            {...props}
            />)
            }
            </>
        ) 
    }
}
export default withErrorApi;    