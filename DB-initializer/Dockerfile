FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

COPY ["DB-initializer/DB-initializer.csproj", "DB-initializer/"]
RUN dotnet restore "DB-initializer/DB-initializer.csproj"

COPY . .
RUN dotnet publish -c Release -o /app/build

FROM mcr.microsoft.com/dotnet/runtime:7.0 AS runtime
WORKDIR /app
COPY --from=build /app/build ./

ENTRYPOINT ["dotnet", "DB-initializer.dll"]
