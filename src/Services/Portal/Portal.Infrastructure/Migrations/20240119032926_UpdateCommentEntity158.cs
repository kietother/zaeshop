using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Portal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UpdateCommentEntity158 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comment_Collection_CollectionId",
                table: "Comment");

            migrationBuilder.AlterColumn<int>(
                name: "CollectionId",
                table: "Comment",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "AlbumId",
                table: "Comment",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Comment",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "ParentCommentId",
                table: "Comment",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Comment_AlbumId",
                table: "Comment",
                column: "AlbumId");

            migrationBuilder.CreateIndex(
                name: "IX_Comment_ParentCommentId",
                table: "Comment",
                column: "ParentCommentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_Album_AlbumId",
                table: "Comment",
                column: "AlbumId",
                principalTable: "Album",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_Collection_CollectionId",
                table: "Comment",
                column: "CollectionId",
                principalTable: "Collection",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_Comment_ParentCommentId",
                table: "Comment",
                column: "ParentCommentId",
                principalTable: "Comment",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comment_Album_AlbumId",
                table: "Comment");

            migrationBuilder.DropForeignKey(
                name: "FK_Comment_Collection_CollectionId",
                table: "Comment");

            migrationBuilder.DropForeignKey(
                name: "FK_Comment_Comment_ParentCommentId",
                table: "Comment");

            migrationBuilder.DropIndex(
                name: "IX_Comment_AlbumId",
                table: "Comment");

            migrationBuilder.DropIndex(
                name: "IX_Comment_ParentCommentId",
                table: "Comment");

            migrationBuilder.DropColumn(
                name: "AlbumId",
                table: "Comment");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Comment");

            migrationBuilder.DropColumn(
                name: "ParentCommentId",
                table: "Comment");

            migrationBuilder.AlterColumn<int>(
                name: "CollectionId",
                table: "Comment",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_Collection_CollectionId",
                table: "Comment",
                column: "CollectionId",
                principalTable: "Collection",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
