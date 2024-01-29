using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Portal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddContentItemIndex183 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_ContentItem_CollectionId",
                table: "ContentItem");

            migrationBuilder.CreateIndex(
                name: "IX_ContentItem_CollectionId",
                table: "ContentItem",
                column: "CollectionId")
                .Annotation("SqlServer:Include", new[] { "DisplayUrl" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_ContentItem_CollectionId",
                table: "ContentItem");

            migrationBuilder.CreateIndex(
                name: "IX_ContentItem_CollectionId",
                table: "ContentItem",
                column: "CollectionId");
        }
    }
}
