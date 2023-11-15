using Database.DbModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.ViewModels;

namespace WebApi.Mappers
{
    public static class ToDbModel
    {
        public static Product ToProductDbModel(this ProductViewModel productViewModel)
        {
            var productDB = new Product();
            productDB.Id = productViewModel.Id;
            productDB.Name = productViewModel.Name;
            productDB.Description = productViewModel.Description;
            //brak mechanizmu do konwersji enum na int
            //productDB.CategoryId = (int)productViewModel.Category;
            productDB.IsAvaliable = productViewModel.IsAvaliable;
            productDB.FilePathPhoto = productViewModel.FilePathPhoto;
            productDB.Price = productViewModel.Price;

            return productDB;
        }

        public static Order ToOrderDbModel(this OrderViewModel orderViewModel)
        {
            var orderDb = new Order();
            orderDb.LongTextId = orderViewModel.OrderId;
            orderDb.UserId = orderViewModel.UserId;
            orderDb.ProductId = orderViewModel.ProductId;

            return orderDb;
        }

        public static User ToUserDbModel(this UserViewModel user)
        {
            var userDb = new User();
            userDb.Name = user.Name;
            userDb.Surname = user.Surname;
            userDb.Email = user.Email;
            userDb.EncryptedPassword = user.Password;
            userDb.UserName = user.UserName;

            return userDb;
        }
    }
}
