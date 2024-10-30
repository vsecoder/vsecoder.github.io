import styles from "./footer.module.css";
import { Hr } from "../hr";
import Link from "next/link";

export function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <p> More links:<br />
                    [<a href="https://habr.com/ru/users/vsecoder">HABR</a>]
                    [<a href="https://github.com/vsecoder/vsecoder.github.io">PAGE SOURCES</a>]
                    [<a href="https://t.me/vsecoder_bio">BIO</a>]
                    [<a href="https://wakatime.com/@vsecoder">WAKATIME</a>]
                    [<Link href="/projects">PROJECTS</Link>]
                </p>
            </div>
            <Hr />
            <div className={styles.footer}>
                <p>Made with ❤️ by vsecoder.</p>
            </div>
        </>
    )
}
