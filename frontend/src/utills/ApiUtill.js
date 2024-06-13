export default class ApiUtill{
    static url_IP='http://127.0.0.1:5001'
    static url_root='api/v1/'
    static app_forum='forum/'
    static app_admin='admin/'

    static url_load_forum_data=this.url_root+this.app_forum+'forum_data_load'
    static url_tag_search=this.url_root+this.app_forum+'tag_search/'
    static url_submit_info=this.url_root+this.app_forum+'submit_info'
    static url_user_login=this.url_root+'login'
    static url_admin_info_op=this.url_root+this.app_admin+'info_load'
    static url_login_status=this.url_root+'login_status'
}