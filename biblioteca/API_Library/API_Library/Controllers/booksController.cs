using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace API_Library.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class booksController : ControllerBase
  {
    private readonly string _connectionString = "Server=DESKTOP-C0LD890\\MSSQLSERVER03;DataBase=dbLibrary;User Id=sa;Password=12345678;TrustServerCertificate=true";

    // Metodo privado para validar que el id del libro no exista
    private books SearchBookVal(string id){
      using (var conection = new SqlConnection(_connectionString))
      {
        var sql = "select * from books where id = @Id";
        var book = conection.QuerySingleOrDefault<books>(sql, new { Id = id });

        return book;
      }
    }

    //Registrar un libro validando el usuario
    [HttpPost("addBook")]

    public IActionResult AddBook( [FromBody] books book)
    {
      if (book == null)
      {
        return BadRequest("Invalid user data");
      }
      
      using (var conection = new SqlConnection(_connectionString))
      {
        if (SearchBookVal(book.Id) == null)
        {
          var sql = "insert into books values (@Id,@tittle,@author,@editorial,@pages)";
          var rowsAffected = conection.Execute(sql, new { book.Id, book.tittle, book.author, book.editorial, book.pages });

          if (rowsAffected > 0)
          {
            return Ok("User registered succesfully!");
          }
          else
          {
            return StatusCode(500, "An error has ocurred while registering the book!");
          }
        }
        else
        {
          return StatusCode(409,"Book already exists!");
        }
        
      }
    }

    [HttpPut("updateBook/{Id}")]

    public IActionResult UpdateBook(string Id, [FromBody] books book)
    {
      if (book == null)
      {
        return BadRequest("Invalid book data!");
      }

      try
      {
        using ( var connection = new SqlConnection(_connectionString))
        {
          var sql = "update books set tittle = @tittle, author = @author, editorial = @editorial, pages = @pages where id=@Id";
          var rowsAffected = connection.Execute(sql, new { id = Id,book.tittle, book.author,book.editorial, book.pages});

          if (rowsAffected > 0)
          {
            return Ok("Book update succesfully!");
          }
          else
          {
            return NotFound("Book not found!");
          }
        }
      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Internal several error: {ex.Message}");
      }
    }
    // Obtener una lista de los libros
    [HttpGet("listBooks")]
    public IActionResult ListBooks()
    {
      try
      {
        using (var connection = new SqlConnection(_connectionString))
        {
          var sql = "select * from books";
          var books = connection.Query<books>(sql).ToList();

          if (books == null || books.Count == 0)
          {
            return NotFound("No books found!");
          }
          return Ok(books);
        }
      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Internal several error: {ex.Message}");
      }
    }

    // Obtener los id de los libros
    [HttpGet("idBooks")]

    public IActionResult IdBooks()
    {
      try
      {
        using (var connection = new SqlConnection(_connectionString))
        {
          var sql = "Select id from books";
          var ids = connection.Query<books>(sql).ToList();

          if (ids == null || ids.Count == 0)
          {
            return NotFound("No books found!");
          }
          
          return Ok(ids.Select(x => x.Id));
        }
      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Internal several error: {ex.Message}");
      }
    }

  }
}
