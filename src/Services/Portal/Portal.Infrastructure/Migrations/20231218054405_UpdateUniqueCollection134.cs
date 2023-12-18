using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Portal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UpdateUniqueCollection134 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Collection_AlbumId",
                table: "Collection");

            migrationBuilder.DropIndex(
                name: "IX_Collection_FriendlyName",
                table: "Collection");

            migrationBuilder.AddColumn<string>(
                name: "CdnThumbnailUrl",
                table: "Album",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ThumbnailUrl",
                table: "Album",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "UC_AlbumId_FriendlyName",
                table: "Collection",
                columns: new[] { "AlbumId", "FriendlyName" },
                unique: true,
                filter: "[FriendlyName] IS NOT NULL");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "UC_AlbumId_FriendlyName",
                table: "Collection");

            migrationBuilder.DropColumn(
                name: "CdnThumbnailUrl",
                table: "Album");

            migrationBuilder.DropColumn(
                name: "ThumbnailUrl",
                table: "Album");

            migrationBuilder.CreateIndex(
                name: "IX_Collection_AlbumId",
                table: "Collection",
                column: "AlbumId");

            migrationBuilder.CreateIndex(
                name: "IX_Collection_FriendlyName",
                table: "Collection",
                column: "FriendlyName",
                unique: true,
                filter: "[FriendlyName] IS NOT NULL");
        }
    }
}
