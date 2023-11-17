# Build image
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /app

COPY . .
RUN dotnet publish "src/Services/HangFireServer/HangFireServer.csproj" -c Release -o out

# Runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS runtime
WORKDIR /app
COPY --from=build /app/out .
RUN chown -R appuser:appgroup /app

# Non-root user for security
RUN addgroup --system --gid 5678 appgroup && \
    adduser --system --uid 5678 --gid 5678 appuser
USER appuser

# Configure listening port and run
ENV ASPNETCORE_URLS=http://+:5286
EXPOSE 5287
ENTRYPOINT ["dotnet", "HangFireServer.dll"]