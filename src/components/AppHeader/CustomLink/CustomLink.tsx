import { useRouter } from 'next/router';
import Link from 'next/link';
import cx from 'classnames';
import styles from './CustomLink.module.scss';

interface ICustomLink {
    href: string;
    children: string | JSX.Element;
    className?: string;
    activeStyle?: string;
}

const CustomLink = ({
    href,
    children,
    className,
    activeStyle,
}: ICustomLink) => {
    const router = useRouter();

    return (
        <Link href={href} passHref>
            <a
                className={cx(className, router.asPath === href && styles[activeStyle || "default"])}
            >
                {children}
            </a>
        </Link>
    );
};

export default CustomLink;
