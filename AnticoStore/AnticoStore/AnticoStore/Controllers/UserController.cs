using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using WebApi.DataWrappers;
using WebApi.Services.UserServices;
using WebApi.ViewModels;

namespace AnticoStore.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public IRegisterService _registerService { get; set; }

        public UserController()
        {
            _registerService = new RegisterService();
        }

        [HttpPost("Register")]
        public DataResult RegisterUser(UserViewModel userVM)
        {
            return _registerService.RegisterUser(userVM);
        }

        [HttpPost("Login")]
        public DataResult LogIn(LoginViewModel loginVM)
        {
            var result = _registerService.LoginUser(loginVM);

            if (result.success == false)
            {
                return new DataResult(false, "Invalid credentials.");
            }

            var claims = new List<Claim>
            {
                new Claim(type: ClaimTypes.Email, value: loginVM.Email)
            };


            ClaimsIdentity claimsIdentity = new(claims, "Cookies");
            ControllerContext.HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity));

            return new DataResult(true, "Signed in successfully");
        }

        [HttpPost("/Logout")]
        public DataResult LogOut()
        {
            ControllerContext.HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);

            return new DataResult(true, "Succesfuly signed out");
        }
    }
}
