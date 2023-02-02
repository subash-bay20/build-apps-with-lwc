global class LoginUser {
	@AuraEnabled
	global static String login(String userName, String password){
	String homeURL='https://cunning-koala-3v6wc0-dev-ed.trailblaze.my.site.com/s/'; 
        ApexPages.PageReference pageRef=Site.login(username, password, homeURL); 
        return pageRef.getUrl();
	}
}