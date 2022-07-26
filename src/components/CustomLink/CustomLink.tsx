import { useRouter } from 'next/router';
import Link from 'next/link';
import cx from 'classnames';
import styles from './CustomLink.module.scss';

interface ICustomLink {
    href: string;
    children: string | JSX.Element;
    className?: string;
    activeLinkStyle?: string;
}

const CustomLink = ({
    href,
    children,
    className,
    activeLinkStyle,
}: ICustomLink) => {
    const router = useRouter();

    return (
        <Link href={href} passHref>
            <a
                className={cx(className, router.asPath === href && styles[activeLinkStyle || "default"])}
            >
                {children}
            </a>
        </Link>
    );
};

export default CustomLink;
