import { useState } from "react";

import ErrorMessage from "../components/errorMessage";

 export const WithErrorApi = (View) => {
    return function WithError(props) {
       
        const [errorApi, setErrorApi] = useState(false);
        return  (           
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

    