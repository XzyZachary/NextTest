import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;
const Header = () => {
    return (
        // <h2 classNameName="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        //     <Link href='/'>
        //         <a classNameName='hover:underline'>Zachary</a>
        //     </Link>
        // </h2>
        <header>
            <div className="container">
                <div className="blog-header">
                    <div className="search-form-col">
                        <a className="search-form" href="contact">
                            <div className="input-group">
                                <span className="input-group-addon"><img src="/image/mail-icon-white.png" alt="" /></span>
                                <span className="form-control">留言</span>
                            </div>
                        </a>
                    </div>
                    <div className="logo-col text-center">
                        <a href="/"><img src="/image/2.png" width="200" /></a>
                    </div>
                    <div className="menu-trigger-col">
                        <button className="menu-trigger pull-right">
                            <span className="active-page">菜单</span>
                            <img src="/image/menu-align-white.png" alt="" className="icon-burger" />
                            <img src="/image/menu-close-white.png" alt="" className="icon-cross" />
                        </button>
                    </div>
                </div>
            </div>
            <BannerAnim prefixCls="banner-user">
                <Element prefixCls="banner-user-elem" key="0">
                    <BgElement key="bg" className="bg" style={{ background: '#364D79'}} />
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                        Ant Motion Banner
                    </TweenOne>
                    <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>
                        The Fast Way Use Animation In React
                    </TweenOne>
                </Element>
                <Element prefixCls="banner-user-elem" key="1">
                    <BgElement key="bg" className="bg" style={{ background: '#64CBCC'}} />
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                        Ant Motion Banner
                    </TweenOne>
                    <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>
                        The Fast Way Use Animation In React
                    </TweenOne>
                </Element>
            </BannerAnim>
        </header>
    )
}

export default Header;