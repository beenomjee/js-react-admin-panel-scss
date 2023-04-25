import React from 'react'
import { GoSearch } from 'react-icons/go'
import { TbColorFilter } from 'react-icons/tb'
import { IoIosMenu } from 'react-icons/io'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { BsGearWide, BsGrid3X3GapFill } from 'react-icons/bs'
import { AiFillBell, AiFillCalendar } from 'react-icons/ai'
import styles from './Header.module.scss'

const Header = ({ callback }) => {
    return (
        <div className={styles.container}>
            <div className={styles.sidebarTop}>
                <div className={styles.left}><h6>Architect</h6></div>
                <div className={styles.right}><button onClick={callback}><IoIosMenu /></button></div>
            </div>
            <div className={styles.other}>
                <div className={styles.left}>
                    <nav>
                        <ul>
                            <li><button><GoSearch /></button></li>
                            <li>
                                <span className={styles.menu}>
                                    <IoIosMenu />
                                </span>
                                <span className={styles.text}>Mega Menu</span>
                                <span className={styles.icon}><RiArrowDropDownLine /></span>
                            </li>
                            <li>
                                <span className={styles.number}>4</span>
                                <span className={styles.text}>Settings</span>
                                <span className={styles.icon}><RiArrowDropDownLine /></span>
                            </li>
                            <li>
                                <span className={styles.gear}>
                                    <BsGearWide />
                                </span>
                                <span className={styles.text}>Projects</span>
                                <span className={styles.icon}><RiArrowDropDownLine /></span>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.right}>
                    <ul className={styles.first}>
                        <li><button className={styles.grid}><BsGrid3X3GapFill /></button></li>
                        <li><button className={styles.bell}><AiFillBell /></button></li>
                        <li><button className={styles.flag}><img src="/flag.webp" alt="GERMANY" /></button></li>
                        <li><button className={styles.filter}><TbColorFilter /></button></li>
                    </ul>
                    <div className={styles.line}></div>
                    <div className={styles.second}>
                        <img src="/avatar.png" alt="AVATAR" />
                        <div className={styles.name}>
                            <h6>Alina Mclourd</h6>
                            <span>VP People Manager</span>
                        </div>
                        <button><AiFillCalendar /></button>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.third}><button><IoIosMenu /></button></div>
                </div>
            </div>
        </div>
    )
}

export default Header