using Database.DbModels;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.Session;

namespace WebApi.DomainModels
{
    public class ShoppingCart
    {
        private SessionHelper sessionHelper { get; set; }

        public ShoppingCart(IHttpContextAccessor httpContextAccessor)
        {
            this.sessionHelper = new SessionHelper(httpContextAccessor);
        }

        public void AddToShoppingCart(Product product)
        {
            sessionHelper.SetSessionWithValue(product);
        }

        public bool DeleteFromShoppingCart(Product product)
        {
            var result = sessionHelper.DeleteItemFromSession(product);
            return result;
        }

        public IEnumerable<Product> GetAllProducts()
        {
            return sessionHelper.GetAllItemsFromSession();
        }
    }
}
