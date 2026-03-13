using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ApiControleEstoque.Migrations;

/// <inheritdoc />
public partial class NomeDaMigration : Migration
{
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "CategoriaProduto",
            columns: table => new
            {
                id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                Nome = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                Descricao = table.Column<string>(type: "nvarchar(max)", nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_CategoriaProduto", x => x.id);
            });
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(
            name: "CategoriaProduto");
    }
}
