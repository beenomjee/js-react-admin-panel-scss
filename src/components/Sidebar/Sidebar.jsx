import React, { useState } from 'react'
import styles from './Sidebar.module.scss'
import { RxDashboard } from 'react-icons/rx'
import { AiFillLayout, AiOutlineCar, AiOutlinePieChart, AiOutlineLineChart } from 'react-icons/ai'
import { TbBox } from 'react-icons/tb'
import { IoDiamondOutline, IoFootball, IoBulbOutline } from 'react-icons/io5'
import { RiArrowDropDownLine, RiProfileLine } from 'react-icons/ri'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { FaChartBar } from 'react-icons/fa'
import { TbDeviceGamepad2 } from 'react-icons/tb'
import { FiPieChart } from 'react-icons/fi'
import { BsPieChart } from 'react-icons/bs'

const data = [
    {
        title: 'MENU',
        sub: [
            {
                title: 'Dashboards',
                id: 1,
                icon: <RxDashboard />,
                sub: [
                    {
                        title: 'Analytics',
                        isActive: true,
                    },
                    {
                        title: 'Commerce',
                        isActive: false,
                    },
                    {
                        title: 'Sales',
                        isActive: false,
                    },
                    {
                        title: 'Minimal',
                        isActive: false,
                    },
                    {
                        title: 'CRM',
                        isActive: false,
                    }
                ]
            },
            {
                title: 'Pages',
                id: 2,
                icon: <AiFillLayout />,
                sub: [
                    {
                        title: 'Page 1',
                        isActive: false,
                    },
                    {
                        title: 'Page 2',
                        isActive: false,
                    },
                    {
                        title: 'Page 3',
                        isActive: false,
                    },
                ]
            },
            {
                title: 'Applications',
                id: 3,
                icon: <TbBox />,
                sub: [
                    {
                        title: 'Application 1',
                        isActive: false,
                    },
                    {
                        title: 'Application 2',
                        isActive: false,
                    },
                    {
                        title: 'Application 3',
                        isActive: false,
                    },
                ]
            },
        ]
    },
    {
        title: 'UI Components',
        sub: [
            {
                title: 'Elements',
                id: 4,
                icon: <IoDiamondOutline />,
                sub: [
                    {
                        title: 'Element 1',
                        isActive: false,
                    },
                    {
                        title: 'Element 2',
                        isActive: false,
                    },
                    {
                        title: 'Element 3',
                        isActive: false,
                    },
                ]
            },
            {
                title: 'Components',
                id: 5,
                icon: <AiOutlineCar />,
                sub: [
                    {
                        title: 'Component 1',
                        isActive: false,
                    },
                    {
                        title: 'Component 2',
                        isActive: false,
                    },
                    {
                        title: 'Component 3',
                        isActive: false,
                    },
                ]
            },
            {
                title: 'Tables',
                id: 6,
                icon: <HiOutlineDesktopComputer />,
                sub: [
                    {
                        title: 'Table 1',
                        isActive: false,
                    },
                    {
                        title: 'Table 2',
                        isActive: false,
                    },
                    {
                        title: 'Table 3',
                        isActive: false,
                    },
                ]
            },
        ]
    },
    {
        title: 'dashboard Widgets',
        sub: [
            {
                title: 'Chart Boxes 1',
                id: 7,
                icon: <IoFootball />,
                sub: []
            },
            {
                title: 'Chart Boxes 2',
                id: 8,
                icon: <AiOutlinePieChart />,
                sub: []
            },
            {
                title: 'Chart Boxes 3',
                id: 9,
                icon: <FaChartBar />,
                sub: []
            },
            {
                title: 'Profile',
                id: 10,
                icon: <RiProfileLine />,
                sub: []
            },
        ]
    },
    {
        title: 'Forms',
        sub: [
            {
                title: 'Elements',
                id: 11,
                icon: <IoBulbOutline />,
                sub: [
                    {
                        title: 'Element 1',
                        isActive: false,
                    },
                    {
                        title: 'Element 2',
                        isActive: false,
                    },
                    {
                        title: 'Element 3',
                        isActive: false,
                    },
                ]
            },
            {
                title: 'Widgets',
                id: 12,
                icon: <TbDeviceGamepad2 />,
                sub: [
                    {
                        title: 'Element 1',
                        isActive: false,
                    },
                    {
                        title: 'Element 2',
                        isActive: false,
                    },
                    {
                        title: 'Element 3',
                        isActive: false,
                    },
                ]
            },
        ]
    },
    {
        title: 'Charts',
        sub: [
            {
                title: 'ChartJS',
                id: 13,
                icon: <FiPieChart />,
                sub: []
            },
            {
                title: 'Apex Charts',
                id: 14,
                icon: <BsPieChart />,
                sub: []
            },
            {
                title: 'Chart Sparklines',
                id: 15,
                icon: <AiOutlineLineChart />,
                sub: []
            },
        ]
    }
]

const Sidebar = () => {
    const [openMenuIdArray, setOpenMenuIdArray] = useState([1]);
    const menuOpenHandler = (id) => {
        setOpenMenuIdArray((prevState) => {
            if (prevState.indexOf(id) !== -1) {
                return prevState.filter((num) => id !== num);
            }
            return [...prevState, id];
        });
    }
    return (
        <div className={styles.container}>
            {
                data.map((d, i) => (
                    <div key={i} className={styles.fullMenu}>
                        <h6>{d.title}</h6>
                        {
                            d.sub.map((s, ind) => (
                                <div key={ind} className={styles.subMenu}>
                                    <div className={styles.top} onClick={() => menuOpenHandler(s.id)}>
                                        <div className={styles.left}>
                                            <span className={styles.icon}>{s.icon}</span>
                                            <span>{s.title}</span>
                                        </div>
                                        {
                                            s.sub.length > 0 &&
                                            <div className={styles.right}>
                                                <span><RiArrowDropDownLine /></span>
                                            </div>
                                        }
                                    </div>

                                    {
                                        s.sub.length > 0 &&
                                        <div className={`${styles.bottom} ${(s.sub.find((e) => e.isActive)) ? styles.active : ''} ${(openMenuIdArray.find((num) => num === s.id) ? styles.open : styles.close)}`}>
                                            {
                                                s.sub.map((e, index) => (
                                                    <button className={(e.isActive ? styles.active : '')} key={index}>{e.title}</button>
                                                ))
                                            }
                                        </div>
                                    }


                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Sidebar