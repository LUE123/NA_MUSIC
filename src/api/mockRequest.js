import axios from 'axios';
import store from '@/store';


const requests = axios.create({
    baseURL: "/mock",
    // 代表请求超时的时间5s
    timeout: 5000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

export default requests;