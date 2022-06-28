package it.akademija.bookCategory;


public class BookCategoryRequest {
	
	private String name;
	
	public BookCategoryRequest() {
		
	}
	
	public BookCategoryRequest(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
