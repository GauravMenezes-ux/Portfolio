import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch';
import Error from '../pages/_error';
import {Component} from 'react';

export default class About extends Component{

    static async getInitialProps(){
        const res = await fetch("https://api.github.com/users/thedankrailorde")
        const statusCode = res.status > 200 ? res.status : false;
        const data = await res.json();
        console.log(data);
        return { user: data , statusCode}
    }

    render(){

        const {user, statusCode} = this.props;
    
        if(statusCode){
            return <Error statusCode={statusCode}/>
        }

        return (
            <Layout title="About">    
                <p>{user.name}</p>
                <p>A Bavascript Programmer</p>
                <img src={user.avatar_url} alt="Gaurav" height="200px"/>
            </Layout>
        )
    }
}

