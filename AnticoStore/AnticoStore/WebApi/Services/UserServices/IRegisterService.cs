using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.DataWrappers;
using WebApi.ViewModels;

namespace WebApi.Services.UserServices
{
    public interface IRegisterService
    {
        DataResult RegisterUser(UserViewModel userVM);
    }
}
