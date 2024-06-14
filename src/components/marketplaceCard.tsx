import Image from "next/image";
import styles from "./marketplaceCard.module.scss";

export default function MarketplaceCard(props: any) {
    const { name, size, price, unit, image } = props;
    return (
        <main className={styles.marketplaceCard}>
            {
                image 
                ? <Image src={`/assets/${image}`} alt={name} width={100} height={100} className={styles.cardImage}/>
                : <div className={styles.cardImage}></div>
                }
            <div className={styles.cardInfo}>
                <div>${price}</div>
                <div><div>{name}</div></div>
            </div>
        </main>
    )
}