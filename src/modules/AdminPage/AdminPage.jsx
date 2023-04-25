import React, { useEffect, useRef } from 'react'
import { HiComputerDesktop } from 'react-icons/hi2';
import { AiOutlineStock, AiOutlineFileWord, AiOutlineCar, AiOutlineFire, AiFillStar, AiOutlineCloud } from 'react-icons/ai'
import { BsBuildings } from 'react-icons/bs'
import { BiChevronUp, BiChevronDown, BiCake } from 'react-icons/bi';
import { IoIosMenu } from 'react-icons/io'

import styles from './AdminPage.module.scss'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler
);

const TimeLineItem1 = () => (
    <span className={styles.timeline1}>All Hands Meeting</span>
)

const TimeLineItem2 = () => (
    <span className={styles.timeline2}><span>Yet another one, at</span> <span>15:00 PM</span></span>
)

const TimeLineItem3 = () => (
    <span className={styles.timeline3}><span>Build the production release </span><span>New</span></span>
)

const TimeLineItem4 = () => (
    <span className={styles.timeline4}>Something Not Important</span>
)

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
const data = [73, 32, 76, 46, 38, 69, 48, 50, 55, 49, 64, 50, 67, 40, 45, 31, 39, 77, 46, 51, 67, 38];
const AdminPage = () => {
    const chartContainer = useRef(null);
    const timeLineContainer = useRef(null);

    useEffect(() => {
        timeLineContainer.current.style.maxHeight = `${chartContainer.current.offsetHeight}px`;
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.pageInfo}>
                <div className={styles.left}>
                    <div className={styles.left}>
                        <span><AiOutlineCar /></span>
                    </div>
                    <div className={styles.right}>
                        <h6>Analytics Dashboard</h6>
                        <p>This is an example dashboard created using build-in elements and components.</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <button><AiFillStar /></button>
                    <button><span className={styles.icon}><BiCake /></span><span className={styles.text}>buttons</span><span className={styles.dropdown}><BiChevronDown /></span>
                    </button>
                </div>
            </div>
            <div className={styles.page}>
                <div className={styles.variations}>
                    <button className={styles.active}>Variation 1</button>
                    <button>Variation 2</button>
                </div>
                <div className={styles.performance}>
                    <div className={styles.top}>
                        <h6>Portfolio Performance</h6>
                        <button>View All</button>
                    </div>
                    <div className={styles.middle}>
                        <div className={styles.card}>
                            <div className={styles.left}>
                                <span className={styles.orange}><HiComputerDesktop /></span>
                            </div>
                            <div className={styles.right}>
                                <h6>Case Deposits</h6>
                                <span>1,7M</span>
                                <span><span className={styles.red}><BiChevronDown /> 54.1%</span> less earnings</span>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.left}>
                                <span className={styles.red}><AiOutlineStock /></span>
                            </div>
                            <div className={styles.right}>
                                <h6>Invested Dividents</h6>
                                <span>9M</span>
                                <span>Grow Rate: <span className={styles.blue}><BiChevronDown /> 14.1%</span></span>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.left}>
                                <span className={styles.green}><BsBuildings /></span>
                            </div>
                            <div className={styles.right}>
                                <h6>Capital Gains</h6>
                                <span className={styles.green}>$563</span>
                                <span>Increased by <span className={styles.yellow}><BiChevronUp /> 7.35%</span></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <button>
                            <span className={styles.icon}><AiOutlineFileWord /></span>
                            <span>View Complete Report</span>
                        </button>
                    </div>
                </div>

                {/*  */}
                <div className={styles.timelineSupport}>
                    <div className={styles.left} ref={chartContainer}>
                        <div className={styles.top}>
                            <div className={styles.left}>
                                <p><AiOutlineCloud /></p>
                                <h6>Technical Support</h6>
                            </div>
                            <div className={styles.right}>
                                <button><IoIosMenu /></button>
                            </div>
                        </div>
                        <div className={styles.middle} >
                            <h6>New Accounts since 2018</h6>
                            <div className={styles.information}>
                                <p className={styles.green}><BiChevronUp /></p>
                                <p className={styles.right}>
                                    <span className={styles.text}>78</span>
                                    <span className={styles.light}>%</span>
                                    <span className={styles.green}>+14</span>
                                </p>
                            </div>
                            <div className={styles.chart}>
                                <Line options={{
                                    responsive: true,
                                    scales: {
                                        x: {
                                            display: false
                                        },
                                        y: {
                                            display: false,
                                            min: 30,
                                            max: 77
                                        }
                                    }
                                }} data={{
                                    labels: labels,
                                    datasets: [
                                        {
                                            label: 'Dataset 1',
                                            data: data,
                                            borderColor: '#44c680',
                                            backgroundColor: ({ chart }) => {
                                                const { ctx, width, height } = chart;
                                                const bg = ctx.createLinearGradient(0, 0, 0, height);
                                                bg.addColorStop(0, '#b4e7c8');
                                                bg.addColorStop(0.5, '#b4e7c8');
                                                bg.addColorStop(1, '#fff');
                                                return bg;
                                            },
                                            tension: 0.4,
                                            pointRadius: 0,
                                            fill: true,
                                        },
                                    ]
                                }} />
                            </div>
                            <h6>Sales Progress</h6>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.top}>
                                <div className={styles.left}>
                                    <h6>Total Orders</h6>
                                    <p>Last year expenses</p>
                                </div>
                                <div className={styles.right}>
                                    <span>$1896</span>
                                </div>
                            </div>
                            <div className={styles.bottom}>
                                <div className={styles.bg}>
                                    <div className={styles.upper}></div>
                                </div>
                                <div className={styles.info}>
                                    <span>YoY Growth</span>
                                    <span>100%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right} ref={timeLineContainer}>
                        <div className={styles.top}>
                            <div className={styles.left}>
                                <p><AiOutlineFire /></p>
                                <h6>TimeLine Example</h6>
                            </div>
                            <div className={styles.right}>
                                <button><IoIosMenu /></button>
                            </div>
                        </div>
                        <div className={styles.middle} >
                            <div className={styles.wrapper}>
                                <div style={{ '--imp': '#bb0327' }}><TimeLineItem1 /></div>
                                <div style={{ '--imp': '#f69301' }}><TimeLineItem2 /></div>
                                <div style={{ '--imp': '#00b64c' }}><TimeLineItem3 /></div>
                                <div style={{ '--imp': '#2843b6' }}><TimeLineItem4 /></div>
                                <div style={{ '--imp': '#bb0327' }}><TimeLineItem1 /></div>
                                <div style={{ '--imp': '#f69301' }}><TimeLineItem2 /></div>
                                <div style={{ '--imp': '#00b64c' }}><TimeLineItem3 /></div>
                                <div style={{ '--imp': '#2843b6' }}><TimeLineItem4 /></div>
                                <div style={{ '--imp': '#bb0327' }}><TimeLineItem1 /></div>
                                <div style={{ '--imp': '#f69301' }}><TimeLineItem2 /></div>
                                <div style={{ '--imp': '#00b64c' }}><TimeLineItem3 /></div>
                                <div style={{ '--imp': '#2843b6' }}><TimeLineItem4 /></div>
                                <div style={{ '--imp': '#bb0327' }}><TimeLineItem1 /></div>
                                <div style={{ '--imp': '#f69301' }}><TimeLineItem2 /></div>
                                <div style={{ '--imp': '#00b64c' }}><TimeLineItem3 /></div>
                                <div style={{ '--imp': '#2843b6' }}><TimeLineItem4 /></div>
                                <div style={{ '--imp': '#00b64c' }}><TimeLineItem3 /></div>
                                <div style={{ '--imp': '#2843b6' }}><TimeLineItem4 /></div>
                                <div style={{ '--imp': '#bb0327' }}><TimeLineItem1 /></div>
                                <div style={{ '--imp': '#f69301' }}><TimeLineItem2 /></div>
                                <div style={{ '--imp': '#00b64c' }}><TimeLineItem3 /></div>
                                <div style={{ '--imp': '#2843b6' }}><TimeLineItem4 /></div>
                                <div style={{ '--imp': '#bb0327' }}><TimeLineItem1 /></div>
                                <div style={{ '--imp': '#f69301' }}><TimeLineItem2 /></div>
                                <div style={{ '--imp': '#00b64c' }}><TimeLineItem3 /></div>
                                <div style={{ '--imp': '#2843b6' }}><TimeLineItem4 /></div>
                                <div style={{ '--imp': '#00b64c' }}><TimeLineItem3 /></div>
                                <div style={{ '--imp': '#2843b6' }}><TimeLineItem4 /></div>
                                <div style={{ '--imp': '#bb0327' }}><TimeLineItem1 /></div>
                                <div style={{ '--imp': '#f69301' }}><TimeLineItem2 /></div>
                                <div style={{ '--imp': '#00b64c' }}><TimeLineItem3 /></div>
                                <div style={{ '--imp': '#2843b6' }}><TimeLineItem4 /></div>
                                <div style={{ '--imp': '#bb0327' }}><TimeLineItem1 /></div>
                                <div style={{ '--imp': '#f69301' }}><TimeLineItem2 /></div>
                                <div style={{ '--imp': '#00b64c' }}><TimeLineItem3 /></div>
                                <div style={{ '--imp': '#2843b6' }}><TimeLineItem4 /></div>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <button>View All Messages</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AdminPage