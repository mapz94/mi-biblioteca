package com.example.library;

public class Library {
	private int    id_library;
	private String name;
	private String address;
	private String city;
	private String country;
	
	public Library(int id_library, String name, String address, String city, String country) {
		this.id_library = id_library;
		this.name = name;
		this.address = address;
		this.city = city;
		this.country  = country;
	}
	
	public int Get_id_library() {return id_library;}
	public String[] GetInfo() {
		String id_library = Integer.toString(this.id_library);
		String[] info = new String[] {id_library, name, address, city, country};
		return info;
		
	}


}
