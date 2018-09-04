let common_param = {};
import {isAndroidOrIos} from './tools';
const get_usr_info=resolve=>{
    if(isAndroidOrIos()==-1||/localhost/.test(location.href)){
        common_param = {
            token: "d74c3ac0-4b07-490d-9c8e-74c86449c419",
            userId: "d74c3ac0-4b07-490d-9c8e-74c86449c419",
            mobile: '18853098271'
        };
    }else{
        try {
            if (!window.jsondata) {
            //   setTimeout(function(){
                var infos = iosObject.getUserInfo();
                let userInfo = infos;
                var json = eval('(' + userInfo + ')');
                 window.jsondata = json;
                 common_param = {
                    token: json.token || '',
                    userId: json.userId,
                    mobile: json.phone
                };
                return common_param;
            //   },500)
            } else {
                return {
                    token: window.jsondata.token,
                    userId: window.jsondata.userId,
                    mobile: window.jsondata.phone
                };
            }
        } catch (error) {
            alert(error);
        }
    }
  
    return common_param;
}
export default get_usr_info;
