package it.akademija.book;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.akademija.bookCategory.BookCategory;
import it.akademija.bookCategory.BookCategoryDAO;

@Service
@Transactional
public class BookService {
	
	@Autowired
	private BookCategoryDAO bookCategoryDao;
	
	public void addNewBookToCategory(BookRequest bookRequest) {
		
		var bookCategory = getBookCategoryByBookRequest(bookRequest);
		var book = createNewBookFromBookRequest(bookRequest);
		bookCategory.addBookToCategory(book);
	}
	
	public void updateBookFromCategory(BookRequest bookRequest) {
		var bookCategory = getBookCategoryByBookRequest(bookRequest);
		bookCategory.updateBookFromCategory(createNewBookFromBookRequest(bookRequest));
	}
	
	public void deleteBookFromCategory(BookRequest bookRequest) {
		var bookCategory = getBookCategoryByBookRequest(bookRequest);
		bookCategory.removeBookFromCategory(createNewBookFromBookRequest(bookRequest));
	}
	
	private Book createNewBookFromBookRequest(BookRequest bookRequest) {
		var book = new Book();
		book.setName(bookRequest.getName());
		book.setPages(bookRequest.getPages());
		book.setPhotoUrl(bookRequest.getPhotoUrl());
		book.setISBN(bookRequest.getISBN());
		book.setSummary(bookRequest.getSummary());
		book.setCategory(bookRequest.getCategory());
		return book;
	}
	
	private BookCategory getBookCategoryByBookRequest(BookRequest bookRequest) {
		return bookCategoryDao
				.findAll()
				.stream()
				.filter(category -> category.getName().equals(bookRequest.getCategory()))
				.findFirst()
				.orElseThrow();
	}

}
