import HeadlessTippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import AccountItem from '@/components/AccountItem';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '@/hooks';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debouncedValue = useDebounce(searchValue, 500);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (searchValue.startsWith(' ')) {
            return;
        }

        setSearchValue(searchValue);
    };

    useEffect(() => {
        if (debouncedValue.trim() === '') {
            setSearchResult([]);
            return;
        }

        setLoading(true);
        fetch(
            `https://jsonplaceholder.typicode.com/users?q=${encodeURIComponent(
                debouncedValue
            )}`
        )
            .then((response) => response.json())
            .then((response) => {
                console.log(response);

                if (response) {
                    setSearchResult(response);
                }

                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, [debouncedValue]);

    return (
        <HeadlessTippy
            appendTo={document.body}
            visible={showResult && searchResult.length > 0}
            onClickOutside={handleHideResult}
            interactive
            render={(attrs) => (
                <div
                    className={clsx(styles.searchResult)}
                    tabIndex='-1'
                    {...attrs}>
                    <PopperWrapper>
                        <h4 className={clsx(styles.searchTitle)}>account</h4>
                        {searchResult.map((user) => (
                            <AccountItem key={user.id} data={user} />
                        ))}
                    </PopperWrapper>
                </div>
            )}>
            <div className={clsx(styles.search)}>
                <input
                    ref={inputRef}
                    placeholder='search account and video'
                    value={searchValue}
                    onChange={handleChange}
                    onFocus={() => setShowResult(true)}
                />
                {searchValue && !loading && (
                    <button
                        className={clsx(styles.clear)}
                        onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && (
                    <FontAwesomeIcon
                        className={clsx(styles.loading)}
                        icon={faSpinner}
                    />
                )}
                <button className={clsx(styles.searchButton)}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
