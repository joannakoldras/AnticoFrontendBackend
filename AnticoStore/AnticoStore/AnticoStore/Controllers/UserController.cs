using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
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

        [HttpPost("/Register")]
        public DataResult RegisterUser(UserViewModel userVM)
        {
            return _registerService.RegisterUser(userVM);
        }
    }
}
