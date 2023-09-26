//프로그래머스-베스트앨범
//요구 사항
//1. 같은 장르끼리 묶어야 한다. 
//2. 묶인 노래들을 재생 순으로 정렬한다. 
//3. 노래를 2개까지 자르는 작업을 한다.
// point묶기 & 정렬

function solution(genres, plays) {
    const genreMap = new Map();
    
    genres
        .map((genre,index) => [genre,plays[index]])
        .forEach(([genre,play], index)=>{
            const data = genreMap.get(genre) || {total: 0, songs:[]};
        genreMap.set(genre,{
            total: data.total + play,
            songs:[...data.songs,{play,index}]
            .sort((a,b)=>b.play-a.play)
            .slice(0,2)
        })
    })
    
    return [...genreMap.entries()]
        .sort((a,b)=>b[1].total - a[1].total)
        .flatMap(item => item[1].songs)
        .map(song => song.index)
}