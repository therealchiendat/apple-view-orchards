import styles from "./marketplace.module.scss";
import marketplace_data from "../app/marketplace_data.json";
import MarketplaceCard from "@/components/marketplaceCard";

export default function Marketplace() {
    const data = marketplace_data.data;
    return (
        <main className={styles.marketplace}>
            <h1>Explore Our Marketplace</h1>
            <div className={styles.cardContainer}>
                {data.map((item: any, index: number) => {
                    return (
                        <MarketplaceCard key={index} {...item} />
                    )})}
            </div>
          </main>
    )
}