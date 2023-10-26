using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Portal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UpdatePublicContentItem73 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "FilePath",
                table: "ContentItem",
                newName: "Name");

            migrationBuilder.AddColumn<string>(
                name: "DisplayUrl",
                table: "ContentItem",
                type: "nvarchar(max)",
                nullable: true);

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

            migrationBuilder.AddColumn<string>(
                name: "OriginalUrl",
                table: "ContentItem",
                type: "nvarchar(max)",
                nullable: true);

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

            migrationBuilder.AddColumn<int>(
                name: "Size",
                table: "ContentItem",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "ThumbnailUrl",
                table: "ContentItem",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Width",
                table: "ContentItem",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "IsPublic",
                table: "Collection",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsPublic",
                table: "Album",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DisplayUrl",
                table: "ContentItem");

            migrationBuilder.DropColumn(
                name: "FileName",
                table: "ContentItem");

            migrationBuilder.DropColumn(
                name: "Height",
                table: "ContentItem");

            migrationBuilder.DropColumn(
                name: "OriginalUrl",
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

            migrationBuilder.DropColumn(
                name: "Size",
                table: "ContentItem");

            migrationBuilder.DropColumn(
                name: "ThumbnailUrl",
                table: "ContentItem");

            migrationBuilder.DropColumn(
                name: "Width",
                table: "ContentItem");

            migrationBuilder.DropColumn(
                name: "IsPublic",
                table: "Collection");

            migrationBuilder.DropColumn(
                name: "IsPublic",
                table: "Album");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "ContentItem",
                newName: "FilePath");
        }
    }
}
