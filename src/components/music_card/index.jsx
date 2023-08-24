import MusicData from "@/utils/music_data"
import { CardMusic } from "./musiccardUI"

export const MusicList = () => {
    return (
        <div>
            {
                MusicData && MusicData.map((res, idx) => {
                    return (
                        <CardMusic key={idx} link={res.link} title={res.title} alt={res.title} type={res.type} image={res.image.src}/>
                    )
                })
            }
        </div>
    )
}