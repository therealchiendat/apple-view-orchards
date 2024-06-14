import Image from "next/image";
import styles from "./about.module.scss";

export default function About() {
    return (
        <main className={styles.about}>
            <h1>About</h1>
            <Image src="/assets/about_1.png" alt="about" width={512} height={288} />
            <h2>Welcome to our new farm!</h2>
            <p>
            Appleview Orchards Inc. Our 25 acres High Density Apple Orchard was planted in 2021. We
            have nine table apple varieties and one cider apple variety.
            In the orchard, we are environmentally conscious, which means we spray pesticides very
            sparsely, when needed, we monitor, scout and spray if only necessary. We also use mechanical
            or manual means to deal with pest problems.
            Mountain View Growers Ltd. - Greenhouses and crops other than apples are sold under this
            &quot;brand&quot;. We built our Greenhouses in 2022, We have a 6000 sq. ft. growing space that we are
            working towards growing all year round.
            We don&#39;t spray pesticides on our greenhouse crops; they are spray-free
            Our Greenhouse - grown produce is fresh, we harvest hours before delivery or packaging.
            We started our Farm in 2021 and built it from the ground up; everything we sell is grown by us.

            We are forward-thinkers with continuous improvement mind set, environmentally consciousness
            is in our core. We developed our own innovative growing systems that we currently use to grow
            our crops and constantly improve our methods.
            </p>
            <h3>Our People:</h3>
            <Image src="/assets/about_2.png" alt="about" width={1000} height={500} />
            <Image src="/assets/about_3.png" alt="about" width={1000} height={500} />
            <Image src="/assets/about_4.png" alt="about" width={1000} height={500} />
        </main>
    )
}