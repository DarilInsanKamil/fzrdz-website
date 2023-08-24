import styles from './button.module.css'
import Image from 'next/image'

export const ButtonIcon = ({title, icon, alt}) => {
    return(
        <button className={styles.button_container}>
            <Image className={styles.icon} src={icon} alt={alt} width={"auto"} height={"auto"}/>
            {title}
        </button>
    )
}