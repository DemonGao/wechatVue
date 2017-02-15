  import Home from './../components/Hello'


/*路由配置*/
const routes = [
	{
    path : '/:openid',
    name : 'index',
    component : Home
	}
];
export default routes;
