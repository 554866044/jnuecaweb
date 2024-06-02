export default function Index(islogin){
    let content;
    if (islogin){
        content=<index_login/>;
    }
    else{
        content=<index_unlogin/>
    }
    return(
        <div>
            {content}
        </div>
    )
}