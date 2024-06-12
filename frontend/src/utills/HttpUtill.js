export default class HttpUtill{
    static get(url){
        return new Promise((resolve,reject)=>{
            fetch(url).then(response=>{if(response.ok){
                return response.json();}
            else{
                throw new Error(response.status+":"+response.status)
            }}).then(result=>resolve(result)).catch(error=>{reject(error);
            })

            })
    }
    static async post(url, data) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error('Error sending POST request:', error);
            throw error;
        }
    }
    
}