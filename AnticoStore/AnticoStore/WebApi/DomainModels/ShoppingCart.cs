using Database.DbModels;
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
        private List<Product> products { get; set; }
        private SessionHelper sessionHelper { get; set; }
        public ShoppingCart()
        {
            this.products = new List<Product>();
            this.sessionHelper = new SessionHelper();
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

        public Product FindProductInShoppingCartById(Product product)
        {
            var item = products.Find(x => x.Id == product.Id);
            return item;
        }

        public IEnumerable<Product> GetAllProducts()
        {
            return sessionHelper.GetAllItemsFromSession();
        }
    }
}
