import Header from '../../components/Header'
import solana from '../../images/solana.png'
import Usd from '../../images/svg/usd'
import { useEffect, useState } from 'react'
import CMCPriceConverter from '../../components/CMCPriceConverter'

// 2:35:17
// the info page loads once we got the url data
// then we can pops up Each currencies page with whatever we need

const styles = {
    activeTab: `p-1 px-2 mr-2 rounded-lg bg-[#171924]`,
    tabItem: `px-2`,
    tabContainer: `flex items-center p-2 rounded-xl bg-[#222531] border border-gray-500/10 text-sm`,
    info: `min-h-screen`,
    main: `text-white mx-auto max-w-screen-2xl`,
    flexStart: `flex items-start`,
    flexBetween: `flex justify-between`,
    flexBetweenCenter: `flex justify-between items-center`,
    tabContainerWrapper: `p-10 pl-0 pr-0 w-2/3`,
    flexCenter: `flex items-center`,
}


const Currencies = () =>{

    const [coinName, setCoinName] = useState('');
    const [coinSymbol, setCoinSymbol] = useState('');
    const [price,setPrice] = useState('');

    useEffect(()=>{
        getURLData()
    },[])

    const getURLData = async () =>{
        const queryString = window.location.search
        //window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.

        const urlParams = new URLSearchParams(queryString);

        setCoinName(urlParams.get('coin'));
        setPrice(Number(urlParams.get('price')).toLocaleString());
        setCoinSymbol(urlParams.get('symbol'));
    }



    return (
        <div className={styles.info}>
            <Header/>

            <main className={styles.main}>
                <div className={styles.flexStart}>
                    <div className={styles.tabContainerWrapper}>
                        <div className={styles.flexBetween}>
                            <div className={styles.tabContainer}>
                                <p className={styles.activeTab}>Price</p>
                                <p className={styles.tabItem}>Market Cap</p>
                                <p className={styles.tabItem}>Trading View</p>
                                <p className={styles.tabItem}>History</p>
                            </div>

                            <div className={styles.tabContainer}>
                            <p className={styles.activeTab}>1D</p>
                            <p className={styles.tabItem}>2D</p>
                            <p className={styles.tabItem}>1M</p>
                            <p className={styles.tabItem}>3M</p>
                            <p className={styles.tabItem}>1Y</p>
                            <p className={styles.tabItem}>YTD</p>
                            <p className={styles.tabItem}>ALL</p>
                            <p className={styles.tabItem}>LOG</p>
                            </div>
                        </div>
                        <br/>
                        {/* <Graph/> */}

                        <br/>
                        <div className={styles.flexBetweenCenter}>
                            <div className='flex'>
                                <div className={styles.flexCenter}>
                                    <input className='outline-none' type='checkbox'/> &nbsp; USD
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div className={styles.flexCenter}>
                                <input type='checkbox' /> &nbsp; BTC
                                </div>
                            </div>
                            <p>
                            Want more data?{' '}
                            <span className='text-[#6188FF]'>Check out our API</span>
                        </p>
                        </div>

                        <br/>
                        <br/>
                        <CMCPriceConverter
                        from={coinName}
                        fromSymbol={coinSymbol}
                        fromLogo={solana}
                        toLogo={<Usd />}
                        price={price}
                        to='United States Dollars'
                        toSymbol='USD'
                        />

                    </div>

                </div>

            </main>

        </div>
    )
}

export default Currencies