using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Portal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UpdateContentItem73 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FileName",
                table: "ContentItem");

            migrationBuilder.DropColumn(
                name: "Height",
                table: "ContentItem");

            migrationBuilder.DropColumn(
                name: "ServiceExpirationUtc",
                table: "ContentItem");

            migrationBuilder.DropColumn(
                name: "ServiceImageId",
                table: "ContentItem");

            migrationBuilder.DropColumn(
                name: "ServiceUploadedUtc",
                table: "ContentItem");

            migrationBuilder.DropColumn(
                name: "ServiceViewImageUrl",
                table: "ContentItem");

            migrationBuilder.RenameColumn(
                name: "Width",
                table: "ContentItem",
                newName: "Type");

            migrationBuilder.RenameColumn(
                name: "ThumbnailUrl",
                table: "ContentItem",
                newName: "RelativeUrl");

            migrationBuilder.RenameColumn(
                name: "Size",
                table: "ContentItem",
                newName: "OrderBy");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Type",
                table: "ContentItem",
                newName: "Width");

            migrationBuilder.RenameColumn(
                name: "RelativeUrl",
                table: "ContentItem",
                newName: "ThumbnailUrl");

            migrationBuilder.RenameColumn(
                name: "OrderBy",
                table: "ContentItem",
                newName: "Size");

            migrationBuilder.AddColumn<string>(
                name: "FileName",
                table: "ContentItem",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Height",
                table: "ContentItem",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "ServiceExpirationUtc",
                table: "ContentItem",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ServiceImageId",
                table: "ContentItem",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ServiceUploadedUtc",
                table: "ContentItem",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ServiceViewImageUrl",
                table: "ContentItem",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
