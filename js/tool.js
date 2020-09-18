window.tool = {
	
	//服务端地址
	serverUrl:"http://192.168.5.33:8080/webchatsrv/",
	
	//图片服务器地址
	imageServerUrl:"http://192.168.5.33:8001/data/",
	
	//netty服务后端发布的url地址
	nettyServerUrl:"ws://192.168.5.33:8003/WS",
	
	/**
	 * 判断字符串是否为空
	 * @param {Object} str
	 * true: 不为空
	 * false: 为空
	 */
	isNotNull:function(str){
		if(str != null && str != "" && str != undefined){
			return true;
		}
		return false;
	},
	
	/**
	 * 保存用户的全局对象
	 */
	setUserGlobalInfo:function(user){
		var userInfostr = JSON.stringify(user);
		if(window.plus){
			plus.storage.setItem("userInfo",userInfostr);
		}
	},
	
	/**
	 * 获取用户的全局对象
	 */
	getUserGlobalInfo:function(){
		var userInfostr = plus.storage.getItem("userInfo");
		return JSON.parse(userInfostr);
	},
	
	/**
	 * 清楚用户的全局对象
	 */
	cleanUserGloba:function(){
		plus.storage.removeItem("userInfo");
	},
	
	/**
	 * 缓存用户联系人的信息
	 */
	saveFriends:function(myFriends){
		var friends = JSON.stringify(myFriends);
		if(window.plus){
			plus.storage.setItem("userFriends",friends);
		}
	},
	
	getFriends:function(){
		var myFriends = plus.storage.getItem("userFriends");
		if(!this.isNotNull(myFriends)){
			return [];
		}else{
			return JSON.parse(myFriends);
		}
	},
}