using Database.DbConnection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.DataWrappers;
using WebApi.Encryption;
using WebApi.Mappers;
using WebApi.ViewModels;

namespace WebApi.Services.UserServices
{
    public class RegisterService : IRegisterService
    {
        private PasswordEncrypter _passwordEncrypter { get; set; }
        public RegisterService()
        {
            _passwordEncrypter = new PasswordEncrypter(); 
        }

        public DataResult RegisterUser(UserViewModel userVM)
        {
            using (var dbContext = new AnticoDbContext())
            {
                var user = userVM.ToUserDbModel();
                var encryptedPassword = _passwordEncrypter.Encrypt(user.EncryptedPassword);
                user.EncryptedPassword = encryptedPassword; 

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

        public DataResult LoginUser(LoginViewModel loginVM)
        {
            using (var dbContext = new AnticoDbContext())
            {
                var encryptedPassword = _passwordEncrypter.Encrypt(loginVM.Password);
                var dbUser = dbContext.Users.Where(x => x.Email == loginVM.Email &&
                x.EncryptedPassword == encryptedPassword);

                if (dbUser.Count() != 0)
                    return new DataResult(true, "User exists!");
                else 
                    return new DataResult(false, "User doesn't exist"); 
            }
        }
    }
}
