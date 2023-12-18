using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Portal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddFriendlyName134 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsPublic",
                table: "ContentItem",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "FriendlyName",
                table: "Collection",
                type: "varchar(350)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FriendlyName",
                table: "Album",
                type: "varchar(350)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Collection_FriendlyName",
                table: "Collection",
                column: "FriendlyName",
                unique: true,
                filter: "[FriendlyName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Album_FriendlyName",
                table: "Album",
                column: "FriendlyName",
                unique: true,
                filter: "[FriendlyName] IS NOT NULL");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Collection_FriendlyName",
                table: "Collection");

            migrationBuilder.DropIndex(
                name: "IX_Album_FriendlyName",
                table: "Album");

            migrationBuilder.DropColumn(
                name: "IsPublic",
                table: "ContentItem");

            migrationBuilder.DropColumn(
                name: "FriendlyName",
                table: "Collection");

            migrationBuilder.DropColumn(
                name: "FriendlyName",
                table: "Album");
        }
    }
}
