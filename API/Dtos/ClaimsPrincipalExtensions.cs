using System;
using System.Security.Claims;

namespace API.Dtos;

public class ClaimsPrincipalExtensions
{
    public static string RetrieveEmailFromPrincipal(this ClaimsPrincipal user)
    {
        return user?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
    }
}
