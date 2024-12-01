using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace API_Front.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UsersController : ControllerBase
  {
    //Cadena de conexion para empezar a usarla
    private readonly string _connectionString = "Server=DESKTOP-C0LD890\\MSSQLSERVER03;DataBase=dbtest;User Id=sa;Password=12345678;TrustServerCertificate=true";

    //Los proyectos de API, reciben metodos HTTP, dependiendo del uso que les vamos a dar,
    //se usa segun nuestra 
    [HttpPost("login")]

    public IActionResult Login([FromBody] Users user)
    //Un metodo de accion en un controlador de ASP.NET Core que recibe datos de una solicitud HTTP y devuelve un resultado de accion.
    //Indica que el metodo espera un objeto user de tipo Users en el cuerpo de la solicitud HTTP. El archivo [FromBody]
    //le dice a ASP.NET Core que los datos deben ser deserializados desde el cuerpo de la solicitud en un objeto Users
    {
      if (user == null)
      {
        return BadRequest("Invalid user data.");
      }
      //Para que esto funcione hay que importar la libreria y si no aparece
      //hay que instalar un paquete llamado Microsoft.Data.SqlClient
      using (var conecction = new SqlConnection(_connectionString))
      {
        var sql = "SELECT * FROM users WHERE username = @username and password = @password";
        var result = conecction.QuerySingleOrDefault<Users>(sql, new { user.username, user.password}); //Remplazar los datos capturados
        //QuerySingleOrDefault es un metodo de Dapper, para hacer el mapeo
        
        if (result != null) {
          return Ok("Login Succesfull");
        }
        else
        {
          return Unauthorized("Invalid Credentials!");
        }
      }
    }

    [HttpPost("register")]

    public IActionResult Register([FromBody] Users user)
    {
      if (user == null)
      {
        return BadRequest("Invalid user data!");
      }

      using (var connection = new SqlConnection(_connectionString))
      {
        var sql = "INSERT INTO users (username, password) values (@username, @password)";
        var rowsAffected = connection.Execute(sql, new { user.username, user.password });

        if (rowsAffected > 0)
        {
          return Ok("User Registered succesfully!");
        }
        else
        {
          return StatusCode(500, "An error ocurred while registering the user!");
        }
      }
    }
    // Metodo Update: Nos permitira de forma convencional actualizar los registros de un usuario
    // pero para ello necesitamos validar que el usuario exista en en la base de datos, por su id por ejemplo
    [HttpPut("update/{Id}")]

    public IActionResult Update(int Id, [FromBody] Users user)
    {
      if (user == null)
      {
        return BadRequest("Invalid user data!");
      }

      using (var connection = new SqlConnection(_connectionString))
      {
        var sql = "Update Users set username = @username , password = @password where id=@Id";
        var rowsAffected = connection.Execute(sql, new {id=Id,user.username, user.password});

        if (rowsAffected > 0)
        {
          return Ok("User Update Succesfully!");
        }
        else
        {
          return NotFound("User not found!");
        }
      }
    }

    [HttpDelete("delete/{Id}")]

    public IActionResult Delete(int Id)
    {
      if (Id == 0)
      {
        return BadRequest("Invalid Id!");
      }

      using (var connection = new SqlConnection(_connectionString))
      {
        var sql = "delete from Users where id=@Id";
        var rowsAffected = connection.Execute(sql, new { id = Id });

        if (rowsAffected > 0)
        {
          return Ok("User delete Succesfully!");
        }
        else
        { 
          return NotFound("User not found!");
        }
      }
    }

    [HttpGet("getUsers")]

    public IActionResult GetUsers()
    {
      try
      {
        using (var connection = new SqlConnection(_connectionString))
        {
          var sql = "SELECT * FROM users";

          var users = connection.Query<Users>(sql).ToList();

          if (users == null || users.Count == 0)
          {
            return NotFound("No users found!");
          }
          return Ok(users);
        }
      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Internal several error: {ex.Message}");
      }
    }

    [HttpGet("getUsersById/{id}")]

    public IActionResult getUsersById(int id)
    {
      try
      {
        using (var connection = new SqlConnection(_connectionString))
        {
          var sql = "select * FROM users where id = @id";
          var user = connection.QuerySingleOrDefault<Users>(sql, new { Id = id});

          if (user == null)
          {
            return NotFound("No user found!");
          }
          return Ok(user);
        }
      }
      catch(Exception ex) 
      {
        return StatusCode(500, $"Internal several error: {ex.Message}");
      }
    }
  }
}
