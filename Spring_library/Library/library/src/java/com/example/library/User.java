package com.example.library;


public class User {
	private int    id_user;
    private String run;
    private String password;
    private String name;
    private String father_name;
    private String mother_name;
    private String email;
    private int    id_library;
    
    public User(int id_user,String run,	String password, 
    			String name, String father_name, String mother_name, 
    			String email,	int id_library){
    	this.id_user = id_user;	
    	this.run = run;	
    	this.password = password;	
    	this.name = name;	
    	this.father_name = father_name;	
    	this.mother_name = mother_name;	
    	this.email = email;	
    	this.id_library = id_library;
        
    }  
    public String[] UserInfo(){
    	String id_user = Integer.toString(this.id_user);
    	String id_library = Integer.toString(this.id_library);
        String[] info = new String[]{id_user, run, name, father_name, mother_name,  email, id_library};
        return info;
    }
    public void ChangePassword(String new_pass) {
    	password = new_pass;
    }
}
