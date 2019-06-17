class Song{
    constructor({id,mid,singer,name,album,duration,image,url}){
        this.id = id;
        this.mid = mid;
        this.singer = singer;
        this.name = name;
        this.album = album;
        this.duration = duration;
        this.image = image;
        this.url = url;
    }
}
function filterSinger(singer){
    let ret = [];
    if(!singer){
        return ""
    }
    singer.forEach(s=>{
        ret.push(s.name)
    });
    return ret.join('-')
}
// ${musicData.songmid}
export default function createSong(musicData){
    // console.log(musicData)
    return new Song({
        id:musicData.songid,
        mid:musicData.songmid,
        singer:filterSinger(musicData.singer),
        name:musicData.songname,
        album:musicData.albumname,
        duration:musicData.interval,
        image:`https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,

//https://zhangzhihao1996.github.io/vue-music-master/#/search
        url:`http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?guid=2214664419&vkey=F7D5E7EB02D5A77B50F0C83CA5CE71A15BCD1262F171182CB125A9B66E5458F5C909668319A1964D24152B1550609BF8A11C68E2CBAB67CA&uin=0&fromtag=38`
    })
}