import HttpUtill from '../utills/HttpUtill'
import ApiUtill from '../utills/ApiUtill'
import { useState } from 'react'
import Tag_select from '../components/tag_select'
import App_Info_list from '../components/info_list'
import Searchpagination from '../components/searchpagnition'
import { Helmet } from 'react-helmet'
function Forum({pagenation,setter}){
    return(<>
        <div className='container'>
            <div className='row g-4'>
                <div className='col-lg-8'>
                    <div className='bg-mode p-4'>
                        <App_Info_list pagenation={pagenation} setter={setter}  url={ApiUtill.url_tag_search}/>
                        <Searchpagination pagination={pagenation} setter={setter}/>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='row g-4'>
                        <Tag_select pagenation={pagenation} setter={setter}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default function App_Forum(){
    const [pagenation,setpagenation]=useState({
        keyword:'',
        page:1,
        size:5,

        pages:0,
        total:0,
        data:[]
    })  
    return <>
    <Helmet>
        <link rel="stylesheet" type="text/css" href="/static/vendor/font-awesome/css/all.min.css"/>
        <link rel="stylesheet" type="text/css" href="/static/vendor/vendor/bootstrap-icons/bootstrap-icons.css"/>
        <link id="style-switch" rel="stylesheet" type="text/css" href="/static/css/style.css"/>
    </Helmet>
    <Forum pagenation={pagenation} setter={setpagenation}/>
    </>

}