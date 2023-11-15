using Database.DbConnection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.DataWrappers;
using WebApi.Mappers;
using WebApi.ViewModels;

namespace WebApi.Services.UserServices
{
    public class RegisterService : IRegisterService
    {
        public DataResult RegisterUser(UserViewModel userVM)
        {
            using (var dbContext = new AnticoDbContext())
            {
                var user = userVM.ToUserDbModel();

                var dbUser = dbContext.Users.
                    Where(x => x.Email == user.Email &&
                    x.UserName == user.UserName &&
                    x.EncryptedPassword == user.EncryptedPassword).ToList();

                if (dbUser.Count() == 0)
                {
                    dbContext.Users.Add(user);
                    dbContext.SaveChanges();
                }
                else return new DataResult(false, "User with passed data already exist");

                return new DataResult(true, "User successfully registered");
            }
        }
    }
}
