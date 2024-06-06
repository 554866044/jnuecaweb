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
    static post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{method:'POST',
        headers:{'Accept':'application.json()',
    'Content-Type':'application/json',},body:JSON.stringify(data)}).then(response=>response.json())
        })
    }
}