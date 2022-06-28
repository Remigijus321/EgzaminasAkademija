package it.akademija.bookCategory;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.akademija.book.Book;
import it.akademija.book.BookDTO;

@Service
@Transactional
public class BookCategoryService {
	
	@Autowired
	private BookCategoryDAO bookCategoryDao;
	
	public List<BookDTO> getAllBooks() {
		List<BookDTO> books = new ArrayList<>();
		bookCategoryDao
		.findAll()
		.stream()
		.forEach(category -> {
			category
			.getBooks()
			.stream()
			.forEach((book) -> {
				books.add(createBookDTOFromEntity(book));
				});
		});
		return books;
	}
	
	public List<BookDTO> getAllBooksFromCategory(String category) {
		var bookCategory = getBookCategoryByName(category).getBooks();
		System.out.println(bookCategory);
		return bookCategory
				.stream()
				.map(book -> createBookDTOFromEntity(book))
				.collect(Collectors.toList());
	}
	
	public List<BookCategoryDTO> getAllBookCategories() {
		return bookCategoryDao
				.findAll()
				.stream()
				.map(category -> createBookCategoryDTOFromEntity(category))
				.collect(Collectors.toList());
	}
	
	public void createNewBookCategory(BookCategoryRequest createBookCategoryRequest) {
		BookCategory bookCategory = new BookCategory(createBookCategoryRequest.getName());
		bookCategoryDao.save(bookCategory);
	}
	
	public void updateBookCategory(BookCategoryRequest createBookCategoryRequest) {
		var bookCategory = getBookCategoryByName(createBookCategoryRequest.getName());
		bookCategory.setName(createBookCategoryRequest.getName());
	}
	
	public void deleteBookCategory(BookCategoryRequest createBookCategoryRequest) {
		bookCategoryDao.delete(getBookCategoryByName(createBookCategoryRequest.getName()));
	}
	
	private BookCategory getBookCategoryByName(String name) {
		return bookCategoryDao
				.findAll()
				.stream()
				.filter(category -> category.getName().equals(name))
				.findFirst()
				.orElseThrow();
	}
	
	private BookCategoryDTO createBookCategoryDTOFromEntity(BookCategory bookCategory) {
		BookCategoryDTO bookCategoryDTO = new BookCategoryDTO();
		bookCategoryDTO.setName(bookCategory.getName());
		return bookCategoryDTO;
	}
	
	private BookDTO createBookDTOFromEntity(Book book) {
		var bookDTO = new BookDTO();
		bookDTO.setName(book.getName());
		bookDTO.setPages(book.getPages());
		bookDTO.setPhotoUrl(book.getPhotoUrl());
		bookDTO.setISBN(book.getISBN());
		bookDTO.setSummary(book.getSummary());
		bookDTO.setCategory(book.getCategory());
		return bookDTO;
	}
}
