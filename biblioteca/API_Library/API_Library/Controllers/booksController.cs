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


    [HttpPut("addBooks")]

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
          return Ok(ids);
        }
      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Internal several error: {ex.Message}");
      }
    }

  }
}
