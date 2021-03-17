import { Navbar } from "../navigation/Navbar";
import styles from "./MainLayout.module.scss";

export function MainLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}