package it.akademija.bookCategory;


public class BookCategoryDTO {
	
	private String name;
	
	public BookCategoryDTO() {
		
	}
	
	public BookCategoryDTO(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
