import styles from "./footer.module.css";
import { Hr } from "../hr";

export function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <p> More links:<br />
                    [<a href="https://github.com/vsecoder/vsecoder.github.io">PAGE SOURCES</a>]
                    [<a href="https://t.me/vsecoder_bio">BIO</a>]
                    [<a href="https://wakatime.com/@vsecoder">WAKATIME</a>]
                    [<a href="https://projects.vsecoder.dev/">PROJECTS</a>]
                </p>
            </div>
            <Hr />
            <div className={styles.footer}>
                <p>Made with ❤️ by vsecoder.</p>
            </div>
        </>
    )
}
