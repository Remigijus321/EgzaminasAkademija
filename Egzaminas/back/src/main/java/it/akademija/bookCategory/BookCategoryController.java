package it.akademija.bookCategory;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import it.akademija.book.Book;
import it.akademija.book.BookDTO;
import it.akademija.book.BookRequest;
import it.akademija.book.BookService;

@RestController
@Api(value = "menus")
@RequestMapping(path = "/api")
public class BookCategoryController {
	
	@Autowired
	private BookCategoryService bookCategoryService;
	
	@Autowired
	private BookService bookService;
	
	@Secured({ "ROLE_ADMIN", "ROLE_USER" })
	@GetMapping(path = "/books")
	@ApiOperation(value = "returns all available books", notes = "returns all available books")
	public List<BookDTO> getAllBooks() {
		return bookCategoryService.getAllBooks();
	}
	
	@Secured({ "ROLE_ADMIN", "ROLE_USER" })
	@GetMapping(path = "/books/category")
	@ApiOperation(value = "returns all books from a specific category", notes = "returns books from category")
	public List<BookDTO> getBooksFromCategory(@RequestParam String category) {
		return bookCategoryService.getAllBooksFromCategory(category);
	}
	
	@Secured({ "ROLE_ADMIN", "ROLE_USER" })
	@GetMapping(path = "/category")
	@ApiOperation(value = "returns all book categories", notes = "returns all book categories")
	public List<BookCategoryDTO> getAllBookCategories() {
		return bookCategoryService.getAllBookCategories();
	}
	
	@Secured({ "ROLE_ADMIN" })
	@PostMapping(path = "/category/new")
	@ApiOperation(value = "creates new book category", notes = "creates new book category")
	public void createNewBookCategory(@RequestBody BookCategoryRequest bookCategoryRequest) {
		bookCategoryService.createNewBookCategory(bookCategoryRequest);
	}
	
	@Secured({ "ROLE_ADMIN" })
	@PutMapping(path = "/category/update")
	@ApiOperation(value = "updates book category", notes = "updates book category")
	public void updateBookCategory(@RequestBody BookCategoryRequest bookCategoryRequest) {
		bookCategoryService.updateBookCategory(bookCategoryRequest);
	}
	
	@Secured({ "ROLE_ADMIN" })
	@DeleteMapping(path = "/category/delete")
	@ApiOperation(value = "deletes book category", notes = "deletes book category")
	public void deleteBookCategory(@RequestBody BookCategoryRequest bookCategoryRequest) {
		bookCategoryService.deleteBookCategory(bookCategoryRequest);
	}
	
	@Secured({ "ROLE_ADMIN" })
	@PostMapping(path = "/books/new")
	@ApiOperation(value = "adds new book to the category", notes = "adds new book to the category")
	public void addNewItemToRestaurantMenu(@RequestBody BookRequest bookRequest) {
		bookService.addNewBookToCategory(bookRequest);
	}
	
	@Secured({ "ROLE_ADMIN" })
	@PutMapping(path = "/books/update")
	@ApiOperation(value = "updates book", notes = "updates book")
	public void updateBook(@RequestBody BookRequest bookRequest) {
		bookService.updateBookFromCategory(bookRequest);
	}
	
	@Secured({ "ROLE_ADMIN" })
	@DeleteMapping(path = "/books/delete")
	@ApiOperation(value = "deletes book from category", notes = "deletes book from category")
	public void deleteBook(@RequestBody BookRequest bookRequest) {
		bookService.deleteBookFromCategory(bookRequest);
	}
}
