import { Link as RouterLink } from "react-router";
import styles from './link.module.css';


export const Link = ({ children, href, ...props }) => {
    const className = props.className || ''
    return (
        <RouterLink {...props} className={`${styles.link} ${className}`} to={href}>
            {children}
        </RouterLink>
    )
}