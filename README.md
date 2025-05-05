# 🛒 E-Commerce App with .NET Core & Angular

Full-stack e-commerce application built with ASP.NET Core (backend) and Angular (frontend). It features product management, user authentication, cart & order processing, and an admin dashboard.

---

## 🚀 Features

- 🛍️ Product catalog with search & filtering  
- 🔐 JWT-based authentication & role-based authorization  
- 🛒 Shopping cart + checkout workflow  
- 📦 Order management system  
- 📱 Responsive UI 

---

## 🛠️ Tech Stack

- **Backend**: ASP.NET Core 9.0, EF Core, SQL Server  
- **Frontend**: Angular 19, TypeScript, Bootstrap  
- **Auth**: JWT  
- **Database**: SQL Server / SQLite (dev)  
- **Tooling**: Visual Studio 2022, VS Code, Node.js, Angular CLI

---

## 📦 Prerequisites

| Tool            | Version         |
|-----------------|-----------------|
| .NET SDK        | 9.0             |
| Node.js         | 20.x or later   |
| Angular CLI     | 19.x            |
| SQL Server/SQLite | Installed/Docker     |
| Visual Studio / VS Code | Optional |

---

## ⚙️ Backend Setup

```bash
git clone https://github.com/patmat511/Ecommerce.git
cd API
dotnet restore
```

## Configure DB connection
Edit appsettings.json:
```json
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=ECommerceDb;Trusted_Connection=True;"
}
```

### Apply migrations & run
```bash
dotnet ef database update
dotnet run
```

### 🌐 Frontend Setup
```bash
cd ../client
npm install
```
### Start Angular dev server
```bash
ng serve
```
