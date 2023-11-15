using Database.DbModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.ViewModels;
using WebApi.ViewModels.Enums;

namespace WebApi.Mappers
{
    public static class ToViewModel
    {
        public static ProductViewModel ToProductViewModel(this Product product)
        {
            var productVM = new ProductViewModel();
            productVM.Id = product.Id;
            productVM.Name = product.Name;
            productVM.Description = product.Description;
            //productVM.Category = (ProductCategoryEnum)product.CategoryId; //mechanizm konwertowania string na enum
            productVM.IsAvaliable = product.IsAvaliable;
            productVM.FilePathPhoto = product.FilePathPhoto;
            productVM.Price = product.Price;

            return productVM;
        }

        public static OrderViewModel ToOrderViewModel(this Order order)
        {
            var orderVM = new OrderViewModel();
            orderVM.OrderId = order.LongTextId;
            orderVM.UserId = order.UserId;
            orderVM.ProductId = order.ProductId;

            return orderVM;
        }

        public static UserViewModel ToUserViewModel(this User user)
        {
            var userVM = new UserViewModel();
            userVM.Name = user.Name;
            userVM.Surname = user.Surname;
            userVM.Email = user.Email;
            userVM.Password = user.EncryptedPassword;
            userVM.UserName = user.UserName;

            return userVM;
        }
    }
}
