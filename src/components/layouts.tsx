import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./layouts.module.scss";
import { MenuIcon } from "./menuIcon";



export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const Logo = () => <Image src="/assets/logo.png" alt="logo" width={100} height={100} />;

  const handleScroll = (e: any) => {
    if (e.target.scrollTop > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }


  const handleLocation = () => {
    alert(`To place order Contact us @ mullai.manoharan@gmail.com
      kim.appleview@gmail.com 
      Farm Address: 47194 Homestead Road, Moncton NB. E1G 1P4
      mullai.manoharan@gmail.com
      Phone: 506-435-1980
      `)
  }

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div></div>
        <Link href={"/"} className={scrolled ? styles.logoScrolled : styles.logo}>
          <Logo />
        </Link>
        <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
          <Link href="/about"><div>About</div></Link>
          <div onClick={handleLocation}>Location</div>
          <div onClick={handleLocation}>Contact</div>
        </div>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <MenuIcon />
        </div>
      </div>

      <div className={scrolled ? styles.containerCardScrolled : styles.containerCard} onScroll={handleScroll}>
        {children}
      </div>
    </main>
  );
}
