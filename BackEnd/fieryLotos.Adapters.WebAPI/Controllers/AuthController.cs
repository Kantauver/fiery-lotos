using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using fieryLotos.Ports.Driven.QueryModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace fieryLotos.Adapters.WebAPI.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]LoginQuery user)
        {
            if (user == null)
            {
                return BadRequest("Invalid client request");
            }

            if (user.UserName == "Lotos" && user.Password == "123")
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(ClaimTypes.Role, "Manager")
                };

                var tokeOptions = new JwtSecurityToken(
                    issuer: "http://localhost:4200",
                    audience: "https://localhost:44361",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials: signinCredentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new { Token = tokenString, Success = true });
            }
            else
            {
                return Ok(new { Success = false });
            }
        }

        [HttpPost, Route("logout")]
        public IActionResult Logout([FromBody]LoginQuery user)
        {
            return Ok(new { test = "logout result" });
        }

        [HttpPost, Route("check-is-autenticated")]
        public IActionResult CheckIsAutenticated([FromBody]LoginQuery user)
        {
            return Ok(User.Identity.IsAuthenticated);
        }
    }
}
