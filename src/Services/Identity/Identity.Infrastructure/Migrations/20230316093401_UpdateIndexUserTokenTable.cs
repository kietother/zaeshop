using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Identity.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UpdateIndexUserTokenTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CreatedByIp",
                table: "UserToken",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedOnUtc",
                table: "UserToken",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "ExpiresOnUtc",
                table: "UserToken",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "ReasonRevoked",
                table: "UserToken",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ReplacedByToken",
                table: "UserToken",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "RevokedByIp",
                table: "UserToken",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "RevokedOnUtc",
                table: "UserToken",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedOnUtc",
                table: "UserToken",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedByIp",
                table: "UserToken");

            migrationBuilder.DropColumn(
                name: "CreatedOnUtc",
                table: "UserToken");

            migrationBuilder.DropColumn(
                name: "ExpiresOnUtc",
                table: "UserToken");

            migrationBuilder.DropColumn(
                name: "ReasonRevoked",
                table: "UserToken");

            migrationBuilder.DropColumn(
                name: "ReplacedByToken",
                table: "UserToken");

            migrationBuilder.DropColumn(
                name: "RevokedByIp",
                table: "UserToken");

            migrationBuilder.DropColumn(
                name: "RevokedOnUtc",
                table: "UserToken");

            migrationBuilder.DropColumn(
                name: "UpdatedOnUtc",
                table: "UserToken");
        }
    }
}
