import {ElMessage} from "element-plus";

// 封装message提示
let $message = ({type = "success", message = ""}) => {
    ElMessage({
        type,
        message
    });
};

export default {
    install: (app) => {
        app.config.globalProperties["$message"] = $message;
    }
};