export default class HttpUtill{
    static get(url){
        return new Promise((resolve,reject)=>{
            fetch(url).then(response=>{if(response.ok){
                return response.json();}
            else{
                throw new Error(response.status+":"+response.status)
                
            }})

            })
        }
    }
}