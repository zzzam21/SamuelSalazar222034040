using Microsoft.Identity.Client;

var builder = WebApplication.CreateBuilder(args);
// Este es como el archivo main

// Add services to the container.


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//ADD CORS
//CORS, que significa Cross-origin resource Sharing (Compartir recursos de origen cruzado),
// es una caracteristica de seguridad implementada por los navegadores web para controlar como se
// pueden solicitar recursos entre diferentes dominios. Básicamente, CORS te permite hacer peticiones
// de recursos (como datos) desde un dominio diferente al que originó la petición

// Cada inyección de dependencias debe ser activada también 
builder.Services.AddCors(options =>
  {
    options.AddPolicy("AllowAngularLocalHost",
      policy => policy.WithOrigins("http://localhost:4200")
                      .AllowAnyHeader()
                      .AllowAnyMethod()
      );
  }
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseCors("AllowAngularLocalHost"); // Use Cors, aqui se activa

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
