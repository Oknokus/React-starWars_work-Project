export const getSwApiUrlData = async(url) => {
    try {
        const data = await fetch(url);

        if(!data.ok) {
            console.log("Eror not fetch", data.status);
            return false;
        };    
        
        return await data.json();
    } catch (error) {        
        console.warn("Error: ", error.message);
        return false;
    }  
}


