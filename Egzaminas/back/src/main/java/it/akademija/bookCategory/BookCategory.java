package it.akademija.bookCategory;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import it.akademija.book.Book;

@Entity
public class BookCategory {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String name;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<Book> books = new ArrayList<>();
	
	public BookCategory() {
		
	}
	
	public BookCategory(String name) {
		this.name = name;
	}
	
	public void addBookToCategory(Book book) {
		books.add(book);
	}
	
	public void removeBookFromCategory(Book book) {
		books.remove(books.stream().filter(i -> i.getISBN() == book.getISBN()).findAny().orElseThrow());
	}
	
	public void updateBookFromCategory(Book book) {
		books.remove(books.stream().filter(i -> i.getISBN() == book.getISBN()).findAny().orElseThrow());
		books.add(book);
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

	public List<Book> getBooks() {
		return books;
	}

	public void setBooks(List<Book> books) {
		this.books = books;
	}
}
