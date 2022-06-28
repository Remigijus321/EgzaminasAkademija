package it.akademija.book;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import it.akademija.bookCategory.BookCategory;

@Entity
public class Book {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String name;
	
	private String summary;
	
	private long isbn;
	
	private String photoUrl;
	
	private int pages;
	
	private String category;
	
	public Book() {
		
	}
	
	public Book(String name, String summary, long isbn, String photoUrl, int pages, String category) {
		super();
		this.name = name;
		this.summary = summary;
		this.isbn = isbn;
		this.photoUrl = photoUrl;
		this.pages = pages;
		this.category = category;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public long getISBN() {
		return isbn;
	}

	public void setISBN(long isbn) {
		this.isbn = isbn;
	}

	public String getPhotoUrl() {
		return photoUrl;
	}

	public void setPhotoUrl(String photoUrl) {
		this.photoUrl = photoUrl;
	}

	public int getPages() {
		return pages;
	}

	public void setPages(int pages) {
		this.pages = pages;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
	
}
