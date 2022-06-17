// home模块下所有数据
import { reqPersonalized, reqAlbumNew, reqAlbum, reqHomeSinger } from '@/api'

const state={
    PersonalizedList:{},
    newAlbum: [],
    homeSinger:[]
}
const mutations={
    GETPERSONALIZED(state,data){
        state.PersonalizedList = data.slice(0, 8);
    },
    GETNEW(state,data){
        state.newAlbum = data.slice(0, 8);
    },
    GETHOMESINGER(state, data) {
        state.homeSinger = data;
    },

}
const actions={
    //获取热门推荐
    async getPersonalized({commit},limit){
        let result = await reqPersonalized(limit);
        // console.log(result);
        if(result.code == 200){
            commit('GETPERSONALIZED', result.result.playlists);
        }
    },
    //获取新碟上架
    async getNew({commit}){
        let result = await reqAlbum();
        // console.log(result.result.albums);
        if(result.code == 200){
            commit('GETNEW', result.result.albums);
        }
    },
    //获取全部新碟
    async getAlbumAll({commit},{limit,offset,area}){
        let result = await reqAlbumNew(limit = limit,offset=offset,area=area);
        console.log(result);
    },
    //获取主页歌手
    async getHomeSinger({commit}){
        let result = await reqHomeSinger();
        // console.log(result.result.artists);
        if (result.code == 200) {
            commit('GETHOMESINGER', result.result.artists);
        }
    }
    
    
}
const getters={}

export default{
    state,
    mutations,
    actions,
    getters
}