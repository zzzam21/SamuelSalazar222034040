using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System;
using Microsoft.AspNetCore.Http;

namespace API_solicitud.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SolicitudController : Controller
  {

    private readonly string _connectionString = "Server=DESKTOP-C0LD890\\MSSQLSERVER03;DataBase=dbSolicitud;User Id=sa;Password=12345678;TrustServerCertificate=true";

    [HttpPost("registrar")]
    public IActionResult solicitud([FromBody] solicitud soli)
    {
      if (soli == null)
      {
        return BadRequest("Invalid solicitud data! ");
      }

      using (var connection = new SqlConnection(_connectionString))
      {
        var sql = "INSERT INTO soliVacaciones (name,lastName,emailUser,numberphone,managerName,managerEmail,license,startDate,endDate) values (@name,@lastName,@emailUser,@numberphone,@managerName,@managerEmail,@license,@startDate,@endDate)";
        var RowsAffected = connection.Execute(sql, new { soli.name, soli.lastName,soli.emailUser,soli.numberphone,soli.managerName,soli.managerEmail,soli.license,soli.startDate,soli.endDate });

        if (RowsAffected > 0)
        {
          return Ok("Solicitud registrada correctamente!");
        }
        else
        {
          return StatusCode(500, "An error ocurred while registering the solicitud");
        }
      }
    }
  }
}
