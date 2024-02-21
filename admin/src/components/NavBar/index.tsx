import menu from "./NavBar.module.scss";
import React, { useState,useRef} from 'react';
import { Link } from 'react-router-dom';
import { Space, Dropdown, Button } from 'antd';
import type { MenuProps } from 'antd';
import UserOutlined from '@ant-design/icons/UserOutlined';
import Dialog from '@/components/Dialog'

const DropdownItem = (element: JSX.Element, items: MenuProps['items']) => {
    return (
        <Dropdown overlayClassName={menu.dropdown_group} placement="bottom" menu={{ items }} arrow>
            {element}
        </Dropdown>
    )
}
//组件数据
const Home: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link to='/home'>首页</Link>
        ),
    },
];
const Introduction: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link className={menu.dropdown_item} to='/IntroductionDetail/park'>小公园</Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link className={menu.dropdown_item} to='/IntroductionDetail/palace'>老妈宫</Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link className={menu.dropdown_item} to='/IntroductionDetail/wayPark'>西堤公园</Link>

        ),
    }
];
const Guide: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
];
const About: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
];
type MenuItemData = {
    [key: string]: MenuProps['items']
}
const MenuItem: MenuItemData = {
    '首页': Home,
    '景区介绍': Introduction,
    '旅游指南': Guide,
    '关于汕头': About
}
let routePath: string = ''
let ItemData: JSX.Element[] = []
for (let key in MenuItem) {
    switch (key) {
        case '首页':
            routePath = '/home'
            break;
        case '景区介绍':
            routePath = '/Introduction'
            break;
        case '旅游指南':
            routePath = '/Guide'
            break;
        case '关于汕头':
            routePath = '/About'
            break;
        default:
            break
    }
    if (key === '景区介绍') {
        ItemData.push(DropdownItem(<Link to={routePath} className={menu.menu_item}>{key}</Link>, MenuItem[key]))
    } else {
        ItemData.push(<Link to={routePath} className={menu.menu_item}>{key}</Link>)
    }

}
const NavBar: React.FC = () => {
    let ChildRef:any = useRef();
    function handleOnClick() {
        ChildRef.current.showModal();
    }
    const [isShow, setIsShow] = useState(true)
    const handleScroll = () => {
        if (window.pageYOffset >= 150) {  //if语句判断window页面Y方向的位移是否大于或者等于导航栏的height像素值
            setIsShow(false)
        } else {
            setIsShow(true)
        }
    }
    window.addEventListener('scroll', handleScroll);
    //定义handleScroll事件函数

    return (
        <>
            <Dialog onRef={ChildRef} />
            <div className={isShow ? menu.menu : menu.menu + ' ' + menu.menu_active}>
                <div className={menu.menu_group}>
                    <Space size='large'>
                        {
                            ...ItemData
                        }
                    </Space>
                    <Space size='large'>
                        <Button onClick={handleOnClick} className={menu.login_content} size='large' type="default" shape="round" >
                            <UserOutlined className={menu.login_svg} />
                            <div>登录</div>
                        </Button>
                    </Space>
                </div>
            </div>
        </>

    )
}
export default NavBar;