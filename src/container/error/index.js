import React, { PureComponent } from 'react';
import { Result, WhiteSpace } from 'antd-mobile';
import styles from './style.css';
const myImg = src => <img src={src} className="am-icon am-icon-md" style={{width: 60, height: 60}} alt="" />;

class Error extends PureComponent{
    render(){
        return this.props.children||
        <div style={{padding: 5}}>
          <Result
                img={myImg('https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg')}
                title="无法完成操作"
                message="请使用微信扫描二维码重新登陆，谢谢"
            />
            <WhiteSpace size='lg'/>
            <a className={styles.back} href="javascript:WeixinJSBridge.call('closeWindow');">
                <span>返 回</span>
            </a>
        </div>
    }
}
export default Error;