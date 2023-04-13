import classNams from 'classnames/bind'
import styles from './Header.module.scss'

const cx = classNams.bind(styles)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
            </div>
        </header>
    );
}

export default Header;