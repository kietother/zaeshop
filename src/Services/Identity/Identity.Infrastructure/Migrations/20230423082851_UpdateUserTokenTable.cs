using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Identity.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UpdateUserTokenTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedOnUtc",
                table: "User",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "ResetPasswordOnUtc",
                table: "User",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ResetPasswordToken",
                table: "User",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ResetPasswordTokenExpiresOnUtc",
                table: "User",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedOnUtc",
                table: "User",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "VerificationToken",
                table: "User",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "VerifiedOnUtc",
                table: "User",
                type: "timestamp with time zone",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedOnUtc",
                table: "User");

            migrationBuilder.DropColumn(
                name: "ResetPasswordOnUtc",
                table: "User");

            migrationBuilder.DropColumn(
                name: "ResetPasswordToken",
                table: "User");

            migrationBuilder.DropColumn(
                name: "ResetPasswordTokenExpiresOnUtc",
                table: "User");

            migrationBuilder.DropColumn(
                name: "UpdatedOnUtc",
                table: "User");

            migrationBuilder.DropColumn(
                name: "VerificationToken",
                table: "User");

            migrationBuilder.DropColumn(
                name: "VerifiedOnUtc",
                table: "User");
        }
    }
}
