import MerchData from "@/utils/merch_data"
import { CardUI } from "./cardUI"
import styles from './card.module.css'

export const CardMerch = () => {
    return (
        <div className={styles.container}>
            {
                MerchData && MerchData.map((res, idx) => {
                    return <CardUI key={idx} img={res.img_product.src} title={res.title} alt={res.title} price={res.price}/>
                })
            }
        </div>
    )
}